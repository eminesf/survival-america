import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const fontMontserratFamily = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Last Blackout",
  description: "by Teddy Daniels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Script
          data-render-head="true"
          src="https://static.filtripixel.io/filtripixel.minify.js?pixelId=c155bb18-a880-43c4-a92a-2e0c083e3664"
        ></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontMontserratFamily.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
