import {
  getFeaturedCourses,
  getAllLearningPaths,
  getAllCourses,
} from "@/lib/content";
import { generateWebsiteJsonLd, generateOrganizationJsonLd } from "@/lib/seo";
import { Hero } from "@/components/marketing/hero";
import { FeaturedCourses } from "@/components/marketing/featured-courses";
import { LearningPathsSection } from "@/components/marketing/learning-paths-section";
import { WhyLearnSection } from "@/components/marketing/why-learn-section";
import { LatestTutorials } from "@/components/marketing/latest-tutorials";
import { CommunitySection, CTASection, NewsletterSection } from "@/components/marketing/community-section";

export default function HomePage() {
  const featuredCourses = getFeaturedCourses();
  const learningPaths = getAllLearningPaths();
  const lessonCount = getAllCourses().reduce((sum, c) => sum + c.lessonsCount, 0);

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

      <Hero courseCount={learningPaths.length} lessonCount={lessonCount} />
      <FeaturedCourses courses={featuredCourses} />
      <LearningPathsSection paths={learningPaths} />
      <WhyLearnSection />
      <LatestTutorials />
      <CommunitySection />
      <NewsletterSection />
      <CTASection />
    </>
  );
}
