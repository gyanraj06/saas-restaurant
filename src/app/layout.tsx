import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

// Matches the live site's "Satoshi" body/nav font exactly (free for commercial use via Fontshare,
// self-hosted here from src/fonts).
const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "../fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

// Matches the live site's "TT Ramillas Variable" display serif (weight 300) exactly.
// NOTE: this is the TypeType trial build (public/fonts/tt_ramillas) — swap for a
// licensed copy before this ships to production.
const ttRamillas = localFont({
  variable: "--font-tt-ramillas",
  src: [
    {
      path: "../fonts/tt-ramillas/TTRamillas-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Maza Bistrot - Indian Restaurant in Ocala & Gainesville, FL",
    template: "%s | Maza Bistrot",
  },
  description:
    "Maza Bistrot serves authentic Indian cuisine in Ocala and Gainesville, Florida — flavors that stay, since 1996.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${ttRamillas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-950 text-biege-100 font-sans">
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
