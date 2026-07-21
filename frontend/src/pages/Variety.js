import { useEffect, useState } from "react";
import { Play, Calendar, ListVideo, Clock, Youtube, Twitter, Music2, X, Users } from "lucide-react";
import { api, REAL, IMAGES } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const PLATFORM = {
  youtube: { label: "YouTube", Icon: Youtube },
  x: { label: "X", Icon: Twitter },
  tiktok: { label: "TikTok", Icon: Music2 },
};

  const PLAYLISTS = [
  {
    name: "📸💗 HANEULZ 💙🌩️",
    category: "haneulz",
    thumbnail: REAL.ahofGroup,
    description:
      "A collection of Yence posts, Han posts, HANEULZ DC updates, edits and fan moments.",
  },
  {
    name: "🐈‍⬛ Han Posts",
    category: "han-posts",
    thumbnail: IMAGES.cloudsSoft,
    description:
      "A collection of Han-related posts, updates and memorable moments.",
  },
  {
    name: "🎬 HANEULZ DC",
    category: "haneulz-dc",
    thumbnail: REAL.ahofGroup,
    description:
      "Fan edits, clips and community posts celebrating HANEULZ.",
  },
  {
    name: "AHOF's First Anniversary",
    url: "https://youtube.com/playlist?list=PLP3N6qHcYP90",
    thumbnail:
      "https://img.youtube.com/vi/roXu3mS4TOc/maxresdefault.jpg",
    description:
      "Celebrating AHOF's first anniversary with lives, messages and memories.",
  },
  {
    name: "AHOF's Music Videos",
    url: "https://youtube.com/playlist?list=PLLhA9zGDtnGQ",
    thumbnail:
      "https://img.youtube.com/vi/OhbMVYVNo40/maxresdefault.jpg",
    description:
      "Every AHOF music video in one place.",
  },
];

const DUETS = [
  {
    title: "'The Little Prince'",
    subtitle: "Universe League duet stage",
    videoId: "S5PG6lUSMHs",
  },
  {
    title: "'그대 작은 나의 세상이 되어'",
    subtitle: "Car, the garden cover · HAN & JL",
    videoId: "42uMYQV6YV0",
  },
];

export default function Variety() {
  const [shows, setShows] = useState([]);
  const [openPlaylist, setOpenPlaylist] = useState(null);
  const [playingDuet, setPlayingDuet] = useState(null);

  useEffect(() => {
  api.get("/variety")
    .then((r) => setShows(r.data))
    .catch(() => {});
}, []);

  return (
    <div
      className="min-h-screen pt-32"
      style={{
        background:
          "linear-gradient(180deg, rgba(248,216,232,0.55) 0%, var(--bg) 32%, rgba(181,216,235,0.28) 100%)",
      }}
    >
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">On screen together</p>
          <h1 className="mt-4 font-serif-display text-6xl font-medium leading-none md:text-8xl">
            Variety Corner
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Grab a comfort snack and watch HANEULZ with AHOF — every show, game and moment where
            JL & Han shared the screen, gathered in one cozy place.
          </p>
        </Reveal>

        {/* Their duets */}
        <div className="mt-14" data-testid="variety-duets">
          <Reveal>
            <div className="mb-8 flex items-baseline gap-4">
              <h2 className="font-serif-display text-4xl font-medium md:text-5xl">Their duets</h2>
              <span className="font-accent text-2xl italic text-[color:var(--pink-deep)]">2</span>
            </div>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {DUETS.map((d, i) => {
              const isPlaying = playingDuet === i;
              if (isPlaying) {
                return (
                  <Reveal key={d.title} delay={i * 0.08}>
                    <div className="overflow-hidden rounded-[2rem]" data-testid={`duet-${i}`}>
                      <div className="aspect-video">
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${d.videoId}?autoplay=1&rel=0`}
                          title={d.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          data-testid={`duet-iframe-${i}`}
                        />
                      </div>
                    </div>
                  </Reveal>
                );
              }
              return (
                <Reveal key={d.title} delay={i * 0.08}>
                  <button
                    type="button"
                    onClick={() => setPlayingDuet(i)}
                    data-testid={`duet-${i}`}
                    className="group relative block w-full overflow-hidden rounded-[2rem] text-left"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${d.videoId}/maxresdefault.jpg`}
                        alt={d.title}
                        className="au-card-img h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 grid place-items-center bg-black/20 transition-colors duration-500 group-hover:bg-black/35">
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-white/85 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                        <Play size={22} className="ml-1 text-[color:var(--ink)]" fill="currentColor" />
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white" style={{ background: "linear-gradient(180deg,transparent,rgba(15,23,42,0.6))" }}>
                      <span className="text-[0.65rem] uppercase tracking-widest">{d.subtitle}</span>
                      <h3 className="font-serif-display text-2xl font-medium leading-tight">{d.title}</h3>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Playlists */}
        <div className="mt-14 flex flex-col gap-16" data-testid="variety-playlists">
          {PLAYLISTS.map((p, i) => {
            const hasVideos = p.category || (p.videos && p.videos.length > 0);
            const media = (
              <>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.thumbnail}
                    alt={p.name}
                    className={`au-card-img h-full w-full object-cover object-top ${p.upcoming ? "opacity-80" : ""}`}
                  />
                </div>
                <div className="absolute inset-0 grid place-items-center bg-black/20 transition-colors duration-500 group-hover:bg-black/35">
                  {p.upcoming ? (
                    <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-widest text-[color:var(--ink)] backdrop-blur">
                      <Clock size={13} /> Coming soon
                    </span>
                  ) : (
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-white/85 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                      <Play size={22} className="ml-1 text-[color:var(--ink)]" fill="currentColor" />
                    </span>
                  )}
                </div>
              </>
            );
            const mediaClass = "group relative block w-full overflow-hidden rounded-[2.5rem] md:w-1/2";
            return (
              <div key={p.name} className="flex flex-col gap-16">
                {i === 1 && (
                  <Reveal>
                    <div
                      className="rounded-[2rem] border border-[color:var(--line)] p-8 md:p-10"
                      data-testid="whole-group-section"
                      style={{ background: "linear-gradient(135deg, rgba(181,216,235,0.35), rgba(248,216,232,0.25))" }}
                    >
                      <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--blue-deep)]">
                        <Users size={14} /> Now, the whole group
                      </span>
                      <h2 className="mt-3 font-serif-display text-4xl font-medium leading-tight md:text-5xl">
                        Beyond the duets — all of AHOF
                      </h2>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--ink-soft)]">
                        From here the spotlight widens to the whole group. These playlists celebrate
                        AHOF as nine — anniversaries, music videos and everything the boys do
                        together.
                      </p>
                    </div>
                  </Reveal>
                )}
                <Reveal delay={0.05}>
                <div className={`flex flex-col gap-8 md:flex-row md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  {p.upcoming ? (
                    <div data-testid={`variety-playlist-${i}`} className={mediaClass}>
                      {media}
                    </div>
                  ) : hasVideos ? (
                    <button
                      type="button"
                      onClick={() => setOpenPlaylist(p)}
                      data-testid={`variety-playlist-${i}`}
                      className={`${mediaClass} text-left`}
                    >
                      {media}
                    </button>
                  ) : (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`variety-playlist-${i}`}
                      className={mediaClass}
                    >
                      {media}
                    </a>
                  )}

                  <div className="md:w-1/2 md:px-8">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--blue-deep)]">
                      <ListVideo size={14} /> {p.upcoming ? "Upcoming playlist" : "Playlist"}
                    </span>
                    <h2 className="mt-3 font-serif-display text-4xl font-medium leading-tight md:text-5xl">
                      {p.name}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-soft)]">
                      {p.description}
                    </p>
                    {p.upcoming ? (
                      <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--pink)] px-4 py-2 text-xs uppercase tracking-widest">
                        <Clock size={13} /> Coming soon
                      </span>
                    ) : hasVideos ? (
                      <button
                        type="button"
                        onClick={() => setOpenPlaylist(p)}
                        data-testid={`variety-open-${i}`}
                        className="link-underline mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-widest"
                      >
                        See all videos →
                      </button>
                    ) : (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-widest"
                      >
                        View playlist →
                      </a>
                    )}
                  </div>
                </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col gap-16 pb-10">
          {shows.map((s, i) => (
            <Reveal key={s.id} delay={0.05}>
              <div className={`flex flex-col gap-8 md:flex-row md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <a
                  href={s.youtube_url || "#"}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`variety-clip-${s.id}`}
                  className="group relative block w-full overflow-hidden rounded-[2.5rem] md:w-1/2"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
  src={s.photo_url || IMAGES.cloudsPink}
  alt={s.show_name}
  className="au-card-img h-full w-full object-cover"
  loading="lazy"
/>
                  </div>
                  <div className="absolute inset-0 grid place-items-center bg-black/15 transition-colors duration-500 group-hover:bg-black/30">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-white/85 backdrop-blur transition-transform duration-500 group-hover:scale-110">
                      <Play size={22} className="ml-1 text-[color:var(--ink)]" fill="currentColor" />
                    </span>
                  </div>
                </a>

                <div className="md:w-1/2 md:px-8">
                  <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-[color:var(--blue-deep)]">
                    <Calendar size={13} /> {s.air_date}
                  </span>
                  <h2 className="mt-3 font-serif-display text-4xl font-medium leading-tight md:text-5xl">
                    {s.show_name}
                  </h2>
                  <p className="mt-2 text-lg italic text-[color:var(--ink-soft)]">Ep. {s.episode}</p>
                  <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-soft)]">
                    {s.description}
                  </p>
                  {s.youtube_url && (
                    <a
                      href={s.youtube_url}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-widest"
                    >
                      Watch the clip →
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Video collection modal */}
      {openPlaylist && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" data-testid="playlist-modal">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpenPlaylist(null)}
          />
          <div className="glass relative z-10 max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--blue-deep)]">
                  Playlist · {openPlaylist.videos.length} videos
                </span>
                <h3 className="font-serif-display text-3xl font-medium md:text-4xl">{openPlaylist.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setOpenPlaylist(null)}
                data-testid="close-playlist-modal"
                aria-label="Close"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[color:var(--line)] hover:bg-white/60"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {openPlaylist.videos.map((v, idx) => {
                const plat = PLATFORM[v.platform] || PLATFORM.youtube;
                const PlatIcon = plat.Icon;
                return (
                  <a
                    key={idx}
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`playlist-video-${idx}`}
                    className="group overflow-hidden rounded-[1.5rem] border border-[color:var(--line)] bg-white/50 transition-shadow duration-500 hover:shadow-[0_20px_44px_-24px_rgba(243,174,203,0.7)]"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img src={v.thumbnail} alt={v.title} className="au-card-img h-full w-full object-cover" />
                      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-widest backdrop-blur">
                        <PlatIcon size={12} /> {plat.label}
                      </span>
                      <div className="absolute inset-0 grid place-items-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90">
                          <Play size={16} className="ml-0.5 text-[color:var(--ink)]" fill="currentColor" />
                        </span>
                      </div>
                    </div>
                    <p className="p-4 text-sm font-medium">{v.title}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
