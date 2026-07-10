"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Github, Menu, MessageCircle, Star, X, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const visibleNav = siteConfig.nav.filter((item) => !("hidden" in item && item.hidden));

const communityIcons = {
  "Join Discord": MessageCircle,
  "Star on GitHub": Star,
} as const;

function CommunityMenuItems({ onSelect }: { onSelect?: () => void }) {
  return siteConfig.communityMenu.map((item) => {
    const Icon = communityIcons[item.title as keyof typeof communityIcons] ?? Github;

    return (
      <DropdownMenuItem key={item.href} asChild>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onSelect}
          className="flex cursor-pointer flex-col items-start gap-0.5 px-3 py-2.5"
        >
          <span className="flex items-center gap-2 font-medium">
            <Icon className="h-4 w-4 text-brand" />
            {item.title}
          </span>
          <span className="pl-6 text-xs text-muted-foreground">{item.description}</span>
        </a>
      </DropdownMenuItem>
    );
  });
}

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
            if ("type" in item && item.type === "community") {
              return (
                <DropdownMenu key={item.title}>
                  <DropdownMenuTrigger
                    className={cn(
                      "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      pathname.startsWith("/community")
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.title}
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-64">
                    <CommunityMenuItems />
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }

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
              if ("type" in item && item.type === "community") {
                return (
                  <div key={item.title} className="flex flex-col gap-1">
                    <p className="px-3 py-2 text-sm font-medium text-foreground">{item.title}</p>
                    {siteConfig.communityMenu.map((link) => {
                      const Icon =
                        communityIcons[link.title as keyof typeof communityIcons] ?? Github;

                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-start gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-accent"
                        >
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          <span>
                            <span className="block font-medium">{link.title}</span>
                            <span className="block text-xs text-muted-foreground">
                              {link.description}
                            </span>
                          </span>
                        </a>
                      );
                    })}
                  </div>
                );
              }

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
