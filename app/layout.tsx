import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Memo Some",
  description: "Wildlife & Environmental Policy Analyst Blog",

    openGraph: {
    title: "Memo Some",
    description: "Wildlife & Environmental Policy Analyst Blog",
    url: "https://www.memosome.com",
    siteName: "Memo Some",
    images: [
      {
        url: "/sma.jpg",
        width: 1200,
        height: 630,
        alt: "Memo Some – Wildlife & Environmental Policy Analyst Blog",
      },
    ],
    type: "website",
  },

  twitter: {
  card: "summary_large_image",
  title: "Memo Some",
  description: "Wildlife & Environmental Policy Analyst Blog",
  images: ["https://www.memosome.com/sma.jpg"],
}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
