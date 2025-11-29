import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string(),
});
