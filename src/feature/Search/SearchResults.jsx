import SearchItem from "../../components/SearchItem";

const SearchResults = ({ results, zoneId }) => {
  return (
    <div className="bg-white overflow-auto z-10 mt-12 top-0 max-h-72 absolute w-full border border-[#EAECED] rounded-b-md shadow-sm scrollbar-minimal">
      {results &&
        results.map(({ id, name }) => (
          <SearchItem
            key={id}
            zoneId={zoneId}
            serviceId={id}
            serviceName={name}
          />
        ))}
    </div>
  );
};
export default SearchResults;
