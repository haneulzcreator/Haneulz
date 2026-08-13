import { Link } from "react-router-dom";
import { Edit3 } from "lucide-react";
import { DEFAULT_COVERS, SOURCES } from "../lib/api";
import BookmarkButton from "./BookmarkButton";
// Check whether an AU comes from AO3
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
  // AO3 CARD — COMPACT TEXT CARD
  // ============================================================
  if (isAo3) {
    return (
      <Link
        to={`/aus/${au.id}`}
        data-testid={`au-card-${au.id}`}
        className="group block"
      >
        <article className="glass relative overflow-hidden rounded-[1.25rem] border-l-4 border-l-[#900] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_-18px_rgba(243,174,203,0.6)]">
          {/* Top Row */}
          <div className="flex items-center justify-between gap-3">
            <span className="rounded-full bg-[#900]/10 px-2.5 py-1 text-[0.55rem] font-bold uppercase tracking-widest text-[#900]">
              {source.label || "AO3"}
            </span>
            <div
              className="flex items-center gap-2"
              onClick={(event) => event.preventDefault()}
            >
              {onEdit && (
                <button
                  type="button"
                  onClick={() => onEdit(au)}
                  className="flex items-center gap-1 text-[0.6rem] font-semibold text-[color:var(--pink-deep)] hover:underline"
                  title="Edit AU"
                >
                  <Edit3 size={12} />
                  Edit
                </button>
              )}
              <BookmarkButton
                id={au.id}
                title={au.title}
              />
            </div>
          </div>
          {/* Main Information */}
          <div className="mt-3">
            <h3 className="line-clamp-2 font-serif-display text-xl font-bold leading-tight text-[#900] transition-colors group-hover:underline">
              {au.title}
            </h3>
            <p className="mt-1 text-[0.65rem] text-[color:var(--ink-soft)]">
              by{" "}
              <span className="font-semibold text-black">
                {au.author || "Anonymous"}
              </span>
            </p>
            <p className="mt-2 line-clamp-2 rounded-lg bg-white/60 p-2.5 font-serif text-xs italic leading-relaxed text-neutral-700">
              {au.short_description ||
                au.summary ||
                au.description}
            </p>
            {/* Tags */}
            {au.tags?.length > 0 && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {au.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-rose-100 px-2 py-1 text-[0.5rem] font-medium uppercase tracking-wider text-rose-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      </Link>
    );
  }
  // ============================================================
  // STANDARD AU CARD — COVER LEFT / INFO RIGHT
  // ============================================================
  return (
    <Link
      to={`/aus/${au.id}`}
      data-testid={`au-card-${au.id}`}
      className="group block"
    >
      <article className="glass relative flex overflow-hidden rounded-[1.25rem] p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_-18px_rgba(243,174,203,0.6)]">
        {/* ====================================================
            COVER — LEFT
        ==================================================== */}
        <div className="relative w-[115px] shrink-0 overflow-hidden rounded-[1rem] sm:w-[135px] md:w-[150px]">
          <div className="h-full min-h-[155px] overflow-hidden">
            <img
              src={cover}
              alt={au.title}
              className="au-card-img h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          {/* Source */}
          <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-1 text-[0.5rem] font-medium uppercase tracking-widest backdrop-blur">
            {source.label}
          </span>
        </div>
        {/* ====================================================
            INFORMATION — RIGHT
        ==================================================== */}
        <div className="flex min-w-0 flex-1 flex-col justify-between px-3 py-1 sm:px-4">
          {/* Top */}
          <div>
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <span className="text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--ink-soft)]">
                  {au.au_type === "headcanon"
                    ? "Headcanon"
                    : "AU Story"}
                </span>
                <h3 className="mt-1 line-clamp-2 font-serif-display text-lg font-medium leading-tight sm:text-xl">
                  {au.title}
                </h3>
              </div>
              <div
                className="shrink-0"
                onClick={(event) => event.preventDefault()}
              >
                <BookmarkButton
                  id={au.id}
                  title={au.title}
                />
              </div>
            </div>
            {/* Author */}
            {au.author && (
              <p className="mt-1 text-[0.6rem] text-[color:var(--ink-soft)]">
                By {au.author}
              </p>
            )}
            {/* Description */}
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-[color:var(--ink-soft)]">
              {au.short_description ||
                au.summary ||
                au.description}
            </p>
          </div>
          {/* Bottom */}
          <div className="mt-3">
            <div className="flex items-end justify-between gap-2">
              {/* Tags */}
              <div className="flex min-w-0 flex-wrap gap-1.5">
                {au.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[color:var(--pink)] px-2 py-1 text-[0.5rem] uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Edit */}
              {onEdit && (
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    onEdit(au);
                  }}
                  className="flex shrink-0 items-center justify-center rounded-full bg-rose-100 p-2 text-[color:var(--pink-deep)] transition-colors hover:bg-rose-200"
                  title="Edit AU"
                >
                  <Edit3 size={12} />
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
