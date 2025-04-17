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
          metric: 0,
        },
        weight: {
          metric: 0,
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
        combat: 0,
        durability: 0,
        intelligence: 0,
        speed: 0,
        power: 0,
        strength: 0,
      },
      image: {
        url: "",
        page_background: "None",
      },
    },
  });

  return heroForm;
}
