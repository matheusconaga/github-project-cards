import { themePresets } from "./presets";
import type { Theme } from "./types";

type ThemeInput = {
  preset?: string;
  override?: Partial<Theme>;
};

export function resolveTheme(input?: ThemeInput): Theme {
  const preset = input?.preset;

  const base: Theme =
    preset && preset in themePresets
      ? themePresets[preset as keyof typeof themePresets]
      : themePresets.dark;

  const override = input?.override ?? {};

  return {
    background: override.background ?? base.background,
    border: override.border ?? base.border,
    primary: override.primary ?? base.primary,
    text: override.text ?? base.text,
    muted: override.muted ?? base.muted,
    accent: override.accent ?? base.accent,
  };
}