import { z } from "zod";

export const alterEgoSchema = z
  .string({
    required_error:
      "At least one alter-ego reqiured. Can be 'None' or 'Unknown'",
  })
  .max(60)
  .optional();

export const aliasSchema = z
  .string({
    required_error: "At least one alias reqiured. Can be 'None' or 'Unknown'",
  })
  .min(1)
  .max(60);

export const birthplaceSchema = z
  .string({
    required_error: "Place of Birth is required",
    invalid_type_error:
      "Place of Birth must only have alphanumeric characters or dashes. (A-Z, - , 0-9)",
  })
  .min(1)
  .max(30)
  .optional();

export const firstAppearanceSchema = z
  .string({
    required_error: "First Appearance is required",
    invalid_type_error:
      "First Appearance must only have alphanumeric characters. (A-Z, 0-9)",
  })
  .min(1)
  .max(30)
  .optional();

export const publisherSchema = z
  .string({
    required_error: "Publisher is required",
    invalid_type_error:
      "Publisher must only have alphanumeric characters. (A-Z, 0-9)",
  })
  .min(1)
  .max(30)
  .optional();

export const alignmentEnum = z.enum(["good", "neutral", "bad"]);
