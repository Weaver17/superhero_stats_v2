import { z } from "zod";

import { creatorSchema } from "./creatorSchema";
import {
  fullNameSchema,
  heroImageSchema,
  heroNameSchema,
  heroSlugSchema,
  pageBackroundEnum,
} from "./form-sections/genSchema";
import {
  eyeColorSchema,
  genderEnum,
  hairColorSchema,
  heightSchema,
  raceSchema,
  weightSchema,
} from "./form-sections/appSchema";
import {
  aliasSchema,
  alignmentEnum,
  alterEgoSchema,
  birthplaceSchema,
  firstAppearanceSchema,
  publisherSchema,
} from "./form-sections/bioSchema";
import { basesSchema, occupationsSchema } from "./form-sections/workSchema";
import { groupsSchema, relativesSchema } from "./form-sections/connSchema";
import {
  combatSchema,
  durabilitySchema,
  intelligenceSchema,
  powerSchema,
  speedSchema,
  strengthSchema,
} from "./form-sections/statSchema";

export const heroSchema = z.object({
  name: heroNameSchema,
  slug: heroSlugSchema,
  appearance: z.object({
    gender: genderEnum,
    race: raceSchema,
    height: heightSchema,
    weight: weightSchema,
    eye_color: eyeColorSchema,
    hair_color: hairColorSchema,
  }),
  biography: z.object({
    full_name: fullNameSchema,
    alter_egos: alterEgoSchema,
    aliases: aliasSchema,
    place_of_birth: birthplaceSchema,
    first_appearance: firstAppearanceSchema,
    publisher: publisherSchema,
    alignment: alignmentEnum,
  }),
  work: z.object({
    occupation: occupationsSchema,
    base: basesSchema,
  }),
  connections: z.object({
    group_affiliations: groupsSchema,
    relatives: relativesSchema,
  }),
  powerstats: z.object({
    combat: combatSchema,
    durability: durabilitySchema,
    intelligence: intelligenceSchema,
    speed: speedSchema,
    power: powerSchema,
    strength: strengthSchema,
  }),
  image: z.object({
    url: heroImageSchema,
    page_background: pageBackroundEnum,
  }),
  creator: z.object({
    id: z.string().optional(),
    username: z.string().optional(),
  }),
});
