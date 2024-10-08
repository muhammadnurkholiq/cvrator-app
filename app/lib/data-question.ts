import { QuestionType } from "../types/question";

// Image imports
import ImageOutputName from "@/app/assets/images/output/output-name.png";
import ImageOutputEmail from "@/app/assets/images/output/output-email.png";
import ImageOutputPhone from "@/app/assets/images/output/output-phone.png";
import ImageOutputAddress from "@/app/assets/images/output/output-address.png";
import ImageOutputExperience from "@/app/assets/images/output/output-experience.png";
import ImageOutputEducation from "@/app/assets/images/output/output-education.png";
import ImageOutputCertification from "@/app/assets/images/output/output-certification.png";

export const questions: QuestionType[] = [
  {
    id: "name",
    text: "What is your full name?",
    example: "Rizky Aditya Putra",
    type: "text",
    line: "single",
    image: ImageOutputName
  },
  {
    id: "email",
    text: "What is your email address?",
    example: "rizkyaditya@gmail.com",
    type: "text",
    line: "single",
    image: ImageOutputEmail
  },
  {
    id: "phone",
    text: "What is your phone number?",
    example: "081234567890",
    type: "text",
    line: "single",
    image: ImageOutputPhone
  },
  {
    id: "address",
    text: "What is your city, province?",
    example: "Bandung, Jawa Barat",
    type: "text",
    line: "single",
    image: ImageOutputAddress
  },
  {
    id: "skills",
    text: "What are your key skills?",
    example: "Web Development, JavaScript, React, Node.js",
    type: "text",
    line: "multi",
    image: ImageOutputCertification
  },
  {
    id: "experiences",
    text: "What is your work experience?",
    example:
      "Software Engineer-Tokopedia-2 years, Front-End Developer-Bukalapak-1 year",
    type: "text",
    line: "multi",
    image: ImageOutputExperience
  },
  {
    id: "recent_education",
    text: "What is your latest education?",
    example:
      "Bachelor of Business Administration-Universitas Gadjah Mada (UGM)-2014/2018, Bachelor of Information Technology-Universitas Indonesia (UI)-2018/2022",
    type: "text",
    line: "multi",
    image: ImageOutputEducation
  },
  {
    id: "certificates",
    text: "Do you have any certifications?",
    example:
      "Certified Web Developer-Progate Indonesia-2020, Certified Web Developer-Progate Indonesia-2021",
    type: "text",
    line: "multi",
    image: ImageOutputCertification
  }
];
