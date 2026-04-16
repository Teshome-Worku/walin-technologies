import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import CallButton from "@/components/CallButton";
import "./globals.css";

const themeInitScript = `
(function(){
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://walintech.com"),
  title: {
    default: "Walin Technologies",
    template: "%s — Walin Technologies",
  },
  description:
    "We help small businesses grow by building custom websites, mobile apps, and digital systems that save time and attract customers.",
  openGraph: {
    type: "website",
    siteName: "Walin Technologies",
    title: "Walin Technologies — Build • Grow • Digitize",
    description:
      "We help businesses move from manual work to modern digital solutions — websites, systems, and mobile apps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walin Technologies — Build • Grow • Digitize",
    description:
      "We help businesses move from manual work to modern digital solutions — websites, systems, and mobile apps.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geistSans.variable}>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
        <CallButton />
      </body>
    </html>
  );
}
