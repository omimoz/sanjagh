import SearchInput from "@/src/components/SearchInput";
import ZonePicker from "@/src/components/ZonePicker";
import React from "react";
import SearchResults from "./SearchResults";
import { updateView } from "@/src/utils/filterZones";
import { useRouter } from "next/router";
function ServicesSearch({ services, zoneName, zoneId }) {
  const router = useRouter();
  let filterServices = services;
  function handleOpenZones() {
    router.push("/city");
  }
  function handleFilterServices(newValue) {
    filterServices = newValue;
    updateView(filterServices); //function to filter zones
  }
  return (
    <div className="relative flex items-center w-full shadow-sm rounded-md">
      <div className="flex flex-col justify-center w-full relative">
        <div
          className="flex items-center p-3 border-gray-200 border rounded-lg rounded-l-none border-l-0 h-12"
          onClick={!zoneId ? handleOpenZones : () => {}}
        >
          <SearchInput
            placeholder={"به چه خدمتی نیاز دارید؟"}
            serviceList={filterServices}
            setServiceList={handleFilterServices}
          />
        </div>
        <span className="absolute left-0 self-center h-9 w-0 border-r-[1px] border-gray-200" />
      </div>
      <ZonePicker zoneName={zoneName} onClick={handleOpenZones} />
      <SearchResults results={filterServices} zoneId={zoneId} />
    </div>
  );
}

export default ServicesSearch;
