/** @format */

import z from "zod";

export const checkoutSchema = z.object({
  username: z.string(),
  surename: z.string(),
  email: z.email(),
});
