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
    <div className="px-6 flex flex-col  border-r border-secondary">
      <h3 className="font-semibold text-2xl mx-auto mb-8">Work</h3>
      <div className="flex gap-5">
        <div>
          <PreviewHeroCard hero={workPreviewCard} />
        </div>
        <ul className="flex flex-col gap-4 w-[100%] h-[90%] justify-between">
          <li className="flex flex-col">
            <p className="font-semibold text-center">Occupation:</p>
            <div className="text-secondary text-center">
              {workPreview?.occupation
                ?.split(",")
                .map((o, i) => <div key={`${o}-${i}`}>{o}</div>) ?? "N/A"}
            </div>
          </li>
          <li className="flex flex-col">
            <p className="font-semibold text-center">Base(s):</p>
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
