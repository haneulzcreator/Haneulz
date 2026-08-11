import React from "react";
import { Music2, Heart, ExternalLink } from "lucide-react";

const playlists = [
  {
    id: "haneulz",
    title: "HANEULZ",
    subtitle: "our little soundtrack",
    description: "songs that feel a little bit like HANEULZ ♡",
    url: "https://open.spotify.com/playlist/4r1GQvpUW9XcmO228onLVs",
    embed:
      "https://open.spotify.com/embed/playlist/4r1GQvpUW9XcmO228onLVs?utm_source=generator",
    theme: "blue",
    decoration: "☁️",
  },
  {
    id: "jl",
    title: "JL",
    subtitle: "JL's playlist",
    description: "a few songs for our favorite moments ♡",
    url: "https://open.spotify.com/playlist/4sglRRWWwqs2R0rR2OI2eA",
    embed:
      "https://open.spotify.com/embed/playlist/4sglRRWWwqs2R0rR2OI2eA?utm_source=generator",
    theme: "pink",
    decoration: "♡",
  },
  {
    id: "han",
    title: "HAN",
    subtitle: "Han's playlist",
    description: "with a tiny black cat somewhere 🐈‍⬛",
    url: "https://open.spotify.com/playlist/0LKKI5awNILaSLr2kPGl3i",
    embed:
      "https://open.spotify.com/embed/playlist/0LKKI5awNILaSLr2kPGl3i?utm_source=generator",
    theme: "black",
    decoration: "🐈‍⬛",
  },
];

export default function Music() {
  return (
    <div className="relative">

      {/* HEADER */}
      <div className="mx-auto max-w-2xl text-center">

        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[color:var(--line)]" />

          <Music2
            size={17}
            strokeWidth={1.5}
            className="text-[color:var(--pink-deep)]"
          />

          <span className="h-px w-10 bg-[color:var(--line)]" />
        </div>

        <p className="text-[9px] uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
          our little soundtrack
        </p>

        <h2 className="mt-3 font-serif-display text-5xl font-medium md:text-6xl">
          music corner
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[color:var(--ink-soft)]">
          A few playlists we made for the moments, memories, and
          people that make this little corner special ♡
        </p>

      </div>

      {/* PLAYLIST SECTIONS */}
      <div className="mx-auto mt-12 max-w-4xl space-y-10">

        {playlists.map((playlist) => (
          <PlaylistPreview
            key={playlist.id}
            playlist={playlist}
          />
        ))}

      </div>

    </div>
  );
}

function PlaylistPreview({ playlist }) {

  const themeClasses = {
    blue: {
      wrapper: "bg-[#edf5f8]",
      accent: "text-[#6c9bab]",
      border: "border-[#d5e7ed]",
    },
    pink: {
      wrapper: "bg-[#faedf2]",
      accent: "text-[#c9829c]",
      border: "border-[#efd5df]",
    },
    black: {
      wrapper: "bg-[#f1f0f1]",
      accent: "text-[#3d3b40]",
      border: "border-[#dedcdf]",
    },
  };

  const theme = themeClasses[playlist.theme];

  return (
    <article
      className={`overflow-hidden rounded-[2.5rem] border ${theme.border} ${theme.wrapper} p-4 shadow-[0_10px_30px_rgba(70,50,60,0.06)]`}
    >

      {/* playlist heading */}
      <div className="flex items-center justify-between px-3 py-3">

        <div className="flex items-center gap-4">

          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-xl shadow-sm ${theme.accent}`}
          >
            {playlist.decoration}
          </div>

          <div>
            <p
              className={`text-[9px] uppercase tracking-[0.25em] ${theme.accent}`}
            >
              playlist
            </p>

            <h3 className="font-serif-display text-3xl font-medium">
              {playlist.title}
            </h3>

            <p className="mt-0.5 text-xs text-[color:var(--ink-soft)]">
              {playlist.description}
            </p>
          </div>

        </div>

        <Heart
          size={17}
          strokeWidth={1.5}
          className={theme.accent}
        />

      </div>

      {/* REAL SPOTIFY PREVIEW */}
      <div className="mt-3 overflow-hidden rounded-[1.8rem] bg-black/5">

        <iframe
          title={`${playlist.title} Spotify playlist`}
          src={playlist.embed}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />

      </div>

      {/* OPEN SPOTIFY */}
      <div className="flex items-center justify-between px-3 pb-1 pt-4">

        <span className="text-[9px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
          listen to the full playlist
        </span>

        <a
          href={playlist.url}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-[9px] uppercase tracking-[0.15em] transition hover:bg-white ${theme.accent}`}
        >
          Spotify
          <ExternalLink size={12} />
        </a>

      </div>

    </article>
  );
}
