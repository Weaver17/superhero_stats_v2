import CustomCardList from "@/components/custom-list";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/database";
import { Hero } from "@/lib/types";
import { getMonth } from "@/lib/utils";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type UserSlugType = {
  params: {
    slug: string;
  };
};

async function page({ params }: UserSlugType) {
  const user = await prisma.user.findUnique({
    where: {
      slug: params?.slug,
    },
  });

  const { getUser } = getKindeServerSession();

  const kindeInfo = await getUser();

  const heroes = (await prisma.hero.findMany({
    where: {
      creator: {
        id: user?.id,
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

  const month = getMonth(user?.createdAt.getMonth() ?? 0);

  return (
    <section className="py-6 px-2 bg-[url('../../public/city-backdrop-2.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
      <div className="section relative border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm min-h-screen">
        {!user ? (
          <h2 className="font-semibold text-center text-4xl">
            No User Found :/
          </h2>
        ) : (
          <>
            <div className="absolute top-3 right-4 flex gap-4 items-center">
              {user?.kindeId === kindeInfo?.id ? (
                <Button variant="ghost">EDIT</Button>
              ) : null}
            </div>
            <div className="grid grid-cols-2 mx-5 pb-10 border-b border-secondary ">
              <div className="mr-16 flex flex-col gap-10  items-center">
                <h2 className="text-4xl font-semibold">{user?.username}</h2>
                <p className="text-muted-foreground/50">{`member since: ${month} ${user?.createdAt.getFullYear()}`}</p>
              </div>
              <div className="mr-16 flex flex-col gap-10  items-center">
                <p>{user?.role === "admin" ? "Admin" : "Basic User"}</p>
              </div>
            </div>
            <div className="mr-16 flex flex-col gap-10">
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
