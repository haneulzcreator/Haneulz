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
  const [currentPage, setCurrentPage] = useState(1);

  const PHOTOS_PER_PAGE = 25;

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

     ADD AS MANY PHOTOS AS YOU WANT.

     NEWEST PHOTO = FIRST ITEM

     originalPost = URL of the original post.
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
    {
      src: "",
      alt: "JL photo 25",
      originalPost: "",
    },

    // ADD PHOTO 26+ BELOW
    {
      src: "",
      alt: "JL photo 26",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 27",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 28",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 29",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 30",
      originalPost: "",
    },
  ];

  const totalPages = Math.ceil(photos.length / PHOTOS_PER_PAGE);

  const startIndex = (currentPage - 1) * PHOTOS_PER_PAGE;
  const visiblePhotos = photos.slice(
    startIndex,
    startIndex + PHOTOS_PER_PAGE
  );

  const handleOpenArchive = () => {
    setShowArchive(true);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);

    setTimeout(() => {
      document
        .getElementById("jl-photo-archive")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  return (
    <main className="relative overflow-hidden rounded-[3rem] bg-[#f8e9ee] text-[#403b49]">

      {/* =====================================================
          PASTEL PINK BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main pink gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(255,218,230,0.95),transparent_30%),radial-gradient(circle_at_90%_15%,rgba(238,211,235,0.9),transparent_32%),radial-gradient(circle_at_15%_55%,rgba(255,231,220,0.85),transparent_34%),radial-gradient(circle_at_90%_70%,rgba(239,220,243,0.9),transparent_35%),linear-gradient(135deg,#f8e9ee_0%,#f6e4eb_45%,#f2e3ee_100%)]" />

        {/* Soft pastel blobs */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#f7cfdc]/45 blur-[100px]" />

        <div className="absolute right-[-8rem] top-[18%] h-[30rem] w-[30rem] rounded-full bg-[#ddcce9]/50 blur-[110px]" />

        <div className="absolute left-[-10rem] top-[48%] h-[34rem] w-[34rem] rounded-full bg-[#f8d8dc]/50 blur-[120px]" />

        <div className="absolute right-[-8rem] top-[72%] h-[32rem] w-[32rem] rounded-full bg-[#ead8ee]/45 blur-[120px]" />

        {/* Paper texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(#6f5a67 0.7px, transparent 0.7px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Tiny decorative symbols */}
        <span className="absolute left-[7%] top-[9%] rotate-[-12deg] text-2xl text-[#bd8da1]/50">
          ♡
        </span>

        <span className="absolute right-[11%] top-[18%] rotate-[15deg] text-lg text-[#a889a1]/45">
          ✦
        </span>

        <span className="absolute left-[10%] top-[42%] text-xl text-[#c28fa3]/40">
          ˚
        </span>

        <span className="absolute right-[7%] top-[51%] rotate-[-8deg] text-2xl text-[#b28ba6]/45">
          ♡
        </span>

        <span className="absolute left-[6%] top-[78%] rotate-[12deg] text-lg text-[#c295a5]/40">
          ✧
        </span>

        <span className="absolute right-[10%] top-[88%] text-xl text-[#b58aa0]/40">
          ♡
        </span>

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

            <span className="h-px w-8 bg-[#cdaeba]" />

            <span className="font-mono text-[7px] tracking-[0.4em] text-[#998893]">
              JL / PROFILE
            </span>

          </div>

          <span className="font-mono text-[8px] tracking-[0.3em] text-[#9d949f]">
            01 / 07
          </span>

        </div>


        <div className="relative mt-24">

          {/* Giant background letters */}

          <span
            className="pointer-events-none absolute -left-8 -top-28 select-none text-[15rem] font-black leading-none tracking-[-0.18em] text-[#d9bcca]/35 sm:text-[21rem] md:text-[29rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            J
          </span>

          <span
            className="pointer-events-none absolute right-[-5%] top-[10%] select-none text-[8rem] font-black leading-none tracking-[-0.15em] text-[#ead1df]/45 sm:text-[12rem]"
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

            <div className="absolute -inset-3 rotate-[3deg] rounded-[2.5rem] bg-[#ead7ef]" />

            <div className="absolute -inset-3 -rotate-[2deg] rounded-[2.5rem] bg-[#f3d4df]" />

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
                Yence ♡
              </span>

            </div>

            <div className="absolute -right-4 -top-8 rotate-[8deg] rounded-full bg-white/70 px-4 py-2">

              <span className="font-mono text-[7px] tracking-[0.3em] text-[#827782]">
                Jaeyel
              </span>

            </div>

            <Sparkles
              size={28}
              strokeWidth={1}
              className="absolute -right-6 top-[40%] rotate-12 text-[#aa8497]"
            />

          </div>

        </div>


        {/* SMALL CUTE DEER DRAWING */}

        <CuteDeer className="absolute bottom-14 left-[7%] hidden rotate-[-3deg] sm:block" />

        <div className="absolute bottom-8 right-[7%]">

          <span className="font-mono text-[7px] tracking-[0.5em] text-[#9e969f]">
            discover JL
          </span>

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


        <div className="relative overflow-hidden rounded-[2.8rem] border border-white/50 bg-[#f3dfe7]/75 p-7 shadow-[0_25px_60px_rgba(120,75,100,0.06)] backdrop-blur-sm sm:p-10">

          <span className="absolute right-8 top-5 text-4xl text-[#bd8fa3]/40">
            ♡
          </span>

          <span className="absolute bottom-5 left-8 text-xl text-[#ba91a4]/35">
            ✦
          </span>


          <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">

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
          ABOUT
      ===================================================== */}

      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">

        <SectionLabel
          number="03"
          title="ABOUT JL"
        />


        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          <div className="relative">

            <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full bg-[#f4ccd9]/70" />

            <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_25px_60px_rgba(100,65,85,0.08)]">

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


        <div className="relative rounded-[3rem] border border-white/50 bg-[#e8dff0]/75 p-8 shadow-[0_25px_60px_rgba(100,70,110,0.06)] backdrop-blur-sm sm:p-12 md:p-16">

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

      <section
        id="jl-photo-archive"
        className="relative scroll-mt-10 px-5 py-28 sm:px-10 md:px-16 lg:px-24"
      >

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
              The newest photo goes first. Click any photo to
              visit its original post.
            </p>

          </div>

        </div>


        {!showArchive ? (

          <div className="mt-14">

            {/* Preview */}

            <div className="grid grid-cols-6 gap-2 sm:gap-3">

              {photos.slice(0, 9).map((photo, index) => (

                <ArchivePhoto
                  key={index}
                  photo={photo}
                  index={index}
                />

              ))}

            </div>


            <button
              type="button"
              onClick={handleOpenArchive}
              className="mx-auto mt-12 flex items-center gap-3 rounded-full bg-[#4a3d4c] px-8 py-3 text-[8px] uppercase tracking-[0.4em] text-white shadow-[0_15px_35px_rgba(65,55,70,0.12)] transition hover:-translate-y-1 hover:bg-[#5a4b5b]"
            >
              Load More

              <ArrowUpRight
                size={13}
                strokeWidth={1}
              />

            </button>

          </div>

        ) : (

          <>

            {/* Archive counter */}

            <div className="mt-12 flex items-center justify-between border-y border-[#cdbdc8] py-4">

              <span className="font-mono text-[7px] tracking-[0.3em] text-[#9c8994]">
                PAGE {currentPage} / {totalPages}
              </span>

              <span className="font-mono text-[7px] tracking-[0.3em] text-[#9c8994]">
                {photos.length} PHOTOS
              </span>

            </div>


            {/* Photos */}

            <div className="mt-8 grid grid-cols-6 gap-2 sm:gap-3">

              {visiblePhotos.map((photo, index) => (

                <ArchivePhoto
                  key={startIndex + index}
                  photo={photo}
                  index={startIndex + index}
                />

              ))}

            </div>


            {/* Pagination */}

            <PhotoPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />


            {/* Close */}

            <div className="mt-10 flex justify-center">

              <button
                type="button"
                onClick={() => {
                  setShowArchive(false);
                  setCurrentPage(1);
                }}
                className="text-[8px] uppercase tracking-[0.4em] text-[#9c939e] underline underline-offset-4 transition hover:text-[#756773]"
              >
                Close Archive
              </button>

            </div>

          </>

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


        <div className="mt-8 flex justify-center gap-3 text-lg text-[#bd8da0]">
          <span>♡</span>
          <span>˚</span>
          <span>✦</span>
          <span>˚</span>
          <span>♡</span>
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

          <span className="text-xl text-[#827681]/60">
            ♡
          </span>

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

      <div className="absolute inset-0 bg-gradient-to-br from-[#f1dce7] via-[#eadcf2] to-[#f4d9df]" />

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
   ARCHIVE PHOTO

   CLICKING THE PHOTO -> ORIGINAL POST
============================================================= */

function ArchivePhoto({ photo, index }) {
  const colors = [
    ["#e5dff0", "#f3d7e2"],
    ["#f3d9e3", "#f8e9c9"],
    ["#eadcf2", "#dcebdd"],
    ["#fff0ca", "#dce9f7"],
    ["#dcebdd", "#f3d9e3"],
    ["#e7e1f2", "#f1dce7"],
  ];

  const pair = colors[index % colors.length];

  const isLarge =
    index % 10 === 0 ||
    index % 10 === 4 ||
    index % 10 === 8;

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

          <Camera
            size={isLarge ? 24 : 16}
            strokeWidth={1}
            className="text-[#766b79]/45 transition duration-300 group-hover:scale-110"
          />

        </div>

      )}


      {/* Hover overlay */}

      <div className="absolute inset-0 flex items-center justify-center bg-[#4c3c4d]/0 transition duration-300 group-hover:bg-[#4c3c4d]/20">

        <span className="translate-y-2 rounded-full bg-white/80 px-4 py-2 font-mono text-[6px] tracking-[0.25em] text-[#665867] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          ORIGINAL POST ↗
        </span>

      </div>


      <span className="absolute bottom-2 left-2 rounded-full bg-white/60 px-2 py-1 font-mono text-[6px] text-[#6c6370]">
        {String(index + 1).padStart(2, "0")}
      </span>

    </div>
  );

  /* If there is an original post URL, make the entire photo clickable. */

  if (photo.originalPost) {
    return (
      <a
        href={photo.originalPost}
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
   PHOTO PAGINATION
============================================================= */

function PhotoPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 4) {
      pages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 3) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-2">

      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-full border border-[#cbbbc5] bg-white/45 px-4 py-2 font-mono text-[7px] tracking-[0.2em] text-[#746573] transition hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-30"
      >
        PREV
      </button>


      {pages.map((page, index) => {

        if (page === "...") {
          return (
            <span
              key={`dots-${index}`}
              className="px-1 text-[#a68b9b]"
            >
              ···
            </span>
          );
        }

        const active = currentPage === page;

        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 font-mono text-[7px] tracking-[0.15em] transition ${
              active
                ? "bg-[#4a3d4c] text-white shadow-[0_8px_20px_rgba(65,55,70,0.15)]"
                : "border border-[#cbbbc5] bg-white/45 text-[#746573] hover:bg-white/75"
            }`}
          >
            {page}
          </button>
        );
      })}


      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-full border border-[#cbbbc5] bg-white/45 px-4 py-2 font-mono text-[7px] tracking-[0.2em] text-[#746573] transition hover:bg-white/70 disabled:cursor-not-allowed disabled:opacity-30"
      >
        NEXT
      </button>

    </div>
  );
}


/* =============================================================
   CUTE DEER DRAWING

   Small, simple line-art style.
   No raccoon.
============================================================= */

function CuteDeer({ className = "" }) {
  return (
    <div className={`pointer-events-none select-none ${className}`}>

      <svg
        width="105"
        height="125"
        viewBox="0 0 105 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >

        {/* Antlers */}

        <path
          d="M32 29C25 22 25 14 20 10"
          stroke="#8D7180"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M25 19L18 18"
          stroke="#8D7180"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        <path
          d="M27 23L23 16"
          stroke="#8D7180"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        <path
          d="M73 29C80 22 80 14 85 10"
          stroke="#8D7180"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M80 19L87 18"
          stroke="#8D7180"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        <path
          d="M78 23L82 16"
          stroke="#8D7180"
          strokeWidth="1.6"
          strokeLinecap="round"
        />


        {/* Ears */}

        <path
          d="M31 39C20 34 15 39 22 48C25 51 31 51 35 48"
          fill="#F1D8DF"
          stroke="#8D7180"
          strokeWidth="1.6"
        />

        <path
          d="M74 39C85 34 90 39 83 48C80 51 74 51 70 48"
          fill="#F1D8DF"
          stroke="#8D7180"
          strokeWidth="1.6"
        />


        {/* Head */}

        <path
          d="M34 36C38 27 48 24 53 24C58 24 68 27 72 36C76 45 74 62 68 69C64 74 58 77 53 77C48 77 42 74 38 69C32 62 30 45 34 36Z"
          fill="#F6E5E9"
          stroke="#8D7180"
          strokeWidth="1.7"
        />


        {/* Face */}

        <circle
          cx="44"
          cy="48"
          r="2"
          fill="#6E5B67"
        />

        <circle
          cx="62"
          cy="48"
          r="2"
          fill="#6E5B67"
        />


        {/* Tiny blush */}

        <ellipse
          cx="40"
          cy="57"
          rx="5"
          ry="2.5"
          fill="#E9BFCB"
          opacity="0.55"
        />

        <ellipse
          cx="66"
          cy="57"
          rx="5"
          ry="2.5"
          fill="#E9BFCB"
          opacity="0.55"
        />


        {/* Nose */}

        <path
          d="M50 58C51 56 55 56 56 58C56 60 54 61 53 61C52 61 50 60 50 58Z"
          fill="#9E7587"
        />


        {/* Mouth */}

        <path
          d="M53 61C51 64 49 64 48 63"
          stroke="#8D7180"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <path
          d="M53 61C55 64 57 64 58 63"
          stroke="#8D7180"
          strokeWidth="1.2"
          strokeLinecap="round"
        />


        {/* Body */}

        <path
          d="M40 75C43 71 48 70 53 70C58 70 63 71 66 75C71 81 73 93 70 101C67 109 61 112 53 112C45 112 39 109 36 101C33 93 35 81 40 75Z"
          fill="#F1D8DF"
          stroke="#8D7180"
          strokeWidth="1.7"
        />


        {/* Chest detail */}

        <path
          d="M47 77C48 85 49 93 53 99C57 93 58 85 59 77"
          stroke="#D5A8B8"
          strokeWidth="1.3"
          strokeLinecap="round"
        />


        {/* Legs */}

        <path
          d="M42 104L40 117"
          stroke="#8D7180"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M50 106L49 119"
          stroke="#8D7180"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M60 106L61 119"
          stroke="#8D7180"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M67 104L69 117"
          stroke="#8D7180"
          strokeWidth="1.7"
          strokeLinecap="round"
        />


        {/* Tiny tail */}

        <path
          d="M69 84C78 80 82 84 77 89"
          stroke="#8D7180"
          strokeWidth="1.6"
          strokeLinecap="round"
        />


        {/* Little heart */}

        <path
          d="M53 84C50 80 45 83 53 91C61 83 56 80 53 84Z"
          fill="#DFA9BA"
          opacity="0.7"
        />

      </svg>

    </div>
  );
}
