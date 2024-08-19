import React from "react";
import { Field, Input, Textarea, Label, Description } from "@headlessui/react";
import clsx from "clsx";
import { Typewriter } from "react-simple-typewriter";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { QuestionType } from "@/app/types/question";

type Props = {
  question: QuestionType;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};

const QuestionField: React.FC<Props> = ({ question, register, errors }) => {
  if (!question) {
    return <p className="text-red-500">Question not found.</p>;
  }

  const errorKey = question.id;

  return (
    <Field className="flex flex-col gap-2">
      <Label className="text-2xl font-medium text-white">
        <Typewriter
          key={question.text}
          words={[question.text || ""]}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={0}
        />
      </Label>
      <Description className="text-sm/6 text-white/50">
        Description:{" "}
        <Typewriter
          key={question.id + "_desc"}
          words={[question.desc || ""]}
          cursor
          cursorStyle="_"
          typeSpeed={25}
          deleteSpeed={0}
        />
      </Description>
      <Description className="text-sm/6 text-white/50">
        Example of input:{" "}
        <Typewriter
          key={question.id + "_example"}
          words={[question.example || ""]}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={0}
        />
      </Description>
      {question.line === "single" ? (
        <>
          <Input
            type="text"
            autoComplete="off"
            className={clsx(
              "block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white placeholder:text-white/50 focus:ring-0",
              errors[errorKey] && "border-2 border-red-500"
            )}
            {...register(errorKey, {
              onChange: (e) => {
                const formData = JSON.parse(
                  localStorage.getItem("formData") || "{}"
                );
                formData[errorKey] = e.target.value;
                localStorage.setItem("formData", JSON.stringify(formData));
              }
            })}
          />
          {errors[errorKey] && (
            <p className="text-sm/6 text-red-500">
              {typeof errors[errorKey]?.message === "string"
                ? errors[errorKey]?.message
                : "An error occurred"}
            </p>
          )}
        </>
      ) : (
        <>
          <Textarea
            className={clsx(
              "block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white placeholder:text-white/50 focus:ring-0",
              errors[errorKey] && "border-2 border-red-500"
            )}
            {...register(errorKey, {
              onChange: (e) => {
                const formData = JSON.parse(
                  localStorage.getItem("formData") || "{}"
                );
                formData[errorKey] = e.target.value;
                localStorage.setItem("formData", JSON.stringify(formData));
              }
            })}
          />
          {errors[errorKey] && (
            <p className="text-sm/6 text-red-500">
              {typeof errors[errorKey]?.message === "string"
                ? errors[errorKey]?.message
                : "An error occurred"}
            </p>
          )}
        </>
      )}
    </Field>
  );
};

export default QuestionField;
