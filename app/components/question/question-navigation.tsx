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

/**
 * Component to handle navigation between questions.
 */
const QuestionNavigation = React.memo(
  ({
    handleNext,
    handlePrev,
    questionNumber,
    totalQuestions,
    isNextDisabled,
    handleOpenDialog
  }: Props) => {
    const isLastQuestion = questionNumber === totalQuestions - 1;

    return (
      <div className="flex justify-between">
        <Button
          type="button"
          onClick={handlePrev}
          disabled={questionNumber === 0}
          className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
        >
          Previous
        </Button>
        {isLastQuestion ? (
          <Button
            type="button"
            onClick={handleOpenDialog}
            disabled={isNextDisabled}
            className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
          >
            Finish
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleNext}
            disabled={isNextDisabled}
            className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
          >
            Next
          </Button>
        )}
      </div>
    );
  }
);

QuestionNavigation.displayName = "QuestionNavigation";

export default QuestionNavigation;
