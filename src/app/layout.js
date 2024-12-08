import localFont from "next/font/local";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
import ThemeComp from "./components/ThemeComp";
import { ThemeModeScript } from "flowbite-react";

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

export const metadata = {
  title: "Next Blog",
  description: "Blog App using Next.js and Clerk. AUTHOR - KING",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <ThemeModeScript />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider>
            <ThemeComp>
              <Header />
              {children}
            </ThemeComp>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
