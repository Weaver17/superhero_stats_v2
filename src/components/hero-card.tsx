"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import useHeroContextHook from "@/hooks/useHeroContextHook";
// import { Hero } from "@/lib/types";
import Image from "next/image";

// type HeroCardProps = {
//   readonly batman: Hero;
// };

function HeroCard() {
  const { contextGetBatman } = useHeroContextHook();

  const getBatman = () => {
    const batman = contextGetBatman();
    console.log(batman);
  };

  return (
    <Card className="flex flex-col items-center border-dc">
      <Image
        className="w-[300px] h-[375px] "
        src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        alt="Superhero Photo"
        width={300}
        height={375}
      />
      <CardFooter className="flex flex-col gap-2 items-center justify-center">
        <CardTitle onClick={getBatman}>Superhero Name</CardTitle>
        <CardDescription>Full Name</CardDescription>
      </CardFooter>
    </Card>
  );
}

export default HeroCard;
