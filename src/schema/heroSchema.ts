import { z } from "zod";
import {
  heroName,
  fullName,
  heroImage,
  pageBackroundEnum,
  heroSlug,
} from "./form-sections/genSchema";
import { Hero } from "@/lib/types";
import {
  eyeColor,
  gender,
  hairColor,
  heightArray,
  weightArray,
} from "./form-sections/appSchema";
import { slugifyName } from "@/lib/utils";
import { bases, occupations } from "./form-sections/workSchema";
import { groups, relatives } from "./form-sections/connSchema";
import {
  combat,
  durability,
  intelligence,
  power,
  speed,
  strength,
} from "./form-sections/statSchema";
import {
  aliases,
  alignment,
  alterEgos,
  birthplace,
  firstAppearance,
} from "./form-sections/bioSchema";
import { creatorSchema } from "./creatorSchema";

export const heroSchema = z.object({
  name: heroName,
  slug: heroSlug.transform((val) => slugifyName(val)),
  background: pageBackroundEnum,
  appearance: z.object({
    gender: gender,
    height: heightArray,
    weight: weightArray,
    eyeColor: eyeColor,
    hairColor: hairColor,
  }),
  biography: z.object({
    full_name: fullName,
    alter_egos: alterEgos,
    aliases: aliases,
    place_of_birth: birthplace,
    first_appearance: firstAppearance,
    alignment: alignment,
  }),
  work: z.object({
    occupation: occupations,
    base: bases,
  }),
  connections: z.object({
    group_affiliations: groups,
    relatives: relatives,
  }),
  powerstats: z.object({
    combat: combat,
    durability: durability,
    intelligence: intelligence,
    speed: speed,
    power: power,
    strength: strength,
  }),
  image: z.object({
    url: heroImage,
  }),
  creator: creatorSchema,
}) as unknown as z.ZodType<Hero>;
