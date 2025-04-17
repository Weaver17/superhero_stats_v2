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
import toast from "react-hot-toast";
import { heroFormErrorToast, heroFormSuccessToast } from "@/lib/toast";
import { useRouter } from "next/navigation";

type TCreateHeroSchema = z.infer<typeof heroSchema>;

function HeroForm({
  kindeId,
  username,
  userId,
}: Readonly<{ kindeId: string; username: string; userId: string }>) {
  const heroForm = useForm<TCreateHeroSchema>({
    resolver: zodResolver(heroSchema),
  });

  const router = useRouter();

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = heroForm;

  const onSubmit = async (data: TCreateHeroSchema) => {
    try {
      console.log("onSubmit");
      await createHero(data, kindeId, username, userId);
      const heroSlug = data.name.toLowerCase().replace(/\s+/g, "-");
      toast("Hero created successfully!", heroFormSuccessToast);
      router.push(`/custom-hero/${heroSlug}`);
    } catch (error) {
      console.error(error);
      toast("Failed to Create Hero: ", heroFormErrorToast);
    }
  };

  return (
    <Form {...heroForm}>
      <form
        onSubmit={(e) => {
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
