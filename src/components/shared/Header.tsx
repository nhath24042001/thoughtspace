"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navItems = [
    { label: "Blog", href: "/" },
    { label: "About", href: "/about" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold text-blue-600"
        >
          <Image src='/thoughts.png' width={40} height={40} alt="logo" />
          Thought Space
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-blue-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle Theme"
              className="cursor-pointer"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 animate-spin-slow text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 animate-pulse text-blue-700" />
              )}
            </Button>
          )}

          <Button variant='ghost' className="text-sm cursor-pointer" asChild>
            <Link href='/auth/login'>Login</Link>
          </Button>

          <Button className="text-sm cursor-pointer" asChild>
            <Link href="/auth/register">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
