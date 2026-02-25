import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kevin's Life Blog",
    template: "%s | Kevin's Life Blog",
  },
  description:
    "여성, 육아, 일과 삶의 균형에 대한 따뜻하고 실용적인 이야기를 공유합니다.",
  metadataBase: new URL("https://life.antkdi.com"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://life.antkdi.com",
    siteName: "Kevin's Life Blog",
    title: "Kevin's Life Blog",
    description:
      "여성, 육아, 일과 삶의 균형에 대한 따뜻하고 실용적인 이야기를 공유합니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin's Life Blog",
    description:
      "여성, 육아, 일과 삶의 균형에 대한 따뜻하고 실용적인 이야기를 공유합니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
