import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Tales - Your Journey Begins Here",
  description:
    "Experience the untamed beauty of Indian destinations through our curated adventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
