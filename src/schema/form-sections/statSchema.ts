import { z } from "zod";

export const combatSchema = z.coerce
  .number({
    required_error: "The combat stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .positive()
  .max(100)
  .optional();

export const durabilitySchema = z.coerce
  .number({
    required_error: "The durability stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .positive()
  .max(100)
  .optional();

export const intelligenceSchema = z.coerce
  .number({
    required_error: "The intelligence stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .positive()
  .max(100)
  .optional();

export const powerSchema = z.coerce
  .number({
    required_error: "The power stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .positive()
  .max(100)
  .optional();

export const speedSchema = z.coerce
  .number({
    required_error: "The speed stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .positive()
  .max(100)
  .optional();

export const strengthSchema = z.coerce
  .number({
    required_error: "The strength stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .positive()
  .max(100)
  .optional();
