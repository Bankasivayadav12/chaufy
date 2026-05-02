import "./globals.css";
import { Poppins, Noto_Sans } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "./components/common/Footer";

// Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-noto",
});

// Local Font (Pondar for logo)
const pondar = localFont({
  src: "../public/fonts/Pondar.otf", // 👈 place file here
  variable: "--font-pondar",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${notoSans.variable} ${pondar.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}