import React from "react";
import StatBar from "../stat-bar";

type HeroPowerProps = {
  intelligence?: string;
  strength?: string;
  speed?: string;
  durability?: string;
  power?: string;
  combat?: string;
};

function HeroPower({
  intelligence,
  strength,
  speed,
  durability,
  power,
  combat,
}: Readonly<HeroPowerProps>) {
  return (
    <div className="p-10 flex flex-col gap-6">
      <h4 className="font-semibold text-4xl text-center">Powerstats</h4>
      <div className="flex w-full">
        <ul className="flex flex-col gap-3.5 mt-1 mr-2 md:mt-1.5 md:mr-4 md:gap-7.5 lg:mt-3 lg:mr-6 lg:gap-10">
          <li className="stat-wrapper">
            <p className="text-base md:font-semibold lg:text-xl">Combat:</p>
          </li>
          <li className="stat-wrapper">
            <p className="text-base md:font-semibold lg:text-xl">Durability:</p>
          </li>
          <li className="stat-wrapper">
            <p className="text-base md:font-semibold lg:text-xl">
              Intelligence:
            </p>
          </li>
          <li className="stat-wrapper">
            <p className="text-base md:font-semibold lg:text-xl">Power:</p>
          </li>
          <li className="stat-wrapper">
            <p className="text-base md:font-semibold lg:text-xl">Speed:</p>
          </li>
          <li className="stat-wrapper">
            <p className="text-base md:font-semibold lg:text-xl">Strength:</p>
          </li>
        </ul>
        <div className="flex flex-col gap-1.5 w-[100%] md:gap-[13px] lg:gap-5">
          <StatBar level={combat ?? "0"} />
          <StatBar level={durability ?? "0"} />
          <StatBar level={intelligence ?? "0"} />
          <StatBar level={power ?? "0"} />
          <StatBar level={speed ?? "0"} />
          <StatBar level={strength ?? "0"} />
        </div>
      </div>
    </div>
  );
}

export default HeroPower;
