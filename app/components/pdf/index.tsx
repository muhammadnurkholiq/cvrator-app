"use client";

import React, { useState, Suspense } from "react";
import { Button } from "@headlessui/react";

import CircleLoading from "../loading/circle-loading";

// components
import PDFPreview from "./pdf-preview";
import TemplateDropdown from "./template-dropdown";

// type
import { UserData } from "@/app/types/user-data";

interface PageProps {
  dataUser: UserData;
}

const PDFGenerate = ({ dataUser }: PageProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState("Template 1");

  const printContent = async () => {
    window.print();
  };

  return (
    <Suspense fallback={<CircleLoading />}>
      <div className="flex flex-col items-center">
        <div className="w-[100%] flex flex-row justify-between items-end mb-5 no-print">
          <TemplateDropdown
            selectedTemplate={selectedTemplate}
            onChange={setSelectedTemplate}
            options={[{ id: 1, name: "Template 1" }]}
          />

          <div>
            <Button
              onClick={printContent}
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              Print PDF
            </Button>
          </div>
        </div>
        <div className="h-[297mm] w-[210mm] print-only">
          <PDFPreview dataUser={dataUser} selectedTemplate={selectedTemplate} />
        </div>
      </div>
    </Suspense>
  );
};

export default PDFGenerate;
