import React from "react";
import CreateCard from "./create-preview/create-card";
import CreateBio from "./create-preview/create-bio";
import CreatePower from "./create-preview/create-power";

function CreateAHeroPreview() {
  return (
    <div className="flex flex-col gap-10">
      <div
        className="grid grid-cols-3 items-start mx-5 py-10 border-b border-secondary"
        id="create-a-hero"
      >
        <CreateCard />
        <div className="flex flex-col gap-10 mt-20 text-center">
          <h4 className="font-semibold text-3xl">Create your own hero!</h4>
          <p className="font-semibold text-2xl">
            Customize image, name, powerstats and more!
          </p>
        </div>
        <CreateBio />
      </div>
      <CreatePower />
    </div>
  );
}

export default CreateAHeroPreview;
