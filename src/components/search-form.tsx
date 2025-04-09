// import React, { SetStateAction, useActionState } from "react";
import { Button } from "./ui/button";
import Form from "next/form";

function SearchForm() {
  // const [value, setValue] = React.useState<string>("");

  // const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
  //   setValue(e.target.value);
  // };

  return (
    <Form
      action="/search"
      className="mx-auto mt-10 flex flex-col justify-center items-center gap-4 max-w-3xl "
    >
      <h2 className="text-4xl">Search for a Hero</h2>
      <input
        type="search"
        required
        name="search"
        // value={value}
        // onChange={handleChange}
        className="bg-foreground/90 rounded-[4px] w-xl h-12 focus:outline-none p-2 text-2xl text-background"
        placeholder="batman, wolverine, etc..."
      />
      <Button className="h-10 text-lg">Search</Button>
    </Form>
  );
}

export default SearchForm;
