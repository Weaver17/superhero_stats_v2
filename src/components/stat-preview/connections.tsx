"use client";
import { useHeroes } from "@/contexts/heroContext";
import { CONNECTIONS_HERO_ID, makeUseful } from "@/lib/constants";
import { ConnectionsType, Hero } from "@/lib/types";
import React, { useEffect, useState } from "react";
import PreviewHeroCard from "../cards/preview-hero-card";

function Connections() {
  const [connPreviewCard, setConnPreviewCard] = useState<Hero>({
    image: { url: "" },
  });
  const [connPreview, setConnPreview] = useState<ConnectionsType | null>(null);

  const { getConnPreviewHero, getHeroById } = useHeroes();

  useEffect(() => {
    const fetchConnHero = async () => {
      const connHero = await getHeroById(CONNECTIONS_HERO_ID);
      const usefulConnHero = await makeUseful(connHero);
      setConnPreviewCard(usefulConnHero);
    };
    fetchConnHero();

    const fetchConn = async () => {
      const conn = await getConnPreviewHero(CONNECTIONS_HERO_ID);
      const usefulConn = await makeUseful(conn);
      setConnPreview(usefulConn);
    };
    fetchConn();
  });

  return (
    <div className="px-6 flex flex-col ">
      <h3 className=" mx-auto mb-4 text-sm md:font-semibold md:mb-4 md:text-xl lg:mb-8 lg:text-2xl">
        Connections
      </h3>
      <p className="mx-auto mb-4 text-sm font-semibold md:text-lg lg:hidden">
        {connPreviewCard?.name}
      </p>
      <div className="flex flex-row-reverse gap-5">
        <div className="hidden lg:block">
          <PreviewHeroCard hero={connPreviewCard} />
        </div>
        <ul className="flex flex-col gap-4 w-[100%] h-[90%] justify-between">
          <li className="flex flex-col  ">
            <p className="preview-stat-title text-center">Relatives:</p>
            <div className="text-secondary text-center">
              {connPreview?.relatives
                ?.split(",")
                .map((r, i) => <div key={`${r}-${i}`}>{r}</div>) ?? "N/A"}
            </div>
          </li>
          <li className="flex flex-col ">
            <p className="preview-stat-title text-center">
              Group Affiliations:
            </p>
            <div className="text-secondary text-center">
              {connPreview?.group_affiliation
                ?.split(";")
                .map((g, i) => <div key={`${g}-${i}`}>{g}</div>) ?? "N/A"}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Connections;
