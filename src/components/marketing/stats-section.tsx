import { BookOpen, Code2, Users } from "lucide-react";
import { Section } from "@/components/ui/section";
import { StatCard } from "@/components/ui/stat-card";

interface StatsSectionProps {
  lessonCount: number;
  courseCount: number;
  pathCount: number;
}

export function StatsSection({
  lessonCount,
  courseCount,
  pathCount,
}: StatsSectionProps) {
  const stats = [
    {
      value: `${lessonCount}+`,
      label: "Lessons",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      value: String(courseCount),
      label: "Courses",
      icon: <Code2 className="h-5 w-5" />,
    },
    {
      value: String(pathCount),
      label: "Learning Paths",
      icon: <Users className="h-5 w-5" />,
    },
  ];

  return (
    <Section className="py-12 sm:py-16" containerClassName="max-w-5xl">
      <div className="grid grid-cols-3 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>
    </Section>
  );
}
