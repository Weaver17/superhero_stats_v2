import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { dcPublishers, marvelPublishers } from "./constants";

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
