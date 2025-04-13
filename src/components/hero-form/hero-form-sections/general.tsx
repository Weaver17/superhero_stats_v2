import React from "react";
import HeroFormTextInput from "../hero-form-components/text-input";
import HeroFormDropdown from "../hero-form-components/dropdown";
import { CUSTOM_HERO_BACKGROUNDS } from "@/lib/constants";

function HeroFormGeneral() {
  return (
    <div className="flex flex-col gap-4 px-20 max-w-120 py-4 border border-muted-foreground ">
      <h3 className="text-center font-semibold text-2xl pb-4 border-b border-secondary">
        General Info
      </h3>
      <HeroFormTextInput
        formName="hero-name"
        placeholder="SuperHero Name"
        label="SuperHero Name"
        description="Enter your superhero's Super Name"
      />
      <HeroFormTextInput
        formName="full-name"
        placeholder="Full Name"
        label="Secret Identity"
        description="Your hero's name out on the streets"
      />
      <HeroFormTextInput
        formName="hero-image"
        placeholder="https://www.example.com/photo"
        label="SuperHero Image"
        description="Link your hero's image"
      />
      <HeroFormDropdown
        formName="page-background"
        placeholder="None"
        label="Page Background"
        description="Select the background for your hero's page. (previews are not available at this time)"
        options={CUSTOM_HERO_BACKGROUNDS}
      />
    </div>
  );
}

export default HeroFormGeneral;
