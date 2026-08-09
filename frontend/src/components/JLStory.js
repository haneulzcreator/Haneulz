import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";

export default function JLStory() {
  const [showArchive, setShowArchive] = useState(false);
  const [photoLimit, setPhotoLimit] = useState(9);

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

  /*
   * PHOTO ARCHIVE
   *
   * Put the ORIGINAL POST URL in postUrl.
   *
   * Example:
   * {
   *   src: "/images/jl01.jpg",
   *   postUrl: "https://twitter.com/...",
   *   alt: "JL photo"
   * }
   *
   * Clicking the photo opens the original post.
   */

  const photos = [
    { src: "", postUrl: "", alt: "JL photo 01" },
    { src: "", postUrl: "", alt: "JL photo 02" },
    { src: "", postUrl: "", alt: "JL photo 03" },
    { src: "", postUrl: "", alt: "JL photo 04" },
    { src: "", postUrl: "", alt: "JL photo 05" },
    { src: "", postUrl: "", alt: "JL photo 06" },
    { src: "", postUrl: "", alt: "JL photo 07" },
    { src: "", postUrl: "", alt: "JL photo 08" },
    { src: "", postUrl: "", alt: "JL photo 09" },
    { src: "", postUrl: "", alt: "JL photo 10" },
    { src: "", postUrl: "", alt: "JL photo 11" },
    { src: "", postUrl: "", alt: "JL photo 12" },
    { src: "", postUrl: "", alt: "JL photo 13" },
    { src: "", postUrl: "", alt: "JL photo 14" },
    { src: "", postUrl: "", alt: "JL photo 15" },
    { src: "", postUrl: "", alt: "JL photo 16" },
    { src: "", postUrl: "", alt: "JL photo 17" },
    { src: "", postUrl: "", alt: "JL photo 18" },
    { src: "", postUrl: "", alt: "JL photo 19" },
    { src: "", postUrl: "", alt: "JL photo 20" },
    { src: "", postUrl: "", alt: "JL photo 21" },
    { src: "", postUrl: "", alt: "JL photo 22" },
    { src: "", postUrl: "", alt: "JL photo 23" },
    { src: "", postUrl: "", alt: "JL photo 24" },
  ];

  return (
    <main className="relative overflow-hidden rounded-[3rem] bg-[#f7f1e9] text-[#403943]">

      {/* =====================================================
          BACKGROUND TEXTURE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#dce9f5]/80 blur-[120px]" />

        <div className="absolute -right-48 top-[15%] h-[600px] w-[600px] rounded-full bg-[#ead9eb]/70 blur-[130px]" />

        <div className="absolute -left-48 top-[45%] h-[620px] w-[620px] rounded-full bg-[#f2d9df]/70 blur-[130px]" />

        <div className="absolute -right-48 top-[75%] h-[600px] w-[600px] rounded-full bg-[#f5e6bd]/70 blur-[130px]" />

        {/* paper grain */}
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage: `
              radial-gradient(#554c58 0.5px, transparent 0.5px),
              radial-gradient(#554c58 0.4px, transparent 0.4px)
            `,
            backgroundPosition: "0 0, 8px 8px",
            backgroundSize: "16px 16px",
          }}
        />

        {/* hand-drawn lines */}
        <div className="absolute left-[8%] top-[20%] h-36 w-px rotate-[19deg] bg-[#917b88]/30" />
        <div className="absolute right-[8%] top-[34%] h-44 w-px rotate-[-25deg] bg-[#917b88]/25" />
        <div className="absolute left-[11%] top-[70%] h-32 w-px rotate-[-18deg] bg-[#917b88]/25" />

      </div>


      {/* =====================================================
          COVER
      ===================================================== */}

      <section className="relative min-h-[780px] px-6 pb-24 pt-8 sm:px-10 md:px-16 lg:px-24">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="font-mono text-[8px] tracking-[0.45em] text-[#a77e91]">
              HANEULZ
            </span>

            <span className="h-px w-8 bg-[#cdb4c2]" />

            <span className="font-mono text-[7px] tracking-[0.4em] text-[#98909a]">
              JL / ARCHIVE
            </span>

          </div>

          <span className="font-mono text-[8px] tracking-[0.3em] text-[#9d949f]">
            01 / 05
          </span>

        </div>


        {/* giant JL */}

        <div className="relative mt-20">

          <span
            className="pointer-events-none absolute -left-10 -top-24 select-none text-[15rem] font-black leading-none tracking-[-0.2em] text-[#d7cddd]/45 sm:text-[22rem] md:text-[30rem]"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            J
          </span>

          <span
            className="pointer-events-none absolute right-[-4%] top-[10%] select-none text-[9rem] font-black leading-none text-[#efd8df]/50 sm:text-[14rem]"
            style={{ fontFamily: "Arial Black, sans-serif" }}
          >
            L
          </span>


          <div className="relative z-10">

            <div className="flex items-center gap-3">

              <span
                className="text-xl text-[#a4748a]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                known as
              </span>

              <span className="h-px w-10 bg-[#bd9aab]" />

              <span className="font-mono text-[7px] tracking-[0.35em] text-[#958b96]">
                JL
              </span>

            </div>


            <h1
              className="mt-2 text-[8rem] leading-[0.7] tracking-[-0.09em] text-[#403a4a] sm:text-[11rem] md:text-[15rem] lg:text-[18rem]"
              style={{
                fontFamily: "'Bodoni 72', 'Bodoni MT', Didot, Georgia, serif",
              }}
            >
              JL
            </h1>


            <div className="mt-12">

              <p
                className="text-3xl text-[#514a59] sm:text-4xl"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Jay Lawrence Gaspar
              </p>

              <p
                className="mt-1 text-2xl text-[#a4778c]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Yence · Jaeyel
              </p>

            </div>

          </div>


          {/* =================================================
              MAIN PHOTO + CHARACTER DOODLES
          ================================================= */}

          <div className="relative z-20 mt-16 ml-auto w-[94%] max-w-[600px] sm:w-[70%]">

            <div className="absolute -inset-3 rotate-[3deg] rounded-[2.5rem] bg-[#e7d8ed]" />
            <div className="absolute -inset-3 -rotate-[2deg] rounded-[2.5rem] bg-[#f2d9df]" />

            <PhotoPlaceholder large className="relative" />

            {/* DEER DOODLE */}

            <DeerDoodle className="absolute -bottom-12 -left-16 hidden sm:block" />

            {/* RACCOON DOODLE */}

            <RaccoonDoodle className="absolute -right-16 -top-20 hidden sm:block" />


            <div className="absolute -bottom-7 left-8 rotate-[-6deg] rounded-full bg-[#fff0ca] px-6 py-3 shadow-[0_15px_35px_rgba(70,55,70,0.1)]">

              <span
                className="text-xl text-[#6b606d]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Yence ♡
              </span>

            </div>

          </div>

        </div>


        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">

          <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-[#9e969f]">
            discover JL
          </span>

          <ArrowDown
            size={14}
            strokeWidth={1}
            className="text-[#ad8598]"
          />

        </div>

      </section>


      {/* =====================================================
          QUICK LOOK
      ===================================================== */}

      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="02" title="QUICK LOOK" />

        <div className="relative overflow-hidden rounded-[2.8rem] border border-[#d7c8d0] bg-[#eee6f3] p-7 shadow-[0_20px_60px_rgba(70,55,70,0.07)] sm:p-10">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#fff1cf]/70 blur-[70px]" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#f4dce5]/70 blur-[70px]" />

          <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">

            <QuickItem label="KNOWN AS" value="JL" />
            <QuickItem label="NICKNAME" value="Yence" />
            <QuickItem label="ALSO" value="Jaeyel" />
            <QuickItem label="BIRTHDAY" value={profile.birthday} />
            <QuickItem label="NATIONALITY" value={profile.nationality} />
            <QuickItem label="MBTI" value={profile.mbti} />

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="03" title="ABOUT JL" />

        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          <div className="relative">

            <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full bg-[#f5dce5]" />

            <div className="relative overflow-hidden rounded-[2.5rem]">

              <PhotoPlaceholder />

            </div>

            <DeerDoodle className="absolute -bottom-12 -right-16 hidden md:block" />

          </div>


          <div>

            <p
              className="text-2xl leading-9 text-[#655d69] sm:text-3xl sm:leading-10"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              This is where you can write a proper introduction about JL —
              who he is, what makes him memorable, and anything you want
              people visiting the HANEULZ archive to know about him.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">

              <Tag text="JL" />
              <Tag text="Yence" />
              <Tag text="Jaeyel" />
              <Tag text="Jay Lawrence Gaspar" />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOBBIES + MBTI
      ===================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="04" title="LITTLE THINGS ABOUT JL" />

        <div className="grid gap-6 md:grid-cols-12">

          <FeatureCard
            className="min-h-[350px] md:col-span-7"
            background="#dce9f7"
            number="01"
            title="HOBBIES"
            value={profile.hobbies}
            large
          />

          <FeatureCard
            className="min-h-[270px] md:col-span-5 md:mt-16"
            background="#eadcf2"
            number="02"
            title="INTERESTS"
            value={profile.interests}
          />

          {/* MBTI INSTEAD OF PERSONALITY */}

          <FeatureCard
            className="min-h-[250px] md:col-span-4 md:-mt-8"
            background="#fff0ca"
            number="03"
            title="MBTI"
            value={profile.mbti}
          />

          <FeatureCard
            className="min-h-[300px] md:col-span-8"
            background="#f3dce5"
            number="04"
            title="MORE"
            value="Add anything else you want people to know about JL."
          />

        </div>

      </section>


      {/* =====================================================
          FAVORITES
      ===================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="05" title="FAVORITES" />

        <div className="relative rounded-[3rem] border border-[#d8cad8] bg-[#e8e1f1] p-8 sm:p-12 md:p-16">

          <Star
            size={28}
            strokeWidth={1}
            className="absolute right-8 top-8 rotate-12 text-[#a98396]"
          />

          <p
            className="text-2xl text-[#a1758b]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            JL's favorites
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <FavoriteCard label="MUSIC" value="Add later" />
            <FavoriteCard label="FOOD" value="Add later" />
            <FavoriteCard label="COLOR" value="Add later" />
            <FavoriteCard label="OTHER" value="Add later" />

          </div>

        </div>

      </section>


      {/* =====================================================
          FUN FACTS
      ===================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="06" title="FUN FACTS" />

        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">

          <div className="relative">

            <h2
              className="text-8xl leading-[0.76] tracking-[-0.07em] text-[#403a4a] sm:text-[9rem]"
              style={{
                fontFamily: "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              FACTS
              <br />
              ABOUT
              <br />
              <span className="text-[#aa7d93]">
                JL
              </span>
            </h2>

            <RaccoonDoodle className="mt-8 hidden lg:block" />

          </div>


          <div>

            {facts.map((fact, index) => (

              <div
                key={index}
                className="group flex items-start gap-5 border-t border-[#cec2cc] py-7"
              >

                <span className="pt-1 font-mono text-[8px] tracking-[0.25em] text-[#ae8498]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p
                  className="text-2xl leading-8 text-[#615a68]"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  {fact}
                </p>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1}
                  className="ml-auto mt-1 shrink-0 text-[#ad899b] opacity-0 transition group-hover:opacity-100"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PHOTO ARCHIVE
      ===================================================== */}

      <section className="relative px-5 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="07" title="PHOTO ARCHIVE" />

        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">

          <div>

            <div className="flex items-center gap-3">

              <Camera
                size={17}
                strokeWidth={1}
                className="text-[#a67e91]"
              />

              <span
                className="text-xl text-[#a1758b]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                JL photos
              </span>

            </div>

            <h2
              className="mt-2 text-7xl leading-[0.75] tracking-[-0.07em] text-[#403a4a] sm:text-9xl"
              style={{
                fontFamily: "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              ARCHIVE
            </h2>

          </div>

          <p
            className="max-w-xs text-lg leading-7 text-[#817985]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Tap any photo to visit the original post.
            Newest photos are always placed first.
          </p>

        </div>


        <div className="mt-14 grid grid-cols-6 gap-2 sm:gap-3">

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
            className="mx-auto mt-12 flex items-center gap-3 rounded-full bg-[#413a4d] px-8 py-3 text-[8px] uppercase tracking-[0.4em] text-white transition hover:-translate-y-1 hover:bg-[#51485c]"
          >
            View Full Archive

            <ArrowUpRight size={13} strokeWidth={1} />

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
                className="rounded-full bg-[#eadcf2] px-8 py-3 text-[8px] uppercase tracking-[0.4em] text-[#625969] transition hover:bg-[#e1d1eb]"
              >
                Load More
              </button>

            )}

            {photoLimit >= photos.length && (

              <span
                className="text-xl text-[#a1768c]"
                style={{ fontFamily: "'Caveat', cursive" }}
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
              className="text-[8px] uppercase tracking-[0.4em] text-[#9c939e] underline underline-offset-4"
            >
              Close Archive
            </button>

          </div>

        )}

      </section>


      {/* =====================================================
          END
      ===================================================== */}

      <section className="relative px-6 pb-28 pt-14 text-center sm:px-10">

        <div className="mx-auto flex max-w-sm items-center gap-4">

          <span className="h-px flex-1 bg-[#cec2cc]" />

          <Heart
            size={15}
            strokeWidth={1}
            className="text-[#b5899e]"
          />

          <span className="h-px flex-1 bg-[#cec2cc]" />

        </div>


        <h2
          className="mt-10 text-8xl tracking-[-0.08em] text-[#403a4b] sm:text-[11rem]"
          style={{
            fontFamily: "'Bodoni 72', Didot, Georgia, serif",
          }}
        >
          JL
        </h2>

        <p
          className="mt-2 text-2xl text-[#a1768c]"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          Yence · Jaeyel
        </p>

        <div className="mt-10 flex justify-center gap-10">

          <DeerDoodle />

          <RaccoonDoodle />

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
    <div className="mb-14 flex items-center gap-4">

      <span className="font-mono text-[8px] tracking-[0.3em] text-[#ad8296]">
        {number}
      </span>

      <span className="h-px w-12 bg-[#cdbec9]" />

      <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-[#9e969f]">
        {title}
      </span>

    </div>
  );
}


/* =============================================================
   QUICK ITEM
============================================================= */

function QuickItem({ label, value }) {
  return (
    <div className="border-l border-[#c9bbc6] pl-4">

      <p className="font-mono text-[7px] tracking-[0.35em] text-[#9d8492]">
        {label}
      </p>

      <p
        className="mt-3 text-xl leading-6 text-[#5d5665]"
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
    <span className="rounded-full border border-[#cbb8c4] bg-white/40 px-5 py-2 font-mono text-[7px] tracking-[0.18em] text-[#7e707c]">
      {text}
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
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2.6rem] p-8 shadow-[0_18px_45px_rgba(65,55,75,0.06)] transition duration-300 hover:-translate-y-2 sm:p-10 ${className}`}
      style={{ backgroundColor: background }}
    >

      <span
        className="absolute -right-4 -top-12 text-[12rem] leading-none text-black/[0.035]"
        style={{
          fontFamily: "'Bodoni 72', Didot, Georgia, serif",
        }}
      >
        {number}
      </span>

      <div className="relative">

        <div className="flex items-center justify-between">

          <span className="font-mono text-[8px] tracking-[0.35em] text-[#827681]">
            {number}
          </span>

          <Sparkles
            size={16}
            strokeWidth={1}
            className="text-[#827681]/70"
          />

        </div>

        <h3
          className={`mt-10 text-[#5b5463] ${
            large ? "text-5xl sm:text-6xl" : "text-4xl"
          }`}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}
        >
          {title}
        </h3>

        <p
          className="mt-8 max-w-lg text-xl leading-8 text-[#6d6572]"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
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
    <div className="rounded-[1.7rem] bg-white/45 p-6 backdrop-blur-sm">

      <p className="font-mono text-[7px] tracking-[0.4em] text-[#9d8b98]">
        {label}
      </p>

      <p
        className="mt-5 text-2xl text-[#5f5867]"
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
   PHOTO PLACEHOLDER
============================================================= */

function PhotoPlaceholder({
  className = "",
  large = false,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.5rem] bg-[#e9e2e9] ${
        large ? "aspect-[4/3]" : "aspect-[4/5]"
      } ${className}`}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-[#dce9f7] via-[#eadcf2] to-[#f3d9e3]" />

      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/60 blur-[70px]" />

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#fff0ca]/70 blur-[70px]" />

      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(#756c78 0.6px, transparent 0.6px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/50">

          <Camera
            size={22}
            strokeWidth={1}
            className="text-[#817586]"
          />

        </div>

        <span className="mt-5 font-mono text-[7px] tracking-[0.4em] text-[#817586]">
          JL PHOTO
        </span>

      </div>

    </div>
  );
}


/* =============================================================
   CLICKABLE PHOTO ARCHIVE
============================================================= */

function ArchivePhoto({ photo, index }) {

  const colors = [
    ["#dce9f7", "#eadcf2"],
    ["#f3d9e3", "#fff0ca"],
    ["#eadcf2", "#dcebdd"],
    ["#fff0ca", "#dce9f7"],
    ["#dcebdd", "#f3d9e3"],
    ["#e7e1f2", "#eadcf2"],
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
      className={`group relative h-full w-full overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] ${
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
            size={isLarge ? 24 : 16}
            strokeWidth={1}
            className="text-[#766b79]/45 transition duration-300 group-hover:scale-110"
          />

        </div>

      )}

      {/* hover overlay */}

      <div className="absolute inset-0 flex items-center justify-center bg-[#403943]/0 transition duration-300 group-hover:bg-[#403943]/25">

        <ArrowUpRight
          size={22}
          strokeWidth={1.2}
          className="text-white opacity-0 drop-shadow-md transition duration-300 group-hover:opacity-100"
        />

      </div>

      <span className="absolute bottom-2 left-2 rounded-full bg-white/60 px-2 py-1 font-mono text-[6px] text-[#6c6370]">
        {String(index + 1).padStart(2, "0")}
      </span>

    </div>
  );

  /*
   * If there is an original post URL, clicking opens it.
   * If there isn't one yet, the photo behaves normally.
   */

  if (photo.postUrl) {
    return (
      <a
        href={photo.postUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={
          isLarge
            ? "col-span-4 row-span-2 aspect-square"
            : "col-span-2 aspect-square"
        }
        aria-label={`Open original post for ${photo.alt}`}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className={
        isLarge
          ? "col-span-4 row-span-2 aspect-square"
          : "col-span-2 aspect-square"
      }
    >
      {content}
    </div>
  );
}


/* =============================================================
   CUTE DEER DOODLE
============================================================= */

function DeerDoodle({ className = "" }) {
  return (
    <div
      className={`relative h-32 w-32 ${className}`}
      aria-label="cute deer doodle"
    >

      <svg
        viewBox="0 0 180 180"
        className="h-full w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* antlers */}

        <path
          d="M55 49 C43 35 43 19 51 10 M51 27 L39 19 M51 34 L63 20"
          stroke="#76636D"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M125 49 C137 35 137 19 129 10 M129 27 L141 19 M129 34 L117 20"
          stroke="#76636D"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* ears */}

        <path
          d="M58 52 C35 42 22 49 27 67 C33 78 47 76 61 68"
          fill="#E9C9D3"
          stroke="#76636D"
          strokeWidth="3"
        />

        <path
          d="M122 52 C145 42 158 49 153 67 C147 78 133 76 119 68"
          fill="#E9C9D3"
          stroke="#76636D"
          strokeWidth="3"
        />

        {/* head */}

        <ellipse
          cx="90"
          cy="82"
          rx="48"
          ry="50"
          fill="#D9B79A"
          stroke="#76636D"
          strokeWidth="3"
        />

        {/* forehead tuft */}

        <path
          d="M78 39 C84 27 91 32 95 41 C102 30 108 34 107 45"
          fill="#C79F7D"
          stroke="#76636D"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* eyes */}

        <circle cx="72" cy="82" r="4" fill="#403943" />
        <circle cx="108" cy="82" r="4" fill="#403943" />

        {/* cheeks */}

        <circle cx="59" cy="96" r="7" fill="#E6A9B8" opacity="0.55" />
        <circle cx="121" cy="96" r="7" fill="#E6A9B8" opacity="0.55" />

        {/* muzzle */}

        <ellipse
          cx="90"
          cy="101"
          rx="19"
          ry="14"
          fill="#EBD4C0"
        />

        {/* nose */}

        <path
          d="M85 98 Q90 94 95 98 Q92 104 90 104 Q88 104 85 98Z"
          fill="#6B5961"
        />

        {/* smile */}

        <path
          d="M90 104 C87 110 82 110 80 107 M90 104 C93 110 98 110 100 107"
          stroke="#76636D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* tiny heart */}

        <path
          d="M137 118 C132 111 121 116 137 132 C153 116 142 111 137 118Z"
          fill="#C987A2"
        />

      </svg>

    </div>
  );
}


/* =============================================================
   CUTE RACCOON DOODLE
============================================================= */

function RaccoonDoodle({ className = "" }) {
  return (
    <div
      className={`relative h-32 w-32 ${className}`}
      aria-label="cute raccoon doodle"
    >

      <svg
        viewBox="0 0 180 180"
        className="h-full w-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        {/* ears */}

        <path
          d="M49 52 C34 34 20 37 26 58 C30 68 41 70 54 65"
          fill="#9D939D"
          stroke="#5F5660"
          strokeWidth="3"
        />

        <path
          d="M131 52 C146 34 160 37 154 58 C150 68 139 70 126 65"
          fill="#9D939D"
          stroke="#5F5660"
          strokeWidth="3"
        />

        {/* inner ears */}

        <path
          d="M35 50 Q30 43 38 45"
          stroke="#E8C9D4"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M145 50 Q150 43 142 45"
          stroke="#E8C9D4"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* head */}

        <ellipse
          cx="90"
          cy="88"
          rx="52"
          ry="48"
          fill="#B7ADB5"
          stroke="#5F5660"
          strokeWidth="3"
        />

        {/* mask */}

        <path
          d="M42 77 Q62 57 90 73 Q118 57 138 77 L132 103 Q110 115 90 101 Q70 115 48 103Z"
          fill="#655D66"
        />

        {/* eyes */}

        <ellipse cx="69" cy="83" rx="6" ry="5" fill="#FFF8F2" />
        <ellipse cx="111" cy="83" rx="6" ry="5" fill="#FFF8F2" />

        <circle cx="69" cy="83" r="2.5" fill="#403943" />
        <circle cx="111" cy="83" r="2.5" fill="#403943" />

        {/* muzzle */}

        <ellipse
          cx="90"
          cy="103"
          rx="23"
          ry="17"
          fill="#D8CED2"
        />

        {/* nose */}

        <ellipse
          cx="90"
          cy="99"
          rx="7"
          ry="5"
          fill="#403943"
        />

        {/* smile */}

        <path
          d="M90 104 Q84 111 79 107 M90 104 Q96 111 101 107"
          stroke="#5F5660"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* cheek dots */}

        <circle cx="57" cy="105" r="2" fill="#8B7D87" />
        <circle cx="63" cy="109" r="2" fill="#8B7D87" />

        <circle cx="123" cy="105" r="2" fill="#8B7D87" />
        <circle cx="117" cy="109" r="2" fill="#8B7D87" />

        {/* little heart */}

        <path
          d="M143 119 C138 112 127 117 143 133 C159 117 148 112 143 119Z"
          fill="#A77E91"
        />

      </svg>

    </div>
  );
}
