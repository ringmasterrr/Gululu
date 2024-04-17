import type { Metadata } from "next";
import "./globals.css";



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
      <body className="font-omnesreg">{children}</body>
    </html>
  );
}
