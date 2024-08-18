import React from "react";
import PDFGenerate from "@/app/components/pdf";
import CircleLoading from "@/app/components/loading/circle-loading";
import { UserData } from "@/app/types/user-data";
import Response from "@/app/goal/response.json";

const Page: React.FC = async () => {
  const dataUser: UserData | null = Response.message;

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
