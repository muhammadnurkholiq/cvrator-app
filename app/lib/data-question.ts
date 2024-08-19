import { QuestionType } from "../types/question";

export const questions: QuestionType[] = [
  {
    id: "name",
    text: "Hi, What is your complete name?",
    desc: "Please enter your full legal name as you would like it to appear on your resume or CV.",
    example: "Rizky Aditya Putra",
    type: "text",
    line: "single"
  },
  {
    id: "age",
    text: "How old are you?",
    desc: "Provide your age in years. This information can help potential employers understand your experience level and career stage.",
    example: "23",
    type: "text",
    line: "single"
  },
  {
    id: "email",
    text: "Please input your email.",
    desc: "Enter a professional email address that you regularly check, as it will be used for potential employers to contact you.",
    example: "rizkyaditya@gmail.com",
    type: "text",
    line: "single"
  },
  {
    id: "phone",
    text: "Please input your phone number.",
    desc: "Provide a valid phone number where you can be reached during business hours. Include the country code if applicable.",
    example: "081234567890",
    type: "text",
    line: "single"
  },
  {
    id: "address",
    text: "Please input your address.",
    desc: "Fill in your current residential address. This could include street name, city, and province. If you prefer not to share your full address, you can just provide the city and province.",
    example: "Dago, Bandung",
    type: "text",
    line: "single"
  },
  {
    id: "skills",
    text: "What skills do you have that can be used professionally? Please list them.",
    desc: "Mention the key skills that are relevant to the job you are applying for. You can include both technical and soft skills. Separate each skill with a comma.",
    example: "Web Development, JavaScript, React, Node.js",
    type: "text",
    line: "multi"
  },
  {
    id: "experiences",
    text: "Do you have any previous work experience? Please mention your most recent role and company.",
    desc: "List your most recent job titles along with the companies you worked for and the duration of employment. Start with the most recent experience. Separate each entry with a comma.",
    example:
      "Software Engineer-Tokopedia-2 years, Front-End Developer-Bukalapak-1 year",
    type: "text",
    line: "multi"
  },
  {
    id: "recent_education",
    text: "Please write down the education that you have completed.",
    desc: "Enter the details of your most recent educational qualifications, including the degree, institution, and years attended. If you have multiple qualifications, list them starting from the most recent.",
    example:
      "Bachelor of Business Administration-Universitas Gadjah Mada (UGM)-2014/2018, Bachelor of Information Technology-Universitas Indonesia (UI)-2018/2022",
    type: "text",
    line: "multi"
  },
  {
    id: "certificates",
    text: "Do you have any certifications from training or institutes?",
    desc: "Mention any certifications you have obtained from professional training programs or educational institutions. Include the name of the certification, the issuing body, and the year obtained. Separate each certification with a comma.",
    example:
      "Certified Web Developer-Progate Indonesia-2020, Certified Web Developer-Progate Indonesia-2021",
    type: "text",
    line: "multi"
  }
];
