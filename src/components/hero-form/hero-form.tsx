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
import { createHero } from "@/actions/actions";
import { z } from "zod";
import { heroSchema } from "@/schema/heroSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type TCreateHeroSchema = z.infer<typeof heroSchema>;

function HeroForm() {
  const heroForm = useForm<TCreateHeroSchema>({
    resolver: zodResolver(heroSchema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = heroForm;

  const onSubmit = async (data: TCreateHeroSchema) => {
    console.log("submit clicked");
    console.log("Data being sent to backend:", data);
    try {
      await createHero(data);
      alert("Hero created successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to create hero. Check the console for details.");
    }
  };

  return (
    <Form {...heroForm}>
      <form
        onSubmit={(e) => {
          console.log(
            "Submitted values:",
            JSON.stringify(heroForm.getValues(), null, 2)
          ); // Debug log
          console.log(errors);
          handleSubmit(onSubmit)(e);
        }}
        className="flex flex-col items-center"
      >
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
        <Button type="submit">
          {isSubmitting ? "Submitting..." : "Submit Your Hero"}
        </Button>
      </form>
    </Form>
  );
}

export default HeroForm;
