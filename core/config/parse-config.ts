import type { CardConfig } from "./card-config";

export function parseConfig(url: URL): CardConfig {
  const p = url.searchParams;

  return {
    locale:
      (p.get("lang") as CardConfig["locale"]) ??
      "en",

    theme: {
      preset:
        (p.get("theme") as
          | "dark"
          | "light"
          | "dracula"
          | "github") ?? "dark",

      override: {
        background:
          p.get("bg") ?? undefined,

        border:
          p.get("border") ?? undefined,

        primary:
          p.get("primary") ?? undefined,

        text:
          p.get("text") ?? undefined,

        muted:
          p.get("muted") ?? undefined,
      },
    },

    labels: {
      featured:
        p.get("featured") ?? undefined,

      viewOnGithub:
        p.get("view") ?? undefined,
    },

    showStars:
      p.get("showStars") !== "false",

    showForks:
      p.get("showForks") !== "false",

    techs:
    p.get("techs")
    ?.split(",")
    .map((tech) => tech.trim()) ?? [],

    image:
      p.get("image") ?? undefined,
  };
}