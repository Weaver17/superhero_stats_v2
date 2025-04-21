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

interface CustomAllCardProps {
  hero: Hero;
}

function CustomAllCard({ hero }: Readonly<CustomAllCardProps>) {
  const publisher = "custom";
  const borderClass = getBorderClass(publisher);

  const image =
    hero?.image?.url === "" ||
    hero?.image?.url === undefined ||
    hero?.image?.url === null
      ? backup
      : hero?.image?.url;

  return (
    <Link href={`/custom-hero/${hero.slug}`}>
      <li className="mx-auto w-[255px] h-[385px] cursor-pointer hover:scale-110 transition-transform duration-200 sm:w-[355px] sm:h-[485px]">
        <Card className={`flex flex-col items-center ${borderClass} `}>
          <Image
            className="w-[200px] h-[275px] sm:w-[300px] sm:h-[375px]"
            src={image ?? backup}
            alt={hero?.name ?? "N/A"}
            width={200}
            height={275}
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

export default CustomAllCard;
