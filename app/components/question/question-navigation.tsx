import React from "react";

type Props = {
  handleNext: () => void;
  handlePrev: () => void;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionNavigation: React.FC<Props> = ({
  handleNext,
  handlePrev,
  questionNumber,
  totalQuestions
}) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <button
        onClick={handlePrev}
        disabled={questionNumber === 0}
        className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={questionNumber === totalQuestions - 1}
        className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
      >
        Next
      </button>
    </div>
  );
};

export default React.memo(QuestionNavigation);
