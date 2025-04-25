import Loading from "@/app/loading/loading";
import CardList from "@/components/card-list";
import SearchForm from "@/components/search-form";
import { Hero, HeroResponse } from "@/lib/types";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

async function page({
  searchParams,
}: {
  searchParams: Promise<string | undefined>;
}) {
  const hero = (await searchParams)?.search ?? "";

  if (hero === "") {
    redirect("/");
  }

  const res = await fetch(
    "https://corsproxy.io/?url=https://superheroapi.com/api/cf5e8cb0f38ad9f2713ccc5537ffa595/search/" +
      hero
  );
  const heroResponse = ((await res.json()) as HeroResponse) || { results: [] };
  const heroes: Hero[] = heroResponse.results as unknown as Hero[];

  return (
    <div>
      <SearchForm />
      <Suspense fallback={<Loading />}>
        <CardList heroes={heroes} />
      </Suspense>
    </div>
  );
}

export default page;
