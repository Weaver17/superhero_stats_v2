import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { getBorderClass } from "@/lib/utils";
import backup from "../../../public/vercel.svg";

type CreateCardProps = {
  heroName?: string;
  fullName?: string;
  image: string;
  publisher?: string;
};

function CreateCard({
  heroName,
  fullName,
  image,
  publisher,
}: Readonly<CreateCardProps>) {
  const borderClass = getBorderClass(publisher);

  return (
    <Card className={`flex flex-col items-center ${borderClass} `}>
      <Image
        className="object-contain w-[200px] h-[275px] sm:w-[300px] sm:h-[375px] "
        src={image || backup}
        alt={heroName ?? "backup image"}
        width={200}
        height={375}
        priority
      />
      <CardFooter className="flex flex-col gap-2 items-center justify-center">
        <CardTitle>{heroName}</CardTitle>
        <CardDescription>{fullName}</CardDescription>
      </CardFooter>
    </Card>
  );
}

export default CreateCard;
