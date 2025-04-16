import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { dcPublishers, marvelPublishers } from "./constants";
// import night1 from "@public/city-backdrop.jpg";
// import night2 from "@public/city-backdrop-2.jpg";
// import dark1 from "@public/random-dark.jpg";
// import dark2 from "@public/random-dark-2.jpg";
// import space from "@public/space-backdrop.jpg";
// import darkTrees from "@public/trees-dark.jpg";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBorderClass(publisher: string | undefined): string {
  if (!publisher) return "border-secondary";

  if (marvelPublishers.includes(publisher)) {
    return "border-marvel";
  } else if (dcPublishers.includes(publisher)) {
    return "border-dc";
  } else {
    switch (publisher) {
      case "NBC - Heroes":
        return "border-nbc";
      case "Dark Horse Comics":
        return "border-dark-horse";
      case "Wildstorm":
        return "border-wildstorm";
      case "Star Trek":
        return "border-star-trek";
      case "George Lucas":
        return "border-star-wars";
      case "IDW Publishing":
        return "border-idw";
      case "Shueisha":
        return "border-shueisha";
      case "SyFy":
        return "border-syfy";
      case "Sony Pictures":
        return "border-sony";
      case "J. K. Rowling":
        return "border-hp";
      case "Titan Books":
        return "border-titan";
      case "ABC Studios":
        return "border-abc";
      case "Rebellion":
        return "border-rebellion";
      case "Image Comics":
        return "border-image";
      case "Microsoft":
        return "border-halo";
      case "J. R. R. Tolkien":
        return "border-lotr";
      case "custom":
        return "border-custom-hero";
      default:
        return "border-secondary";
    }
  }
}

export function getBorderColor(levelNumber: number | null) {
  let barColor = "bg-weak";

  if (levelNumber) {
    if (levelNumber < 24) {
      // No change to barColor
    } else if (levelNumber > 25 && levelNumber <= 55) {
      barColor = "bg-average";
    } else if (levelNumber > 55 && levelNumber <= 85) {
      barColor = "bg-strong";
    } else {
      barColor = "bg-super";
    }
  }
  return barColor;
}

export function slugifyName(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

export function getCustomHeroBg(background: string | undefined) {
  if (!background) return "custom-hero-bg-none";

  switch (background) {
    case "Night City 1":
      return "custom-hero-bg-night1";
    case "Night City 2":
      return "custom-hero-bg-night2";
    case "Dark 1":
      return "custom-hero-bg-dark1";
    case "Dark 2":
      return "custom-hero-bg-dark2";
    case "Space":
      return "custom-hero-bg-space ";
    case "Dark Trees":
      return "custom-hero-bg-dark-trees";
    default:
      return "custom-hero-bg-none";
  }
}
