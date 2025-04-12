import React, { Suspense } from "react";
import HeroCard from "./cards/hero-card";

import { Hero } from "@/lib/types";
import Loading from "@/app/loading/loading";

async function CardList({ heroes }: Readonly<{ heroes: Hero[] }>) {
  return (
    <Suspense fallback={<Loading />}>
      {!heroes ? (
        <div className="my-10 flex flex-col text-center">
          <h3 className="mx-auto py-10 px-20 text-2xl font-semibold border border-secondary rounded-2xl bg-primary/10 backdrop-blur-sm">
            No Heroes found matching your search.
            <br /> So here is Batman:
          </h3>
          <ul className="mx-2 py-4 grid grid-cols-[repeat(auto-fit,_minmax(0,_355px))] justify-center gap-4">
            {usefulBatman.map((hero: Hero) => (
              <HeroCard key={hero.id} hero={hero} />
            ))}
          </ul>
        </div>
      ) : (
        <ul className="mx-2 py-4 grid grid-cols-[repeat(auto-fit,_minmax(0,_355px))] justify-center gap-4">
          {usefulHeroes.map((hero: Hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </ul>
      )}
    </Suspense>
  );
}

export default CardList;
