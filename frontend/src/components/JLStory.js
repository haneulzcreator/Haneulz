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
  ];

  /* =========================================================
     PHOTO ARCHIVE

     newest photo = FIRST ITEM

     IMPORTANT:
     url = ORIGINAL POST LINK

     Example:
     {
       src: "https://...",
       url: "https://x.com/...",
       alt: "JL photo"
     }
  ========================================================= */

  const photos = [
    {
      src: "",
      url: "",
      alt: "JL photo 01",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 02",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 03",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 04",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 05",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 06",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 07",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 08",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 09",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 10",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 11",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 12",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 13",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 14",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 15",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 16",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 17",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 18",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 19",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 20",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 21",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 22",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 23",
    },
    {
      src: "",
      url: "",
      alt: "JL photo 24",
    },
  ];

  return (
    <main className="relative overflow-hidden rounded-[2.5rem] bg-[#fffaf7] text-[#51464d]">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-40 h-[430px] w-[430px] rounded-full bg-[#f7dce7]/55 blur-[100px]" />

        <div className="absolute -right-40 top-[18%] h-[500px] w-[500px] rounded-full bg-[#e8def3]/55 blur-[110px]" />

        <div className="absolute -left-48 top-[45%] h-[520px] w-[520px] rounded-full bg-[#dcecf0]/45 blur-[120px]" />

        <div className="absolute -right-40 top-[72%] h-[500px] w-[500px] rounded-full bg-[#f7ebca]/50 blur-[110px]" />

        <div className="absolute left-[20%] bottom-[-180px] h-[480px] w-[480px] rounded-full bg-[#e2eee3]/50 blur-[120px]" />

        {/* paper texture */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "radial-gradient(#5d5259 0.65px, transparent 0.65px)",
            backgroundSize: "14px 14px",
          }}
        />

        {/* tiny stars */}
        <span className="absolute left-[8%] top-[14%] text-xl text-[#c296aa]/55">
          ✦
        </span>

        <span className="absolute right-[12%] top-[23%] text-sm text-[#a78cb4]/50">
          ⋆
        </span>

        <span className="absolute left-[12%] top-[62%] text-lg text-[#9cb8b4]/50">
          ˚
        </span>

        <span className="absolute right-[9%] top-[82%] text-xl text-[#c6a47d]/45">
          ✧
        </span>

      </div>


      {/* =====================================================
          COVER
      ===================================================== */}

      <section className="relative px-6 pb-20 pt-7 sm:px-10 sm:pb-28 md:px-16 lg:px-24">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="text-sm text-[#b17f96]">
              ♡
            </span>

            <span className="font-mono text-[7px] tracking-[0.45em] text-[#9d8791]">
              HANEULZ ARCHIVE
            </span>

          </div>

          <span className="font-mono text-[7px] tracking-[0.35em] text-[#aaa0a5]">
            JL / 01
          </span>

        </div>


        {/* character note */}

        <div className="mt-10 flex justify-center">

          <div className="rotate-[-2deg] rounded-[1.5rem] border border-[#e3cdd7] bg-[#fff4f6]/85 px-5 py-3 shadow-[3px_4px_0_rgba(175,135,153,0.08)]">

            <p
              className="text-sm text-[#806a74]"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              ୨୧ a little page for Yence ୨୧
            </p>

          </div>

        </div>


        {/* main title */}

        <div className="relative mx-auto mt-16 max-w-4xl text-center">

          <span className="absolute -left-3 top-2 text-5xl text-[#e4c8d5]/70">
            ♡
          </span>

          <span className="absolute -right-3 bottom-4 text-4xl text-[#d7cce5]/70">
            ୨୧
          </span>


          <p
            className="text-lg text-[#a67a8f]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            known as
          </p>


          <h1
            className="mt-2 text-[7rem] leading-[0.8] tracking-[-0.08em] text-[#51454d] sm:text-[10rem] md:text-[13rem]"
            style={{
              fontFamily:
                "'Bodoni 72', 'Didot', Georgia, serif",
            }}
          >
            JL
          </h1>


          <div className="mt-8 flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-[#d3b5c2]" />

            <span className="text-sm text-[#ad8094]">
              ♡
            </span>

            <span className="h-px w-10 bg-[#d3b5c2]" />

          </div>


          <h2
            className="mt-7 text-3xl text-[#665b63] sm:text-4xl"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Jay Lawrence Gaspar
          </h2>


          <p
            className="mt-2 text-2xl text-[#b17c93]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            Yence · Jaeyel
          </p>

        </div>


        {/* character doodles */}

        <div className="mx-auto mt-14 flex max-w-md items-end justify-center gap-12">

          <CharacterDoodle type="deer" />

          <div className="pb-5 text-[#c29bad]">
            ୨୧
          </div>

          <CharacterDoodle type="raccoon" />

        </div>


        {/* main image */}

        <div className="relative mx-auto mt-10 max-w-2xl">

          <div className="absolute -inset-2 rotate-[2deg] rounded-[2rem] bg-[#f0dce6]" />

          <div className="absolute -inset-2 -rotate-[1.5deg] rounded-[2rem] bg-[#e6def0]" />

          <PhotoPlaceholder
            large
            className="relative z-10"
          />

          <div className="absolute -bottom-5 -left-4 z-20 rotate-[-4deg] rounded-full bg-[#fff0c9] px-5 py-2.5 shadow-sm">

            <span
              className="text-lg text-[#71636a]"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              Yence ♡
            </span>

          </div>

        </div>


        <div className="mt-14 text-center">

          <p
            className="text-sm tracking-[0.08em] text-[#968890]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            a tiny collection of things about JL
          </p>

          <p className="mt-2 text-xs text-[#b69ba8]">
            ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚
          </p>

        </div>

      </section>


      {/* =====================================================
          QUICK LOOK
      ===================================================== */}

      <section className="relative px-6 py-20 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel
          number="02"
          title="a quick look"
        />


        <div className="relative rounded-[2.5rem] border border-[#e1d4dc] bg-white/65 p-7 shadow-[0_20px_60px_rgba(94,72,84,0.06)] backdrop-blur-sm sm:p-10">

          <div className="absolute right-7 top-6 text-[#c69daf]/45">
            ୨୧
          </div>


          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">

            <QuickItem
              label="KNOWN AS"
              value="JL"
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

      <section className="relative px-6 py-20 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel
          number="03"
          title="about JL"
        />


        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <div className="relative">

            <div className="absolute -left-5 -top-5 text-5xl text-[#dcbccc]/65">
              ♡
            </div>

            <PhotoPlaceholder />

            <div className="absolute -bottom-5 -right-4 rotate-[3deg] rounded-full bg-[#dceaf4] px-5 py-2.5">

              <span
                className="text-lg text-[#6c6870]"
                style={{
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                Jaeyel ♡
              </span>

            </div>

          </div>


          <div className="rounded-[2rem] border border-[#e4d7de] bg-[#fffdfb]/80 p-7 sm:p-10">

            <p className="mb-4 text-xs tracking-[0.25em] text-[#b28a9c]">
              ୨୧ PROFILE NOTE
            </p>

            <p
              className="text-xl leading-8 text-[#6b6068] sm:text-2xl sm:leading-9"
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

          </div>

        </div>

      </section>


      {/* =====================================================
          HOBBIES / INTERESTS
      ===================================================== */}

      <section className="relative px-6 py-20 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel
          number="04"
          title="little things about him"
        />


        <div className="grid gap-5 sm:grid-cols-2">

          <InfoCard
            title="Hobbies"
            value={profile.hobbies}
            symbol="♡"
            background="#e7f0f8"
          />

          <InfoCard
            title="Interests"
            value={profile.interests}
            symbol="୨୧"
            background="#eee6f4"
          />

          <InfoCard
            title="MBTI"
            value={profile.mbti}
            symbol="✦"
            background="#fff0ca"
          />

          <InfoCard
            title="Favorites"
            value={profile.favorites}
            symbol="⋆"
            background="#f4e0e8"
          />

        </div>

      </section>


      {/* =====================================================
          MINI NOTE
      ===================================================== */}

      <section className="relative px-6 py-12 sm:px-10 md:px-20">

        <div className="relative mx-auto max-w-3xl rotate-[-1deg] rounded-[2rem] border border-[#e1cdd7] bg-[#fff5f6] px-7 py-10 text-center shadow-[5px_8px_0_rgba(178,137,157,0.08)] sm:px-12">

          <span className="absolute left-5 top-4 text-2xl text-[#c291a6]/50">
            “
          </span>

          <p
            className="text-2xl leading-9 text-[#665962] sm:text-3xl"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            A little space for all the random things that make
            JL, well… JL.
          </p>

          <p
            className="mt-5 text-sm text-[#ad7d92]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            ♡ saved in the archive ♡
          </p>

        </div>

      </section>


      {/* =====================================================
          FUN FACTS
      ===================================================== */}

      <section className="relative px-6 py-20 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel
          number="05"
          title="fun facts"
        />


        <div className="rounded-[2.5rem] border border-[#e2d5dd] bg-white/60 px-6 py-4 backdrop-blur-sm sm:px-10">

          {facts.map((fact, index) => (

            <div
              key={index}
              className="flex items-start gap-4 border-b border-[#e7dce2] py-6 last:border-b-0"
            >

              <span className="mt-1 shrink-0 text-sm text-[#bc8ca0]">
                {index % 2 === 0 ? "♡" : "୨୧"}
              </span>

              <p
                className="text-xl leading-8 text-[#685e66] sm:text-2xl"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                {fact}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          PHOTO ARCHIVE
      ===================================================== */}

      <section className="relative px-5 py-20 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel
          number="06"
          title="JL photo archive"
        />


        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <Camera
                size={17}
                strokeWidth={1.2}
                className="text-[#aa7e91]"
              />

              <span
                className="text-lg text-[#a8788e]"
                style={{
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                newest first ♡
              </span>

            </div>

            <h2
              className="mt-2 text-6xl text-[#51464e] sm:text-8xl"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              PHOTOS
            </h2>

          </div>


          <p
            className="max-w-xs text-sm leading-6 text-[#91858d]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Tap any photo to visit its original post.
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
            className="mx-auto mt-12 flex items-center gap-3 rounded-full border border-[#d4c3cc] bg-white/70 px-7 py-3 font-mono text-[7px] tracking-[0.4em] text-[#71646c] shadow-sm transition hover:-translate-y-1 hover:bg-white"
          >
            VIEW FULL ARCHIVE
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
                className="rounded-full bg-[#eee4f2] px-8 py-3 font-mono text-[7px] tracking-[0.4em] text-[#6e6271] transition hover:bg-[#e5d8eb]"
              >
                LOAD MORE
              </button>

            )}

            {photoLimit >= photos.length && (

              <span
                className="text-lg text-[#a3788c]"
                style={{
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                end of archive ♡
              </span>

            )}

            <button
              type="button"
              onClick={() => {
                setShowArchive(false);
                setPhotoLimit(9);
              }}
              className="font-mono text-[7px] tracking-[0.4em] text-[#a0979d] underline underline-offset-4"
            >
              CLOSE ARCHIVE
            </button>

          </div>

        )}

      </section>


      {/* =====================================================
          END CARD
      ===================================================== */}

      <section className="relative px-6 pb-24 pt-12 text-center sm:px-10">

        <div className="mx-auto max-w-sm">

          <div className="flex items-center gap-3">

            <span className="h-px flex-1 bg-[#decfd7]" />

            <span className="text-sm text-[#b88ba0]">
              ♡
            </span>

            <span className="h-px flex-1 bg-[#decfd7]" />

          </div>


          <div className="mt-10 flex justify-center">

            <CharacterDoodle type="deer" />

          </div>


          <h2
            className="mt-6 text-7xl tracking-[-0.06em] text-[#51464e] sm:text-9xl"
            style={{
              fontFamily:
                "'Bodoni 72', 'Didot', Georgia, serif",
            }}
          >
            JL
          </h2>


          <p
            className="mt-2 text-2xl text-[#aa7890]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            Yence · Jaeyel
          </p>


          <p className="mt-5 text-xs text-[#aa9ba3]">
            ୨୧ made for the archive ୨୧
          </p>

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
    <div className="mb-10 flex items-center gap-3">

      <span className="text-sm text-[#bc8ca0]">
        {number % 2 === 0 ? "୨୧" : "♡"}
      </span>

      <span className="font-mono text-[7px] tracking-[0.4em] text-[#a08e97]">
        {title}
      </span>

      <span className="h-px flex-1 bg-[#ded2d9]" />

    </div>
  );
}


/* =============================================================
   QUICK ITEM
============================================================= */

function QuickItem({ label, value }) {
  return (
    <div className="border-l border-[#d8c9d1] pl-4">

      <p className="font-mono text-[6px] tracking-[0.35em] text-[#aa8998]">
        {label}
      </p>

      <p
        className="mt-2 text-lg leading-6 text-[#625860]"
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
    <span className="rounded-full border border-[#d8c6cf] bg-white/70 px-4 py-2 font-mono text-[6px] tracking-[0.15em] text-[#7e6d76]">
      {text}
    </span>
  );
}


/* =============================================================
   INFO CARD
============================================================= */

function InfoCard({
  title,
  value,
  symbol,
  background,
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[2.2rem] p-7 shadow-[0_15px_45px_rgba(80,65,75,0.06)] sm:p-9"
      style={{
        backgroundColor: background,
      }}
    >

      <span className="absolute right-6 top-5 text-3xl text-black/[0.08]">
        {symbol}
      </span>

      <p className="font-mono text-[7px] tracking-[0.35em] text-[#81747b]">
        {title}
      </p>

      <p
        className="mt-7 text-3xl text-[#625862]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {value}
      </p>

      <p className="mt-5 text-xs text-[#8d8088]">
        ୨୧ add more later
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
      className={`relative overflow-hidden rounded-[2.3rem] bg-[#eee5eb] ${
        large ? "aspect-[4/3]" : "aspect-[4/5]"
      } ${className}`}
    >

      <div className="absolute inset-0 bg-gradient-to-br from-[#e4eef7] via-[#eee3f2] to-[#f5dce5]" />

      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/65 blur-[70px]" />

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#fff0c9]/65 blur-[70px]" />

      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(#756c78 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/55">

          <Camera
            size={21}
            strokeWidth={1}
            className="text-[#817586]"
          />

        </div>

        <span className="mt-4 font-mono text-[7px] tracking-[0.4em] text-[#817586]">
          JL PHOTO
        </span>

        <span
          className="mt-3 text-sm text-[#a37f91]"
          style={{
            fontFamily: "'Comic Sans MS', cursive",
          }}
        >
          ♡
        </span>

      </div>

    </div>
  );
}


/* =============================================================
   ARCHIVE PHOTO

   Clicking the photo opens the ORIGINAL POST.

   If no URL exists, it simply won't navigate.
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
      className={`group relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] ${
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

          <div className="text-center">

            <Camera
              size={isLarge ? 24 : 16}
              strokeWidth={1}
              className="mx-auto text-[#766b79]/45 transition duration-300 group-hover:scale-110"
            />

            <span
              className="mt-2 block text-[10px] text-[#8a7982]/60"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              ♡
            </span>

          </div>

        </div>

      )}


      {/* hover overlay */}

      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/10">

        {photo.url && (
          <div className="translate-y-2 rounded-full bg-white/80 px-3 py-2 text-[7px] tracking-[0.15em] text-[#655963] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            ORIGINAL POST ↗
          </div>
        )}

      </div>


      <span className="absolute bottom-2 left-2 rounded-full bg-white/65 px-2 py-1 font-mono text-[6px] text-[#6c6370]">
        {String(index + 1).padStart(2, "0")}
      </span>

    </div>
  );

  return photo.url ? (
    <a
      href={photo.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open original post for ${photo.alt}`}
      className="contents"
    >
      {content}
    </a>
  ) : (
    content
  );
}


/* =============================================================
   CUTE CHARACTER DOODLES

   These are intentionally symbol-based instead of emoji
   illustrations so they match the ♡ / ୨୧ scrapbook aesthetic.
============================================================= */

function CharacterDoodle({ type }) {
  if (type === "deer") {
    return (
      <div
        className="select-none text-center text-[#9c7c72]"
        style={{
          fontFamily: "'Comic Sans MS', cursive",
        }}
      >
        <div className="text-[27px] leading-none">
          ʚ♡ɞ
        </div>

        <div className="mt-[-2px] text-[17px] tracking-[-0.15em]">
          ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა
        </div>

        <div className="mt-1 text-[8px] tracking-[0.25em] text-[#b08c91]">
          deer ♡
        </div>
      </div>
    );
  }

  return (
    <div
      className="select-none text-center text-[#7e747a]"
      style={{
        fontFamily: "'Comic Sans MS', cursive",
      }}
    >
      <div className="text-[22px] leading-none">
        ʕ•ᴥ•ʔ
      </div>

      <div className="mt-1 text-[8px] tracking-[0.2em] text-[#a28a94]">
        raccoon ♡
      </div>
    </div>
  );
}
