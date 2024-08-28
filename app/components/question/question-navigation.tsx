import React from "react";
import { Button } from "@headlessui/react";
import QuestionDialogImage from "./question-dialog-image";
import { QuestionType } from "@/app/types/question";

type Props = {
  handleNext: () => void;
  handlePrev: () => void;
  questionNumber: number;
  totalQuestions: number;
  isNextDisabled: boolean;
  handleFinish: () => void;
  question: QuestionType;
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
    handleFinish,
    question
  }: Props) => {
    const isLastQuestion = questionNumber === totalQuestions - 1;

    // dialog image
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    return (
      <div className="flex justify-between">
        <Button
          type="button"
          onClick={handlePrev}
          disabled={questionNumber === 0}
          className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500 text-sm"
        >
          Previous
        </Button>
        <Button
          type="button"
          onClick={handleOpenDialog}
          className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500 text-sm"
        >
          Preview Example Output
        </Button>
        {isLastQuestion ? (
          <Button
            type="button"
            onClick={handleFinish}
            disabled={isNextDisabled}
            className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500 text-sm"
          >
            Finish
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleNext}
            disabled={isNextDisabled}
            className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500 text-sm"
          >
            Next
          </Button>
        )}

        <QuestionDialogImage
          image={question?.image}
          open={openDialog}
          close={handleCloseDialog}
        />
      </div>
    );
  }
);

QuestionNavigation.displayName = "QuestionNavigation";

export default QuestionNavigation;
