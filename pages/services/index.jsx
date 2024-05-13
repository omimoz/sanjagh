import SearchInput from "@/src/components/SearchInput";
import ZonePicker from "@/src/components/ZonePicker";
import { useContext, useEffect, useState } from "react";
import SearchResults from "../../src/feature/Search/SearchResults";
import { SearchContext } from "@/src/context/SearchProvider";
import Layout from "@/src/layout";
import { useRouter } from "next/router";

const ServiceSearch = () => {
  const router = useRouter();
  const { getZoneName, getZoneId } = useContext(SearchContext);
  const zoneId = getZoneId();
  const zoneName = getZoneName();
  const [serviceList, setServiceList] = useState([]);
  const [filterdServiceList, setFilteredServiceList] = useState([]);

  useEffect(() => {
    fetch(`/api/services?zoneId=${zoneId}`)
      .then((res) => res.json())
      .then((serviceList) => {
        setServiceList(serviceList);
        setFilteredServiceList(serviceList);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Layout>
      <div className="relative flex items-center w-full shadow-sm rounded-md">
        <div className="flex flex-col justify-center w-full relative">
          <div className="flex items-center p-3 border-gray-200 border rounded-lg rounded-l-none border-l-0 h-12">
            <SearchInput
              serviceList={serviceList}
              setServiceList={setFilteredServiceList}
            />
          </div>
          <span className="absolute left-0 self-center h-9 w-0 border-r-[1px] border-gray-200" />
        </div>
        <ZonePicker zoneName={zoneName} onClick={() => router.push("city")} />
        <SearchResults results={filterdServiceList} zoneId={zoneId} />
      </div>
    </Layout>
  );
};
export default ServiceSearch;
