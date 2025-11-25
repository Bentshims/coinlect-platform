"use client";

import { useState } from "react";

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  return (
    <div className="flex items-center">
      {/* FR Button */}
      <button
        onClick={() => setLanguage("fr")}
        className="relative w-10 h-10 rounded-full transition-all duration-300"
        style={{
          zIndex: language === "fr" ? 2 : 1,
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
            language === "fr"
              ? "bg-[#FF9900] border-[#FF9900] text-black scale-110"
              : "bg-transparent border-[#D9D9D9] text-[#D9D9D9]"
          }`}
        >
          FR
        </div>
      </button>

      {/* EN Button */}
      <button
        onClick={() => setLanguage("en")}
        className="relative w-10 h-10 rounded-full -ml-3 transition-all duration-300"
        style={{
          zIndex: language === "en" ? 2 : 1,
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
            language === "en"
              ? "bg-[#FF9900] border-[#FF9900] text-black scale-110"
              : "bg-transparent border-[#D9D9D9] text-[#D9D9D9]"
          }`}
        >
          EN
        </div>
      </button>
    </div>
  );
}

