"use client";
import React, { SetStateAction } from "react";
import { Button } from "./ui/button";

function SearchForm() {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  return (
    <form className="mx-auto mt-10 flex flex-col justify-center items-center gap-4 max-w-3xl ">
      <h2 className="text-4xl">Search for a Hero</h2>
      <input
        type="text"
        required
        name="search"
        value={value}
        onChange={handleChange}
        className="bg-foreground/90 rounded-[4px] w-xl h-12 focus:outline-none p-2 text-2xl text-background"
        placeholder="Batman"
      />
      <Button className="h-10 text-lg">Search</Button>
    </form>
  );
}

export default SearchForm;
