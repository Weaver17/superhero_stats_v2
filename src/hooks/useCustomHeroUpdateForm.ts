import { Hero, TCreateHeroSchema } from "@/lib/types";
import { heroSchema } from "@/schema/heroSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function useCustomHeroUpdateFormContext(hero: Hero) {
  const customHeroUpdateForm = useForm<TCreateHeroSchema>({
    resolver: zodResolver(heroSchema),
    defaultValues: {
      name: hero?.name ?? "",
      appearance: {
        gender:
          (hero?.appearance?.gender as
            | "Male"
            | "Female"
            | "Trans-Male"
            | "Trans-Female"
            | "Non-Binary"
            | "Unknown"
            | "Other") ?? "Unknown",
        race: hero?.appearance?.race ?? "",
        height: {
          metric: hero?.appearance?.height
            ? parseFloat(hero?.appearance.height[0]) ?? ""
            : 0,
        },
        weight: {
          metric: hero?.appearance?.weight
            ? parseFloat(hero?.appearance.weight[0]) ?? ""
            : 0,
        },
        eye_color: hero?.appearance?.eye_color ?? "",
        hair_color: hero?.appearance?.hair_color ?? "",
      },
      biography: {
        full_name: hero?.biography?.full_name ?? "",
        alter_egos: hero?.biography?.alter_egos ?? "",
        aliases: hero?.biography?.aliases?.join("; ") ?? "",
        place_of_birth: hero?.biography?.place_of_birth ?? "",
        first_appearance: hero?.biography?.first_appearance ?? "",
        publisher: hero?.biography?.publisher ?? "",
        alignment:
          (hero?.biography?.alignment as "good" | "neutral" | "bad") ??
          "neutral",
      },
      work: {
        occupation: hero?.work?.occupation ?? "",
        base: hero?.work?.base ?? "",
      },
      connections: {
        group_affiliations: hero?.connections?.group_affiliation ?? "",
        relatives: hero?.connections?.relatives ?? "",
      },
      powerstats: {
        combat: hero?.powerstats?.combat
          ? parseFloat(hero?.powerstats.combat) ?? ""
          : 0,
        durability: hero?.powerstats?.durability
          ? parseFloat(hero?.powerstats.durability) ?? ""
          : 0,
        intelligence: hero?.powerstats?.intelligence
          ? parseFloat(hero?.powerstats.intelligence) ?? ""
          : 0,
        speed: hero?.powerstats?.speed
          ? parseFloat(hero?.powerstats.speed) ?? ""
          : 0,
        power: hero?.powerstats?.power
          ? parseFloat(hero?.powerstats.power) ?? ""
          : 0,
        strength: hero?.powerstats?.strength
          ? parseFloat(hero?.powerstats.strength) ?? ""
          : 0,
      },
      image: {
        url: hero?.image?.url ?? "",
        page_background:
          (hero?.image?.page_background as
            | "None"
            | "Night City 1"
            | "Night City 2"
            | "Dark 1"
            | "Dark 2"
            | "Space"
            | "Dark Trees") ?? "None",
      },
    },
  });

  return customHeroUpdateForm;
}
