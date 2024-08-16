"use client";

import React, { useState, useCallback, useMemo } from "react";
import QuestionField from "./question-field";
import QuestionNavigation from "./question-navigation";
import { QuestionType } from "@/app/types/question";

type Props = {
  questions: QuestionType[];
};

const QuestionClient: React.FC<Props> = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  const handleNextQuestion = useCallback(() => {
    setQuestionNumber((prev) => Math.min(prev + 1, questions.length - 1));
  }, [questions.length]);

  const handlePrevQuestion = useCallback(() => {
    setQuestionNumber((prev) => Math.max(prev - 1, 0));
  }, []);

  const currentQuestion = useMemo(
    () => questions[questionNumber],
    [questions, questionNumber]
  );

  return (
    <div className="flex flex-col items-center justify-center h-[100%] p-4 gap-5">
      <p className="text-lg text-primary-contrastText">
        Question{" "}
        <span className="text-lg text-primary-main">{questionNumber + 1}</span>/
        {questions.length}
      </p>

      <div className="w-[100%] flex flex-col gap-5">
        <QuestionField question={currentQuestion} />
        <QuestionNavigation
          handleNext={handleNextQuestion}
          handlePrev={handlePrevQuestion}
          questionNumber={questionNumber}
          totalQuestions={questions.length}
        />
      </div>
    </div>
  );
};

export default React.memo(QuestionClient);
