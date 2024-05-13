import { HiOutlineLocationMarker } from "react-icons/hi";
const ZonePicker = ({ zoneName, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center py-3 pr-3 pl-5 border-gray-200 border border-r-0 rounded-l-lg sm:rounded-none sm:border-l-0 h-12 cursor-pointer"
    >
      <HiOutlineLocationMarker className="ml-1" size="1.4rem" color="#D3D4D5" />
      <span className="text-gray-800 select-none whitespace-nowrap">
        {zoneName ? zoneName : "انتخاب شهر"}
      </span>
    </div>
  );
};
export default ZonePicker;
