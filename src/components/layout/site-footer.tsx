import Link from "next/link";
import { Code2, Github, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  learn: [
    { title: "All Courses", href: "/courses" },
    { title: "Learning Paths", href: "/learning-paths" },
    { title: "Contribute", href: "/contribute" },
  ],
  openSource: [
    { title: "GitHub Repository", href: "https://github.com/taher-el-mehdi/navbc-learning" },
    { title: "Report an Issue", href: "https://github.com/taher-el-mehdi/navbc-learning/issues/new/choose" },
    { title: "Discussions", href: "https://github.com/taher-el-mehdi/navbc-learning/discussions" },
    { title: "Contributing Guide", href: "/contribute" },
  ],
  resources: [
    { title: "AL Documentation", href: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/devenv-programming-in-al" },
    { title: "BC Developer Docs", href: "https://learn.microsoft.com/dynamics365/business-central/dev-itpro/developer/" },
    { title: "Community", href: "/community" },
    { title: "Blog", href: "https://navbc.com/blog" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      <div className="hero-glow absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--bc-azure)] to-[var(--bc-cyan)] text-white shadow-lg shadow-brand/20">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-tight">NAVBC Learning</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The premium open-source learning platform for Microsoft Dynamics 365
              Business Central. Free forever, built by the community.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.links.github}
                className="glass flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:border-brand/30 hover:text-brand"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.discord}
                className="glass flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:border-brand/30 hover:text-brand"
                aria-label="Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold capitalize">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-brand"
                      {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NAVBC Learning Contributors ·{" "}
            <a
              href="https://github.com/taher-el-mehdi/navbc-learning/blob/main/LICENSE"
              className="hover:text-brand"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
