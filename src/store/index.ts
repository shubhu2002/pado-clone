import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const WALLET_NAME_KEY = "WALLET_NAME_KEY";

function generateGuestID() {
  return "guest_" + Math.floor(Math.random() * 9999) + 1;
}

interface AppStore {
  showConnectModal: boolean;
  toggleConnectModal: (open: boolean) => void;

  showSettingModal: boolean;
  toggleSettingModal: (open: boolean) => void;

  showRewardModal: boolean;
  toggleRewardModal: (open: boolean) => void;

  showDataSourcesModal: boolean;
  toggleDataSourcesModal: (open: boolean) => void;

  showProofsModal: boolean;
  toggleProofsModal: (open: boolean) => void;

  connectedWallet: {
    address: string;
  };
  setConnectedWallet: (props: { address: string }) => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      showConnectModal: false,
      toggleConnectModal(open) {
        set({
          showConnectModal: open,
        });
      },

      showSettingModal: false,
      toggleSettingModal(open) {
        set({
          showSettingModal: open,
        });
      },

      showRewardModal: false,
      toggleRewardModal(open) {
        set({
          showRewardModal: open,
        });
      },

      showDataSourcesModal: false,
      toggleDataSourcesModal(open) {
        set({
          showDataSourcesModal: open,
        });
      },
      showProofsModal: false,
      toggleProofsModal(open) {
        set({
          showProofsModal: open,
        });
      },
      connectedWallet: {
        address: generateGuestID(),
      },
      setConnectedWallet(props) {
        set({
          connectedWallet: {
            address: props.address,
          },
        });
      },
    }),

    {
      name: "app-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) =>
              !["messages", "connectedWallet", "showConnectModal"].includes(
                key,
              ),
          ),
        ),
    },
  ),
);
