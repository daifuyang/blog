import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-screen-xl mx-auto my-5">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
