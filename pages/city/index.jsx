"use client"
import { SearchContext } from "@/src/context/SearchProvider";
import Layout from "@/src/layout";
import { useContext, useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const CitySearch = () => {
  const { handleCitySelect } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState("");
  const [filteredZoneList, setFilteredZoneList] = useState([]);
  const [zoneList, setZoneList] = useState([]);

  const handleInputChange = (e) => {
    let value = e.currentTarget.value;
    let trimmedValue = value.trim();

    setFilteredZoneList((_) => {
      if (trimmedValue === "") {
        return zoneList;
      } else {
        return zoneList.filter((z) => z.name.includes(trimmedValue));
      }
    });

    setInputValue((_) => value);
  };

  useEffect(() => {
    fetch("/api/zones")
      .then((res) => res.json())
      .then((zoneList) => {
        setZoneList(zoneList);
        setFilteredZoneList(zoneList);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Layout>
      <div className="flex items-center border rounded-lg border-gray-200 p-3">
        <HiOutlineLocationMarker
          className="ml-1 xsm:ml-2"
          size="1.2rem"
          color="#D3D4D5"
        />
        <input
          type="text"
          className="outline-none text-gray-700"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="جستجوی شهر"
        />
      </div>
      <div className="overflow-auto mt-3 max-h-[750px] scrollbar-minimal">
        {filteredZoneList.map(({ id, name }) => (
          <div
            key={id}
            onClick={() => handleCitySelect(id, name)}
            className="border-b border-b-gray-100 text-gray-500 py-3 px-2 cursor-pointer hover:bg-[#E5F1FF]"
          >
            <span>{name}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default CitySearch;
