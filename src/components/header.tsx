import React from "react";
import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/lib/database";
import { createLocalUser } from "@/actions/actions";
import { redirect } from "next/navigation";
import TitleLink from "./header/title-link";
import Navbar from "./header/navbar";
import { Button } from "./ui/button";
import VerifyUserBtn from "./buttons/verify-user-btn";

async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  const user = await getUser();

  const userSlug = (user?.username ?? "").toLowerCase().replace(/\s+/g, "-");

  const localUser = await prisma.user.findUnique({
    where: { slug: userSlug },
  });

  async function onVerifyClick() {
    "use server";
    console.log("onVerifyClick");
    await createLocalUser(user);
    redirect(`/user/${userSlug}`);
  }

  return (
    <header className="flex px-10 py-2 w-full bg-background z-10 border-b border-primary md:py-10">
      <div className="flex flex-col g-10 items-center w-full  md:flex-row md:justify-between">
        <TitleLink />
        <div className="flex flex-col gap-4 items-center mx-auto mt-4 md:flex-row md:mx-0 ">
          <Navbar isLoggedIn={isLoggedIn} user={user} userSlug={userSlug} />

          {isLoggedIn &&
            (localUser ? (
              <LogoutLink>
                {" "}
                <Button
                  className="h-8 rounded-md gap-1.5 px-3 md:h-9 md:px-4 md:py-2 lg:h-10 lg:rounded-md lg:px-6"
                  variant="outline"
                >
                  Log Out
                </Button>
              </LogoutLink>
            ) : (
              <VerifyUserBtn onClick={onVerifyClick} />
            ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
