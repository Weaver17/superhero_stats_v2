import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs";
import { TCreateLocalUserSchema } from "@/lib/types";
import VerifyUserBtn from "../buttons/verify-user-btn";

type NavbarProps = {
  isLoggedIn: boolean | null;
  user: KindeUser<Record<string, any>> | null;
  userSlug: string;
  localUser: TCreateLocalUserSchema | null;
};

function Navbar({ isLoggedIn, user, userSlug, localUser }: NavbarProps) {
  return (
    <nav className=" hidden sm:flex gap-4 items-center">
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
          {localUser ? (
            <Link href={`/user/${userSlug}`}>
              <Button
                className="h-8 rounded-md gap-1.5 px-0 md:h-9 md:py-2 lg:h-10 lg:rounded-md"
                variant="link"
              >
                {user?.username}
              </Button>
            </Link>
          ) : (
            <VerifyUserBtn user={user} userSlug={userSlug} />
          )}

          <Link href="/create-a-hero">
            <Button className="h-8 rounded-md gap-1.5 px-3 md:h-9 md:px-4 md:py-2 lg:h-10 lg:rounded-md lg:px-6">
              Create-A-Hero
            </Button>
          </Link>
          <LogoutLink>
            {" "}
            <Button
              className="h-8 rounded-md gap-1.5 px-3 md:h-9 md:px-4 md:py-2 lg:h-10 lg:rounded-md lg:px-6"
              variant="outline"
            >
              Log Out
            </Button>
          </LogoutLink>
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
