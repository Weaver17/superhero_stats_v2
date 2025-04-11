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
      <ul className="flex flex-col w-[100%] gap-6">
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">Combat:</p>
          <StatBar level={combat ?? "0"} />
        </li>
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">
            Durability:
          </p>
          <StatBar level={durability ?? "0"} />
        </li>
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">
            Intelligence:
          </p>
          <StatBar level={intelligence ?? "0"} />
        </li>
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">Power:</p>
          <StatBar level={power ?? "0"} />
        </li>
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">Speed:</p>
          <StatBar level={speed ?? "0"} />
        </li>
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">Strength:</p>
          <StatBar level={strength ?? "0"} />
        </li>
      </ul>
    </div>
  );
}

export default HeroPower;
