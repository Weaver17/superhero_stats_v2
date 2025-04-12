import React from "react";

type HeroNameProps = {
  heroName?: string;
  realName?: string;
};

function HeroName({ heroName, realName }: Readonly<HeroNameProps>) {
  return (
    <div className="mr-16 flex flex-col gap-25 justify-center items-center">
      <h2 className="font-bold text-8xl text-center">{heroName ?? ""}</h2>
      <h3 className="font-semibold text-6xl text-center">{realName ?? ""}</h3>
    </div>
  );
}

export default HeroName;
