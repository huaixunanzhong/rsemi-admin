import { create } from "zustand";

interface I18nStore {
  locale: "en" | "zh";
  setLocale: (locale: "en" | "zh") => void;
}
export const useI18nStore = create<I18nStore>()(set => ({
  locale: "zh",
  setLocale: locale => set({ locale })
}));
