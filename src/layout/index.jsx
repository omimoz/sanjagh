"use client";
import React, { useEffect } from "react";
import useBack from "../hooks/useBack";
import { useRouter } from "next/router";
import { FaAngleRight } from "react-icons/fa6";
function Layout({ children, navText }) {
  const { back } = useBack();
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
          <div className="relative flex items-center justify-center py-6">
            <button className="absolute right-2" onClick={back}>
              <FaAngleRight size="22" />
            </button>
          </div>
        )}
      </div>
      <div className="px-3"> {children} </div>
    </div>
  );
}

export default Layout;
