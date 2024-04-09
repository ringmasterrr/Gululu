import Image from "next/image";
import "./globals.css";
import Header from "@/components/header/Header"
import Section1 from "@/components/pages/section1"

export default function Home() {
  return (
    <div>
    <Header/>
    <Section1/>
    </div>
  );
}
