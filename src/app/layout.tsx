import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { Header } from "@/components/shared/Header";

export const metadata: Metadata = {
  title: "Thought Space",
  description: "A place to think, write, and reflect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="text-black dark:text-white transition-colors duration-300 ease-in-out">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
