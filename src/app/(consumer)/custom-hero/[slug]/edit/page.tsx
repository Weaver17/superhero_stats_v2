import CustomHeroUpdateForm from "@/components/hero-form/custom-hero-update-form";
import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

type HeroSlugType = {
  params: {
    slug: string;
  };
};

async function Page({ params }: HeroSlugType) {
  const slug = params.slug;

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
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("/");
  }

  const user = await getUser();

  const userRecord = await prisma.user.findUnique({
    where: { username: user?.username ?? "" },
  });

  const kindeId = user?.id;

  const userKindeId = userRecord?.kindeId;

  if (userKindeId !== kindeId) {
    throw new Error("Cannot edit heroes you did not create!");
  }

  return (
    <div className="py-6 px-2 bg-[url('../../public/random-dark.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="flex flex-col gap-6 mx-auto mb-6 justify-center items-center max-w-[70%]">
        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl lg:text-6xl">
          Edit {hero?.name}
        </h2>
        <p className="text-center md:font-semibold md:text-lg lg:text-xl">
          Here you can edit your Hero. Click &ldquo;Save&ldquo; to save changes
          or &ldquo;Cancel&ldquo; to go back to the hero&ldquo;s page.
        </p>
        <p className="text-center text-sm md:text-base md:font-semibold">
          All fields are required
        </p>
      </div>
      <div className="section border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
        {hero && (
          <CustomHeroUpdateForm
            hero={{
              name: hero?.name ?? null,
              appearance: {
                gender: hero?.appearance?.gender ?? undefined,
                race: hero?.appearance?.race ?? undefined,
                height:
                  hero?.appearance?.height?.map((h) => h.metric) ?? undefined,
                weight:
                  hero?.appearance?.weight?.map((w) => w.metric) ?? undefined,
                eye_color: hero?.appearance?.eye_color ?? undefined,
                hair_color: hero?.appearance?.hair_color ?? undefined,
              },
              biography: {
                full_name: hero?.biography?.full_name ?? undefined,
                alter_egos: hero?.biography?.alter_egos ?? undefined,
                aliases:
                  hero?.biography?.aliases?.map((alias) => alias.aliases) ?? [],
                place_of_birth: hero?.biography?.place_of_birth ?? undefined,
                first_appearance:
                  hero?.biography?.first_appearance ?? undefined,
                publisher: hero?.biography?.publisher ?? undefined,
                alignment: hero?.biography?.alignment ?? undefined,
              },
              work: {
                occupation: hero?.work?.occupation ?? undefined,
                base: hero?.work?.base ?? undefined,
              },
              connections: {
                group_affiliation:
                  hero?.connections?.group_affiliation ?? undefined,
                relatives: hero?.connections?.relatives ?? undefined,
              },
              powerstats: {
                combat: hero?.powerstats?.combat ?? undefined,
                durability: hero?.powerstats?.durability ?? undefined,
                intelligence: hero?.powerstats?.intelligence ?? undefined,
                speed: hero?.powerstats?.speed ?? undefined,
                power: hero?.powerstats?.power ?? undefined,
                strength: hero?.powerstats?.strength ?? undefined,
              },
              image: {
                url: hero?.image?.url ?? undefined,
                page_background: hero?.image?.page_background ?? undefined,
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Page;
