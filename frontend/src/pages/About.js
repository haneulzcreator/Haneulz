import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Mic, Music, Globe, Calendar, Users, Instagram, Play, Music2, Sparkles } from "lucide-react";
import { IMAGES, REAL } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const AHOF_SPOTIFY = "https://open.spotify.com/search/AHOF";
const AHOF_INSTAGRAM = "https://www.instagram.com/ahof_official/";
const LITTLE_PRINCE_YT = "https://youtu.be/S5PG6lUSMHs";

const members = [
  {
    name: "JL Gaspar",
    full: "Jay Lawrence Gaspar",
    emoji: "🦌",
    stageName: "JL",
    instagram: "https://www.instagram.com/ahof_official/",
    img: REAL.jl,
    accent: "var(--pink-deep)",
    chip: "var(--pink)",
    facts: [
      { icon: Globe, label: "Nationality", value: "Filipino 🇵🇭" },
      { icon: Calendar, label: "Born", value: "April 21, 2004" },
      { icon: Star, label: "Position", value: "Main Vocalist · Visual · Center" },
      { icon: Mic, label: "Universe League", value: "Ranked #1 overall" },
    ],
    blurb:
      "The center who topped Universe League from start to finish. Warm, playful, and impossible to look away from — JL brings the light to every HANEULZ moment.",
    testid: "member-jl",
  },
  {
    name: "Park Han",
    full: "Park Han · 박한",
    emoji: "🐈‍⬛",
    stageName: "Han",
    instagram: "https://www.instagram.com/ahof_official/",
    img: REAL.han,
    accent: "var(--blue-deep)",
    chip: "var(--blue)",
    facts: [
      { icon: Globe, label: "Nationality", value: "Korean 🇰🇷" },
      { icon: Calendar, label: "Born", value: "September 25, 2003" },
      { icon: Star, label: "Position", value: "Main Vocalist" },
      { icon: Mic, label: "Universe League", value: "MVP of Team Groove" },
    ],
    blurb:
      "The steady, soulful voice of the pair. Han's tone carries the emotion — the calm to JL's sparkle, the harmony that made HANEULZ believe.",
    testid: "member-han",
  },
];

const ahofFacts = [
  { icon: Calendar, label: "Debut", value: "July 1, 2025" },
  { icon: Music, label: "Debut EP", value: "Who We Are" },
  { icon: Users, label: "Members", value: "9 · global lineup" },
  { icon: Star, label: "Origin", value: "SBS Universe League" },
];

export default function About() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-10 overflow-hidden rounded-[2.5rem]" data-testid="about-hero-placeholder">
            <div className="aspect-[16/7] overflow-hidden">
              <img
                src={REAL.ahofGroup}
                alt="AHOF group"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            Meet the heavenly duo
          </p>
          <h1 className="mt-4 font-serif-display text-6xl font-medium leading-none md:text-8xl">
            JL & Han
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Two voices that met on a survival stage and never stopped finding each other. This is
            the heart of the HANEULZ ship — and the reason HANEULZ exists.
          </p>
        </Reveal>

        {/* Member cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <article className="glass overflow-hidden rounded-[2.5rem]" data-testid={m.testid}>
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden">
                    <motion.img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.08 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(180deg,transparent,rgba(255,255,255,0.85))" }}>
                    <span className="text-[0.7rem] uppercase tracking-widest" style={{ color: m.accent }}>
                      {m.full}
                    </span>
                    <h2 className="flex items-center gap-3 font-serif-display text-4xl font-medium leading-none">
                      {m.name}
                      <span className="text-3xl" aria-hidden="true" data-testid={`${m.testid}-emoji`}>
                        {m.emoji}
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-base leading-relaxed text-[color:var(--ink-soft)]">{m.blurb}</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {m.facts.map((f) => (
                      <div key={f.label} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full" style={{ background: m.chip }}>
                          <f.icon size={15} />
                        </span>
                        <div>
                          <p className="text-[0.65rem] uppercase tracking-widest text-[color:var(--ink-soft)]">{f.label}</p>
                          <p className="text-sm font-medium">{f.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* SNS + stage name */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[color:var(--line)] pt-6">
                    <div className="rounded-full px-4 py-2" style={{ background: m.chip }}>
                      <span className="text-[0.6rem] uppercase tracking-widest text-[color:var(--ink-soft)]">Stage name</span>
                      <span className="ml-2 text-sm font-semibold">{m.stageName}</span>
                    </div>
                    <a
                      href={m.instagram}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`${m.testid}-instagram`}
                      className="pill-btn flex items-center gap-2 rounded-full border border-[color:var(--ink)] px-4 py-2 text-xs uppercase tracking-widest"
                    >
                      <Instagram size={14} /> Instagram
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Performance / Universe League stage */}
      <section className="mx-auto mt-28 max-w-6xl px-6" data-testid="performance-section">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            The stage that started HANEULZ
          </p>
          <h2 className="mt-4 font-serif-display text-4xl font-medium leading-tight md:text-6xl">
            “The Little Prince” · Universe League
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={LITTLE_PRINCE_YT}
            target="_blank"
            rel="noreferrer"
            data-testid="little-prince-clip"
            className="group relative mt-8 block overflow-hidden rounded-[2.5rem]"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={IMAGES.manifesto1}
                alt="The Little Prince stage placeholder"
                className="au-card-img h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 grid place-items-center bg-black/20 transition-colors duration-500 group-hover:bg-black/35">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-white/90 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                <Play size={26} className="ml-1 text-[color:var(--ink)]" fill="currentColor" />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white" style={{ background: "linear-gradient(180deg,transparent,rgba(15,23,42,0.55))" }}>
              <span className="flex items-center gap-2 text-xs uppercase tracking-widest">
                <Sparkles size={13} /> The duet that made fans fall — tap to watch on YouTube
              </span>
            </div>
          </a>
        </Reveal>
      </section>

      {/* AHOF section */}
      <section className="mx-auto mt-28 max-w-6xl px-6" data-testid="ahof-section">
        <div className="glass overflow-hidden rounded-[3rem] p-8 md:p-14">
          <Reveal>
            <span className="font-accent text-7xl italic leading-none text-[color:var(--blue-deep)] md:text-8xl">
              AHOF
            </span>
            <div className="mt-6 overflow-hidden rounded-[2rem]" data-testid="ahof-picture-placeholder">
              <div className="aspect-[16/6] overflow-hidden">
                <img
                  src={REAL.ahofGroup}
                  alt="AHOF group"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
            <h2 className="mt-8 font-serif-display text-4xl font-medium leading-tight md:text-5xl">
              The group that started it all
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
              AHOF (아홉) is a nine-member global boy group formed through SBS's{" "}
              <span className="font-medium text-[color:var(--ink)]">Universe League</span>, debuting
              on July 1, 2025 with the EP <span className="italic">Who We Are</span> under F&F
              Entertainment. With members from the Philippines, Korea, China, Taiwan, Japan and
              beyond, their fandom is lovingly known as{" "}
              <span className="font-medium text-[color:var(--ink)]">FOHA</span> — "Forever Our Home,
              AHOF." Among the nine, JL and Han's chemistry sparked the HANEULZ ship.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ahofFacts.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06}>
                <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-white/50 p-5">
                  <f.icon size={18} className="text-[color:var(--pink-deep)]" />
                  <p className="mt-3 text-[0.65rem] uppercase tracking-widest text-[color:var(--ink-soft)]">{f.label}</p>
                  <p className="mt-1 font-serif-display text-xl font-medium">{f.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={AHOF_SPOTIFY}
                target="_blank"
                rel="noreferrer"
                data-testid="ahof-spotify-btn"
                className="pill-btn flex items-center gap-2 rounded-full px-6 py-3 text-sm uppercase tracking-widest text-white"
                style={{ background: "#1DB954" }}
              >
                <Music2 size={16} /> AHOF on Spotify
              </a>
              <a
                href={AHOF_INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                data-testid="ahof-instagram-btn"
                className="pill-btn flex items-center gap-2 rounded-full border border-[color:var(--ink)] px-6 py-3 text-sm uppercase tracking-widest"
              >
                <Instagram size={16} /> AHOF on Instagram
              </a>
              <Link to="/aus" data-testid="about-aus-btn" className="pill-btn rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm uppercase tracking-widest text-white">
                Read their AUs
              </Link>
              <Link to="/variety" data-testid="about-variety-btn" className="pill-btn rounded-full border border-[color:var(--ink)] px-6 py-3 text-sm uppercase tracking-widest">
                Watch on variety
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
