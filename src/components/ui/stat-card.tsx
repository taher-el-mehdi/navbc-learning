import * as React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

function StatCard({ value, label, icon, className, ...props }: StatCardProps) {
  return (
    <div
      className={cn(
        "glass-card group rounded-2xl p-6 text-center transition-all duration-300 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5",
        className,
      )}
      {...props}
    >
      {icon && (
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
          {icon}
        </div>
      )}
      <div className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export { StatCard };
