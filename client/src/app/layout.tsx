import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/store/theme-provider";

export const metadata: Metadata = {
  title: "OmicsML",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-row`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
