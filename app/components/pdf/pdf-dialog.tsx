import {
  Transition,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  Button
} from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

type Props = {
  open: boolean;
  close: () => void;
};

/**
 * Dialog component for final submission confirmation.
 */
const PDFDialog: React.FC<Props> = ({ open, close }) => {
  const handleResetData = () => {
    localStorage.clear(); // Clear all data from localStorage
    close(); // Close the dialog
  };
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={() => {}}>
        {/* Overlay transition */}
        <TransitionChild
          as={Fragment}
          enter="ease-in-out duration-10"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-10"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            {/* Dialog panel transition */}
            <TransitionChild
              as={Fragment}
              enter="ease-in-out duration-10"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in-out duration-10"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                  <DialogPanel className="w-full max-w-lg rounded-xl bg-background-main p-6 backdrop-blur-2xl duration-10 ease-in-out">
                    <DialogTitle className="text-lg font-medium text-white">
                      Confirmation
                    </DialogTitle>
                    <p className="mt-4 text-sm/6 text-white/50">
                      Are you sure you want to return to the first page? Your
                      current progress will be lost.
                    </p>
                    <div className="mt-4">
                      <div className="mt-4 flex flex-row justify-center items-center gap-5">
                        <Button
                          className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500 text-sm"
                          onClick={close}
                        >
                          Cancel
                        </Button>
                        <Link
                          href="/"
                          onClick={handleResetData}
                          className="bg-primary-main text-white border border-grey-900 hover:bg-primary-dark rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500 text-sm"
                        >
                          Yes
                        </Link>
                      </div>
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PDFDialog;
