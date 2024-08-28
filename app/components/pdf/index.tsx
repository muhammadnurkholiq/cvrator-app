"use client";

import React, { useState, Suspense } from "react";
import { Button } from "@headlessui/react";
import { ArrowUturnLeftIcon } from "@heroicons/react/16/solid";

import CircleLoading from "../loading/circle-loading";

// components
import PDFPreview from "./pdf-preview";
import PDFDialog from "./pdf-dialog";
import TemplateDropdown from "./template-dropdown";

// type
import { UserData } from "@/app/types/user-data";

interface PageProps {
  dataUser: UserData;
}

const PDFGenerate = ({ dataUser }: PageProps) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("Template 1");

  // dialog
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

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
              onClick={handleOpenDialog}
              className="inline-flex items-center gap-2 rounded-md bg-primary-main py-1.5 px-3  text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
            >
              Back
              <ArrowUturnLeftIcon className="w-5 text-primary-contrastText" />
            </Button>
          </div>
        </div>
        <div className="h-[297mm] w-[210mm] print-only">
          <PDFPreview dataUser={dataUser} selectedTemplate={selectedTemplate} />
        </div>
      </div>

      {/* Modal for final submission confirmation */}
      <PDFDialog open={openDialog} close={handleCloseDialog} />
    </Suspense>
  );
};

export default PDFGenerate;
