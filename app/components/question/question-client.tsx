import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@headlessui/react";
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

interface ListQuestionAnswerProps {
  name: string;
  value: string;
}

const ListQuestionAnswer: React.FC<ListQuestionAnswerProps> = ({
  name,
  value
}) => (
  <div className="flex flex-row gap-2 text-sm">
    <div className="w-3/12 flex flex-row justify-between">
      <p>{name}</p>
      <p>:</p>
    </div>
    <div className="w-9/12">
      <p>{value}</p>
    </div>
  </div>
);

/**
 * Component to handle question display and navigation with form handling.
 */
const QuestionClient: React.FC<Props> = ({ questions }) => {
  const [confirm, setConfirm] = useState(false);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [openDialog, setOpenDialog] = useState(false);

  const {
    register,
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
      ?.id as keyof QuestionFormValues;
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

  // dialog
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  // state
  const handleConfirm = () => {
    const currentQuestionId = questions[questionNumber]
      .id as keyof QuestionFormValues;
    const currentValue = getValues(currentQuestionId);

    // Save the current value to localStorage
    const formData = JSON.parse(localStorage.getItem("user-data") || "{}");
    formData[currentQuestionId] = currentValue;
    localStorage.setItem("user-data", JSON.stringify(formData));

    setConfirm(true);
  };
  const handleCancel = () => setConfirm(false);

  const currentQuestionId = questions[questionNumber]
    .id as keyof QuestionFormValues;
  const currentFieldValue = watch(currentQuestionId) || "";

  const isFieldError = !!errors[currentQuestionId];

  const nullableFields: (keyof QuestionFormValues)[] = ["certificates"];

  const isNextDisabled =
    isFieldError ||
    (!nullableFields.includes(currentQuestionId) &&
      typeof currentFieldValue === "string" &&
      currentFieldValue.trim().length === 0);

  return (
    <div>
      {!confirm ? (
        <div className="flex flex-col items-center justify-center h-[100%] p-4 gap-5">
          <p className="text-lg text-primary-contrastText">
            Question{" "}
            <span className="text-lg text-primary-main">
              {questionNumber + 1}
            </span>
            /{questions.length}
          </p>
          <div className="w-[100%] flex flex-col gap-5">
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
              handleFinish={handleConfirm}
              question={currentQuestion}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[100%]">
          <div className="max-w-lg p-6 border border-primary-contrastText rounded-lg shadow bg-background-main text-gray-200 flex flex-col gap-3">
            <p className="text-center text-2xl text-primary-main mb-2">
              INFORMATION
            </p>
            <ListQuestionAnswer name="Name" value={getValues("name")} />
            <ListQuestionAnswer name="Age" value={getValues("age")} />
            <ListQuestionAnswer name="Email" value={getValues("email")} />
            <ListQuestionAnswer name="Phone" value={getValues("phone")} />
            <ListQuestionAnswer name="Address" value={getValues("address")} />
            <ListQuestionAnswer name="Skills" value={getValues("skills")} />
            <ListQuestionAnswer
              name="Experiences"
              value={getValues("experiences")}
            />
            <ListQuestionAnswer
              name="Education"
              value={getValues("recent_education")}
            />
            <ListQuestionAnswer
              name="Certificates"
              value={getValues("certificates") || "-"}
            />
            <div className="flex flex-row items-center justify-center gap-5 mt-2">
              <Button
                type="button"
                onClick={handleCancel}
                className="bg-grey-900 text-white border border-grey-900 hover:bg-primary-main rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500 text-sm"
              >
                Re-Check
              </Button>
              <Button
                type="button"
                onClick={handleOpenDialog}
                className="bg-primary-main text-white border border-grey-900 hover:bg-primary-dark rounded py-2 px-4 disabled:cursor-not-allowed disabled:text-grey-500 text-sm"
              >
                Generate CV
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for final submission confirmation */}
      <QuestionDialog open={openDialog} close={handleCloseDialog} />
    </div>
  );
};

export default React.memo(QuestionClient);
