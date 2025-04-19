"use client";
import { useHeroes } from "@/contexts/heroContext";
import { BIOGRAPHY_HERO_ID, makeUseful } from "@/lib/constants";
import { BiographyType, Hero } from "@/lib/types";
import React, { useEffect, useState } from "react";
import PreviewHeroCard from "../cards/preview-hero-card";

function Biography() {
  const [bioPreviewCard, setBioPreviewCard] = useState<Hero>();
  const [bioPreview, setBioPreview] = useState<BiographyType | null>(null);

  const { getBioPreviewHero, getHeroById } = useHeroes();

  useEffect(() => {
    const fetchBiographyHero = async () => {
      const biographyHero = await getHeroById(BIOGRAPHY_HERO_ID);
      const usefulBiographyHero = await makeUseful(biographyHero);
      setBioPreviewCard(usefulBiographyHero);
    };
    fetchBiographyHero();

    const fetchBio = async () => {
      const bio = await getBioPreviewHero(BIOGRAPHY_HERO_ID);
      const usefulBio = await makeUseful(bio);
      setBioPreview(usefulBio);
    };
    fetchBio();
  }, []);

  return (
    <div className="px-6 flex flex-col">
      <h3 className=" mx-auto mb-4 text-sm font-semibold md:mb-4 md:text-xl lg:mb-8 lg:text-2xl">
        Biography
      </h3>
      <p className="mx-auto mb-2 text-sm font-semibold sm:hidden">
        {bioPreviewCard?.name}
      </p>
      <div className="flex gap-5 justify-center">
        <div className="hidden sm:block">
          <PreviewHeroCard hero={bioPreviewCard} />
        </div>
        <ul className="flex flex-col gap-4  h-[90%] lg:w-[100%] lg:justify-between">
          <li className="flex flex-col items-center text-center bio-list:gap-[2px] bio-list:flex-row bio-list:justify-between">
            <p className="preview-stat-title text-end">Full Name:</p>
            <p className="text-secondary">{bioPreview?.full_name ?? "N/A"}</p>
          </li>
          <li className="flex flex-col items-center text-center bio-list:gap-[2px] bio-list:flex-row bio-list:justify-between">
            <p className="preview-stat-title text-end">Alter Egos:</p>
            <p className="text-secondary">{bioPreview?.alter_egos ?? "N/A"}</p>
          </li>
          <li className="flex flex-col items-center text-center bio-list:gap-[2px] bio-list:flex-row bio-list:justify-between">
            <p className="preview-stat-title text-end">Aliases:</p>
            <div className="text-secondary  overflow-ellipsis ">
              {bioPreview?.aliases?.slice(0, 3).map((a, i) => (
                <div key={`${a}-${i}`}>{a}</div>
              ))}
            </div>
          </li>
          <li className="flex flex-col items-center text-center bio-list:gap-[2px] bio-list:flex-row bio-list:justify-between">
            <p className="preview-stat-title text-end">Place of Birth:</p>
            <p className="text-secondary">
              {bioPreview?.place_of_birth ?? "N/A"}
            </p>
          </li>
          <li className="flex flex-col items-center text-center bio-list:gap-[2px] bio-list:flex-row bio-list:justify-between">
            <p className="preview-stat-title text-end">First Appearance:</p>
            <p className="text-secondary">
              {bioPreview?.first_appearance ?? "N/A"}
            </p>
          </li>
          <li className="flex flex-col items-center text-center bio-list:gap-[2px] bio-list:flex-row bio-list:justify-between">
            <p className="preview-stat-title text-end">Publisher:</p>
            <p className="text-secondary">{bioPreview?.publisher ?? "N/A"}</p>
          </li>
          <li className="flex flex-col items-center text-center bio-list:gap-[2px] bio-list:flex-row bio-list:justify-between">
            <p className="preview-stat-title text-end">Alignment:</p>
            <p className="text-secondary">{bioPreview?.alignment ?? "N/A"}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Biography;
