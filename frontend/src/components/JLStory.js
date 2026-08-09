import React, { useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";

export default function JLStory() {
  const [showArchive, setShowArchive] = useState(false);
  const [photoLimit, setPhotoLimit] = useState(9);

  /* =========================================================
     JL INFORMATION
  ========================================================= */

  const profile = {
    fullName: "Jay Lawrence Gaspar",
    knownAs: "JL",
    nicknames: "Yence / Jaeyel",
    birthday: "Add later",
    nationality: "Add later",
    hobbies: "Add later",
    interests: "Add later",
    favorites: "Add later",
    mbti: "Add later",
  };

  const facts = [
    "Add JL's first fun fact here.",
    "Add another interesting fact here.",
    "Add a funny or memorable detail here.",
    "Add another fact about JL here.",
    "Add another detail whenever you want.",
  ];

  /* =========================================================
     PHOTO ARCHIVE

     NEWEST PHOTO = FIRST ITEM

     Add the ORIGINAL POST URL to originalPost.
     Clicking a photo opens the original post.
  ========================================================= */

  const photos = [
    {
      src: "",
      alt: "JL photo 01",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 02",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 03",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 04",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 05",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 06",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 07",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 08",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 09",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 10",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 11",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 12",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 13",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 14",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 15",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 16",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 17",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 18",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 19",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 20",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 21",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 22",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 23",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 24",
      originalPost: "",
    },
  ];

  return (
    <main className="relative overflow-hidden rounded-[2.5rem] bg-[#f6efe8] text-[#51464c]">

      {/* =====================================================
          PAPER TEXTURE + BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#e7c9d3]/55 blur-[100px]" />

        <div className="absolute -right-40 top-[20%] h-[500px] w-[500px] rounded-full bg-[#d8d1e8]/55 blur-[110px]" />

        <div className="absolute -left-40 top-[48%] h-[500px] w-[500px] rounded-full bg-[#c9dfe0]/45 blur-[120px]" />

        <div className="absolute -right-40 top-[75%] h-[500px] w-[500px] rounded-full bg-[#ead8b7]/40 blur-[110px]" />

        {/* paper grain */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(#62565c 0.5px, transparent 0.5px),
              radial-gradient(#62565c 0.4px, transparent 0.4px)
            `,
            backgroundPosition: "0 0, 8px 8px",
            backgroundSize: "16px 16px",
          }}
        />

        {/* hand-drawn lines */}
        <div className="absolute left-[8%] top-[13%] h-24 w-px rotate-[24deg] bg-[#9e7e89]/30" />

        <div className="absolute right-[9%] top-[38%] h-32 w-px rotate-[-28deg] bg-[#9e7e89]/25" />

        <div className="absolute left-[12%] top-[73%] h-28 w-px rotate-[-18deg] bg-[#8ba4a4]/25" />

      </div>


      {/* =====================================================
          TOP SCRAPBOOK LABEL
      ===================================================== */}

      <div className="relative px-5 pt-5 sm:px-8 sm:pt-8">

        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[#cbb4bd] bg-[#fffaf5]/75 px-4 py-2 shadow-[3px_4px_0_rgba(90,70,75,0.07)]">

          <span className="font-mono text-[7px] uppercase tracking-[0.4em] text-[#927482]">
            HANEULZ ARCHIVE
          </span>

          <span className="font-mono text-[7px] uppercase tracking-[0.35em] text-[#aaa0a4]">
            JL FILE · 001
          </span>

        </div>

      </div>


      {/* =====================================================
          COVER
      ===================================================== */}

      <section className="relative px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:px-16">

        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}

          <div className="relative z-10">

            <div
              className="inline-block -rotate-3 rounded-sm bg-[#f4d9a8] px-4 py-2 shadow-[4px_5px_0_rgba(91,70,67,0.08)]"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              <span className="text-sm text-[#675653]">
                little JL archive
              </span>
            </div>

            <p className="mt-7 font-mono text-[8px] uppercase tracking-[0.5em] text-[#a07889]">
              known as
            </p>

            <h1
              className="mt-2 text-[7rem] leading-[0.72] tracking-[-0.08em] text-[#493e45] sm:text-[9rem] md:text-[11rem]"
              style={{
                fontFamily: "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              JL
            </h1>

            <div className="mt-7 rotate-[-1deg]">

              <p
                className="text-3xl text-[#5d5159] sm:text-4xl"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Jay Lawrence Gaspar
              </p>

              <p
                className="mt-1 text-2xl text-[#a57488]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Yence · Jaeyel
              </p>

            </div>

            <p
              className="mt-7 max-w-md text-lg leading-7 text-[#766970]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              a tiny collection of photos, facts, memories,
              and everything that makes JL, JL.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">

              <MiniStamp text="JL" />

              <MiniStamp text="YENCE" />

              <MiniStamp text="JAEYEL" />

            </div>

          </div>


          {/* RIGHT PHOTO */}

          <div className="relative mx-auto w-full max-w-[540px]">

            <div className="absolute -left-4 top-8 h-full w-full rotate-[-5deg] rounded-[2rem] bg-[#d8cde6]" />

            <div className="absolute -right-3 -top-4 h-full w-full rotate-[4deg] rounded-[2rem] bg-[#e8c7d2]" />

            <div className="relative rotate-[1.5deg] rounded-[1.7rem] border-[8px] border-[#fffaf3] bg-[#fffaf3] p-2 shadow-[0_20px_50px_rgba(72,56,64,0.16)]">

              <PhotoPlaceholder large />

              <div className="absolute -bottom-7 -right-4 rotate-[-5deg] rounded-md bg-[#fff0c9] px-5 py-3 shadow-[3px_4px_0_rgba(70,55,55,0.1)]">

                <span
                  className="text-xl text-[#6d5c5e]"
                  style={{
                    fontFamily: "'Caveat', cursive",
                  }}
                >
                  Yence ♡
                </span>

              </div>

              <div className="absolute -left-5 -top-7 rotate-[-8deg] rounded-sm bg-[#e4d6c0] px-4 py-2 shadow-sm">

                <span className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#77686a]">
                  treasured
                </span>

              </div>

            </div>

            <DeerRaccoonDrawing className="absolute -bottom-14 -left-12 w-44 sm:-left-16 sm:w-52" />

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK FACTS
      ===================================================== */}

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <ScrapHeader
            number="01"
            title="a little bit about JL"
            subtitle="the important stuff ♡"
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <FactCard
              label="KNOWN AS"
              value={profile.knownAs}
              color="#ead6df"
              doodle="♡"
            />

            <FactCard
              label="NICKNAMES"
              value={profile.nicknames}
              color="#dce6f0"
              doodle="✦"
            />

            <FactCard
              label="BIRTHDAY"
              value={profile.birthday}
              color="#f2e4bf"
              doodle="☆"
            />

            <FactCard
              label="NATIONALITY"
              value={profile.nationality}
              color="#d9e7df"
              doodle="○"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT JL
      ===================================================== */}

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-16">

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div className="relative">

            <div className="absolute -left-4 -top-5 rotate-[-8deg] rounded-sm bg-[#e8c6d1] px-4 py-2 shadow-sm">

              <span
                className="text-lg text-[#715a64]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                hello, JL!
              </span>

            </div>

            <div className="rotate-[2deg] rounded-[1.8rem] border-[7px] border-[#fffaf5] bg-[#fffaf5] p-2 shadow-[0_15px_40px_rgba(70,55,65,0.12)]">

              <PhotoPlaceholder />

            </div>

            <RaccoonDrawing className="absolute -bottom-10 -right-8 w-36" />

          </div>


          <div className="relative">

            <ScrapHeader
              number="02"
              title="who is JL?"
              subtitle="insert your favorite JL facts here"
            />

            <div className="mt-7 rounded-[1.7rem] border border-[#d2c0c6] bg-[#fffaf5]/75 p-7 shadow-[5px_6px_0_rgba(90,70,75,0.05)] sm:p-9">

              <p
                className="text-xl leading-8 text-[#665b62] sm:text-2xl sm:leading-9"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                This is where you can write a proper introduction
                about JL — who he is, what makes him memorable,
                and anything you want people visiting the HANEULZ
                archive to know about him.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">

                <Tag text="JL" />

                <Tag text="Yence" />

                <Tag text="Jaeyel" />

                <Tag text="Jay Lawrence Gaspar" />

              </div>

            </div>

            <div className="mt-6 rotate-[1deg] rounded-sm bg-[#f4e5bb] px-5 py-4 shadow-[3px_4px_0_rgba(70,55,50,0.07)]">

              <p
                className="text-lg text-[#665957]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                note to self: add more JL lore here later ♡
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          DEER + RACCOON BREAK
      ===================================================== */}

      <section className="relative px-5 py-12 sm:px-8">

        <div className="mx-auto flex max-w-4xl items-center justify-center">

          <div className="h-px flex-1 bg-[#cdb9c1]" />

          <div className="mx-6 flex items-end gap-3">

            <DeerMini />

            <span
              className="mb-4 text-xl text-[#987484]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              JL corner
            </span>

            <RaccoonMini />

          </div>

          <div className="h-px flex-1 bg-[#cdb9c1]" />

        </div>

      </section>


      {/* =====================================================
          HOBBIES + INTERESTS
      ===================================================== */}

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <ScrapHeader
            number="03"
            title="things JL likes"
            subtitle="hobbies · interests · mbti"
          />

          <div className="mt-9 grid gap-5 md:grid-cols-12">

            <ScrapCard
              className="md:col-span-7"
              color="#dce8f3"
              number="01"
              title="HOBBIES"
              value={profile.hobbies}
              tape="blue"
            />

            <ScrapCard
              className="md:col-span-5 md:mt-10"
              color="#e8ddef"
              number="02"
              title="INTERESTS"
              value={profile.interests}
              tape="pink"
            />

            <ScrapCard
              className="md:col-span-5 md:-mt-5"
              color="#f3e5bd"
              number="03"
              title="MBTI"
              value={profile.mbti}
              tape="yellow"
            />

            <ScrapCard
              className="md:col-span-7"
              color="#dce9df"
              number="04"
              title="FAVORITES"
              value={profile.favorites}
              tape="green"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FAVORITES
      ===================================================== */}

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <ScrapHeader
            number="04"
            title="JL's favorites"
            subtitle="fill this page with all the good stuff"
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <FavoriteCard
              label="MUSIC"
              value="Add later"
              rotate="-2deg"
            />

            <FavoriteCard
              label="FOOD"
              value="Add later"
              rotate="1deg"
            />

            <FavoriteCard
              label="COLOR"
              value="Add later"
              rotate="-1deg"
            />

            <FavoriteCard
              label="OTHER"
              value="Add later"
              rotate="2deg"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FUN FACTS
      ===================================================== */}

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <ScrapHeader
            number="05"
            title="JL facts"
            subtitle="things you probably want to remember"
          />

          <div className="mt-8 rounded-[2rem] border border-[#d1bec6] bg-[#fffaf5]/75 p-5 shadow-[6px_7px_0_rgba(80,60,65,0.05)] sm:p-8">

            {facts.map((fact, index) => (

              <div
                key={index}
                className="relative flex items-start gap-4 border-b border-dashed border-[#d4c3c8] py-6 last:border-0"
              >

                <span
                  className="flex h-8 w-8 shrink-0 rotate-[-4deg] items-center justify-center rounded-full bg-[#ead3dc] text-xs text-[#765d68]"
                  style={{
                    fontFamily: "'Caveat', cursive",
                  }}
                >
                  {index + 1}
                </span>

                <p
                  className="pt-1 text-xl leading-7 text-[#665c63] sm:text-2xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  {fact}
                </p>

                <Sparkles
                  size={14}
                  strokeWidth={1}
                  className="ml-auto mt-2 shrink-0 text-[#a77d8d]"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PHOTO ARCHIVE
      ===================================================== */}

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-16">

        <div className="mx-auto max-w-6xl">

          <ScrapHeader
            number="06"
            title="JL photo wall"
            subtitle="newest memories first · click a photo to visit the original post"
          />

          <div className="relative mt-10">

            <div className="absolute -right-2 -top-5 rotate-[4deg] rounded-sm bg-[#f3dfaa] px-4 py-2 shadow-sm">

              <span
                className="text-sm text-[#6f5c5b]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                don't lose these ♡
              </span>

            </div>


            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">

              {photos
                .slice(0, showArchive ? photoLimit : 9)
                .map((photo, index) => (
                  <ArchivePhoto
                    key={index}
                    photo={photo}
                    index={index}
                  />
                ))}

            </div>

          </div>


          {!showArchive ? (

            <button
              type="button"
              onClick={() => setShowArchive(true)}
              className="mx-auto mt-12 flex items-center gap-3 rounded-full border border-[#c2adb7] bg-[#fffaf5] px-7 py-3 font-mono text-[7px] uppercase tracking-[0.35em] text-[#725d68] shadow-[3px_4px_0_rgba(80,60,65,0.07)] transition hover:-translate-y-1"
            >
              open full archive

              <ArrowUpRight
                size={13}
                strokeWidth={1}
              />

            </button>

          ) : (

            <div className="mt-12 flex flex-col items-center gap-5">

              {photoLimit < photos.length && (

                <button
                  type="button"
                  onClick={() =>
                    setPhotoLimit((current) =>
                      Math.min(current + 9, photos.length)
                    )
                  }
                  className="rounded-full bg-[#e5d9ec] px-7 py-3 font-mono text-[7px] uppercase tracking-[0.35em] text-[#685b6b] transition hover:bg-[#dccde5]"
                >
                  load more
                </button>

              )}

              {photoLimit >= photos.length && (

                <span
                  className="text-xl text-[#9c7485]"
                  style={{
                    fontFamily: "'Caveat', cursive",
                  }}
                >
                  you've reached the end ♡
                </span>

              )}

              <button
                type="button"
                onClick={() => {
                  setShowArchive(false);
                  setPhotoLimit(9);
                }}
                className="font-mono text-[7px] uppercase tracking-[0.35em] text-[#9c9096] underline underline-offset-4"
              >
                close archive
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          FINAL NOTE
      ===================================================== */}

      <section className="relative px-5 pb-20 pt-12 text-center sm:px-8 sm:pb-28">

        <div className="mx-auto max-w-2xl">

          <div className="flex items-center justify-center gap-4">

            <span className="h-px w-16 bg-[#cbb7c0]" />

            <Star
              size={15}
              strokeWidth={1}
              className="rotate-12 text-[#a77a8c]"
            />

            <span className="h-px w-16 bg-[#cbb7c0]" />

          </div>

          <h2
            className="mt-8 text-7xl tracking-[-0.07em] text-[#493e45] sm:text-9xl"
            style={{
              fontFamily: "'Bodoni 72', Didot, Georgia, serif",
            }}
          >
            JL
          </h2>

          <p
            className="mt-2 text-2xl text-[#a27588]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            Yence · Jaeyel
          </p>

          <p
            className="mx-auto mt-6 max-w-md text-lg leading-7 text-[#796d73]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            a little page for a person worth remembering.
          </p>

          <div className="mt-10 flex justify-center">

            <DeerRaccoonDrawing className="w-56" />

          </div>

        </div>

      </section>

    </main>
  );
}


/* =============================================================
   SCRAPBOOK HEADER
============================================================= */

function ScrapHeader({ number, title, subtitle }) {
  return (
    <div className="relative">

      <div className="flex items-center gap-3">

        <span className="font-mono text-[7px] tracking-[0.35em] text-[#a77b8d]">
          {number}
        </span>

        <span className="h-px w-10 bg-[#c8b1ba]" />

        <span className="font-mono text-[7px] uppercase tracking-[0.35em] text-[#a1969b]">
          HANEULZ / JL
        </span>

      </div>

      <h2
        className="mt-3 text-5xl leading-none tracking-[-0.025em] text-[#4d4249] sm:text-6xl md:text-7xl"
        style={{
          fontFamily: "'Bodoni 72', Didot, Georgia, serif",
        }}
      >
        {title}
      </h2>

      <p
        className="mt-3 text-lg text-[#9a7483]"
        style={{
          fontFamily: "'Caveat', cursive",
        }}
      >
        {subtitle}
      </p>

    </div>
  );
}


/* =============================================================
   QUICK FACT CARD
============================================================= */

function FactCard({ label, value, color, doodle }) {
  return (
    <div
      className="relative min-h-[150px] overflow-hidden rounded-[1.5rem] p-6 shadow-[4px_6px_0_rgba(75,58,65,0.06)]"
      style={{
        backgroundColor: color,
      }}
    >

      <span
        className="absolute right-5 top-4 rotate-12 text-2xl text-black/15"
        style={{
          fontFamily: "'Caveat', cursive",
        }}
      >
        {doodle}
      </span>

      <p className="font-mono text-[7px] tracking-[0.35em] text-[#81727a]">
        {label}
      </p>

      <p
        className="mt-7 text-2xl text-[#5e5359]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {value}
      </p>

    </div>
  );
}


/* =============================================================
   SCRAP CARD
============================================================= */

function ScrapCard({
  color,
  number,
  title,
  value,
  className = "",
}) {
  return (
    <div
      className={`relative min-h-[260px] overflow-hidden rounded-[2rem] p-7 shadow-[6px_8px_0_rgba(75,58,65,0.06)] sm:p-9 ${className}`}
      style={{
        backgroundColor: color,
      }}
    >

      <div className="absolute right-5 top-5 h-8 w-16 rotate-[3deg] bg-white/25" />

      <span className="font-mono text-[7px] tracking-[0.35em] text-[#80727a]">
        {number}
      </span>

      <h3
        className="mt-8 text-4xl text-[#5d5259]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {title}
      </h3>

      <p
        className="mt-6 max-w-lg text-xl leading-8 text-[#71666d]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {value}
      </p>

      <span
        className="absolute bottom-5 right-7 rotate-[-6deg] text-xl text-[#8f7480]/45"
        style={{
          fontFamily: "'Caveat', cursive",
        }}
      >
        little note
      </span>

    </div>
  );
}


/* =============================================================
   FAVORITE CARD
============================================================= */

function FavoriteCard({ label, value, rotate }) {
  return (
    <div
      className="rounded-[1.4rem] border border-[#d0bdc5] bg-[#fffaf5]/80 p-6 shadow-[4px_5px_0_rgba(75,58,65,0.05)]"
      style={{
        transform: `rotate(${rotate})`,
      }}
    >

      <p className="font-mono text-[7px] tracking-[0.35em] text-[#9b7d89]">
        {label}
      </p>

      <p
        className="mt-5 text-2xl text-[#63575f]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {value}
      </p>

    </div>
  );
}


/* =============================================================
   TAG
============================================================= */

function Tag({ text }) {
  return (
    <span className="rounded-full border border-[#cdb9c2] bg-[#fffaf5]/70 px-4 py-2 font-mono text-[7px] tracking-[0.18em] text-[#806e77]">
      {text}
    </span>
  );
}


/* =============================================================
   MINI STAMP
============================================================= */

function MiniStamp({ text }) {
  return (
    <span className="rotate-[-2deg] rounded-sm border border-[#c29baa] bg-[#fff7f2] px-3 py-2 font-mono text-[7px] tracking-[0.25em] text-[#856875]">
      {text}
    </span>
  );
}


/* =============================================================
   PHOTO PLACEHOLDER
============================================================= */

function PhotoPlaceholder({ large = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.2rem] ${
        large ? "aspect-[4/3]" : "aspect-[4/5]"
      }`}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-[#d8e5f0] via-[#e9dcec] to-[#f1d5df]" />

      <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/55 blur-[60px]" />

      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#f6e5b9]/65 blur-[60px]" />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(#635b63 0.6px, transparent 0.6px)",
          backgroundSize: "15px 15px",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/45">

          <Camera
            size={21}
            strokeWidth={1}
            className="text-[#786d77]"
          />

        </div>

        <span className="mt-4 font-mono text-[7px] tracking-[0.4em] text-[#786d77]">
          JL PHOTO
        </span>

        <span
          className="mt-2 text-base text-[#82727c]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          add photo here
        </span>

      </div>

    </div>
  );
}


/* =============================================================
   ARCHIVE PHOTO
============================================================= */

function ArchivePhoto({ photo, index }) {
  const rotations = [
    "-2deg",
    "1deg",
    "-1deg",
    "2deg",
    "-1.5deg",
    "1.5deg",
  ];

  const rotation = rotations[index % rotations.length];

  const content = photo.src ? (
    <img
      src={photo.src}
      alt={photo.alt}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  ) : (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#dce8f2] via-[#e8ddef] to-[#f1d8df]">

      <Camera
        size={index % 3 === 0 ? 25 : 18}
        strokeWidth={1}
        className="text-[#766b79]/45"
      />

      <span
        className="mt-3 text-sm text-[#82727c]"
        style={{
          fontFamily: "'Caveat', cursive",
        }}
      >
        JL #{String(index + 1).padStart(2, "0")}
      </span>

    </div>
  );

  const hasOriginalPost = Boolean(photo.originalPost);

  return (
    <div
      className="group relative"
      style={{
        transform: `rotate(${rotation})`,
      }}
    >

      <div className="absolute -top-2 left-1/2 z-10 h-5 w-14 -translate-x-1/2 rotate-[-3deg] bg-[#dbc99d]/65" />

      {hasOriginalPost ? (
        <a
          href={photo.originalPost}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open original post for ${photo.alt}`}
          className="relative block overflow-hidden rounded-[1.2rem] border-[6px] border-[#fffaf5] bg-[#fffaf5] p-1 shadow-[0_10px_25px_rgba(65,50,58,0.13)] transition duration-300 hover:-translate-y-2 hover:rotate-[-1deg] hover:shadow-[0_18px_35px_rgba(65,50,58,0.18)]"
        >

          <div className="relative aspect-square overflow-hidden rounded-[0.8rem]">
            {content}
          </div>

          <span className="absolute bottom-3 right-3 rounded-full bg-[#fffaf5]/85 px-2 py-1 font-mono text-[6px] text-[#766974]">
            original ↗
          </span>

        </a>
      ) : (
        <div className="relative overflow-hidden rounded-[1.2rem] border-[6px] border-[#fffaf5] bg-[#fffaf5] p-1 shadow-[0_10px_25px_rgba(65,50,58,0.13)]">

          <div className="relative aspect-square overflow-hidden rounded-[0.8rem]">
            {content}
          </div>

          <span className="absolute bottom-3 right-3 rounded-full bg-[#fffaf5]/80 px-2 py-1 font-mono text-[6px] text-[#766974]">
            add link
          </span>

        </div>
      )}

      <span
        className="absolute -bottom-5 left-2 rotate-[-4deg] text-sm text-[#8c727d]"
        style={{
          fontFamily: "'Caveat', cursive",
        }}
      >
        #{String(index + 1).padStart(2, "0")}
      </span>

    </div>
  );
}


/* =============================================================
   CUTE DEER + RACCOON DRAWING
============================================================= */

function DeerRaccoonDrawing({ className = "" }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 420 220"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* little ground */}
        <path
          d="M45 190 Q110 182 175 190 T315 188 T390 190"
          fill="none"
          stroke="#9b8189"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* DEER */}

        {/* ears */}
        <path
          d="M82 73 Q57 39 76 29 Q95 46 101 69"
          fill="#c8949f"
          stroke="#624f57"
          strokeWidth="3"
        />

        <path
          d="M123 68 Q142 34 158 42 Q158 62 135 78"
          fill="#c8949f"
          stroke="#624f57"
          strokeWidth="3"
        />

        {/* deer head */}
        <ellipse
          cx="117"
          cy="105"
          rx="48"
          ry="53"
          fill="#d8ae91"
          stroke="#624f57"
          strokeWidth="3"
        />

        {/* deer face */}
        <ellipse
          cx="117"
          cy="119"
          rx="27"
          ry="25"
          fill="#efd5bd"
        />

        {/* eyes */}
        <circle cx="99" cy="101" r="4" fill="#514249" />
        <circle cx="135" cy="101" r="4" fill="#514249" />

        {/* eye sparkle */}
        <circle cx="100" cy="100" r="1.4" fill="white" />
        <circle cx="136" cy="100" r="1.4" fill="white" />

        {/* nose */}
        <ellipse
          cx="117"
          cy="124"
          rx="8"
          ry="6"
          fill="#6b515a"
        />

        {/* smile */}
        <path
          d="M117 129 Q112 136 106 132 M117 129 Q122 136 128 132"
          fill="none"
          stroke="#624f57"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* antlers */}
        <path
          d="M86 69 Q66 47 68 27 M70 40 L55 34 M71 49 L58 54"
          fill="none"
          stroke="#70585b"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M147 70 Q168 47 166 28 M164 41 L178 34 M163 51 L177 56"
          fill="none"
          stroke="#70585b"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* deer body */}
        <ellipse
          cx="117"
          cy="171"
          rx="43"
          ry="28"
          fill="#d8ae91"
          stroke="#624f57"
          strokeWidth="3"
        />

        {/* little legs */}
        <path
          d="M92 187 L90 204 M108 191 L107 206 M137 190 L138 205"
          fill="none"
          stroke="#624f57"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* RACCOON */}

        {/* tail */}
        <path
          d="M296 171 Q350 132 380 166 Q398 190 369 200 Q339 209 313 187"
          fill="#9a8d99"
          stroke="#554c58"
          strokeWidth="3"
        />

        <path
          d="M330 160 Q351 174 370 166"
          fill="none"
          stroke="#635966"
          strokeWidth="8"
        />

        <path
          d="M318 177 Q341 189 361 183"
          fill="none"
          stroke="#635966"
          strokeWidth="8"
        />

        {/* raccoon ears */}
        <path
          d="M253 76 L263 43 L282 67"
          fill="#8e8190"
          stroke="#554c58"
          strokeWidth="3"
        />

        <path
          d="M313 66 L332 43 L335 78"
          fill="#8e8190"
          stroke="#554c58"
          strokeWidth="3"
        />

        {/* raccoon head */}
        <ellipse
          cx="294"
          cy="105"
          rx="48"
          ry="47"
          fill="#9d909d"
          stroke="#554c58"
          strokeWidth="3"
        />

        {/* face mask */}
        <path
          d="M249 101 Q271 76 294 94 Q317 76 339 101 Q318 119 294 115 Q270 119 249 101"
          fill="#625a67"
        />

        {/* eyes */}
        <circle cx="274" cy="100" r="5" fill="#fffaf5" />
        <circle cx="314" cy="100" r="5" fill="#fffaf5" />
        <circle cx="274" cy="101" r="2.5" fill="#403942" />
        <circle cx="314" cy="101" r="2.5" fill="#403942" />

        {/* muzzle */}
        <ellipse
          cx="294"
          cy="119"
          rx="23"
          ry="18"
          fill="#d7c9ce"
        />

        {/* nose */}
        <ellipse
          cx="294"
          cy="116"
          rx="7"
          ry="5"
          fill="#4f454e"
        />

        {/* smile */}
        <path
          d="M294 121 Q288 128 283 124 M294 121 Q300 128 305 124"
          fill="none"
          stroke="#554c58"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* raccoon body */}
        <ellipse
          cx="294"
          cy="171"
          rx="45"
          ry="28"
          fill="#9d909d"
          stroke="#554c58"
          strokeWidth="3"
        />

        {/* arms */}
        <path
          d="M260 168 Q244 177 254 186"
          fill="none"
          stroke="#554c58"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M328 168 Q345 177 336 187"
          fill="none"
          stroke="#554c58"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* little heart */}
        <path
          d="M205 83 C198 74 184 81 191 92 L205 106 L219 92 C226 81 212 74 205 83Z"
          fill="#d88fa7"
          stroke="#70545f"
          strokeWidth="2"
        />

        {/* stars */}
        <path
          d="M210 143 l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"
          fill="#d6a9b8"
        />

        <path
          d="M365 86 l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"
          fill="#c7b5d7"
        />

      </svg>
    </div>
  );
}


/* =============================================================
   MINI DEER
============================================================= */

function DeerMini() {
  return (
    <svg
      viewBox="0 0 80 80"
      className="h-16 w-16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 30 Q12 10 24 8 Q34 18 36 30"
        fill="#d5a991"
        stroke="#624f57"
        strokeWidth="2"
      />

      <path
        d="M44 30 Q55 10 63 14 Q63 28 50 36"
        fill="#d5a991"
        stroke="#624f57"
        strokeWidth="2"
      />

      <ellipse
        cx="40"
        cy="43"
        rx="23"
        ry="25"
        fill="#d5a991"
        stroke="#624f57"
        strokeWidth="2"
      />

      <circle cx="32" cy="40" r="2.5" fill="#4f444b" />
      <circle cx="48" cy="40" r="2.5" fill="#4f444b" />

      <ellipse
        cx="40"
        cy="51"
        rx="7"
        ry="5"
        fill="#6b515a"
      />

      <path
        d="M40 56 Q35 61 31 57 M40 56 Q45 61 49 57"
        fill="none"
        stroke="#624f57"
        strokeWidth="1.5"
      />

      <path
        d="M25 27 Q17 18 18 8 M19 16 L11 13 M19 21 L12 24"
        fill="none"
        stroke="#70585b"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M55 28 Q63 18 62 9 M62 17 L69 13 M62 22 L69 25"
        fill="none"
        stroke="#70585b"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* =============================================================
   MINI RACCOON
============================================================= */

function RaccoonMini() {
  return (
    <svg
      viewBox="0 0 80 80"
      className="h-16 w-16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 29 L27 12 L36 27"
        fill="#938692"
        stroke="#554c58"
        strokeWidth="2"
      />

      <path
        d="M44 27 L55 12 L59 31"
        fill="#938692"
        stroke="#554c58"
        strokeWidth="2"
      />

      <ellipse
        cx="40"
        cy="43"
        rx="25"
        ry="24"
        fill="#9d909d"
        stroke="#554c58"
        strokeWidth="2"
      />

      <path
        d="M17 41 Q28 29 40 38 Q52 29 63 41 Q51 52 40 48 Q29 52 17 41"
        fill="#625a67"
      />

      <circle cx="30" cy="40" r="4" fill="#fffaf5" />
      <circle cx="50" cy="40" r="4" fill="#fffaf5" />

      <circle cx="30" cy="40" r="2" fill="#403942" />
      <circle cx="50" cy="40" r="2" fill="#403942" />

      <ellipse
        cx="40"
        cy="51"
        rx="12"
        ry="9"
        fill="#d7c9ce"
      />

      <ellipse
        cx="40"
        cy="49"
        rx="4"
        ry="3"
        fill="#4f454e"
      />

      <path
        d="M40 53 Q36 58 33 55 M40 53 Q44 58 47 55"
        fill="none"
        stroke="#554c58"
        strokeWidth="1.5"
      />
    </svg>
  );
}


/* =============================================================
   RACCOON DRAWING
============================================================= */

function RaccoonDrawing({ className = "" }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 180 150"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          d="M120 111 Q158 84 169 106 Q175 126 151 133 Q130 137 115 121"
          fill="#9b8f9d"
          stroke="#554c58"
          strokeWidth="3"
        />

        <path
          d="M133 104 Q148 113 162 107"
          fill="none"
          stroke="#635966"
          strokeWidth="7"
        />

        <path
          d="M126 118 Q143 127 156 122"
          fill="none"
          stroke="#635966"
          strokeWidth="7"
        />

        <path
          d="M45 50 L52 22 L70 48"
          fill="#948793"
          stroke="#554c58"
          strokeWidth="3"
        />

        <path
          d="M95 47 L115 22 L119 54"
          fill="#948793"
          stroke="#554c58"
          strokeWidth="3"
        />

        <ellipse
          cx="82"
          cy="75"
          rx="48"
          ry="48"
          fill="#9d909d"
          stroke="#554c58"
          strokeWidth="3"
        />

        <path
          d="M36 72 Q58 51 82 63 Q106 51 128 72 Q108 92 82 86 Q56 92 36 72"
          fill="#625a67"
        />

        <circle cx="62" cy="70" r="5" fill="#fffaf5" />
        <circle cx="102" cy="70" r="5" fill="#fffaf5" />

        <circle cx="62" cy="70" r="2.5" fill="#403942" />
        <circle cx="102" cy="70" r="2.5" fill="#403942" />

        <ellipse
          cx="82"
          cy="89"
          rx="23"
          ry="18"
          fill="#d7c9ce"
        />

        <ellipse
          cx="82"
          cy="86"
          rx="7"
          ry="5"
          fill="#4f454e"
        />

        <path
          d="M82 91 Q76 99 70 94 M82 91 Q88 99 94 94"
          fill="none"
          stroke="#554c58"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M65 122 Q82 130 101 122"
          fill="none"
          stroke="#554c58"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M18 56 l3 7 7 3-7 3-3 7-3-7-7-3 7-3z"
          fill="#d6a9b8"
        />

      </svg>
    </div>
  );
}
