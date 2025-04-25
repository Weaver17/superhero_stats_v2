import React from "react";

type HeroConnProps = {
  group_affiliation?: string;
  relatives?: string;
};

function HeroConn({ group_affiliation, relatives }: Readonly<HeroConnProps>) {
  return (
    <div className="p-6 flex flex-col lg:py-0">
      <h3 className="font-semibold text-xl mb-4 text-center md:text-4xl">
        Connections
      </h3>

      <ul className="flex flex-col gap-4 h-[90%] justify-between mx-auto min-w-[60%]">
        <li className="flex flex-col text-center  ">
          <p className="text-base sm:font-semibold md:text-xl">Relatives:</p>
          <div className="text-secondary text-sm md:text-xl">
            {relatives
              ?.split(",")
              .map((r, i) => <div key={`${r}-${i}`}>{r}</div>) ?? "N/A"}
          </div>
        </li>
        <li className="flex flex-col text-center ">
          <p className="text-base sm:font-semibold md:text-xl">
            Group Affiliation(s):
          </p>
          <div className="text-secondary text-sm md:text-xl">
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
