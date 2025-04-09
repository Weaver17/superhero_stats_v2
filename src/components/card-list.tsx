"use client";
import useHeroContextHook from "@/hooks/useHeroContextHook";
import React, { Suspense, useEffect, useState } from "react";
import HeroCard from "./hero-card";

import { Hero } from "@/lib/types";
import { makeUseful } from "@/lib/constants";
import Loading from "@/app/loading/loading";

function CardList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const { getBatman } = useHeroContextHook();

  useEffect(() => {
    if (heroes === undefined || heroes.length === 0) {
      const fetchBatman = async () => {
        const results = await getBatman();
        const usefulBatman = await makeUseful(results.results);
        setHeroes(usefulBatman);
      };
      fetchBatman();
    }
  }, [heroes]);

  return (
    <Suspense fallback={<Loading />}>
      <ul className="mx-2 py-4 grid grid-cols-[repeat(auto-fit,_minmax(0,_355px))] justify-center gap-4">
        {heroes.map((hero: Hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </ul>
    </Suspense>
  );
}

export default CardList;
