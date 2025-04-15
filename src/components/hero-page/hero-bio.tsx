import React from "react";

type HeroBioProps = {
  alter_egos?: string;
  aliases?: string[];
  place_of_birth?: string;
  first_appearance?: string;
  publisher?: string;
  alignment?: string;
};

function HeroBio({
  alter_egos,
  aliases,
  place_of_birth,
  first_appearance,
  publisher,
  alignment,
}: Readonly<HeroBioProps>) {
  return (
    <div className="px-6 flex flex-col justify-center gap-6 border-r border-secondary">
      <h3 className="font-semibold text-4xl text-center">Biography</h3>
      <ul className="flex flex-col  mx-auto gap-4 w-[80%] text-xl justify-between">
        <li className="stat-wrapper justify-between">
          <p className="font-semibold self-start text-end">Alter Egos:</p>
          <div className="w-[40%]">
            <p className="text-secondary">{alter_egos ?? "N/A"}</p>
          </div>
        </li>
        <li className="stat-wrapper-list justify-between ">
          <p className="font-semibold self-start text-end">Aliases:</p>
          <div className="w-[40%]">
            <div className="text-secondary overflow-ellipsis ">
              {aliases?.map((a, i) => (
                <div key={`${a}-${i}`}>{a}</div>
              ))}
            </div>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold self-start text-end">Place of Birth:</p>
          <div className="w-[40%]">
            <p className="text-secondary text-">{place_of_birth ?? "N/A"}</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold self-start text-end">First Appearance:</p>
          <div className="w-[40%]">
            <p className="text-secondary">{first_appearance ?? "N/A"}</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold self-start text-end">Publisher:</p>
          <div className="w-[40%]">
            <p className="text-secondary">{publisher ?? "N/A"}</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold self-start text-end">Alignment:</p>
          <div className="w-[40%]">
            <p className="text-secondary">{alignment ?? "N/A"}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HeroBio;
