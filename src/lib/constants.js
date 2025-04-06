export const BASE_URL =
  "https://superheroapi.com/api/cf5e8cb0f38ad9f2713ccc5537ffa595";

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
