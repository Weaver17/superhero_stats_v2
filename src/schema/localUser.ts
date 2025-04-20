import { z } from "zod";

export const localUserSchema = z.object({
  id: z.string().uuid(),
  kindeId: z.string().optional(),
  slug: z.string().optional(),
  username: z.string(),
  email: z.string(),
  role: z.string(),
  heroes: z.string().array().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
