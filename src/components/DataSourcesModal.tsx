import { useEffect, useRef } from "react";
import { useAppStore } from "~/store";
import { motion } from "framer-motion";

const DataSourcesModal: React.FC = () => {
  const { toggleDataSourcesModal } = useAppStore();

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        event.target &&
        !modalRef.current.contains(event.target as Node)
      ) {
        toggleDataSourcesModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div className="w-full h-screen fixed left-0 top-0 z-50 flex justify-center items-center backdrop-blur-lg ">
      <motion.div
        ref={modalRef}
        className=" dark:dark-modal mt-2 h-auto w-[90vw] max-w-[500px] rounded-lg border-2 border-gray-100 bg-white/80 px-4 py-6 lg:m-auto lg:w-[500px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {/* title */}
        <motion.h1 className="my-3 text-center text-2xl font-extrabold">
          Data Sources
        </motion.h1>
        <p className=" my-3 text-center text-sm font-medium">
          PADO validates data authenticity through MPC-TLS.
        </p>

        {/* Categories */}
        <div className="flex w-full justify-start gap-10 py-6">
          <button className="nav_liner nav_liner_hover">Assets</button>
          <button className="nav_liner nav_liner_hover">Social</button>
          <button className="nav_liner nav_liner_hover">Identity</button>
        </div>
        <div className=" w-full ">
          <button className="btn ripple w-full hover:bg-white"> Select</button>
        </div>
      </motion.div>
    </div>
  );
};

export default DataSourcesModal;
