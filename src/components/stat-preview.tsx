import React, { Suspense } from "react";
import Appearance from "./stat-preview/appearance";
import Biography from "./stat-preview/biography";
import Powerstats from "./stat-preview/powerstats";
import Work from "./stat-preview/work";
import Connections from "./stat-preview/connections";
import Loading from "@/app/loading/loading";

function StatPreviewSection() {
  return (
    <div
      id="stat-preview"
      className="py-2 px-15 flex flex-col gap-5 scroll-mt-30"
    >
      <Suspense fallback={<Loading />}>
        <Powerstats />
        <div className=" pb-6 grid grid-cols-2 border-b border-secondary">
          <Appearance />
          <Biography />
        </div>
        <div className=" pb-6 grid grid-cols-2 border-b border-secondary">
          <Work />
          <Connections />
        </div>
      </Suspense>
    </div>
  );
}

export default StatPreviewSection;
