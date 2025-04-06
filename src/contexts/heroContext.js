"use client";
import { headers, heroRequest } from "@/lib/constants";
import React, { useMemo } from "react";

// type HeroContextProps = {
//   children: React.ReactNode;
// };

export const HeroContext = React.createContext();

// type THeroContext = {
//     hero: Hero;
// }

export const HeroContextProvider = ({ children }) => {
  const baseUrl =
    "https://superheroapi.com/api/cf5e8cb0f38ad9f2713ccc5537ffa595";

  const contextGetBatman = async () => {
    return await heroRequest(`${baseUrl}/search/batman`, headers);
  };
  const contextValue = useMemo(
    () => ({ contextGetBatman }),
    [contextGetBatman]
  );

  return (
    <HeroContext.Provider value={contextValue}>{children}</HeroContext.Provider>
  );
};

export default HeroContextProvider;
