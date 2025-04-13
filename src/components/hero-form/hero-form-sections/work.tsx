import React from "react";
import HeroFormList from "../hero-form-components/list";

function HeroFormWork() {
  return (
    <div className="flex flex-col gap-4 px-20 max-w-120 py-4 border border-muted-foreground">
      <h3 className="text-center font-semibold text-2xl  pb-4 border-b border-secondary">
        Work
      </h3>
      <HeroFormList
        formName="occupations"
        label="Occupations(s)"
        description="Enter your hero's day-to-day job(s), like journalist. (you may add up to three. If none you can input 'None')"
      />
      <HeroFormList
        formName="bases"
        label="Base(s)"
        description="Enter your hero's base(s), like New York, New York. (you may add up to three. If none you can input 'None')"
      />
    </div>
  );
}

export default HeroFormWork;
