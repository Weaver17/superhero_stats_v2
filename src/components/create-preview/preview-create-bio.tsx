import React from "react";

type CreateBioPreviewProps = {
  alter_egos: string;
  aliases: string[];
  place_of_birth: string;
  first_appearance: string;
  publisher: string;
  alignment: string;
};

function CreateBioPreview({
  alter_egos,
  aliases,
  place_of_birth,
  first_appearance,
  publisher,
  alignment,
}: Readonly<CreateBioPreviewProps>) {
  return (
    <div className="px-6 mt-6 flex flex-col justify-center gap-6 md:w-[30rem] lg:mt-0">
      <h3 className=" mx-auto mb-4 text-md font-semibold md:mb-4 md:text-2xl lg:mb-8">
        Biography
      </h3>
      <ul className="flex flex-col gap-4 md:mx-auto md:w-full md:justify-between">
        <li className="flex flex-col items-center text-center  md:flex-row md:justify-between">
          <p className="preview-stat-title text-end">Alter Egos:</p>
          <p className="text-secondary">{alter_egos ?? "N/A"}</p>
        </li>
        <li className="flex flex-col items-center text-center  md:flex-row md:justify-between">
          <p className="preview-stat-title text-end">Aliases:</p>
          <div className="text-secondary  overflow-ellipsis ">
            {aliases?.slice(0, 3).map((a, i) => (
              <div key={`${a}-${i}`}>{a}</div>
            ))}
          </div>
        </li>
        <li className="flex flex-col items-center text-center  md:flex-row md:justify-between">
          <p className="preview-stat-title text-end">Place of Birth:</p>
          <p className="text-secondary">{place_of_birth ?? "N/A"}</p>
        </li>
        <li className="flex flex-col items-center text-center  md:flex-row md:justify-between">
          <p className="preview-stat-title text-end">First Appearance:</p>
          <p className="text-secondary">{first_appearance ?? "N/A"}</p>
        </li>
        <li className="flex flex-col items-center text-center  md:flex-row md:justify-between">
          <p className="preview-stat-title text-end">Publisher:</p>
          <p className="text-secondary">{publisher ?? "N/A"}</p>
        </li>
        <li className="flex flex-col items-center text-center  md:flex-row md:justify-between">
          <p className="preview-stat-title text-end">Alignment:</p>
          <p className="text-secondary">{alignment ?? "N/A"}</p>
        </li>
      </ul>
    </div>
  );
}

export default CreateBioPreview;
