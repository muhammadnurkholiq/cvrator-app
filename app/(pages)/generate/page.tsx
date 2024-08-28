"use client";

import React, { useEffect, useState } from "react";
import PDFGenerate from "@/app/components/pdf";
import CircleLoading from "@/app/components/loading/circle-loading";
import { UserData } from "@/app/types/user-data";

const Page: React.FC = () => {
  const [dataUser, setDataUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const replaceEmptyStrings = (data: any) => {
    for (const key in data) {
      if (typeof data[key] === "string" && data[key].trim() === "") {
        data[key] = "-";
      } else if (typeof data[key] === "object" && data[key] !== null) {
        replaceEmptyStrings(data[key]);
      }
    }
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before starting a new fetch
      try {
        // Fetch data from local storage and send it to the API
        const userData = localStorage.getItem("user-data");
        if (!userData) {
          throw new Error("No data found in local storage");
        }

        let jsonData = JSON.parse(userData);

        // Ganti string kosong dengan "-"
        jsonData = replaceEmptyStrings(jsonData);

        const response = await fetch(
          "https://services-cvrator.vercel.app/base/generate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result: { message: UserData } = await response.json();
        setDataUser(result?.message);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <CircleLoading />;
  }

  return (
    <div className="h-[100%] w-[100%]">
      {error ? (
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
