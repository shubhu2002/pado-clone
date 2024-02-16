import { wallets } from "~/data/wallets";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const ConnectWalletModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="absolute left-0 right-0 top-0 z-50 flex h-screen w-full justify-center py-4 backdrop-blur-md">
      <div className=" relative h-full rounded-3xl bg-white px-6 py-16">
        <button className="absolute right-5 top-5" onClick={onClose}>
          <RxCross2 size={32} color="gray" />
        </button>
        <h1 className="my-3 text-center text-2xl font-extrabold">
          Connect Your Wallet
        </h1>
        <p className=" my-3 text-center text-sm font-medium">
          Your wallet address will be set as the account.
        </p>

        <div className="mt-12 grid grid-flow-col grid-cols-2 grid-rows-2 gap-6">
          {wallets.map((items) => (
            <button
              className="flex items-center gap-2 rounded-xl border bg-gray-200 px-4 py-4 hover:bg-white"
              disabled={!items.active}
            >
              <Image src={items.image} alt="img" width={40} height={40} />
              <span className="overflow-hidden text-ellipsis">
                {items.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletModal;
