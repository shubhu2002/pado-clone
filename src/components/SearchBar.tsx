import { ChangeEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.target.value;
    setQuery(inputValue);
    onSearch(inputValue); // Call the onSearch callback with the current query value
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex h-12  w-1/6 items-center justify-between rounded-xl bg-[var(--primary-color)] px-2 lg:px-6">
        <span className="font-bold">All</span>
        <span className="hover:rotate-180">
          <IoIosArrowDown />
        </span>
      </div>
      <div className="flex h-12 w-4/5 items-center rounded-xl bg-[var(--primary-color)]">
        <span className="absolute px-3">
          <CiSearch size={24} color="gray" />
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="h-full w-full rounded-xl border-none bg-[var(--primary-color)] pl-12 outline-[var(--highlight-color)] focus:bg-white"
        />
      </div>
    </div>
  );
};

export default SearchBar;
