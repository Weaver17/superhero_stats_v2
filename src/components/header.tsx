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
    <header className="flex h-20 bg-background z-10 border-b border-zinc-700/50">
      <div className="flex gap-4 container justify-between items-center ">
        <TitleLink />
        <Navbar isLoggedIn={isLoggedIn} user={user} userSlug={userSlug} />

        {isLoggedIn &&
          (localUser ? (
            <LogoutLink>
              {" "}
              <Button variant="outline">Log Out</Button>
            </LogoutLink>
          ) : (
            <VerifyUserBtn onClick={onVerifyClick} />
          ))}
      </div>
    </header>
  );
}

export default Header;
