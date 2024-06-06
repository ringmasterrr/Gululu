"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { disconnecting } = useWallet();

  const handleDisconnect = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    if (disconnecting) {
      handleDisconnect();
    }
  }, [disconnecting]);

  const router = useRouter();

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
            <button disabled
              onClick={() => {
                router.push("/");
              }}
              className="font-omnes"
            >
              Home
            </button>
            <button disabled
              onClick={() => {
                router.push("/About");
              }}
              className="hover:font-bold"
            >
              About
            </button>
            <button disabled
              onClick={() => {
                router.push("/Whitepaper");
              }}
              className="hover:font-bold"
            >
              Whitepaper
            </button>
            <button disabled
              onClick={() => {
                router.push("/Audit");
              }}
              className="hover:font-bold"
            >
              Audit
            </button>
          </div>

          <WalletMultiButton style={{}} />

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
          <div className="flex flex-col items-start gap-4 p-4 text-lg">
            <button disabled
              onClick={() => {
                router.push("/");
              }}
              className="font-omnes pl-2"
            >
              Home
            </button>

            <button disabled
              onClick={() => {
                router.push("/About");
              }}
              className="hover:font-bold pl-2"
            >
              About
            </button>

            <button disabled
              onClick={() => {
                router.push("/Whitepaper");
              }}
              className="hover:font-bold pl-2"
            >
              Whitepaper
            </button>

            <button disabled
              onClick={() => {
                router.push("/Audit");
              }}
              className="hover:font-bold pl-2"
            >
              Audit
            </button>

            <WalletMultiButton style={{}} />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
