import { z } from "zod";

export const occupationsSchema = z
  .string({
    required_error:
      "At least one occupation reqiured. Can be 'None' or 'Unknown'",
  })
  .max(30)
  .optional();

export const basesSchema = z
  .string({
    required_error: "At least one base reqiured. Can be 'None' or 'Unknown'",
  })
  .max(30)
  .optional();
