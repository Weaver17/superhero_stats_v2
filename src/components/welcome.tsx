import React from "react";
import { Button } from "./ui/button";

function Welcome() {
  return (
    <div className=" p-25 flex flex-col items-center justify-center gap-8">
      <h1 className="text-7xl font-medium">Welcome to SuperHero Stats!</h1>
      <p className="text-3xl font-medium">
        Search for a Hero below and click on the card to go to that hero's stat
        page
      </p>
      <p className="text-3xl font-medium">
        Click{" "}
        <Button
          variant={"ghost"}
          className="text-3xl font-medium px-1 underline"
        >
          here
        </Button>{" "}
        to preview stat categories
      </p>
    </div>
  );
}

export default Welcome;
