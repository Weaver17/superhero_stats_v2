"use client";
import React from "react";
import { Button } from "../ui/button";

type VerifyBtnProps = {
  onClick: () => Promise<void>;
};

function VerifyUserBtn({ onClick }: VerifyBtnProps) {
  return (
    <Button
      onClick={() => {
        onClick();
      }}
      variant="outline"
    >
      Verify
    </Button>
  );
}

export default VerifyUserBtn;
