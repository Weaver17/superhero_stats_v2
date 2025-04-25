import { getBorderClass } from "@/lib/utils";
import Image from "next/image";
import backup from "../../../public/vercel.svg";
import { AspectRatio } from "../ui/aspect-ratio";

type HeroImageProps = {
  image: string;
  name?: string;
  publisher?: string;
};

function HeroImage({ image, name, publisher }: Readonly<HeroImageProps>) {
  const borderClass = getBorderClass(publisher);

  return (
    <div className={`p-2 w-[80%] mx-auto border ${borderClass}`}>
      <AspectRatio ratio={8 / 10}>
        <Image
          className="w-full h-full object-cover mx-auto p-3 contain"
          src={image || backup}
          alt={name ?? "N/A"}
          fill
          priority
        />
      </AspectRatio>
    </div>
  );
}

export default HeroImage;
