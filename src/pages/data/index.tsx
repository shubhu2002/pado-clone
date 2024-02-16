import { NextPage } from "next";
import SearchBar from "~/components/SearchBar";
import { useState } from "react";
import DataSourceModal from "~/components/DataSourceModal";
import { FaPlus } from "react-icons/fa6";
import RewardsModal from "~/components/RewardsModal";

const Datas: NextPage = () => {
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
      <button className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--primary-color)] absolute right-24 bottom-24"><FaPlus size={28} color="#78dffd"/></button>
      
    </div>
  );
};
export default Datas;
