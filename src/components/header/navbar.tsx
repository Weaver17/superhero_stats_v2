import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs";

type NavbarProps = {
  isLoggedIn: boolean | null;
  user: KindeUser<Record<string, any>> | null;
  userSlug: string;
};

function Navbar({ isLoggedIn, user, userSlug }: NavbarProps) {
  return (
    <nav className="flex gap-4 items-center">
      <Link href="/custom-hero/all">
        <Button className="px-0" variant="link">
          Custom Heroes
        </Button>
      </Link>
      {isLoggedIn ? (
        <>
          <Link href={`/user/${userSlug}`}>
            <Button variant="link">{user?.username}</Button>
          </Link>
          <Link href="/create-a-hero">
            <Button>Create-A-Hero</Button>
          </Link>
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
  );
}

export default Navbar;
