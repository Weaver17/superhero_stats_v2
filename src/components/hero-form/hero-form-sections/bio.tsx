import React from "react";
import HeroFormList from "../hero-form-components/list";
import { CUSTOM_HERO_ALIGNMENT } from "@/lib/constants";
import HeroFormDropdown from "../hero-form-components/dropdown";
import HeroFormTextInput from "../hero-form-components/text-input";

function HeroFormBio() {
  return (
    <div className="flex flex-col gap-4 px-20 max-w-120 py-4 border border-muted-foreground">
      <h3 className="text-center font-semibold text-2xl  pb-4 border-b border-secondary">
        Biography
      </h3>
      <HeroFormList
        formName="alter-egos"
        label="Alter-Ego(s)"
        description="Enter any of your hero's alter-egos.  (you may add up to three. If none you can input 'None')"
      />
      <HeroFormList
        formName="aliases"
        label="Aliases(s)"
        description="Enter any your of hero's aliases.     (you may add up to three. If none you can input 'None')"
      />
      <HeroFormTextInput
        formName="birthplace"
        placeholder="Earth, Krypton, etc..."
        label="Place of Birth"
        description="Enter your hero's birthplace.  (if unknown, input 'Unknown')"
      />
      <HeroFormTextInput
        formName="first-appearance"
        placeholder="First Appearance"
        label="First Appearance"
        description="Enter where your hero first made their appearance to the world! (if unknown, input 'Unknown')"
      />
      <HeroFormTextInput
        formName="publisher"
        placeholder="Publisher"
        label="Publisher"
        description="Enter the publisher of your hero"
      />
      <HeroFormDropdown
        formName="alignment"
        placeholder=""
        label="Alignment"
        description="Is your hero Good, Neutral, or EVIL(bad)"
        options={CUSTOM_HERO_ALIGNMENT}
      />
    </div>
  );
}

export default HeroFormBio;
