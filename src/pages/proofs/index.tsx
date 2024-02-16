import { NextPage } from "next";
import SearchBar from "~/components/SearchBar";
import { useState } from "react";
import DataSourceModal from "~/components/DataSourceModal";

const Proofs: NextPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };
  return (
    <div className="px-8 py-4 lg:px-36">
      <div className="my-10">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div>
        <DataSourceModal />
      </div>
    </div>
  );
};
export default Proofs;
