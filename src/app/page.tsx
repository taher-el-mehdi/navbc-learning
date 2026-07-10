import {
  getFeaturedCourses,
  getAllLearningPaths,
  getAllCourses,
} from "@/lib/content";
import { generateWebsiteJsonLd, generateOrganizationJsonLd } from "@/lib/seo";
import { Hero } from "@/components/marketing/hero";
import { StatsSection } from "@/components/marketing/stats-section";
import { LearningPathsSection } from "@/components/marketing/learning-paths-section";
import { FeaturedCourses } from "@/components/marketing/featured-courses";
import { CodeShowcase } from "@/components/marketing/code-showcase";
import { CommunitySection } from "@/components/marketing/community-section";
import { WhyOpenSourceSection } from "@/components/marketing/why-open-source-section";

export default function HomePage() {
  const featuredCourses = getFeaturedCourses();
  const learningPaths = getAllLearningPaths();
  const courses = getAllCourses();
  const lessonCount = courses.reduce((sum, c) => sum + c.lessonsCount, 0);

  const websiteJsonLd = generateWebsiteJsonLd();
  const organizationJsonLd = generateOrganizationJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <Hero />
      <StatsSection
        lessonCount={lessonCount}
        courseCount={courses.length}
        pathCount={learningPaths.length}
      />
      <LearningPathsSection paths={learningPaths} />
      <FeaturedCourses courses={featuredCourses} />
      <CodeShowcase />
      <CommunitySection />
      <WhyOpenSourceSection />
    </>
  );
}
