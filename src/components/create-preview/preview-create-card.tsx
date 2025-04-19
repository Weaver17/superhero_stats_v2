import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { getBorderClass } from "@/lib/utils";
import backup from "../../../public/vercel.svg";

type CreateCardPreviewProps = {
  image: string;
  heroName: string;
  name: string;
  publisher: string;
  slug: string;
};

function CreateCardPreview({
  image,
  name,
  publisher,
  slug,
  heroName,
}: Readonly<CreateCardPreviewProps>) {
  const borderClass = getBorderClass(publisher);

  return (
    <Link href={`/custom-hero/${slug}`}>
      <div className="cursor-pointer mx-5 hover:scale-110 transition-transform duration-200">
        <Card className={`flex flex-col items-center ${borderClass} `}>
          <Image
            className="w-[300px] h-[375px] object-cover object-left"
            src={image || backup}
            alt={name ?? "N/A"}
            width={300}
            height={375}
            priority
          />
          <CardFooter className="flex flex-col gap-2 items-center justify-center">
            <CardTitle>{heroName ?? "N/A"}</CardTitle>
            <CardDescription>{name ?? "N/A"}</CardDescription>
          </CardFooter>
        </Card>
      </div>
    </Link>
  );
}

export default CreateCardPreview;
