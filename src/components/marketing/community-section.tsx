import Link from "next/link";
import { MessageCircle, Github, BookOpen, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Newsletter } from "@/components/marketing/newsletter";

const communityLinks = [
  {
    icon: MessageCircle,
    title: "Discord",
    description: "Chat with BC developers in real-time. Get help, share wins, and network.",
    href: siteConfig.links.discord,
    external: true,
    color: "text-[#5865F2]",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Contribute lessons, report issues, and star the repo to show support.",
    href: siteConfig.links.github,
    external: true,
    color: "text-foreground",
  },
  {
    icon: BookOpen,
    title: "Resources",
    description: "Curated links, documentation, and community guides for BC professionals.",
    href: "/community",
    external: false,
    color: "text-brand",
  },
];

export function CommunitySection() {
  return (
    <Section variant="muted">
      <SectionHeader
        label="Community"
        title="Join the BC Community"
        description="Connect with developers and consultants worldwide. Learn together, contribute together, grow together."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {communityLinks.map((link) => {
          const Icon = link.icon;
          const content = (
            <>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 ${link.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold group-hover:text-brand">
                {link.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {link.description}
              </p>
              <span className="mt-4 flex items-center gap-1 text-sm font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
                {link.external ? "Join now" : "Explore"}
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </>
          );

          const className =
            "group glass-card flex flex-col rounded-2xl p-6 transition-all duration-300 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 sm:p-8";

          return link.external ? (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          ) : (
            <Link key={link.title} href={link.href} className={className}>
              {content}
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

export function CTASection() {
  return (
    <Section className="pb-20 sm:pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-brand/20">
        <div className="hero-glow absolute inset-0" />
        <div className="hero-glow-secondary absolute inset-0" />
        <div className="bc-gradient-bg relative px-6 py-12 text-center sm:px-12 sm:py-16 md:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to master{" "}
            <span className="text-gradient">Business Central</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Pick your path — Technical or Functional — and start learning today.
            It&apos;s free, open source, and built for you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="brand" size="lg" className="shadow-lg shadow-brand/25" asChild>
              <Link href="/learning-paths">
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="glass" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function NewsletterSection() {
  return (
    <Section variant="gradient" className="border-t border-border">
      <div className="mx-auto max-w-xl text-center">
        <SectionHeader
          title="Stay in the Loop"
          description="Get new tutorials, BC release updates, and developer tips delivered to your inbox."
          className="mb-8 sm:mb-10"
        />
        <Newsletter />
      </div>
    </Section>
  );
}
