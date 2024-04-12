import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center md:px-44 p-4 pt-10 justify-between bg-[#F7E8D5]">
      <div className="text-3xl font-black font-omnesblack">MEMECOIN</div>
      <div className="flex items-center gap-10">
        <div className="flex justify-center font-omnesreg text-lg font-semibold text-left items-center gap-10">
          <Link href="/ " className="font-omnes">
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
        <button className="  font-bold z-20 px-9 py-[8px] font-omnes bg-black text-white rounded-full inline-block  ">
          BUY $CATMATE
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
            src="/twitter-icon.svg"
            alt="Instagram Icon"
            width={31}
            height={31}
            className="w-[34px] h-[34px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
