import React from "react";
import { Music2, Sparkles, ExternalLink } from "lucide-react";
const playlists = [
  {
    id: "haneulz",
    title: "HANEULZ",
    description: "a little soundtrack for HANEULZ ♡",
    url: "https://open.spotify.com/playlist/4r1GQvpUW9XcmO228onLVs",
    embed:
      "https://open.spotify.com/embed/playlist/4r1GQvpUW9XcmO228onLVs?utm_source=generator",
    theme: "haneulz",
  },
  {
    id: "jl",
    title: "JL",
    description: "songs that feel a little like JL ♡",
    url: "https://open.spotify.com/playlist/4sglRRWWwqs2R0rR2OI2eA",
    embed:
      "https://open.spotify.com/embed/playlist/4sglRRWWwqs2R0rR2OI2eA?utm_source=generator",
    theme: "jl",
  },
  {
    id: "han",
    title: "HAN",
    description: "a playlist for Han ♡",
    url: "https://open.spotify.com/embed/playlist/0LKKI5awNILaSLr2kPGl3i",
    embed:
      "https://open.spotify.com/embed/playlist/0LKKI5awNILaSLr2kPGl3i?utm_source=generator",
    theme: "han",
  },
];
export default function Music() {
  return (
    <section className="relative overflow-hidden py-6">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* large soft blobs */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[color:var(--pink)] opacity-30 blur-[100px]" />
        <div className="absolute -right-40 top-[35%] h-[30rem] w-[30rem] rounded-full bg-[color:var(--blue)] opacity-25 blur-[110px]" />
        <div className="absolute left-[35%] top-[55%] h-80 w-80 rounded-full bg-[#e9d8e3] opacity-25 blur-[100px]" />
        {/* tiny floating decorations */}
        <span className="absolute left-[8%] top-[18%] text-xl text-[color:var(--pink-deep)] opacity-50">
          ✦
        </span>
        <span className="absolute right-[10%] top-[12%] text-2xl text-[color:var(--blue-deep)] opacity-40">
          ♡
        </span>
        <span className="absolute left-[14%] top-[55%] text-sm text-[color:var(--pink-deep)] opacity-40">
          ✧
        </span>
        <span className="absolute right-[13%] top-[65%] text-lg text-[color:var(--pink-deep)] opacity-40">
          ୨୧
        </span>
        <span className="absolute left-[48%] top-[32%] text-xs text-[color:var(--ink-soft)] opacity-30">
          ♫
        </span>
        <span className="absolute right-[38%] bottom-[8%] text-sm text-[color:var(--blue-deep)] opacity-30">
          ✦
        </span>
        {/* subtle grain/grid feeling */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>
      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[color:var(--line)]" />
          <div className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--line)] bg-white/60 shadow-sm backdrop-blur">
            <Music2
              size={15}
              strokeWidth={1.5}
              className="text-[color:var(--pink-deep)]"
            />
          </div>
          <span className="h-px w-12 bg-[color:var(--line)]" />
        </div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
          04 · little soundtracks
        </p>
        <h1 className="mt-4 font-serif-display text-6xl font-medium tracking-tight md:text-8xl">
          our music
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)]">
          Three playlists, three little corners of HANEULZ.
          <br />
          Put your headphones on and stay for a while ♡
        </p>
      </div>
      {/* =====================================================
          PLAYLIST SECTION
      ===================================================== */}
      <div className="relative mx-auto mt-16 max-w-6xl px-6">
        <div className="space-y-12">
          {playlists.map((playlist, index) => (
            <PlaylistSection
              key={playlist.id}
              playlist={playlist}
              index={index}
            />
          ))}
        </div>
      </div>
      {/* =====================================================
          BOTTOM NOTE
      ===================================================== */}
      <div className="relative mx-auto mt-16 max-w-xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-white/45 px-7 py-6 text-center shadow-sm backdrop-blur-md">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[color:var(--pink)] opacity-30 blur-2xl" />
          <Sparkles
            size={15}
            className="mx-auto text-[color:var(--pink-deep)]"
          />
          <p className="relative mt-3 font-serif-display text-xl">
            press play ♡
          </p>
          <p className="relative mt-2 text-xs leading-6 text-[color:var(--ink-soft)]">
            The playlists open directly in Spotify, so you can
            listen to the full songs and save your favorites there.
          </p>
        </div>
      </div>
    </section>
  );
}
/* =============================================================
   PLAYLIST SECTION
============================================================= */
function PlaylistSection({ playlist, index }) {
  const isJL = playlist.theme === "jl";
  const isHan = playlist.theme === "han";
  return (
    <div
      className={`
        group relative overflow-hidden rounded-[2.5rem]
        border border-white/60
        shadow-[0_25px_70px_rgba(60,45,60,0.10)]
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-1
        ${
          playlist.theme === "haneulz"
            ? "bg-gradient-to-br from-[#eef6f8]/90 via-white/65 to-[#f5dce7]/70"
            : ""
        }
        ${
          isJL
            ? "bg-gradient-to-br from-[#f6dce6]/90 via-white/70 to-[#e9d9e7]/80"
            : ""
        }
        ${
          isHan
            ? "bg-gradient-to-br from-[#29292f]/95 via-[#36353b]/95 to-[#19191d]/95"
            : ""
        }
      `}
    >
      {/* =====================================================
          GLOW
      ===================================================== */}
      <div
        className={`
          pointer-events-none absolute -right-20 -top-20
          h-64 w-64 rounded-full blur-[80px]
          transition duration-700
          group-hover:scale-125
          ${
            isHan
              ? "bg-white/10"
              : isJL
              ? "bg-[#e7a7bf]/35"
              : "bg-[#b8d8e6]/40"
          }
        `}
      />
      <div
        className={`
          pointer-events-none absolute -bottom-24 -left-20
          h-72 w-72 rounded-full blur-[90px]
          ${
            isHan
              ? "bg-[#b5a8b0]/10"
              : isJL
              ? "bg-[#f2c6d7]/35"
              : "bg-[#d9edf3]/45"
          }
        `}
      />
      {/* =====================================================
          TOP LABEL
      ===================================================== */}
      <div className="relative flex items-center justify-between px-6 pt-6 md:px-8">
        <div className="flex items-center gap-3">
          <span
            className={`
              h-2 w-2 rounded-full
              ${
                isHan
                  ? "bg-white/70"
                  : isJL
                  ? "bg-[#d58ca9]"
                  : "bg-[#8bb5c7]"
              }
            `}
          />
          <span
            className={`
              text-[9px] font-semibold uppercase tracking-[0.3em]
              ${
                isHan
                  ? "text-white/60"
                  : "text-[color:var(--ink-soft)]"
              }
            `}
          >
            playlist · {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <a
          href={playlist.url}
          target="_blank"
          rel="noreferrer"
          className={`
            flex items-center gap-2 rounded-full px-3 py-2
            text-[9px] uppercase tracking-[0.15em]
            transition
            ${
              isHan
                ? "bg-white/10 text-white/70 hover:bg-white/15"
                : "bg-white/55 text-[color:var(--ink-soft)] hover:bg-white"
            }
          `}
        >
          Spotify
          <ExternalLink size={11} />
        </a>
      </div>
      {/* =====================================================
          TITLE
      ===================================================== */}
      <div className="relative px-6 pb-5 pt-6 md:px-8">
        <h2
          className={`
            font-serif-display text-4xl font-medium md:text-5xl
            ${
              isHan
                ? "text-white"
                : "text-[color:var(--ink)]"
            }
          `}
        >
          {playlist.title}
        </h2>
        <p
          className={`
            mt-2 text-sm
            ${
              isHan
                ? "text-white/55"
                : "text-[color:var(--ink-soft)]"
            }
          `}
        >
          {playlist.description}
        </p>
      </div>
      {/* =====================================================
          SPOTIFY EMBED
      ===================================================== */}
      <div className="relative px-3 pb-3 md:px-5 md:pb-5">
        <div
          className={`
            overflow-hidden rounded-[1.75rem]
            shadow-[0_12px_35px_rgba(0,0,0,0.12)]
            ${
              isHan
                ? "ring-1 ring-white/10"
                : "ring-1 ring-black/[0.04]"
            }
          `}
        >
          <iframe
            title={`${playlist.title} Spotify Playlist`}
            src={playlist.embed}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block w-full"
          />
        </div>
      </div>
      {/* =====================================================
          DECORATIVE FOOTER
      ===================================================== */}
      <div className="relative flex items-center justify-between px-7 pb-6 pt-1 md:px-9">
        <span
          className={`
            font-serif-display text-sm
            ${
              isHan
                ? "text-white/35"
                : "text-[color:var(--ink-soft)]"
            }
          `}
        >
          made with love ♡
        </span>
        <span
          className={`
            text-xs
            ${
              isHan
                ? "text-white/30"
                : "text-[color:var(--pink-deep)]"
            }
          `}
        >
          ♫ ✦ ♡
        </span>
      </div>
    </div>
  );
}
