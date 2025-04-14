"use client";
import React from "react";

import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import HeroFormGeneral from "./hero-form-sections/general";
import HeroFormBio from "./hero-form-sections/bio";
import HeroFormApp from "./hero-form-sections/app";
import HeroFormWork from "./hero-form-sections/work";
import HeroFormConn from "./hero-form-sections/conn";
import HeroFormStats from "./hero-form-sections/stats";

function HeroForm() {
  const heroForm = useForm();

  return (
    <Form {...heroForm}>
      <form action="" className="flex flex-col items-center">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4 p-4">
            <HeroFormGeneral />
            <HeroFormBio />
          </div>
          <div className="grid grid-cols-2 gap-4 p-4">
            <HeroFormApp />
            <HeroFormWork />
            <HeroFormConn />
            <HeroFormStats />
          </div>
        </div>
        <Button type="submit">Submit Your Hero</Button>
      </form>
    </Form>
  );
}

export default HeroForm;
