import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/types/content";
import { CourseCard } from "@/components/courses/course-card";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface FeaturedCoursesProps {
  courses: Course[];
}

export function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  return (
    <Section>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          align="left"
          label="Courses"
          title="Featured Courses"
          description="Structured curricula for Technical and Functional tracks — start with Fundamentals and build your expertise."
          className="mb-0 sm:mb-0"
        />
        <Button variant="ghost" asChild className="hidden shrink-0 sm:inline-flex">
          <Link href="/courses">
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} featured />
        ))}
      </div>

      <div className="mt-8 flex justify-center sm:hidden">
        <Button variant="outline" className="glass" asChild>
          <Link href="/courses">
            View all courses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
