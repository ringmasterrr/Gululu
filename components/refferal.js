"use client"
import { useState } from 'react';

const ReferralBox = ({ referralLink }) => {
    const [copied, setCopied] = useState(false);

    const copyReferralLink = () => {
        const copyText = document.querySelector('.referral-link');
        navigator.clipboard.writeText(copyText.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className="referral-box bg-white border mt-4 p-2 border-slate-300 rounded-md w-[25rem] ">
            <a href={referralLink} className="referral-link text-center block mb-2 py-1 text-purple-800">{referralLink}</a>
            <button onClick={copyReferralLink} className="copy-button w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none">
                {copied ? 'Copied!' : 'Copy Link'}
            </button>
        </div>
    );
};

export default ReferralBox;
