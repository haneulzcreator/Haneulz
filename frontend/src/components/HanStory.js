import React, { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";
export default function HanStory() {
  const [showArchive, setShowArchive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  /* =========================================================
     HAN INFORMATION
     ========================================================= */
  const profile = {
    fullName: "Han",
    knownAs: "HAN",
    nicknames: "Add later",
    birthday: "Add later",
    nationality: "Add later",
    hobbies: "Add later",
    interests: "Add later",
    favorites: "Add later",
    mbti: "Add later",
  };
  /* =========================================================
     FUN FACTS
     ========================================================= */
  const facts = [
    "Add Han's first fun fact here.",
    "Add another interesting fact about Han here.",
    "Add a funny or memorable Han detail here.",
    "Add another little thing about Han here.",
    "Add another fact whenever you want.",
  ];
  /* =========================================================
     PHOTO ARCHIVE
     
     Add as many photos as you want.
     
     src:
       Image URL.
     
     postUrl:
       Original post URL.
       Clicking the image opens the original post.
     
     NEWEST PHOTO = FIRST ITEM
     ========================================================= */
  const photos = [
    {
      src: "",
      alt: "Han photo 01",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 02",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 03",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 04",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 05",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 06",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 07",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 08",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 09",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 10",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 11",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 12",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 13",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 14",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 15",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 16",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 17",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 18",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 19",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 20",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 21",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 22",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 23",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 24",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 25",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 26",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 27",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 28",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 29",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 30",
      postUrl: "",
    },
  ];
  /* =========================================================
     PAGINATION
     ========================================================= */
  const PHOTOS_PER_PAGE = 25;
  const totalPages = Math.max(
    1,
    Math.ceil(photos.length / PHOTOS_PER_PAGE)
  );
  /*
    IMPORTANT:
    The photos array is intentionally kept outside the component
    in production if you later move it to a data file.
    For now, useMemo keeps the visible page calculation stable
    and avoids the ESLint dependency warning.
  */
  const visiblePhotos = useMemo(() => {
    const start =
      (currentPage - 1) * PHOTOS_PER_PAGE;
    return photos.slice(
      start,
      start + PHOTOS_PER_PAGE
    );
  }, [currentPage]);
  const goToPage = (page) => {
    setCurrentPage(page);
    window.requestAnimationFrame(() => {
      const archive =
        document.getElementById("han-photo-archive");
      if (archive) {
        archive.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  };
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        rounded-[3rem]
        bg-gradient-to-br
        from-[#f5f9ff]
        via-[#edf5fc]
        to-[#e3eef8]
        text-[#3f4b59]
      "
    >
      {/* =====================================================
          SOFT BLUE BACKGROUND
          ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-32 h-[500px] w-[500px] rounded-full bg-[#d9e9f8]/60 blur-[110px]" />
        <div className="absolute -right-40 top-[18%] h-[500px] w-[500px] rounded-full bg-[#dfe8f5]/70 blur-[110px]" />
        <div className="absolute -left-40 top-[45%] h-[560px] w-[560px] rounded-full bg-[#e9e2f0]/55 blur-[120px]" />
        <div className="absolute -right-40 top-[72%] h-[600px] w-[600px] rounded-full bg-[#d8eaf3]/60 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#526171 0.6px, transparent 0.6px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>
      {/* =====================================================
          COVER
          ===================================================== */}
      <section className="relative min-h-[850px] px-6 pb-24 pt-8 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[8px] tracking-[0.45em] text-[#7089a0]">
              HANEULZ
            </span>
            <span className="h-px w-8 bg-[#b9cad9]" />
            <span className="font-mono text-[7px] tracking-[0.4em] text-[#8a98a5]">
              HAN / STORY
            </span>
          </div>
          <span className="font-mono text-[8px] tracking-[0.3em] text-[#8997a5]">
            01 / 07
          </span>
        </div>
        <div className="relative mt-24">
          {/* Soft background letters */}
          <span
            className="
              pointer-events-none
              absolute
              -left-8
              -top-28
              select-none
              text-[15rem]
              font-black
              leading-none
              tracking-[-0.18em]
              text-[#d5e2ee]/70
              sm:text-[21rem]
              md:text-[29rem]
            "
            style={{
              fontFamily:
                "Arial Black, sans-serif",
            }}
          >
            H
          </span>
          <span
            className="
              pointer-events-none
              absolute
              right-[-5%]
              top-[10%]
              select-none
              text-[8rem]
              font-black
              leading-none
              tracking-[-0.15em]
              text-[#dce7f1]/70
              sm:text-[12rem]
            "
            style={{
              fontFamily:
                "Arial Black, sans-serif",
            }}
          >
            A
          </span>
          <div className="relative z-10">
            <div className="ml-2 flex items-center gap-3">
              <span
                className="text-xl text-[#7088a0]"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
                }}
              >
                known as
              </span>
              <span className="h-px w-10 bg-[#aebfce]" />
              <span className="font-mono text-[7px] tracking-[0.35em] text-[#83919d]">
                HAN
              </span>
            </div>
            <h1
              className="
                mt-2
                text-[8rem]
                leading-[0.7]
                tracking-[-0.09em]
                text-[#394654]
                sm:text-[11rem]
                md:text-[15rem]
                lg:text-[18rem]
              "
              style={{
                fontFamily:
                  "'Bodoni 72', 'Bodoni MT', Didot, Georgia, serif",
              }}
            >
              HAN
            </h1>
            <div className="ml-2 mt-12">
              <p
                className="
                  text-3xl
                  tracking-[0.01em]
                  text-[#4d5b69]
                  sm:text-4xl
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Han
              </p>
              <p
                className="mt-1 text-2xl text-[#7890a7]"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
                }}
              >
                a little bit of mischief ♡
              </p>
            </div>
          </div>
          {/* Main photo */}
          <div className="relative z-20 ml-auto mt-16 w-[94%] max-w-[600px] sm:w-[70%]">
            <div className="absolute -inset-3 rotate-[3deg] rounded-[2.5rem] bg-[#d9e7f3]" />
            <div className="absolute -inset-3 -rotate-[2deg] rounded-[2.5rem] bg-[#e8e2ee]" />
            <PhotoPlaceholder
              large
              className="relative"
            />
            <div className="absolute -bottom-7 -left-5 rotate-[-6deg] rounded-full bg-[#edf4fb] px-6 py-3 shadow-[0_15px_35px_rgba(60,75,90,0.1)]">
              <span
                className="text-xl text-[#617487]"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
                }}
              >
                Han ♡
              </span>
            </div>
            <div className="absolute -right-4 -top-8 rotate-[8deg] rounded-full bg-white/75 px-4 py-2">
              <span className="font-mono text-[7px] tracking-[0.3em] text-[#71808d]">
                ⋆ little cat energy
              </span>
            </div>
            <Sparkles
              size={27}
              strokeWidth={1}
              className="absolute -right-6 top-[40%] rotate-12 text-[#718aa0]"
            />
          </div>
        </div>
        {/* ===================================================
            SMALL CAT DOODLE
            =================================================== */}
        <div className="absolute bottom-12 left-10 hidden sm:block">
          <div className="select-none text-center text-[#71889d]">
            <div className="text-[9px]">
              ♡
            </div>
            <div
              className="mt-1 text-[18px]"
              style={{
                fontFamily:
                  "Georgia, serif",
              }}
            >
              /ᐠ｡ꞈ｡ᐟ\
            </div>
            <div className="mt-1 text-[8px] tracking-[0.15em]">
              little troublemaker
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-[#8b98a4]">
            discover Han
          </span>
          <ArrowDown
            size={14}
            strokeWidth={1}
            className="text-[#7890a5]"
          />
        </div>
      </section>
      {/* =====================================================
          QUICK LOOK
          ===================================================== */}
      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="02"
          title="A QUICK LOOK"
        />
        <div className="relative overflow-hidden rounded-[2.8rem] bg-[#e5eef7] p-7 sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/60 blur-[70px]" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#e9e0ed]/60 blur-[70px]" />
          <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            <QuickItem
              label="KNOWN AS"
              value="HAN"
            />
            <QuickItem
              label="NICKNAME"
              value={profile.nicknames}
            />
            <QuickItem
              label="BIRTHDAY"
              value={profile.birthday}
            />
            <QuickItem
              label="NATIONALITY"
              value={profile.nationality}
            />
            <QuickItem
              label="HOBBY"
              value={profile.hobbies}
            />
            <QuickItem
              label="MBTI"
              value={profile.mbti}
            />
          </div>
        </div>
      </section>
      {/* =====================================================
          ABOUT HAN
          ===================================================== */}
      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="03"
          title="ABOUT HAN"
        />
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full bg-[#d9e8f4]" />
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <PhotoPlaceholder />
            </div>
            <div className="absolute -bottom-6 -right-5 rounded-full bg-[#e8e1ee] px-6 py-3">
              <span
                className="text-xl text-[#657183]"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
                }}
              >
                Han ♡
              </span>
            </div>
          </div>
          <div>
            <p
              className="
                text-2xl
                leading-9
                text-[#5f6b78]
                sm:text-3xl
                sm:leading-10
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              This is where you can write a proper
              introduction about Han — his personality,
              little habits, the things that make him
              memorable, and everything that makes him
              feel like himself.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <Tag text="HAN" />
              <Tag text="♡" />
              <Tag text="little cat energy" />
              <Tag text="HANEULZ" />
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          HIS LITTLE THINGS
          ===================================================== */}
      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="04"
          title="HIS LITTLE THINGS"
        />
        <div className="grid gap-6 md:grid-cols-12">
          <FeatureCard
            className="min-h-[350px] md:col-span-7"
            background="#dceaf5"
            number="01"
            title="HOBBIES"
            value={profile.hobbies}
            large
          />
          <FeatureCard
            className="min-h-[270px] md:col-span-5 md:mt-16"
            background="#e7e0ee"
            number="02"
        import { useEffect, useState } from "react";
import { Film, Heart, Sparkles, Cat } from "lucide-react";
import { Reveal } from "./Reveal";

const BACKEND_URL = (
  process.env.REACT_APP_BACKEND_URL || ""
).replace(/\/$/, "");

const API = `${BACKEND_URL}/api`;

export default function HanStory() {
  const [movies, setMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetch(`${API}/han/movies`);

        if (!response.ok) {
          throw new Error("Failed to load Han's movie recommendations");
        }

        const data = await response.json();
        setMovies(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to load Han movies:", error);
        setMovies([]);
      } finally {
        setLoadingMovies(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <div className="space-y-10">

      {/* =========================
          HAN HERO
      ========================= */}

      <Reveal>
        <section
          className="
            relative
            overflow-hidden
            rounded-[3rem]
            border
            border-blue-200/50
            bg-gradient-to-br
            from-blue-50
            via-white
            to-slate-100
            p-8
            md:p-14
          "
        >

          {/* Decorative circles */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-200/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-slate-300/20 blur-3xl" />

          <div className="relative">

            <div className="flex items-center gap-3 text-blue-500">

              <Cat size={20} />

              <span className="text-xs font-medium uppercase tracking-[0.3em]">
                Han
              </span>

            </div>


            <h2
              className="
                mt-6
                font-serif-display
                text-5xl
                font-medium
                leading-tight
                text-slate-900
                md:text-7xl
              "
            >
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


      {/* =========================
          LITTLE INTRO
      ========================= */}

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


          <div
            className="
              rounded-[2.5rem]
              bg-blue-50
              p-8
              md:p-10
            "
          >

            <Heart
              size={24}
              className="text-blue-400"
            />

            <p className="mt-6 font-serif-display text-3xl leading-snug text-slate-800">
              "a little blue corner for our quiet cat."
            </p>

            <p className="mt-6 text-sm text-slate-500">
              made with love ♡
            </p>

          </div>

        </section>

      </Reveal>


      {/* =========================
          MOVIE RECOMMENDATIONS
      ========================= */}

      <Reveal>

        <section
          className="
            overflow-hidden
            rounded-[2.75rem]
            border
            border-blue-100
            bg-white
            p-8
            md:p-10
          "
        >

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>

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

            </div>

          </div>


          <div className="mt-8">

            {loadingMovies ? (

              <div className="rounded-3xl bg-blue-50 p-8 text-center text-sm text-slate-500">
                loading Han's picks...
              </div>

            ) : movies.length === 0 ? (

              <div className="rounded-3xl bg-blue-50 p-8 text-center">

                <Film
                  size={24}
                  className="mx-auto text-blue-400"
                />

                <p className="mt-4 text-sm text-slate-500">
                  No movie recommendations yet ♡
                </p>

              </div>

            ) : (

              <div className="grid gap-3 sm:grid-cols-2">

                {movies.map((movie, index) => (

                  <div
                    key={movie.id || index}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-blue-100
                      bg-blue-50/50
                      px-5
                      py-4
                      transition
                      hover:-translate-y-0.5
                      hover:bg-blue-50
                    "
                  >

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-xs
                        text-blue-500
                        shadow-sm
                      "
                    >
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


      {/* =========================
          LITTLE FOOTNOTE
      ========================= */}

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
