import { createHighlighter, type LanguageRegistration } from "shiki";
import { codeThemes } from "@/lib/code-theme";
import alGrammar from "@/lib/grammars/al.json";

const alLanguage = {
  ...alGrammar,
  repository: {},
} as LanguageRegistration;

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: [codeThemes.light, codeThemes.dark],
      langs: [alLanguage, "json", "powershell", "sql"],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(
  code: string,
  lang = "al",
): Promise<string> {
  const highlighter = await getHighlighter();
  return highlighter.codeToHtml(code.trim(), {
    lang,
    themes: {
      light: codeThemes.light.name,
      dark: codeThemes.dark.name,
    },
    defaultColor: false,
  });
}
