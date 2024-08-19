import React from "react";

type Props = {
  handleNext: () => void;
  handlePrev: () => void;
  questionNumber: number;
  totalQuestions: number;
  isNextDisabled: boolean; // Ensure this prop is received and used
};

const QuestionNavigation: React.FC<Props> = ({
  handleNext,
  handlePrev,
  questionNumber,
  totalQuestions,
  isNextDisabled
}) => {
  const isLastQuestion = questionNumber === totalQuestions - 1;

  return (
    <div className="flex flex-row items-center justify-between">
      <button
        onClick={handlePrev}
        disabled={questionNumber === 0}
        className="bg-gray-900 text-white border border-gray-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-gray-500"
      >
        Previous
      </button>
      {!isLastQuestion ? (
        <button
          onClick={handleNext}
          disabled={isNextDisabled} // Apply the disabled state
          className="bg-gray-900 text-white border border-gray-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-gray-500"
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          className="bg-gray-900 text-white border border-gray-900 hover:bg-primary-main rounded py-2 px-4"
        >
          Finish
        </button>
      )}
    </div>
  );
};

export default React.memo(QuestionNavigation);
