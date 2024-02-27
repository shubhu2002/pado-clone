import { wallets } from "~/data/wallets";
import Image from "next/image";
import { useWallet, useWalletList } from "@meshsdk/react";
import { BrowserWallet } from "@meshsdk/core";
import { useEffect, useRef } from "react";
import { WALLET_NAME_KEY, useAppStore } from "~/store";
import { motion } from "framer-motion";

const ConnectWalletModal: React.FC = () => {
  const { toggleConnectModal, setConnectedWallet } = useAppStore();

  const modalRef = useRef<HTMLDivElement>(null);

  const supportedWallets = useWalletList();

  const { connect } = useWallet();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        event.target &&
        !modalRef.current.contains(event.target as Node)
      ) {
        toggleConnectModal(false);
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
        className=" dark:dark-modal mt-2 w-[90vw] max-w-[400px] rounded-lg border-2 border-gray-100 bg-white/80 px-4 py-6 lg:m-auto lg:w-[400px] "
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {/* title */}
        <motion.h1 className="my-3 text-center text-2xl font-extrabold">
          Connect Your Wallet
        </motion.h1>
        <p className=" my-3 text-center text-sm font-medium">
          Your wallet address will be set as the account.
        </p>

        {/* wallets cards */}
        <div className="mt-12 h-full max-h-[400px] overflow-y-scroll">
          <div className="grid gap-6 p-5">
            {/* card */}
            {supportedWallets.length > 0 ? (
              supportedWallets.map((w, id) => (
                <motion.div
                  key={id * Math.random()}
                  onClick={async () => {
                    try {
                      await connect(w.name);
                      toggleConnectModal(false);
                      2;
                      const wallet = await BrowserWallet.enable(w.name);
                      const address = (await wallet.getRewardAddresses())[0];

                      if (address) {
                        setConnectedWallet({
                          address: address,
                        });

                        localStorage.setItem(WALLET_NAME_KEY, w.name);
                      }
                    } catch (error) {
                      console.log(error);
                    }
                  }}
                  style={{
                    background: wallets[w.name.toLowerCase()]?.gradient_bg,
                  }}
                  className="flex h-[60px] w-full cursor-pointer items-center justify-between rounded-lg px-5 py-2 transition-all hover:scale-[1.02]"
                >
                  <span className="text-2xl font-bold ">{w.name}</span>
                  <Image
                    src={wallets[w.name.toLowerCase()]?.image ?? ""}
                    alt={wallets[w.name.toLowerCase()]?.image ?? ""}
                    width={40}
                    height={40}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-xl"
              >
                No Wallets Found
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConnectWalletModal;
