import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../lib/api";
import { Reveal } from "../components/Reveal";
import AUCard from "../components/AUCard";
import Footer from "../components/Footer";

const filters = [
  { key: "all", label: "All" },
  { key: "story", label: "AU Stories" },
  { key: "headcanon", label: "Headcanons" },
];

export default function AULibrary() {
  const [aus, setAus] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/aus").then((r) => setAus(r.data)).catch(() => {}).finally(() => setLoading(false));
  }, []);

  const shown = filter === "all" ? aus : aus.filter((a) => a.au_type === filter);

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">The archive</p>
          <h1 className="mt-4 font-serif-display text-6xl font-medium leading-none md:text-8xl">
            AU Library
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Every alternate universe and headcanon fans have dreamed up for JL & Han. Tap a card to
            read the full story.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center gap-3" data-testid="au-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              data-testid={`filter-${f.key}`}
              onClick={() => setFilter(f.key)}
              className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
                filter === f.key
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

        <div className="mt-12 grid gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-3" data-testid="au-grid">
          {loading && <p className="text-[color:var(--ink-soft)]">Loading dreams…</p>}
          {!loading && shown.length === 0 && (
            <p className="text-[color:var(--ink-soft)]">No AUs here yet — be the first to submit one!</p>
          )}
          {shown.map((au, i) => (
            <Reveal key={au.id} delay={(i % 3) * 0.08}>
              <AUCard au={au} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
