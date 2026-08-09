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

  /*
   * ============================================================
   * JL INFORMATION
   * Replace the "Add later" values with your information.
   * ============================================================
   */

  const profile = {
    fullName: "Jay Lawrence Gaspar",
    knownAs: "JL",
    nicknames: "Yence / Jaeyel",
    birthday: "Add later",
    nationality: "Add later",
    hobbies: "Add later",
    interests: "Add later",
    favorites: "Add later",
    personality: "Add later",
  };

  const facts = [
    "Add JL's first fun fact here.",
    "Add another interesting fact here.",
    "Add a funny or memorable detail here.",
    "Add another fact about JL here.",
    "Add another detail whenever you want.",
  ];

  /*
   * ============================================================
   * PHOTO ARCHIVE
   *
   * Later, replace these with your actual image paths.
   *
   * Example:
   *
   * {
   *   src: "/images/jl/jl-01.jpg",
   *   alt: "JL"
   * }
   *
   * Newest photos should go FIRST.
   * ============================================================
   */

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
    <main className="relative overflow-hidden rounded-[3rem] bg-[#fbf8f6] text-[#3d3948]">

      {/* ========================================================
          BACKGROUND
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-[20%] -top-[8%] h-[520px] w-[520px] rounded-full bg-[#dfeaf8]/80 blur-[100px]" />

        <div className="absolute -right-[20%] top-[13%] h-[560px] w-[560px] rounded-full bg-[#eadff2]/80 blur-[110px]" />

        <div className="absolute -left-[25%] top-[43%] h-[650px] w-[650px] rounded-full bg-[#f5dfe8]/70 blur-[120px]" />

        <div className="absolute -right-[20%] top-[67%] h-[600px] w-[600px] rounded-full bg-[#fff0ca]/65 blur-[110px]" />

        <div className="absolute left-[20%] top-[88%] h-[500px] w-[500px] rounded-full bg-[#dcebdd]/60 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "radial-gradient(#756c78 0.55px, transparent 0.55px)",
            backgroundSize: "18px 18px",
          }}
        />

      </div>


      {/* ========================================================
          COVER
      ======================================================== */}

      <section className="relative min-h-[820px] px-6 pb-24 pt-8 sm:px-10 md:px-16 lg:px-24">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="font-mono text-[8px] tracking-[0.4em] text-[#a17e91]">
              HANEULZ
            </span>

            <span className="h-px w-8 bg-[#c9acbb]" />

            <span className="text-[7px] uppercase tracking-[0.45em] text-[#99919b]">
              JL ARCHIVE
            </span>

          </div>

          <span className="font-mono text-[8px] tracking-[0.3em] text-[#9d949f]">
            01 / 06
          </span>

        </div>


        <div className="relative mt-24">

          {/* giant background J */}

          <span
            className="pointer-events-none absolute -left-7 -top-24 select-none text-[14rem] font-black leading-none tracking-[-0.15em] text-[#d8cde0]/50 sm:text-[20rem] md:text-[27rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            J
          </span>


          <div className="relative z-10">

            <span
              className="ml-2 text-xl text-[#a4778e]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              known as
            </span>


            <h1
              className="mt-1 text-[8rem] leading-[0.7] tracking-[-0.08em] text-[#3f3949] sm:text-[11rem] md:text-[15rem] lg:text-[18rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Bodoni MT', Didot, Georgia, serif",
              }}
            >
              JL
            </h1>


            <div className="mt-12 ml-2">

              <p
                className="text-3xl tracking-[0.01em] text-[#514b5a] sm:text-4xl"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Jay Lawrence Gaspar
              </p>


              <p
                className="mt-1 text-2xl text-[#a3778e]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Yence · Jaeyel
              </p>

            </div>

          </div>


          {/* hero photo */}

          <div className="relative z-20 mt-16 ml-auto w-[94%] max-w-[590px] sm:w-[70%]">

            <div className="absolute -inset-3 rotate-[3deg] rounded-[2.5rem] bg-[#e8d9ef]" />

            <div className="absolute -inset-3 -rotate-[2deg] rounded-[2.5rem] bg-[#f3d8e2]" />

            <PhotoPlaceholder
              className="relative"
              large
            />


            <div className="absolute -bottom-6 -left-5 rotate-[-5deg] rounded-full bg-[#fff0ca] px-6 py-3 shadow-[0_12px_30px_rgba(80,60,80,0.08)]">

              <span
                className="text-xl text-[#6c616b]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                JL
              </span>

            </div>


            <Sparkles
              size={30}
              strokeWidth={1}
              className="absolute -right-5 -top-7 rotate-12 text-[#b691a5]"
            />

          </div>

        </div>


        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">

          <span className="text-[7px] uppercase tracking-[0.5em] text-[#9e969f]">
            scroll
          </span>

          <ArrowDown
            size={14}
            strokeWidth={1}
            className="text-[#ad8598]"
          />

        </div>

      </section>


      {/* ========================================================
          PROFILE
      ======================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="02" title="PROFILE" />


        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <span
              className="text-xl text-[#a4778e]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              about JL
            </span>


            <h2
              className="mt-3 text-7xl leading-[0.78] tracking-[-0.05em] text-[#403a4b] sm:text-8xl"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              JAY
              <br />
              LAWRENCE
              <br />
              <span className="ml-8 text-[#aa7c92]">
                GASPAR
              </span>
            </h2>

          </div>


          <div className="grid grid-cols-2 gap-x-7 gap-y-9 sm:grid-cols-3">

            <InfoItem
              label="FULL NAME"
              value={profile.fullName}
            />

            <InfoItem
              label="KNOWN AS"
              value={profile.knownAs}
            />

            <InfoItem
              label="NICKNAMES"
              value={profile.nicknames}
            />

            <InfoItem
              label="BIRTHDAY"
              value={profile.birthday}
            />

            <InfoItem
              label="NATIONALITY"
              value={profile.nationality}
            />

            <InfoItem
              label="PERSONALITY"
              value={profile.personality}
            />

          </div>

        </div>

      </section>


      {/* ========================================================
          HOBBIES + INTERESTS
      ======================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="03" title="HOBBIES & INTERESTS" />


        <div className="grid gap-8 md:grid-cols-12">

          <FeaturePanel
            className="md:col-span-7"
            title="HOBBIES"
            value={profile.hobbies}
            color="#dce9f7"
            tall
          />

          <FeaturePanel
            className="md:col-span-5 md:mt-16"
            title="INTERESTS"
            value={profile.interests}
            color="#eadcf2"
          />

          <FeaturePanel
            className="md:col-span-4 md:-mt-8"
            title="FAVORITES"
            value={profile.favorites}
            color="#fff0ca"
          />

          <FeaturePanel
            className="md:col-span-8"
            title="MORE"
            value="Add any extra information you want to include here."
            color="#f3dce5"
          />

        </div>

      </section>


      {/* ========================================================
          FUN FACTS
      ======================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="04" title="FUN FACTS" />


        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">

          <div>

            <h2
              className="text-7xl leading-[0.78] tracking-[-0.05em] text-[#403a4b] sm:text-8xl"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              FACTS
              <br />
              ABOUT
              <br />
              <span className="text-[#ac7d94]">
                JL
              </span>
            </h2>

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
                  className="text-2xl leading-8 text-[#615a68] transition group-hover:text-[#3e3947]"
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


      {/* ========================================================
          FAVORITES
      ======================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="05" title="FAVORITES" />


        <div className="relative overflow-hidden rounded-[3rem] bg-[#e7e0f1] px-7 py-14 sm:px-12 md:px-16">

          <div className="absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#fff0ca]/70 blur-[70px]" />

          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#f3dce5]/70 blur-[70px]" />


          <div className="relative">

            <p
              className="text-xl text-[#a1768b]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              things JL likes
            </p>


            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              <FavoriteBox
                title="MUSIC"
                value="Add later"
              />

              <FavoriteBox
                title="FOOD"
                value="Add later"
              />

              <FavoriteBox
                title="COLOR"
                value="Add later"
              />

              <FavoriteBox
                title="OTHER"
                value="Add later"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ========================================================
          PHOTO ARCHIVE
      ======================================================== */}

      <section className="relative px-5 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel number="06" title="PHOTO ARCHIVE" />


        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>

            <p
              className="text-xl text-[#a1768c]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              JL photos
            </p>


            <h2
              className="mt-2 text-7xl leading-[0.75] tracking-[-0.05em] text-[#403a4b] sm:text-9xl"
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
              New photos can always be placed at the top of the archive.
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
            className="mx-auto mt-12 flex items-center gap-3 rounded-full bg-[#413a4d] px-8 py-3 text-[8px] uppercase tracking-[0.4em] text-white transition hover:-translate-y-1"
          >
            View Archive

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
                className="rounded-full bg-[#eadcf2] px-8 py-3 text-[8px] uppercase tracking-[0.4em] text-[#625969]"
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
              Close
            </button>

          </div>

        )}

      </section>


      {/* ========================================================
          END
      ======================================================== */}

      <section className="relative px-6 pb-28 pt-12 text-center sm:px-10">

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
          className="mt-10 text-8xl tracking-[-0.08em] text-[#403a4b] sm:text-[10rem]"
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

      </section>

    </main>
  );
}


/* ==============================================================
   SECTION LABEL
============================================================== */

function SectionLabel({ number, title }) {
  return (
    <div className="mb-14 flex items-center gap-4">

      <span className="font-mono text-[8px] tracking-[0.3em] text-[#ad8296]">
        {number}
      </span>

      <span className="h-px w-12 bg-[#cdbec9]" />

      <span className="text-[7px] uppercase tracking-[0.5em] text-[#9e969f]">
        {title}
      </span>

    </div>
  );
}


/* ==============================================================
   INFO ITEM
============================================================== */

function InfoItem({ label, value }) {
  return (
    <div className="border-b border-[#cec2cc] pb-5">

      <p className="font-mono text-[7px] tracking-[0.35em] text-[#a58c9a]">
        {label}
      </p>

      <p
        className="mt-3 text-xl leading-7 text-[#5d5665]"
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


/* ==============================================================
   FEATURE PANEL
============================================================== */

function FeaturePanel({
  title,
  value,
  color,
  className = "",
  tall = false,
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2.5rem] p-8 shadow-[0_18px_45px_rgba(65,55,75,0.06)] transition duration-300 hover:-translate-y-2 ${
        tall ? "min-h-[330px]" : "min-h-[230px]"
      } ${className}`}
      style={{
        backgroundColor: color,
      }}
    >

      <span
        className="absolute -right-8 -top-10 text-[10rem] leading-none text-black/[0.035]"
        style={{
          fontFamily:
            "'Bodoni 72', Didot, Georgia, serif",
        }}
      >
        {title.charAt(0)}
      </span>


      <div className="relative">

        <div className="flex items-center justify-between">

          <span
            className="text-3xl text-[#625a68]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            {title}
          </span>

          <Sparkles
            size={15}
            strokeWidth={1}
            className="text-[#776c78]/60"
          />

        </div>


        <p
          className="mt-12 max-w-md text-2xl leading-8 text-[#625b69]"
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


/* ==============================================================
   FAVORITE BOX
============================================================== */

function FavoriteBox({ title, value }) {
  return (
    <div className="rounded-[1.7rem] bg-white/45 p-6 backdrop-blur-sm">

      <p className="font-mono text-[7px] tracking-[0.4em] text-[#9d8b98]">
        {title}
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


/* ==============================================================
   PHOTO PLACEHOLDER
============================================================== */

function PhotoPlaceholder({ className = "", large = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.5rem] bg-[#e9e2e9] ${
        large ? "aspect-[4/3]" : "aspect-square"
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


/* ==============================================================
   ARCHIVE PHOTO
============================================================== */

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
