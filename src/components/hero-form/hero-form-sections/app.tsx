import React from "react";
import { CUSTOM_HERO_GENDERS } from "@/lib/constants";
import HeroFormDropdown from "../hero-form-components/dropdown";
import HeroFormTextInput from "../hero-form-components/text-input";
import HeroFormNumberInput from "../hero-form-components/number-input";

function HeroFormApp() {
  return (
    <div className="flex flex-col gap-4  max-w-120 py-4 border border-muted-foreground px-10 mg:px-20">
      <h3 className="create-a-hero-section-title">Appearance</h3>
      <HeroFormDropdown
        formName="appearance.gender"
        label="Gender"
        description="Enter your hero's gender"
        placeholder="Gender"
        options={CUSTOM_HERO_GENDERS}
      />
      <HeroFormTextInput
        formName="appearance.race"
        placeholder="Human, Mermaid, Vulcan, etc..."
        label="Race"
        description="Enter your hero's race"
      />
      <HeroFormNumberInput
        formName="appearance.height.metric"
        label="Height"
        placeholder="188"
        description="Enter your hero's height in centimeters"
      />
      <HeroFormNumberInput
        formName="appearance.weight.metric"
        placeholder="86"
        label="Weight"
        description="Enter your hero's weight in kilograms"
      />
      <HeroFormTextInput
        formName="appearance.eye_color"
        placeholder="Eye Color"
        label="Eye Color"
        description="Enter your hero's eye color"
      />
      <HeroFormTextInput
        formName="appearance.hair_color"
        placeholder="Hair Color"
        label="Hair Color"
        description="Enter your hero's hair color"
      />
    </div>
  );
}

export default HeroFormApp;
