"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import clsx from "clsx";
import { Description, Field, Input, Label } from "@headlessui/react";

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

  console.log(listQuestion);

  return (
    <div className="h-[100%] ">
      {listQuestion?.length === 0 ? (
        <div className="h-[100%]">
          <CircleLoading />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[100%] p-4 gap-5">
          <p className={"text-lg text-primary-contrastText"}>
            Question{" "}
            <span className={"text-lg text-primary-main"}>
              {questionNumber + 1}
            </span>
            /{listQuestion.length}
          </p>

          <div className="w-[100%] flex flex-col gap-5">
            <div>
              <Field className="flex flex-col gap-2">
                <Label className="text-2xl font-medium text-white">
                  <Typewriter
                    key={questionNumber}
                    words={[listQuestion[questionNumber]?.text]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={0}
                  />
                </Label>
                <Description className="text-sm/6 text-white/50">
                  <Typewriter
                    key={questionNumber}
                    words={[listQuestion[questionNumber]?.desc]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={40}
                    deleteSpeed={0}
                  />
                </Description>
                <Input
                  className={clsx(
                    "block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                  autoFocus
                />
              </Field>
            </div>

            <div className="flex flex-row items-center justify-between">
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
        </div>
      )}
    </div>
  );
};

export default Question;
