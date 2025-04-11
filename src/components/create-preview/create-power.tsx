import React from "react";
import StatBar from "../stat-bar";

function CreatePower() {
  return (
    <div className="px-10 flex flex-col gap-6">
      <h4 className="font-semibold text-2xl text-center">Powerstats</h4>
      <ul className="flex flex-col w-[100%] gap-6">
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">Combat:</p>
          <StatBar level="82" />
        </li>
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">
            Durability:
          </p>
          <StatBar level="10" />
        </li>
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">
            Intelligence:
          </p>
          <StatBar level="5" />
        </li>
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">Power:</p>
          <StatBar level="43" />
        </li>
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">Speed:</p>
          <StatBar level="90" />
        </li>
        <li className="stat-wrapper">
          <p className="w-[150px] font-semibold text-xl text-end">Strength:</p>
          <StatBar level="50" />
        </li>
      </ul>
    </div>
  );
}

export default CreatePower;
