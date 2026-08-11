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
    note: "a little darker, a little softer ♡",
    url: "https://open.spotify.com/playlist/0LKKI5awNILaSLr2kPGl3i",
    symbol: "🐈‍⬛",
  },
];

export default function Music() {
  return (
    <section className="relative overflow-hidden rounded-[3rem] px-4 py-10 md:px-10 md:py-14">

      {/* DREAMY BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[3rem] bg-[#f7f5f8]">

        {/* soft blue glow */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#dcecf5] opacity-70 blur-3xl" />

        {/* soft pink glow */}
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#f4dce7] opacity-65 blur-3xl" />

        {/* subtle bottom glow */}
        <div className="absolute bottom-[-120px] left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-[#e8e4f1] opacity-50 blur-3xl" />

        {/* tiny stars */}
        <span className="absolute left-[8%] top-[18%] text-sm text-[#9ab8c8] opacity-50">
          ✦
        </span>

        <span className="absolute right-[9%] top-[12%] text-xs text-[#d79aae] opacity-50">
          ✧
        </span>

        <span className="absolute left-[4%] bottom-[18%] text-xs text-[#d79aae] opacity-40">
          ୨୧
        </span>

        <span className="absolute right-[5%] bottom-[22%] text-sm text-[#9ab8c8] opacity-40">
          ♡
        </span>

        {/* subtle cloud shapes */}
        <div className="absolute left-[-20px] top-[45%] h-16 w-28 rounded-full bg-white/50 blur-xl" />
        <div className="absolute right-[-20px] bottom-[35%] h-20 w-32 rounded-full bg-white/50 blur-xl" />

      </div>

      {/* HEADER */}
      <div className="relative mx-auto max-w-2xl text-center">

        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#d8d1d8]" />

          <div className="grid h-8 w-8 place-items-center rounded-full bg-white/70 shadow-sm">
            <Music2
              size={15}
              strokeWidth={1.5}
              className="text-[#9ab8c8]"
            />
          </div>

          <span className="h-px w-12 bg-[#d8d1d8]" />
        </div>

        <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#8d858e]">
          little soundtracks
        </p>

        <h2 className="mt-3 font-serif-display text-5xl font-medium tracking-tight text-[#29262a] md:text-6xl">
          songs we love
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#827b83]">
          Three little playlists, each with its own mood.
          <br className="hidden md:block" />
          Pick one and stay for a while ♡
        </p>

      </div>

      {/* PLAYLISTS */}
      <div className="relative mx-auto mt-12 max-w-5xl">

        <div className="grid gap-7 md:grid-cols-3">

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
      <div className="relative mx-auto mt-12 max-w-xl">

        <div className="relative rounded-[1.75rem] border border-white/80 bg-white/55 px-6 py-6 text-center shadow-[0_10px_30px_rgba(70,50,60,0.05)] backdrop-blur-md">

          <Sparkles
            size={14}
            className="absolute left-6 top-6 text-[#d79aae]"
          />

          <p className="font-serif-display text-lg text-[#29262a]">
            press a playlist ♡
          </p>

          <p className="mx-auto mt-2 max-w-sm text-xs leading-6 text-[#827b83]">
            Each playlist opens in Spotify, where you can listen
            to the full songs and save your favorites.
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

  const coverStyles = [
    "bg-gradient-to-br from-[#d8ebf4] via-[#edf5f7] to-[#f3dfe8]",
    "bg-gradient-to-br from-[#f0cbd9] via-[#fae2eb] to-[#e9d8e7]",
    "bg-gradient-to-br from-[#25252a] via-[#35343a] to-[#8d878c]",
  ];

  return (
    <a
      href={playlist.url}
      target="_blank"
      rel="noreferrer"
      className={`group block ${rotations[index]}`}
    >

      <article className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-3 shadow-[0_10px_30px_rgba(70,50,60,0.07)] backdrop-blur-md transition duration-300 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-[0_18px_40px_rgba(70,50,60,0.13)]">

        {/* little paper tape */}
        <div
          className={`absolute left-1/2 top-0 z-10 h-7 w-16 -translate-x-1/2 -translate-y-1 rotate-[-2deg] opacity-70 ${
            index === 0
              ? "bg-[#c9e0eb]"
              : index === 1
              ? "bg-[#edb9cb]"
              : "bg-[#d1ced1]"
          }`}
        />

        {/* COVER */}
        <div
          className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.5rem] ${coverStyles[index]}`}
        >

          {/* subtle glow */}
          <div className="absolute inset-0 bg-white/10" />

          {/* decorative details */}

          {index === 0 && (
            <>
              <span className="absolute left-5 top-5 text-sm text-white/70">
                ☁
              </span>

              <span className="absolute right-5 top-8 text-xs text-white/70">
                ✦
              </span>

              <span className="absolute bottom-5 left-7 text-xs text-white/60">
                ୨୧
              </span>
            </>
          )}

          {index === 1 && (
            <>
              <span className="absolute left-5 top-5 text-sm text-white/75">
                ♡
              </span>

              <span className="absolute right-6 top-6 text-xs text-white/70">
                ✧
              </span>

              <span className="absolute bottom-5 left-6 text-xs text-white/60">
                ୨୧
              </span>
            </>
          )}

          {index === 2 && (
            <>
              <span className="absolute left-5 top-5 text-xs text-white/40">
                ✦
              </span>

              <span className="absolute right-5 top-5 text-sm text-white/45">
                ·
              </span>

              <span className="absolute bottom-5 right-6 text-xs text-white/35">
                ♡
              </span>
            </>
          )}

          {/* MAIN SYMBOL */}
          <div
            className={`relative flex h-24 w-24 items-center justify-center rounded-full border text-4xl shadow-lg backdrop-blur-md transition duration-300 group-hover:scale-105 ${
              index === 2
                ? "border-white/15 bg-black/15 text-white"
                : index === 1
                ? "border-white/70 bg-white/55 text-[#d1849d]"
                : "border-white/70 bg-white/55 text-[#91b3c4]"
            }`}
          >
            {playlist.symbol}
          </div>

          {/* playlist label */}
          <div
            className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md ${
              index === 2
                ? "bg-black/20 text-white/75"
                : "bg-white/65 text-[#777078]"
            }`}
          >
            playlist
          </div>

        </div>

        {/* INFO */}
        <div className="px-3 pb-3 pt-5">

          <div className="flex items-start justify-between gap-3">

            <div>
              <h3 className="font-serif-display text-3xl font-medium text-[#29262a]">
                {playlist.title}
              </h3>

              <p className="mt-1 text-xs text-[#827b83]">
                {playlist.subtitle}
              </p>
            </div>

            <Heart
              size={16}
              strokeWidth={1.4}
              className={`mt-1 transition group-hover:scale-110 ${
                index === 1
                  ? "text-[#d1849d]"
                  : "text-[#9ab8c8]"
              }`}
            />

          </div>

          <p className="mt-4 border-t border-[#e6e0e5] pt-4 font-serif-display text-sm leading-6 text-[#827b83]">
            {playlist.note}
          </p>

          {/* BUTTON */}
          <div
            className={`mt-5 flex items-center justify-between rounded-full px-4 py-3 transition ${
              index === 0
                ? "bg-[#edf5f8] group-hover:bg-[#e1eff4]"
                : index === 1
                ? "bg-[#f9e8ee] group-hover:bg-[#f5dce5]"
                : "bg-[#efedef] group-hover:bg-[#e5e2e5]"
            }`}
          >

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#827b83]">
              listen on Spotify
            </span>

            <ExternalLink
              size={13}
              className="text-[#4d484e] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />

          </div>

        </div>

      </article>

    </a>
  );
}
