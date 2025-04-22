import React from "react";
import HeroFormTextInput from "../hero-form-components/text-input";
import HeroFormDropdown from "../hero-form-components/dropdown";
import { CUSTOM_HERO_BACKGROUNDS } from "@/lib/constants";

function HeroFormGeneral() {
  return (
    <div className="mx-auto flex flex-col gap-4  max-w-120 py-4 border border-muted-foreground px-10 mg:px-20">
      <h3 className="create-a-hero-section-title">General Info</h3>
      <HeroFormTextInput
        formName="name"
        placeholder="SuperHero Name"
        label="SuperHero Name"
        description="Enter your superhero's Super Name"
      />
      <HeroFormTextInput
        formName="biography.full_name"
        placeholder="Full Name"
        label="Secret Identity"
        description="Your hero's name out on the streets"
      />
      <HeroFormTextInput
        formName="image.url"
        placeholder="https://www.example.com/photo"
        label="SuperHero Image"
        description="Link your hero's image"
      />
      <HeroFormDropdown
        formName="image.page_background"
        placeholder="None"
        label="Page Background"
        description="Select the background for your hero's page. (previews are not available at this time)"
        options={CUSTOM_HERO_BACKGROUNDS}
      />
    </div>
  );
}

export default HeroFormGeneral;
