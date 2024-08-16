import React from "react";
import { Field, Label, Select, Description } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

interface TemplateDropdownProps {
  selectedTemplate: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  options: { id: number; name: string }[];
}

const TemplateDropdown: React.FC<TemplateDropdownProps> = ({
  selectedTemplate,
  onChange,
  options
}) => {
  return (
    <div className="w-full max-w-md">
      <Field className="flex flex-col gap-2">
        <Label className="text-sm font-medium text-white">
          Select Template
        </Label>
        <Description className="text-sm text-white/50">
          Choose the template for the preview.
        </Description>
        <div className="relative">
          <Select
            value={selectedTemplate}
            onChange={(e) => onChange(e.target.value)}
            className={clsx(
              "block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 cursor-pointer",
              "*:text-black"
            )}
          >
            {options.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </Select>
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 w-4 h-4 fill-white/60"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
  );
};

export default TemplateDropdown;
