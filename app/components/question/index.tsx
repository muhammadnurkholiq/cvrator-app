"use client";

import React from "react";
import QuestionClient from "./question-client";
import Loading from "../loading/circle-loading";
import { QuestionType } from "@/app/types/question";

type Props = {
  questions: QuestionType[];
};

/**
 * Component to handle question list display and loading state.
 */
const Question = ({ questions }: Props) => {
  // Show loading indicator if no questions are available
  if (questions.length === 0) {
    return <Loading />;
  }

  // Render the QuestionClient component with provided questions
  return <QuestionClient questions={questions} />;
};

export default Question;
