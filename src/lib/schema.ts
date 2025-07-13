import * as z from "zod";

export const membershipSchema = z.object({
  email: z.email("Invalid email"),
  phone: z.string().min(10, "Enter valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirm: z.string(),
  terms: z.boolean().refine(val => val, "You must accept Terms"),
  personal: z.boolean().refine(val => val, "You must accept Privacy Terms"),
  marketing: z.boolean().optional(),
}).refine((data) => data.password === data.confirm, {
  message: "Passwords do not match",
  path: ["confirm"],
});

export const authSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
