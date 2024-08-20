import { QuestionType } from "../types/question";

export const questions: QuestionType[] = [
  {
    id: "name",
    text: "What is your full name?",
    desc: "Enter your legal name as it should appear on your resume or CV.",
    example: "Rizky Aditya Putra",
    type: "text",
    line: "single"
  },
  {
    id: "age",
    text: "How old are you?",
    desc: "Provide your age in years to help gauge your experience level.",
    example: "23",
    type: "text",
    line: "single"
  },
  {
    id: "email",
    text: "What is your email address?",
    desc: "Enter a professional email address where you can be reached.",
    example: "rizkyaditya@gmail.com",
    type: "text",
    line: "single"
  },
  {
    id: "phone",
    text: "What is your phone number?",
    desc: "Provide a valid phone number, including country code if applicable.",
    example: "081234567890",
    type: "text",
    line: "single"
  },
  {
    id: "address",
    text: "What is your address?",
    desc: "Enter your current address, including street, city, and province. If preferred, you can just list city and province.",
    example: "Dago, Bandung",
    type: "text",
    line: "single"
  },
  {
    id: "skills",
    text: "What are your key skills?",
    desc: "List your relevant skills, both technical and soft, separated by commas.",
    example: "Web Development, JavaScript, React, Node.js",
    type: "text",
    line: "multi"
  },
  {
    id: "experiences",
    text: "What is your work experience?",
    desc: "Detail your most recent roles, companies, and durations, starting with the most recent.",
    example:
      "Software Engineer-Tokopedia-2 years, Front-End Developer-Bukalapak-1 year",
    type: "text",
    line: "multi"
  },
  {
    id: "recent_education",
    text: "What is your latest education?",
    desc: "List your recent educational qualifications, including degree, institution, and years attended, starting with the most recent.",
    example:
      "Bachelor of Business Administration-Universitas Gadjah Mada (UGM)-2014/2018, Bachelor of Information Technology-Universitas Indonesia (UI)-2018/2022",
    type: "text",
    line: "multi"
  },
  {
    id: "certificates",
    text: "Do you have any certifications?",
    desc: "List any certifications obtained, including the name, issuing body, and year, separated by commas.",
    example:
      "Certified Web Developer-Progate Indonesia-2020, Certified Web Developer-Progate Indonesia-2021",
    type: "text",
    line: "multi"
  }
];
