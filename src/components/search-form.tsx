import { Button } from "./ui/button";
import Form from "next/form";

function SearchForm() {
  return (
    <Form
      action="/search"
      className="mx-auto mt-2 flex flex-col justify-center items-center gap-4 max-w-3xl md:mt-4 lg:mt-8 "
    >
      <h2 className="text-md md:text-2xl lg:text-4xl">Search for a Hero</h2>
      <input
        type="search"
        required
        name="search"
        className="bg-foreground/90 rounded-[4px] text-background p-1 text-sm focus:outline-none md:w-lg md:h-10 md:p-2 md:text-xl lg:w-xl lg:h-12 lg:p-2 lg:text-2xl"
        placeholder="batman, wolverine, etc..."
      />
      <Button className="h-8 rounded-md gap-1.5 px-3 text-sm md:h-9 md:px-4 md:py-2 md:text-lg lg:h-10 lg:rounded-md lg:px-6 lg:text-xl">
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
