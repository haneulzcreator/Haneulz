import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, SOURCES, SOURCE_ORDER } from "../lib/api";
import { Reveal } from "../components/Reveal";
import AUCard from "../components/AUCard";
import Footer from "../components/Footer";

const typeFilters = [
  { key: "all", label: "All" },
  { key: "story", label: "AU Stories" },
  { key: "headcanon", label: "Headcanons" },
];

const sourceFilters = [
  { key: "all", label: "All sources" },
  { key: "x", label: "X" },
  { key: "tiktok", label: "TikTok" },
  { key: "ao3", label: "AO3" },
];

export default function AULibrary() {
  const [aus, setAus] = useState([]);
  const [type, setType] = useState("all");
  const [source, setSource] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/aus").then((r) => setAus(r.data)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const byType = type === "all" ? aus : aus.filter((a) => a.au_type === type);
  const visibleSources = source === "all" ? SOURCE_ORDER : [source];
  const grouped = visibleSources
    .map((s) => ({ key: s, items: byType.filter((a) => (a.source || "other") === s) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">The archive</p>
          <h1 className="mt-4 font-serif-display text-6xl font-medium leading-none md:text-8xl">
            AU Library
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Every alternate universe and headcanon fans have dreamed up for JL & Han — sorted by
            where they were first shared. Tap a card to read the full story.
          </p>
        </Reveal>

        {/* Source filters */}
        <div className="mt-12 flex flex-wrap items-center gap-3" data-testid="au-source-filters">
          {sourceFilters.map((f) => (
            <button
              key={f.key}
              data-testid={`source-${f.key}`}
              onClick={() => setSource(f.key)}
              className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
                source === f.key
                  ? "bg-[color:var(--blue-deep)] text-white"
                  : "border border-[color:var(--line)] text-[color:var(--ink-soft)]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Type filters */}
        <div className="mt-4 flex flex-wrap items-center gap-3" data-testid="au-filters">
          {typeFilters.map((f) => (
            <button
              key={f.key}
              data-testid={`filter-${f.key}`}
              onClick={() => setType(f.key)}
              className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
                type === f.key
                  ? "bg-[color:var(--ink)] text-white"
                  : "border border-[color:var(--line)] text-[color:var(--ink-soft)]"
              }`}
            >
              {f.label}
            </button>
          ))}
          <Link
            to="/submit"
            data-testid="library-submit-btn"
            className="pill-btn ml-auto rounded-full bg-[color:var(--pink-deep)] px-5 py-2 text-xs uppercase tracking-widest text-white"
          >
            + Submit yours
          </Link>
        </div>

        {/* Grouped sections */}
        <div className="mt-14 space-y-20 pb-10" data-testid="au-grid">
          {loading && <p className="text-[color:var(--ink-soft)]">Loading dreams…</p>}
          {!loading && grouped.length === 0 && (
            <p className="text-[color:var(--ink-soft)]">No AUs here yet — be the first to submit one!</p>
          )}
          {grouped.map((group) => (
            <div key={group.key} data-testid={`section-${group.key}`}>
              <Reveal>
                <div className="mb-8 flex items-baseline gap-4">
                  <h2 className="font-serif-display text-4xl font-medium md:text-5xl">
                    {SOURCES[group.key].full}
                  </h2>
                  <span className="font-accent text-2xl italic text-[color:var(--pink-deep)]">
                    {group.items.length}
                  </span>
                </div>
              </Reveal>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((au, i) => (
                  <Reveal key={au.id} delay={(i % 3) * 0.08}>
                    <AUCard au={au} index={i} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
