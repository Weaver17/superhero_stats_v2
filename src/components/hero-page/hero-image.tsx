import { getBorderClass } from "@/lib/utils";
import Image from "next/image";
import backup from "../../../public/vercel.svg";

type HeroImageProps = {
  image: string;
  name?: string;
  publisher?: string;
};

function HeroImage({ image, name, publisher }: Readonly<HeroImageProps>) {
  const borderClass = getBorderClass(publisher);

  return (
    <div className={`py-5 w-[80%] border ${borderClass}`}>
      <Image
        className="w-[500px] h-[650px] mx-auto p-3 "
        src={image || backup}
        alt={name ?? "N/A"}
        width={300}
        height={375}
        priority
      />
    </div>
  );
}

export default HeroImage;
