import { Theme } from "./types";

export const themePresets: Record<string, Theme> = {
  dark: {
    background: "#0D1117",
    border: "#94a3b8",
    primary: "#1F6FEB",
    accent: "#3b82f6",
    text: "#ffffff",
    muted: "#94a3b8",
  },

  light: {
    background: "#ffffff",
    border: "#a8b2c7",
    primary: "#2563eb",
    accent: "#2563eb",
    text: "#0f172a",
    muted: "#64748b",
  },

  github: {
    background: "#0d1117",
    border: "#30363d",
    primary: "#1F6FEB",
    accent: "#58a6ff",
    text: "#c9d1d9",
    muted: "#8b949e",
  },

  dracula: {
    background: "#282a36",
    border: "#44475a",
    primary: "#ff79c6",
    accent: "#8be9fd",
    text: "#f8f8f2",
    muted: "#808db1",
  },
};