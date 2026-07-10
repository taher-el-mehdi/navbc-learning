import type { Metadata } from "next";
import Link from "next/link";
import { getAllLessons, getAllCourses } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Tutorials",
  description: "Latest Business Central and AL development tutorials.",
  alternates: { canonical: "https://learn.navbc.com/tutorials" },
};

export default function TutorialsPage() {
  const lessons = getAllLessons();
  const courses = getAllCourses();
  const courseMap = new Map(courses.map((c) => [c.id, c]));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Tutorials</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Browse all lessons and tutorials across our courses.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => {
          const course = courseMap.get(lesson.courseId);
          if (!course) return null;

          return (
            <Card key={`${lesson.courseId}-${lesson.slug}`} className="hover:border-brand/40">
              <CardHeader className="pb-2">
                <p className="text-xs font-medium text-brand">{course.title}</p>
                <CardTitle className="text-base">
                  <Link href={`/courses/${course.slug}/lessons/${lesson.slug}`}>
                    {lesson.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {lesson.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
