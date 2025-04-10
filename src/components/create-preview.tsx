import React from "react";
import CreateCard from "./create-preview/create-card";

function CreateAHeroPreview() {
  return (
    <div className="flex p-10">
      <CreateCard />
      <div className="flex flex-col gap-10 ml-20 text-center">
        <h4 className="font-semibold text-3xl">Create your own hero!</h4>
        <p className="font-semibold text-2xl">
          Customize image, name, powerstats and more!
        </p>
      </div>
    </div>
  );
}

export default CreateAHeroPreview;
