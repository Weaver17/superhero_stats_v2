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
