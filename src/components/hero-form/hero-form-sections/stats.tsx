import React from "react";
import HeroFormNumberInput from "../hero-form-components/number-input";

function HeroFormStats() {
  return (
    <div className="flex flex-col gap-4 px-20  max-w-120 py-4 border border-muted-foreground ">
      <h3 className="text-center font-semibold text-2xl  pb-4 border-b border-secondary">
        Powerstats
      </h3>
      <HeroFormNumberInput
        formName="combat"
        label="Combat"
        placeholder="0-100"
        description="How does your hero fair in combat?"
      />
      <HeroFormNumberInput
        formName="durability"
        placeholder="0-100"
        label="Durability"
        description="For how long can your hero keep fighing?"
      />
      <HeroFormNumberInput
        formName="intelligence"
        label="Intelligence"
        placeholder="0-100"
        description="How smart is your hero?"
      />
      <HeroFormNumberInput
        formName="power"
        placeholder="0-100"
        label="Power"
        description="POWERRRRRRR!!1!!!"
      />
      <HeroFormNumberInput
        formName="speed"
        label="Speed"
        placeholder="0-100"
        description="How fast is your hero?"
      />
      <HeroFormNumberInput
        formName="strength"
        placeholder="0-100"
        label="Strength"
        description="Physical strength, not inner strength"
      />
    </div>
  );
}

export default HeroFormStats;
