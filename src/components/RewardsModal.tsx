import { RxCross2 } from "react-icons/rx";

const RewardsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="absolute left-0 right-0 top-0 z-50 flex h-screen w-full justify-center py-4 backdrop-blur-md">
      <div className="relative flex h-full flex-col justify-between rounded-3xl bg-white px-16 py-16 lg:w-[clamp(400px,50%,500px)]">
        <button className="absolute right-5 top-5" onClick={onClose}>
          <RxCross2 size={32} color="gray" />
        </button>
        <div>
          <h1 className="my-3 text-center text-2xl font-extrabold">Rewards</h1>
          <div className="flex w-full justify-start gap-10 py-6">
            <button className="nav_liner nav_liner_hover">Badges</button>
            <button className="nav_liner nav_liner_hover">NFTs</button>
          </div>
        </div>
        <div className=" w-full ">
          <button className="btn w-full"> OK</button>
        </div>
      </div>
    </div>
  );
};

export default RewardsModal;
