import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Footer from "@/components/footer/Footer";
import Loader from "@/components/loader/Loader"; 
import { Suspense } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Tryswitch",
  description: "Developer Farheen Tahir!",
  icons: {
    icon: "/assets/favicon/favicon.ico",
    shortcut: "/assets/favicon/favicon.ico",
    apple: "/assets/favicon/favicon.ico",
  },
};

// function Loader() {
//   return (
//     <div className="loader-container">
//       <div className="loader"></div>
//     </div>
//   );
// }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader />
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Container className="py-2">{children}</Container>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}

