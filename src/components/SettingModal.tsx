import { CiUser } from "react-icons/ci";
import { useAppStore } from "~/store";
import { useEffect, useRef } from "react";
import { useWallet } from "@meshsdk/react";
import { motion } from "framer-motion";

const SettingModal: React.FC = () => {
  const { toggleSettingModal, connectedWallet } = useAppStore();

  const { connected } = useWallet();

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        event.target &&
        !modalRef.current.contains(event.target as Node)
      ) {
        toggleSettingModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div className="w-full fixed left-0 top-0 z-50 flex h-screen items-center justify-center backdrop-blur-lg  ">
      <motion.div
        className="dark:dark-modal h-auto w-[90vw] max-w-[500px] rounded-lg border-2 border-gray-100 bg-white/80 px-4 py-10 lg:m-auto lg:w-[500px] "
        ref={modalRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="mb-10 flex items-center gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--highlight-color)]">
            <CiUser size={36} />
          </div>
          <div className="flex flex-col text-sm ">
            <span className="font-extrabold">Hii</span>
            <span>PADO Account</span>
            <span className="w-full max-w-xs overflow-hidden text-ellipsis">
              {connected ? `${connectedWallet.address}` : "No Wallet Connected"}
            </span>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gray-400"></div>

        <div className="my-8 flex flex-col items-start gap-4 ">
          <span className="w-full rounded-lg px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-900 ">
            Change Password
          </span>
          <span className="w-full rounded-lg px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-900">
            Manage Data{" "}
          </span>
        </div>

        <div className="h-[1px] w-full bg-gray-400"></div>

        {/* privacy & policies */}
        <div className="my-8 flex flex-col items-start gap-4 ">
          <a
            href="/"
            className="w-full rounded-lg px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-900"
          >
            Support
          </a>
          <a
            href="/"
            className="w-full rounded-lg px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-900"
          >
            Privacy Policy
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingModal;
