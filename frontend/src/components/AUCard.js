import { Link } from "react-router-dom";
import { ExternalLink, Edit3 } from "lucide-react";
import { DEFAULT_COVERS, SOURCES } from "../lib/api";
import BookmarkButton from "./BookmarkButton";

// Helper to check if the link is from AO3
const isAo3Source = (au) => {
  const url = (au.source_url || au.link || "").toLowerCase();
  const sourceKey = (au.source || "").toLowerCase();

  return (
    sourceKey === "ao3" ||
    url.includes("archiveofourown.org")
  );
};

export default function AUCard({
  au,
  index = 0,
  onEdit,
}) {
  const isAo3 = isAo3Source(au);

  const cover =
    au.cover_image_url ||
    DEFAULT_COVERS[index % DEFAULT_COVERS.length];

  const source =
    SOURCES[au.source] || SOURCES.other;

  // ============================================================
  // AO3 CARD
  // ============================================================

  if (isAo3) {
    return (
      <div
        data-testid={`au-card-${au.id}`}
        className="group block h-full"
      >
        <article className="glass relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border-l-4 border-l-[#900] p-4 transition-shadow duration-500 hover:shadow-[0_20px_45px_-20px_rgba(243,174,203,0.6)]">

          <div>
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-2">
              <span className="rounded-full bg-[#900]/10 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-widest text-[#900]">
                {source.label || "AO3"}
              </span>

              <div className="flex items-center gap-2">
                {onEdit && (
                  <button
                    onClick={() => onEdit(au)}
                    className="flex items-center gap-1 text-[0.65rem] font-semibold text-[color:var(--pink-deep)] hover:underline"
                    title="Edit AU"
                  >
                    <Edit3 size={12} />
                    <span>Edit</span>
                  </button>
                )}

                <BookmarkButton
                  id={au.id}
                  title={au.title}
                />
              </div>
            </div>

            {/* Title */}
            <Link to={`/aus/${au.id}`}>
              <h3 className="mt-1 font-serif-display text-lg font-bold leading-tight text-[#900] hover:underline">
                {au.title}
              </h3>
            </Link>

            {/* Author */}
            <p className="mt-1 text-[0.65rem] font-medium text-[color:var(--ink-soft)]">
              by{" "}
              <span className="font-semibold text-black">
                {au.author || "Anonymous"}
              </span>
            </p>

            {/* Description */}
            <p className="mt-3 line-clamp-2 rounded-lg bg-white/60 p-2.5 font-serif text-xs italic leading-relaxed text-neutral-700">
              {au.short_description ||
                au.summary ||
                au.description}
            </p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {au.tags?.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-rose-100 px-2 py-1 text-[0.55rem] font-medium uppercase tracking-wider text-rose-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between gap-2 border-t border-rose-100 pt-3">

            <Link
              to={`/aus/${au.id}`}
              className="text-[0.65rem] uppercase tracking-widest text-[color:var(--ink-soft)] hover:underline"
            >
              Details
            </Link>

            <a
              href={
                au.source_url ||
                `/aus/${au.id}`
              }
              target={
                au.source_url
                  ? "_blank"
                  : "_self"
              }
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-[#900] px-3.5 py-2 text-[0.6rem] font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
            >
              <ExternalLink size={11} />
              Read
            </a>

          </div>
        </article>
      </div>
    );
  }

  // ============================================================
  // STANDARD AU CARD
  // ============================================================

  return (
    <div
      data-testid={`au-card-${au.id}`}
      className="group block h-full"
    >
      <article className="glass flex h-full flex-col overflow-hidden rounded-[1.5rem] p-2.5 transition-shadow duration-500 hover:shadow-[0_20px_45px_-20px_rgba(243,174,203,0.6)]">

        {/* Cover */}
        <Link to={`/aus/${au.id}`}>
          <div className="relative overflow-hidden rounded-[1.2rem]">

            {/* Source */}
            <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-white/85 px-2.5 py-1 text-[0.55rem] font-medium uppercase tracking-widest backdrop-blur">
              {source.label}
            </span>

            {/* Bookmark */}
            <div className="absolute right-2.5 top-2.5 z-10">
              <BookmarkButton
                id={au.id}
                title={au.title}
              />
            </div>

            {/* Image */}
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src={cover}
                alt={au.title}
                className="au-card-img h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-2 pb-1 pt-3">

            <div className="flex items-center justify-between gap-2">

              <span className="text-[0.6rem] uppercase tracking-widest text-[color:var(--ink-soft)]">
                {au.au_type === "headcanon"
                  ? "Headcanon"
                  : "AU Story"}
              </span>

              <span className="rounded-full bg-[color:var(--pink)] px-2.5 py-1.5 text-[0.55rem] uppercase tracking-widest">
                Read
              </span>

            </div>

            {/* Title */}
            <h3 className="mt-1.5 line-clamp-2 font-serif-display text-lg font-medium leading-tight">
              {au.title}
            </h3>

            {/* Author */}
            {au.author && (
              <p className="mt-1 text-[0.65rem] text-[color:var(--ink-soft)]">
                By {au.author}
              </p>
            )}

            {/* Description */}
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[color:var(--ink-soft)]">
              {au.short_description ||
                au.summary ||
                au.description}
            </p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {au.tags?.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[color:var(--pink)] px-2.5 py-1 text-[0.55rem] uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        </Link>

        {/* Bottom Actions */}
        <div className="mt-3 flex items-center gap-1.5">

          <a
            href={
              au.source_url ||
              `/aus/${au.id}`
            }
            target={
              au.source_url
                ? "_blank"
                : "_self"
            }
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[color:var(--pink-deep)] px-3.5 py-2 text-[0.6rem] uppercase tracking-widest text-white"
          >
            <ExternalLink size={11} />

            {au.source_url
              ? "Read Story"
              : "View AU"}
          </a>

          {onEdit && (
            <button
              onClick={() => onEdit(au)}
              className="flex items-center justify-center rounded-full bg-rose-100 p-2.5 text-[color:var(--pink-deep)] transition-colors hover:bg-rose-200"
              title="Edit AU"
            >
              <Edit3 size={13} />
            </button>
          )}

        </div>
      </article>
    </div>
  );
}
