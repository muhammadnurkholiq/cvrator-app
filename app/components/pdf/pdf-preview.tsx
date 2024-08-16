import React from "react";

import ResumeTemplate1 from "@/app/templates/resume-template-1";
import ResumeTemplate2 from "@/app/templates/resume-template-2";
import ResumeTemplate3 from "@/app/templates/resume-template-3";

const templateMap: Record<string, React.FC> = {
  "Template 1": ResumeTemplate1,
  "Template 2": ResumeTemplate2,
  "Template 3": ResumeTemplate3
};

interface PDFPreviewProps {
  selectedTemplate: string;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ selectedTemplate }) => {
  const TemplateComponent = templateMap[selectedTemplate] || null;

  return (
    <>
      {TemplateComponent ? (
        <TemplateComponent />
      ) : (
        <p>Select a template to preview.</p>
      )}
    </>
  );
};

export default PDFPreview;
