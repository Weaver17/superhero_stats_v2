import { z } from "zod";

export const relatives = z
  .string({
    required_error:
      "At least one relative reqiured. Can be 'None' or 'Unknown'",
  })
  .array()
  .max(3)
  .nonempty();

export const groups = z
  .string({
    required_error: "At least one group reqiured. Can be 'None' or 'Unknown'",
  })
  .array()
  .max(3)
  .nonempty();
