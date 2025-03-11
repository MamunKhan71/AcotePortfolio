import Footer from "@/components/common/footer/footer";
import InfoBar from "@/components/common/Info-bar";
import Navbar from "@/components/common/navbar";
import type { Metadata } from "next";
import { Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollToTopIcon from "@/components/common/ScrollToTopIcon";

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})
const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

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
        className={`antialiased ${roboto.variable} ${grotesk.variable} font-roboto relative`}
      >
        <InfoBar />
        <Navbar />
        <div className="min-h-screen h-full w-full">
          {children}
          <div className="absolute bottom-28 right-12 z-50">
            <ScrollToTopIcon />
          </div>
        </div>
        <Footer />

      </body>
    </html>
  );
}
