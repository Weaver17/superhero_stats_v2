import { z } from "zod";

export const occupations = z
  .string({
    required_error:
      "At least one occupation reqiured. Can be 'None' or 'Unknown'",
  })
  .array()
  .max(3)
  .nonempty();

export const bases = z
  .string({
    required_error: "At least one base reqiured. Can be 'None' or 'Unknown'",
  })
  .array()
  .max(3)
  .nonempty();
