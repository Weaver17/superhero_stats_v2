import React from "react";
import HeroFormList from "../hero-form-components/list";
import { CUSTOM_HERO_ALIGNMENT } from "@/lib/constants";
import HeroFormDropdown from "../hero-form-components/dropdown";
import HeroFormTextInput from "../hero-form-components/text-input";

function HeroFormBio() {
  return (
    <div className="mx-auto flex flex-col gap-4 max-w-120 py-4 border border-muted-foreground px-10 mg:px-20">
      <h3 className="create-a-hero-section-title">Biography</h3>
      <HeroFormList
        formName="biography.alter_egos"
        label="Alter-Ego(s)"
        description="Enter any of your hero's alter-egos.  (You may add up to three. If none you can input 'None')"
      />
      <HeroFormList
        formName="biography.aliases"
        label="Aliases(s)"
        description="Enter any your of hero's aliases. Please separate each alias with a semicolon( ; ). (You may add up to three. If none you can input 'None')"
      />
      <HeroFormTextInput
        formName="biography.place_of_birth"
        placeholder="Earth, Krypton, etc..."
        label="Place of Birth"
        description="Enter your hero's birthplace.  (If unknown, input 'Unknown')"
      />
      <HeroFormTextInput
        formName="biography.first_appearance"
        placeholder="First Appearance"
        label="First Appearance"
        description="Enter where your hero first made their appearance to the world! (If unknown, input 'Unknown')"
      />
      <HeroFormTextInput
        formName="biography.publisher"
        placeholder="Publisher"
        label="Publisher"
        description="Enter the publisher of your hero"
      />
      <HeroFormDropdown
        formName="biography.alignment"
        placeholder=""
        label="Alignment"
        description="Is your hero Good, Neutral, or EVIL(bad)"
        options={CUSTOM_HERO_ALIGNMENT}
      />
    </div>
  );
}

export default HeroFormBio;
