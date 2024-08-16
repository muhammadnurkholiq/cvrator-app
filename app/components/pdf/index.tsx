"use client";

import React, { useState } from "react";
import PDFPreview from "./pdf-preview";
import TemplateDropdown from "./template-dropdown";

const PDFGenerate: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState("Template 1");

  return (
    <div className="flex flex-col gap-5">
      <TemplateDropdown
        selectedTemplate={selectedTemplate}
        onChange={setSelectedTemplate}
        options={[
          { id: 1, name: "Template 1" },
          { id: 2, name: "Template 2" },
          { id: 3, name: "Template 3" }
        ]}
      />
      <PDFPreview selectedTemplate={selectedTemplate} />
    </div>
  );
};

export default PDFGenerate;
