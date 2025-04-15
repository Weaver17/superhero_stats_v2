import { z } from "zod";

export const heroNameSchema = z
  .string({
    required_error: "SuperHero Name is required",
    invalid_type_error:
      "Name must only have alphanumeric characters. (A-Z, 0-9)",
  })
  .min(1)
  .max(30);

export const heroSlugSchema = z.string().min(1).max(30).optional();

export const fullNameSchema = z
  .string({
    required_error: "Secret Identity is required",
    invalid_type_error:
      "Name must only have alphanumeric characters. (A-Z, 0-9)",
  })
  .min(1)
  .max(30)
  .optional();

export const heroImageSchema = z
  .string({
    required_error: "SuperHero Image is required",
  })
  .url({
    message: "Invalid URL",
  })
  .optional();

export const pageBackroundEnum = z.enum([
  "None",
  "Night City 1",
  "Night City 2",
  "Dark 1",
  "Dark 2",
  "Space",
  "Dark Trees",
]);
