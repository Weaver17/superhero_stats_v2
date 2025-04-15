import { z } from "zod";

export const creatorSchema = z.object({
  id: z.string().uuid().optional(),
  isAdmin: z.boolean().default(false).optional(),
  email: z.string().email().optional(),
  username: z.string().optional(),
});
