import { RxCross2 } from "react-icons/rx";
import { CiUser } from "react-icons/ci";

const SettingModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="absolute left-0 right-0 top-0 z-50 flex h-screen w-full justify-center py-4 backdrop-blur-md">
      <div className=" relative h-full rounded-3xl bg-white px-16 py-16 lg:w-[clamp(400px,50%,500px)]">
        <button className="absolute right-5 top-5" onClick={onClose}>
          <RxCross2 size={32} color="gray" />
        </button>
        <div className="mb-10 flex items-center gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--highlight-color)]">
            <CiUser size={36} />
          </div>
          <div className="flex flex-col text-sm">
            <span className="font-extrabold">Hii</span>
            <span>PADO Account</span>
            <span>wallet id</span>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-400"></div>
        <div className="my-8 flex flex-col items-start gap-4 ">
          <span className="w-full rounded-lg px-3 py-2 hover:bg-gray-200">
            Change Password
          </span>
          <span className="w-full rounded-lg px-3 py-2 hover:bg-gray-200">
            Manage Data{" "}
          </span>
        </div>
        <div className="h-[1px] w-full bg-gray-400"></div>

        <div className="my-8  flex flex-col items-start gap-4 ">
          <a href="/" className="w-full rounded-lg px-3 py-2 hover:bg-gray-200">
            Support
          </a>
          <a href="/" className="w-full rounded-lg px-3 py-2 hover:bg-gray-200">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;
