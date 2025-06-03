import './globals.css';
import { DefaultSeo } from 'next-seo';

import { ThemeProvider } from '@/components/themes/theme-provider';
import { Header } from '@/components/shared/Header';
import defaultSEO from '../../next-seo.config';

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
          <DefaultSeo {...defaultSEO} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
