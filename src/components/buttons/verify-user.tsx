"use client";
import React from "react";
import { Button } from "../ui/button";

function VerifyUserBtn({
  onVerifyClick,
}: {
  onVerifyClick: () => Promise<void>;
}) {
  return (
    <Button
      onClick={() => {
        onVerifyClick().catch((error) => {
          console.error("Error in button component:", error);
        });
      }}
      variant="outline"
    >
      Verify
    </Button>
  );
}

export default VerifyUserBtn;
