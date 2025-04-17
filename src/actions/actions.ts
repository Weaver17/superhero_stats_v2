"use server";

import {
  heightMetricToImperial,
  weightMetricToImperial,
} from "@/lib/constants";
import { prisma } from "@/lib/database";
import { heroSchema } from "@/schema/heroSchema";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { z } from "zod";

type TCreateHeroInput = z.infer<typeof heroSchema>;

export async function createHero(
  data: TCreateHeroInput,
  kindeId: string,
  username: string,
  userId: string
) {
  try {
    const { isAuthenticated } = getKindeServerSession();

    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn) {
      redirect("/");
    }

    console.log("Trying createHero");
    const parsed = heroSchema.safeParse(data);

    if (!parsed.success) {
      console.error(parsed.error.flatten().fieldErrors);
      throw new Error("Validation failed");
    }

    const {
      name,
      appearance,
      powerstats,
      biography,
      work,
      connections,
      image,
    } = parsed.data;

    const convertedHeight = {
      metric: (appearance?.height?.metric ?? 0).toString(),
      imperial: heightMetricToImperial(appearance?.height?.metric ?? 0),
    };

    const convertedWeight = {
      metric: (appearance?.weight?.metric ?? 0).toString(),
      imperial: weightMetricToImperial(
        appearance?.weight?.metric ?? 0
      ).toString(),
    };

    const aliasArray = biography.aliases
      .split(";")
      .map((a) => a.trim())
      .filter(Boolean) // remove empty strings
      .map((alias) => ({ aliases: alias }));

    const hero = await prisma.hero.create({
      data: {
        name: name,
        slug: name.toLowerCase().replace(/\s+/g, "-"),
        powerstats: {
          create: {
            combat: (powerstats?.combat ?? 0).toString(),
            durability: (powerstats?.durability ?? 0).toString(),
            intelligence: (powerstats?.intelligence ?? 0).toString(),
            speed: (powerstats?.speed ?? 0).toString(),
            power: (powerstats?.power ?? 0).toString(),
            strength: (powerstats?.strength ?? 0).toString(),
          },
        },
        appearance: {
          create: {
            gender: appearance.gender,
            race: appearance.race,
            eye_color: appearance.eye_color,
            hair_color: appearance.hair_color,
            height: {
              create: [convertedHeight],
            },
            weight: {
              create: [convertedWeight],
            },
          },
        },
        biography: {
          create: {
            full_name: biography.full_name,
            alter_egos: biography.alter_egos,
            aliases: {
              create: aliasArray,
            },
            place_of_birth: biography.place_of_birth,
            first_appearance: biography.first_appearance,
            publisher: biography.publisher,
            alignment: biography.alignment,
          },
        },
        work: {
          create: {
            occupation: work.occupation,
            base: work.base,
          },
        },
        connections: {
          create: {
            group_affiliation: connections.group_affiliations,
            relatives: connections.relatives,
          },
        },
        image: {
          create: {
            url: image.url,
            page_background: image.page_background,
          },
        },
        creator: {
          connect: {
            id: userId,
            kindeId: kindeId,
            username: username,
          },
        },
      },
    });

    return hero;
  } catch (e) {
    console.log("Error in createHero");
    console.error(e);
  }
}

export async function deleteHero(
  heroId: string | undefined,
  userId: string | undefined
) {
  console.log(heroId, userId);
  redirect("/custom-hero/all");
}

export async function cancelDelete() {
  console.log("CANCEL");
}
