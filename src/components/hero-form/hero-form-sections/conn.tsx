import React from "react";
import HeroFormList from "../hero-form-components/list";

function HeroFormConn() {
  return (
    <div className="flex flex-col gap-4 max-w-120 py-4 border border-muted-foreground px-10 mg:px-20">
      <h3 className="create-a-hero-section-title">Connections</h3>

      <HeroFormList
        formName="connections.relatives"
        label="Relatives"
        description="Enter your hero's relatives, like father, brother, or wife. Please separate each relative with a comma( , ). (You may add up to three. If none you can input 'None')"
      />
      <HeroFormList
        formName="connections.group_affiliations"
        label="Group Afilliations(s)"
        description="Enter any of your hero's group affiliations, like The Avengers, or E.V.I.L.(Every Villain Is Lemons). Please separate each group with a semicolon( ; ). (You may add up to three. If none you can input 'None')"
      />
    </div>
  );
}

export default HeroFormConn;
