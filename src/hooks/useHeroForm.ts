import { TCreateHeroSchema } from "@/lib/types";
import { heroSchema } from "@/schema/heroSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function useHeroFormContext() {
  const heroForm = useForm<TCreateHeroSchema>({
    resolver: zodResolver(heroSchema),
    defaultValues: {
      name: "",
      appearance: {
        gender: "Other",
        race: "",
        height: {
          metric: undefined,
        },
        weight: {
          metric: undefined,
        },
        eye_color: "",
        hair_color: "",
      },
      biography: {
        full_name: "",
        alter_egos: "",
        aliases: "",
        place_of_birth: "",
        first_appearance: "",
        publisher: "",
        alignment: "neutral",
      },
      work: {
        occupation: "",
        base: "",
      },
      connections: {
        group_affiliations: "",
        relatives: "",
      },
      powerstats: {
        combat: undefined,
        durability: undefined,
        intelligence: undefined,
        speed: undefined,
        power: undefined,
        strength: undefined,
      },
      image: {
        url: "",
        page_background: "None",
      },
    },
  });

  return heroForm;
}
