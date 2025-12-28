import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/Components/Header";
import Footer from "@/components/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IEEE Computer Society UCP Chapter | Empowering Tech Leaders",
  description: "Official website of the IEEE Computer Society UCP Student Chapter. We empower students at the University of Central Punjab through innovation, technical workshops, and global tech community networking.",
  keywords: ["IEEE", "IEEE Computer Society", "UCP", "University of Central Punjab", "IEEE CS UCP", "Student Chapter", "Tech Community Lahore", "Computer Science Workshops", "Software Engineering Pakistan"],
  authors: [{ name: "Hassan Jamshaid" }],
  openGraph: {
    title: "IEEE Computer Society UCP Chapter",
    description: "Join the leading technical community at UCP. Innovation, Leadership, and Technical Excellence.",
    url: "https://ieeecsucp.org", // Replace with actual URL if known
    siteName: "IEEE CS UCP",
    images: [
      {
        url: "/Logo2.png",
        width: 800,
        height: 800,
        alt: "IEEE CS UCP Logo",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
