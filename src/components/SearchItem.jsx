import Link from "next/link";

const SearchItem = ({ zoneId, serviceId, serviceName }) => {
  return (
    <div className="border-b border-b-[#F5F5F5]">
      <Link
        href={`/service/?serviceId=${serviceId}&zoneId=${zoneId}`}
        className="text-black"
      >
        <li className="p-3 cursor-pointer hover:bg-[#E5F1FF] list-none">
          {serviceName}
        </li>
      </Link>
    </div>
  );
};
export default SearchItem;
