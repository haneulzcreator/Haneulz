import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { DEFAULT_COVERS, SOURCES } from "../lib/api";

export default function AUCard({ au, index = 0 }) {
  const cover = au.cover_image_url || DEFAULT_COVERS[index % DEFAULT_COVERS.length];
  const source = SOURCES[au.source] || SOURCES.other;
  return (
    <Link
      to={`/aus/${au.id}`}
      data-testid={`au-card-${au.id}`}
      className="group block"
    >
      <article className="glass overflow-hidden rounded-[2rem] p-3 transition-shadow duration-500 hover:shadow-[0_28px_60px_-24px_rgba(243,174,203,0.6)]">
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white/85 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-widest backdrop-blur">
            {source.label}
          </span>
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
              {au.au_type === "headcanon" ? "Headcanon" : "AU Story"}
            </span>
            <span className="flex items-center gap-1 text-xs text-[color:var(--pink-deep)]">
              <Heart size={13} fill="currentColor" /> {au.likes}
            </span>
          </div>
          <h3 className="mt-2 font-serif-display text-2xl font-medium leading-tight">{au.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
            {au.short_description}
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
      </article>
    </Link>
  );
}
