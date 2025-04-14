import { z } from "zod";

export const creatorSchema = z.object({
  id: z.string().min(1),
  isAdmin: z.boolean().default(false),
  email: z.string().email(),
  username: z.string().min(1),
});
