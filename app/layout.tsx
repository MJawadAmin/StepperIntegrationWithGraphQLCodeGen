import ApolloWrapper from "@/utils/ApolloProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// Configure Poppins font
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Neeca Sample",
  description: "Neeca Sample",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <ApolloWrapper>{children}</ApolloWrapper>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
