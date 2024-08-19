import React from "react";
import { Button } from "@headlessui/react";

type Props = {
  handleNext: () => void;
  handlePrev: () => void;
  questionNumber: number;
  totalQuestions: number;
  isNextDisabled: boolean;
  handleOpenDialog: () => void;
};

const QuestionNavigation: React.FC<Props> = ({
  handleNext,
  handlePrev,
  questionNumber,
  totalQuestions,
  isNextDisabled,
  handleOpenDialog
}) => {
  const isLastQuestion = questionNumber === totalQuestions - 1;

  return (
    <div className="flex flex-row items-center justify-between">
      <Button
        onClick={handlePrev}
        disabled={questionNumber === 0}
        className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
      >
        Previous
      </Button>
      <Button
        onClick={() => {
          if (isLastQuestion) {
            handleOpenDialog();
          } else {
            handleNext();
          }
        }}
        disabled={isNextDisabled}
        className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
      >
        {!isLastQuestion ? "Next" : "Finish"}
      </Button>
    </div>
  );
};

export default React.memo(QuestionNavigation);
