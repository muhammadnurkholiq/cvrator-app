import {
  Transition,
  TransitionChild,
  Dialog,
  DialogPanel,
  Button
} from "@headlessui/react";
import { Fragment } from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  open: boolean;
  close: () => void;
  image: StaticImageData;
};

/**
 * Dialog component for final submission confirmation.
 */
const QuestionDialogImage: React.FC<Props> = ({ open, close, image }) => {
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
                  <DialogPanel className="w-full max-w-lg h-[80vh] rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-10 ease-in-out flex flex-col items-center gap-5">
                    <div className="w-full h-[90%] overflow-y-auto">
                      <Image
                        src={image.src}
                        alt="Example Output"
                        width={image.width}
                        height={image.height}
                        placeholder="blur"
                        blurDataURL={image.blurDataURL}
                        quality={100}
                        priority
                      />
                    </div>
                    <Button
                      className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500 text-sm"
                      onClick={close}
                    >
                      Close
                    </Button>
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

export default QuestionDialogImage;
