import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Gabriel Lima | Portfolio",
  description: "Welcome to my portfolio website, showcasing my skills, projects, and contact information.",
  openGraph: {
    title: "Gabriel Lima | Portfolio",
    description: "Explore my projects and skills in web development and game design.",
    url: "https://gabriel-aplok.com/portfolio-minimal",
    siteName: "Gabriel Lima Portfolio",
    images: [
      {
        url: "https://gabriel-aplok.com/assets/img/icon.png",
        width: 256,
        height: 256,
        alt: "Gabriel Lima Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  themeColor: "#000000"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
