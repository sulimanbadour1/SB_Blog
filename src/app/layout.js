import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });
export const dynamic = "force-dynamic";
export const metadata = {
  title: "Suliman Badour Blog",
  description: "This is my blog where I write about my journey.",
  headline: "Suliman Badour Blog",
  openGraph: {
    url: "https://sb-blog-silk.vercel.app/",
    site_name: "Suliman Badour Blog",
    images: [
      {
        url: "https://sb-blog-silk.vercel.app/logos/logo-white.svg",
        width: 1200,
        height: 630,
        alt: "Suliman Badour Blog",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <Toaster />
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
