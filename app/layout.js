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
  title: "Chirag Bhandar - Portfolio",
  description: "Portfolio website of Chirag Bhandar, a software developer specializing in frontend web development and design.",
  icons: {
    icon: "/favicon.png",
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
