"use client";
import { BASE_URL, headers, heroRequest } from "@/lib/constants";
import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

export const HeroContext = React.createContext();

export const HeroContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const getHero = async (hero) => {
    setIsLoading(true);
    return await heroRequest(`${BASE_URL}/search/${hero}`, headers).finally(
      () => {
        setIsLoading(false);
      }
    );
  };

  const getBatman = async () => {
    setIsLoading(true);
    return await heroRequest(`${BASE_URL}/search/batman`, headers).finally(
      () => {
        setIsLoading(false);
      }
    );
  };

  const contextValue = useMemo(
    () => ({ getHero, isLoading, setIsLoading, getBatman }),
    [getHero, isLoading, setIsLoading, getBatman]
  );

  return (
    <HeroContext.Provider value={contextValue}>{children}</HeroContext.Provider>
  );
};
HeroContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroContextProvider;
