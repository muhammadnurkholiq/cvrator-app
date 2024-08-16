import Link from "next/link";
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
  const isLastQuestion = questionNumber === totalQuestions - 1;
  return (
    <div className="flex flex-row items-center justify-between">
      <button
        onClick={handlePrev}
        disabled={questionNumber === 0}
        className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
      >
        Previous
      </button>
      {!isLastQuestion ? (
        <button
          onClick={handleNext}
          disabled={questionNumber === totalQuestions - 1}
          className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
        >
          Next
        </button>
      ) : (
        <Link
          href="/generate"
          className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
        >
          Finish
        </Link>
      )}
    </div>
  );
};

export default React.memo(QuestionNavigation);
