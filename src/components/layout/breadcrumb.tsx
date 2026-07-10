import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "-mx-1 flex items-center gap-1 overflow-x-auto px-1 text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      <Link
        href="/"
        className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex shrink-0 items-center gap-1">
          <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
          {item.href ? (
            <Link
              href={item.href}
              className="max-w-[10rem] truncate text-muted-foreground transition-colors hover:text-foreground sm:max-w-[14rem] md:max-w-none"
            >
              {item.label}
            </Link>
          ) : (
            <span className="max-w-[12rem] truncate font-medium text-foreground sm:max-w-[16rem] md:max-w-none">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
