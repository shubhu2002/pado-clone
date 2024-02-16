export type Wallets = {
  title: string;
  image: string;
  active:boolean;
};

export const wallets: Wallets[] = [
  {
    title: "MetaMask",
    image: "/metamask.svg",
    active:true,
  },
  {
    title: "WalletConnect",
    image: "/walletConnect.svg",
    active:false
  },
  {
    title: "CoinBaseWallet",
    image: "/coinbase.svg",
    active:false,
  },
  {
    title: "TokenPocket",
    image: "/tokenPocket.svg",
    active:false,
  },
];
