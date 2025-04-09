export interface Hero {
  id?: string;
  name?: string;
  powerstats?: PowerstatsType;
  biography?: BiographyType;
  appearance?: AppearanceType;
  work?: WorkType;
  connections?: ConnectionsType;
  image?: ImageType;
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
  full_name?: string;
  alter_egos?: string;
  aliases?: string[];
  place_of_birth?: string;
  first_appearance?: string;
  publisher?: string;
  alignment?: string;
}

export interface AppearanceType {
  gender?: string;
  race?: string;
  height?: string[];
  weight?: string[];
  eye_color?: string;
  hair_color?: string;
}

export interface WorkType {
  occupation?: string;
  base?: string;
}

export interface ConnectionsType {
  group_affiliation?: string;
  relatives?: string;
}

export interface ImageType {
  url?: string;
}

export type HeroResponse = {
  response: string;
  "results-for": string;
  results: string[];
};
