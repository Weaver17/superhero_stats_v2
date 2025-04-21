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
import backup from "../../../public/vercel.svg";
import { AspectRatio } from "../ui/aspect-ratio";

interface HeroCardProps {
  hero: Hero;
}

function HeroCard({ hero }: Readonly<HeroCardProps>) {
  const publisher = hero?.biography?.publisher;
  const borderClass = getBorderClass(publisher);

  const image =
    hero?.image?.url === "" ||
    hero?.image?.url === undefined ||
    hero?.image?.url === null
      ? backup
      : hero?.image?.url;

  return (
    <Link href={`/hero/${hero.id}`}>
      <li className="mx-auto w-[255px] h-[385px] cursor-pointer hover:scale-110 transition-transform duration-200 sm:w-[355px] sm:h-[485px]">
        <Card className={`flex flex-col items-center ${borderClass} `}>
          <div className="flex flex-col items-center w-full h-full  sm:max-w-[355px] ">
            <AspectRatio ratio={10 / 11} className="w-full  h-full   ">
              <Image
                className="object-contain w-full  h-full   "
                src={image ?? backup}
                alt={hero?.name ?? "N/A"}
                fill
                priority
              />
            </AspectRatio>
          </div>
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
