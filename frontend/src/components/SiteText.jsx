import { getSettings } from "../lib/api";
import React, { useEffect, useState } from "react";
import { getSettings } from "../lib/api";

// Fallbacks if data hasn't loaded yet or database is empty
const DEFAULTS = {
  hero_title: "HANEULZ CORNER",
  hero_subtitle: "Your cozy space for all things AHOF & Haneulz",
  whole_group_title: "NOW, THE WHOLE GROUP",
  whole_group_desc: "Spotlighting all nine members of AHOF together.",
  about_title: "Our Little Corner",
  about_subtitle: "Welcome to Haneulz Corner ☁️💗",
  about_letter:
    "Haneulz Corner started as a simple idea from one Hansum who just wanted a place where everything about HANEULZ could be found a little more easily.",
  about_signoff_text:
    "Made with lots of love, late-night ideas, and a few too many bookmarks.",
  about_signoff_author: "— K ☁️💗",
};

// 1. HERO SECTION
export function HeroSection({ settings }) {
  const data = settings || DEFAULTS;
  return (
    <div className="hero-section" style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>{data.hero_title}</h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>{data.hero_subtitle}</p>
    </div>
  );
}

// 2. WHOLE GROUP SECTION
export function WholeGroupSection({ settings }) {
  const data = settings || DEFAULTS;
  return (
    <div className="whole-group-section" style={{ textAlign: "center", margin: "30px 0" }}>
      <h2>{data.whole_group_title}</h2>
      <p style={{ opacity: "0.8" }}>{data.whole_group_desc}</p>
    </div>
  );
}

// 3. ABOUT SECTION
export function AboutSection({ settings }) {
  const data = settings || DEFAULTS;
  return (
    <div className="about-section" style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
      <h2>{data.about_title}</h2>
      <h3>{data.about_subtitle}</h3>
      <div style={{ whiteSpace: "pre-line", margin: "20px 0", lineHeight: "1.6" }}>
        {data.about_letter}
      </div>
      <div style={{ marginTop: "20px", fontStyle: "italic" }}>
        <p>{data.about_signoff_text}</p>
        <strong>{data.about_signoff_author}</strong>
      </div>
    </div>
  );
}

// MAIN WRAPPER (Fetch once, use everywhere)
export default function SiteTextWrapper() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    getSettings()
      .then((data) => setSettings(data))
      .catch((err) => console.error("Error fetching site settings:", err));
  }, []);

  return (
    <div>
      <HeroSection settings={settings} />
      <WholeGroupSection settings={settings} />
      <AboutSection settings={settings} />
    </div>
  );
}
