import React from "react";

import ResumeTemplate1 from "@/app/templates/resume-template-1";

const templateMap: Record<string, React.FC> = {
  "Template 1": ResumeTemplate1
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
