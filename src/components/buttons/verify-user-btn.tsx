"use client";
import React from "react";
import { Button } from "../ui/button";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs";
import { onVerifyClick } from "@/actions/actions";

type VerifyBtnProps = {
  user: KindeUser<Record<string, unknown>> | null;
  userSlug: string;
};

function VerifyUserBtn({ user, userSlug }: VerifyBtnProps) {
  async function onClick() {
    await onVerifyClick(user, userSlug);
  }

  return (
    <Button
      className="h-8 rounded-md gap-1.5 px-3 text-xs sm:border sm:text-sm sm:bg-back sm:ground  sm:shadow-xs  sm:hover:bg-accent  sm:hover:text-accent-foreground md:h-9 md:px-4 md:py-2 lg:h-10 lg:rounded-md lg:px-6"
      onClick={() => {
        onClick();
      }}
      variant="link"
    >
      Verify
    </Button>
  );
}

export default VerifyUserBtn;
