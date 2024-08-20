import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import CircleLoading from "../loading/circle-loading";
import ResumeTemplate1 from "@/app/templates/resume-template-1";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

// type
import { UserData } from "@/app/types/user-data";

const templateMap: Record<string, React.FC<{ dataUser: UserData }>> = {
  "Template 1": ResumeTemplate1
};

interface PDFPreviewProps {
  dataUser: UserData;
  selectedTemplate: string;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({
  dataUser,
  selectedTemplate
}) => {
  const TemplateComponent = templateMap[selectedTemplate] || null;

  return (
    <>
      {TemplateComponent ? (
        <Suspense fallback={<CircleLoading />}>
          <PDFViewer
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <TemplateComponent dataUser={dataUser} />
          </PDFViewer>
        </Suspense>
      ) : (
        <p>Select a template to preview.</p>
      )}
    </>
  );
};

export default PDFPreview;
