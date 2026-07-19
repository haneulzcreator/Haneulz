import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Mic, Music, Globe, Calendar, Users } from "lucide-react";
import { IMAGES } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const members = [
  {
    name: "JL Gaspar",
    full: "Jay Lawrence Gaspar",
    img: IMAGES.jlPortrait,
    accent: "var(--pink-deep)",
    chip: "var(--pink)",
    facts: [
      { icon: Globe, label: "Nationality", value: "Filipino 🇵🇭" },
      { icon: Calendar, label: "Born", value: "April 21, 2004" },
      { icon: Star, label: "Position", value: "Main Vocalist · Visual · Center" },
      { icon: Mic, label: "Universe League", value: "Ranked #1 overall" },
    ],
    blurb:
      "The center who topped Universe League from start to finish. Warm, playful, and impossible to look away from — JL brings the light to every HANEZ moment.",
    testid: "member-jl",
  },
  {
    name: "Park Han",
    full: "Park Han · 박한",
    img: IMAGES.hanPortrait,
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
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            Meet the heavenly duo
          </p>
          <h1 className="mt-4 font-serif-display text-6xl font-medium leading-none md:text-8xl">
            JL & Han
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Two voices that met on a survival stage and never stopped finding each other. This is
            the heart of the HANEZ ship — and the reason HANEULZ exists.
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
                    <h2 className="font-serif-display text-4xl font-medium leading-none">{m.name}</h2>
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
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AHOF section */}
      <section className="mx-auto mt-28 max-w-6xl px-6" data-testid="ahof-section">
        <div className="glass overflow-hidden rounded-[3rem] p-8 md:p-14">
          <Reveal>
            <span className="font-accent text-7xl italic leading-none text-[color:var(--blue-deep)] md:text-8xl">
              AHOF
            </span>
            <h2 className="mt-4 font-serif-display text-4xl font-medium leading-tight md:text-5xl">
              The group that started it all
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
              AHOF (아홉) is a nine-member global boy group formed through SBS's{" "}
              <span className="font-medium text-[color:var(--ink)]">Universe League</span>, debuting
              on July 1, 2025 with the EP <span className="italic">Who We Are</span> under F&F
              Entertainment. With members from the Philippines, Korea, China, Taiwan, Japan and
              beyond, their fandom is lovingly known as{" "}
              <span className="font-medium text-[color:var(--ink)]">FOHA</span> — "Forever Our Home,
              AHOF." Among the nine, JL and Han's chemistry sparked the HANEZ ship.
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
