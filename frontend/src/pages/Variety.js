import { useEffect, useState } from "react";
import { Play, Calendar, ListVideo, Clock } from "lucide-react";
import { api, REAL, IMAGES } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const PLAYLISTS = [
  {
    name: "Watch HANEULZ with AHOF",
    url: "https://youtube.com/playlist?list=PLP3N6qHcYP90",
    thumbnail: REAL.ahofGroup,
    description:
      "The main playlist — every show, game and soft moment where JL & Han shared the screen, all in one place.",
  },
  {
    name: "AHOF's First Anniversary",
    url: "https://youtube.com/playlist?list=PLP3N6qHcYP90",
    thumbnail: IMAGES.cloudsPink,
    description:
      "One year since AHOF debuted on July 1, 2025 with 'Who We Are.' A celebration playlist for the group's very first anniversary — anniversary lives, fan projects and the sweetest HANEULZ moments. 🎂",
  },
  {
    name: "AHOF's Music Videos",
    thumbnail: IMAGES.cloudsSoft,
    upcoming: true,
    description:
      "All of AHOF's music videos gathered in one place — every comeback, B-side and special MV. Coming soon. 🎬",
  },
];

export default function Variety() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    api.get("/variety").then((r) => setShows(r.data)).catch(() => {});
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

        {/* Playlists */}
        <div className="mt-14 flex flex-col gap-16" data-testid="variety-playlists">
          {PLAYLISTS.map((p, i) => {
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
            return (
              <Reveal key={p.name} delay={0.05}>
                <div className={`flex flex-col gap-8 md:flex-row md:items-center ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                  {p.upcoming ? (
                    <div
                      data-testid={`variety-playlist-${i}`}
                      className="group relative block w-full overflow-hidden rounded-[2.5rem] md:w-1/2"
                    >
                      {media}
                    </div>
                  ) : (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`variety-playlist-${i}`}
                      className="group relative block w-full overflow-hidden rounded-[2.5rem] md:w-1/2"
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
                      src={s.photo_url}
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
      <Footer />
    </div>
  );
}
