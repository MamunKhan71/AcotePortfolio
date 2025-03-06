import Footer from "@/components/common/footer/footer";
import InfoBar from "@/components/common/Info-bar";
import Navbar from "@/components/common/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})
const inter = Inter({
  variable: '--font-inter',
  weight: ['100', '300', '400', '500', '700', '900']
})
const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  weight: ['300', '400', '500', '600', '700']
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Acote Group",
  description: "for your tomorrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} antialiased ${roboto.variable} ${grotesk.variable} font-roboto`}
      >
        <InfoBar />
        <Navbar />
        <div className="min-h-screen h-full w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
