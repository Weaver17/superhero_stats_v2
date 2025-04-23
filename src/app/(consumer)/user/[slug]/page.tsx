import CustomCardList from "@/components/custom-list";
import { prisma } from "@/lib/prisma";
import { Hero } from "@/lib/types";
import { getMonth } from "@/lib/utils";

type UserSlugType = {
  params: {
    slug: string;
  };
};

async function page({ params }: UserSlugType) {
  const localUser = await prisma.user.findUnique({
    where: {
      slug: params?.slug,
    },
  });

  const heroes = (await prisma.hero.findMany({
    where: {
      creator: {
        id: localUser?.id,
      },
    },
    include: {
      appearance: true,
      biography: true,
      work: true,
      connections: true,
      powerstats: true,
      image: true,
      creator: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })) as Hero[];

  const month = getMonth(localUser?.createdAt.getMonth() ?? 0);

  return (
    <section className="py-6 px-2 bg-[url('../../public/city-backdrop-2.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="section relative border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm min-h-screen">
        {!localUser ? (
          <div className="flex flex-col gap-10 items-center justify-center">
            <h2 className="font-semibold text-center text-2xl md:text-4xl">
              No User Found :/
            </h2>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-10 items-center mx-5 pb-10 border-b border-secondary md:grid md:grid-cols-2">
              <div className=" flex flex-col items-center gap-4 md:gap-10 ">
                <h2 className="text-center font-semibold text-lg sm:text-2xl md:text-4xl">
                  {localUser?.username}
                </h2>
                <p className="text-muted-foreground/50 text-xs sm:text-sm">{`member since: ${month} ${localUser?.createdAt.getFullYear()}`}</p>
              </div>
              <div className="mx-auto mb-auto text-sm md:text-xl">
                <p>{localUser?.role === "admin" ? "Admin" : "Basic User"}</p>
              </div>
            </div>
            <div className=" flex flex-col gap-10">
              <h3 className="text-2xl font-semibold py-4 text-center">
                Custom Heroes
              </h3>
              <CustomCardList heroes={heroes} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default page;
