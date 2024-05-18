//this page load ssg
import SearchInput from "@/src/components/SearchInput";
import { fetchCities } from "@/src/data/Api";
import Layout from "@/src/layout";
import { updateView } from "@/src/utils/filterZones";
import { HiOutlineLocationMarker } from "react-icons/hi";

const CitySearch = ({ zoneList }) => {
  let filterzoneList = zoneList;
  function handleFilterZone(newValue) {
    filterzoneList = newValue;
    updateView(filterzoneList); //function to filter zones
  }
  return (
    <Layout>
      <div className="flex items-center border rounded-lg border-gray-200 p-3">
        <HiOutlineLocationMarker
          className="ml-1 xsm:ml-2"
          size="1.2rem"
          color="#D3D4D5"
        />
        <SearchInput
          type="text"
          className="outline-none text-gray-700"
          serviceList={filterzoneList}
          setServiceList={handleFilterZone}
          placeholder="جستجوی شهر"
        />
      </div>
      <div
        id="zoneListContainer"
        className="overflow-auto mt-3 max-h-[750px] scrollbar-minimal"
      ></div>
    </Layout>
  );
};

export async function getStaticProps() {

  const zoneList = await fetchCities();
  return {
    props: {
      zoneList,
    },
  };
}
export default CitySearch;
