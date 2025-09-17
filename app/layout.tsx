// app/layout.js
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yati Kitchen - Cameron Highlands",
  description:
    "Home-cooked meals, cozy local stays, and real Cameron Highlands vibes. Feel Malaysia, Live Local.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
