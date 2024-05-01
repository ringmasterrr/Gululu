"use client";
import { useState } from "react";

const ReferralBox = ({ referralLink }: { referralLink: string }) => {
  const [copied, setCopied] = useState(false);

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="referral-box bg-white border mt-4 p-2 border-slate-300 rounded-md lg:w-[25rem] w-[100%] ">
      <a
        href={referralLink}
        className="referral-link text-center block mb-2 py-1 text-purple-800"
      >
        {referralLink}
      </a>
      <button
        onClick={copyReferralLink}
        className="copy-button w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none"
      >
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
};

export default ReferralBox;
