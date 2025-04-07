import CardList from "@/components/card-list";
import SearchForm from "@/components/search-form";
import { Suspense } from "react";
// import Loading from "../loading/loading";

export default function Home() {
  return (
    <main>
      <section>
        <h1>Hello World!</h1>
        <SearchForm />
        {/* <Loading /> */}
      </section>
      <section>
        <Suspense>
          <CardList />
        </Suspense>
      </section>
    </main>
  );
}
