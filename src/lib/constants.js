export const CUSTOM_HERO_BACKGROUNDS = [
    "None",
    "Night City 1",
    "Night City 2",
    "Dark 1",
    "Dark 2",
    "Space",
    "Dark Trees",
];

export const CUSTOM_HERO_ALIGNMENT = ["good", "neutral", "bad"];

export const CUSTOM_HERO_GENDERS = [
    "Male",
    "Female",
    "Trans-Male",
    "Trans-Female",
    "Non-Binary",
    "Unknown",
    "Other",
];

export const handleServerResponse = (res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export async function heroRequest(url, options) {
    const res = await fetch(url, options);
    return handleServerResponse(res);
}

// export const headers = {
//     "Access-Control-Allow-Origin": "*",
// };

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

export function heightMetricToImperial(cm) {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}'${inches}`;
}

export function weightMetricToImperial(kg) {
    return Math.round(kg * 2.20462);
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
