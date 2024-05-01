"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#F7E8D5]">
      <div className="flex items-center xl:px-44 p-4 pt-10 justify-between">
        <div className="text-3xl font-black font-omnesblack">GULULU</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="block text-gray-500 hover:text-black focus:text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <div className="flex justify-center font-omnesreg text-lg font-semibold text-left items-center gap-10">
            <Link href="/" className="font-omnes">
              Home
            </Link>
            <Link href="/About" className="hover:font-bold">
              About
            </Link>
            <Link href="/Whitepaper" className="hover:font-bold">
              Whitepaper
            </Link>
            <Link href="/Audit" className="hover:font-bold">
              Audit
            </Link>
          </div>
          <button className="font-bold z-20 px-9 py-[8px] font-omnes bg-black text-white rounded-full inline-block">
            BUY GULULU
          </button>
          <div className="flex space-x-2 pl-2">
            <Image
              src="/twitter-icon.svg"
              alt="Twitter Icon"
              width={31}
              height={31}
              className="w-[34px] h-[34px] cursor-pointer"
            />
            <Image
              src="/telegram.svg"
              alt="Instagram Icon"
              width={31}
              height={31}
              className="w-[34px] h-[34px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-start gap-4 p-4 text-lg ">
            <Link href="/" className="font-omnes pl-2">
              Home
            </Link>
            <Link href="/About" className="hover:font-bold pl-2">
              About
            </Link>
            <Link href="/Whitepaper" className="hover:font-bold pl-2">
              Whitepaper
            </Link>
            <Link href="/Audit" className="hover:font-bold pl-2">
              Audit
            </Link>
            <button className="font-bold px-4 py-2 font-omnes bg-black text-white rounded-full inline-block">
              BUY GULULU
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
