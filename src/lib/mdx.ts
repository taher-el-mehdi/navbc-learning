import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { createHighlighter, type LanguageRegistration } from "shiki";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { codeThemes } from "@/lib/code-theme";
import alGrammar from "@/lib/grammars/al.json";

const alLanguage = {
  ...alGrammar,
  repository: {},
} as LanguageRegistration;

const prettyCodeOptions = {
  theme: codeThemes,
  keepBackground: false,
  defaultLang: "al",
  grid: false,
  getHighlighter: (options: Parameters<typeof createHighlighter>[0]) =>
    createHighlighter({
      ...options,
      langs: [
        alLanguage,
        "json",
        "powershell",
        "sql",
        "javascript",
        "typescript",
        "bash",
        "markdown",
        "xml",
      ],
      langAlias: {
        ps1: "powershell",
        mssql: "sql",
        tsql: "sql",
      },
    }),
};

export async function compileLessonMDX(source: string) {
  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "wrap" }],
          [rehypePrettyCode, prettyCodeOptions],
        ],
      },
    },
  });

  return content;
}
