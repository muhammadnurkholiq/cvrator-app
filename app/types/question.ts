import { StaticImageData } from "next/image";

export type QuestionType = {
  id: string;
  text: string;
  example: string;
  type: string;
  line: string;
  image: StaticImageData;
};
