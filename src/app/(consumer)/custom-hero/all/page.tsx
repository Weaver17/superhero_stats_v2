import Loading from "@/app/loading/loading";
import CustomCardList from "@/components/custom-list";
import { prisma } from "@/lib/prisma";
import { Hero } from "@/lib/types";
import React, { Suspense } from "react";

// Force this page to be rendered dynamically at request time
export const dynamic = "force-dynamic";

async function page() {
  const heroes = (await prisma.hero.findMany({
    include: {
      appearance: true,
      biography: true,
      work: true,
      connections: true,
      powerstats: true,
      image: true,
      creator: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })) as Hero[];

  return (
    <div>
      <div>
        <h2 className=" p-6 font-semibold text-center text-3xl">
          Custom Heroes
        </h2>
      </div>
      <div>
        <Suspense fallback={<Loading />}>
          <CustomCardList heroes={heroes} />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
