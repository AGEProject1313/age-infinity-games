import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://age-infinity-games.vercel.app"),
  
  title: "EVA Awakening",

  description:
    "A cinematic VR psychological sci-fi experience about memory, consciousness and artificial life.",

  keywords: [
    "EVA Awakening",
    "VR Game",
    "Meta Quest",
    "Steam VR",
    "Psychological Sci-Fi",
    "VR Psychological Game",
    "Sci-Fi Experience",
    "AGE Infinity Games",
  ],

  authors: [{ name: "AGE Infinity Games" }],

  creator: "AGE Infinity Games",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "EVA Awakening",

    description:
      "A cinematic VR psychological sci-fi experience about memory, consciousness and artificial life.",

    url: "https://www.ageinfinitygames.com",

    siteName: "EVA Awakening",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "EVA Awakening",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "EVA Awakening",

    description:
      "A cinematic VR psychological sci-fi experience about memory, consciousness and artificial life.",

    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PRECONNECTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* THEME COLOR */}
        <meta name="theme-color" content="#000000" />

        {/* MOBILE */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        {/* APPLE */}
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* FORMAT */}
        <meta name="format-detection" content="telephone=no" />
      </head>

      <body>
        {/* GOOGLE TAG MANAGER PLACEHOLDER */}
        <Script id="metricool-tracker" strategy="afterInteractive">
  {`
    function loadScript(a){
      var b=document.getElementsByTagName("head")[0],
      c=document.createElement("script");
      c.type="text/javascript";
      c.src="https://tracker.metricool.com/resources/be.js";
      c.onreadystatechange=a;
      c.onload=a;
      b.appendChild(c);
    }

    loadScript(function(){
      beTracker.t({
        hash:"c480989610d8c59a99fb941f62e12869"
      });
    });
  `}
</Script>

        {children}
      </body>
    </html>
  );
}