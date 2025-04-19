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
        <Button
          className="h-8 rounded-md gap-1.5 px-0 md:h-9 md:py-2 lg:h-10 lg:rounded-md"
          variant="link"
        >
          Custom Heroes
        </Button>
      </Link>
      {isLoggedIn ? (
        <>
          <Link href={`/user/${userSlug}`}>
            <Button
              className="h-8 rounded-md gap-1.5 px-0 md:h-9 md:py-2 lg:h-10 lg:rounded-md"
              variant="link"
            >
              {user?.username}
            </Button>
          </Link>
          <Link href="/create-a-hero">
            <Button className="h-8 rounded-md gap-1.5 px-3 md:h-9 md:px-4 md:py-2 lg:h-10 lg:rounded-md lg:px-6">
              Create-A-Hero
            </Button>
          </Link>
        </>
      ) : (
        <>
          <LoginLink>
            <Button className="h-8 rounded-md gap-1.5 px-3 md:h-9 md:px-4 md:py-2 lg:h-10 lg:rounded-md lg:px-6">
              {" "}
              Sign In
            </Button>
          </LoginLink>

          <RegisterLink>
            <Button
              className="h-8 rounded-md gap-1.5 px-3 md:h-9 md:px-4 md:py-2 lg:h-10 lg:rounded-md lg:px-6"
              variant="outline"
            >
              {" "}
              Sign Up
            </Button>
          </RegisterLink>
        </>
      )}
    </nav>
  );
}

export default Navbar;
