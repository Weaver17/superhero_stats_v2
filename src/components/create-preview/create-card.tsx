import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { CREATE_PREVIEW_HERO } from "@/lib/create-preview-hero";
import { getBorderClass } from "@/lib/utils";

function CreateCard() {
  const hero = CREATE_PREVIEW_HERO;
  const publisher = hero?.biography?.publisher;
  const borderClass = getBorderClass(publisher);

  return (
    <Link href={`/hero/${hero.id}`}>
      <li className="cursor-pointer hover:scale-110 transition-transform duration-200">
        <Card className={`flex flex-col items-center ${borderClass} `}>
          <Image
            className="w-[300px] h-[375px] object-cover object-left"
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

export default CreateCard;
