import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/themes/theme-provider";

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
      <body className="bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300 ease-in-out">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
