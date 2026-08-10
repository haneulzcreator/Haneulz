import React from "react";
import { ExternalLink, Heart, Music2 } from "lucide-react";

const playlists = [
  {
    title: "HANEULZ",
    subtitle: "songs that feel like us ♡",
    url: "https://open.spotify.com/playlist/4r1GQvpUW9XcmO228onLVs",
    embed:
      "https://open.spotify.com/embed/playlist/4r1GQvpUW9XcmO228onLVs?utm_source=generator",
  },
  {
    title: "JL",
    subtitle: "a little playlist for JL ♡",
    url: "https://open.spotify.com/playlist/4sglRRWWwqs2R0rR2OI2eA",
    embed:
      "https://open.spotify.com/embed/playlist/4sglRRWWwqs2R0rR2OI2eA?utm_source=generator",
  },
  {
    title: "HAN",
    subtitle: "songs for Han 🐈‍⬛",
    url: "https://open.spotify.com/playlist/0LKKI5awNILaSLr2kPGl3i",
    embed:
      "https://open.spotify.com/embed/playlist/0LKKI5awNILaSLr2kPGl3i?utm_source=generator",
  },
];

export default function Music() {
  return (
    <div>
      <div className="mb-10 text-center">
        <div className="mx-auto flex w-fit items-center gap-2 text-[color:var(--pink-deep)]">
          <Music2 size={16} />
          <span className="text-xs uppercase tracking-[0.25em]">
            our playlists
          </span>
        </div>

        <h2 className="mt-4 font-serif-display text-5xl font-medium">
          songs we love
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[color:var(--ink-soft)]">
          A little collection of songs for HANEULZ, JL, and Han.
          Put your headphones on and stay awhile ♡
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {playlists.map((playlist) => (
          <div
            key={playlist.title}
            className="overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/70 p-3 shadow-[0_10px_30px_rgba(70,50,60,0.07)]"
          >
            <div className="relative mb-3 rounded-[1.5rem] bg-[color:var(--pink)] px-5 py-6">
              <Heart
                size={16}
                fill="currentColor"
                className="absolute right-5 top-5 text-[color:var(--pink-deep)]"
              />

              <p className="text-[9px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
                playlist
              </p>

              <h3 className="mt-2 font-serif-display text-3xl">
                {playlist.title}
              </h3>

              <p className="mt-1 text-xs text-[color:var(--ink-soft)]">
                {playlist.subtitle}
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.4rem]">
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

            <a
              href={playlist.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-3 text-xs uppercase tracking-[0.15em] text-[color:var(--ink-soft)] transition hover:bg-[color:var(--pink)]"
            >
              Open in Spotify
              <ExternalLink size={13} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
