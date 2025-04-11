"use client";
import { useHeroes } from "@/contexts/heroContext";
import { BIOGRAPHY_HERO_ID, makeUseful } from "@/lib/constants";
import { BiographyType } from "@/lib/types";
import React, { useEffect, useState } from "react";
import PreviewHeroCard from "../cards/preview-hero-card";

function Biography() {
  const [bioPreviewCard, setBioPreviewCard] = useState({});
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
    <div className="px-6 flex flex-col justify-center">
      <h3 className="font-semibold text-2xl mx-auto mb-8">Biography</h3>
      <div className="flex gap-5">
        <div>
          <PreviewHeroCard hero={bioPreviewCard} />
        </div>
        <ul className="flex flex-col gap-4 w-[100%] h-[90%] justify-between">
          <li className="stat-wrapper">
            <p className="font-semibold text-end">Full Name:</p>
            <p className="text-secondary">{bioPreview?.full_name ?? "N/A"}</p>
          </li>
          <li className="stat-wrapper">
            <p className="font-semibold text-end">Alter Egos:</p>
            <p className="text-secondary">{bioPreview?.alter_egos ?? "N/A"}</p>
          </li>
          <li className="stat-wrapper-list">
            <p className="font-semibold text-end">Aliases:</p>
            <ul className="text-secondary  overflow-ellipsis ">
              {bioPreview?.aliases?.slice(0, 3).map((a, i) => (
                <li key={`${a}-${i}`}>{a}</li>
              ))}
            </ul>
          </li>
          <li className="stat-wrapper">
            <p className="font-semibold text-end">Place of Birth:</p>
            <p className="text-secondary">
              {bioPreview?.place_of_birth ?? "N/A"}
            </p>
          </li>
          <li className="stat-wrapper">
            <p className="font-semibold text-end">First Appearance:</p>
            <p className="text-secondary">
              {bioPreview?.first_appearance ?? "N/A"}
            </p>
          </li>
          <li className="stat-wrapper">
            <p className="font-semibold text-end">Publisher:</p>
            <p className="text-secondary">{bioPreview?.publisher ?? "N/A"}</p>
          </li>
          <li className="stat-wrapper">
            <p className="font-semibold text-end">Alignment:</p>
            <p className="text-secondary">{bioPreview?.alignment ?? "N/A"}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Biography;
