import React from "react";
import HeroFormList from "../hero-form-components/list";

function HeroFormWork() {
  return (
    <div className="flex flex-col gap-4 max-w-120 py-4 border border-muted-foreground px-10 mg:px-20">
      <h3 className="create-a-hero-section-title">Work</h3>
      <HeroFormList
        formName="work.occupation"
        label="Occupations(s)"
        description="Enter your hero's day-to-day job(s), like journalist. Please separate each occupation with a comma( , ). (You may add up to three. If none you can input 'None')"
      />
      <HeroFormList
        formName="work.base"
        label="Base(s)"
        description="Enter your hero's base(s), like New York, New York. Please separate each base with a semicolon( ; ). (You may add up to three. If none you can input 'None')"
      />
    </div>
  );
}

export default HeroFormWork;
