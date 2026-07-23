import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowUpRight, Sparkles, Tv, PenLine } from "lucide-react";
import { api, getSettings, IMAGES } from "../lib/api";
import { Reveal, MaskLine, ease } from "../components/Reveal";
import AUCard from "../components/AUCard";
import Footer from "../components/Footer";

const chapters = [
  {
    n: "01",
    title: "One rank, one stage",
    body: "It started on Universe League — JL at #1, Han as MVP of Team Groove. Two voices that kept finding each other in the noise.",
  },
  {
    n: "02",
    title: "Haneulz, acknowledged",
    body: "During the debut, fans coined the name by blending the Korean names of JL and Han — first “Haneul,” then HANEULZ. Fitting, since “haneul” means sky, and both of them have the most heavenly vocals.",
  },
  {
    n: "03",
    title: "For FOHA, by FOHA",
    body: "This is a gentle archive — alternate universes, headcanons, and variety clips. A place to keep the daydreams safe.",
  },
];

export default function Home() {
  const [aus, setAus] = useState([]);
  const [settings, setSettings] = useState(null);

  const { scrollY } = useScroll();
  const cloudY = useTransform(scrollY, [0, 600], [0, 160]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.12]);

  useEffect(() => {
    // Fetch featured AUs
    api.get("/aus").then((r) => setAus(r.data.slice(0, 3))).catch(() => {});

    // Fetch site settings for dynamic text
    getSettings().then((data) => setSettings(data)).catch(() => {});
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24">
        <motion.div style={{ y: cloudY, scale: heroScale }} className="absolute inset-0 -z-10">
          <img src={IMAGES.cloudsPink} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[color:var(--bg)]/45" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg,transparent 40%,var(--bg) 96%)" }}
          />
        </motion.div>

        <div className="mx-auto w-full max-w-6xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mb-6 text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]"
            data-testid="hero-eyebrow"
          >
            The HANEULZ ship · JL Gaspar × Park Han · AHOF
          </motion.p>

          <h1 className="font-serif-display text-[18vw] font-medium leading-[0.82] tracking-tighter md:text-[15rem]">
            <MaskLine delay={0.35}>
              {settings?.hero_title || "HANEULZ"}
            </MaskLine>
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <MaskLine delay={0.7} className="max-w-md font-serif-display text-2xl italic leading-snug text-[color:var(--ink-soft)] md:text-3xl">
              {settings?.hero_subtitle || "a soft place for the daydreams,"}
            </MaskLine>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease }}
              className="flex flex-wrap gap-3"
            >
              <Link
                to="/aus"
                data-testid="hero-explore-btn"
                className="pill-btn flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm uppercase tracking-widest text-white"
              >
                Explore AUs <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/submit"
                data-testid="hero-submit-btn"
                className="pill-btn flex items-center gap-2 rounded-full bg-[color:var(--pink-deep)] px-6 py-3 text-sm uppercase tracking-widest text-white"
              >
                Submit an AU <PenLine size={15} />
              </Link>
              <Link
                to="/variety"
                data-testid="hero-variety-btn"
                className="pill-btn flex items-center gap-2 rounded-full border border-[color:var(--ink)] px-6 py-3 text-sm uppercase tracking-widest"
              >
                <Tv size={15} /> AHOF Corner
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-[color:var(--line)] bg-[color:var(--pink)]/40 py-5">
        <Marquee speed={40} gradient={false}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-8 flex items-center gap-8 font-serif-display text-3xl italic md:text-4xl">
              HANEULZ <Sparkles size={20} className="text-[color:var(--blue-deep)]" /> JL & Han
              <Sparkles size={20} className="text-[color:var(--pink-deep)]" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-6xl px-6 py-28" data-testid="manifesto">
        <Reveal>
          <p className="mb-16 text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            The story of the ship
          </p>
        </Reveal>
        <div className="flex flex-col gap-20">
          {chapters.map((c, i) => (
            <Reveal key={c.n} delay={i * 0.05}>
              <div className={`flex flex-col gap-6 md:flex-row md:gap-16 ${i % 2 ? "md:pl-32" : ""}`}>
                <span className="font-accent text-7xl italic leading-none text-[color:var(--pink-deep)] md:text-9xl">
                  {c.n}
                </span>
                <div className="max-w-xl">
                  <h2 className="font-serif-display text-4xl font-medium leading-tight md:text-5xl">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[color:var(--ink-soft)]">{c.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
        {[
          { icon: PenLine, t: "Alternate Universes", d: "Coffee shops, soulmates, rockstars — every daydream archived." },
          { icon: Tv, t: "Variety Corner", d: "Their best show moments, with clips to relive on repeat." },
          { icon: Sparkles, t: "Fan Submissions", d: "Share your own AU. Moderated with love before it goes live." },
        ].map((f, i) => (
          <Reveal key={f.t} delay={i * 0.08}>
            <div className="glass h-full rounded-[2rem] p-8">
              <f.icon className="text-[color:var(--blue-deep)]" size={26} />
              <h3 className="mt-5 font-serif-display text-2xl font-medium">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">{f.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* FEATURED AUs */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <Reveal>
            <h2 className="font-serif-display text-5xl font-medium md:text-6xl">Creator's AU Picks</h2>
          </Reveal>
          <Link to="/aus" data-testid="home-view-all-aus" className="link-underline text-sm uppercase tracking-widest">
            View all
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {aus.map((au, i) => (
            <Reveal key={au.id} delay={i * 0.08}>
              <AUCard au={au} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
