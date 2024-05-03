import "./globals.css";
import Header from "@/components/header/Header"
import Section1 from "@/components/homepage/Hero"
import Section2 from "@/components/homepage/SubHero"
import Section3 from "@/components/homepage/FeaturedIn"
import Section4 from "@/components/homepage/Roadmap"
import Section5 from "@/components/homepage/Referral";
import Section6 from "@/components/homepage/Tokenomics";
import Section7 from "@/components/homepage/BuyMe"
import Section8 from "@/components/homepage/BuyMe2"
import Section9 from "@/components/homepage/RewardsCalculator";
import Section10 from "@/components/footer/Footer";


export default function Home() {
  return (
    <div className="overflow-hidden ">
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
    <Section10/>
    </div>
  );
}
