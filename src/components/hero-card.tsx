import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { dcPublishers, marvelPublishers } from "@/lib/constants";
import { Hero } from "@/lib/types";
import Image from "next/image";

interface HeroCardProps {
  hero: Hero;
}

function HeroCard({ hero }: Readonly<HeroCardProps>) {
  let borderClass = "border-secondary";
  const publisher = hero?.biography?.publisher ?? "";

  if (marvelPublishers.includes(publisher)) {
    borderClass = "border-marvel";
  } else if (dcPublishers.includes(publisher)) {
    borderClass = "border-dc";
  } else {
    switch (publisher) {
      case "NBC - Heroes":
        borderClass = "border-nbc";
        break;
      case "Dark Horse Comics":
        borderClass = "border-dark-horse";
        break;
      case "Wildstorm":
        borderClass = "border-wildstorm";
        break;
      case "Star Trek":
        borderClass = "border-star-trek";
        break;
      case "George Lucas":
        borderClass = "border-star-wars";
        break;
      case "IDW Publishing":
        borderClass = "border-idw";
        break;
      case "Shueisha":
        borderClass = "border-shueisha";
        break;
      case "SyFy":
        borderClass = "border-syfy";
        break;
      case "Sony Pictures":
        borderClass = "border-sony";
        break;
      case "J. K. Rowling":
        borderClass = "border-hp";
        break;
      case "Titan Books":
        borderClass = "border-titan";
        break;
      case "ABC Studios":
        borderClass = "border-abc";
        break;
      case "Rebellion":
        borderClass = "border-rebellion";
        break;
      case "Image Comics":
        borderClass = "border-image";
        break;
      case "Microsoft":
        borderClass = "border-halo";
        break;
      case "J. R. R. Tolkien":
        borderClass = "border-lotr";
        break;
    }
  }

  return (
    <li className="cursor-pointer hover:scale-110 transition-transform duration-200">
      <Card className={`flex flex-col items-center ${borderClass} `}>
        <Image
          className="w-[300px] h-[375px] "
          src={hero.image?.url ?? ""}
          alt={hero?.name ?? "N/A"}
          width={300}
          height={375}
          priority
        />
        <CardFooter className="flex flex-col gap-2 items-center justify-center">
          <CardTitle>{hero.name ?? "N/A"}</CardTitle>
          <CardDescription>
            {hero.biography?.full_name ?? "N/A"}
          </CardDescription>
        </CardFooter>
      </Card>
    </li>
  );
}

export default HeroCard;
