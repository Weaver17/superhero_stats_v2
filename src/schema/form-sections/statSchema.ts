import { z } from "zod";

export const combat = z
  .string({
    required_error: "The combat stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .min(1)
  .max(3);

export const durability = z
  .string({
    required_error: "The durability stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .min(1)
  .max(3);

export const intelligence = z
  .string({
    required_error: "The intelligence stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .min(1)
  .max(3);

export const power = z
  .string({
    required_error: "The power stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .min(1)
  .max(3);

export const speed = z
  .string({
    required_error: "The speed stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .min(1)
  .max(3);

export const strength = z
  .string({
    required_error: "The strength stat is required",
    invalid_type_error: "Stat must be a number between 0 and 100",
  })
  .min(1)
  .max(3);
