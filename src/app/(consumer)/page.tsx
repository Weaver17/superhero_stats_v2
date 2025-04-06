import HeroCard from "@/components/hero-card";
import { Suspense } from "react";
// import Loading from "../loading/loading";

export default function Home() {
  return (
    <main>
      <section>
        <h1>Hello World!</h1>
        {/* <Loading /> */}
      </section>
      <section>
        <Suspense>
          <HeroCard />
        </Suspense>
      </section>
    </main>
  );
}
