import Loading from "@/app/loading/loading";
import HeroForm from "@/components/hero-form/hero-form";
import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";

// Force this page to be rendered dynamically at request time
// export const dynamic = "force-dynamic";

async function page() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("/");
  }

  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  const userRecord = await prisma.user.findUnique({
    where: { username: user?.username ?? "" },
  });

  if (!userRecord) {
    redirect("/");
  }

  const kindeId = user?.id;
  const username = user?.username;

  const userId = userRecord?.id;

  return (
    <Suspense fallback={<Loading />}>
      <div className="py-6 px-2 bg-[url('../../public/random-dark.jpg')] bg-cover bg-no-repeat bg-center min-h-screen">
        <div className="flex flex-col gap-6 mx-auto mb-6 justify-center items-center max-w-[70%]">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl lg:text-6xl">
            Create-A-Hero
          </h2>
          <p className=" text-center md:font-semibold md:text-lg lg:text-xl">
            Customize your hero and click submit to save the hero to your
            profile. Your hero will then show up on the Custom Hero list and get
            their own Hero Page
          </p>
          <p className=" text-center text-sm md:text-base md:font-semibold ">
            All fields are required
          </p>
        </div>
        <div className="section border border-secondary rounded-2xl bg-background/40 backdrop-blur-sm">
          <HeroForm
            kindeId={kindeId ?? ""}
            username={username ?? ""}
            userId={userId ?? ""}
          />
        </div>
      </div>
    </Suspense>
  );
}

export default page;
