import { BASE_URL } from "./constants";

const axios = require("axios").default;

export async function getBatman() {
  try {
    const res = await axios.get(`${BASE_URL}/search/batman`);
    console.log(res);
  } catch (e) {
    console.error(e);
  }
}
