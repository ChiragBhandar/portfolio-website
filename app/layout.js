import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://chiragbhandar.vercel.app'),
  title: "Chirag Bhandar - Portfolio",
  description: "Portfolio website of Chirag Bhandar, a software developer specializing in frontend web development and design.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Chirag Bhandar - Portfolio",
    description: "Portfolio website of Chirag Bhandar, a software developer specializing in frontend web development and design.",
    url: "https://chiragbhandar.vercel.app",
    siteName: "Chirag Bhandar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chirag Bhandar - Portfolio",
    description: "Portfolio website of Chirag Bhandar, a software developer specializing in frontend web development and design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {/* Use padding on the main content so children (including absolutely positioned elements) are
            offset from the fixed sidebar. Also set a baseline z-index so the fixed navbar stays on top.
            Use the CSS variable --sidebar-width so the value stays in sync with the sidebar. */}
        <main style={{ paddingLeft: 'var(--sidebar-width)' }} className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
