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

  /* =========================================================
     FUN FACTS
  ========================================================= */

  const facts = [
    "Add JL's first fun fact here.",
    "Add another interesting fact here.",
    "Add a funny or memorable detail here.",
    "Add another fact about JL here.",
    "Add another detail whenever you want.",
    "Add one more little JL detail here.",
  ];

  /* =========================================================
     PHOTO ARCHIVE

     Put the newest photo FIRST.

     src = direct image URL
     postUrl = original post URL

     Example:

     {
       src: "https://...",
       alt: "JL latest photo",
       postUrl: "https://x.com/..."
     }
  ========================================================= */

  const photos = [
    {
      src: "",
      alt: "JL photo 01",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 02",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 03",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 04",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 05",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 06",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 07",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 08",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 09",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 10",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 11",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 12",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 13",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 14",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 15",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 16",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 17",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 18",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 19",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 20",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 21",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 22",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 23",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 24",
      postUrl: "",
    },
  ];

  return (
    <main className="relative overflow-hidden rounded-[2.5rem] bg-[#d9c9d8] text-[#514657] sm:rounded-[3rem]">

      {/* =====================================================
          PASTEL SCRAPBOOK BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* lavender wash */}
        <div className="absolute -left-44 -top-40 h-[620px] w-[620px] rounded-full bg-[#bca9cf]/55 blur-[120px]" />

        {/* dusty rose */}
        <div className="absolute -right-52 top-[12%] h-[650px] w-[650px] rounded-full bg-[#e2b6c7]/60 blur-[130px]" />

        {/* blue */}
        <div className="absolute -left-52 top-[40%] h-[650px] w-[650px] rounded-full bg-[#a9c8d2]/50 blur-[130px]" />

        {/* cream */}
        <div className="absolute -right-52 top-[65%] h-[650px] w-[650px] rounded-full bg-[#f0ddb0]/55 blur-[130px]" />

        {/* sage */}
        <div className="absolute left-[5%] top-[86%] h-[600px] w-[600px] rounded-full bg-[#b7d0c1]/45 blur-[130px]" />

        {/* paper texture */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(#514657 0.55px, transparent 0.55px)",
            backgroundSize: "13px 13px",
          }}
        />

        {/* tiny stars */}
        <span className="absolute left-[7%] top-[9%] text-sm text-[#816c82]/55">
          ✦
        </span>

        <span className="absolute right-[10%] top-[18%] text-xs text-[#866b81]/50">
          ♡
        </span>

        <span className="absolute left-[13%] top-[51%] text-xs text-[#6d7f91]/50">
          ୨୧
        </span>

        <span className="absolute right-[8%] top-[73%] text-sm text-[#8a7280]/50">
          𐙚
        </span>

        <span className="absolute left-[6%] bottom-[7%] text-xs text-[#776c7e]/45">
          ⋆
        </span>

      </div>


      {/* =====================================================
          COVER
      ===================================================== */}

      <section className="relative px-5 pb-24 pt-7 sm:px-9 sm:pb-28 sm:pt-9 md:px-14 lg:px-20">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            <span className="font-mono text-[7px] tracking-[0.4em] text-[#765d72] sm:text-[8px]">
              HANEULZ
            </span>

            <span className="h-px w-6 bg-[#9b7e96] sm:w-10" />

            <span className="font-mono text-[6px] tracking-[0.3em] text-[#796e7c] sm:text-[7px]">
              JL ARCHIVE
            </span>

          </div>

          <span className="font-mono text-[7px] tracking-[0.25em] text-[#796e7c]">
            01 / JL
          </span>

        </div>


        {/* tiny deer doodle */}

        <div className="absolute right-[8%] top-16 rotate-[5deg] text-[#745f72]">

          <CuteDeer />

          <p
            className="mt-1 text-center text-[10px] text-[#80677c]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            hello ♡
          </p>

        </div>


        <div className="relative mt-24 sm:mt-28">

          {/* giant J background */}

          <span
            className="pointer-events-none absolute -left-5 -top-16 select-none text-[12rem] font-black leading-none tracking-[-0.2em] text-[#eee1eb]/55 sm:text-[18rem] md:text-[25rem]"
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            J
          </span>

          {/* handwritten decoration */}

          <div
            className="absolute right-[3%] top-32 rotate-[8deg] text-2xl text-[#a2758e]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Yence ♡
          </div>


          <div className="relative z-10">

            <div className="flex items-center gap-3">

              <span
                className="text-lg text-[#80647b]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                known as
              </span>

              <span className="h-px w-9 bg-[#987d92]" />

              <span className="font-mono text-[7px] tracking-[0.35em] text-[#796e7b]">
                JL
              </span>

            </div>


            <h1
              className="mt-3 text-[7rem] leading-[0.7] tracking-[-0.1em] text-[#4c4353] sm:text-[10rem] md:text-[14rem] lg:text-[17rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Bodoni MT', Didot, Georgia, serif",
              }}
            >
              JL
            </h1>


            <div className="mt-12">

              <p
                className="text-2xl text-[#5e5261] sm:text-4xl"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Jay Lawrence Gaspar
              </p>

              <p
                className="mt-1 text-2xl text-[#a16f87] sm:text-3xl"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Yence · Jaeyel
              </p>

            </div>


            <div className="mt-7 flex flex-wrap gap-2">

              <TinySticker>♡ JL</TinySticker>
              <TinySticker>୨୧ Yence</TinySticker>
              <TinySticker>𐙚 Jaeyel</TinySticker>

            </div>

          </div>


          {/* MAIN PHOTO */}

          <div className="relative z-20 mt-16 ml-auto w-[94%] max-w-[610px] sm:w-[72%]">

            <div className="absolute -inset-3 rotate-[3deg] rounded-[2rem] bg-[#bdaed0]/80" />

            <div className="absolute -inset-3 -rotate-[2deg] rounded-[2rem] bg-[#e5bac9]/75" />

            <div className="relative rotate-[1deg] rounded-[2rem] bg-[#fff8f0] p-2 shadow-[0_25px_60px_rgba(75,58,77,0.18)] sm:p-3">

              <PhotoPlaceholder large />

              <div className="absolute -bottom-5 -left-5 rotate-[-7deg] rounded-xl bg-[#f7e7ad] px-5 py-2 shadow-[3px_5px_0_rgba(83,66,80,0.1)]">

                <span
                  className="text-xl text-[#65586a]"
                  style={{
                    fontFamily: "'Caveat', cursive",
                  }}
                >
                  Yence ♡
                </span>

              </div>

              <div className="absolute -right-3 -top-5 rotate-[7deg] bg-[#fffaf0] px-4 py-2 shadow-[2px_4px_0_rgba(83,66,80,0.08)]">

                <span
                  className="text-sm text-[#826878]"
                  style={{
                    fontFamily: "'Caveat', cursive",
                  }}
                >
                  jaeyel ⋆
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* bottom handwritten line */}

        <div className="mt-20 flex justify-center">

          <div
            className="rotate-[-2deg] text-lg text-[#80657a]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            a little page for JL ♡
          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK LOOK
      ===================================================== */}

      <section className="relative px-5 py-20 sm:px-9 sm:py-24 md:px-14 lg:px-20">

        <SectionLabel
          number="02"
          title="QUICK LOOK"
        />

        <div className="relative rounded-[2.3rem] border border-white/50 bg-[#f4e8ef]/75 p-6 shadow-[0_18px_50px_rgba(79,61,79,0.09)] backdrop-blur-sm sm:rounded-[2.8rem] sm:p-10">

          <div className="absolute right-7 top-5 rotate-[8deg] text-xl text-[#9b7187]">
            ୨୧
          </div>

          <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-6">

            <QuickItem
              label="KNOWN AS"
              value={profile.knownAs}
            />

            <QuickItem
              label="NICKNAME"
              value="Yence"
            />

            <QuickItem
              label="ALSO"
              value="Jaeyel"
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
              label="MBTI"
              value={profile.mbti}
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT JL
      ===================================================== */}

      <section className="relative px-5 py-20 sm:px-9 sm:py-24 md:px-14 lg:px-20">

        <SectionLabel
          number="03"
          title="ABOUT JL"
        />

        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div className="relative">

            <span className="absolute -left-4 -top-5 rotate-[-8deg] text-3xl text-[#9d7189]">
              ♡
            </span>

            <div className="rotate-[-2deg] rounded-[2rem] bg-[#fff8f0] p-2 shadow-[0_20px_45px_rgba(71,56,71,0.13)] sm:p-3">

              <PhotoPlaceholder />

            </div>

            <div className="absolute -bottom-6 -right-4 rotate-[4deg] rounded-xl bg-[#cbdde8] px-5 py-2 shadow-[3px_5px_0_rgba(77,65,78,0.08)]">

              <span
                className="text-xl text-[#5f6470]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Jay Lawrence
              </span>

            </div>

          </div>


          <div>

            <div className="mb-5 text-sm text-[#9b7088]">
              𐙚 ───────── ♡
            </div>

            <p
              className="text-2xl leading-9 text-[#625765] sm:text-3xl sm:leading-10"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              This is where you can write a proper introduction
              about JL — who he is, what makes him memorable,
              and anything you want people visiting the HANEULZ
              archive to know about him.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">

              <Tag text="JL" />
              <Tag text="Yence" />
              <Tag text="Jaeyel" />
              <Tag text="Jay Lawrence Gaspar" />

            </div>

            <div
              className="mt-9 rotate-[1deg] text-lg text-[#927083]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              ✎ write something memorable here...
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOBBIES + INTERESTS
      ===================================================== */}

      <section className="relative px-5 py-20 sm:px-9 sm:py-24 md:px-14 lg:px-20">

        <SectionLabel
          number="04"
          title="LITTLE THINGS"
        />

        <div className="grid gap-5 md:grid-cols-12">

          <FeatureCard
            className="min-h-[330px] md:col-span-7"
            background="#c7dce6"
            number="01"
            title="HOBBIES"
            value={profile.hobbies}
            large
            doodle="♡"
          />

          <FeatureCard
            className="min-h-[270px] md:col-span-5 md:mt-10"
            background="#d8c9df"
            number="02"
            title="INTERESTS"
            value={profile.interests}
            doodle="୨୧"
          />

          <FeatureCard
            className="min-h-[250px] md:col-span-5 md:-mt-5"
            background="#f1dda9"
            number="03"
            title="MBTI"
            value={profile.mbti}
            doodle="✦"
          />

          <FeatureCard
            className="min-h-[280px] md:col-span-7"
            background="#e7c2d0"
            number="04"
            title="FAVORITES"
            value={profile.favorites}
            doodle="𐙚"
          />

        </div>

      </section>


      {/* =====================================================
          FAVORITES NOTE
      ===================================================== */}

      <section className="relative px-5 py-20 sm:px-9 sm:py-24 md:px-14 lg:px-20">

        <div className="relative mx-auto max-w-4xl rotate-[-1deg] rounded-[2rem] bg-[#fff4dc] px-7 py-10 shadow-[8px_12px_0_rgba(104,78,95,0.08)] sm:px-12 sm:py-14">

          <span className="absolute right-7 top-5 text-xl text-[#a4788c]">
            ♡
          </span>

          <p
            className="text-3xl text-[#927083]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            things JL likes...
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            <FavoriteCard
              label="MUSIC"
              value="Add later"
            />

            <FavoriteCard
              label="FOOD"
              value="Add later"
            />

            <FavoriteCard
              label="COLOR"
              value="Add later"
            />

            <FavoriteCard
              label="OTHER"
              value="Add later"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          FUN FACTS
      ===================================================== */}

      <section className="relative px-5 py-20 sm:px-9 sm:py-24 md:px-14 lg:px-20">

        <SectionLabel
          number="05"
          title="FUN FACTS"
        />

        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">

          <div className="relative">

            <h2
              className="text-7xl leading-[0.78] tracking-[-0.08em] text-[#514657] sm:text-[9rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              FACTS
              <br />
              ABOUT
              <br />
              <span className="text-[#a8758d]">
                JL
              </span>
            </h2>

            {/* raccoon doodle */}

            <div className="mt-8 rotate-[-4deg]">

              <CuteRaccoon />

            </div>

            <p
              className="mt-3 text-center text-sm text-[#806878]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              tiny friend reporting for duty ♡
            </p>

          </div>


          <div>

            {facts.map((fact, index) => (

              <div
                key={index}
                className="group flex items-start gap-4 border-t border-[#aa94a5]/50 py-6"
              >

                <span className="pt-1 font-mono text-[7px] tracking-[0.25em] text-[#9c7187]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p
                  className="text-xl leading-8 text-[#625867] sm:text-2xl"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  {fact}
                </p>

                <ArrowUpRight
                  size={13}
                  strokeWidth={1}
                  className="ml-auto mt-1 shrink-0 text-[#a4778d] opacity-0 transition group-hover:opacity-100"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DEER + RACCOON NOTE
      ===================================================== */}

      <section className="relative px-5 py-16 sm:px-9 md:px-14 lg:px-20">

        <div className="relative mx-auto flex max-w-3xl flex-col items-center rounded-[2.5rem] border border-white/50 bg-[#e9dff0]/75 px-7 py-10 shadow-[0_18px_45px_rgba(71,57,75,0.1)]">

          <div className="absolute left-5 top-5 text-lg text-[#8e7185]">
            ✦
          </div>

          <div className="absolute right-5 top-6 text-sm text-[#9c778b]">
            ୨୧
          </div>

          <div className="flex items-end gap-10">

            <CuteDeer />

            <CuteRaccoon />

          </div>

          <p
            className="mt-6 text-center text-2xl text-[#786377]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            JL's tiny forest friends ♡
          </p>

          <p className="mt-2 text-center text-[7px] uppercase tracking-[0.45em] text-[#95818f]">
            deer + raccoon
          </p>

        </div>

      </section>


      {/* =====================================================
          PHOTO ARCHIVE
      ===================================================== */}

      <section className="relative px-4 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20">

        <SectionLabel
          number="06"
          title="PHOTO ARCHIVE"
        />

        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">

          <div>

            <div className="flex items-center gap-3">

              <Camera
                size={16}
                strokeWidth={1}
                className="text-[#8d6b80]"
              />

              <span
                className="text-xl text-[#9a7086]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                JL photos ♡
              </span>

            </div>

            <h2
              className="mt-2 text-6xl leading-[0.75] tracking-[-0.07em] text-[#514657] sm:text-8xl"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              ARCHIVE
            </h2>

          </div>

          <p
            className="max-w-xs text-lg leading-7 text-[#776c7a]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Newest photo first.
            <br />
            Tap a photo to visit the original post.
          </p>

        </div>


        {/* PHOTO GRID */}

        <div className="mt-12 grid grid-cols-6 gap-2 sm:gap-4">

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


        {!showArchive ? (

          <button
            type="button"
            onClick={() => setShowArchive(true)}
            className="mx-auto mt-12 flex items-center gap-3 rounded-full bg-[#5b5061] px-8 py-3 text-[8px] uppercase tracking-[0.4em] text-[#fffaf4] shadow-[4px_5px_0_rgba(80,62,79,0.12)] transition hover:-translate-y-1 hover:bg-[#695b6c]"
          >
            View Full Archive

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
                className="rounded-full bg-[#eee0eb] px-8 py-3 text-[8px] uppercase tracking-[0.4em] text-[#625667] shadow-[3px_4px_0_rgba(80,62,79,0.08)] transition hover:bg-[#e5d4e2]"
              >
                Load More
              </button>

            )}

            {photoLimit >= photos.length && (

              <span
                className="text-xl text-[#9b7087]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                End of archive ♡
              </span>

            )}

            <button
              type="button"
              onClick={() => {
                setShowArchive(false);
                setPhotoLimit(9);
              }}
              className="text-[8px] uppercase tracking-[0.4em] text-[#877b87] underline underline-offset-4"
            >
              Close Archive
            </button>

          </div>

        )}

      </section>


      {/* =====================================================
          FINAL
      ===================================================== */}

      <section className="relative px-6 pb-28 pt-12 text-center sm:px-10">

        <div className="mx-auto flex max-w-sm items-center gap-4">

          <span className="h-px flex-1 bg-[#a990a3]" />

          <span className="text-lg text-[#9b7188]">
            ♡
          </span>

          <span className="h-px flex-1 bg-[#a990a3]" />

        </div>


        <div className="mt-10 flex justify-center">

          <CuteDeer />

        </div>


        <h2
          className="mt-6 text-7xl tracking-[-0.09em] text-[#514657] sm:text-[10rem]"
          style={{
            fontFamily:
              "'Bodoni 72', Didot, Georgia, serif",
          }}
        >
          JL
        </h2>

        <p
          className="mt-1 text-2xl text-[#9b7087]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          Yence · Jaeyel
        </p>

        <p
          className="mt-5 text-lg text-[#786878]"
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          saved here, just because ♡
        </p>

        <div className="mt-7 text-sm tracking-[0.3em] text-[#856c7e]">
          ୨୧ ⋆ 𐙚 ⋆ ୨୧
        </div>

      </section>

    </main>
  );
}


/* =============================================================
   SECTION LABEL
============================================================= */

function SectionLabel({ number, title }) {
  return (
    <div className="mb-12 flex items-center gap-3">

      <span className="font-mono text-[7px] tracking-[0.3em] text-[#866b7e]">
        {number}
      </span>

      <span className="h-px w-9 bg-[#a78b9f]" />

      <span className="font-mono text-[7px] uppercase tracking-[0.45em] text-[#776d7a]">
        {title}
      </span>

      <span className="ml-auto text-sm text-[#a0758a]">
        ♡
      </span>

    </div>
  );
}


/* =============================================================
   QUICK ITEM
============================================================= */

function QuickItem({ label, value }) {
  return (
    <div className="border-l border-[#b39baa]/60 pl-3">

      <p className="font-mono text-[6px] tracking-[0.35em] text-[#927286]">
        {label}
      </p>

      <p
        className="mt-2 text-lg leading-6 text-[#5d5362] sm:text-xl"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
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
    <span className="rounded-full border border-[#ad92a2]/60 bg-[#fff9f4]/60 px-4 py-2 font-mono text-[6px] tracking-[0.15em] text-[#776a78] shadow-[2px_3px_0_rgba(81,65,80,0.06)]">
      {text}
    </span>
  );
}


/* =============================================================
   TINY STICKER
============================================================= */

function TinySticker({ children }) {
  return (
    <span className="rotate-[-2deg] rounded-lg border border-[#b796a8]/50 bg-[#fff7ef]/65 px-3 py-1.5 text-[9px] text-[#7b6374] shadow-[2px_3px_0_rgba(80,63,80,0.07)]">
      {children}
    </span>
  );
}


/* =============================================================
   FEATURE CARD
============================================================= */

function FeatureCard({
  background,
  number,
  title,
  value,
  className = "",
  large = false,
  doodle = "♡",
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2.4rem] p-7 shadow-[0_18px_45px_rgba(65,55,75,0.08)] transition duration-300 hover:-translate-y-1 sm:p-9 ${className}`}
      style={{
        backgroundColor: background,
      }}
    >

      <span
        className="absolute -right-2 -top-8 text-[10rem] leading-none text-black/[0.035]"
        style={{
          fontFamily:
            "'Bodoni 72', Didot, Georgia, serif",
        }}
      >
        {number}
      </span>

      <span className="absolute right-7 top-7 rotate-[8deg] text-xl text-[#756475]/60">
        {doodle}
      </span>


      <div className="relative">

        <span className="font-mono text-[7px] tracking-[0.35em] text-[#756a77]">
          {number}
        </span>

        <h3
          className={`mt-9 text-[#5c5362] ${
            large
              ? "text-4xl sm:text-5xl"
              : "text-3xl sm:text-4xl"
          }`}
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          {title}
        </h3>

        <p
          className="mt-6 max-w-lg text-lg leading-8 text-[#6b6270] sm:text-xl"
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          {value}
        </p>

      </div>

    </div>
  );
}


/* =============================================================
   FAVORITE CARD
============================================================= */

function FavoriteCard({ label, value }) {
  return (
    <div className="rounded-[1.4rem] border border-white/50 bg-white/35 p-5 backdrop-blur-sm">

      <p className="font-mono text-[6px] tracking-[0.35em] text-[#917f8d]">
        {label}
      </p>

      <p
        className="mt-4 text-xl text-[#625968]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {value}
      </p>

    </div>
  );
}


/* =============================================================
   PHOTO PLACEHOLDER
============================================================= */

function PhotoPlaceholder({
  large = false,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.7rem] bg-[#d8cedb] ${
        large ? "aspect-[4/3]" : "aspect-[4/5]"
      }`}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-[#b9d0df] via-[#d7c8df] to-[#e7bfcf]" />

      <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[#fff7eb]/60 blur-[70px]" />

      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#f4dfa7]/60 blur-[70px]" />

      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(#635b67 0.6px, transparent 0.6px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-white/35">

          <Camera
            size={20}
            strokeWidth={1}
            className="text-[#706777]"
          />

        </div>

        <span className="mt-4 font-mono text-[6px] tracking-[0.4em] text-[#706777]">
          JL PHOTO
        </span>

        <span
          className="mt-2 text-sm text-[#776779]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          add photo ♡
        </span>

      </div>

    </div>
  );
}


/* =============================================================
   ARCHIVE PHOTO

   Clicking a photo opens the original post.

   If postUrl is empty, it simply won't navigate.
============================================================= */

function ArchivePhoto({ photo, index }) {

  const colors = [
    ["#bfd6e3", "#d9c8df"],
    ["#e4bdcc", "#f1dda9"],
    ["#d4c4df", "#bfd8c9"],
    ["#f1dda9", "#c1d7e4"],
    ["#c4d9c9", "#e5bdcc"],
    ["#d9c9e3", "#ead4df"],
  ];

  const pair = colors[index % colors.length];

  const isLarge =
    index === 0 ||
    index === 4 ||
    index === 8 ||
    index === 13 ||
    index === 18;

  const content = (
    <div
      className={`group relative overflow-hidden rounded-[1rem] border-2 border-[#fff8f1]/80 shadow-[0_7px_18px_rgba(70,56,72,0.09)] sm:rounded-[1.4rem] ${
        isLarge
          ? "col-span-4 row-span-2 aspect-square"
          : "col-span-2 aspect-square"
      }`}
      style={{
        background: `linear-gradient(135deg, ${pair[0]}, ${pair[1]})`,
      }}
    >

      {photo.src ? (

        <img
          src={photo.src}
          alt={photo.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

      ) : (

        <div className="absolute inset-0 flex items-center justify-center">

          <Camera
            size={isLarge ? 23 : 15}
            strokeWidth={1}
            className="text-[#6d6472]/40 transition duration-300 group-hover:scale-110"
          />

        </div>

      )}


      {/* hover overlay */}

      <div className="absolute inset-0 flex items-center justify-center bg-[#4f4555]/0 transition group-hover:bg-[#4f4555]/20">

        {photo.postUrl && (
          <span className="rounded-full bg-[#fffaf3]/80 px-3 py-1.5 text-[6px] uppercase tracking-[0.25em] text-[#635769] opacity-0 shadow-sm transition group-hover:opacity-100">
            original post ↗
          </span>
        )}

      </div>


      <span className="absolute bottom-1.5 left-1.5 rounded-full bg-[#fff8f1]/75 px-2 py-1 font-mono text-[5px] text-[#655c68] backdrop-blur-sm">
        {String(index + 1).padStart(2, "0")}
      </span>

    </div>
  );

  if (photo.postUrl) {
    return (
      <a
        href={photo.postUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open original post for ${photo.alt}`}
      >
        {content}
      </a>
    );
  }

  return content;
}


/* =============================================================
   CUTE DEER DOODLE

   Small text-based doodle rather than a giant illustration.
============================================================= */

function CuteDeer() {
  return (
    <div
      className="select-none text-center text-[#735e72]"
      aria-label="cute deer doodle"
    >
      <div className="text-[30px] leading-none">
        ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა
      </div>

      <div className="-mt-1 text-[11px] tracking-[0.08em]">
        ♡
      </div>
    </div>
  );
}


/* =============================================================
   CUTE RACCOON DOODLE

   Kept small and stationery-like.
============================================================= */

function CuteRaccoon() {
  return (
    <div
      className="select-none text-center text-[#6d6470]"
      aria-label="cute raccoon doodle"
    >
      <div className="text-[29px] leading-none">
        ʕ•ᴥ•ʔ
      </div>

      <div className="-mt-1 text-[10px] tracking-[0.08em]">
        ୨୧
      </div>
    </div>
  );
}
