import type { BundledTheme, ThemeRegistration } from "shiki";

const sharedTokenColors = [
  {
    scope: ["comment", "punctuation.definition.comment", "comment.line", "comment.block"],
    settings: { foreground: "#8b949e", fontStyle: "italic" },
  },
  {
    scope: ["string", "constant.other.symbol", "string.quoted"],
    settings: { foreground: "#0a7f4f" },
  },
  {
    scope: ["constant.numeric", "constant.language"],
    settings: { foreground: "#0550ae" },
  },
  {
    scope: ["constant.language.boolean"],
    settings: { foreground: "#cf222e" },
  },
  {
    scope: [
      "keyword",
      "keyword.control",
      "keyword.operator",
      "storage.type",
      "storage.modifier",
      "keyword.other.applicationobject.al",
      "keyword.other.metadata.al",
    ],
    settings: { foreground: "#cf222e", fontStyle: "bold" },
  },
  {
    scope: ["keyword.control", "keyword.operator.new"],
    settings: { foreground: "#8250df" },
  },
  {
    scope: [
      "entity.name.type",
      "entity.name.class",
      "support.type",
      "support.class",
      "support.type.al",
    ],
    settings: { foreground: "#953800" },
  },
  {
    scope: ["entity.name.function", "support.function"],
    settings: { foreground: "#8250df" },
  },
  {
    scope: ["variable", "variable.other", "meta.definition.variable"],
    settings: { foreground: "#1f2328" },
  },
  {
    scope: ["variable.parameter"],
    settings: { foreground: "#953800" },
  },
  {
    scope: ["entity.name.tag", "support.type.property-name.json"],
    settings: { foreground: "#0550ae" },
  },
  {
    scope: ["support.constant.property-value.json"],
    settings: { foreground: "#0a7f4f" },
  },
  {
    scope: ["constant.numeric.json"],
    settings: { foreground: "#0550ae" },
  },
  {
    scope: ["constant.language.json"],
    settings: { foreground: "#cf222e" },
  },
  {
    scope: ["punctuation", "meta.brace"],
    settings: { foreground: "#656d76" },
  },
  {
    scope: ["entity.other.attribute-name"],
    settings: { foreground: "#0550ae" },
  },
];

/** Light theme for AL, JSON, SQL, and PowerShell code blocks */
export const navbcLightTheme: ThemeRegistration = {
  name: "navbc-light",
  type: "light",
  colors: {
    "editor.background": "#f6f8fa",
    "editor.foreground": "#1f2328",
    "editorLineNumber.foreground": "#8c959f",
    "editor.selectionBackground": "#b6e3ff",
    "editor.inactiveSelectionBackground": "#b6e3ff55",
  },
  tokenColors: sharedTokenColors,
};

/** Dark theme for AL, JSON, SQL, and PowerShell code blocks */
export const navbcDarkTheme: ThemeRegistration = {
  name: "navbc-dark",
  type: "dark",
  colors: {
    "editor.background": "#0d1117",
    "editor.foreground": "#e6edf3",
    "editorLineNumber.foreground": "#484f58",
    "editor.selectionBackground": "#264f78",
    "editor.inactiveSelectionBackground": "#264f7855",
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment", "comment.line", "comment.block"],
      settings: { foreground: "#8b949e", fontStyle: "italic" },
    },
    {
      scope: ["string", "constant.other.symbol", "string.quoted"],
      settings: { foreground: "#7ee787" },
    },
    {
      scope: ["constant.numeric", "constant.language"],
      settings: { foreground: "#79c0ff" },
    },
    {
      scope: ["constant.language.boolean"],
      settings: { foreground: "#ff7b72" },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "keyword.operator",
        "storage.type",
        "storage.modifier",
        "keyword.other.applicationobject.al",
        "keyword.other.metadata.al",
      ],
      settings: { foreground: "#ff7b72", fontStyle: "bold" },
    },
    {
      scope: ["keyword.control", "keyword.operator.new"],
      settings: { foreground: "#d2a8ff" },
    },
    {
      scope: [
        "entity.name.type",
        "entity.name.class",
        "support.type",
        "support.class",
        "support.type.al",
      ],
      settings: { foreground: "#ffa657" },
    },
    {
      scope: ["entity.name.function", "support.function"],
      settings: { foreground: "#d2a8ff" },
    },
    {
      scope: ["variable", "variable.other", "meta.definition.variable"],
      settings: { foreground: "#e6edf3" },
    },
    {
      scope: ["variable.parameter"],
      settings: { foreground: "#ffa657" },
    },
    {
      scope: ["entity.name.tag", "support.type.property-name.json"],
      settings: { foreground: "#79c0ff" },
    },
    {
      scope: ["support.constant.property-value.json"],
      settings: { foreground: "#7ee787" },
    },
    {
      scope: ["constant.numeric.json"],
      settings: { foreground: "#79c0ff" },
    },
    {
      scope: ["constant.language.json"],
      settings: { foreground: "#ff7b72" },
    },
    {
      scope: ["punctuation", "meta.brace"],
      settings: { foreground: "#8b949e" },
    },
    {
      scope: ["entity.other.attribute-name"],
      settings: { foreground: "#79c0ff" },
    },
  ],
};

export const codeThemes = {
  dark: navbcDarkTheme,
  light: navbcLightTheme,
} satisfies Record<string, ThemeRegistration | BundledTheme>;
