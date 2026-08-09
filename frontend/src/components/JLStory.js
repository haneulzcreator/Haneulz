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
  const [showMore, setShowMore] = useState(false);
  const [photoLimit, setPhotoLimit] = useState(9);

  const profile = {
    fullName: "Jay Lawrence Gaspar",
    knownAs: "JL",
    nicknames: "Yence / Jaeyel",
    birthday: "April 21, 2004",
    nationality: "filipino",
    hobbies: "Add later",
    interests: "Add later",
    favorites: "matcha",
  };

  const facts = [
    "Add a little JL fact here.",
    "Add another detail that makes JL, JL.",
    "Add a random or funny fact here.",
    "Add another thing worth remembering.",
    "Add another little detail whenever you want.",
  ];

  const photos = Array.from({ length: 27 }, (_, i) => i + 1);

  return (
    <main className="relative overflow-hidden rounded-[3rem] bg-[#faf7f4] text-[#373343]">

      {/* =========================================================
          GLOBAL BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-48 -top-40 h-[600px] w-[600px] rounded-full bg-[#dce9f7]/80 blur-[100px]" />

        <div className="absolute -right-48 top-[16%] h-[600px] w-[600px] rounded-full bg-[#eadcf3]/80 blur-[110px]" />

        <div className="absolute -left-56 top-[45%] h-[650px] w-[650px] rounded-full bg-[#f4d9e3]/70 blur-[120px]" />

        <div className="absolute -right-48 top-[70%] h-[600px] w-[600px] rounded-full bg-[#fff0c9]/70 blur-[110px]" />

        <div className="absolute left-[25%] top-[86%] h-[500px] w-[500px] rounded-full bg-[#dcebdd]/70 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(#8c8390 0.55px, transparent 0.55px)",
            backgroundSize: "17px 17px",
          }}
        />

      </div>


      {/* =========================================================
          01 — COVER
      ========================================================= */}

      <section className="relative min-h-[850px] px-6 pb-24 pt-10 sm:px-10 md:px-16 lg:px-24">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span className="font-mono text-[8px] tracking-[0.35em] text-[#a98a9c]">
              HANEULZ
            </span>

            <span className="h-px w-8 bg-[#c7a8b8]" />

            <span className="text-[7px] uppercase tracking-[0.45em] text-[#9b929d]">
              our little corner
            </span>

          </div>

          <span className="font-mono text-[8px] tracking-[0.3em] text-[#a69ca7]">
            01 — 06
          </span>

        </div>


        {/* small editorial text */}

        <div className="absolute right-7 top-36 hidden rotate-90 lg:block">

          <span className="text-[7px] uppercase tracking-[0.55em] text-[#a69ba7]">
            JAY LAWRENCE GASPAR
          </span>

        </div>


        {/* giant title */}

        <div className="relative mt-24">

          <span
            className="pointer-events-none absolute -left-5 -top-24 select-none text-[14rem] font-black leading-none tracking-[-0.12em] text-[#d9ccdf]/45 sm:text-[19rem] md:text-[25rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            J
          </span>


          <div className="relative z-10">

            <p
              className="ml-2 text-xl text-[#a27b93]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              meet
            </p>


            <h1
              className="mt-[-8px] text-[7rem] leading-[0.72] tracking-[-0.06em] text-[#393547] sm:text-[10rem] md:text-[13rem] lg:text-[16rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Bodoni MT', 'Didot', 'Times New Roman', serif",
              }}
            >
              JL
            </h1>


            <div className="mt-10 ml-2 flex flex-col">

              <span
                className="text-3xl tracking-[0.04em] text-[#514b5b] sm:text-4xl"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Jay Lawrence Gaspar
              </span>

              <span
                className="mt-1 text-2xl text-[#a47a91]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Yence · Jaeyel
              </span>

            </div>

          </div>


          {/* PHOTO + decorative layers */}

          <div className="relative z-20 mt-16 ml-auto w-[92%] max-w-[580px] sm:w-[72%]">

            <div className="absolute -inset-3 rotate-[3deg] rounded-[2.5rem] bg-[#eadcf3]" />

            <div className="absolute -inset-3 -rotate-[2deg] rounded-[2.5rem] bg-[#f4d9e3]" />

            <ImagePlaceholder />

            <div className="absolute -bottom-7 -left-6 rotate-[-6deg] rounded-full bg-[#fff0c9] px-6 py-3 shadow-[0_12px_30px_rgba(80,60,80,0.08)]">

              <span
                className="text-xl text-[#6e626c]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                this page is for JL ♡
              </span>

            </div>


            <div className="absolute -right-5 -top-7 hidden rotate-12 sm:block">

              <Sparkles
                size={30}
                strokeWidth={1}
                className="text-[#b893a8]"
              />

            </div>

          </div>

        </div>


        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">

          <span className="text-[7px] uppercase tracking-[0.5em] text-[#a49aa5]">
            turn the page
          </span>

          <ArrowDown
            size={14}
            strokeWidth={1}
            className="text-[#b28ba0]"
          />

        </div>

      </section>


      {/* =========================================================
          02 — NAME / PROFILE SPREAD
      ========================================================= */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <EditorialNumber number="02" />


        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div className="relative">

            <span
              className="absolute -left-2 -top-10 text-[7rem] leading-none text-[#d7c8df]/60"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Didot', serif",
              }}
            >
              01
            </span>


            <div className="relative">

              <p
                className="text-xl text-[#a07891]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                the basics
              </p>


              <h2
                className="mt-3 max-w-md text-6xl leading-[0.82] tracking-[-0.03em] text-[#403a4e] sm:text-8xl"
                style={{
                  fontFamily:
                    "'Bodoni 72', 'Didot', Georgia, serif",
                }}
              >
                Getting
                <br />
                to know
                <br />
                <span className="ml-8 text-[#ae7d97]">
                  JL.
                </span>
              </h2>

            </div>

          </div>


          <div className="relative pt-5">

            <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3">

              <EditorialField
                label="FULL NAME"
                value={profile.fullName}
              />

              <EditorialField
                label="KNOWN AS"
                value={profile.knownAs}
              />

              <EditorialField
                label="NICKNAMES"
                value={profile.nicknames}
              />

              <EditorialField
                label="BIRTHDAY"
                value={profile.birthday}
              />

              <EditorialField
                label="NATIONALITY"
                value={profile.nationality}
              />

              <EditorialField
                label="HOBBIES"
                value={profile.hobbies}
              />

            </div>


            <div className="mt-16 border-t border-[#cfc2cd] pt-7">

              <p className="font-mono text-[7px] uppercase tracking-[0.45em] text-[#a594a1]">
                current status
              </p>

              <p
                className="mt-4 text-3xl text-[#615968]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Still collecting little things about JL.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          03 — ABOUT / HUGE TYPOGRAPHY
      ========================================================= */}

      <section className="relative overflow-hidden px-6 py-32 sm:px-10 md:px-16 lg:px-24">

        <EditorialNumber number="03" />


        <div className="relative">

          <p
            className="text-xl text-[#9f7790]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            a little something about him
          </p>


          <h2
            className="mt-5 max-w-6xl text-6xl leading-[0.85] tracking-[-0.045em] text-[#393445] sm:text-8xl md:text-9xl"
            style={{
              fontFamily:
                "'Bodoni 72', 'Didot', Georgia, serif",
            }}
          >
            THE LITTLE
            <br />

            <span className="ml-[8%] text-[#b18198]">
              THINGS
            </span>

            <br />

            <span className="ml-[25%]">
              MATTER.
            </span>
          </h2>


          <div className="mt-14 ml-auto max-w-xl lg:mr-[8%]">

            <p
              className="text-2xl leading-[1.55] text-[#625c69] sm:text-3xl"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Jay Lawrence Gaspar, known as JL, is someone whose story
              is made up of more than just a name.
            </p>


            <p
              className="mt-7 text-lg leading-8 text-[#827a86]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              This section can become your own writing about JL — his
              personality, interests, habits, memories, and all the
              details you want people to know.
            </p>

          </div>


          <div className="absolute right-[-30px] top-[45%] hidden rotate-12 lg:block">

            <Star
              size={45}
              strokeWidth={1}
              className="text-[#c8a5b8]"
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          04 — FILES / COLLAGE
      ========================================================= */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <EditorialNumber number="04" />


        <div className="relative">

          <div className="flex items-end justify-between">

            <div>

              <span
                className="text-xl text-[#a17891]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                notes, details & random things
              </span>

              <h2
                className="mt-2 text-6xl leading-none tracking-[-0.03em] text-[#3f394c] sm:text-8xl"
                style={{
                  fontFamily:
                    "'Bodoni 72', 'Didot', Georgia, serif",
                }}
              >
                JL Files
              </h2>

            </div>


            <span className="hidden text-5xl text-[#d0b3c3] sm:block">
              ✦
            </span>

          </div>


          <div className="relative mt-16 grid gap-8 md:grid-cols-12">

            <MagazineCard
              className="md:col-span-5 md:mt-8"
              title="HOBBIES"
              value={profile.hobbies}
              color="#dce9f7"
            />

            <MagazineCard
              className="md:col-span-4"
              title="INTERESTS"
              value={profile.interests}
              color="#eadcf3"
            />

            <MagazineCard
              className="md:col-span-3 md:mt-16"
              title="FAVORITES"
              value={profile.favorites}
              color="#fff0c9"
            />

            <MagazineCard
              className="md:col-span-4 md:-mt-2"
              title="LIKES"
              value="Add later"
              color="#dcebdd"
            />

            <MagazineCard
              className="md:col-span-5 md:mt-10"
              title="PERSONALITY"
              value="Add later"
              color="#f4d9e3"
            />

            <MagazineCard
              className="md:col-span-3"
              title="RANDOM"
              value="Add later"
              color="#e7e1f2"
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          05 — FACTS
      ========================================================= */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <EditorialNumber number="05" />


        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">

          <div>

            <span
              className="text-xl text-[#a27891]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              keep these somewhere
            </span>


            <h2
              className="mt-3 text-6xl leading-[0.8] tracking-[-0.04em] text-[#3e384b] sm:text-8xl"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              Little
              <br />
              Facts
            </h2>


            <p
              className="mt-8 max-w-xs text-lg leading-7 text-[#837b87]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              The random details are often the ones that make a person
              feel real.
            </p>

          </div>


          <div>

            {facts.map((fact, index) => (

              <div
                key={index}
                className="group flex items-start gap-5 border-t border-[#cfc4ce] py-7"
              >

                <span className="font-mono text-[8px] tracking-[0.2em] text-[#b18b9e]">
                  {String(index + 1).padStart(2, "0")}
                </span>


                <p
                  className="max-w-2xl text-2xl leading-8 text-[#625b69] transition group-hover:text-[#3e3948]"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  {fact}
                </p>


                <ArrowUpRight
                  size={15}
                  strokeWidth={1}
                  className="ml-auto mt-1 shrink-0 text-[#b998a9] opacity-0 transition group-hover:opacity-100"
                />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          06 — LITTLE THINGS
      ========================================================= */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <EditorialNumber number="06" />


        <div className="relative">

          <h2
            className="text-6xl leading-[0.78] tracking-[-0.04em] text-[#3e384a] sm:text-8xl md:text-9xl"
            style={{
              fontFamily:
                "'Bodoni 72', 'Didot', Georgia, serif",
            }}
          >
            THE
            <br />

            <span className="ml-[12%] text-[#b07f97]">
              LITTLE
            </span>

            <br />

            <span className="ml-[27%]">
              THINGS
            </span>

          </h2>


          <div className="mt-16 grid gap-12 md:grid-cols-12 md:items-center">

            <div className="relative md:col-span-7">

              <div className="absolute -inset-5 rotate-2 rounded-[2rem] bg-[#dce9f7]" />

              <ImagePlaceholder />

            </div>


            <div className="md:col-span-5 md:pl-6">

              <span
                className="text-2xl text-[#a37890]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                saved here ♡
              </span>


              <p
                className="mt-5 text-3xl leading-[1.4] text-[#5e5767]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                The small moments can sometimes say more than the big ones.
              </p>


              <p
                className="mt-6 text-lg leading-8 text-[#827a86]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Put stories, habits, funny moments, observations, or
                anything else that feels especially JL here.
              </p>


              <div className="mt-8 inline-block -rotate-3 bg-[#fff0c9] px-5 py-3">

                <span
                  className="text-xl text-[#70636c]"
                  style={{
                    fontFamily: "'Caveat', cursive",
                  }}
                >
                  one little thing at a time
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PHOTO ARCHIVE
      ========================================================= */}

      <section className="relative px-5 py-28 sm:px-10 md:px-16 lg:px-24">

        <div className="flex items-end justify-between">

          <div>

            <span
              className="text-xl text-[#a27991]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              moments worth keeping
            </span>


            <h2
              className="mt-2 text-6xl leading-[0.8] tracking-[-0.04em] text-[#3e384b] sm:text-8xl"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              PHOTO
              <br />
              ARCHIVE
            </h2>

          </div>


          <div className="hidden rotate-[-5deg] bg-[#fff0c9] px-5 py-3 sm:block">

            <span
              className="text-xl text-[#6f636d]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              keep them all
            </span>

          </div>

        </div>


        <p
          className="mt-8 max-w-xl text-lg leading-8 text-[#817986]"
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          A growing collection of JL photos. The newest photo can
          eventually appear first whenever you add something through
          the admin page.
        </p>


        {/* asymmetrical archive */}

        <div className="mt-14 grid grid-cols-6 gap-2 sm:gap-3">

          {photos
            .slice(0, showMore ? photoLimit : 9)
            .map((photo, index) => (

              <ArchivePhoto
                key={photo}
                number={photo}
                large={
                  index === 0 ||
                  index === 4 ||
                  index === 8
                }
              />

            ))}

        </div>


        {!showMore ? (

          <button
            type="button"
            onClick={() => setShowMore(true)}
            className="mx-auto mt-12 flex items-center gap-3 rounded-full bg-[#40394d] px-7 py-3 text-[8px] uppercase tracking-[0.4em] text-white transition hover:-translate-y-1"
          >
            Open Archive
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
                className="rounded-full bg-[#eadcf3] px-7 py-3 text-[8px] uppercase tracking-[0.4em] text-[#655b6a]"
              >
                Load More
              </button>

            )}


            {photoLimit >= photos.length && (

              <span
                className="text-xl text-[#a18092]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                that's everything for now ♡
              </span>

            )}


            <button
              type="button"
              onClick={() => {
                setShowMore(false);
                setPhotoLimit(9);
              }}
              className="text-[8px] uppercase tracking-[0.4em] text-[#9d929e] underline underline-offset-4"
            >
              Close Archive
            </button>

          </div>

        )}

      </section>


      {/* =========================================================
          ENDING
      ========================================================= */}

      <section className="relative px-6 pb-28 pt-16 text-center sm:px-10">

        <div className="mx-auto flex max-w-sm items-center gap-4">

          <span className="h-px flex-1 bg-[#cfc3cd]" />

          <Heart
            size={15}
            strokeWidth={1}
            className="text-[#b98da4]"
          />

          <span className="h-px flex-1 bg-[#cfc3cd]" />

        </div>


        <h2
          className="mt-10 text-7xl tracking-[-0.05em] text-[#40394c] sm:text-9xl"
          style={{
            fontFamily:
              "'Bodoni 72', 'Didot', Georgia, serif",
          }}
        >
          JL
        </h2>


        <p
          className="mt-3 text-2xl text-[#a07891]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          Yence · Jaeyel
        </p>


        <p className="mt-8 font-mono text-[7px] uppercase tracking-[0.45em] text-[#a59ba5]">
          end of this little corner
        </p>

      </section>

    </main>
  );
}


/* =============================================================
   EDITORIAL NUMBER
============================================================= */

function EditorialNumber({ number }) {
  return (
    <div className="mb-14 flex items-center gap-4">

      <span className="font-mono text-[8px] tracking-[0.3em] text-[#ad8799]">
        {number}
      </span>

      <span className="h-px w-12 bg-[#cbbdc8]" />

      <span className="text-[7px] uppercase tracking-[0.5em] text-[#aaa0aa]">
        JL / archive
      </span>

    </div>
  );
}


/* =============================================================
   EDITORIAL FIELD
============================================================= */

function EditorialField({ label, value }) {
  return (
    <div className="border-b border-[#cec2cc] pb-5">

      <p className="font-mono text-[7px] tracking-[0.35em] text-[#a48d9b]">
        {label}
      </p>

      <p
        className="mt-3 text-xl leading-7 text-[#5b5564]"
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
   MAGAZINE CARD
============================================================= */

function MagazineCard({
  title,
  value,
  color,
  className = "",
}) {
  return (
    <div
      className={`group relative min-h-[190px] overflow-hidden rounded-[2rem] p-7 shadow-[0_15px_40px_rgba(70,55,80,0.07)] transition duration-300 hover:-translate-y-2 ${className}`}
      style={{
        backgroundColor: color,
      }}
    >

      <span
        className="absolute -right-4 -top-7 text-[7rem] leading-none text-black/[0.035]"
        style={{
          fontFamily:
            "'Bodoni 72', 'Didot', serif",
        }}
      >
        {title.charAt(0)}
      </span>


      <div className="relative">

        <div className="flex items-center justify-between">

          <span
            className="text-2xl text-[#625a68]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            {title}
          </span>

          <Sparkles
            size={14}
            strokeWidth={1}
            className="text-[#766a76]/60"
          />

        </div>


        <p
          className="mt-10 max-w-[230px] text-xl leading-7 text-[#625b69]"
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
   IMAGE PLACEHOLDER
============================================================= */

function ImagePlaceholder() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/80 bg-[#e9e2e9]">

      <div className="absolute inset-0 bg-gradient-to-br from-[#dce9f7] via-[#eadcf3] to-[#f4d9e3]" />

      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/60 blur-[70px]" />

      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#fff0c9]/70 blur-[70px]" />


      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(#776d78 0.6px, transparent 0.6px)",
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


        <span
          className="mt-2 text-xl text-[#988996]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          add later
        </span>

      </div>

    </div>
  );
}


/* =============================================================
   ARCHIVE PHOTO
============================================================= */

function ArchivePhoto({ number, large }) {
  const colors = [
    ["#dce9f7", "#eadcf3"],
    ["#f4d9e3", "#fff0c9"],
    ["#eadcf3", "#dcebdd"],
    ["#fff0c9", "#dce9f7"],
    ["#dcebdd", "#f4d9e3"],
    ["#e7e1f2", "#eadcf3"],
  ];

  const pair = colors[(number - 1) % colors.length];

  return (
    <button
      type="button"
      className={`group relative overflow-hidden rounded-[1rem] sm:rounded-[1.5rem] ${
        large
          ? "col-span-4 row-span-2 aspect-square"
          : "col-span-2 aspect-square"
      }`}
      style={{
        background: `linear-gradient(135deg, ${pair[0]}, ${pair[1]})`,
      }}
    >

      <div className="absolute inset-0 flex items-center justify-center">

        <Camera
          size={large ? 23 : 16}
          strokeWidth={1}
          className="text-[#766b79]/45 transition duration-300 group-hover:scale-110 group-hover:text-[#5d5361]/70"
        />

      </div>


      <span className="absolute bottom-2 left-2 rounded-full bg-white/55 px-2 py-1 font-mono text-[6px] text-[#6c6370]">
        {String(number).padStart(2, "0")}
      </span>

    </button>
  );
}
