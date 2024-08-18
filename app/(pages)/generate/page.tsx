import React from "react";
import PDFGenerate from "@/app/components/pdf";
import CircleLoading from "@/app/components/loading/circle-loading";
import { UserData } from "@/app/types/user-data";

async function fetchUserData(): Promise<UserData> {
  const response = await fetch(
    `${process.env.NEXT_APP_URL}/goal/response.json`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.message;
}

const Page: React.FC = async () => {
  let dataUser: UserData | null = null;

  try {
    dataUser = await fetchUserData();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

  if (!dataUser) {
    return <CircleLoading />;
  }

  return (
    <div className="h-[100%] w-[100%]">
      <PDFGenerate dataUser={dataUser} />
    </div>
  );
};

export default Page;
