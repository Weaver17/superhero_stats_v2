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
    <div className="p-6 flex flex-col border-b border-secondary lg:py-0 lg:border-b-0 lg:border-r">
      <h3 className="font-semibold text-xl mb-4 text-center md:text-4xl">
        Biography
      </h3>
      <ul className="flex flex-col gap-4 h-[90%] justify-between mx-auto min-w-[60%]  lg:min-w-[50%]">
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            Alter Egos:
          </p>
          <div className="w-[40%]">
            <p className="text-secondary text-sm sm:text-end md:text-xl">
              {alter_egos ?? "N/A"}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between ">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            Aliases:
          </p>
          <div className="w-[40%]">
            <div className="text-secondary text-sm sm:text-end md:text-xl overflow-ellipsis ">
              {aliases?.map((a, i) => (
                <div key={`${a}-${i}`}>{a}</div>
              ))}
            </div>
          </div>
        </li>
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between ">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            Place of Birth:
          </p>
          <div className="w-[40%]">
            <p className="text-secondary text-sm sm:text-end md:text-xl text-">
              {place_of_birth ?? "N/A"}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between ">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            First Appearance:
          </p>
          <div className="w-[40%]">
            <p className="text-secondary text-sm sm:text-end md:text-xl">
              {first_appearance ?? "N/A"}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between ">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            Publisher:
          </p>
          <div className="w-[40%]">
            <p className="text-secondary text-sm sm:text-end md:text-xl">
              {publisher ?? "N/A"}
            </p>
          </div>
        </li>
        <li className="flex flex-col items-center text-center sm:flex-row sm:justify-between ">
          <p className="text-base sm:font-semibold sm:self-start md:text-xl">
            Alignment:
          </p>
          <div className="w-[40%]">
            <p className="text-secondary text-sm sm:text-end md:text-xl">
              {alignment ?? "N/A"}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HeroBio;
