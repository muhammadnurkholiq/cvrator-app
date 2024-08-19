import React from "react";
import PDFGenerate from "@/app/components/pdf";
import CircleLoading from "@/app/components/loading/circle-loading";
import { UserData } from "@/app/types/user-data";

const Page = async () => {
  let dataUser: UserData | null = null;
  let error: string | null = null;
  let loading = true;

  try {
    const storedData = localStorage.getItem("finalData");
    if (!storedData) {
      throw new Error("No data found in local storage");
    }

    const jsonData = JSON.parse(storedData);

    const response = await fetch(
      "https://services-cvrator.vercel.app/base/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: jsonData
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const responseTemp = await response.json();
    dataUser = responseTemp?.message;
  } catch (e) {
    error = e instanceof Error ? e.message : "An unknown error occurred";
  } finally {
    loading = false;
  }

  return (
    <div className="h-[100%] w-[100%]">
      {loading ? (
        <CircleLoading />
      ) : error ? (
        <div>
          <p className="text-2xl text-red-600 text-center">Error</p>
          <p className="text-red-500 text-center">{error}</p>
        </div>
      ) : !dataUser ? (
        <div>
          <p className="text-2xl text-primary-main text-center">No Data</p>
          <p className="text-primary-contrastText text-center">
            No data available to display.
          </p>
        </div>
      ) : (
        <PDFGenerate dataUser={dataUser} />
      )}
    </div>
  );
};

export default Page;
