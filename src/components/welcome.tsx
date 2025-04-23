"use client";
import React from "react";
import { Button } from "./ui/button";

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
    } else {
      window.scrollTo(href);
    }
  };
  return (
    <div className=" px-5 py-5 flex flex-col items-center justify-center gap-2 text-center md:gap-4 md:py-10 lg:gap-8 lg:py-15">
      <h1 className="font-medium text-2xl md:text-4xl lg:text-7xl ">
        Welcome to SuperHero Stats!
      </h1>
      <p className="font-medium text-sm md:text-xl lg:text-3xl ">
        Search for a Hero below and click on the card to go to that hero&apos;s
        stat page
      </p>
      <p className="font-medium text-sm md:text-xl lg:text-3xl">
        Click{" "}
        <Button
          onClick={(e) => handleLinkClick(e, "#stat-preview")}
          variant={"ghost"}
          className="text-sm font-medium px-1 underline md:text-xl md:px-1 lg:text-3xl lg:px-1"
        >
          here
        </Button>{" "}
        to preview stat categories
      </p>
      <p className="font-medium text-sm md:text-xl lg:text-3xl">
        Click{" "}
        <Button
          onClick={(e) => handleLinkClick(e, "#create-a-hero")}
          variant={"ghost"}
          className="text-sm font-medium px-1 underline md:text-xl md:px-1 lg:text-3xl lg:px-1"
        >
          here
        </Button>{" "}
        to preview Create-A-Hero
      </p>
    </div>
  );
}

export default Welcome;
