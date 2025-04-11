"use client";
import { useHeroes } from "@/contexts/heroContext";
import { makeUseful, POWERSTAT_HERO_ID } from "@/lib/constants";
import PreviewHeroCard from "../preview-hero-card";
import { useEffect, useState } from "react";
import { PowerstatsType } from "@/lib/types";
import StatBar from "../stat-bar";

function Powerstats() {
  const [powerPreviewCard, setPowerPreviewCard] = useState({});
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
  }, []);
  return (
    <div className="pb-7 flex flex-col justify-center border-b border-secondary">
      <h3 className="font-semibold text-2xl mx-auto mb-8">Powerstats</h3>
      <div className="flex gap-5">
        <div>
          <PreviewHeroCard hero={powerPreviewCard} />
        </div>
        <ul className="flex flex-col  w-[100%] justify-between">
          <li className="stat-wrapper">
            <p className="w-[120px] font-semibold text-end">Combat:</p>
            <StatBar level={powerstatPreview?.combat ?? "0"} />
          </li>
          <li className="stat-wrapper">
            <p className="w-[120px] font-semibold text-end">Durability:</p>
            <StatBar level={powerstatPreview?.durability ?? "0"} />
          </li>
          <li className="stat-wrapper">
            <p className="w-[120px] font-semibold text-end">Intelligence:</p>
            <StatBar level={powerstatPreview?.intelligence ?? "0"} />
          </li>
          <li className="stat-wrapper">
            <p className="w-[120px] font-semibold text-end">Power:</p>
            <StatBar level={powerstatPreview?.power ?? "0"} />
          </li>
          <li className="stat-wrapper">
            <p className="w-[120px] font-semibold text-end">Speed:</p>
            <StatBar level={powerstatPreview?.speed ?? "0"} />
          </li>
          <li className="stat-wrapper">
            <p className="w-[120px] font-semibold text-end">Strength:</p>
            <StatBar level={powerstatPreview?.strength ?? "0"} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Powerstats;
