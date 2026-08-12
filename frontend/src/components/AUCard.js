import { Link } from "react-router-dom";
import { ExternalLink, Edit3 } from "lucide-react";
import { DEFAULT_COVERS, SOURCES } from "../lib/api";
import BookmarkButton from "./BookmarkButton";

// Helper to check if the link is from AO3
const isAo3Source = (au) => {
  const url = (au.source_url || au.link || "").toLowerCase();
  const sourceKey = (au.source || "").toLowerCase();
  return sourceKey === "ao3" || url.includes("archiveofourown.org");
};

export default function AUCard({ au, index = 0, onEdit }) {
  const isAo3 = isAo3Source(au);
  const cover =
    au.cover_image_url ||
    DEFAULT_COVERS[index % DEFAULT_COVERS.length];

  const source = SOURCES[au.source] || SOURCES.other;

  // -------------------------------------------------------------
  // 1. AO3-STYLE CARD LAYOUT (No thumbnail image required)
  // -------------------------------------------------------------
  if (isAo3) {
    return (
      <div data-testid={`au-card-${au.id}`} className="group block h-full">
        <article className="glass relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border-l-8 border-l-[#900] p-6 transition-shadow duration-500 hover:shadow-[0_28px_60px_-24px_rgba(243,174,203,0.6)]">
          <div>
            {/* Top Bar: Source Label + Bookmark & Edit */}
            <div className="flex items-center justify-between pb-3">
              <span className="rounded-full bg-[#900]/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-[#900]">
                {source.label || "AO3"}
              </span>

              <div className="flex items-center gap-2">
                {onEdit && (
                  <button
                    onClick={() => onEdit(au)}
                    className="flex items-center gap-1 text-xs font-semibold text-[color:var(--pink-deep)] hover:underline"
                    title="Edit AU"
                  >
                    <Edit3 size={14} />
                    <span>Edit</span>
                  </button>
                )}
                <BookmarkButton id={au.id} title={au.title} />
              </div>
            </div>

            {/* Title & Author */}
            <Link to={`/aus/${au.id}`}>
              <h3 className="mt-2 font-serif-display text-2xl font-bold leading-tight text-[#900] hover:underline">
                {au.title}
              </h3>
            </Link>

            <p className="mt-1 text-xs font-medium text-[color:var(--ink-soft)]">
              by{" "}
              <span className="font-semibold text-black">
                {au.author || "Anonymous"}
              </span>
            </p>

            {/* Summary / Description */}
            <p className="mt-4 line-clamp-4 rounded-xl bg-white/60 p-3 font-serif text-sm italic leading-relaxed text-neutral-700">
              {au.short_description || au.summary || au.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {au.tags?.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-rose-100 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-rose-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-rose-100 pt-4">
            <Link
              to={`/aus/${au.id}`}
              className="text-xs uppercase tracking-widest text-[color:var(--ink-soft)] hover:underline"
            >
              Details
            </Link>

            <a
              href={au.source_url || `/aus/${au.id}`}
              target={au.source_url ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#900] px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            >
              <ExternalLink size={13} />
              Read on AO3
            </a>
          </div>
        </article>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. STANDARD CARD LAYOUT WITH CUSTOM THUMBNAIL / COVER
  // -------------------------------------------------------------
  return (
    <div data-testid={`au-card-${au.id}`} className="group block">
      <article className="glass overflow-hidden rounded-[2rem] p-3 transition-shadow duration-500 hover:shadow-[0_28px_60px_-24px_rgba(243,174,203,0.6)]">
        <Link to={`/aus/${au.id}`}>
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <span className="absolute left-3 top-3 z-10 rounded-full bg-white/85 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-widest backdrop-blur">
              {source.label}
            </span>

            <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
              <BookmarkButton id={au.id} title={au.title} />
            </div>

            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={cover}
                alt={au.title}
                className="au-card-img h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="px-3 pb-2 pt-5">
            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] uppercase tracking-widest text-[color:var(--ink-soft)]">
                {au.au_type === "headcanon"
                  ? "Headcanon"
                  : "AU Story"}
              </span>

              <span className="rounded-full bg-[color:var(--pink)] px-4 py-2 text-[0.65rem] uppercase tracking-widest">
                Read
              </span>
            </div>

            <h3 className="mt-2 font-serif-display text-2xl font-medium leading-tight">
              {au.title}
            </h3>

            {au.author && (
              <p className="mt-1 text-xs text-[color:var(--ink-soft)]">
                By {au.author}
              </p>
            )}

            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
              {au.short_description || au.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {au.tags?.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[color:var(--pink)] px-3 py-1 text-[0.65rem] uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Bottom Actions */}
        <div className="mt-4 flex items-center gap-2">
          <a
            href={au.source_url || `/aus/${au.id}`}
            target={au.source_url ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[color:var(--pink-deep)] px-5 py-3 text-xs uppercase tracking-widest text-white"
          >
            <ExternalLink size={13} />
            {au.source_url ? "Read Story" : "View AU"}
          </a>

          {onEdit && (
            <button
              onClick={() => onEdit(au)}
              className="flex items-center justify-center rounded-full bg-rose-100 p-3 text-[color:var(--pink-deep)] transition-colors hover:bg-rose-200"
              title="Edit AU"
            >
              <Edit3 size={15} />
            </button>
          )}
        </div>
      </article>
    </div>
  );
}
