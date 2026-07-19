import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";
import { api, SOURCES, SOURCE_ORDER } from "../lib/api";
import { useBookmarks } from "../lib/bookmarks";
import { Reveal } from "../components/Reveal";
import AUCard from "../components/AUCard";
import Footer from "../components/Footer";

const sourceFilters = [
  { key: "all", label: "All sources" },
  { key: "x", label: "X" },
  { key: "tiktok", label: "TikTok" },
  { key: "ao3", label: "AO3" },
];

export default function AULibrary() {
  const [aus, setAus] = useState([]);
  const [tag, setTag] = useState("all");
  const [source, setSource] = useState("all");
  const [savedOnly, setSavedOnly] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isSaved, count: savedCount } = useBookmarks();

  useEffect(() => {
  api
    .get("/aus")
    .then((r) => setAus(r.data))
    .catch((err) => console.error("AU loading error:", err))
    .finally(() => setLoading(false));
}, []);
  const hiddenTags = new Set(["coffee shop", "fated", "headcanon", "music", "soft", "soulmate"]);
  const derivedTags = Array.from(new Set(aus.flatMap((a) => a.tags || []))).filter(
    (t) => !hiddenTags.has(t.toLowerCase())
  );
  const allTags = Array.from(new Set([...derivedTags, "18+"])).sort();
  const byTag = tag === "all" ? aus : aus.filter((a) => (a.tags || []).includes(tag));
  const bySaved = savedOnly ? byTag.filter((a) => isSaved(a.id)) : byTag;
  const visibleSources = source === "all" ? SOURCE_ORDER : [source];
  const grouped = visibleSources
    .map((s) => ({ key: s, items: bySaved.filter((a) => (a.source || "other") === s) }))
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
          <button
            data-testid="filter-saved"
            onClick={() => setSavedOnly((v) => !v)}
            className={`pill-btn flex items-center gap-2 rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
              savedOnly
                ? "bg-[color:var(--ink)] text-white"
                : "border border-[color:var(--line)] text-[color:var(--ink-soft)]"
            }`}
          >
            <Bookmark size={13} fill={savedOnly ? "currentColor" : "none"} />
            Saved{savedCount > 0 ? ` (${savedCount})` : ""}
          </button>
        </div>

        {/* Tag filters */}
        <div className="mt-4 flex flex-wrap items-center gap-3" data-testid="au-tag-filters">
          <button
            data-testid="tag-all"
            onClick={() => setTag("all")}
            className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
              tag === "all"
                ? "bg-[color:var(--ink)] text-white"
                : "border border-[color:var(--line)] text-[color:var(--ink-soft)]"
            }`}
          >
            All tags
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              data-testid={`tag-${t}`}
              onClick={() => setTag(t)}
              className={`pill-btn rounded-full px-5 py-2 text-xs uppercase tracking-widest ${
                tag === t
                  ? "bg-[color:var(--ink)] text-white"
                  : "border border-[color:var(--line)] text-[color:var(--ink-soft)]"
              }`}
            >
              {t}
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
            <p className="text-[color:var(--ink-soft)]" data-testid="au-empty">
              {savedOnly
                ? "No bookmarks yet — tap the 🔖 on any AU to save it here."
                : "No AUs here yet — be the first to submit one!"}
            </p>
          )}
          {grouped.map((group) => (
            <div key={group.key} data-testid={`section-${group.key}`}>
              <Reveal>
                <div className="mb-8 flex items-baseline gap-4">
                  <h2 className="font-serif-display text-4xl font-medium md:text-5xl">
  {SOURCES[group.key]?.full || group.key}
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
