import { z } from "zod";

export const genderEnum = z.enum([
  "Male",
  "Female",
  "Trans-Male",
  "Trans-Female",
  "Non-Binary",
  "Unknown",
  "Other",
]);

export const raceSchema = z
  .string({
    required_error: "Race is required",
    invalid_type_error: "Race must only have letter characters. (A-Z)",
  })
  .min(1)
  .max(15)
  .optional();

export const heightSchema = z.object({
  metric: z.coerce
    .number({
      required_error: "Height is required",
      invalid_type_error: "Height must be a number",
    })
    .min(1)
    .max(10000),
});

export const weightSchema = z.object({
  metric: z.coerce
    .number({
      required_error: "Weight is required",
      invalid_type_error: "Weight must be a number",
    })
    .min(1)
    .max(10000),
});

// export const heightArray = z.array(height).length(2);

// export const weightArray = z.array(weight).length(2);

export const eyeColorSchema = z
  .string({
    required_error: "Eye Color is required",
    invalid_type_error: "Eye Color must only have letter characters. (A-Z)",
  })
  .min(1)
  .max(15);

export const hairColorSchema = z
  .string({
    required_error: "Hair Color is required",
    invalid_type_error: "Hair Color must only have letter characters. (A-Z)",
  })
  .min(1)
  .max(15);
