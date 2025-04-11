import React from "react";
import CreateCardPreview from "./create-preview/preview-create-card";
import CreateBioPreview from "./create-preview/preview-create-bio";
import CreatePowerPreview from "./create-preview/preview-create-power";

function CreateAHeroPreview() {
  return (
    <div id="create-a-hero" className="flex flex-col gap-10 scroll-mt-30">
      <div className="grid grid-cols-3 items-start mx-5 py-10 border-b border-secondary">
        <CreateCardPreview />
        <div className="flex flex-col gap-10 mt-20 text-center">
          <h4 className="font-semibold text-3xl">
            Sign up to create your own hero!
          </h4>
          <p className="font-semibold text-2xl">
            Customize image, name, powerstats and more!
          </p>
        </div>
        <CreateBioPreview />
      </div>
      <CreatePowerPreview />
    </div>
  );
}

export default CreateAHeroPreview;
