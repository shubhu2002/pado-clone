import { useEffect, useRef } from "react";
import { useAppStore } from "~/store";
import { motion } from "framer-motion";

const ProofModal: React.FC = () => {
  const { toggleProofsModal } = useAppStore();

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        event.target &&
        !modalRef.current.contains(event.target as Node)
      ) {
        toggleProofsModal(false);
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
          Create Your Proof
        </motion.h1>
        <p className=" my-2 text-center text-sm font-medium">
          PADO uses interactive ZK protocol to attesting your data.
        </p>

        {/* Categories */}
        <div className="flex w-full flex-col justify-start gap-4 px-4 py-4">
          <div className="dark:dark-modal cursor-pointer rounded-lg bg-gray-100 p-4 visited:border-red-400 hover:border hover:bg-white dark:hover:bg-gray-900">
            <h1 className="font-extrabold">Assets Proof</h1>
            <span className="text-xs">Assets Balance in Binanace , OKX</span>
          </div>
          <div className="dark:dark-modal cursor-pointer rounded-lg bg-gray-100 p-4 visited:border-red-400 hover:border hover:bg-white dark:hover:bg-gray-900">
            <h1 className="font-extrabold">Token Holdings Proof</h1>
            <span className="text-xs">
              Token ownership in Binance, Coinbase, OKX
            </span>
          </div>
          <div className="dark:dark-modal cursor-pointer rounded-lg bg-gray-100 p-4 visited:border-red-400 hover:border hover:bg-white dark:hover:bg-gray-900">
            <h1 className="font-extrabold">Identity Proof</h1>
            <span className="text-xs">
              eKYC, Accounts ownership, Memberships
            </span>
          </div>
          <div className="dark:dark-modal cursor-pointer rounded-lg bg-gray-100 p-4 visited:border-red-400 hover:border hover:bg-white dark:hover:bg-gray-900">
            <h1 className="font-extrabold">Uniswap Transaction Proof</h1>
            <span className="text-xs">
              Largest transaction, volume - powered by Brevis
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProofModal;
