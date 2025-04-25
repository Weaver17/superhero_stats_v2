import React from "react";

type HeroAppProps = {
  gender?: string;
  race?: string;
  height?: string[];
  weight?: string[];
  eye_color?: string;
  hair_color?: string;
};

function HeroApp({
  gender,
  race,
  height,
  weight,
  eye_color,
  hair_color,
}: Readonly<HeroAppProps>) {
  return (
    <div className="p-6 flex flex-col lg:py-0">
      <h3 className="font-semibold text-xl mb-4 text-center md:text-4xl">
        Appearance
      </h3>
      <ul className="flex flex-col gap-4 h-[90%] justify-between mx-auto min-w-[60%]  lg:min-w-[50%]">
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between">
          <p className=" text-base sm:font-semibold sm:self-start md:text-xl">
            Eye Color:
          </p>
          <div className="w-[30%]">
            <p className="text-secondary text-sm sm:text-end md:text-xl">
              {eye_color ?? "N/A"}
            </p>
          </div>
        </li>

        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between ">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            Hair Color:
          </p>
          <div className="w-[30%]">
            <p className="text-secondary text-sm sm:text-end md:text-xl">
              {hair_color ?? "N/A"}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between ">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            Gender:
          </p>
          <div className="w-[30%]">
            <p className="text-secondary text-sm sm:text-end md:text-xl">
              {gender ?? "N/A"}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between ">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            Race:
          </p>
          <div className="w-[30%]">
            <p className="text-secondary text-sm sm:text-end md:text-xl">
              {race ?? "N/A"}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            Height:
          </p>
          <div className="w-[30%]">
            <div className="text-secondary text-sm sm:text-end md:text-xl">
              {height?.map((a, i) => (
                <div key={`${a}-${i}`}>{a}</div>
              ))}
            </div>
          </div>
        </li>
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            Weight:
          </p>
          <div className="w-[30%]">
            <div className="text-secondary text-sm sm:text-end md:text-xl">
              {weight?.map((a, i) => (
                <div key={`${a}-${i}`}>{a}</div>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HeroApp;
