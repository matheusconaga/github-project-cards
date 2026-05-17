import { themePresets } from "@/core/themes/presets";

export type CardConfig = {
  locale: "pt" | "en";

  theme: {
    preset?: keyof typeof themePresets;

    override?: {
      background?: string;
      border?: string;
      primary?: string;
      text?: string;
      muted?: string;
    };
  };

  labels?: {
    featured?: string;
    viewOnGithub?: string;
  };

  showStars?: boolean;

  showForks?: boolean;

  techs?: string[];

  image?: string;

  title?: string;

  description?: string;
};