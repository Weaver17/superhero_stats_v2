"use client";
import React from "react";

import { Form } from "../ui/form";
import { Button } from "../ui/button";
import HeroFormGeneral from "./hero-form-sections/general";
import HeroFormBio from "./hero-form-sections/bio";
import HeroFormApp from "./hero-form-sections/app";
import HeroFormWork from "./hero-form-sections/work";
import HeroFormConn from "./hero-form-sections/conn";
import HeroFormStats from "./hero-form-sections/stats";
import toast from "react-hot-toast";
import { heroFormErrorToast, heroFormSuccessToast } from "@/lib/toast";
import { useRouter } from "next/navigation";
import { Hero, TCreateHeroSchema } from "@/lib/types";
import useCustomHeroUpdateFormContext from "@/hooks/useCustomHeroUpdateForm";
import { updateHero } from "@/actions/actions";

type CustomUpdateFormProps = {
  hero: Hero;
};

function CustomHeroUpdateForm({ hero }: CustomUpdateFormProps) {
  const router = useRouter();

  const heroForm = useCustomHeroUpdateFormContext(hero);

  const heroSlug = hero?.name?.toLowerCase().replace(/\s+/g, "-");

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = heroForm;

  const onSubmit = async (updated: TCreateHeroSchema) => {
    try {
      console.log("onSubmit");
      await updateHero(updated);
      const updatedSlug = updated.name.toLowerCase().replace(/\s+/g, "-");
      toast("Hero changes saved successfully!", heroFormSuccessToast);
      router.push(`/custom-hero/${updatedSlug}`);
    } catch (error) {
      console.error(error);
      toast("Failed to Create Hero: ", heroFormErrorToast);
    }
  };

  function onCancel() {
    router.push(`/custom-hero/${heroSlug}`);
  }

  return (
    <Form {...heroForm}>
      <form
        onSubmit={(e) => {
          handleSubmit(onSubmit)(e);
        }}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col gap-4 p-4 md:flex-row lg:flex-col">
            <HeroFormGeneral />
            <HeroFormBio />
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
            <HeroFormApp />
            <HeroFormWork />
            <HeroFormConn />
            <HeroFormStats />
          </div>
        </div>
        <div className="flex gap-4 md:gap-8">
          <Button onClick={onCancel} type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">
            {isSubmitting ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CustomHeroUpdateForm;
