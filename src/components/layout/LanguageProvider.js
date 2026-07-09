"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

const STORAGE_KEY = "pulsecore-lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) {
      setLangState(saved);
    }
  }, []);

  const setLang = (code) => {
    if (!translations[code]) return;
    setLangState(code);
    localStorage.setItem(STORAGE_KEY, code);
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
