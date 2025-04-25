import React from "react";

type HeroNameProps = {
  heroName?: string;
  realName?: string;
};

function HeroName({ heroName, realName }: Readonly<HeroNameProps>) {
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-8 sm:gap-16 md:mb-0 md:mr-16 md:gap-25">
      <h2 className="font-semibold text-center text-2xl md:text-6xl md:font-bold lg:text-8xl ">
        {heroName ?? ""}
      </h2>
      <h3 className=" text-center text-base sm:font-semibold md:text-2xl lg:text-6xl">
        {realName ?? ""}
      </h3>
    </div>
  );
}

export default HeroName;
