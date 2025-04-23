import { HeroContext } from "@/contexts/heroContext";
import { useContext } from "react";

function useHeroContextHook() {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error("Hero Provider not found!");
  }
  return context;
}

export default useHeroContextHook;
