"use client";

import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

const ReferralBox = () => {
  const [copied, setCopied] = useState(false);
  const [referralLink, setReferralLink] = useState("dsfadsfasdfads");

  const shareData = {
    title: "Gululu",
    url:referralLink ,
  };

  useEffect(() => {
    setReferralLink(`${window.location.origin}?ref=${referralLink}`);
  }, []);

  const copyReferralLink = () => {
    copy(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  const shareReferralLink = () => {  
    navigator.share(shareData) 
  };

  return (
    <div className=" bg-white border mt-4 p-2 border-slate-300 rounded-md lg:w-[25rem] w-[100%] ">
      <div className="text-center block mb-2 py-1 text-purple-800">
        <p>{referralLink}</p>

        {/* Referral address for solana */}
            console.log({referralLink})
        {/* Referral address for solana */}

      </div>
      <div className="flex gap-1">
        <button
          onClick={copyReferralLink}
          className=" w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
        <button
          onClick={shareReferralLink}
          className=" w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none"
        >
          Share Link
        </button>
      </div>
    </div>
  );
};

export default ReferralBox;
