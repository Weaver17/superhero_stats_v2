import { z } from "zod";

export const relativesSchema = z
  .string({
    required_error:
      "At least one relative reqiured. Can be 'None' or 'Unknown'",
  })
  .max(30)
  .optional();

export const groupsSchema = z
  .string({
    required_error: "At least one group reqiured. Can be 'None' or 'Unknown'",
  })
  .max(30)
  .optional();
