export const BASE_URL =
  "https://corsproxy.io/?url=https://superheroapi.com/api/cf5e8cb0f38ad9f2713ccc5537ffa595";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export async function heroRequest(url, options) {
  const res = await fetch(url, options);
  return handleServerResponse(res);
}

export const headers = {
  "Access-Control-Allow-Origin": "*",
};

export function makeUseful(obj) {
  if (Array.isArray(obj)) {
    return obj.map(makeUseful);
  } else if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        const newKey = key.replace(/-/g, "_");
        return [newKey, makeUseful(value)];
      })
    );
  }
  return obj;
}

export const marvelPublishers = [
  "Marvel Comics",
  "Archangel",
  "Ant Man",
  "Giant-Man",
  "Toxin",
  "Angel",
  "Goliath",
  "Tempest",
  "Meltdown",
  "Gemini V",
  "Binary",
  "Evil Deadpool",
  "Deadpool",
  "Icon Comics",
  "Phoenix",
  "Power Woman",
  "Iron Lad",
  "Power Man",
  "Boom-Boom",
  "She Thing",
  "Jean Grey",
  "Spider-Carnage",
  "Venom III",
  "Ms Marvel II",
  "Angel Salvadore",
  "Anti-Venom",
  "Scorpion",
  "Vindicator II",
  "Thunderbird II",
  "Ant-Man",
];

export const dcPublishers = [
  "DC Comics",
  "Oracle",
  "Spoiler",
  "Black Racer",
  "Speed Demon",
  "Impulse",
  "Batgirl III",
  "Flash IV",
  "Batgirl V",
  "Batman II",
  "Batgirl",
  "Robin II",
  "Robin III",
  "Red Hood",
  "Red Robin",
  "Aztar",
  "Superman Prime One-Million",
  "Anti-Vision",
  "Nightwing",
];
