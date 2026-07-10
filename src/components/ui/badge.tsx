import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-secondary text-secondary-foreground",
        brand: "border-brand/25 bg-brand/10 text-brand",
        cyan: "border-[var(--bc-cyan)]/25 bg-[var(--bc-cyan)]/10 text-[var(--bc-cyan)]",
        technical: "border-sky-500/25 bg-sky-500/10 text-sky-500 dark:text-sky-400",
        functional: "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        glass: "glass border-[var(--glass-border)] text-foreground/80",
        outline: "border-border bg-transparent text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
