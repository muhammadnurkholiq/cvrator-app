"use client";

import QuestionClient from "./question-client";
import Loading from "../loading/circle-loading";

// types
import { QuestionType } from "@/app/types/question";

type Props = {
  questions: QuestionType[];
};

const Question = ({ questions }: Props) => {
  if (questions.length === 0) {
    return <Loading />;
  }

  return <QuestionClient questions={questions} />;
};

export default Question;
