import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";
import { LanguageProvider } from "@/components/layout/LanguageProvider";
import ServiceWorkerRegister from "@/components/layout/ServiceWorkerRegister";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Pulsecore — Automate the busywork. Ship the outcomes.",
  description:
    "Pulsecore is the operations platform that turns scattered tools into one live pipeline — automations, analytics, and alerts in a single control room.",
  keywords: [
    "workflow automation",
    "SaaS platform",
    "operations dashboard",
    "Pulsecore",
  ],
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Pulsecore — Automate the busywork. Ship the outcomes.",
    description:
      "One control room for every automation, metric, and alert your team ships.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#6c5ce7",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <ServiceWorkerRegister />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
