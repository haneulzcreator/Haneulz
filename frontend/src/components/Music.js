import React from "react";
import { ExternalLink, Heart, Music2, Sparkles } from "lucide-react";

const playlists = [
  {
    id: "haneulz",
    title: "HANEULZ",
    subtitle: "a little soundtrack for us",
    note: "for the moments that feel very HANEULZ ♡",
    url: "https://open.spotify.com/playlist/4r1GQvpUW9XcmO228onLVs",
    symbol: "☁",
  },
  {
    id: "jl",
    title: "JL",
    subtitle: "songs that remind me of JL",
    note: "soft songs & little favorites ♡",
    url: "https://open.spotify.com/playlist/4sglRRWWwqs2R0rR2OI2eA",
    symbol: "♡",
  },
  {
    id: "han",
    title: "HAN",
    subtitle: "a playlist for Han",
    note: "with a tiny black cat somewhere 🐈‍⬛",
    url: "https://open.spotify.com/playlist/0LKKI5awNILaSLr2kPGl3i",
    symbol: "🐈‍⬛",
  },
];

export default function Music() {
  return (
    <section className="relative">

      {/* decorative background details */}
      <div className="pointer-events-none absolute -left-4 top-10 text-2xl text-[color:var(--pink-deep)] opacity-40">
        ✦
      </div>

      <div className="pointer-events-none absolute -right-3 top-32 text-xl text-[color:var(--blue-deep)] opacity-40">
        ♡
      </div>

      {/* HEADER */}
      <div className="mx-auto max-w-2xl text-center">

        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[color:var(--line)]" />

          <Music2
            size={16}
            strokeWidth={1.5}
            className="text-[color:var(--pink-deep)]"
          />

          <span className="h-px w-10 bg-[color:var(--line)]" />
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
          04 · little soundtracks
        </p>

        <h2 className="mt-3 font-serif-display text-5xl font-medium tracking-tight md:text-6xl">
          songs we love
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[color:var(--ink-soft)]">
          Three little playlists for three different kinds of moments.
          Pick one, press play, and stay for a while ♡
        </p>

      </div>

      {/* PLAYLISTS */}
      <div className="mx-auto mt-12 max-w-5xl">

        <div className="grid gap-6 md:grid-cols-3">

          {playlists.map((playlist, index) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              index={index}
            />
          ))}

        </div>

      </div>

      {/* LITTLE NOTE */}
      <div className="mx-auto mt-10 max-w-xl">

        <div className="relative rotate-[-1deg] rounded-2xl border border-[color:var(--line)] bg-white/60 px-6 py-5 text-center shadow-sm">

          <Sparkles
            size={15}
            className="absolute left-5 top-5 text-[color:var(--pink-deep)]"
          />

          <p className="font-serif-display text-lg text-[color:var(--ink)]">
            press a playlist ♡
          </p>

          <p className="mt-1 text-xs leading-6 text-[color:var(--ink-soft)]">
            Each one opens in Spotify, so you can listen to the
            full songs and save your favorites there.
          </p>

        </div>

      </div>

    </section>
  );
}

function PlaylistCard({ playlist, index }) {
  const rotations = [
    "rotate-[-1deg]",
    "rotate-[1deg]",
    "rotate-[-0.5deg]",
  ];

  return (
    <a
      href={playlist.url}
      target="_blank"
      rel="noreferrer"
      className={`group block ${rotations[index]}`}
    >

      <article className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/75 p-3 shadow-[0_8px_25px_rgba(70,50,60,0.07)] backdrop-blur-sm transition duration-300 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[0_15px_35px_rgba(70,50,60,0.12)]">

        {/* tape */}
        <div
          className={`absolute left-1/2 top-0 h-7 w-16 -translate-x-1/2 -translate-y-1 rotate-[-2deg] opacity-70 ${
            index === 0
              ? "bg-[#dceaf1]"
              : index === 1
              ? "bg-[#f1d3df]"
              : "bg-[#dedede]"
          }`}
        />

        {/* cover */}
        <div
          className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.5rem] ${
            index === 0
              ? "bg-gradient-to-br from-[#dcecf3] via-[#eef6f8] to-[#f5dfe7]"
              : index === 1
              ? "bg-gradient-to-br from-[#f3d8e3] via-[#fae9ef] to-[#e8dce9]"
              : "bg-gradient-to-br from-[#25252a] via-[#3b3a40] to-[#d8d2d5]"
          }`}
        >

          {/* tiny decorative marks */}
          <span className="absolute left-4 top-4 text-xs opacity-50">
            ✦
          </span>

          <span className="absolute right-5 bottom-4 text-sm opacity-50">
            ♡
          </span>

          <span className="absolute left-5 bottom-6 text-[10px] opacity-40">
            ୨୧
          </span>

          {/* main symbol */}
          <div
            className={`flex h-20 w-20 items-center justify-center rounded-full border ${
              index === 2
                ? "border-white/20 bg-white/10 text-white"
                : "border-white/70 bg-white/60 text-[color:var(--pink-deep)]"
            } text-3xl shadow-sm backdrop-blur-sm`}
          >
            {playlist.symbol}
          </div>

          {/* playlist label */}
          <div
            className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.2em] ${
              index === 2
                ? "bg-white/10 text-white"
                : "bg-white/70 text-[color:var(--ink-soft)]"
            }`}
          >
            playlist
          </div>

        </div>

        {/* info */}
        <div className="px-3 pb-3 pt-5">

          <div className="flex items-start justify-between gap-3">

            <div>
              <h3 className="font-serif-display text-3xl font-medium text-[color:var(--ink)]">
                {playlist.title}
              </h3>

              <p className="mt-1 text-xs text-[color:var(--ink-soft)]">
                {playlist.subtitle}
              </p>
            </div>

            <Heart
              size={16}
              strokeWidth={1.4}
              className="mt-1 text-[color:var(--pink-deep)] transition group-hover:scale-110"
            />

          </div>

          <p className="mt-4 border-t border-[color:var(--line)] pt-4 font-serif-display text-sm leading-6 text-[color:var(--ink-soft)]">
            {playlist.note}
          </p>

          {/* button */}
          <div className="mt-5 flex items-center justify-between rounded-full bg-[color:var(--cream)] px-4 py-3">

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink-soft)]">
              listen on Spotify
            </span>

            <ExternalLink
              size={13}
              className="text-[color:var(--ink)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />

          </div>

        </div>

      </article>

    </a>
  );
}
