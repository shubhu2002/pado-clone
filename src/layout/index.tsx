import Head from "next/head";
import { useEffect } from "react";
import { Comfortaa } from "next/font/google";
import Navbar from "../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const comfortaa_font = Comfortaa({
  subsets: ["latin"],
});

const Layout: React.FC<LayoutProps> = ({
  children,
}: LayoutProps): React.ReactNode => {
  return (
    <>
      <Head>
        <title>PADO</title>
      </Head>
      <main
        className={`relative min-h-screen bg-[#ddfaf9] text-black ${comfortaa_font.className}`}
      >
        <Navbar />
        {children}
      </main>
    </>
  );
};

export default Layout;
