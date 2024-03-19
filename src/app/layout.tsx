import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { Header } from "./_components/header/Header";
import { Footer } from "./_components/footer/Footer";
import { Providers } from "./Provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Adventures of Northcoders",
  description: "Advent of code NCified",
  icons: [{ rel: "icon", url: "/site-icon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>
          <TRPCReactProvider cookies={cookies().toString()}>
            <div id="profile-modal">
              <Header />
              <main className="flex min-h-screen-act flex-col bg-gray-800 text-white">
                {children}
              </main>
              <Footer />
            </div>
          </TRPCReactProvider>
        </Providers>
      </body>
    </html>
  );
}
