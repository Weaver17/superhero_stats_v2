import React from "react";
import CreateCardPreview from "./create-preview/preview-create-card";
import CreateBioPreview from "./create-preview/preview-create-bio";
import CreatePowerPreview from "./create-preview/preview-create-power";
import { prisma } from "@/lib/database";
import backup from "../../public/vercel.svg";

async function CreateAHeroPreview() {
  const hero = await prisma.hero.findFirst({
    include: {
      appearance: {
        include: {
          height: true,
          weight: true,
        },
      },
      biography: {
        include: {
          aliases: true,
        },
      },
      connections: true,
      image: true,
      powerstats: true,
      work: true,
      creator: true,
    },
  });

  const imageBackup =
    hero?.image === undefined || hero?.image === null
      ? backup
      : hero?.image?.url;

  return (
    <div id="create-a-hero" className="flex flex-col gap-10 scroll-mt-30">
      <div className="grid grid-cols-3 items-start mx-5 py-10 border-b border-secondary">
        <CreateCardPreview
          image={imageBackup}
          name={hero?.biography?.full_name ?? ""}
          publisher="custom"
          slug={hero?.slug ?? ""}
          heroName={hero?.name ?? ""}
        />
        <div className="flex flex-col gap-10 mt-20 text-center">
          <h4 className="font-semibold text-3xl">
            Sign up to create your own hero!
          </h4>
          <p className="font-semibold text-2xl">
            Customize image, name, powerstats and more!
          </p>
        </div>
        <CreateBioPreview
          alter_egos={hero?.biography?.alter_egos ?? ""}
          aliases={
            hero?.biography?.aliases?.map((alias) => alias.aliases) ?? []
          }
          place_of_birth={hero?.biography?.place_of_birth ?? ""}
          first_appearance={hero?.biography?.first_appearance ?? ""}
          publisher={hero?.biography?.publisher ?? ""}
          alignment={hero?.biography?.alignment ?? ""}
        />
      </div>
      <CreatePowerPreview
        intelligence={hero?.powerstats?.intelligence ?? ""}
        combat={hero?.powerstats?.combat ?? ""}
        durability={hero?.powerstats?.durability ?? ""}
        power={hero?.powerstats?.power ?? ""}
        speed={hero?.powerstats?.speed ?? ""}
        strength={hero?.powerstats?.strength ?? ""}
      />
    </div>
  );
}

export default CreateAHeroPreview;
