"use client";
import React from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import { heroFormSuccessToast } from "@/lib/toast";

function Welcome() {
  const handleLinkClick = (
    e: { preventDefault: () => void },
    href: ScrollToOptions | string | undefined
  ) => {
    e.preventDefault();
    if (typeof href === "string") {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      toast(
        "This is an extremely long test sentence to format the toast",
        heroFormSuccessToast
      );
    } else {
      window.scrollTo(href);
    }
  };
  return (
    <div className=" p-15 flex flex-col items-center justify-center gap-8 text-center">
      <h1 className="text-7xl font-medium">Welcome to SuperHero Stats!</h1>
      <p className="text-3xl font-medium">
        Search for a Hero below and click on the card to go to that hero's stat
        page
      </p>
      <p className="text-3xl font-medium">
        Click{" "}
        <Button
          onClick={(e) => handleLinkClick(e, "#stat-preview")}
          variant={"ghost"}
          className="text-3xl font-medium px-1 underline"
        >
          here
        </Button>{" "}
        to preview stat categories
      </p>
      <p className="text-3xl font-medium">
        Click{" "}
        <Button
          onClick={(e) => handleLinkClick(e, "#create-a-hero")}
          variant={"ghost"}
          className="text-3xl font-medium px-1 underline"
        >
          here
        </Button>{" "}
        to preview Create-A-Hero
      </p>
    </div>
  );
}

export default Welcome;
