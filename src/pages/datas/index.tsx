import { NextPage } from "next";
import SearchBar from "~/components/SearchBar";
import { FaPlus } from "react-icons/fa6";
import { useAppStore } from "~/store";
import DataCard from "~/components/DataCard";
import { motion } from "framer-motion";

const Datas: NextPage = () => {
  const { toggleDataSourcesModal } = useAppStore();

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };
  return (
    <>
      <div className="h-full px-8 py-4 lg:px-36">
        <div className="my-10">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div>
          <DataCard />
        </div>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.4 }}
          className="dark:dark-modal absolute bottom-36 lg:bottom-24 right-10 lg:right-24 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-color)]"
          onClick={() => toggleDataSourcesModal(true)}
        >
          <FaPlus size={28} color="#78dffd" />
        </motion.button>
      </div>
    </>
  );
};
export default Datas;
