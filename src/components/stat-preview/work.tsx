"use client";
import { useHeroes } from "@/contexts/heroContext";
import { makeUseful, WORK_HERO_ID } from "@/lib/constants";
import { Hero, WorkType } from "@/lib/types";
import React, { useEffect, useState } from "react";
import PreviewHeroCard from "../cards/preview-hero-card";

function Work() {
  const [workPreviewCard, setWorkPreviewCard] = useState<Hero>({
    image: { url: "" },
  });
  const [workPreview, setWorkPreview] = useState<WorkType | null>(null);

  const { getWorkPreviewHero, getHeroById } = useHeroes();

  useEffect(() => {
    const fetchWorkHero = async () => {
      const workHero = await getHeroById(WORK_HERO_ID);
      const usefulWorkHero = await makeUseful(workHero);
      setWorkPreviewCard(usefulWorkHero);
    };
    fetchWorkHero();

    const fetchWork = async () => {
      const work = await getWorkPreviewHero(WORK_HERO_ID);
      const usefulWork = await makeUseful(work);
      setWorkPreview(usefulWork);
    };
    fetchWork();
  }, []);

  return (
    <div className="p-6 flex flex-col border-b border-secondary md:py-0 md:border-b-0 md:border-r">
      <h3 className=" mx-auto mb-4 text-sm font-semibold md:mb-4 md:text-xl lg:mb-8 lg:text-2xl">
        Work
      </h3>
      <p className="mx-auto mb-4 text-sm font-semibold md:text-lg lg:hidden">
        {workPreviewCard?.name}
      </p>
      <div className="flex gap-5">
        <div className="hidden lg:block">
          <PreviewHeroCard hero={workPreviewCard} />
        </div>
        <ul className="flex flex-col gap-4 w-[100%] h-[90%] justify-between">
          <li className="flex flex-col">
            <p className="preview-stat-title text-center">Occupation:</p>
            <div className="text-secondary text-center">
              {workPreview?.occupation
                ?.split(",")
                .map((o, i) => <div key={`${o}-${i}`}>{o}</div>) ?? "N/A"}
            </div>
          </li>
          <li className="flex flex-col">
            <p className="preview-stat-title text-center">Base(s):</p>
            <div className="text-secondary text-center">
              {workPreview?.base
                ?.split(";")
                .map((b, i) => <div key={`${b}-${i}`}>{b}</div>) ?? "N/A"}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
