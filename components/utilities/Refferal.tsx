"use client";

import { useState, useEffect } from "react";
import copy from 'copy-to-clipboard';
import { useWallet } from "@solana/wallet-adapter-react";

const ReferralBox = () => {
  const wallet = useWallet();
  const [copied, setCopied] = useState(false);
  const [referralLink, setReferralLink] = useState('');

  useEffect(() => {
    if (wallet && wallet.publicKey && typeof window !== 'undefined') {
      setReferralLink(`${window.location.origin}?ref=${wallet.publicKey}`);
    }
  }, [wallet]);

  const shareData = {
    url: referralLink,
  };

  const copyReferralLink = () => {
    copy(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  const shareReferralLink = () => {
    if (navigator.share) {
      navigator.share(shareData)
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Share not supported on this browser');
    }
  };
  if(!wallet.publicKey) return <div className="bg-white border text-center mt-4 p-4 font-semibold border-slate-300 rounded-md lg:w-4/5 w-full">
    Please Connect wallet to generate Referral Link
  </div>
  return (
    <div className="bg-white border mt-4 p-2 border-slate-300 rounded-md lg:w-4/5 w-full">
      <div className="text-center block mb-2 py-1 text-purple-800 w-full">
        <p className=" break-all">{referralLink}</p>
      </div>
      <div className="flex md:flex-row flex-col gap-1">
        <button
          onClick={copyReferralLink}
          className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
        <button
          onClick={shareReferralLink}
          className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none"
        >
          Share Link
        </button>
      </div>
    </div>
  );
};

export default ReferralBox;
