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
import ConnectWalletModal from "./ConnectWalletModal";
import RewardsModal from "./RewardsModal";
import SettingModal from "./SettingModal";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [showWallet, setShowWallet] = useState<boolean>(false);
  const [showRewards, setShowRewards] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  return (
    <>
      <nav
        className="sticky left-0 right-0 top-0 z-30 w-full"
        onMouseLeave={() => setShowUserMenu(false)}
      >
        <div className="flex h-[70px] w-full items-center justify-between bg-[var(--primary-color)] px-10 py-3 shadow-[0px_2px_2px_0px_rgba(0,0,0,.05)] lg:px-12">
          <div>
            <h1 className="text-3xl font-extrabold tracking-wider">PADO</h1>
          </div>
          <div className="hidden h-full items-end gap-10 lg:flex ">
            <Link
              href={`/data`}
              className={`${pathname === "/data" ? `nav_liner` : `nav_liner_hover`} text-md flex h-full items-end gap-2 hover:text-black`}
            >
              <PiCirclesThree size={28} />
              Data
            </Link>
            <Link
              href={`/proofs`}
              className={`${pathname === "/proofs" ? `nav_liner` : `nav_liner_hover`} text-md flex h-full items-end gap-2 hover:text-black`}
            >
              <PiCertificate size={28} />
              Proofs
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer "
              onMouseOverCapture={() => setShowUserMenu(true)}
            >
              <PiUserCircle size={28} />
              {showUserMenu && (
                <div
                  className="absolute top-16"
                  onMouseLeave={() => setShowUserMenu(false)}
                >
                  <ul className="flex  w-48 flex-col rounded-lg bg-[var(--primary-color)] py-4 shadow-[0_4px_8px_0_rgba(9,30,66,0.2)]">
                    <li
                      className="flex items-center gap-3 p-3 font-semibold hover:bg-gray-200"
                      onClick={() => setShowSettings(!showSettings)}
                    >
                      <IoIosSettings />
                      Settings
                    </li>
                    <li
                      className="flex items-center gap-3 p-3 font-semibold hover:bg-gray-200"
                      onClick={() => setShowRewards(!showRewards)}
                    >
                      <PiGift />
                      Rewards
                    </li>
                    <li className="flex items-center gap-3 p-3 font-semibold hover:bg-gray-200">
                      <IoMdLock />
                      Lock Account
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <button
              className="btn hover:text-black"
              onClick={() => setShowWallet(!showWallet)}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
      {showSettings && (
        <SettingModal onClose={() => setShowSettings(!showSettings)} />
      )}
      {showRewards && (
        <RewardsModal onClose={() => setShowRewards(!showRewards)} />
      )}
      {showWallet && (
        <ConnectWalletModal onClose={() => setShowWallet(!showWallet)} />
      )}
    </>
  );
};

export default Navbar;
