/** @format */

import z from "zod";

export const checkoutSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.email(),
  zip_code: z.string(),
  address: z.string(),
});
