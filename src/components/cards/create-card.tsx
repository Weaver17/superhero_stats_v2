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
        className="w-[300px] h-[375px] object-contain "
        src={image || backup}
        alt={heroName ?? "backup image"}
        width={300}
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
