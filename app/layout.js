import { Funnel_Display } from "next/font/google";
import "../styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "NeuroView - Brain Tumor Detection",
  description: "Advanced brain tumor detection using AI-powered MRI analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
