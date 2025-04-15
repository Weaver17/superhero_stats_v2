"use server";

import {
  heightMetricToImperial,
  weightMetricToImperial,
} from "@/lib/constants";
import { prisma } from "@/lib/database";
import { heroSchema } from "@/schema/heroSchema";
import { z } from "zod";

type TCreateHeroInput = z.infer<typeof heroSchema>;

// export async function createHero(formData: Hero) {
//   try {
//     const data = heroSchema.safeParse(formData);

//     if (!data.success) {
//       throw new Error("AAAAAAAAAAAAAAAAA");
//     }

//     const validAlignments = CUSTOM_HERO_ALIGNMENT;
//     const validGenders = CUSTOM_HERO_GENDERS;
//     const validBackgrounds = CUSTOM_HERO_BACKGROUNDS;

//     const alignment = validAlignments.includes(
//       formData.biography?.alignment ?? "neutral"
//     )
//       ? formData.biography?.alignment
//       : "neutral";

//     const gender = validGenders.includes(formData.appearance?.gender ?? "Other")
//       ? formData.appearance?.gender
//       : "Other";

//     const pageBackground = validBackgrounds.includes(
//       formData.image.page_background ?? "None"
//     )
//       ? formData.image.page_background
//       : "None";

//     await prisma.hero.create({
//       // data: {
//       //   name: zodifiedData.data.name ?? "No Hero Name",
//       //   slug: (zodifiedData.data.name ?? "No Slugified Hero Name")
//       //     .trim()
//       //     .toLowerCase()
//       //     .replace(/\s+/g, "-"),
//       //   powerstats: {
//       //     create: {
//       //       combat: (zodifiedData.data.powerstats?.combat ?? 0).toString(),
//       //       durability: (
//       //         zodifiedData.data.powerstats?.durability ?? 0
//       //       ).toString(),
//       //       power: (zodifiedData.data.powerstats?.power ?? 0).toString(),
//       //       intelligence: (
//       //         zodifiedData.data.powerstats?.intelligence ?? 0
//       //       ).toString(),
//       //       speed: (zodifiedData.data.powerstats?.speed ?? 0).toString(),
//       //       strength: (zodifiedData.data.powerstats?.strength ?? 0).toString(),
//       //     },
//       //   },
//       //   biography: {
//       //     create: {
//       //       full_name: zodifiedData.data.biography?.full_name ?? "No Name",
//       //       alter_egos:
//       //         zodifiedData.data.biography?.alter_egos ?? "No Alter-Egos",
//       //       aliases: {
//       //         create: (zodifiedData.data.biography?.aliases ?? []).map(
//       //           (alias) => ({
//       //             aliases: alias.trim(),
//       //           })
//       //         ),
//       //       },
//       //       place_of_birth:
//       //         zodifiedData.data.biography?.place_of_birth ??
//       //         "No Place of Birth",
//       //       first_appearance:
//       //         zodifiedData.data.biography?.first_appearance ?? "No Appearances",
//       //       publisher: zodifiedData.data.biography?.publisher ?? "No Publisher",
//       //       alignment: zodifiedData.data.biography?.alignment ?? "No Alignment",
//       //     },
//       //   },
//       //   appearance: {
//       //     create: {
//       //       gender: zodifiedData.data.appearance?.gender ?? "No Gender",
//       //       race: zodifiedData.data.appearance?.race ?? "No Race",
//       //       height: {
//       //         create: [
//       //           {
//       //             imperial:
//       //               heightMetricToImperial(
//       //                 parseInt(
//       //                   Array.isArray(zodifiedData.data.appearance?.height)
//       //                     ? zodifiedData.data.appearance?.height.join(", ")
//       //                     : zodifiedData.data.appearance?.height ?? "No Height"
//       //                 )
//       //               ) ?? "No Height",
//       //             metric: Array.isArray(zodifiedData.data.appearance?.height)
//       //               ? zodifiedData.data.appearance?.height.join(", ")
//       //               : zodifiedData.data.appearance?.height ?? "No Height",
//       //           },
//       //         ],
//       //       },
//       //       weight: {
//       //         create: [
//       //           {
//       //             imperial: (
//       //               weightMetricToImperial(
//       //                 parseInt(
//       //                   Array.isArray(zodifiedData.data.appearance?.height)
//       //                     ? zodifiedData.data.appearance?.height.join(", ")
//       //                     : zodifiedData.data.appearance?.height ?? "No Height"
//       //                 )
//       //               ) ?? "No Weight"
//       //             ).toString(),
//       //             metric: Array.isArray(zodifiedData.data.appearance?.weight)
//       //               ? zodifiedData.data.appearance?.weight.join(", ")
//       //               : zodifiedData.data.appearance?.weight ?? "No Weight",
//       //           },
//       //         ],
//       //       },
//       //       eye_color:
//       //         zodifiedData.data.appearance?.eye_color ?? "No Eye Color",
//       //       hair_color:
//       //         zodifiedData.data.appearance?.hair_color ?? "No Hair Color",
//       //     },
//       //   },
//       //   work: {
//       //     create: {
//       //       occupation: zodifiedData.data.work?.occupation ?? "No Occupations",
//       //       base: zodifiedData.data.work?.base ?? "No Bases",
//       //     },
//       //   },
//       //   connections: {
//       //     create: {
//       //       relatives:
//       //         zodifiedData.data.connections?.relatives ?? "No Relatives",
//       //       group_affiliation:
//       //         zodifiedData.data.connections?.group_affiliation ??
//       //         "No Group Affiliations",
//       //     },
//       //   },
//       //   image: {
//       //     create: {
//       //       url: zodifiedData.data.image?.url ?? "No Image",
//       //       page_background: zodifiedData.data.image?.page_background ?? "None",
//       //     },
//       //   },
//       //   // Ensure the creator property is either removed or properly mapped
//       //   ...(zodifiedData.data.creator?.id && {
//       //     creator: {
//       //       connect: {
//       //         id: zodifiedData.data.creator.id ?? "No user id found",
//       //       },
//       //     },
//       //   }),
//       // },

//       data: {
//         name: formData.name ?? "No Name",
//         slug: (formData.name ?? "No Name")
//           .trim()
//           .toLowerCase()
//           .replace(/\s+/g, "-"),
//         powerstats: {
//           create: {
//             combat: (formData.powerstats?.combat ?? 0).toString(),
//             durability: (formData.powerstats?.durability ?? 0).toString(),
//             power: (formData.powerstats?.power ?? 0).toString(),
//             intelligence: (formData.powerstats?.intelligence ?? 0).toString(),
//             speed: (formData.powerstats?.speed ?? 0).toString(),
//             strength: (formData.powerstats?.strength ?? 0).toString(),
//           },
//         },
//         biography: {
//           create: {
//             full_name: formData.biography?.full_name ?? "No Name",
//             alter_egos: formData.biography?.alter_egos ?? "No Alter-Egos",
//             aliases: {
//               create: (Array.isArray(formData.biography?.aliases)
//                 ? formData.biography.aliases
//                 : [formData.biography?.aliases ?? "No Aliases"]
//               ).map((alias) => ({
//                 aliases: alias,
//               })),
//             },
//             place_of_birth:
//               formData.biography?.place_of_birth ?? "No Place of Birth",
//             first_appearance:
//               formData.biography?.first_appearance ?? "No Appearances",
//             publisher: formData.biography?.publisher ?? "No Publisher",
//             alignment: alignment,
//           },
//         },
//         appearance: {
//           create: {
//             gender: gender,
//             height: {
//               create: [
//                 {
//                   imperial:
//                     heightMetricToImperial(
//                       parseInt(
//                         Array.isArray(formData.appearance?.height)
//                           ? formData.appearance.height.join(", ")
//                           : formData.appearance?.height ?? "No Height"
//                       )
//                     ) || "No Height",
//                   metric: Array.isArray(formData.appearance?.height)
//                     ? formData.appearance.height.join(", ")
//                     : formData.appearance?.height ?? "No Height",
//                 },
//               ],
//             },
//             weight: {
//               create: [
//                 {
//                   imperial: weightMetricToImperial(
//                     Array.isArray(formData.appearance?.weight)
//                       ? formData.appearance.weight.join(", ")
//                       : formData.appearance?.height ?? "No Height"
//                   ).toString(),
//                   metric: Array.isArray(formData.appearance?.weight)
//                     ? formData.appearance.weight.join(", ")
//                     : formData.appearance?.weight ?? "No Weight",
//                 },
//               ],
//             },
//             eye_color: formData.appearance?.eye_color ?? "No Eye Color",
//             hair_color: formData.appearance?.hair_color ?? "No Hair Color",
//           },
//         },
//         work: {
//           create: {
//             occupation: formData.work?.occupation ?? "No Occupations",
//             base: formData.work?.base ?? "No Bases",
//           },
//         },
//         connections: {
//           create: {
//             relatives: formData.connections?.relatives ?? "No Relatives",
//             group_affiliation:
//               formData.connections?.group_affiliation ??
//               "No Group Affiliations",
//           },
//         },
//         image: {
//           create: {
//             url: formData.image.url ?? "No Image",
//             page_background: pageBackground,
//           },
//         },
//         creator: {
//           connect: {
//             id: formData.creator?.id,
//           },
//         },
//       },
//     });
//   } catch (e) {
//     console.log("Error in createHero action");
//     console.error(e);
//   } finally {
//     console.log(formData.name);
//     console.log("createHero action complete");
//   }
// }

export async function createHero(data: TCreateHeroInput) {
  try {
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
      },
    });

    return hero;
  } catch (e) {
    console.log("Error in createHero");
    console.error(e);
  }
}
