"use client";

import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@headlessui/react";

import CircleLoading from "../loading/circle-loading";

// components
import PDFPreview from "./pdf-preview";
import TemplateDropdown from "./template-dropdown";

const PDFGenerate: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState("Template 1");

  useEffect(() => {
    // Set loading to false after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const generatePDF = async (): Promise<void> => {
    const input = document.getElementById("pdf-content");
    if (input) {
      try {
        // Use a higher scale for better quality
        const canvas = await html2canvas(input, {
          scale: 1.5,
          allowTaint: true,
          useCORS: true
        });

        // A4 size dimensions in millimeters
        const a4Width = 210; // A4 width in mm
        const a4Height = 297; // A4 height in mm

        const pdf = new jsPDF({
          orientation: "portrait", // Portrait orientation for A4
          unit: "mm",
          format: [a4Width, a4Height] // A4 size in mm
        });

        // Use PNG format for lossless quality
        const imgData = canvas.toDataURL("image/png");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Calculate scaling factors to maintain aspect ratio
        const widthRatio = pdfWidth / imgWidth;
        const heightRatio = pdfHeight / imgHeight;
        const ratio = Math.min(widthRatio, heightRatio);

        const scaledWidth = imgWidth * ratio;
        const scaledHeight = imgHeight * ratio;

        const xOffset = 0;
        const yOffset = 0;

        pdf.addImage(
          imgData,
          "PNG",
          xOffset,
          yOffset,
          scaledWidth,
          scaledHeight
        );

        // Convert the PDF to a blob
        const pdfBlob = pdf.output("blob");

        // Save the PDF file
        saveAs(pdfBlob, "CV.pdf");
      } catch (error) {
        console.error("Error generating PDF:", error);
      }
    } else {
      console.error("Element not found");
    }
  };

  return (
    <>
      {isLoading ? (
        <div>
          <CircleLoading />
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex flex-row justify-between items-end">
            <TemplateDropdown
              selectedTemplate={selectedTemplate}
              onChange={setSelectedTemplate}
              options={[
                { id: 1, name: "Template 1" },
                { id: 2, name: "Template 2" },
                { id: 3, name: "Template 3" }
              ]}
            />

            <div>
              <Button
                onClick={generatePDF}
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                Save changes
              </Button>
            </div>
          </div>
          <div className="w-[100%] border border-gray-300 p-4 rounded-lg shadow-lg">
            <div id="pdf-content">
              <PDFPreview selectedTemplate={selectedTemplate} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PDFGenerate;
