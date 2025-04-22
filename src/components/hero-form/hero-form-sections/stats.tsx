import React from "react";
import HeroFormNumberInput from "../hero-form-components/number-input";

function HeroFormStats() {
  return (
    <div className="flex flex-col gap-4 max-w-120 py-4 border border-muted-foreground px-10 mg:px-20">
      <h3 className="create-a-hero-section-title">Powerstats</h3>
      <HeroFormNumberInput
        formName="powerstats.combat"
        label="Combat"
        placeholder="1s-100"
        description="How does your hero fair in combat?"
      />
      <HeroFormNumberInput
        formName="powerstats.durability"
        placeholder="1-100"
        label="Durability"
        description="For how long can your hero keep fighing?"
      />
      <HeroFormNumberInput
        formName="powerstats.intelligence"
        label="Intelligence"
        placeholder="1-100"
        description="How smart is your hero?"
      />
      <HeroFormNumberInput
        formName="powerstats.power"
        placeholder="1-100"
        label="Power"
        description="POWERRRRRRR!!1!!!"
      />
      <HeroFormNumberInput
        formName="powerstats.speed"
        label="Speed"
        placeholder="1-100"
        description="How fast is your hero?"
      />
      <HeroFormNumberInput
        formName="powerstats.strength"
        placeholder="1-100"
        label="Strength"
        description="Physical strength, not inner strength"
      />
      <p className="py-4 text-sm text-muted-foreground text-center">
        All values must be between 1-100
      </p>
    </div>
  );
}

export default HeroFormStats;
