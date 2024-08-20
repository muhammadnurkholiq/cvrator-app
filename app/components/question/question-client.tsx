import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import QuestionField from "./question-field";
import QuestionNavigation from "./question-navigation";
import QuestionDialog from "./question-dialog";
import { QuestionType } from "@/app/types/question";
import {
  QuestionSchema,
  QuestionFormValues
} from "@/app/schema/question-schema";

type Props = {
  questions: QuestionType[];
};

/**
 * Component to handle question display and navigation with form handling.
 */
const QuestionClient: React.FC<Props> = ({ questions }) => {
  const router = useRouter();
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [openDialog, setOpenDialog] = useState(false);

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

  // Load data from localStorage when questionNumber changes
  useEffect(() => {
    const currentQuestionId = questions[questionNumber]
      .id as keyof QuestionFormValues;
    const storedData = JSON.parse(localStorage.getItem("user-data") || "{}");
    const value = storedData[currentQuestionId] || "";
    setValue(currentQuestionId, value as string);
  }, [questionNumber, questions, setValue]);

  // Save data to localStorage and move to the next question
  const handleNextQuestion = useCallback(async () => {
    const currentQuestionId = questions[questionNumber]
      .id as keyof QuestionFormValues;
    const currentValue = getValues(currentQuestionId);

    // Trigger validation for the current question field
    const result = await trigger(currentQuestionId);
    if (!result) return;

    // Save the current value to localStorage
    const formData = JSON.parse(localStorage.getItem("user-data") || "{}");
    formData[currentQuestionId] = currentValue;
    localStorage.setItem("user-data", JSON.stringify(formData));

    // Move to the next question
    setQuestionNumber((prev) => Math.min(prev + 1, questions.length - 1));
  }, [questionNumber, questions, getValues, trigger]);

  // Save data to localStorage and move to the previous question
  const handlePrevQuestion = useCallback(() => {
    const currentQuestionId = questions[questionNumber]
      .id as keyof QuestionFormValues;
    const currentValue = getValues(currentQuestionId);

    // Save the current value to localStorage
    const formData = JSON.parse(localStorage.getItem("user-data") || "{}");
    formData[currentQuestionId] = currentValue;
    localStorage.setItem("user-data", JSON.stringify(formData));

    // Move to the previous question
    setQuestionNumber((prev) => Math.max(prev - 1, 0));
  }, [questionNumber, questions, getValues]);

  const currentQuestion = useMemo(
    () => questions[questionNumber],
    [questions, questionNumber]
  );

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  // Handle form submission
  const onSubmit: SubmitHandler<QuestionFormValues> = () => {
    router.push("/generate");
    handleCloseDialog();
  };

  const currentQuestionId = questions[questionNumber]
    .id as keyof QuestionFormValues;
  const currentFieldValue = watch(currentQuestionId) || "";

  const isFieldError = !!errors[currentQuestionId];
  const isNextDisabled =
    isFieldError ||
    (typeof currentFieldValue === "string" &&
      currentFieldValue.trim().length === 0);

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
          handleOpenDialog={handleOpenDialog}
        />
      </form>

      {/* Modal for final submission confirmation */}
      <QuestionDialog open={openDialog} close={handleCloseDialog} />
    </div>
  );
};

export default React.memo(QuestionClient);
