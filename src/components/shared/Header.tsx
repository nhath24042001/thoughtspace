'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = [
    { label: 'Blog', href: '/' },
    { label: 'About', href: '/about' },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-950">
      <div className="container mx-auto border-b-1 flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-xl font-bold tracking-tight lowercase">
          ThoughtSpace
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map(({ label, href }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
              className="cursor-pointer"
            >
              {resolvedTheme === 'dark' ? (
                <Sun className="h-5 w-5 animate-spin-slow text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 animate-pulse text-blue-700" />
              )}
            </Button>
          )}

          <Button variant="ghost" className="text-sm cursor-pointer" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>

          <Button className="text-sm cursor-pointer" asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
