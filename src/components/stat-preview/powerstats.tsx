"use client";
import { useHeroes } from "@/contexts/heroContext";
import { makeUseful, POWERSTAT_HERO_ID } from "@/lib/constants";
import PreviewHeroCard from "../cards/preview-hero-card";
import { useEffect, useState } from "react";
import { Hero, PowerstatsType } from "@/lib/types";
import StatBar from "../stat-bar";

function Powerstats() {
  const [powerPreviewCard, setPowerPreviewCard] = useState<Hero>();
  const [powerstatPreview, setPowerstatPreview] =
    useState<PowerstatsType | null>(null);

  const { getPowerPreviewHero, getHeroById } = useHeroes();

  useEffect(() => {
    const fetchPowerstatsHero = async () => {
      const powerstatsHero = await getHeroById(POWERSTAT_HERO_ID);
      const usefulPowerstatsHero = await makeUseful(powerstatsHero);
      setPowerPreviewCard(usefulPowerstatsHero);
    };
    fetchPowerstatsHero();

    const fetchPowerstats = async () => {
      const powerstats = await getPowerPreviewHero(POWERSTAT_HERO_ID);
      setPowerstatPreview(powerstats);
    };
    fetchPowerstats();
  });
  return (
    <div className="pb-7 flex flex-col justify-center border-b border-secondary">
      <h3 className=" mx-auto mb-1 text-sm md:font-semibold md:mb-4 md:text-xl lg:mb-8 lg:text-2xl">
        Powerstats
      </h3>
      <p className="mx-auto mb-2 text-sm md:font-semibold lg:hidden">
        {powerPreviewCard?.name}
      </p>
      <div className="flex gap-5">
        <div className="hidden lg:block">
          <PreviewHeroCard hero={powerPreviewCard} />
        </div>
        <div className="flex w-full">
          <ul className="flex flex-col gap-4.5 mt-2 mr-2 md:mt-3 md:mr-4 md:gap-8 lg:mt-4 lg:mr-6 lg:gap-12">
            <li className="stat-wrapper">
              <p className="preview-stat-title">Combat:</p>
            </li>
            <li className="stat-wrapper">
              <p className="preview-stat-title">Durability:</p>
            </li>
            <li className="stat-wrapper">
              <p className="preview-stat-title">Intelligence:</p>
            </li>
            <li className="stat-wrapper">
              <p className="preview-stat-title">Power:</p>
            </li>
            <li className="stat-wrapper">
              <p className="preview-stat-title">Speed:</p>
            </li>
            <li className="stat-wrapper">
              <p className="preview-stat-title">Strength:</p>
            </li>
          </ul>
          <div className="flex flex-col gap-1.5 w-[100%] md:gap-[13px] lg:gap-5">
            <StatBar level={powerstatPreview?.combat ?? "0"} />
            <StatBar level={powerstatPreview?.durability ?? "0"} />
            <StatBar level={powerstatPreview?.intelligence ?? "0"} />
            <StatBar level={powerstatPreview?.power ?? "0"} />
            <StatBar level={powerstatPreview?.speed ?? "0"} />
            <StatBar level={powerstatPreview?.strength ?? "0"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Powerstats;
