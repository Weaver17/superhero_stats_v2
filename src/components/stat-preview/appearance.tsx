"use client";
import { useHeroes } from "@/contexts/heroContext";
import { APPEARANCE_HERO_ID, makeUseful } from "@/lib/constants";
import { AppearanceType, Hero } from "@/lib/types";
import React, { Suspense, useEffect, useState } from "react";
import PreviewHeroCard from "../cards/preview-hero-card";
import Loading from "@/app/loading/loading";

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
  }, [getHeroById, getAppPreviewHero]);

  return (
    <div className="p-6 flex flex-col border-b border-secondary lg:py-0 lg:border-b-0 lg:border-r">
      <h3 className=" mx-auto mb-4 text-sm font-semibold md:mb-4 md:text-xl lg:mb-8 lg:text-2xl">
        Appearance
      </h3>
      <Suspense fallback={<Loading />}>
        <p className="mx-auto mb-2 text-sm font-semibold sm:hidden">
          {appPreviewCard?.name}
        </p>
        <div className="flex flex-row-reverse justify-center gap-5">
          <div className="hidden sm:block ">
            <PreviewHeroCard hero={appPreviewCard} />
          </div>
          <ul className="flex flex-col gap-4 h-[90%] justify-between lg:w-[100%] ">
            <li className="flex flex-col items-center text-center app-list:gap-[2px] app-list:flex-row app-list:justify-between ">
              <p className="preview-stat-title">Eye Color:</p>
              <p className="text-secondary app-list:ml-auto">
                {appPreview?.eye_color ?? "N/A"}
              </p>
            </li>
            <li className="flex flex-col items-center text-center app-list:gap-[2px] app-list:flex-row app-list:justify-between">
              <p className="preview-stat-title">Hair Color:</p>
              <p className="text-secondary app-list:ml-auto">
                {appPreview?.hair_color ?? "N/A"}
              </p>
            </li>
            <li className="flex flex-col items-center text-center app-list:gap-[2px] app-list:flex-row app-list:justify-between">
              <p className="preview-stat-title">Gender:</p>
              <p className="text-secondary app-list:ml-auto">
                {appPreview?.gender ?? "N/A"}
              </p>
            </li>
            <li className="flex flex-col items-center text-center app-list:gap-[2px] app-list:flex-row app-list:justify-between">
              <p className="preview-stat-title">Race:</p>
              <p className="text-secondary app-list:ml-auto">
                {appPreview?.race ?? "N/A"}
              </p>
            </li>
            <li className="flex flex-col items-center text-center app-list:gap-[2px] app-list:flex-row app-list:justify-between">
              <p className="preview-stat-title">Height:</p>
              <div className="text-secondary app-list:ml-auto ">
                {appPreview?.height?.map((h, i) => (
                  <div key={`${h}-${i}`}>{h}</div>
                ))}
              </div>
            </li>
            <li className="flex flex-col items-center text-center app-list:gap-[2px] app-list:flex-row app-list:justify-between">
              <p className="preview-stat-title">Weight:</p>
              <div className="text-secondary app-list:ml-auto ">
                {appPreview?.weight?.map((w, i) => (
                  <div key={`${w}-${i}`}>{w}</div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </Suspense>
    </div>
  );
}

export default Appearance;
