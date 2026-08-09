import React, { useMemo, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
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
     Add as many photos as you want.
     src:
       The actual image URL.
     postUrl:
       The original post URL.
       Clicking the image will open this URL.
     NEWEST PHOTO = FIRST ITEM
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
    {
      src: "",
      alt: "JL photo 25",
      postUrl: "",
    },
    // =======================================================
    // ADD MORE PHOTOS BELOW
    // =======================================================
    {
      src: "",
      alt: "JL photo 26",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 27",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 28",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 29",
      postUrl: "",
    },
    {
      src: "",
      alt: "JL photo 30",
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
  const visiblePhotos = useMemo(() => {
    const start =
      (currentPage - 1) * PHOTOS_PER_PAGE;
    const end =
      start + PHOTOS_PER_PAGE;
    return photos.slice(start, end);
  }, [currentPage, photos]);
  const goToPage = (page) => {
    setCurrentPage(page);
    window.requestAnimationFrame(() => {
      const archive =
        document.getElementById("jl-photo-archive");
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
        overflow-hidden
        rounded-[3rem]
        bg-gradient-to-br
        from-[#fff9fc]
        via-[#fdf1f6]
        to-[#f8e6ee]
        text-[#403b49]
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
          These remain subtle and do NOT replace the page
          background gradient.
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-20 h-[520px] w-[520px] rounded-full bg-[#d9e7f5] opacity-40 blur-[110px]" />
        <div className="absolute -right-40 top-[12%] h-[550px] w-[550px] rounded-full bg-[#eadcf1] opacity-45 blur-[110px]" />
        <div className="absolute -left-40 top-[40%] h-[600px] w-[600px] rounded-full bg-[#f4dce5] opacity-40 blur-[120px]" />
        <div className="absolute -right-40 top-[67%] h-[600px] w-[600px] rounded-full bg-[#f9edc9] opacity-40 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "radial-gradient(#5e5664 0.6px, transparent 0.6px)",
            backgroundSize: "17px 17px",
          }}
        />
        <div className="absolute left-[7%] top-[17%] h-32 w-px rotate-[18deg] bg-[#9e8797]/20" />
        <div className="absolute right-[10%] top-[29%] h-40 w-px rotate-[-25deg] bg-[#9e8797]/20" />
        <div className="absolute left-[9%] top-[71%] h-36 w-px rotate-[-22deg] bg-[#9e8797]/20" />
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
            01 / 07
          </span>
        </div>
        <div className="relative mt-24">
          {/* Giant background letters */}
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
          {/* Main photo */}
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
        {/* ===================================================
            CUTE DEER DRAWING
        =================================================== */}
        <div className="absolute bottom-10 left-10 hidden sm:block">
          <div
            className="select-none text-center text-[#9d7589]"
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            <div className="text-[11px] leading-none">
              ♡
            </div>
            <div className="mt-1 text-[10px] tracking-[0.05em]">
              ᐠ ˘͈ᵕ˘͈ ᐟ
            </div>
            <div className="text-[8px]">
              /| ᵕ |\
            </div>
            <div className="text-[8px]">
              / づ ♡ づ
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
        className="relative px-5 py-28 sm:px-10 md:px-16 lg:px-24"
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
              The newest photo goes first. Open the archive
              to keep exploring.
            </p>
          </div>
        </div>
        {/* ===================================================
            INITIAL LOAD MORE BUTTON
        =================================================== */}
        {!showArchive ? (
          <>
            <div className="mt-14 grid grid-cols-6 gap-2 sm:gap-3">
              {photos
                .slice(0, PHOTOS_PER_PAGE)
                .map((photo, index) => (
                  <ArchivePhoto
                    key={index}
                    photo={photo}
                    index={index}
                  />
                ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setShowArchive(true);
                setCurrentPage(1);
              }}
              className="
                mx-auto
                mt-12
                flex
                items-center
                gap-3
                rounded-full
                bg-[#413a4d]
                px-8
                py-3
                text-[8px]
                uppercase
                tracking-[0.4em]
                text-white
                transition
                hover:-translate-y-1
                hover:bg-[#51485c]
              "
            >
              Load More
              <ArrowUpRight
                size={13}
                strokeWidth={1}
              />
            </button>
          </>
        ) : (
          <>
            {/* =================================================
                PAGINATED ARCHIVE
            ================================================= */}
            <div className="mt-14 grid grid-cols-6 gap-2 sm:gap-3">
              {visiblePhotos.map((photo, index) => {
                const actualIndex =
                  (currentPage - 1) *
                    PHOTOS_PER_PAGE +
                  index;
                return (
                  <ArchivePhoto
                    key={actualIndex}
                    photo={photo}
                    index={actualIndex}
                  />
                );
              })}
            </div>
            {/* =================================================
                PAGE NUMBERS
            ================================================= */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  className={`
                    flex
                    h-9
                    min-w-9
                    items-center
                    justify-center
                    rounded-full
                    px-3
                    font-mono
                    text-[8px]
                    tracking-[0.15em]
                    transition
                    ${
                      currentPage === page
                        ? "bg-[#413a4d] text-white"
                        : "bg-white/60 text-[#766b78] hover:bg-[#eadcf2]"
                    }
                  `}
                >
                  {page}
                </button>
              ))}
            </div>
            {/* =================================================
                ARCHIVE FOOTER
            ================================================= */}
            <div className="mt-8 flex flex-col items-center gap-5">
              <span
                className="text-xl text-[#a1768c]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Page {currentPage} ♡
              </span>
              <button
                type="button"
                onClick={() => {
                  setShowArchive(false);
                  setCurrentPage(1);
                }}
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.4em]
                  text-[#9c939e]
                  underline
                  underline-offset-4
                "
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
        <div
          className="mt-8 select-none text-[#9d7589]"
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          ♡ ᐠ ˘͈ᵕ˘͈ ᐟ ♡
        </div>
      </section>
    </main>
  );
}
/* =============================================================
   COMPONENTS
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
function Tag({ text }) {
  return (
    <span className="rounded-full border border-[#cbb8c4] bg-white/40 px-5 py-2 font-mono text-[7px] tracking-[0.18em] text-[#7e707c]">
      {text}
    </span>
  );
}
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
      className={`
        group
        relative
        overflow-hidden
        rounded-[2.6rem]
        p-8
        shadow-[0_18px_45px_rgba(65,55,75,0.06)]
        transition
        duration-300
        hover:-translate-y-2
        sm:p-10
        ${className}
      `}
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
          className={`
            mt-10
            text-[#5b5463]
            ${large ? "text-5xl sm:text-6xl" : "text-4xl"}
          `}
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
      className={`
        relative
        overflow-hidden
        rounded-[2.5rem]
        bg-[#e9e2e9]
        ${large ? "aspect-[4/3]" : "aspect-[4/5]"}
        ${className}
      `}
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
   ARCHIVE PHOTO
   Clicking the photo opens the original post.
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
    index === 18 ||
    index === 23;
  const content = (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[1rem]
        sm:rounded-[1.5rem]
        ${
          isLarge
            ? "col-span-4 row-span-2 aspect-square"
            : "col-span-2 aspect-square"
        }
      `}
      style={{
        background:
          `linear-gradient(135deg, ${pair[0]}, ${pair[1]})`,
      }}
    >
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Camera
            size={isLarge ? 24 : 16}
            strokeWidth={1}
            className="
              text-[#766b79]/45
              transition
              duration-300
              group-hover:scale-110
            "
          />
        </div>
      )}
      {/* Hover overlay */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/0
          transition
          duration-300
          group-hover:bg-black/10
        "
      >
        {photo.src && photo.postUrl && (
          <span
            className="
              rounded-full
              bg-white/80
              px-4
              py-2
              font-mono
              text-[6px]
              uppercase
              tracking-[0.3em]
              text-[#625967]
              opacity-0
              transition
              group-hover:opacity-100
            "
          >
            Original post ↗
          </span>
        )}
      </div>
      <span className="absolute bottom-2 left-2 rounded-full bg-white/60 px-2 py-1 font-mono text-[6px] text-[#6c6370]">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
  /* If there is an original post, make the entire image clickable. */
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
