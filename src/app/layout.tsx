import { Poppins } from "next/font/google";
import "@/styles/globals.css";

// types
import type { Children } from "@/types/globals.types";
import type { Metadata } from "next";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor Challenges",
  description: "Resolved Frontend Mentor challenges",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
