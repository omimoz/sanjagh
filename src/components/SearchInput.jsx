"use client";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

const SearchInput = ({ serviceList, setServiceList, placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSearchInputChange = (e) => setInputValue(e.currentTarget.value);

  let handleClearClick = (_) => {
    setInputValue("");
    setServiceList([]);
  };

  useEffect(() => {
    let trimmedValue = inputValue.trim();
    setServiceList(
      trimmedValue === ""
        ? serviceList
        : serviceList.filter((s) => s.name.includes(trimmedValue))
    );
  }, [inputValue]);

  return (
    <div className="flex w-full">
      <div className="flex justify-between items-center w-full relative overflow-hidden">
        <input
          type="search"
          className="absolute outline-none text-gray-700 w-full"
          value={inputValue}
          onChange={handleSearchInputChange}
          placeholder={placeholder}
        />
      </div>
      <span className="z-10" onClick={handleClearClick}>
        <CgClose className="cursor-pointer" size="1.4rem" color="#D3D4D5" />
      </span>
    </div>
  );
};
export default SearchInput;
