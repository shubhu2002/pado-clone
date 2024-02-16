import Image from "next/image";
import { FaPlus } from "react-icons/fa6";

const DataSourceModal: React.FC = () => {
  const userID = "0xcbdhbcdbcjhdc";
  const date = new Date();

  return (
    <div className="h-[200px] w-full rounded-xl bg-[var(--primary-color)] px-6 py-2 duration-500 hover:-translate-y-2 md:w-[clamp(300px,45%,500px)]">
      {/* wallet not connected or data is not available*/}

      <div className="flex h-full w-full items-center justify-center gap-2 cursor-pointer">
          <FaPlus /> <span className="text-xl font-extrabold">Add</span>
        </div>

      {/* wallet connect && if there is any data*/}
      
      {/* <div className="flex h-full w-full flex-col justify-around">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2 ">
            <Image src="/file.svg" alt="file" width={40} height={40} />
            <div className="w-32 overflow-hidden text-ellipsis text-2xl font-bold md:w-40">
              {userID}
            </div>
          </div>
          <div className="flex items-center lg:gap-2 ">
            <div className=" scale-90 rounded-3xl border-2 border-[var(--highlight-color)] px-4 py-1 text-sm lg:scale-100">
              {" "}
              {date.toLocaleDateString()}
            </div>
            <span className="scale-90 rounded-3xl bg-yellow-100 px-5 py-2 text-sm font-extrabold text-yellow-700 lg:scale-100">
              Assets
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-around px-3 text-center">
          <div className="relative grid items-center gap-4">
            <span className="text-xs ">Total Balance</span>
            <span className="text-xl font-extrabold">$0.00</span>
          </div>
          <span className="h-6 w-[2px] bg-gray-300" />
          <div className="grid items-center gap-4">
            <span className="text-xs ">PnL</span>
            <span className="text-xl font-extrabold">+$0.0000</span>
          </div>
          <span className="h-6 w-[2px] bg-gray-300" />
          <div className="grid items-center gap-4">
            <span className="text-xs ">Assets No.</span>
            <span className="text-xl font-extrabold">0</span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DataSourceModal;
