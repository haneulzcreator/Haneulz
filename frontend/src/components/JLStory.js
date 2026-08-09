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
  const [visiblePhotos, setVisiblePhotos] = useState(9);

  const profile = {
    fullName: "Jay Lawrence Gaspar",
    knownAs: "JL",
    nicknames: "Yence · Jaeyel",
    birthday: "Add later",
    nationality: "Add later",
    hobbies: "Add later",
    interests: "Add later",
    favorites: "Add later",
  };

  const facts = [
    "Add a little JL fact here.",
    "Add another detail here.",
    "Add a random or funny fact here.",
    "Add another thing worth remembering.",
  ];

  const photos = Array.from({ length: 27 }, (_, i) => i + 1);

  return (
    <div className="relative overflow-hidden rounded-[3rem] bg-[#fbf7f5] text-[#303042]">

      {/* ==================================================
          DREAMY PASTEL BACKGROUND
      ================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 -top-32 h-[430px] w-[430px] rounded-full bg-[#dce9f7] blur-[70px]" />

        <div className="absolute right-[-140px] top-[180px] h-[450px] w-[450px] rounded-full bg-[#eadcf3] blur-[85px]" />

        <div className="absolute left-[-160px] top-[45%] h-[430px] w-[430px] rounded-full bg-[#f4d9e3] blur-[85px]" />

        <div className="absolute right-[-130px] top-[68%] h-[420px] w-[420px] rounded-full bg-[#fff0c9] blur-[80px]" />

        <div className="absolute left-[40%] top-[85%] h-[400px] w-[400px] rounded-full bg-[#dcebdd] blur-[90px]" />

        {/* subtle paper texture */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(#8b8195 0.6px, transparent 0.6px)",
            backgroundSize: "18px 18px",
          }}
        />

      </div>


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative min-h-[720px] px-6 pb-24 pt-12 sm:px-10 md:px-16 lg:px-24">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="h-[1px] w-8 bg-[#b88ca7]" />

            <span className="text-[8px] uppercase tracking-[0.45em] text-[#827989]">
              our little corner
            </span>

          </div>

          <span className="font-mono text-[8px] tracking-[0.3em] text-[#aaa1ac]">
            01 / JL
          </span>

        </div>


        <div className="relative mt-20">

          {/* oversized background letters */}

          <span
            className="pointer-events-none absolute -top-16 left-[-15px] select-none text-[12rem] font-black leading-none text-[#d8c9dc]/40 sm:text-[17rem] md:text-[22rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            J
          </span>


          <div className="relative z-10">

            <p
              className="ml-2 text-sm tracking-[0.18em] text-[#9b7591]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              a little introduction to
            </p>


            <h1
              className="mt-1 text-[6rem] leading-[0.75] tracking-[-0.045em] text-[#373448] sm:text-[8rem] md:text-[10rem] lg:text-[12rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Bodoni MT', 'Didot', 'Times New Roman', serif",
              }}
            >
              JL
            </h1>


            <div className="mt-8 ml-2 flex flex-wrap items-center gap-x-4 gap-y-2">

              <h2
                className="text-2xl tracking-[0.05em] text-[#4a4658] sm:text-3xl"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Jay Lawrence Gaspar
              </h2>

              <span className="text-[#c58ba7]">✦</span>

              <span
                className="text-xl text-[#8f7189]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Yence · Jaeyel
              </span>

            </div>

          </div>


          {/* hero photo */}

          <div className="relative z-20 mt-14 ml-auto w-[92%] max-w-[560px] sm:w-[78%]">

            <div className="absolute -right-4 -top-5 h-full w-full rotate-3 rounded-[2.5rem] bg-[#eadcf3]" />

            <div className="absolute -left-4 -bottom-5 h-full w-full -rotate-2 rounded-[2.5rem] bg-[#f4d9e3]" />

            <ImagePlaceholder />

            <div className="absolute -bottom-6 -left-5 rotate-[-5deg] rounded-full bg-[#fff0c9] px-5 py-3 shadow-sm">

              <span
                className="text-lg text-[#6d5d68]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                this is JL ♡
              </span>

            </div>

          </div>


          {/* tiny decorative text */}

          <div
            className="absolute right-2 top-[45%] hidden rotate-90 text-xs tracking-[0.3em] text-[#aaa0ac] lg:block"
          >
            YENCE / JAEYEL
          </div>

        </div>


        <div className="absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">

          <span className="text-[7px] uppercase tracking-[0.4em] text-[#9e96a2]">
            keep scrolling
          </span>

          <ArrowDown
            size={14}
            strokeWidth={1}
            className="text-[#b68ca7]"
          />

        </div>

      </section>


      {/* ==================================================
          PROFILE
      ================================================== */}

      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">

        <DecorativeNumber number="01" />

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p
              className="text-4xl leading-none text-[#4c485a] sm:text-5xl"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              The basics,
              <br />
              <span className="text-[#ae7e98]">first.</span>
            </p>

            <p
              className="mt-7 max-w-sm text-lg leading-8 text-[#777080]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              A small collection of the things that make up the JL profile.
            </p>

          </div>


          <div className="relative">

            <div className="grid grid-cols-2 gap-x-8 gap-y-9">

              <ProfileField
                label="FULL NAME"
                value={profile.fullName}
              />

              <ProfileField
                label="KNOWN AS"
                value={profile.knownAs}
              />

              <ProfileField
                label="NICKNAMES"
                value={profile.nicknames}
              />

              <ProfileField
                label="BIRTHDAY"
                value={profile.birthday}
              />

              <ProfileField
                label="NATIONALITY"
                value={profile.nationality}
              />

              <ProfileField
                label="HOBBIES"
                value={profile.hobbies}
              />

            </div>

            <span className="absolute -right-3 -top-8 text-3xl text-[#d3b5c6]">
              ✦
            </span>

          </div>

        </div>

      </section>


      {/* ==================================================
          ABOUT
      ================================================== */}

      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">

        <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-[#dce9f7]/70 blur-[80px]" />

        <DecorativeNumber number="02" />


        <div className="relative mx-auto max-w-5xl">

          <div className="flex items-start gap-5">

            <Sparkles
              size={18}
              strokeWidth={1}
              className="mt-3 shrink-0 text-[#bd8ca5]"
            />

            <div>

              <p
                className="text-sm tracking-[0.2em] text-[#9c7890]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                getting to know him
              </p>

              <h2
                className="mt-2 text-5xl leading-none text-[#393647] sm:text-7xl"
                style={{
                  fontFamily:
                    "'Bodoni 72', 'Didot', Georgia, serif",
                }}
              >
                About JL
              </h2>

            </div>

          </div>


          <div className="mt-12 grid gap-8 md:grid-cols-[1.3fr_0.7fr]">

            <div>

              <p
                className="text-2xl leading-[1.65] text-[#5e5969] sm:text-3xl"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Jay Lawrence Gaspar, known as JL, is someone whose story
                is made up of more than just a name.
              </p>

              <p
                className="mt-7 text-lg leading-8 text-[#817a87]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                This is where your own writing about him can live —
                personality, interests, memories, observations, and the
                little details that make this page feel personal.
              </p>

            </div>


            <div className="relative flex items-center justify-center">

              <div className="rotate-[-6deg] rounded-[1.5rem] bg-[#fff0c9] px-8 py-7 shadow-[0_15px_40px_rgba(80,60,80,0.08)]">

                <Heart
                  size={18}
                  strokeWidth={1}
                  className="mb-3 text-[#c68da7]"
                />

                <p
                  className="max-w-[170px] text-xl leading-7 text-[#756571]"
                  style={{
                    fontFamily: "'Caveat', cursive",
                  }}
                >
                  more little details coming soon...
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          JL FILES
      ================================================== */}

      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">

        <DecorativeNumber number="03" />


        <div className="relative">

          <div className="flex items-end justify-between gap-5">

            <div>

              <p
                className="text-lg text-[#a47c95]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                all the little things
              </p>

              <h2
                className="mt-1 text-6xl leading-none text-[#3d394b] sm:text-8xl"
                style={{
                  fontFamily:
                    "'Bodoni 72', 'Didot', Georgia, serif",
                }}
              >
                JL Files
              </h2>

            </div>

            <Star
              size={24}
              strokeWidth={1}
              className="mb-3 hidden rotate-12 text-[#cba0b4] sm:block"
            />

          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            <PlayfulCard
              title="Hobbies"
              value={profile.hobbies}
              bg="#dce9f7"
              rotate="-2deg"
            />

            <PlayfulCard
              title="Interests"
              value={profile.interests}
              bg="#eadcf3"
              rotate="2deg"
            />

            <PlayfulCard
              title="Favorites"
              value={profile.favorites}
              bg="#fff0c9"
              rotate="-1deg"
            />

            <PlayfulCard
              title="Likes"
              value="Add later"
              bg="#dcebdd"
              rotate="1deg"
            />

            <PlayfulCard
              title="Personality"
              value="Add later"
              bg="#f4d9e3"
              rotate="-2deg"
            />

            <PlayfulCard
              title="Random"
              value="Add later"
              bg="#e6e1f4"
              rotate="2deg"
            />

          </div>

        </div>

      </section>


      {/* ==================================================
          FACTS
      ================================================== */}

      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">

        <DecorativeNumber number="04" />


        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p
              className="text-lg text-[#9f7991]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              things worth knowing
            </p>

            <h2
              className="mt-2 text-6xl leading-[0.85] text-[#3d394b] sm:text-8xl"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              Little
              <br />
              Facts
            </h2>

          </div>


          <div>

            {facts.map((fact, index) => (

              <div
                key={index}
                className="group flex items-start gap-5 border-b border-[#c8bdc8]/50 py-6 first:border-t"
              >

                <span className="mt-1 font-mono text-[9px] text-[#b18aa0]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p
                  className="text-xl leading-8 text-[#686271] transition group-hover:text-[#3f3a4b]"
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
                  className="ml-auto mt-2 text-[#c2a8b6] opacity-0 transition group-hover:opacity-100"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          MOMENT
      ================================================== */}

      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">

        <DecorativeNumber number="05" />


        <div className="relative">

          <div className="absolute right-[10%] top-0 hidden rotate-6 text-5xl text-[#d2b6c6] md:block">
            ✦
          </div>


          <h2
            className="text-5xl leading-none text-[#3d394b] sm:text-7xl"
            style={{
              fontFamily:
                "'Bodoni 72', 'Didot', Georgia, serif",
            }}
          >
            The Little
            <br />
            <span className="ml-10 text-[#ad7d96]">
              Things
            </span>
          </h2>


          <div className="mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">

            <div className="relative">

              <div className="absolute -inset-4 rotate-2 rounded-[2rem] bg-[#dce9f7]" />

              <ImagePlaceholder />

            </div>


            <div className="md:pl-8">

              <p
                className="text-3xl leading-[1.45] text-[#5f5969]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                The little things are sometimes the ones worth saving.
              </p>

              <p
                className="mt-6 text-lg leading-8 text-[#837c88]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Add little stories, habits, funny moments, observations,
                or memories here.
              </p>

              <div className="mt-7 inline-block -rotate-2 rounded-full bg-[#fff0c9] px-5 py-2">

                <span
                  className="text-lg text-[#756571]"
                  style={{
                    fontFamily: "'Caveat', cursive",
                  }}
                >
                  saved for later ♡
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          PHOTO ARCHIVE
      ================================================== */}

      <section className="relative px-5 py-24 sm:px-10 md:px-16 lg:px-24">

        <DecorativeNumber number="06" />


        <div className="flex flex-wrap items-end justify-between gap-6">

          <div>

            <p
              className="text-lg text-[#a47d95]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              saved moments
            </p>

            <h2
              className="mt-1 text-6xl leading-none text-[#3d394b] sm:text-8xl"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              Photo
              <br />
              Archive
            </h2>

          </div>


          <div className="rounded-full bg-[#eadcf3] px-5 py-3">

            <span className="font-mono text-[8px] tracking-[0.25em] text-[#776d7c]">
              {photos.length} MOMENTS
            </span>

          </div>

        </div>


        <p
          className="mt-7 max-w-xl text-lg leading-8 text-[#817986]"
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          A growing collection of JL photos. New photos can eventually
          appear at the beginning whenever you add them through the admin
          page.
        </p>


        <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3">

          {photos
            .slice(0, showArchive ? visiblePhotos : 9)
            .map((photo) => (

              <PhotoTile
                key={photo}
                number={photo}
              />

            ))}

        </div>


        {!showArchive ? (

          <button
            onClick={() => setShowArchive(true)}
            className="mx-auto mt-10 flex items-center gap-3 rounded-full bg-[#373448] px-7 py-3 text-[8px] uppercase tracking-[0.4em] text-white transition hover:-translate-y-0.5"
          >
            View More
            <ArrowUpRight size={13} strokeWidth={1} />
          </button>

        ) : (

          <div className="mt-10 flex flex-col items-center gap-5">

            {visiblePhotos < photos.length && (

              <button
                onClick={() =>
                  setVisiblePhotos((current) =>
                    Math.min(current + 9, photos.length)
                  )
                }
                className="rounded-full bg-[#eadcf3] px-7 py-3 text-[8px] uppercase tracking-[0.4em] text-[#5e5667]"
              >
                Load More
              </button>

            )}

            {visiblePhotos >= photos.length && (

              <span
                className="text-lg text-[#9b8793]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                you've reached the end ♡
              </span>

            )}

            <button
              onClick={() => {
                setShowArchive(false);
                setVisiblePhotos(9);
              }}
              className="text-[8px] uppercase tracking-[0.4em] text-[#9d929e] underline underline-offset-4"
            >
              Show Less
            </button>

          </div>

        )}

      </section>


      {/* ==================================================
          END
      ================================================== */}

      <section className="relative px-6 pb-24 pt-16 text-center sm:px-10">

        <div className="mx-auto flex max-w-xs items-center gap-4">

          <span className="h-px flex-1 bg-[#c9bdc8]" />

          <Heart
            size={15}
            strokeWidth={1}
            className="text-[#bc8da6]"
          />

          <span className="h-px flex-1 bg-[#c9bdc8]" />

        </div>


        <h2
          className="mt-9 text-6xl text-[#3d394b]"
          style={{
            fontFamily:
              "'Bodoni 72', 'Didot', Georgia, serif",
          }}
        >
          JL
        </h2>


        <p
          className="mt-3 text-xl text-[#a07892]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          Yence · Jaeyel
        </p>

      </section>

    </div>
  );
}


/* ============================================================
   DECORATIVE NUMBER
============================================================ */

function DecorativeNumber({ number }) {
  return (
    <div className="mb-12 flex items-center gap-4">

      <span className="font-mono text-[8px] tracking-[0.3em] text-[#ad8499]">
        {number}
      </span>

      <span className="h-px w-10 bg-[#cdbdc9]" />

      <span className="text-[7px] uppercase tracking-[0.4em] text-[#aaa0aa]">
        JL
      </span>

    </div>
  );
}


/* ============================================================
   PROFILE FIELD
============================================================ */

function ProfileField({ label, value }) {
  return (
    <div className="border-b border-[#cfc4ce]/70 pb-5">

      <p className="font-mono text-[7px] tracking-[0.35em] text-[#a58c9b]">
        {label}
      </p>

      <p
        className="mt-3 text-xl leading-7 text-[#575161]"
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


/* ============================================================
   PLAYFUL CARD
============================================================ */

function PlayfulCard({ title, value, bg, rotate }) {
  return (
    <div
      className="group min-h-[190px] rounded-[2rem] p-7 shadow-[0_15px_40px_rgba(80,65,90,0.07)] transition duration-300 hover:-translate-y-1 hover:rotate-0"
      style={{
        backgroundColor: bg,
        transform: `rotate(${rotate})`,
      }}
    >

      <div className="flex items-start justify-between">

        <span
          className="text-2xl text-[#655c69]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          {title}
        </span>

        <Sparkles
          size={15}
          strokeWidth={1}
          className="text-[#8f7a89]/60"
        />

      </div>


      <p
        className="mt-9 max-w-[240px] text-xl leading-7 text-[#625b68]"
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


/* ============================================================
   IMAGE PLACEHOLDER
============================================================ */

function ImagePlaceholder() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/70 bg-[#e7e0e8]">

      <div className="absolute inset-0 bg-gradient-to-br from-[#dce9f7] via-[#eadcf3] to-[#f4d9e3]" />

      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/40 blur-[60px]" />

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#fff0c9]/70 blur-[70px]" />


      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/50">

          <Camera
            size={22}
            strokeWidth={1}
            className="text-[#817586]"
          />

        </div>

        <p className="mt-5 font-mono text-[7px] tracking-[0.4em] text-[#817586]">
          JL PHOTO
        </p>

        <p
          className="mt-2 text-lg text-[#968796]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          add later
        </p>

      </div>

    </div>
  );
}


/* ============================================================
   PHOTO TILE
============================================================ */

function PhotoTile({ number }) {
  const backgrounds = [
    "linear-gradient(135deg,#dce9f7,#eadcf3)",
    "linear-gradient(135deg,#f4d9e3,#fff0c9)",
    "linear-gradient(135deg,#eadcf3,#dcebdd)",
    "linear-gradient(135deg,#fff0c9,#dce9f7)",
    "linear-gradient(135deg,#dcebdd,#f4d9e3)",
    "linear-gradient(135deg,#eadcf3,#f4d9e3)",
  ];

  return (
    <button
      className="group relative aspect-square overflow-hidden rounded-[1rem] sm:rounded-[1.4rem]"
      style={{
        background: backgrounds[(number - 1) % backgrounds.length],
      }}
    >

      <div className="absolute inset-0 flex items-center justify-center">

        <Camera
          size={18}
          strokeWidth={1}
          className="text-[#756b78]/50 transition group-hover:scale-110"
        />

      </div>


      <span className="absolute bottom-2 left-2 rounded-full bg-white/50 px-2 py-1 font-mono text-[6px] text-[#6d6470]">
        {String(number).padStart(2, "0")}
      </span>

    </button>
  );
}
