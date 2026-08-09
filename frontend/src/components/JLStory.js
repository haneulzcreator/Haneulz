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
  ========================================================= */

  const photos = [
    { src: "", alt: "JL photo 01" },
    { src: "", alt: "JL photo 02" },
    { src: "", alt: "JL photo 03" },
    { src: "", alt: "JL photo 04" },
    { src: "", alt: "JL photo 05" },
    { src: "", alt: "JL photo 06" },
    { src: "", alt: "JL photo 07" },
    { src: "", alt: "JL photo 08" },
    { src: "", alt: "JL photo 09" },
    { src: "", alt: "JL photo 10" },
    { src: "", alt: "JL photo 11" },
    { src: "", alt: "JL photo 12" },
    { src: "", alt: "JL photo 13" },
    { src: "", alt: "JL photo 14" },
    { src: "", alt: "JL photo 15" },
    { src: "", alt: "JL photo 16" },
    { src: "", alt: "JL photo 17" },
    { src: "", alt: "JL photo 18" },
    { src: "", alt: "JL photo 19" },
    { src: "", alt: "JL photo 20" },
    { src: "", alt: "JL photo 21" },
    { src: "", alt: "JL photo 22" },
    { src: "", alt: "JL photo 23" },
    { src: "", alt: "JL photo 24" },
  ];

  return (
    <main className="relative overflow-hidden rounded-[3rem] bg-[#f8f5f1] text-[#403b49]">

      {/* =====================================================
          EXPERIMENTAL BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-32 h-[540px] w-[540px] rounded-full bg-[#d9e7f5] opacity-70 blur-[120px]" />

        <div className="absolute -right-48 top-[12%] h-[580px] w-[580px] rounded-full bg-[#eadcf1] opacity-75 blur-[120px]" />

        <div className="absolute -left-48 top-[38%] h-[650px] w-[650px] rounded-full bg-[#f3dce5] opacity-65 blur-[130px]" />

        <div className="absolute -right-48 top-[68%] h-[650px] w-[650px] rounded-full bg-[#f8ebc9] opacity-65 blur-[130px]" />

        <div className="absolute left-[15%] top-[88%] h-[520px] w-[520px] rounded-full bg-[#dcebdd] opacity-55 blur-[130px]" />

        {/* paper texture */}
        <div
          className="absolute inset-0 opacity-[0.065]"
          style={{
            backgroundImage:
              "radial-gradient(#5e5664 0.7px, transparent 0.7px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* tiny grain */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #403b49 0px, #403b49 1px, transparent 1px, transparent 5px)",
          }}
        />

        {/* hand-drawn lines */}
        <div className="absolute left-[7%] top-[17%] h-32 w-px rotate-[18deg] bg-[#9e8797]/30" />

        <div className="absolute right-[10%] top-[29%] h-40 w-px rotate-[-25deg] bg-[#9e8797]/25" />

        <div className="absolute left-[9%] top-[70%] h-36 w-px rotate-[-22deg] bg-[#9e8797]/25" />

        {/* little hand-drawn circles */}
        <div className="absolute left-[12%] top-[24%] h-4 w-4 rounded-full border border-[#aa8497]/40" />

        <div className="absolute right-[8%] top-[48%] h-5 w-5 rounded-full border border-[#9c88aa]/40" />

        <div className="absolute left-[5%] top-[81%] h-3 w-3 rounded-full border border-[#8aa49b]/40" />

      </div>


      {/* =====================================================
          COVER
      ===================================================== */}

      <section className="relative min-h-[850px] px-6 pb-24 pt-8 sm:px-10 md:px-16 lg:px-24">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="font-mono text-[8px] tracking-[0.45em] text-[#a77e91]">
              HANEULZ
            </span>

            <span className="h-px w-8 bg-[#cdb4c2]" />

            <span className="font-mono text-[7px] tracking-[0.4em] text-[#98909a]">
              JL / PROFILE
            </span>

          </div>

          <span className="font-mono text-[8px] tracking-[0.3em] text-[#9d949f]">
            01 / 05
          </span>

        </div>


        <div className="relative mt-24">

          {/* giant background typography */}

          <span
            className="pointer-events-none absolute -left-8 -top-28 select-none text-[15rem] font-black leading-none tracking-[-0.18em] text-[#d9cfe1]/45 sm:text-[21rem] md:text-[29rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            J
          </span>

          <span
            className="pointer-events-none absolute right-[-5%] top-[10%] select-none text-[8rem] font-black leading-none tracking-[-0.15em] text-[#f0d9e2]/50 sm:text-[12rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            L
          </span>


          <div className="relative z-10">

            <div className="ml-2 flex items-center gap-3">

              <span
                className="text-xl text-[#a4748a]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
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
                fontFamily:
                  "'Bodoni 72', 'Bodoni MT', Didot, Georgia, serif",
              }}
            >
              JL
            </h1>


            <div className="mt-12 ml-2">

              <p
                className="text-3xl tracking-[0.01em] text-[#514a59] sm:text-4xl"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Jay Lawrence Gaspar
              </p>

              <p
                className="mt-1 text-2xl text-[#a4778c]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Yence · Jaeyel
              </p>

            </div>

          </div>


          {/* MAIN PHOTO */}

          <div className="relative z-20 mt-16 ml-auto w-[94%] max-w-[600px] sm:w-[70%]">

            <div className="absolute -inset-3 rotate-[3deg] rounded-[2.5rem] bg-[#e8d9ef]" />

            <div className="absolute -inset-3 -rotate-[2deg] rounded-[2.5rem] bg-[#f3d8e2]" />

            <PhotoPlaceholder
              large
              className="relative"
            />

            <div className="absolute -bottom-7 -left-5 rotate-[-6deg] rounded-full bg-[#fff0ca] px-6 py-3 shadow-[0_15px_35px_rgba(70,55,70,0.1)]">

              <span
                className="text-xl text-[#6b606d]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Yence
              </span>

            </div>

            <div className="absolute -right-4 -top-8 rotate-[8deg] rounded-full bg-white/70 px-4 py-2">

              <span className="font-mono text-[7px] tracking-[0.3em] text-[#827782]">
                JAEYEL
              </span>

            </div>

            <Sparkles
              size={28}
              strokeWidth={1}
              className="absolute -right-6 top-[40%] rotate-12 text-[#aa8497]"
            />

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
          CHARACTER DRAWINGS
      ===================================================== */}

      <section className="relative px-6 py-16 sm:px-10 md:px-16 lg:px-24">

        <div className="relative mx-auto max-w-5xl">

          <div className="absolute left-[8%] top-10 rotate-[-8deg]">
            <RaccoonDrawing />
          </div>

          <div className="absolute right-[8%] top-16 rotate-[7deg]">
            <DeerDrawing />
          </div>

          <div className="relative mx-auto max-w-xl rounded-[3rem] border border-[#d4c5cf] bg-[#fffdf9]/75 px-8 py-14 text-center shadow-[0_20px_55px_rgba(70,55,70,0.07)] backdrop-blur-sm">

            <span className="font-mono text-[7px] uppercase tracking-[0.55em] text-[#a17e90]">
              character archive
            </span>

            <h2
              className="mt-5 text-5xl tracking-[-0.03em] text-[#494151] sm:text-6xl"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              JL's little world
            </h2>

            <p
              className="mx-auto mt-5 max-w-md text-lg leading-8 text-[#756d78]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              A tiny corner for the things that make JL,
              well... JL.
            </p>

            <div className="mx-auto mt-8 h-px w-24 bg-[#c9aebd]" />

            <p
              className="mt-5 text-xl text-[#a2748b]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              raccoon × deer
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK LOOK
      ===================================================== */}

      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel
          number="02"
          title="QUICK LOOK"
        />

        <div className="relative overflow-hidden rounded-[2.8rem] bg-[#eee6f3] p-7 sm:p-10">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#fff1cf]/70 blur-[70px]" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#f4dce5]/70 blur-[70px]" />

          <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">

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
          ABOUT
      ===================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel
          number="03"
          title="ABOUT JL"
        />

        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          <div className="relative">

            <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full bg-[#f5dce5]" />

            <div className="relative overflow-hidden rounded-[2.5rem]">

              <PhotoPlaceholder />

            </div>

            <div className="absolute -bottom-6 -right-5 rounded-full bg-[#dce9f7] px-6 py-3">

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

            <p
              className="text-2xl leading-9 text-[#655d69] sm:text-3xl sm:leading-10"
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
          HOBBIES
      ===================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel
          number="04"
          title="HOBBIES & INTERESTS"
        />

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

        <SectionLabel
          number="05"
          title="FAVORITES"
        />

        <div className="relative rounded-[3rem] bg-[#e8e1f1] p-8 sm:p-12 md:p-16">

          <div className="absolute right-8 top-8">

            <Star
              size={28}
              strokeWidth={1}
              className="rotate-12 text-[#a98396]"
            />

          </div>

          <p
            className="text-2xl text-[#a1758b]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            JL's favorites
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <FavoriteCard
              label="MUSIC"
              value={profile.favorites}
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

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel
          number="06"
          title="FUN FACTS"
        />

        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">

          <div>

            <h2
              className="text-8xl leading-[0.76] tracking-[-0.07em] text-[#403a4a] sm:text-[9rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
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

            <div className="mt-10">
              <RaccoonDrawing small />
            </div>

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
                    fontFamily:
                      "'Cormorant Garamond', Georgia, serif",
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

        <SectionLabel
          number="07"
          title="PHOTO ARCHIVE"
        />

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
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                JL photos
              </span>

            </div>

            <h2
              className="mt-2 text-7xl leading-[0.75] tracking-[-0.07em] text-[#403a4a] sm:text-9xl"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              ARCHIVE
            </h2>

          </div>

          <div className="max-w-xs">

            <p
              className="text-lg leading-7 text-[#817985]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              The newest photo goes first. Open the archive
              to keep exploring.
            </p>

          </div>

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
                className="rounded-full bg-[#eadcf2] px-8 py-3 text-[8px] uppercase tracking-[0.4em] text-[#625969] transition hover:bg-[#e1d1eb]"
              >
                Load More
              </button>

            )}

            {photoLimit >= photos.length && (

              <span
                className="text-xl text-[#a1768c]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                End of archive
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
          CHARACTER SIGN-OFF
      ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-28 pt-14 text-center sm:px-10">

        <div className="absolute left-[8%] top-10 opacity-70">
          <DeerDrawing small />
        </div>

        <div className="absolute right-[8%] top-12 opacity-70">
          <RaccoonDrawing small />
        </div>

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
            fontFamily:
              "'Bodoni 72', Didot, Georgia, serif",
          }}
        >
          JL
        </h2>


        <p
          className="mt-2 text-2xl text-[#a1768c]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          Yence · Jaeyel
        </p>

        <p
          className="mx-auto mt-6 max-w-sm text-sm leading-6 text-[#8b828d]"
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          archived with care, little by little.
        </p>

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
      style={{
        backgroundColor: background,
      }}
    >

      <span
        className="absolute -right-4 -top-12 text-[12rem] leading-none text-black/[0.035]"
        style={{
          fontFamily:
            "'Bodoni 72', Didot, Georgia, serif",
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
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          {title}
        </h3>

        <p
          className="mt-8 max-w-lg text-xl leading-8 text-[#6d6572]"
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
    <div className="rounded-[1.7rem] bg-white/45 p-6 backdrop-blur-sm">

      <p className="font-mono text-[7px] tracking-[0.4em] text-[#9d8b98]">
        {label}
      </p>

      <p
        className="mt-5 text-2xl text-[#5f5867]"
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
   PHOTO ARCHIVE ITEM
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

  return (
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

          <Camera
            size={isLarge ? 24 : 16}
            strokeWidth={1}
            className="text-[#766b79]/45 transition duration-300 group-hover:scale-110"
          />

        </div>

      )}

      <span className="absolute bottom-2 left-2 rounded-full bg-white/60 px-2 py-1 font-mono text-[6px] text-[#6c6370]">
        {String(index + 1).padStart(2, "0")}
      </span>

    </div>
  );
}


/* =============================================================
   RACCOON DRAWING
   JL / HANEULZ CHARACTER
============================================================= */

function RaccoonDrawing({ small = false }) {
  return (
    <div
      className={`relative ${
        small ? "h-28 w-28" : "h-36 w-36"
      }`}
    >

      {/* ears */}
      <div className="absolute left-[18%] top-[12%] h-10 w-10 rotate-[-25deg] rounded-[45%] border-[3px] border-[#514a52] bg-[#b9a7b1]" />

      <div className="absolute right-[18%] top-[12%] h-10 w-10 rotate-[25deg] rounded-[45%] border-[3px] border-[#514a52] bg-[#b9a7b1]" />

      {/* head */}
      <div className="absolute left-[12%] top-[22%] h-[72%] w-[76%] rounded-[48%] border-[3px] border-[#514a52] bg-[#c7b7bd]" />

      {/* face mask */}
      <div className="absolute left-[16%] top-[43%] h-[30%] w-[68%] rounded-[45%] bg-[#655c65]" />

      {/* eyes */}
      <div className="absolute left-[31%] top-[49%] h-3 w-3 rounded-full bg-[#332f35]" />

      <div className="absolute right-[31%] top-[49%] h-3 w-3 rounded-full bg-[#332f35]" />

      {/* nose */}
      <div className="absolute left-1/2 top-[62%] h-3 w-4 -translate-x-1/2 rounded-full bg-[#39343b]" />

      {/* mouth */}
      <div className="absolute left-1/2 top-[67%] h-3 w-5 -translate-x-1/2 border-b-2 border-[#39343b]" />

      {/* little blush */}
      <div className="absolute left-[23%] top-[66%] h-2 w-5 rounded-full bg-[#d79aaa]/60" />

      <div className="absolute right-[23%] top-[66%] h-2 w-5 rounded-full bg-[#d79aaa]/60" />

      {/* scribbled tail */}
      <div className="absolute -bottom-3 -right-8 h-14 w-20 rotate-[-20deg] rounded-full border-[4px] border-[#514a52] bg-[#c7b7bd]" />

      <div className="absolute bottom-[-2px] right-[-17px] h-5 w-12 rotate-[-20deg] border-t-[3px] border-[#655c65]" />

      {/* hand drawn label */}
      <span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 rotate-[-5deg] whitespace-nowrap text-lg text-[#806476]"
        style={{
          fontFamily: "'Caveat', cursive",
        }}
      >
        JL's raccoon
      </span>

    </div>
  );
}


/* =============================================================
   DEER DRAWING
   HANEULZ / JL CHARACTER
============================================================= */

function DeerDrawing({ small = false }) {
  return (
    <div
      className={`relative ${
        small ? "h-28 w-28" : "h-36 w-36"
      }`}
    >

      {/* antlers */}
      <div className="absolute left-[20%] top-0 h-12 w-7 rotate-[-15deg] border-l-[3px] border-[#76616b]" />

      <div className="absolute left-[17%] top-3 h-5 w-7 rotate-[-35deg] border-t-[3px] border-[#76616b]" />

      <div className="absolute right-[20%] top-0 h-12 w-7 rotate-[15deg] border-r-[3px] border-[#76616b]" />

      <div className="absolute right-[17%] top-3 h-5 w-7 rotate-[35deg] border-t-[3px] border-[#76616b]" />

      {/* ears */}
      <div className="absolute left-[9%] top-[25%] h-9 w-14 rotate-[-28deg] rounded-[80%] border-[3px] border-[#705c65] bg-[#ead8d1]" />

      <div className="absolute right-[9%] top-[25%] h-9 w-14 rotate-[28deg] rounded-[80%] border-[3px] border-[#705c65] bg-[#ead8d1]" />

      {/* head */}
      <div className="absolute left-[18%] top-[28%] h-[63%] w-[64%] rounded-[48%] border-[3px] border-[#705c65] bg-[#cba998]" />

      {/* face */}
      <div className="absolute left-[32%] top-[54%] h-[34%] w-[36%] rounded-[50%] bg-[#ead8d1]" />

      {/* eyes */}
      <div className="absolute left-[32%] top-[50%] h-2.5 w-2.5 rounded-full bg-[#40363c]" />

      <div className="absolute right-[32%] top-[50%] h-2.5 w-2.5 rounded-full bg-[#40363c]" />

      {/* nose */}
      <div className="absolute left-1/2 top-[69%] h-3 w-4 -translate-x-1/2 rounded-full bg-[#5c4a51]" />

      {/* mouth */}
      <div className="absolute left-1/2 top-[73%] h-3 w-5 -translate-x-1/2 border-b-2 border-[#5c4a51]" />

      {/* deer spots */}
      <div className="absolute left-[26%] top-[37%] h-2 w-2 rounded-full bg-[#9d7d70]/55" />

      <div className="absolute left-[35%] top-[31%] h-2 w-2 rounded-full bg-[#9d7d70]/55" />

      <div className="absolute right-[29%] top-[38%] h-2 w-2 rounded-full bg-[#9d7d70]/55" />

      <div className="absolute right-[38%] top-[32%] h-2 w-2 rounded-full bg-[#9d7d70]/55" />

      {/* little neck */}
      <div className="absolute bottom-0 left-1/2 h-8 w-12 -translate-x-1/2 rounded-b-full border-x-[3px] border-b-[3px] border-[#705c65] bg-[#cba998]" />

      <span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 rotate-[4deg] whitespace-nowrap text-lg text-[#806476]"
        style={{
          fontFamily: "'Caveat', cursive",
        }}
      >
        JL's deer
      </span>

    </div>
  );
}
