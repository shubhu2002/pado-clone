import { useEffect, useRef } from "react";
import { useAppStore } from "~/store";
import { motion } from "framer-motion";

const RewardsModal: React.FC = () => {
  const { toggleRewardModal } = useAppStore();

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        event.target &&
        !modalRef.current.contains(event.target as Node)
      ) {
        toggleRewardModal(false);
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
        className="dark:dark-modal h-auto w-[90vw] max-w-[500px] rounded-lg border-2 border-gray-100 bg-white/80 px-4 py-10 lg:m-auto lg:w-[500px]"
        ref={modalRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div>
          <h1 className="my-3 text-center text-2xl font-extrabold">Rewards</h1>
          <div className="flex w-full justify-start gap-10 py-6">
            <button className="nav_liner nav_liner_hover dark:hover:text-white">
              Badges
            </button>
            <button className="nav_liner nav_liner_hover dark:hover:text-white">
              NFTs
            </button>
          </div>
        </div>
        <div className=" w-full ">
          <button className="btn ripple w-full"> OK</button>
        </div>
      </motion.div>
    </div>
  );
};

export default RewardsModal;
