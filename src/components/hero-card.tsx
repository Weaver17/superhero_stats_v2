import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Hero } from "@/lib/types";
import Image from "next/image";

interface HeroCardProps {
  hero: Hero;
}

function HeroCard({ hero }: Readonly<HeroCardProps>) {
  return (
    <li>
      <Card className="flex flex-col items-center border-dc">
        <Image
          className="w-[300px] h-[375px] "
          src={hero.image?.url || ""}
          alt={`${hero.name} image`}
          width={300}
          height={375}
          priority
        />
        <CardFooter className="flex flex-col gap-2 items-center justify-center">
          <CardTitle>{hero.name}</CardTitle>
          <CardDescription>{hero.biography?.full_name}</CardDescription>
        </CardFooter>
      </Card>
    </li>
  );
}

export default HeroCard;
