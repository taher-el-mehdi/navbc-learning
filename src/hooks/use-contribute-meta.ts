"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export interface ContributeMeta {
  pageTitle?: string;
  contentPath?: string;
  courseTitle?: string;
}

export function useContributeMeta() {
  const pathname = usePathname();
  const [meta, setMeta] = useState<ContributeMeta>({});

  useEffect(() => {
    if (!pathname || pathname === "/contribute") {
      setMeta({});
      return;
    }

    fetch(`/api/contribute-meta?path=${encodeURIComponent(pathname)}`)
      .then((r) => r.json())
      .then((data: ContributeMeta) => setMeta(data))
      .catch(() => setMeta({}));
  }, [pathname]);

  return { pathname, meta };
}
