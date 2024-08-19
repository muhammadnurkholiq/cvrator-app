"use client";

import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import QuestionField from "./question-field";
import QuestionNavigation from "./question-navigation";
import { QuestionType } from "@/app/types/question";
import {
  QuestionSchema,
  QuestionFormValues
} from "@/app/schema/question-schema";

type Props = {
  questions: QuestionType[];
};

const QuestionClient: React.FC<Props> = ({ questions }) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
    watch,
    setValue
  } = useForm<QuestionFormValues>({
    resolver: zodResolver(QuestionSchema),
    mode: "onChange"
  });

  useEffect(() => {
    const initialData = questions.reduce((acc: any, question) => {
      acc[question.id] = ""; // Set initial values to empty strings
      return acc;
    }, {} as QuestionFormValues);

    if (!localStorage.getItem("formData")) {
      localStorage.setItem("formData", JSON.stringify(initialData));
    }
  }, [questions]);

  useEffect(() => {
    const currentQuestionId = questions[questionNumber]
      .id as keyof QuestionFormValues;
    const storedData = JSON.parse(localStorage.getItem("formData") || "{}");
    const value = storedData[currentQuestionId] || "";
    setValue(currentQuestionId, value as string); // Ensure `value` is a string
  }, [questionNumber, questions, setValue]);

  const handleNextQuestion = useCallback(async () => {
    const currentQuestionId = questions[questionNumber]
      .id as keyof QuestionFormValues;
    const currentValue = getValues(currentQuestionId);

    // Trigger validation for the current question field
    const result = await trigger(currentQuestionId);

    if (!result) {
      return;
    }

    // Save the current value to localStorage
    const formData = JSON.parse(localStorage.getItem("formData") || "{}");
    formData[currentQuestionId] = currentValue as string;
    localStorage.setItem("formData", JSON.stringify(formData));

    // Move to the next question
    setQuestionNumber((prev) => Math.min(prev + 1, questions.length - 1));
  }, [questionNumber, questions, getValues, trigger]);

  const handlePrevQuestion = useCallback(async () => {
    const currentQuestionId = questions[questionNumber]
      .id as keyof QuestionFormValues;
    const currentValue = getValues(currentQuestionId);

    // Save the current value to localStorage
    const formData = JSON.parse(localStorage.getItem("formData") || "{}");
    formData[currentQuestionId] = currentValue as string;
    localStorage.setItem("formData", JSON.stringify(formData));

    // Move to the previous question
    setQuestionNumber((prev) => Math.max(prev - 1, 0));
  }, [questionNumber, questions, getValues]);

  const currentQuestion = useMemo(
    () => questions[questionNumber],
    [questions, questionNumber]
  );

  const onSubmit: SubmitHandler<QuestionFormValues> = (data) => {
    // Handle form submission here
    console.log(data);
  };

  // Get the current field's value
  const currentQuestionId = questions[questionNumber]
    .id as keyof QuestionFormValues;
  const currentFieldValue = watch(currentQuestionId) || "";

  // Refactor isNextDisabled to be more accurate
  const isFieldError = !!errors[currentQuestionId];
  const isNextDisabled = isFieldError || currentFieldValue.trim().length === 0;

  return (
    <div className="flex flex-col items-center justify-center h-[100%] p-4 gap-5">
      <p className="text-lg text-primary-contrastText">
        Question{" "}
        <span className="text-lg text-primary-main">{questionNumber + 1}</span>/
        {questions.length}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[100%] flex flex-col gap-5"
      >
        <QuestionField
          question={currentQuestion}
          register={register}
          errors={errors}
        />
        <QuestionNavigation
          handleNext={handleNextQuestion}
          handlePrev={handlePrevQuestion}
          questionNumber={questionNumber}
          totalQuestions={questions.length}
          isNextDisabled={isNextDisabled}
        />
      </form>
    </div>
  );
};

export default React.memo(QuestionClient);
