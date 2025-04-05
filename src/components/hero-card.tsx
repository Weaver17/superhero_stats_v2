import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

function HeroCard() {
  return (
    <Card className="flex flex-col items-center">
      <Image
        className="w-[300px] h-[375px] border-md border-accent-foreground "
        src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
        alt="Superhero Photo"
        width={300}
        height={375}
      />
      <CardFooter className="flex flex-col gap-2 items-center justify-center">
        <CardTitle>Superhero Name</CardTitle>
        <CardDescription>Full Name</CardDescription>
      </CardFooter>
    </Card>
  );
}

export default HeroCard;
