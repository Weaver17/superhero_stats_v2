import React, { Suspense } from "react";

import { Hero } from "@/lib/types";
import Loading from "@/app/loading/loading";
import CustomAllCard from "./cards/custom-all-card";

async function CustomCardList({ heroes }: Readonly<{ heroes: Hero[] }>) {
  return (
    <Suspense fallback={<Loading />}>
      <ul className="mx-2 py-4 grid grid-cols-[repeat(auto-fit,_minmax(0,_355px))] justify-center gap-4">
        {heroes.map((hero: Hero) => (
          <CustomAllCard key={hero.id} hero={hero} />
        ))}
      </ul>
    </Suspense>
  );
}

export default CustomCardList;
