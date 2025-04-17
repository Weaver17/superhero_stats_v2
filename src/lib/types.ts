import { heroSchema } from "@/schema/heroSchema";
import { z } from "zod";

export type TCreateHeroSchema = z.infer<typeof heroSchema>;

export interface Hero {
  id?: string;
  name?: string;
  slug?: string;
  powerstats?: PowerstatsType;
  biography?: BiographyType;
  appearance?: AppearanceType;
  work?: WorkType;
  connections?: ConnectionsType;
  image?: ImageType;
  creator?: CreatorType;
}

export interface PowerstatsType {
  response?: string;
  id?: string;
  name?: string;
  intelligence?: string;
  strength?: string;
  speed?: string;
  durability?: string;
  power?: string;
  combat?: string;
}

export interface BiographyType {
  response?: string;
  id?: string;
  name?: string;
  full_name?: string;
  alter_egos?: string;
  aliases?: string[];
  place_of_birth?: string;
  first_appearance?: string;
  publisher?: string;
  alignment?: string;
}

export interface AppearanceType {
  response?: string;
  id?: string;
  name?: string;
  gender?: string;
  race?: string;
  height?: string[];
  weight?: string[];
  eye_color?: string;
  hair_color?: string;
}

export interface WorkType {
  response?: string;
  id?: string;
  name?: string;
  occupation?: string;
  base?: string;
}

export interface ConnectionsType {
  response?: string;
  id?: string;
  name?: string;
  group_affiliation?: string;
  relatives?: string;
}

export interface ImageType {
  response?: string;
  id?: string;
  name?: string;
  url?: string;
  page_background?: string;
}

export type HeroResponse = {
  response: string;
  "results-for": string;
  results: string[];
};

export type CreatorType = {
  id?: string;
  isAdmin?: boolean;
  email?: string;
  username?: string;
  hashedPassword?: string;
};
