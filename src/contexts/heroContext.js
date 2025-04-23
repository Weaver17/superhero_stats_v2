"use client";
import { BASE_URL, headers, heroRequest } from "@/lib/constants";
import React, { useMemo, useContext, useCallback } from "react";
import PropTypes from "prop-types";

export const HeroContext = React.createContext();

export const HeroContextProvider = ({ children }) => {
  const getHero = useCallback(async (hero) => {
    return await heroRequest(`${BASE_URL}/search/${hero}`, headers);
  }, []);

  // Wrap other functions similarly if needed for stability
  const getHeroById = useCallback(async (id) => {
    return await heroRequest(`${BASE_URL}/${id}`, headers);
  }, []);

  const getBatman = useCallback(async () => {
    return await heroRequest(`${BASE_URL}/search/batman`, headers);
  }, []);

  const getPowerPreviewHero = useCallback(async (id) => {
    return await heroRequest(`${BASE_URL}/${id}/powerstats`, headers);
  }, []);

  const getAppPreviewHero = useCallback(async (id) => {
    return await heroRequest(`${BASE_URL}/${id}/appearance`, headers);
  }, []);

  const getWorkPreviewHero = useCallback(async (id) => {
    return await heroRequest(`${BASE_URL}/${id}/work`, headers);
  }, []);

  const getBioPreviewHero = useCallback(async (id) => {
    return await heroRequest(`${BASE_URL}/${id}/biography`, headers);
  }, []);

  const getConnPreviewHero = useCallback(async (id) => {
    return await heroRequest(`${BASE_URL}/${id}/connections`, headers);
  }, []);

  const contextValue = useMemo(
    () => ({
      getHero,
      getHeroById,
      getBatman,
      getPowerPreviewHero,
      getAppPreviewHero,
      getBioPreviewHero,
      getWorkPreviewHero,
      getConnPreviewHero,
    }),
    [
      getHero,
      getHeroById,
      getBatman,
      getPowerPreviewHero,
      getAppPreviewHero,
      getBioPreviewHero,
      getWorkPreviewHero,
      getConnPreviewHero,
    ]
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
