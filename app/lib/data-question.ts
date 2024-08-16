import { QuestionType } from "../types/question";

export const questions: QuestionType[] = [
  {
    text: "Hi, What is your complete name?",
    desc: "Example of input : John Doe",
    type: "text",
    line: "single"
  },
  {
    text: "Please input your email, phone number, and address",
    desc: "Example of input : johndoe@gmail.com, 081234567890, Bandung Indonesia",
    type: "text",
    line: "multi"
  },
  {
    text: "What skills do you have that can be used professionally? Please list them.",
    desc: "Example of input : Writing,Communication..etc",
    type: "text",
    line: "multi"
  },
  {
    text: "Do you have any previous work experience? Please mention your most recent role.",
    desc: "Example of input : Digital Marketing-Netflix-2023/2024, Advertising-Startup Company-2022/2023,.. etc",
    type: "text",
    line: "multi"
  },
  {
    text: "Please write down the education that you have completed.",
    desc: "Example of input : Informatics Engineer-Harvard-2014/2018, Science Major-Senior High School-2011/2014,.. etc",
    type: "text",
    line: "multi"
  },
  {
    text: "Do you have any certifications from training or institutes?",
    desc: "Example of input : Professional Engineering-Engineering Institute-80%, Professional finance-Finance Institute-100%...etc",
    type: "text",
    line: "multi"
  },
  {
    text: "If you have a portfolio website, please mention it.",
    desc: "Example of input : https://www.google.co.id/",
    type: "text",
    line: "multi"
  },
  {
    text: "Upload your best photo for the Resume or CV.",
    desc: "A professional-looking photo can make a good first impression. Ensure the photo is clear and high-quality.",
    type: "file",
    line: "single"
  }
];
