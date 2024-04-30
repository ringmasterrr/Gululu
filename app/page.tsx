import "./globals.css";
import Header from "@/components/header/Header"
import Section1 from "@/components/pages/Hero"
import Section2 from "@/components/pages/SubHero"
import Section3 from "@/components/pages/FeaturedIn"
import Section4 from "@/components/pages/Roadmap"
import Section5 from "@/components/pages/Referral";
import Section6 from "@/components/pages/Tokenomics";
import Section7 from "@/components/pages/BuyMe"
import Section8 from "@/components/pages/BuyMe2"
import Section9 from "@/components/pages/RewardsCalculator";
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
