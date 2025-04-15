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
    <div className="px-6 flex flex-col justify-center gap-6">
      <h3 className="font-semibold text-4xl text-center">Appearance</h3>
      <ul className="flex flex-col  mx-auto gap-4 w-[80%] text-xl justify-between">
        <li className="stat-wrapper justify-between">
          <p className="font-semibold self-start text-end">Eye Color:</p>
          <div className="w-[30%]">
            <p className="text-secondary">{eye_color ?? "N/A"}</p>
          </div>
        </li>

        <li className="stat-wrapper justify-between ">
          <p className="font-semibold self-start text-end">Hair Color:</p>
          <div className="w-[30%]">
            <p className="text-secondary text-">{hair_color ?? "N/A"}</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold self-start text-end">Gender:</p>
          <div className="w-[30%]">
            <p className="text-secondary">{gender ?? "N/A"}</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold self-start text-end">Race:</p>
          <div className="w-[30%]">
            <p className="text-secondary">{race ?? "N/A"}</p>
          </div>
        </li>
        <li className="stat-wrapper-list justify-between ">
          <p className="font-semibold self-start text-end">Height:</p>
          <div className="w-[30%]">
            <div className="text-secondary overflow-ellipsis ">
              {height?.map((a, i) => (
                <div key={`${a}-${i}`}>{a}</div>
              ))}
            </div>
          </div>
        </li>
        <li className="stat-wrapper-list justify-between ">
          <p className="font-semibold self-start text-end">Weight:</p>
          <div className="w-[30%]">
            <div className="text-secondary overflow-ellipsis ">
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
