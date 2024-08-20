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
const QuestionDialog: React.FC<Props> = ({ open, close }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={() => {}}>
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
                  <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-10 ease-in-out">
                    <DialogTitle
                      as="h3"
                      className="text-base/7 font-medium text-white"
                    >
                      Confirmation
                    </DialogTitle>
                    <p className="mt-2 text-sm/6 text-white/50">
                      Progress your data to CV
                    </p>
                    <div className="mt-4">
                      <div className="mt-4 flex flex-row justify-center items-center gap-5">
                        <Button
                          className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600"
                          onClick={close}
                        >
                          Cancel
                        </Button>
                        <Link
                          href="/generate"
                          className="inline-flex items-center gap-2 rounded-md bg-primary-main py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-primary-dark"
                        >
                          Generate
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

export default QuestionDialog;
