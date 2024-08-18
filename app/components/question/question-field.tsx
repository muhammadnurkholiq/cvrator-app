import React from "react";
import { Field, Input, Textarea, Label, Description } from "@headlessui/react";
import clsx from "clsx";
import { Typewriter } from "react-simple-typewriter";
import { QuestionType } from "@/app/types/question";

type Props = {
  question: QuestionType;
};

const QuestionField: React.FC<Props> = ({ question }) => {
  if (!question) {
    return <p className="text-red-500">Question not found.</p>;
  }

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
        Description :{" "}
        <Typewriter
          key={question.text}
          words={[question.desc || ""]}
          cursor
          cursorStyle="_"
          typeSpeed={25}
          deleteSpeed={0}
        />
      </Description>
      <Description className="text-sm/6 text-white/50">
        Example of input :{" "}
        <Typewriter
          key={question.text}
          words={[question.example || ""]}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={0}
        />
      </Description>
      {question.line === "single" ? (
        <Input
          type={question.type === "text" ? "text" : "file"}
          accept="image/*"
          className={clsx(
            "block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
          placeholder="Input your answer"
          autoFocus
          autoComplete="new-password"
        />
      ) : (
        <Textarea
          className={clsx(
            "block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          )}
          placeholder="Input your answer"
          rows={3}
          autoFocus
          autoComplete="new-password"
        />
      )}
    </Field>
  );
};

QuestionField.displayName = "QuestionField";

export default React.memo(QuestionField);
