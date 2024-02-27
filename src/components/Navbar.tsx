import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  PiCirclesThree,
  PiCertificate,
  PiUserCircle,
  PiGift,
} from "react-icons/pi";
import { IoIosSettings, IoMdLock } from "react-icons/io";
import { useAppStore } from "~/store";
import { useWallet } from "@meshsdk/react";
import { motion } from "framer-motion";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiWallet } from "react-icons/ci";
import { VscDebugDisconnect } from "react-icons/vsc";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const { toggleConnectModal, toggleSettingModal, toggleRewardModal } =
    useAppStore();
  const { connected, disconnect } = useWallet();

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  return (
    <>
      <motion.nav
        className={`sticky left-0 right-0 top-0 z-30 w-full ${pathname === "/" ? "hidden" : "flex"}`}
        onMouseLeave={() => setShowUserMenu(false)}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="dark:dark relative z-[999] flex h-[80px] w-full items-center justify-between bg-[var(--primary-color)] px-3 py-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,.05)] dark:shadow-[0px_4px_4px_0px_rgba(255,255,255,.1)] lg:px-12">
          {/* logo */}
          <div className=" flex items-center gap-4">
            <div
              className="block lg:hidden "
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? (
                <RxCross2 size={32} />
              ) : (
                <RxHamburgerMenu size={32} />
              )}
            </div>
            <Link href={`/`} className="text-3xl font-extrabold tracking-wider">
              PADO
            </Link>
          </div>
          {/* menu-items */}

          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
            className={`absolute z-50 flex h-full gap-10 lg:relative ${openMenu ? `left-0 top-24 items-center rounded-xl border-[1px] border-white/50 bg-black p-4` : `hidden lg:flex lg:items-end`}`}
          >
            <Link
              href={`/datas`}
              className={`${pathname === "/datas" ? `nav_liner` : `nav_liner_hover`} text-md dark:hover:dark flex h-full items-center gap-2 hover:text-black lg:items-end`}
            >
              <PiCirclesThree size={28} />
              Data
            </Link>
            <Link
              href={`/proofs`}
              className={`${pathname === "/proofs" ? `nav_liner` : `nav_liner_hover`} text-md dark:hover:dark flex h-full items-center gap-2 hover:text-black lg:items-end`}
            >
              <PiCertificate size={28} />
              Proofs
            </Link>
          </motion.div>

          {/* sub-menus */}
          <div className="flex items-center gap-5">
            <motion.div
              className="cursor-pointer "
              onMouseOverCapture={() => setShowUserMenu(true)}
            >
              <PiUserCircle size={32} />
              {showUserMenu && (
                <div
                  className="absolute right-0 top-20 lg:right-20"
                  onMouseLeave={() => setShowUserMenu(false)}
                >
                  <ul className="dark:dark flex w-48 flex-col rounded-lg bg-[var(--primary-color)] py-4 shadow-[0_4px_8px_0_rgba(9,30,66,0.2)] dark:shadow-[0px_4px_8px_0px_rgba(255,255,255,.1)]">
                    <li
                      className="flex items-center gap-3 p-3 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800"
                      onClick={() => toggleSettingModal(true)}
                    >
                      <IoIosSettings />
                      Settings
                    </li>
                    <li
                      className="flex items-center gap-3 p-3 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800"
                      onClick={() => toggleRewardModal(true)}
                    >
                      <PiGift />
                      Rewards
                    </li>
                    <li
                      className="flex items-center gap-3 p-3 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800"
                      onClick={() => disconnect()}
                    >
                      <PiGift />
                      Disconnect
                    </li>
                    <li>
                      <Link
                        href={`/`}
                        className="flex items-center gap-3 p-3 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800"
                      >
                        <IoMdLock />
                        Lock Account
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </motion.div>

            {/* wallet connect */}
            <button
              className="btn ripple hidden hover:!bg-white hover:text-black lg:block "
              onClick={() => toggleConnectModal(true)}
            >
              {connected ? "Connected" : "Connect Wallet"}
            </button>
            <button
              className="btn ripple block p-4 hover:!bg-white hover:text-black lg:hidden"
              onClick={() => toggleConnectModal(true)}
            >
              {connected ? (
                <VscDebugDisconnect size={28} />
              ) : (
                <CiWallet size={28} color="black" />
              )}
            </button>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
