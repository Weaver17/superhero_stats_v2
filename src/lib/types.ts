interface Hero {
  response: string;
  id: string;
  name: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    full_name: string;
    alter_egos: string;
    aliases: string[];
    place_of_birth: string;
    first_appearance: string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eye_color: string;
    hair_color: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    group_affiliation: string;
  };
  image: {
    url: string;
  };
}

export type { Hero };
