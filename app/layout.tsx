import type { Metadata } from "next";
import "./globals.css";
import AppWalletProvider from "@/components/utilities/AppWalletProvider";



export const metadata: Metadata = {
  title: "GULULU",
  description: "-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-0k6XCqP6x7FhW7DmaLZ7wq8Btkl0HvQTxv77xQM6uzHlRlQeNv9tU1xq0jOhARa2"/>
      </head>
      <body className="font-omnesreg flex items-center justify-center"><AppWalletProvider>{children}</AppWalletProvider></body>
    </html>
  );
}
