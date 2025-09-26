/** @format */

import z from "zod";

export const registerSchema = z
  .object({
    email: z.email(),
    password: z.string(),
    password_confirmation: z.string(),
    username: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });
