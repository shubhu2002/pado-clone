import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      
      <div className="h-screen w-full px-2 py-10 lg:px-10">
        <div className="flex w-full items-center justify-start px-6 text-5xl font-extrabold lg:px-12 ">
          PADO
        </div>
        <div className="my-12 flex w-full flex-col items-center justify-between gap-10  lg:m-0 lg:flex-row lg:p-16">
          <Image src={`/bg.svg`} alt="bg" width={600} height={600} />
          <div className="grid gap-6">
            <h1 className="text-6xl font-extrabold lg:text-7xl">Welcome !</h1>
            <Link href="/datas" className="flex items-center gap-4 ">
              <div className="ripple inline-flex items-center gap-4 rounded-full border-2 bg-gradient-to-r from-[#70ffba] to-[#78deff] px-6 py-4 text-2xl font-extrabold hover:bg-white hover:text-black">
                Let's Dive In <FaArrowRightLong />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
