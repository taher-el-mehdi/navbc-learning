import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { MessageCircle, Github, BookOpen, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the NAVBC developer community.",
};

const resources = [
  {
    title: "Microsoft BC Developer Docs",
    url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/",
    description: "Official Microsoft documentation for BC development",
  },
  {
    title: "AL Language Reference",
    url: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/methods-auto/library",
    description: "Complete AL method and property reference",
  },
];

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Community</h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
        Connect with Business Central developers and access curated resources.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <a
          href={siteConfig.links.discord}
          className="flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-brand/40 sm:p-6"
        >
          <MessageCircle className="h-8 w-8 text-brand" />
          <div>
            <p className="font-semibold">Discord</p>
            <p className="text-sm text-muted-foreground">Join our developer chat</p>
          </div>
        </a>
        <a
          href={siteConfig.links.github}
          className="flex items-center gap-4 rounded-xl border border-border p-4 transition-colors hover:border-brand/40 sm:p-6"
        >
          <Github className="h-8 w-8 text-brand" />
          <div>
            <p className="font-semibold">GitHub</p>
            <p className="text-sm text-muted-foreground">Open source projects</p>
          </div>
        </a>
      </div>

      <h2 className="mt-16 text-2xl font-bold">Resources</h2>
      <ul className="mt-6 space-y-3">
        {resources.map((r) => (
          <li key={r.url}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3 rounded-lg border border-border p-4 transition-colors hover:border-brand/40 sm:flex-row sm:items-center sm:justify-between sm:p-4"
            >
              <div className="flex min-w-0 items-start gap-3 sm:items-center">
                <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground sm:mt-0" />
                <div className="min-w-0">
                  <p className="font-medium">{r.title}</p>
                  <p className="text-sm text-muted-foreground">{r.description}</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 self-end text-muted-foreground sm:self-center" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
