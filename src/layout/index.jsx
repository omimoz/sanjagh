"use client";
import React, { useContext, useEffect } from "react";
import Header from "./Header";
import useBack from "../hooks/useBack";
import { SearchContext } from "../context/SearchProvider";
import { useRouter } from "next/router";

function Layout({ children, navText }) {
  const { back } = useBack();
  const { getSearchType } = useContext(SearchContext);
  const searchType = getSearchType();
  const { pathname, replace } = useRouter();
  function changeRoute() {
    replace(`/${window.location.search}`);
  }
  useEffect(() => {
    const cities = document?.querySelectorAll("#city");
    if (cities) {
      cities.forEach((city) => {
        city.addEventListener("click", changeRoute);
      });

      return () => {
        cities.forEach((city) => {
          city.removeEventListener("click", changeRoute);
        });
      };
    }
  });
  return (
    <div
      className={`fixed  top-0 bottom-0 left-0 right-0 bg-white z-[99999] cursor-default `}
    >
      <div className={`relative h-[50px] ${navText && "shadow-md"}`}>
        <div className="absolute left-5 h-full flex justify-center items-center ">
          {navText}
        </div>
        {pathname !== "/" && (
          <Header onBackButtonClick={back} searchType={searchType} />
        )}
      </div>
      <div className="px-3"> {children} </div>
    </div>
  );
}

export default Layout;
