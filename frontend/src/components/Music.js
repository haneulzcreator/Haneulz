import React from "react";
import { ExternalLink, Music2, Sparkles, Heart } from "lucide-react";
const playlists = [
  {
    name: "HANEULZ",
    subtitle: "the little HANEULZ playlist",
    description:
      "a collection of songs that belong in the HANEULZ corner ♡",
    spotifyId: "4r1GQvpUW9XcmO228onLVs",
    accent: "blue",
    spotifyUrl:
      "https://open.spotify.com/playlist/4r1GQvpUW9XcmO228onLVs",
  },
  {
    name: "JL",
    subtitle: "JL's little playlist",
    description:
      "songs from JL's corner — little songs, little moments ♡",
    spotifyId: "4sglRRWWwqs2R0rR2OI2eA",
    accent: "pink",
    spotifyUrl:
      "https://open.spotify.com/playlist/4sglRRWWwqs2R0rR2OI2eA",
  },
  {
    name: "HAN",
    subtitle: "Han's little playlist",
    description:
      "songs from Han's corner — a little collection of favorites ♡",
    spotifyId: "0LKKI5awNILaSLr2kPGl3i",
    accent: "dark",
    spotifyUrl:
      "https://open.spotify.com/playlist/0LKKI5awNILaSLr2kPGl3i",
  },
];
export default function Music() {
  return (
    <main className="min-h-screen bg-[#f7fbff] px-4 py-8 text-[#465766] sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <header className="px-2 py-4 text-center">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.32em] text-[#7899b2]">
            HANEULZ MUSIC
          </p>
          <h1
            className="mt-3 text-5xl text-[#43586a] sm:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            little music corner
          </h1>
          <div className="mt-3 flex items-center justify-center gap-3 text-[#83a8c2]">
            <span>♡</span>
            <span className="text-xs">✦</span>
            <span>୨୧</span>
            <span className="text-xs">✦</span>
            <span>♡</span>
          </div>
          <p
            className="mx-auto mt-4 max-w-xl text-lg leading-8 text-[#718596]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            three little playlists living inside the HANEULZ
            corner — one for everyone, one for JL, and one for Han ♡
          </p>
        </header>
        {/* PLAYLISTS */}
        <div className="mt-10 space-y-10">
          {playlists.map((playlist, index) => (
            <PlaylistCard
              key={playlist.name}
              playlist={playlist}
              index={index}
            />
          ))}
        </div>
        {/* FOOTER */}
        <footer className="px-4 py-16 text-center">
          <div className="flex items-center justify-center gap-3 text-[#82a7c0]">
            <span>♡</span>
            <Music2 size={17} strokeWidth={1.3} />
            <span>୨୧</span>
            <Heart size={15} strokeWidth={1.3} />
            <span>♡</span>
          </div>
          <p
            className="mt-5 text-2xl text-[#678397]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            songs that feel like HANEULZ ♡
          </p>
          <p className="mt-2 text-xs tracking-[0.12em] text-[#9aafbd]">
            HANEULZ · JL · HAN
          </p>
        </footer>
      </div>
    </main>
  );
}
/* ============================================================
   PLAYLIST CARD
============================================================ */
function PlaylistCard({ playlist, index }) {
  const theme = getTheme(playlist.accent);
  return (
    <section
      className={`relative overflow-hidden rounded-[2rem] border ${theme.border} ${theme.background} p-5 shadow-[4px_5px_0_${theme.shadow}] sm:p-7`}
    >
      {/* decorative corner */}
      <div
        className={`pointer-events-none absolute right-6 top-5 text-lg ${theme.softText}`}
      >
        {playlist.accent === "dark" ? "🐈‍⬛" : "♡"}
      </div>
      <div
        className={`pointer-events-none absolute bottom-5 left-6 text-sm ${theme.softText}`}
      >
        ✦
      </div>
      {/* TOP */}
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full ${theme.iconBackground} ${theme.iconText}`}
            >
              <Music2
                size={18}
                strokeWidth={1.3}
              />
            </span>
            <div>
              <p className={`font-mono text-[8px] font-semibold uppercase tracking-[0.25em] ${theme.label}`}>
                playlist {String(index + 1).padStart(2, "0")}
              </p>
              <h2
                className={`mt-1 text-4xl ${theme.title}`}
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                {playlist.name}
              </h2>
            </div>
          </div>
          <p
            className={`mt-4 text-xl ${theme.subtitle}`}
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            {playlist.subtitle}
          </p>
          <p
            className={`mt-2 max-w-xl text-sm leading-6 ${theme.description}`}
          >
            {playlist.description}
          </p>
        </div>
        {/* SPOTIFY BUTTON */}
        <a
          href={playlist.spotifyUrl}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex w-fit items-center gap-2 rounded-full border px-5 py-2.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition hover:-translate-y-0.5 ${theme.button}`}
        >
          open Spotify
          <ExternalLink size={13} strokeWidth={1.5} />
        </a>
      </div>
      {/* SMALL DIVIDER */}
      <div className={`my-6 h-px ${theme.divider}`} />
      {/* SPOTIFY EMBED */}
      <div className="overflow-hidden rounded-[1.5rem] bg-black/5">
        <iframe
          title={`${playlist.name} Spotify playlist`}
          src={`https://open.spotify.com/embed/playlist/${playlist.spotifyId}?utm_source=generator`}
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="block w-full"
        />
      </div>
    </section>
  );
}
/* ============================================================
   THEMES
============================================================ */
function getTheme(accent) {
  if (accent === "pink") {
    return {
      border: "border-[#e7c5d2]",
      background: "bg-[#fff7fa]",
      shadow: "rgba(206,140,166,0.16)",
      iconBackground: "bg-[#f8e2eb]",
      iconText: "text-[#b76f89]",
      softText: "text-[#d49aae]",
      label: "text-[#a87588]",
      title: "text-[#624a56]",
      subtitle: "text-[#926479]",
      description: "text-[#75636b]",
      divider: "bg-[#efdce3]",
      button:
        "border-[#dfb8c7] bg-[#f8e7ee] text-[#8f5f73] hover:bg-[#f3dce5]",
    };
  }
  if (accent === "dark") {
    return {
      border: "border-[#d6dce1]",
      background: "bg-[#f8fafb]",
      shadow: "rgba(83,94,103,0.13)",
      iconBackground: "bg-[#e9edf0]",
      iconText: "text-[#53616c]",
      softText: "text-[#7e8a93]",
      label: "text-[#6f7c86]",
      title: "text-[#303a42]",
      subtitle: "text-[#596771]",
      description: "text-[#707c84]",
      divider: "bg-[#e1e5e8]",
      button:
        "border-[#c9d0d5] bg-[#edf0f2] text-[#53616c] hover:bg-[#e4e8eb]",
    };
  }
  return {
    border: "border-[#cfe0eb]",
    background: "bg-[#fafdff]",
    shadow: "rgba(112,154,181,0.14)",
    iconBackground: "bg-[#e6f2f9]",
    iconText: "text-[#6f99b5]",
    softText: "text-[#8fb1c7]",
    label: "text-[#7799b0]",
    title: "text-[#415d70]",
    subtitle: "text-[#62849a]",
    description: "text-[#718594]",
    divider: "bg-[#dceaf2]",
    button:
      "border-[#bdd4e2] bg-[#e9f4fa] text-[#62859b] hover:bg-[#dfedf5]",
  };
}
