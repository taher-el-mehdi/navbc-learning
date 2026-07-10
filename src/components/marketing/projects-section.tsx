import Link from "next/link";
import { ArrowRight, Clock, FolderKanban } from "lucide-react";
import type { Project } from "@/types/content";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { difficultyLabels } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface ProjectsSectionProps {
  projects: Project[];
}

const difficultyBadgeVariant = {
  beginner: "functional" as const,
  intermediate: "technical" as const,
  advanced: "brand" as const,
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) return null;

  return (
    <Section variant="muted">
      <SectionHeader
        label="Hands-on"
        title="Build Real BC Extensions"
        description="Apply what you learn with guided projects — tables, pages, codeunits, and reports that mirror production workflows."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <FolderKanban className="h-5 w-5" />
              </div>
              <Badge variant={difficultyBadgeVariant[project.difficulty]}>
                {difficultyLabels[project.difficulty]}
              </Badge>
            </div>

            <h3 className="mt-4 text-lg font-semibold group-hover:text-brand">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {project.duration} min
              </span>
              <span className="flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
                Start project
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>

            {project.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground",
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" className="glass" asChild>
          <Link href="/projects">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
