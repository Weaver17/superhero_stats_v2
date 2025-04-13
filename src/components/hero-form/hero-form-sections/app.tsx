import React from "react";
import { CUSTOM_HERO_GENDERS } from "@/lib/constants";
import HeroFormDropdown from "../hero-form-components/dropdown";
import HeroFormTextInput from "../hero-form-components/text-input";
import HeroFormNumberInput from "../hero-form-components/number-input";

function HeroFormApp() {
  return (
    <div className="flex flex-col gap-4 px-20  max-w-120 py-4 border border-muted-foreground ">
      <h3 className="text-center font-semibold text-2xl  pb-4 border-b border-secondary">
        Appearance
      </h3>
      <HeroFormDropdown
        formName="gender"
        label="Gender"
        description="Enter your hero's gender"
        placeholder="Gender"
        options={CUSTOM_HERO_GENDERS}
      />
      <HeroFormNumberInput
        formName="height"
        label="Height"
        placeholder="188"
        description="Enter your hero's height in centimeters"
      />
      <HeroFormNumberInput
        formName="weight"
        placeholder="86"
        label="Weight"
        description="Enter your hero's weight in kilograms"
      />
      <HeroFormTextInput
        formName="eye-color"
        placeholder="Eye Color"
        label="Eye Color"
        description="Enter your hero's eye color'"
      />
      <HeroFormTextInput
        formName="hair-color"
        placeholder="Hair Color"
        label="Hair Color"
        description="Enter your hero's hair color"
      />
    </div>
  );
}

export default HeroFormApp;
