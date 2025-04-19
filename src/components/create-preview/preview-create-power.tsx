import React from "react";
import StatBar from "../stat-bar";

type CreatePowerPreviewProps = {
  durability: string;
  combat: string;
  intelligence: string;
  power: string;
  speed: string;
  strength: string;
};

function CreatePowerPreview({
  durability,
  combat,
  intelligence,
  power,
  speed,
  strength,
}: Readonly<CreatePowerPreviewProps>) {
  return (
    <div className="p-7 flex flex-col">
      <h3 className=" mx-auto mb-4 text-sm md:font-semibold md:mb-4 md:text-xl lg:mb-8 lg:text-2xl">
        Powerstats
      </h3>

      <div className="flex pl-8">
        <ul className="flex flex-col gap-4.5 mt-2 mr-2 md:mt-3 md:mr-4 md:gap-8 lg:mt-4 lg:mr-6 lg:gap-12">
          <li className="stat-wrapper">
            <p className="preview-stat-title">Combat:</p>
          </li>
          <li className="stat-wrapper">
            <p className="preview-stat-title">Durability:</p>
          </li>
          <li className="stat-wrapper">
            <p className="preview-stat-title">Intelligence:</p>
          </li>
          <li className="stat-wrapper">
            <p className="preview-stat-title">Power:</p>
          </li>
          <li className="stat-wrapper">
            <p className="preview-stat-title">Speed:</p>
          </li>
          <li className="stat-wrapper">
            <p className="preview-stat-title">Strength:</p>
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

export default CreatePowerPreview;
