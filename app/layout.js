import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HomeNavbar } from "./_components/HomeNavbar.jsx";
import Footer from "./_components/Footer.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TeamNextNexus",
  description: "TeamNextNexus",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="black"
      className=" scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-0 min-h-full text-justify scroll-smooth`}
        suppressHydrationWarning
      >
        <HomeNavbar />
        <div className="p-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
