"use client";
import { BASE_URL, headers, heroRequest } from "@/lib/constants";
import React, { useMemo, useState } from "react";

export const HeroContext = React.createContext();

export const HeroContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const getHero = async (hero) => {
    return await heroRequest(`${BASE_URL}/search/${hero}`, headers);
  };
  const contextValue = useMemo(
    () => ({ getHero, loading, setLoading }),
    [getHero, loading, setLoading]
  );

  return (
    <HeroContext.Provider value={contextValue}>{children}</HeroContext.Provider>
  );
};

export default HeroContextProvider;
