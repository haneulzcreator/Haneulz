import { useEffect, useState } from "react";
import { Play, Calendar } from "lucide-react";
import { api } from "../lib/api";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

export default function Variety() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    api.get("/variety").then((r) => setShows(r.data)).catch(() => {});
  }, []);

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">On screen together</p>
          <h1 className="mt-4 font-serif-display text-6xl font-medium leading-none md:text-8xl">
            Variety Corner
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Every show, episode and clip of AHOF where JL & Han shared the screen — collected for
            easy rewatching.
          </p>
        </Reveal>

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
          {shows.length === 0 && (
            <p className="text-[color:var(--ink-soft)]">Variety moments coming soon.</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
