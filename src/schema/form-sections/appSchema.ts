import { z } from "zod";

export const gender = z.enum([
  "Male",
  "Female",
  "Trans-Male",
  "Trans-Female",
  "Non-Binary",
  "Unknown",
  "Other",
]);

const height = z
  .string({
    required_error: "Height is required",
    invalid_type_error: "Height must be a number",
  })
  .min(1)
  .max(4);

const weight = z
  .string({
    required_error: "Weight is required",
    invalid_type_error: "Weight must be a number",
  })
  .min(1)
  .max(5);

export const heightArray = z.array(height).length(2);

export const weightArray = z.array(weight).length(2);

export const eyeColor = z
  .string({
    required_error: "Eye Color is required",
    invalid_type_error: "Eye Color must only have letter characters. (A-Z)",
  })
  .min(1)
  .max(15);

export const hairColor = z
  .string({
    required_error: "Hair Color is required",
    invalid_type_error: "Hair Color must only have letter characters. (A-Z)",
  })
  .min(1)
  .max(15);
