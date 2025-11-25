import { z } from "zod";

// Signup validation schemas
export const signupSchema = z.object({
  fullname: z
    .string()
    .min(3, "Le nom doit contenir au moins 3 caractères")
    .max(50, "Le nom est trop long"),
  phone: z
    .string()
    .min(10, "Numéro de téléphone invalide")
    .regex(/^[0-9+\s-()]+$/, "Numéro de téléphone invalide"),
  email: z.string().email("Email invalide"),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre"
    ),
});

// Login validation schema
export const loginSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(1, "Le mot de passe est requis"),
});

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;

