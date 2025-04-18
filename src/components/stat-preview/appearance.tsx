"use client";
import { useHeroes } from "@/contexts/heroContext";
import { APPEARANCE_HERO_ID, makeUseful } from "@/lib/constants";
import { AppearanceType, Hero } from "@/lib/types";
import React, { useEffect, useState } from "react";
import PreviewHeroCard from "../cards/preview-hero-card";

function Appearance() {
  const [appPreviewCard, setAppPreviewCard] = useState<Hero>({
    image: { url: "" }, // Provide a default empty image URL
  });
  const [appPreview, setAppPreview] = useState<AppearanceType | null>(null);

  const { getAppPreviewHero, getHeroById } = useHeroes();

  useEffect(() => {
    const fetchAppearanceHero = async () => {
      const appearanceHero = await getHeroById(APPEARANCE_HERO_ID);
      const usefulAppearanceHero = await makeUseful(appearanceHero);
      setAppPreviewCard(usefulAppearanceHero);
    };
    fetchAppearanceHero();

    const fetchAppearance = async () => {
      const appearance = await getAppPreviewHero(APPEARANCE_HERO_ID);
      const usefulAppearance = await makeUseful(appearance);
      setAppPreview(usefulAppearance);
    };
    fetchAppearance();
  }, []);

  return (
    <div className="px-6 flex flex-col  border-r border-secondary">
      <h3 className="font-semibold text-2xl mx-auto mb-8">Appearance</h3>
      <div className="flex flex-row-reverse justify-between gap-5">
        <div>
          <PreviewHeroCard hero={appPreviewCard} />
        </div>
        <ul className="flex flex-col gap-4 w-[100%] h-[90%] justify-between">
          <li className="stat-wrapper ml-[20%]  ">
            <p className="font-semibold">Eye Color:</p>
            <p className="text-secondary ml-auto">
              {appPreview?.eye_color ?? "N/A"}
            </p>
          </li>
          <li className="stat-wrapper ml-[20%] ">
            <p className="font-semibold">Hair Color:</p>
            <p className="text-secondary ml-auto">
              {appPreview?.hair_color ?? "N/A"}
            </p>
          </li>
          <li className="stat-wrapper ml-[20%] ">
            <p className="font-semibold">Gender:</p>
            <p className="text-secondary ml-auto">
              {appPreview?.gender ?? "N/A"}
            </p>
          </li>
          <li className="stat-wrapper ml-[20%] ">
            <p className="font-semibold">Race:</p>
            <p className="text-secondary ml-auto">
              {appPreview?.race ?? "N/A"}
            </p>
          </li>
          <li className="stat-wrapper-list ml-[20%] ">
            <p className="font-semibold">Height:</p>
            <div className="text-secondary ml-auto ">
              {appPreview?.height?.map((h, i) => (
                <div key={`${h}-${i}`}>{h}</div>
              ))}
            </div>
          </li>
          <li className="stat-wrapper-list ml-[20%] ">
            <p className="font-semibold">Weight:</p>
            <div className="text-secondary ml-auto ">
              {appPreview?.weight?.map((w, i) => (
                <div key={`${w}-${i}`}>{w}</div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Appearance;
