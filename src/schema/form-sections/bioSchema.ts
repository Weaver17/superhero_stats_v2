import { z } from "zod";

export const alterEgos = z
  .string({
    required_error:
      "At least one alter-ego reqiured. Can be 'None' or 'Unknown'",
  })
  .array()
  .max(3)
  .nonempty();

export const aliases = z
  .string({
    required_error: "At least one alias reqiured. Can be 'None' or 'Unknown'",
  })
  .array()
  .max(3)
  .nonempty();

export const birthplace = z
  .string({
    required_error: "Place of Birth is required",
    invalid_type_error:
      "Place of Birth must only have alphanumeric characters or dashes. (A-Z, - , 0-9)",
  })
  .min(1)
  .max(30);

export const firstAppearance = z
  .string({
    required_error: "First Appearance is required",
    invalid_type_error:
      "First Appearance must only have alphanumeric characters. (A-Z, 0-9)",
  })
  .min(1)
  .max(30);

export const publisher = z
  .string({
    required_error: "Publisher is required",
    invalid_type_error:
      "Publisher must only have alphanumeric characters. (A-Z, 0-9)",
  })
  .min(1)
  .max(30);

export const alignment = z.enum(["good", "neutral", "bad"]);
