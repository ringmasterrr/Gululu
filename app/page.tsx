import Image from "next/image";
import "./globals.css";
import Header from "@/components/header/Header"
import Section1 from "@/components/pages/section1"
import Section2 from "@/components/pages/section2"

export default function Home() {
  return (
    <div>
    <Header/>
    <Section1/>
    <Section2/>
    </div>
  );
}
