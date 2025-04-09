import CardList from "@/components/card-list";
import SearchForm from "@/components/search-form";
import Welcome from "@/components/welcome";
import { Suspense } from "react";
// import Loading from "../loading/loading";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center section gap-2 border border-secondary rounded-2xl bg-primary/10 backdrop-blur-sm">
        <Welcome />
        <SearchForm />
        {/* <Loading /> */}
      </section>
      <section className="container"></section>
    </>
  );
}
