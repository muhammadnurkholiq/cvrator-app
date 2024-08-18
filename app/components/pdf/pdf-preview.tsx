import React from "react";
import ResumeTemplate1 from "@/app/templates/resume-template-1";

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
        <TemplateComponent dataUser={dataUser} />
      ) : (
        <p>Select a template to preview.</p>
      )}
    </>
  );
};

export default PDFPreview;
