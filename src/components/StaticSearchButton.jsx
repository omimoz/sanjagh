import { useRouter } from "next/router";
import { SearchContext } from "../context/SearchProvider";
import { useContext } from "react";
const { FiSearch } = require("react-icons/fi");

const StaticSearchButton = () => {
  const { getZoneName } = useContext(SearchContext);
  const zoneName = getZoneName();
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(zoneName ? "services" : "/city")}
      className="flex w-full overflow-hidden items-center p-3 border-gray-200 border rounded-lg h-12 w-full"
    >
      <FiSearch className="ml-1 xsm:ml-2" size="1.4rem" color="#D3D4D5" />
      <span className="text-ellipsis whitespace-nowrap overflow-hidden text-gray-400">
        جستجوی خدمات در شهرها...
      </span>
    </button>
  );
};
export default StaticSearchButton;
