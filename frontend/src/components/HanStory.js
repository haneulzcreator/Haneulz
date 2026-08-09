import { useEffect, useState } from "react";
import { Film, Heart, Sparkles, Cat } from "lucide-react";
import { Reveal } from "./Reveal";

const BACKEND_URL = (process.env.REACT_APP_BACKEND_URL || "").replace(/\/$/, "");
const API = `${BACKEND_URL}/api`;

export default function HanStory() {
  const [movies, setMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      try {
        const response = await fetch(`${API}/han/movies`);

        if (!response.ok) {
          throw new Error("Failed to load movies");
        }

        const data = await response.json();
        setMovies(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load Han's movies:", error);
        setMovies([]);
      } finally {
        setLoadingMovies(false);
      }
    }

    loadMovies();
  }, []);

  return (
    <div className="space-y-10">

      {/* HAN HERO */}
      <Reveal>
        <section className="relative overflow-hidden rounded-[3rem] border border-blue-200/50 bg-gradient-to-br from-blue-50 via-white to-slate-100 p-8 md:p-14">

          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-slate-300/20 blur-3xl" />

          <div className="relative">

            <div className="flex items-center gap-3 text-blue-500">
              <Cat size={20} />

              <span className="text-xs uppercase tracking-[0.3em]">
                Han
              </span>
            </div>

            <h2 className="mt-6 font-serif-display text-5xl font-medium leading-tight text-slate-900 md:text-7xl">
              Han's
              <br />
              little corner
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
              A tiny collection of things that feel a little like Han —
              quiet moments, favorite things, and little pieces of his world.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-xs text-blue-600">
                soft blue
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-xs text-slate-600">
                quiet energy
              </span>

              <span className="rounded-full bg-white px-4 py-2 text-xs text-slate-600 shadow-sm">
                🐈‍⬛
              </span>

            </div>

          </div>
        </section>
      </Reveal>


      {/* ABOUT HAN */}
      <Reveal>
        <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">

          <div className="glass rounded-[2.5rem] p-8 md:p-10">

            <div className="flex items-center gap-2 text-blue-500">
              <Sparkles size={18} />

              <span className="text-xs uppercase tracking-[0.25em]">
                a little about han
              </span>
            </div>

            <h3 className="mt-5 font-serif-display text-4xl text-slate-900">
              quiet, but never boring.
            </h3>

            <p className="mt-5 leading-8 text-[color:var(--ink-soft)]">
              There's something about Han that feels calm and a little
              mysterious. Like a black cat sitting quietly in the corner,
              watching everything before deciding whether to join in.
            </p>

            <p className="mt-4 leading-8 text-[color:var(--ink-soft)]">
              This little space is for the softer details — the things he
              likes, the moments that remind us of him, and the tiny pieces
              that make Han feel like Han.
            </p>

          </div>


          <div className="rounded-[2.5rem] bg-blue-50 p-8 md:p-10">

            <Heart size={24} className="text-blue-400" />

            <p className="mt-6 font-serif-display text-3xl leading-snug text-slate-800">
              a little blue corner for our quiet cat.
            </p>

            <p className="mt-6 text-sm text-slate-500">
              made with love ♡
            </p>

          </div>

        </section>
      </Reveal>


      {/* MOVIE RECOMMENDATIONS */}
      <Reveal>
        <section className="overflow-hidden rounded-[2.75rem] border border-blue-100 bg-white p-8 md:p-10">

          <div className="flex items-center gap-2 text-blue-500">
            <Film size={19} />

            <span className="text-xs uppercase tracking-[0.28em]">
              han's picks
            </span>
          </div>

          <h3 className="mt-4 font-serif-display text-4xl text-slate-900 md:text-5xl">
            Movies he'd recommend
          </h3>

          <p className="mt-3 max-w-xl text-[color:var(--ink-soft)]">
            A little list of movies from Han's corner.
          </p>


          <div className="mt-8">

            {loadingMovies ? (

              <div className="rounded-3xl bg-blue-50 p-8 text-center text-sm text-slate-500">
                loading Han's picks...
              </div>

            ) : movies.length === 0 ? (

              <div className="rounded-3xl bg-blue-50 p-8 text-center">

                <Film size={24} className="mx-auto text-blue-400" />

                <p className="mt-4 text-sm text-slate-500">
                  No movie recommendations yet ♡
                </p>

              </div>

            ) : (

              <div className="grid gap-3 sm:grid-cols-2">

                {movies.map((movie, index) => (

                  <div
                    key={movie.id || index}
                    className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 px-5 py-4 transition hover:bg-blue-50"
                  >

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs text-blue-500 shadow-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-medium text-slate-800">
                      {movie.title}
                    </span>

                  </div>

                ))}

              </div>

            )}

          </div>

        </section>
      </Reveal>


      {/* FOOTNOTE */}
      <Reveal>
        <div className="pb-4 text-center">

          <p className="text-sm text-slate-400">
            a few little things from Han's world 🐈‍⬛
          </p>

        </div>
      </Reveal>

    </div>
  );
}
