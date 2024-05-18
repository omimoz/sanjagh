"use client";
import { useRouter } from "next/router";
import React, { createContext, useCallback, useState } from "react";
export const SearchContext = createContext();
function SearchProvider({ children }) {
  let [types, setTypes] = useState("CLOSE");
  const router = useRouter();
  const [zone, setZone] = useState({ zoneId: "", zoneName: "" });
  function getSearchType() {
    return types;
  }
  const setSearchType = useCallback(
    (type) => {
      if (type) {
        setTypes(type);
      }
    },
    [types]
  );
  const setCurrentZone = useCallback((newZone) => {
    return setZone(newZone);
  }, []);
  function getZoneId() {
    return zone.zoneId;
  }
  function getZoneName() {
    return zone.zoneName;
  }
  function handleCitySelect(zoneId, zoneName) {
    setCurrentZone({ zoneId, zoneName });
    router.push("/");
  }
  return (
    <SearchContext.Provider
      value={{
        setSearchType,
        getSearchType,
        setCurrentZone,
        getZoneId,
        getZoneName,
        handleCitySelect,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
