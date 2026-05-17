import pt from "./pt";
import en from "./en";

export const locales = {
  pt,
  en,
};

export type LocaleKey = keyof typeof locales;

export function getLocale(locale?: string) {
  return locales[locale as LocaleKey] ?? locales.en;
}