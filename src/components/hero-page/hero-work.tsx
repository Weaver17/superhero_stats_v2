import React from "react";

type HeroWorkProps = {
  occupation?: string;
  base?: string;
};

function HeroWork({ occupation, base }: Readonly<HeroWorkProps>) {
  return (
    <div className="px-6 flex flex-col justify-center ">
      <h3 className="font-semibold  text-4xl text-center mb-2">Work</h3>
      <ul className="flex flex-col gap-4 w-[100%] h-[90%] justify-between">
        <li className="flex flex-col">
          <p className="font-semibold text-xl text-center my-4">
            Occupation(s):
          </p>
          <p className="text-secondary text-center">{occupation ?? "N/A"}</p>
        </li>
        <li className="flex flex-col">
          <p className="font-semibold text-xl text-center my-4">Base(s):</p>
          <ul className="text-secondary text-center">
            {base?.split(";").map((b, i) => (
              <li className=" " key={`${b}-${i}`}>
                {b}
              </li>
            )) ?? "N/A"}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default HeroWork;
