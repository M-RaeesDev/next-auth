import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import Loader from "@/components/Loader";

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
  title: "Next Auth",
  description: "Next Auth Using Clerk And Mongodb",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

          {/* Clerk Loading State */}
          <ClerkLoading>
           <Loader/>
          </ClerkLoading>

          {/* Clerk Loaded State */}
          <ClerkLoaded>
            <Header />
            {children}
          </ClerkLoaded>

        </body>
      </html>
    </ClerkProvider>
  );
}
