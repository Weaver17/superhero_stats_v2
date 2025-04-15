import React from "react";

type HeroConnProps = {
  group_affiliation?: string;
  relatives?: string;
};

function HeroConn({ group_affiliation, relatives }: Readonly<HeroConnProps>) {
  return (
    <div className="px-6 flex flex-col justify-center ">
      <h3 className="font-semibold  text-4xl text-center mb-2">Connections</h3>

      <ul className="flex flex-col gap-4 w-[100%] h-[90%] justify-between">
        <li className="flex flex-col  ">
          <p className="font-semibold text-xl text-center my-4">Relatives:</p>
          <div className="text-secondary text-center">
            {relatives
              ?.split(",")
              .map((r, i) => <div key={`${r}-${i}`}>{r}</div>) ?? "N/A"}
          </div>
        </li>
        <li className="flex flex-col ">
          <p className="font-semibold text-xl text-center my-4">
            Group Affiliation(s):
          </p>
          <div className="text-secondary text-center">
            {group_affiliation
              ?.split(";")
              .map((g, i) => <div key={`${g}-${i}`}>{g}</div>) ?? "N/A"}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HeroConn;
