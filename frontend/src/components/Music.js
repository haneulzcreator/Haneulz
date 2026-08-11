import React from "react";
import {
  ExternalLink,
  Heart,
  Music2,
  Play,
  Shuffle,
  MoreHorizontal,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

const playlists = [
  {
    id: "haneulz",
    title: "HANEULZ",
    subtitle: "a little soundtrack for us",
    note: "songs that feel very HANEULZ ♡",
    url: "https://open.spotify.com/playlist/4r1GQvpUW9XcmO228onLVs",
    embed:
      "https://open.spotify.com/embed/playlist/4r1GQvpUW9XcmO228onLVs?utm_source=generator",
    symbol: "☁",
    theme: "blue",
  },
  {
    id: "jl",
    title: "JL",
    subtitle: "songs that remind me of JL",
    note: "soft songs & little favorites ♡",
    url: "https://open.spotify.com/playlist/4sglRRWWwqs2R0rR2OI2eA",
    embed:
      "https://open.spotify.com/embed/playlist/4sglRRWWwqs2R0rR2OI2eA?utm_source=generator",
    symbol: "♡",
    theme: "pink",
  },
  {
    id: "han",
    title: "HAN",
    subtitle: "a playlist for Han",
    note: "a little darker, a little softer",
    url: "https://open.spotify.com/playlist/0LKKI5awNILaSLr2kPGl3i",
    embed:
      "https://open.spotify.com/embed/playlist/0LKKI5awNILaSLr2kPGl3i?utm_source=generator",
    symbol: "🐈‍⬛",
    theme: "dark",
  },
];

export default function Music() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] bg-[#f5f4f5] px-4 py-10 md:px-10 md:py-14">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#d9eaf2] opacity-70 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#f1d7e2] opacity-65 blur-3xl" />
        <div className="absolute bottom-[-180px] left-1/2 h-96 w-[32rem] -translate-x-1/2 rounded-full bg-[#e4e1ea] opacity-60 blur-3xl" />
      </div>

      {/* HEADER */}
      <div className="relative mx-auto max-w-3xl text-center">

        <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 shadow-sm backdrop-blur">
          <Music2
            size={17}
            strokeWidth={1.5}
            className="text-[#88aabb]"
          />
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#8a858b]">
          our little music room
        </p>

        <h2 className="mt-3 font-serif-display text-5xl font-medium tracking-tight text-[#29272a] md:text-6xl">
          songs we love
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#817b82]">
          A tiny corner for the songs, playlists, and little moments
          that belong here. Pick a playlist and press play ♡
        </p>

      </div>

      {/* PLAYLISTS */}
      <div className="relative mx-auto mt-14 max-w-5xl space-y-10">

        {playlists.map((playlist) => (
          <SpotifyPlaylist
            key={playlist.id}
            playlist={playlist}
          />
        ))}

      </div>

    </section>
  );
}

function SpotifyPlaylist({ playlist }) {

  const theme =
    playlist.theme === "blue"
      ? {
          panel: "bg-[#dcebf1]",
          cover: "from-[#a9cbd9] via-[#c8dfe7] to-[#efd9e3]",
          accent: "#739bab",
          button: "bg-[#739bab]",
          soft: "bg-white/55",
        }
      : playlist.theme === "pink"
      ? {
          panel: "bg-[#f0d9e2]",
          cover: "from-[#ddaabd] via-[#efd0dc] to-[#e8dfea]",
          accent: "#c9829b",
          button: "bg-[#c9829b]",
          soft: "bg-white/55",
        }
      : {
          panel: "bg-[#29292e]",
          cover: "from-[#17171b] via-[#35353b] to-[#77747a]",
          accent: "#a9a5ab",
          button: "bg-white",
          soft: "bg-white/10",
        };

  const dark = playlist.theme === "dark";

  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/65 shadow-[0_18px_45px_rgba(60,50,60,0.09)] backdrop-blur-xl">

      {/* SPOTIFY-STYLE HEADER */}
      <div className={`relative overflow-hidden ${theme.panel} p-6 md:p-8`}>

        {/* decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />

        <div className="relative flex flex-col gap-7 sm:flex-row sm:items-end">

          {/* COVER */}
          <div
            className={`relative flex h-44 w-44 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${theme.cover} shadow-xl`}
          >

            <span
              className={`text-6xl ${
                dark ? "text-white/90" : "text-white/80"
              }`}
            >
              {playlist.symbol}
            </span>

            {playlist.id === "han" && (
              <span className="absolute bottom-3 right-3 text-sm opacity-70">
                ♡
              </span>
            )}

            <span className="absolute left-3 top-3 text-xs text-white/50">
              ✦
            </span>

          </div>

          {/* INFO */}
          <div className="min-w-0">

            <p
              className={`text-[9px] font-semibold uppercase tracking-[0.3em] ${
                dark ? "text-white/50" : "text-[#777078]"
              }`}
            >
              playlist
            </p>

            <h3
              className={`mt-2 font-serif-display text-5xl font-medium ${
                dark ? "text-white" : "text-[#29272a]"
              }`}
            >
              {playlist.title}
            </h3>

            <p
              className={`mt-2 text-sm ${
                dark ? "text-white/60" : "text-[#777078]"
              }`}
            >
              {playlist.subtitle}
            </p>

            <p
              className={`mt-3 max-w-md text-xs leading-6 ${
                dark ? "text-white/50" : "text-[#817b82]"
              }`}
            >
              {playlist.note}
            </p>

          </div>

        </div>

      </div>

      {/* PLAYER CONTROLS */}
      <div className={dark ? "bg-[#242428] text-white" : "bg-white/80"}>

        <div className="flex items-center gap-4 px-6 py-5 md:px-8">

          <button
            type="button"
            className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${theme.button} ${
              dark ? "text-[#222]" : "text-white"
            } shadow-md transition hover:scale-105`}
          >
            <Play size={19} fill="currentColor" />
          </button>

          <button
            type="button"
            className="hidden sm:block"
          >
            <Shuffle
              size={17}
              className={dark ? "text-white/50" : "text-[#9a949a]"}
            />
          </button>

          <button
            type="button"
            className="hidden sm:block"
          >
            <SkipBack
              size={18}
              className={dark ? "text-white/50" : "text-[#9a949a]"}
            />
          </button>

          <button
            type="button"
            className="hidden sm:block"
          >
            <SkipForward
              size={18}
              className={dark ? "text-white/50" : "text-[#9a949a]"}
            />
          </button>

          <div className="ml-auto flex items-center gap-4">

            <Heart
              size={18}
              strokeWidth={1.5}
              className={dark ? "text-white/60" : "text-[#b38a98]"}
            />

            <MoreHorizontal
              size={19}
              className={dark ? "text-white/50" : "text-[#999399]"}
            />

          </div>

        </div>

        {/* PROGRESS BAR */}
        <div className="px-6 pb-5 md:px-8">

          <div
            className={`h-1 overflow-hidden rounded-full ${
              dark ? "bg-white/15" : "bg-[#ddd9dd]"
            }`}
          >
            <div
              className="h-full w-[28%] rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
          </div>

          <div className="mt-2 flex justify-between text-[9px] text-[#999399]">
            <span>0:00</span>
            <span>playlist</span>
            <span>—</span>
          </div>

        </div>

      </div>

      {/* SONG LIST AREA */}
      <div
        className={`px-6 py-6 md:px-8 ${
          dark ? "bg-[#242428]" : "bg-white/70"
        }`}
      >

        <div className="mb-4 flex items-center justify-between">

          <p
            className={`text-[9px] font-semibold uppercase tracking-[0.25em] ${
              dark ? "text-white/40" : "text-[#999399]"
            }`}
          >
            playlist preview
          </p>

          <a
            href={playlist.url}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] ${
              dark ? "text-white/60" : "text-[#817b82]"
            }`}
          >
            open Spotify
            <ExternalLink size={12} />
          </a>

        </div>

        {/* Spotify preview */}
        <div className="overflow-hidden rounded-2xl">
          <iframe
            title={`${playlist.title} Spotify playlist`}
            src={playlist.embed}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block w-full"
          />
        </div>

      </div>

      {/* BOTTOM PLAYER BAR */}
      <div
        className={`flex items-center gap-4 border-t px-5 py-4 ${
          dark
            ? "border-white/10 bg-[#1e1e22]"
            : "border-[#e9e4e8] bg-white/75"
        }`}
      >

        <div
          className={`grid h-9 w-9 place-items-center rounded-lg ${
            dark ? "bg-white/10" : "bg-[#eee9ed]"
          }`}
        >
          <Music2
            size={15}
            className={dark ? "text-white/50" : "text-[#999399]"}
          />
        </div>

        <div className="min-w-0 flex-1">

          <p
            className={`truncate text-xs font-medium ${
              dark ? "text-white/70" : "text-[#5e595f]"
            }`}
          >
            {playlist.title} playlist
          </p>

          <p
            className={`text-[9px] ${
              dark ? "text-white/35" : "text-[#a09aa0]"
            }`}
          >
            Open Spotify to listen
          </p>

        </div>

        <Volume2
          size={15}
          className={dark ? "text-white/35" : "text-[#aaa4aa]"}
        />

      </div>

    </article>
  );
}
