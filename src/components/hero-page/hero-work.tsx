import React from "react";

type HeroWorkProps = {
  occupation?: string;
  base?: string;
};

function HeroWork({ occupation, base }: Readonly<HeroWorkProps>) {
  return (
    <div className="p-6 flex flex-col border-b border-secondary lg:py-0 lg:border-b-0">
      <h3 className="font-semibold text-xl mb-4 text-center md:text-4xl">
        Work
      </h3>
      <ul className="flex flex-col gap-4 h-[90%] mx-auto min-w-[60%]  ">
        <li className="flex flex-col text-center">
          <p className="text-base sm:font-semibold md:text-xl">
            Occupation(s):
          </p>
          <p className="text-secondary text-sm md:text-xl">
            {occupation ?? "N/A"}
          </p>
        </li>
        <li className="flex flex-col text-center">
          <p className="text-base sm:font-semibold  md:text-xl">Base(s):</p>
          <div className="text-secondary text-sm md:text-xl">
            {base?.split(";").map((b, i) => (
              <div className=" " key={`${b}-${i}`}>
                {b}
              </div>
            )) ?? "N/A"}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HeroWork;
