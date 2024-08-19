import { Button, DialogPanel, DialogTitle } from "@headlessui/react";

export default function QuestionDialog({
  close,
  submit
}: {
  close: () => void;
  submit: any;
}) {
  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/30">
      <div className="flex min-h-full items-center justify-center p-4">
        <DialogPanel
          transition
          className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg ease-out"
        >
          <DialogTitle
            as="h3"
            className="text-lg font-medium text-gray-900 text-center"
          >
            Information
          </DialogTitle>
          <p className="mt-2 text-sm text-gray-600 text-center">
            Progress your data to CV
          </p>
          <div className="mt-4 flex flex-row justify-center items-center gap-5">
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-md hover:bg-gray-800"
              onClick={close}
            >
              Cancel
            </Button>
            <Button
              className="inline-flex items-center gap-2 rounded-md bg-primary-main py-1.5 px-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark"
              onClick={submit}
            >
              Generate
            </Button>
          </div>
        </DialogPanel>
      </div>
    </div>
  );
}
