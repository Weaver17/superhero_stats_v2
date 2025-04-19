"use server";

import {
  heightMetricToImperial,
  weightMetricToImperial,
} from "@/lib/constants";
import { prisma } from "@/lib/database";
import { heroSchema } from "@/schema/heroSchema";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { z } from "zod";

type TCreateHeroInput = z.infer<typeof heroSchema>;

// type kindeUserInfoProps = {
//   username?: string;
//   id?: string;
//   email?: string;
// };

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

export async function updateHero(data: TCreateHeroInput) {
  try {
    console.log("Trying createHero");
    const updatedHero = heroSchema.safeParse(data);

    if (!updatedHero.success) {
      console.error(updatedHero.error.flatten().fieldErrors);
      throw new Error("Validation failed");
    }

    const { isAuthenticated, getUser } = getKindeServerSession();

    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn) {
      redirect("/");
    }

    const user = await getUser();

    const userRecord = await prisma.user.findUnique({
      where: { username: user?.username ?? "" },
    });

    const kindeId = user?.id;
    const creatorId = userRecord?.id;

    const userKindeId = userRecord?.kindeId;

    if (userKindeId !== kindeId) {
      throw new Error("Cannot edit heroes you did not create!");
    }

    console.log("Trying updateHero");
    const updatedData = heroSchema.safeParse(data);

    if (!updatedData.success) {
      console.error(updatedData.error.flatten().fieldErrors);
      throw new Error("Validation failed");
    }

    const existingHero = await prisma.hero.findUnique({
      where: { slug: updatedData.data.name.toLowerCase().replace(/\s+/g, "-") },
    });

    console.log(updatedData.data.name);

    if (!existingHero) throw new Error("Hero does not exist");

    const {
      name,
      appearance,
      powerstats,
      biography,
      work,
      connections,
      image,
    } = updatedData.data;

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

    const heroUpdates = await prisma.hero.update({
      where: { slug: updatedData.data.name.toLowerCase().replace(/\s+/g, "-") },
      data: {
        name: name,
        slug: name.toLowerCase().replace(/\s+/g, "-"),
        powerstats: {
          upsert: {
            update: {
              combat: powerstats?.combat?.toString() ?? "0",
              durability: powerstats?.durability?.toString() ?? "0",
              intelligence: powerstats?.intelligence?.toString() ?? "0",
              speed: powerstats?.speed?.toString() ?? "0",
              power: powerstats?.power?.toString() ?? "0",
              strength: powerstats?.strength?.toString() ?? "0",
            },
            create: {
              combat: powerstats?.combat?.toString() ?? "0",
              durability: powerstats?.durability?.toString() ?? "0",
              intelligence: powerstats?.intelligence?.toString() ?? "0",
              speed: powerstats?.speed?.toString() ?? "0",
              power: powerstats?.power?.toString() ?? "0",
              strength: powerstats?.strength?.toString() ?? "0",
            },
          },
        },
        appearance: {
          upsert: {
            update: {
              gender: appearance.gender,
              race: appearance.race,
              eye_color: appearance.eye_color,
              hair_color: appearance.hair_color,
              height: {
                deleteMany: {},
                create: [convertedHeight],
              },
              weight: {
                deleteMany: {},
                create: [convertedWeight],
              },
            },
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
        },
        biography: {
          upsert: {
            update: {
              full_name: biography.full_name,
              alter_egos: biography.alter_egos,
              place_of_birth: biography.place_of_birth,
              first_appearance: biography.first_appearance,
              publisher: biography.publisher,
              alignment: biography.alignment,
              aliases: {
                deleteMany: {},
                create: aliasArray,
              },
            },
            create: {
              full_name: biography.full_name,
              alter_egos: biography.alter_egos,
              place_of_birth: biography.place_of_birth,
              first_appearance: biography.first_appearance,
              publisher: biography.publisher,
              alignment: biography.alignment,
              aliases: {
                create: aliasArray,
              },
            },
          },
        },
        work: {
          upsert: {
            update: {
              occupation: work.occupation,
              base: work.base,
            },
            create: {
              occupation: work.occupation,
              base: work.base,
            },
          },
        },
        connections: {
          upsert: {
            update: {
              group_affiliation: connections.group_affiliations,
              relatives: connections.relatives,
            },
            create: {
              group_affiliation: connections.group_affiliations,
              relatives: connections.relatives,
            },
          },
        },
        image: {
          upsert: {
            update: {
              url: image.url,
              page_background: image.page_background,
            },
            create: {
              url: image.url,
              page_background: image.page_background,
            },
          },
        },
        creator: {
          connect: {
            id: creatorId,
          },
        },
      },
    });

    return heroUpdates;
  } catch (e) {
    console.log("Error in updateHero");
    console.error(e);
  }
}

export async function deleteHero(
  id: string | undefined,
  creatorKindeId: string | undefined,
  currentUserKindeId: string | undefined
) {
  try {
    console.log(id, creatorKindeId, currentUserKindeId);

    const { isAuthenticated } = getKindeServerSession();

    const isLoggedIn = await isAuthenticated();

    if (!isLoggedIn) {
      redirect("/");
    }
    if (creatorKindeId !== currentUserKindeId) {
      throw new Error("Cannot delete heroes you did not create!");
    }

    const hero = await prisma.hero.findUnique({
      where: {
        id: id,
      },
      include: {
        appearance: {
          include: {
            height: true,
            weight: true,
          },
        },
        biography: {
          include: {
            aliases: true,
          },
        },
        connections: true,
        image: true,
        powerstats: true,
        work: true,
      },
    });

    await prisma.$transaction([
      prisma.height.deleteMany({ where: { id: hero?.appearance?.id } }),
      prisma.weight.deleteMany({ where: { id: hero?.appearance?.id } }),
      prisma.alias.deleteMany({ where: { id: hero?.biography?.id } }),
      prisma.appearance.deleteMany({ where: { heroId: id } }),
      prisma.biography.deleteMany({ where: { heroId: id } }),
      prisma.powerstats.deleteMany({ where: { heroId: id } }),
      prisma.connections.deleteMany({ where: { heroId: id } }),
      prisma.image.deleteMany({ where: { heroId: id } }),
      prisma.work.deleteMany({ where: { heroId: id } }),
    ]);

    await prisma.hero.delete({ where: { id } });
  } catch (e) {
    console.log("Error in deleteHero");
    console.error(e);
  }
}

export async function createLocalUser(
  kindeUserInfo: KindeUser<Record<string, any>> | null
) {
  try {
    console.log("Creating Local User...");

    const { isAuthenticated, getUser } = getKindeServerSession();

    const isLoggedIn = await isAuthenticated();

    const currentKindeUser = await getUser();

    if (!isLoggedIn) {
      redirect("/");
    }

    if (currentKindeUser && kindeUserInfo) {
      if (currentKindeUser.id !== kindeUserInfo.id) {
        throw new Error("IDs do not match");
      }

      const localUser = prisma.user.create({
        data: {
          kindeId: kindeUserInfo.id ?? "",
          username: kindeUserInfo.username ?? "",
          slug:
            kindeUserInfo.username?.toLowerCase().replace(/\s+/g, "-") ?? "",
          role: "basic-user",
          email: kindeUserInfo.email ?? "",
        },
      });
      return localUser;
    }
  } catch (e) {
    console.log("Error in addLocalUser");
    console.error(e);
  }
}
