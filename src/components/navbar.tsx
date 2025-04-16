import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";

async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  return (
    <header className="flex h-20 bg-background z-10 border-b border-zinc-700/50">
      <nav className="flex gap-4 container  items-center ">
        <Link
          className="mr-auto text-4xl hover:underline px-2 flex text-secondary"
          href="/"
        >
          SuperHero Stats
        </Link>
        <Link href="/custom-hero/all">
          <Button variant="link">Custom Heroes</Button>
        </Link>
        {isLoggedIn ? (
          <>
            <Link href="/create-a-hero">
              <Button>Create-A-Hero</Button>
            </Link>

            <LogoutLink>
              {" "}
              <Button variant="outline">Log Out</Button>
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink>
              <Button> Sign In</Button>
            </LoginLink>

            <RegisterLink>
              <Button variant="outline"> Sign Up</Button>
            </RegisterLink>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
