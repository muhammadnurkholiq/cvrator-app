import { z } from "zod";

export const QuestionSchema = z.object({
  name: z
    .string()
    .min(4, "Name must have at least 4 characters") // Minimum character length
    .max(100, "Name must be less than 100 characters") // Maximum character length
    .refine((value) => value.trim().split(/\s+/).length >= 1, {
      message: "Name must contain at least one word"
    }),

  age: z
    .string()
    .min(1, "Age must have at least 1 characters")
    .max(3, "Name must be less than 3 characters"),

  email: z
    .string()
    .email("Invalid email address") // Valid email format
    .max(100, "Email must be less than 100 characters"), // Maximum length

  phone: z
    .string()
    .min(10, "Phone number must have at least 10 digits") // Minimum length
    .regex(/^\d+$/, "Phone number must contain only digits") // Ensure only digits
    .max(15, "Phone number must be less than 15 digits"), // Maximum length

  address: z
    .string()
    .min(10, "Address must be at least 10 characters") // Minimum length
    .max(200, "Address must be less than 200 characters") // Maximum length
    .refine((value) => value.trim().split(/\s+/).length >= 1, {
      message: "Address must contain at least one word"
    }), // Minimum words

  skills: z
    .string()
    .min(1, "Skills are required") // Minimum length
    .max(200, "Skills must be less than 200 characters") // Maximum length
    .refine((value) => value.trim().split(/\s+/).length >= 1, {
      message: "Skills must contain at least one word"
    }), // Minimum words

  experiences: z
    .string()
    .min(1, "Experiences are required") // Minimum length
    .max(500, "Experiences must be less than 500 characters") // Maximum length
    .refine((value) => value.trim().split(/\s+/).length >= 1, {
      message: "Experiences must contain at least one word"
    }), // Minimum words

  recent_education: z
    .string()
    .min(1, "Education is required") // Minimum length
    .max(300, "Education must be less than 300 characters") // Maximum length
    .refine((value) => value.trim().split(/\s+/).length >= 1, {
      message: "Education must contain at least one word"
    }), // Minimum words

  certificates: z.string().nullable()
});

export type QuestionFormValues = z.infer<typeof QuestionSchema>;
