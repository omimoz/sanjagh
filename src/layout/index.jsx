"use client";
import React, { useContext } from "react";
import Header from "./Header";
import useBack from "../hooks/useBack";
import { SearchContext } from "../context/SearchProvider";

function Layout({ children }) {
  const { back } = useBack();
  const { getSearchType } = useContext(SearchContext);
  const searchType = getSearchType();
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-white z-[99999] cursor-default">
      <Header onBackButtonClick={back} searchType={searchType} />
      <div className="px-3"> {children} </div>
    </div>
  );
}

export default Layout;
