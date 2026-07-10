"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const visibleNav = siteConfig.nav.filter((item) => !("hidden" in item && item.hidden));

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="flex h-14 min-h-14 w-full items-center gap-3 px-4 sm:h-16 sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-brand-foreground sm:h-9 sm:w-9">
            <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <span className="whitespace-nowrap text-sm font-semibold tracking-tight sm:text-base">
            Learn <span className="text-muted-foreground">Navbc</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1" aria-label="Main navigation">
          {visibleNav.map((item) => {
            if (!("href" in item)) {
              return null;
            }

            const isExternal = item.href.startsWith("http");
            const className = cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand",
              !isExternal && pathname.startsWith(item.href)
                ? "text-foreground"
                : "text-muted-foreground",
            );

            if (isExternal) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {item.title}
                </a>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={className}>
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          {visibleNav.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>

      {mobileOpen && visibleNav.length > 1 && (
        <div className="border-t border-border px-4 py-3 sm:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {visibleNav.map((item) => {
              if (!("href" in item)) {
                return null;
              }

              const isExternal = item.href.startsWith("http");
              const className = "rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent";

              if (isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className={className}
                  >
                    {item.title}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={className}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
