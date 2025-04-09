import React, { Suspense } from "react";
import Appearance from "./stat-preview/appearance";
import Biography from "./stat-preview/biography";
import Powerstats from "./stat-preview/powerstats";
import Work from "./stat-preview/work";
import Connections from "./stat-preview/connections";
import Loading from "@/app/loading/loading";

function StatPreviewSection() {
  return (
    <div className="p-15 flex flex-col gap-5">
      <Suspense fallback={<Loading />}>
        <Powerstats />
        <Appearance />
        <Biography />
        <Work />
        <Connections />
      </Suspense>
    </div>
  );
}

export default StatPreviewSection;
