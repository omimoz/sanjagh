import React from "react";
import { getHeaderText } from "../static/getHeader";
import { FaAngleRight } from "react-icons/fa6";
const Header = ({ searchType, onBackButtonClick }) => {
  const header = getHeaderText(searchType);
  return (
    <div className="relative flex items-center justify-center py-6">
      <button className="absolute right-2" onClick={onBackButtonClick}>
        <FaAngleRight size="22" />
      </button>
      <p className="font-bold text-lg"> {header} </p>
    </div>
  );
};

export default Header;
