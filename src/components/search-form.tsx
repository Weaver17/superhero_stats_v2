"use client";
import React, { SetStateAction, useActionState } from "react";
import { Button } from "./ui/button";
import { searchHero } from "@/actions/actions";
import useHeroContextHook from "@/hooks/useHeroContextHook";
import { BASE_URL, headers } from "@/lib/constants";

function SearchForm() {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  const [getHero, isLoading] = useHeroContextHook();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const hero = formData.get("search") as string;
    console.log(hero);
    setValue(hero);
    await getHero(`${BASE_URL}/search/${hero}`, headers);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-10 flex flex-col justify-center items-center gap-4 max-w-3xl "
    >
      <h2 className="text-4xl">Search for a Hero</h2>
      <input
        type="search"
        required
        name="search"
        value={value}
        onChange={handleChange}
        className="bg-foreground/90 rounded-[4px] w-xl h-12 focus:outline-none p-2 text-2xl text-background"
        placeholder="Batman"
      />
      <Button className="h-10 text-lg">
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </form>
  );
}

export default SearchForm;
