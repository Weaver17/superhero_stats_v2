import Loading from "@/app/loading/loading";
import HeroApp from "@/components/hero-page/hero-app";
import HeroBio from "@/components/hero-page/hero-bio";
import HeroConn from "@/components/hero-page/hero-conn";
import HeroImage from "@/components/hero-page/hero-image";
import HeroName from "@/components/hero-page/hero-name";
import HeroPower from "@/components/hero-page/hero-power";
import HeroWork from "@/components/hero-page/hero-work";
import { prisma } from "@/lib/prisma";
import React, { Suspense } from "react";
import backup from "../../../../../public/vercel.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getCustomHeroBg } from "@/lib/utils";
import { deleteHero } from "@/actions/actions";
import Modal from "@/components/modals/modal";
import PageDeleteBtn from "@/components/buttons/page-delete-btn";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { heroFormSuccessToast } from "@/lib/toast";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  const hero = await prisma.hero.findUnique({
    where: {
      slug: slug,
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
      creator: true,
    },
  });

  const { getUser, getPermission, isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();
  const kindeUser = await getUser();
  const isAdmin = await getPermission("admin");

  const creatorSlug = hero?.creator?.username
    .toLowerCase()
    .replace(/\s+/g, "-");

  const imageBackup =
    hero?.image === undefined || hero?.image === null
      ? backup
      : hero?.image?.url;

  const pageBackground = getCustomHeroBg(
    hero?.image?.page_background ?? "None"
  );

  async function handleConfirm() {
    "use server";
    await deleteHero(hero?.id, hero?.creator?.kindeId, kindeUser?.id);
    toast("That Hero's Hero-ing time is OVER!!", heroFormSuccessToast);
    redirect("/custom-hero/all");
  }

  return (
    <Suspense fallback={<Loading />}>
      <section
        className={`py-6 px-2 relative ${pageBackground} bg-cover bg-no-repeat bg-center min-h-screen`}
      >
        <Modal
          handleConfirm={handleConfirm}
          creatorKindeId={hero?.creator?.kindeId ?? ""}
          userKindeId={kindeUser?.id ?? ""}
          heroSlug={hero?.slug ?? ""}
        />

        <div className="section relative border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
          <div className="absolute top-3 right-4 flex gap-4 items-center">
            <p className="text-xs text-muted-foreground sm:text-sm">
              Created by:{" "}
              <Link href={`/user/${creatorSlug}`} className="hover:underline">
                {hero?.creator?.username}
              </Link>
            </p>
            {(hero?.creator?.kindeId === kindeUser?.id || isAdmin) &&
            isLoggedIn ? (
              <>
                <Link href={`/custom-hero/${hero?.slug}/edit`}>
                  <Button className="px-1 text-sm md:text-base" variant="ghost">
                    EDIT
                  </Button>
                </Link>
                <PageDeleteBtn heroSlug={hero?.slug ?? ""} />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="flex flex-col-reverse gap-4 items-center py-6 border-b border-secondary md:grid md:grid-cols-2">
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
          <div className="flex flex-col gap-4 mx-5 py-6 border-b border-secondary lg:grid lg:grid-cols-2">
            {/* BIO  */}
            <HeroBio
              alter_egos={hero?.biography?.alter_egos ?? ""}
              aliases={
                hero?.biography?.aliases?.map((alias) => alias.aliases) ?? [""]
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
          <div className="flex flex-col gap-4 mx-5 py-6 border-b border-secondary lg:grid lg:grid-cols-2">
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
      </section>
    </Suspense>
  );
}

export default page;
