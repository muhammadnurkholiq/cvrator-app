"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

// types
import { QuestionType } from "@/app/types/question";
import CircleLoading from "./loading/circle-loading";

type Props = {
  questions: QuestionType[];
};

const Question = ({ questions }: Props) => {
  const [listQuestion, setListQuestions] = useState<QuestionType[]>([]);
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  useEffect(() => {
    setListQuestions(questions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNextQuestion = () => {
    if (questionNumber < listQuestion?.length) {
      setQuestionNumber(questionNumber + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (questionNumber > 0) {
      setQuestionNumber(questionNumber - 1);
    }
  };

  return (
    <div className="h-[100%] ">
      {listQuestion?.length === 0 ? (
        <div className="h-[100%]">
          <CircleLoading />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[100%] p-4 gap-20">
          <div className="flex flex-col items-center justify-center gap-5">
            <p className={"text-lg text-primary-contrastText"}>
              Question{" "}
              <span className={"text-lg text-primary-main"}>
                {questionNumber + 1}
              </span>
              /{listQuestion.length}
            </p>
            <div className={"text-2xl md:text-4xl text-primary-contrastText"}>
              <Typewriter
                key={questionNumber}
                words={[listQuestion[questionNumber]?.text]}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={0}
              />
            </div>
          </div>

          <div className="w-[50%] flex flex-row items-center justify-between">
            <button
              onClick={handlePrevQuestion}
              disabled={questionNumber === 0}
              className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={questionNumber === listQuestion?.length - 1}
              className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
