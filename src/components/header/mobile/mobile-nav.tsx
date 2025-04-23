import Link from "next/link";
import React from "react";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { TCreateLocalUserSchema } from "@/lib/types";
import VerifyUserBtn from "@/components/buttons/verify-user-btn";

type MobileNavbarProps = {
  isLoggedIn: boolean | null;
  user: KindeUser<Record<string, unknown>> | null;
  userSlug: string;
  localUser: TCreateLocalUserSchema | null;
};

function MobileNavbar({
  isLoggedIn,
  user,
  userSlug,
  localUser,
}: MobileNavbarProps) {
  return (
    <nav className="flex flex-col gap-1 items-center sm:hidden">
      <Link href="/custom-hero/all">
        <Button className="text-xs p-0 md:p-0 lg:p-0" variant="link">
          Custom Heroes
        </Button>
      </Link>
      {isLoggedIn ? (
        <>
          {localUser ? (
            <Link href={`/user/${userSlug}`}>
              <Button className="text-xs p-0 md:p-0 lg:p-0" variant="link">
                {user?.username}
              </Button>
            </Link>
          ) : (
            <VerifyUserBtn user={user} userSlug={userSlug} />
          )}

          <Link href="/create-a-hero">
            <Button className="text-xs p-0 md:p-0 lg:p-0 " variant="link">
              Create-A-Hero
            </Button>
          </Link>
          <LogoutLink>
            {" "}
            <Button className="text-xs p-0 md:p-0 lg:p-0" variant="link">
              Log Out
            </Button>
          </LogoutLink>
        </>
      ) : (
        <>
          <LoginLink>
            <Button
              className="h-8 rounded-md gap-1.5 text-xs px-3"
              variant="link"
            >
              {" "}
              Sign In
            </Button>
          </LoginLink>

          <RegisterLink>
            <Button
              className="h-8 rounded-md gap-1.5 text-xs px-3"
              variant="link"
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

export default MobileNavbar;
