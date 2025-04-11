import React from "react";

type HeroConnProps = {
  group_affiliation?: string;
  relatives?: string;
};

function HeroConn({ group_affiliation, relatives }: Readonly<HeroConnProps>) {
  return (
    <div className="px-6 flex flex-col justify-center min-h-100 ">
      <h3 className="font-semibold justify-self-start  text-4xl mx-auto mb-8">
        Connections
      </h3>

      <ul className="flex flex-col gap-4 w-[100%] h-[90%] justify-between">
        <li className="flex flex-col  ">
          <p className="font-semibold text-xl text-center">Relatives:</p>
          <ul className="text-secondary text-center">
            {relatives
              ?.split(",")
              .map((r, i) => <li key={`${r}-${i}`}>{r}</li>) ?? "N/A"}
          </ul>
        </li>
        <li className="flex flex-col ">
          <p className="font-semibold text-xl text-center">
            Group Affiliation(s):
          </p>
          <ul className="text-secondary text-center">
            {group_affiliation
              ?.split(";")
              .map((g, i) => <li key={`${g}-${i}`}>{g}</li>) ?? "N/A"}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default HeroConn;
