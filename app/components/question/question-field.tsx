import React from "react";
import { Field, Input, Textarea, Label, Description } from "@headlessui/react";
import clsx from "clsx";
import { Typewriter } from "react-simple-typewriter";
import { FieldErrors, UseFormRegister, FieldError } from "react-hook-form";
import { QuestionType } from "@/app/types/question";

type Props = {
  question: QuestionType;
  register: UseFormRegister<any>;
  errors: FieldErrors;
};

const getErrorMessage = (error: FieldError): string => {
  return error.message || "This field is required";
};

/**
 * Component to display a question and handle its input field.
 */
const QuestionField: React.FC<Props> = ({ question, register, errors }) => {
  if (!question) {
    return <p className="text-red-500">Question not found.</p>;
  }

  const errorKey = question.id;
  const error = errors[errorKey] as FieldError | undefined;

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
            type={question.type}
            autoComplete="off"
            className={clsx(
              "block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white placeholder:text-white/50 focus:ring-0",
              error && "border-2 border-red-500"
            )}
            {...register(errorKey)}
          />
          {error && (
            <p className="text-sm/6 text-red-500">{getErrorMessage(error)}</p>
          )}
        </>
      ) : (
        <>
          <Textarea
            className={clsx(
              "block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white placeholder:text-white/50 focus:ring-0",
              error && "border-2 border-red-500"
            )}
            {...register(errorKey)}
          />
          {error && (
            <p className="text-sm/6 text-red-500">{getErrorMessage(error)}</p>
          )}
        </>
      )}
    </Field>
  );
};

export default QuestionField;
