import Loading from "@/app/loading/loading";
import HeroApp from "@/components/hero-page/hero-app";
import HeroBio from "@/components/hero-page/hero-bio";
import HeroConn from "@/components/hero-page/hero-conn";
import HeroImage from "@/components/hero-page/hero-image";
import HeroName from "@/components/hero-page/hero-name";
import HeroPower from "@/components/hero-page/hero-power";
import HeroWork from "@/components/hero-page/hero-work";
import { prisma } from "@/lib/database";
import React, { Suspense } from "react";
import backup from "../../../../../public/vercel.svg";

type HeroSlugType = {
  params: {
    slug: string;
  };
};

async function page({ params }: HeroSlugType) {
  const hero = await prisma.hero.findUnique({
    where: {
      slug: params.slug,
    },
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
    },
  });

  console.log(hero?.slug);

  const imageBackup =
    hero?.image === undefined || hero?.image === null
      ? backup
      : hero?.image?.url;

  return (
    <Suspense fallback={<Loading />}>
      <section className="py-6 bg-[url('../../public/city-backdrop-2.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
        {!hero?.image ? (
          <div>
            <h2>AAAAAAAAAAAAAAAAAA</h2>
          </div>
        ) : (
          <div className="section border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
            <div></div>
            <div className="grid grid-cols-2 mx-5 pb-10 border-b border-secondary ">
              <HeroImage
                image={hero?.image?.url ?? imageBackup}
                name={hero?.name ?? ""}
                publisher="custom"
              />
              <HeroName
                heroName={hero?.name ?? ""}
                realName={hero?.biography?.full_name ?? ""}
              />
            </div>
            <div className="grid grid-cols-2 items-start mx-5 p-10 border-b border-secondary">
              {/* BIO  */}
              <HeroBio
                alter_egos={hero?.biography?.alter_egos ?? ""}
                aliases={
                  hero?.biography?.aliases?.map((alias) => alias.aliases) ?? [
                    "",
                  ]
                }
                place_of_birth={hero?.biography?.place_of_birth ?? ""}
                first_appearance={hero?.biography?.first_appearance ?? ""}
                publisher={hero?.biography?.publisher ?? ""}
                alignment={hero?.biography?.alignment ?? ""}
              />
              {/* APP  */}
              <HeroApp
                eye_color={hero?.appearance?.eye_color ?? ""}
                hair_color={hero?.appearance?.hair_color ?? ""}
                race={hero?.appearance?.race ?? ""}
                gender={hero?.appearance?.gender ?? ""}
                height={
                  hero?.appearance?.height?.map(
                    (h) => `${h.imperial} (${h.metric} cm)`
                  ) ?? []
                }
                weight={
                  hero?.appearance?.weight?.map(
                    (w) => `${w.imperial} lbs (${w.metric} kg)`
                  ) ?? []
                }
              />
            </div>
            <div className=" mx-5  border-b border-secondary">
              {/* POWERSTATS  */}
              <HeroPower
                intelligence={hero?.powerstats?.intelligence ?? ""}
                combat={hero?.powerstats?.combat ?? ""}
                durability={hero?.powerstats?.durability ?? ""}
                power={hero?.powerstats?.power ?? ""}
                speed={hero?.powerstats?.speed ?? ""}
                strength={hero?.powerstats?.strength ?? ""}
              />
            </div>
            <div className="grid grid-cols-2 items-start mx-5 p-10 border-b border-secondary">
              {/* WORK  */}
              <HeroWork
                occupation={hero?.work?.occupation ?? ""}
                base={hero?.work?.base ?? ""}
              />
              {/* CONN  */}
              <HeroConn
                relatives={hero?.connections?.relatives ?? ""}
                group_affiliation={hero?.connections?.group_affiliation ?? ""}
              />
            </div>
          </div>
        )}
      </section>
    </Suspense>
  );
}

export default page;
