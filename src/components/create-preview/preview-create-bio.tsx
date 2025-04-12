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
    <div className="px-6 flex flex-col justify-center gap-6">
      <h3 className="font-semibold  text-2xl text-center">Biography</h3>
      <ul className="flex flex-col  mx-auto gap-4 w-[80%] text-xl justify-between">
        <li className="stat-wrapper justify-between">
          <p className="font-semibold">Alter Egos:</p>
          <div className="w-[40%]">
            <p className="text-secondary">{alter_egos}</p>
          </div>
        </li>
        <li className="stat-wrapper-list justify-between ">
          <p className="font-semibold">Aliases:</p>
          <div className="w-[40%]">
            <ul className="text-secondary overflow-ellipsis ">
              {aliases.map((a, i) => (
                <li key={`${a} - ${i}`}>{a}</li>
              ))}
            </ul>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold">Place of Birth:</p>
          <div className="w-[40%]">
            <p className="text-secondary text-">{place_of_birth}</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold">First Appearance:</p>
          <div className="w-[40%]">
            <p className="text-secondary">{first_appearance}</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold">Publisher:</p>
          <div className="w-[40%]">
            <p className="text-secondary">{publisher}</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold">Alignment:</p>
          <div className="w-[40%]">
            <p className="text-secondary">{alignment}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CreateBioPreview;
