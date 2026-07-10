import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Briefcase } from "lucide-react";
import type { LearningPath, Track } from "@/types/content";
import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { difficultyLabels } from "@/lib/seo";
import {
  trackLabels,
  trackCardAccent,
  trackGradients,
  trackIconBg,
} from "@/lib/track-styles";
import { cn } from "@/lib/utils";

interface LearningPathsSectionProps {
  paths: LearningPath[];
}

const trackIcons = {
  technical: Code2,
  functional: Briefcase,
} as const;

export function LearningPathsSection({ paths }: LearningPathsSectionProps) {
  return (
    <Section variant="muted">
      <SectionHeader
        label="Paths"
        title="Choose Your Learning Path"
        description="Two focused tracks designed for your role — master AL development or become a BC functional consultant."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {paths.map((path) => {
          const track = (path.track ?? path.slug) as Track;
          const TrackIcon =
            track === "functional" ? trackIcons.functional : trackIcons.technical;

          return (
            <Link
              key={path.id}
              href={`/learning-paths/${path.slug}`}
              className={cn(
                "group glass-card relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-brand/5",
                track === "functional"
                  ? trackCardAccent.functional
                  : trackCardAccent.technical,
              )}
            >
              <div className="relative aspect-[16/7] overflow-hidden">
                {path.thumbnail ? (
                  <Image
                    src={path.thumbnail}
                    alt={path.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div
                    className={cn(
                      "h-full w-full bg-gradient-to-br",
                      track === "functional"
                        ? "from-emerald-950 to-slate-900"
                        : "from-sky-950 to-slate-900",
                    )}
                  />
                )}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t",
                    track === "functional"
                      ? trackGradients.functional
                      : trackGradients.technical,
                  )}
                />
                <div className="absolute left-5 top-5 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur-sm",
                      trackIconBg[track],
                    )}
                  >
                    <TrackIcon className="h-5 w-5" />
                  </div>
                  {track === "technical" || track === "functional" ? (
                    <Badge variant={track === "technical" ? "technical" : "functional"}>
                      {trackLabels[track]}
                    </Badge>
                  ) : null}
                </div>
                <Badge
                  variant="glass"
                  className="absolute right-4 top-4"
                >
                  {difficultyLabels[path.level]}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-brand">
                  {path.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {path.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={cn(
                      "text-xs font-medium",
                      track === "functional" ? "text-emerald-500" : "text-sky-500",
                    )}
                  >
                    {path.courses?.length ?? 0} courses
                  </span>
                  <span className="flex items-center gap-1 text-sm font-medium text-brand">
                    Start path
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
