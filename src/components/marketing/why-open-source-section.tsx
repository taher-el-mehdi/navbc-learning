import Link from "next/link";
import { Github, Heart, GitPullRequest } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const reasons = [
  {
    icon: Heart,
    title: "Free Forever",
    description:
      "No paywalls, no subscriptions. Quality BC education should be accessible to every developer and consultant worldwide.",
  },
  {
    icon: Github,
    title: "Community Driven",
    description:
      "Content is written, reviewed, and improved by BC professionals. Every lesson can be contributed on GitHub.",
  },
  {
    icon: GitPullRequest,
    title: "Always Improving",
    description:
      "Pull requests welcome. Fix a typo, add a lesson, or share a real-world pattern — the platform grows with the community.",
  },
];

export function WhyOpenSourceSection() {
  return (
    <Section>
      <SectionHeader
        label="Open Source"
        title="Why Open Source?"
        description="NAVBC Learning is MIT-licensed and built in the open. Learn from the community, contribute back, and help shape the future of BC education."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:border-brand/30"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
              <reason.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {reason.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button variant="brand" size="lg" asChild>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            Star on GitHub
          </a>
        </Button>
        <Button variant="outline" className="glass" size="lg" asChild>
          <Link href="/contribute">Contribute a Lesson</Link>
        </Button>
      </div>
    </Section>
  );
}
