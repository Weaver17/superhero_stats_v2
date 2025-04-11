import React from "react";

function CreateBio() {
  return (
    <div className="px-6 flex flex-col justify-center gap-6">
      <h3 className="font-semibold  text-2xl text-center">Biography</h3>
      <ul className="flex flex-col  mx-auto gap-4 w-[80%] text-xl justify-between">
        <li className="stat-wrapper justify-between">
          <p className="font-semibold">Alter Egos:</p>
          <div className="w-[40%]">
            <p className="text-secondary">Theodore</p>
          </div>
        </li>
        <li className="stat-wrapper-list justify-between ">
          <p className="font-semibold">Aliases:</p>
          <div className="w-[40%]">
            <ul className="text-secondary overflow-ellipsis ">
              <li key={2}>The One Who Wacks</li>
              <li key={3}>One Plus One</li>
            </ul>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold">Place of Birth:</p>
          <div className="w-[40%]">
            <p className="text-secondary text-">Coruscant</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold">First Appearance:</p>
          <div className="w-[40%]">
            <p className="text-secondary">Yet to Come</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold">Publisher:</p>
          <div className="w-[40%]">
            <p className="text-secondary">N/A</p>
          </div>
        </li>
        <li className="stat-wrapper justify-between ">
          <p className="font-semibold">Alignment:</p>
          <div className="w-[40%]">
            <p className="text-secondary">Good.. for now</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CreateBio;
