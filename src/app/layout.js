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
  description:
    "⭐ Suliman's Personal Blog ⭐ This is my digital sanctuary, a canvas for thoughts, ideas.",
  headline: "Suliman Badour Blog",
  url: "https://sb-blog-silk.vercel.app/",
  image:
    "https://sb-blog-silk.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo1.b8a63552.png&w=128&q=75",
  site_name: "Suliman Badour Blog",
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
