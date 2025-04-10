"use client";
import { useHeroes } from "@/contexts/heroContext";
import { CONNECTIONS_HERO_ID, makeUseful } from "@/lib/constants";
import { ConnectionsType } from "@/lib/types";
import React, { useEffect, useState } from "react";
import PreviewHeroCard from "../preview-hero-card";

function Connections() {
  const [connPreviewCard, setConnPreviewCard] = useState({});
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
  }, []);

  return (
    <div className="px-6 flex flex-col justify-center">
      <h3 className="font-semibold mx-auto mb-8">Connections</h3>
      <div className="flex flex-row-reverse gap-5">
        <div>
          <PreviewHeroCard hero={connPreviewCard} />
        </div>
        <ul className="flex flex-col gap-4 w-[100%] h-[90%] justify-between">
          <li className="flex flex-col  ">
            <p className="font-semibold text-center">Relatives:</p>
            <ul className="text-secondary text-center">
              {connPreview?.relatives?.split(",").map((r, i) => (
                <li className="l" key={`${r}-${i}`}>
                  {r}
                </li>
              )) ?? "N/A"}
            </ul>
          </li>
          <li className="flex flex-col ">
            <p className="font-semibold text-center">Group Affiliations:</p>
            <ul className="text-secondary">
              {connPreview?.group_affiliation?.split(";").map((g, i) => (
                <li className="list-disc" key={`${g}-${i}`}>
                  {g}
                </li>
              )) ?? "N/A"}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Connections;
