import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Hero } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import backup from "../../../public/vercel.svg";
import { getBorderClass } from "@/lib/utils";

interface HeroCardProps {
  hero?: Hero;
}

function PreviewHeroCard({ hero }: Readonly<HeroCardProps>) {
  const publisher = hero?.biography?.publisher;
  const borderClass = getBorderClass(publisher);

  const image =
    hero?.image?.url === "" ||
    hero?.image?.url === undefined ||
    hero?.image?.url === null
      ? backup
      : hero?.image?.url;

  return (
    <Link href={`/hero/${hero?.id}`}>
      <div className="cursor-pointer hover:scale-110 transition-transform duration-200">
        <Card
          className={`flex flex-col items-center ${borderClass} sm:w-[255px] sm:h-[385px] `}
        >
          <Image
            className="w-[200px] h-[275px] "
            src={image ?? backup}
            alt={hero?.name ?? "N/A"}
            width={200}
            height={375}
            priority
          />
          <CardFooter className="flex flex-col gap-2 items-center justify-center">
            <CardTitle>{hero?.name ?? "N/A"}</CardTitle>
            <CardDescription>
              {hero?.biography?.full_name ?? "N/A"}
            </CardDescription>
          </CardFooter>
        </Card>
      </div>
    </Link>
  );
}

export default PreviewHeroCard;
