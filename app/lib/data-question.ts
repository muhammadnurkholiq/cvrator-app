import { QuestionType } from "../types/question";

export const questions: QuestionType[] = [
  {
    text: "Hi, What is your complete name?",
    desc: "Use your full legal name to ensure consistency and professionalism in your resume.",
    type: "text",
    line: "single"
  },
  {
    text: "Please input your email, phone number, and address",
    desc: "Provide your current contact details so potential employers can easily reach you.",
    type: "text",
    line: "multi"
  },
  {
    text: "What skills do you have that can be used professionally? Please list them.",
    desc: "Highlight key skills that are relevant to the job you're applying for. This can include both technical and soft skills.",
    type: "text",
    line: "multi"
  },
  {
    text: "Do you have any previous work experience? Please mention your most recent role.",
    desc: "Include your last job title, company name, and the duration of your employment to give employers an overview of your work history.",
    type: "text",
    line: "multi"
  },
  {
    text: "Please write down the education that you have completed.",
    desc: "List your educational qualifications, starting from the most recent. Include the degree obtained, institution, and graduation year.",
    type: "text",
    line: "multi"
  },
  {
    text: "Do you have any certifications from training or institutes?",
    desc: "Mention any relevant certifications that add value to your resume. Include the name of the certification, the issuing authority, and the date obtained.",
    type: "text",
    line: "multi"
  },
  {
    text: "If you have a portfolio website, please mention it.",
    desc: "A portfolio website is a great way to showcase your work. Provide the link if you have one.",
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
