import { Breadcrumb, type BreadcrumbItem } from "@/components/layout/breadcrumb";
import { EditPageButton } from "@/components/layout/edit-page-button";
import { cn } from "@/lib/utils";

interface PageToolbarProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function PageToolbar({ items, className }: PageToolbarProps) {
  return (
    <div className={cn("flex items-start justify-between gap-3", className)}>
      <Breadcrumb items={items} className="min-w-0 flex-1" />
      <EditPageButton />
    </div>
  );
}
