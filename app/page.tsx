"use client"

import Header from "@/components/header/Header";
import Section1 from "@/components/pages/homepage/Hero";
import Section2 from "@/components/pages/homepage/SubHero";
import Section3 from "@/components/pages/homepage/FeaturedIn";
import Section4 from "@/components/pages/homepage/Roadmap";
import Section5 from "@/components/pages/homepage/Referral";
import Section6 from "@/components/pages/homepage/Tokenomics";
import Section7 from "@/components/pages/homepage/BuyMe";
import Section8 from "@/components/pages/homepage/BuyMe2";
import Section9 from "@/components/pages/homepage/RewardsCalculator";
import Section10 from "@/components/footer/Footer";
import { useState } from "react";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) {

  
  const [referralUSDTAmount, setReferralUSDTAmount] = useState<number>(0); 
  const [referralSolAmount, setReferralSolAmount] = useState<number>(0); 


  return (
    <div className="overflow-hidden ">
      <Header />
      <Section1  publicKey = {searchParams.ref} setReferralUSDTAmount={setReferralUSDTAmount} setReferralSolAmount={setReferralSolAmount} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 referralUSDTAmount={referralUSDTAmount} referralSolAmount={referralSolAmount}/>
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </div>
  );
}
