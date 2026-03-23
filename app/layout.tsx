import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Components/Header";
import Footer from "@/components/Components/Footer";
import { Montserrat } from 'next/font/google';


/* 🎓 Classy University Fonts */
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Add weights you need
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "UCP Welfare Society ",
  description:
    "Official website of UCP Welfare Society. Our goal is to nurture social leaders and emphasize the importance of community service.",
  keywords: [
    "UCP Welfare Society",
    "Community Service",
    "Social Leadership",
    "University of Central Punjab",
    "UCP Welfare Society",
  ],
  authors: [{ name: "Talha Badar" }],
  openGraph: {
    title: "UCP Welfare Society",
    description:
      "Join the leading technical community at UCP. Innovation, Leadership, and Technical Excellence.",
    url: "https://ieeecsucp.org",
    siteName: "UCP Welfare Society",
    images: [
      {
        url: "/Logo2.png",
        width: 800,
        height: 800,
        alt: "UWS Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEEE Computer Society UCP Chapter",
    description: "Empowering Future Tech Leaders Through Innovation & Community.",
    images: ["/Logo2.png"],
  },
  icons: {
    icon: "/Logo2.png",
    apple: "/Logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="antialiased font-sans">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
