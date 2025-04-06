"use client";
import useHeroContextHook from "@/hooks/useHeroContextHook";
import React, { Suspense, useState } from "react";
import HeroCard from "./hero-card";

import { Hero } from "@/lib/types";
import { makeUseful } from "@/lib/constants";
import Loading from "@/app/loading/loading";

function CardList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const { contextGetBatman } = useHeroContextHook();

  const getBatman = async () => {
    const batman = await contextGetBatman();
    const results = await makeUseful(batman.results);

    setHeroes(results);
  };

  getBatman();

  console.log(heroes.map((hero: Hero) => hero.name));

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ul>
          {heroes.map((hero: Hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </ul>
      </Suspense>
    </div>
  );
}

export default CardList;
