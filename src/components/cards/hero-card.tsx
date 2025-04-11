import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Hero } from "@/lib/types";
import { getBorderClass } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface HeroCardProps {
  hero: Hero;
}

function HeroCard({ hero }: Readonly<HeroCardProps>) {
  const publisher = hero?.biography?.publisher;
  const borderClass = getBorderClass(publisher);

  return (
    <Link href={`/hero/${hero.id}`}>
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
    </Link>
  );
}

export default HeroCard;
