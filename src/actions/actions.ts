"use server";

import useHeroContextHook from "@/hooks/useHeroContextHook";
import { BASE_URL, headers, heroRequest } from "@/lib/constants";

export async function searchHero(
  state: { hero: FormDataEntryValue | null },
  formInput: FormData
) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const [getHero] = useHeroContextHook();

  const hero = formInput.get("search") as string;
  const res = await getHero(`${BASE_URL}/search/${hero}`, headers);
  console.log(res);
  return res;
}
