// data
import { questions } from "@/app/lib/data-question";

// components
import Question from "@/app/components/question";

export default function page() {
  return (
    <div className="h-[100%]">
      <Question questions={questions} />
    </div>
  );
}
