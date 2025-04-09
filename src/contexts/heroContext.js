"use client";
import { BASE_URL, headers, heroRequest } from "@/lib/constants";
import React, { useMemo, useContext } from "react";
import PropTypes from "prop-types";

export const HeroContext = React.createContext();

export const HeroContextProvider = ({ children }) => {
  const getHero = async (hero) => {
    return await heroRequest(`${BASE_URL}/search/${hero}`, headers);
  };

  const getHeroById = async (id) => {
    return await heroRequest(`${BASE_URL}/${id}`, headers);
  };

  const getBatman = async () => {
    return await heroRequest(`${BASE_URL}/search/batman`, headers);
  };

  const getPowerPreviewHero = async (id) => {
    return await heroRequest(`${BASE_URL}/${id}/powerstats`, headers);
  };

  const contextValue = useMemo(
    () => ({
      getHero,
      getHeroById,
      getBatman,
      getPowerPreviewHero,
    }),
    [getHero, getHeroById, getBatman, getPowerPreviewHero]
  );

  return (
    <HeroContext.Provider value={contextValue}>{children}</HeroContext.Provider>
  );
};
HeroContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useHeroes = () => {
  return useContext(HeroContext);
};
