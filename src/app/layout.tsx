import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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

export default function RootLayout({ children }: Readonly<Children>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-neutral-100`}>
        <Header />
        <main className="mx-auto max-w-screen-xl">
          <div className="px-4 py-10">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
