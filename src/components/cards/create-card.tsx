import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import backup from "../../../public/vercel.svg";

type CreateCardProps = {
  heroName?: string;
  fullName?: string;
  image?: string;
};

function CreateCard({ heroName, fullName, image }: Readonly<CreateCardProps>) {
  return (
    <div>
      <Card className={`flex flex-col items-center border-foreground `}>
        <Image
          className="w-[300px] h-[375px] object-contain "
          src={image === "" ? backup : image}
          alt="Stand-In"
          width={300}
          height={375}
          priority
        />
        <CardFooter className="flex flex-col gap-2 items-center justify-center">
          <CardTitle>{heroName}</CardTitle>
          <CardDescription>{fullName}</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CreateCard;
