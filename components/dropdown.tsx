import { Menu } from "@headlessui/react";
import Image from "next/image";
import {  useState } from "react";



export default function SelectCurrency() {
  const [selectedItem, setSelectedItem] = useState({ text: "SOL", image: "/sol.svg" });

  const handleItemClick = ( {text}: any , {image}: any ) => {
    setSelectedItem({ text, image });
  };

  return (
    <Menu as="div" className="relative inline-block text-center">
      <div>
        <Menu.Button className="inline-flex items-center gap-3 justify-center  bg-white px-4 py-4  text-black text-center rounded-full w-40 p-4 placeholder-black text-base font-black font-omnes border border-black">
          {selectedItem.image && (
            <Image src={selectedItem.image} alt="icon" width={100} height={100} className="w-4 h-4" />
          )}
          {selectedItem.text}
          <ChevronDownIcon />
        </Menu.Button>
      </div>

      <Menu.Items className="absolute top-[3.3rem] right-[0.7rem] items-center justify-center text-center mt-2 w-[inherit] origin-top-right divide-y divide-gray-400 rounded-xl border-slate-400 bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
        <div>
          <Menu.Item >
            <div
              className="flex items-center justify-center gap-2 hover:bg-slate-100 rounded-xl cursor-pointer w-32 text-base font-black font-omnes py-2"
              onClick={() => handleItemClick("SOL", "/sol.svg")}
            >
              <Image src="/sol.svg" alt="Solana" width={20} height={20} />
              <h3>SOL</h3>
            </div>
          </Menu.Item>
          <Menu.Item >
            <div
              className="flex items-center justify-center gap-2 hover:bg-slate-100 rounded-xl cursor-pointer w-32 text-base font-black font-omnes py-2"
              onClick={() => handleItemClick("USDT", "/usdt.svg")}
            >
              <Image src="/usdt.svg" alt="USDT" width={20} height={20} />
              <h3>USDT</h3>
            </div>
          </Menu.Item>
        </div>
      </Menu.Items>
      
    </Menu>
  );
}

function ChevronDownIcon() {
  return (
    <div>
      <Image
        src={"/arrowdown.svg"}
        alt="i"
        width={500}
        height={100}
        className="w-3 h-3 "
      />
    </div>
  );
}
