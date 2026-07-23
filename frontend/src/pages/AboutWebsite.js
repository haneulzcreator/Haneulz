import React, { useEffect, useState } from "react";
import { getSettings } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

export default function AboutWebsite() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    getSettings()
      .then((data) => setSettings(data))
      .catch((err) => console.error("Failed to load about settings:", err));
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-6 pt-32 pb-24">
      {/* SECTION HEADER */}
      <Reveal>
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
          About the Archive
        </p>
        <h1 className="font-serif-display text-5xl font-medium md:text-6xl">
          {settings?.about_title || "Our Little Corner"}
        </h1>
        <h2 className="mt-3 font-serif-display text-2xl italic text-[color:var(--pink-deep)] md:text-3xl">
          {settings?.about_subtitle || "Welcome to Haneulz Corner ☁️💗"}
        </h2>
      </Reveal>

      {/* JOURNAL LETTER CONTENT */}
      <Reveal delay={0.15}>
        <div className="glass mt-10 rounded-[2rem] p-8 md:p-12">
          {/* whiteSpace: "pre-line" keeps line breaks saved from Admin textarea */}
          <div className="whitespace-pre-line text-lg leading-relaxed text-[color:var(--ink-soft)]">
            {settings?.about_letter ||
              "Haneulz Corner started as a simple idea from one Hansum who just wanted a place where everything about HANEULZ could be found a little more easily."}
          </div>

          {/* SIGN-OFF */}
          <div className="mt-10 border-t border-[color:var(--line)] pt-6 italic">
            <p className="text-base text-[color:var(--ink-soft)]">
              {settings?.about_signoff_text || "Made with lots of love..."}
            </p>
            <strong className="mt-2 block font-serif-display text-lg text-[color:var(--pink-deep)]">
              {settings?.about_signoff_author || "— K ☁️💗"}
            </strong>
          </div>
        </div>
      </Reveal>

      <Footer />
    </div>
  );
}
