import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/lib/database";
import TitleLink from "./header/title-link";
import Navbar from "./header/navbar";
import MobileNavbar from "./header/mobile/mobile-nav";

async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  const user = await getUser();

  const userSlug = (user?.username ?? "").toLowerCase().replace(/\s+/g, "-");

  const localUser = await prisma.user.findUnique({
    where: { slug: userSlug },
  });

  return (
    <header className="flex px-10 py-2 w-full bg-background z-10 border-b border-primary md:py-10">
      <div className="flex flex-col g-10 items-center w-full  md:flex-row md:justify-between">
        <TitleLink />
        <div className="flex flex-col gap-4 items-center mx-auto mt-4 md:flex-row md:mx-0 ">
          <Navbar
            isLoggedIn={isLoggedIn}
            user={user}
            userSlug={userSlug}
            localUser={localUser}
          />
          <MobileNavbar
            isLoggedIn={isLoggedIn}
            user={user}
            userSlug={userSlug}
            localUser={localUser}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
