import { z } from "zod";

export const QuestionSchema = z.object({
  name: z
    .string()
    .min(4, "Name must have at least 4 characters")
    .max(100, "Name must be less than 100 characters")
    .refine((value) => value.trim().split(/\s+/).length >= 1, {
      message: "Name must contain at least one word"
    }),

  email: z
    .string()
    .email("Invalid email address")
    .max(100, "Email must be less than 100 characters"),

  phone: z
    .string()
    .min(10, "Phone number must have at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^\d+$/, "Phone number must contain only digits")
    .refine(
      (value) => {
        // Check that phone number is not all zeros
        const isAllZeros = value.split("").every((digit) => digit === "0");
        return !isAllZeros;
      },
      {
        message: "Phone number cannot be all zeros"
      }
    ),

  address: z
    .string()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address must be less than 200 characters")
    .refine((value) => value.trim().split(/\s+/).length >= 1, {
      message: "Address must contain at least one word"
    }),

  skills: z
    .string()
    .min(1, "Skills are required")
    .max(200, "Skills must be less than 200 characters")
    .refine((value) => value.trim().split(/\s+/).length >= 1, {
      message: "Skills must contain at least one word"
    }),

  experiences: z
    .string()
    .min(1, "Experiences are required")
    .max(500, "Experiences must be less than 500 characters")
    .refine((value) => value.trim().split(/\s+/).length >= 1, {
      message: "Experiences must contain at least one word"
    }),

  recent_education: z
    .string()
    .min(1, "Education is required")
    .max(300, "Education must be less than 300 characters")
    .refine((value) => value.trim().split(/\s+/).length >= 1, {
      message: "Education must contain at least one word"
    }),

  certificates: z.string().nullable()
});

export type QuestionFormValues = z.infer<typeof QuestionSchema>;
