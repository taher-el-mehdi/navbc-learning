"use client";

import { Pencil } from "lucide-react";
import { getEditFileUrl } from "@/lib/github";
import { useContributeMeta } from "@/hooks/use-contribute-meta";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface EditPageButtonProps {
  className?: string;
}

export function EditPageButton({ className }: EditPageButtonProps) {
  const { meta } = useContributeMeta();
  const editUrl = meta.contentPath ? getEditFileUrl(meta.contentPath) : undefined;

  if (!editUrl) return null;

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "h-9 w-9 shrink-0 rounded-full border-border/80 bg-background/80 shadow-sm backdrop-blur-sm transition-colors hover:border-brand/40 hover:bg-accent hover:text-brand",
              className,
            )}
            asChild
          >
            <a
              href={editUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Edit this page on GitHub"
            >
              <Pencil className="h-4 w-4" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Edit this page</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
