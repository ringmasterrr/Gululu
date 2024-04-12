import Image from "next/image";
import "./globals.css";
import Header from "@/components/header/Header"
import Section1 from "@/components/pages/section1"
import Section2 from "@/components/pages/section2"
import Section3 from "@/components/pages/section3"
import Section4 from "@/components/pages/section4"
import Section5 from "@/components/pages/section5"


export default function Home() {
  return (
    <div>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    </div>
  );
}
