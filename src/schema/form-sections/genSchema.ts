import { z } from "zod";

export const heroName = z
  .string({
    required_error: "SuperHero Name is required",
    invalid_type_error:
      "Name must only have alphanumeric characters. (A-Z, 0-9)",
  })
  .min(1)
  .max(30);

export const heroSlug = z.string().min(1).max(30);

export const fullName = z
  .string({
    required_error: "Secret Identity is required",
    invalid_type_error:
      "Name must only have alphanumeric characters. (A-Z, 0-9)",
  })
  .min(1)
  .max(30);

export const heroImage = z
  .string({
    required_error: "SuperHero Image is required",
  })
  .url({
    message: "Invalid URL",
  });

export const pageBackroundEnum = z.enum([
  "None",
  "Night City 1",
  "Night City 2",
  "Dark 1",
  "Dark 2",
  "Space",
  "Dark Trees",
]);
