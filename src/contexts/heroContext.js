"use client";
import { BASE_URL, headers, heroRequest } from "@/lib/constants";
import React, { useMemo, useState } from "react";

export const HeroContext = React.createContext();

export const HeroContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const contextGetBatman = async () => {
    return await heroRequest(`${BASE_URL}/search/batman`, headers);
  };
  const contextValue = useMemo(
    () => ({ contextGetBatman, loading, setLoading }),
    [contextGetBatman, loading, setLoading]
  );

  return (
    <HeroContext.Provider value={contextValue}>{children}</HeroContext.Provider>
  );
};

export default HeroContextProvider;
