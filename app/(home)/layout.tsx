import type { Metadata } from "next";
import { Poppins } from "next/font/google";  // Changed from Geist to Poppins
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure Poppins font
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'], // Specify required weights
  subsets: ["latin"],
  variable: '--font-poppins', // CSS variable name
});

export const metadata: Metadata = {
  title: "Neeca Sample",
  description: "Neeca Sample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className={`${poppins.variable} antialiased`}>
        <Navbar/>
        <div className="pt-24"></div>
        {children}
        <Footer/>
      </main>
  );
}