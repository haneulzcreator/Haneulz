import React, { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";
export default function HanStory() {
  const [showArchive, setShowArchive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  /* =========================================================
     HAN INFORMATION
     ========================================================= */
  const profile = {
    fullName: "Han",
    knownAs: "HAN",
    nicknames: "Add later",
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
    "Add Han's first fun fact here.",
    "Add another interesting fact about Han here.",
    "Add a funny or memorable Han detail here.",
    "Add another little thing about Han here.",
    "Add another fact whenever you want.",
  ];
  /* =========================================================
     PHOTO ARCHIVE
     
     Add as many photos as you want.
     
     src:
       Image URL.
     
     postUrl:
       Original post URL.
       Clicking the image opens the original post.
     
     NEWEST PHOTO = FIRST ITEM
     ========================================================= */
  const photos = [
    {
      src: "",
      alt: "Han photo 01",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 02",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 03",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 04",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 05",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 06",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 07",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 08",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 09",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 10",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 11",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 12",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 13",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 14",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 15",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 16",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 17",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 18",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 19",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 20",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 21",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 22",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 23",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 24",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 25",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 26",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 27",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 28",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 29",
      postUrl: "",
    },
    {
      src: "",
      alt: "Han photo 30",
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
  /*
    IMPORTANT:
    The photos array is intentionally kept outside the component
    in production if you later move it to a data file.
    For now, useMemo keeps the visible page calculation stable
    and avoids the ESLint dependency warning.
  */
  const visiblePhotos = useMemo(() => {
    const start =
      (currentPage - 1) * PHOTOS_PER_PAGE;
    return photos.slice(
      start,
      start + PHOTOS_PER_PAGE
    );
  }, [currentPage]);
  const goToPage = (page) => {
    setCurrentPage(page);
    window.requestAnimationFrame(() => {
      const archive =
        document.getElementById("han-photo-archive");
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
        min-h-screen
        overflow-hidden
        rounded-[3rem]
        bg-gradient-to-br
        from-[#f5f9ff]
        via-[#edf5fc]
        to-[#e3eef8]
        text-[#3f4b59]
      "
    >
      {/* =====================================================
          SOFT BLUE BACKGROUND
          ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-32 h-[500px] w-[500px] rounded-full bg-[#d9e9f8]/60 blur-[110px]" />
        <div className="absolute -right-40 top-[18%] h-[500px] w-[500px] rounded-full bg-[#dfe8f5]/70 blur-[110px]" />
        <div className="absolute -left-40 top-[45%] h-[560px] w-[560px] rounded-full bg-[#e9e2f0]/55 blur-[120px]" />
        <div className="absolute -right-40 top-[72%] h-[600px] w-[600px] rounded-full bg-[#d8eaf3]/60 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#526171 0.6px, transparent 0.6px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>
      {/* =====================================================
          COVER
          ===================================================== */}
      <section className="relative min-h-[850px] px-6 pb-24 pt-8 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[8px] tracking-[0.45em] text-[#7089a0]">
              HANEULZ
            </span>
            <span className="h-px w-8 bg-[#b9cad9]" />
            <span className="font-mono text-[7px] tracking-[0.4em] text-[#8a98a5]">
              HAN / STORY
            </span>
          </div>
          <span className="font-mono text-[8px] tracking-[0.3em] text-[#8997a5]">
            01 / 07
          </span>
        </div>
        <div className="relative mt-24">
          {/* Soft background letters */}
          <span
            className="
              pointer-events-none
              absolute
              -left-8
              -top-28
              select-none
              text-[15rem]
              font-black
              leading-none
              tracking-[-0.18em]
              text-[#d5e2ee]/70
              sm:text-[21rem]
              md:text-[29rem]
            "
            style={{
              fontFamily:
                "Arial Black, sans-serif",
            }}
          >
            H
          </span>
          <span
            className="
              pointer-events-none
              absolute
              right-[-5%]
              top-[10%]
              select-none
              text-[8rem]
              font-black
              leading-none
              tracking-[-0.15em]
              text-[#dce7f1]/70
              sm:text-[12rem]
            "
            style={{
              fontFamily:
                "Arial Black, sans-serif",
            }}
          >
            A
          </span>
          <div className="relative z-10">
            <div className="ml-2 flex items-center gap-3">
              <span
                className="text-xl text-[#7088a0]"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
                }}
              >
                known as
              </span>
              <span className="h-px w-10 bg-[#aebfce]" />
              <span className="font-mono text-[7px] tracking-[0.35em] text-[#83919d]">
                HAN
              </span>
            </div>
            <h1
              className="
                mt-2
                text-[8rem]
                leading-[0.7]
                tracking-[-0.09em]
                text-[#394654]
                sm:text-[11rem]
                md:text-[15rem]
                lg:text-[18rem]
              "
              style={{
                fontFamily:
                  "'Bodoni 72', 'Bodoni MT', Didot, Georgia, serif",
              }}
            >
              HAN
            </h1>
            <div className="ml-2 mt-12">
              <p
                className="
                  text-3xl
                  tracking-[0.01em]
                  text-[#4d5b69]
                  sm:text-4xl
                "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Han
              </p>
              <p
                className="mt-1 text-2xl text-[#7890a7]"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
                }}
              >
                a little bit of mischief ♡
              </p>
            </div>
          </div>
          {/* Main photo */}
          <div className="relative z-20 ml-auto mt-16 w-[94%] max-w-[600px] sm:w-[70%]">
            <div className="absolute -inset-3 rotate-[3deg] rounded-[2.5rem] bg-[#d9e7f3]" />
            <div className="absolute -inset-3 -rotate-[2deg] rounded-[2.5rem] bg-[#e8e2ee]" />
            <PhotoPlaceholder
              large
              className="relative"
            />
            <div className="absolute -bottom-7 -left-5 rotate-[-6deg] rounded-full bg-[#edf4fb] px-6 py-3 shadow-[0_15px_35px_rgba(60,75,90,0.1)]">
              <span
                className="text-xl text-[#617487]"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
                }}
              >
                Han ♡
              </span>
            </div>
            <div className="absolute -right-4 -top-8 rotate-[8deg] rounded-full bg-white/75 px-4 py-2">
              <span className="font-mono text-[7px] tracking-[0.3em] text-[#71808d]">
                ⋆ little cat energy
              </span>
            </div>
            <Sparkles
              size={27}
              strokeWidth={1}
              className="absolute -right-6 top-[40%] rotate-12 text-[#718aa0]"
            />
          </div>
        </div>
        {/* ===================================================
            SMALL CAT DOODLE
            =================================================== */}
        <div className="absolute bottom-12 left-10 hidden sm:block">
          <div className="select-none text-center text-[#71889d]">
            <div className="text-[9px]">
              ♡
            </div>
            <div
              className="mt-1 text-[18px]"
              style={{
                fontFamily:
                  "Georgia, serif",
              }}
            >
              /ᐠ｡ꞈ｡ᐟ\
            </div>
            <div className="mt-1 text-[8px] tracking-[0.15em]">
              little troublemaker
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-[#8b98a4]">
            discover Han
          </span>
          <ArrowDown
            size={14}
            strokeWidth={1}
            className="text-[#7890a5]"
          />
        </div>
      </section>
      {/* =====================================================
          QUICK LOOK
          ===================================================== */}
      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="02"
          title="A QUICK LOOK"
        />
        <div className="relative overflow-hidden rounded-[2.8rem] bg-[#e5eef7] p-7 sm:p-10">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/60 blur-[70px]" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#e9e0ed]/60 blur-[70px]" />
          <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            <QuickItem
              label="KNOWN AS"
              value="HAN"
            />
            <QuickItem
              label="NICKNAME"
              value={profile.nicknames}
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
          ABOUT HAN
          ===================================================== */}
      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="03"
          title="ABOUT HAN"
        />
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full bg-[#d9e8f4]" />
            <div className="relative overflow-hidden rounded-[2.5rem]">
              <PhotoPlaceholder />
            </div>
            <div className="absolute -bottom-6 -right-5 rounded-full bg-[#e8e1ee] px-6 py-3">
              <span
                className="text-xl text-[#657183]"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
                }}
              >
                Han ♡
              </span>
            </div>
          </div>
          <div>
            <p
              className="
                text-2xl
                leading-9
                text-[#5f6b78]
                sm:text-3xl
                sm:leading-10
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              This is where you can write a proper
              introduction about Han — his personality,
              little habits, the things that make him
              memorable, and everything that makes him
              feel like himself.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <Tag text="HAN" />
              <Tag text="♡" />
              <Tag text="little cat energy" />
              <Tag text="HANEULZ" />
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          HIS LITTLE THINGS
          ===================================================== */}
      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="04"
          title="HIS LITTLE THINGS"
        />
        <div className="grid gap-6 md:grid-cols-12">
          <FeatureCard
            className="min-h-[350px] md:col-span-7"
            background="#dceaf5"
            number="01"
            title="HOBBIES"
            value={profile.hobbies}
            large
          />
          <FeatureCard
            className="min-h-[270px] md:col-span-5 md:mt-16"
            background="#e7e0ee"
            number="02"
            title="INTERESTS"
            value={profile.interests}
          />
          <FeatureCard
            className="min-h-[250px] md:col-span-4 md:-mt-8"
            background="#edf3f8"
            number="03"
            title="MBTI"
            value={profile.mbti}
          />
          <FeatureCard
            className="min-h-[300px] md:col-span-8"
            background="#dfeaf3"
            number="04"
            title="MORE"
            value="Add anything else you want people to know about Han."
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
        <div className="relative rounded-[3rem] bg-[#e3edf6] p-8 sm:p-12 md:p-16">
          <div className="absolute right-8 top-8">
            <Star
              size={28}
              strokeWidth={1}
              className="rotate-12 text-[#728aa0]"
            />
          </div>
          <p
            className="text-2xl text-[#718ba2]"
            style={{
              fontFamily:
                "'Caveat', cursive",
            }}
          >
            Han's favorites
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
              className="
                text-8xl
                leading-[0.76]
                tracking-[-0.07em]
                text-[#3d4956]
                sm:text-[9rem]
              "
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              LITTLE
              <br />
              FACTS
              <br />
              <span className="text-[#7890a5]">
                HAN
              </span>
            </h2>
            <div className="mt-8 text-[#71889c]">
              <span
                className="text-3xl"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
                }}
              >
                ᵔᴗᵔ
              </span>
            </div>
          </div>
          <div>
            {facts.map((fact, index) => (
              <div
                key={index}
                className="
                  group
                  flex
                  items-start
                  gap-5
                  border-t
                  border-[#c7d2dc]
                  py-7
                "
              >
                <span className="pt-1 font-mono text-[8px] tracking-[0.25em] text-[#7891a6]">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>
                <p
                  className="
                    text-2xl
                    leading-8
                    text-[#5f6b77]
                  "
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
                  className="
                    ml-auto
                    mt-1
                    shrink-0
                    text-[#7891a5]
                    opacity-0
                    transition
                    group-hover:opacity-100
                  "
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
        id="han-photo-archive"
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
                className="text-[#718aa0]"
              />
              <span
                className="text-xl text-[#718ba1]"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
                }}
              >
                Han photos
              </span>
            </div>
            <h2
              className="
                mt-2
                text-7xl
                leading-[0.75]
                tracking-[-0.07em]
                text-[#3d4956]
                sm:text-9xl
              "
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
              className="
                text-lg
                leading-7
                text-[#7b8792]
              "
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              The newest photo goes first.
              Open the archive to keep
              exploring.
            </p>
          </div>
        </div>
        {/* ===================================================
            INITIAL 25 PHOTOS
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
                bg-[#465767]
                px-8
                py-3
                text-[8px]
                uppercase
                tracking-[0.4em]
                text-white
                transition
                hover:-translate-y-1
                hover:bg-[#526679]
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
              {visiblePhotos.map(
                (photo, index) => {
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
                }
              )}
            </div>
            {/* =================================================
                PAGE NUMBERS
                ================================================= */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
              {Array.from(
                {
                  length: totalPages,
                },
                (_, index) => index + 1
              ).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() =>
                    goToPage(page)
                  }
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
                        ? "bg-[#465767] text-white"
                        : "bg-white/65 text-[#71808c] hover:bg-[#dce8f2]"
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
                className="text-xl text-[#718ba1]"
                style={{
                  fontFamily:
                    "'Caveat', cursive",
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
                  text-[#89949e]
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
          <span className="h-px flex-1 bg-[#c8d3dc]" />
          <Heart
            size={15}
            strokeWidth={1}
            className="text-[#7d96aa]"
          />
          <span className="h-px flex-1 bg-[#c8d3dc]" />
        </div>
        <h2
          className="
            mt-10
            text-8xl
            tracking-[-0.08em]
            text-[#3d4956]
            sm:text-[11rem]
          "
          style={{
            fontFamily:
              "'Bodoni 72', Didot, Georgia, serif",
          }}
        >
          HAN
        </h2>
        <p
          className="mt-2 text-2xl text-[#718ba1]"
          style={{
            fontFamily:
              "'Caveat', cursive",
          }}
        >
          a little page for Han ♡
        </p>
        <div
          className="mt-8 select-none text-[#71889c]"
          style={{
            fontFamily:
              "Georgia, serif",
          }}
        >
          ୨୧ ♡ /ᐠ｡ꞈ｡ᐟ\ ♡ ୨୧
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
      <span className="font-mono text-[8px] tracking-[0.3em] text-[#7890a4]">
        {number}
      </span>
      <span className="h-px w-12 bg-[#c4d0da]" />
      <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-[#89949e]">
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
    <div className="border-l border-[#c4d0da] pl-4">
      <p className="font-mono text-[7px] tracking-[0.35em] text-[#7e92a2]">
        {label}
      </p>
      <p
        className="mt-3 text-xl leading-6 text-[#5c6976]"
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
    <span className="rounded-full border border-[#bdcbd6] bg-white/45 px-5 py-2 font-mono text-[7px] tracking-[0.18em] text-[#71808d]">
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
      className={`
        group
        relative
        overflow-hidden
        rounded-[2.6rem]
        p-8
        shadow-[0_18px_45px_rgba(65,75,85,0.06)]
        transition
        duration-300
        hover:-translate-y-2
        sm:p-10
        ${className}
      `}
      style={{
        backgroundColor:
          background,
      }}
    >
      <span
        className="
          absolute
          -right-4
          -top-12
          text-[12rem]
          leading-none
          text-black/[0.035]
        "
        style={{
          fontFamily:
            "'Bodoni 72', Didot, Georgia, serif",
        }}
      >
        {number}
      </span>
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] tracking-[0.35em] text-[#738391]">
            {number}
          </span>
          <Sparkles
            size={16}
            strokeWidth={1}
            className="text-[#738391]/70"
          />
        </div>
        <h3
          className={`
            mt-10
            text-[#536170]
            ${
              large
                ? "text-5xl sm:text-6xl"
                : "text-4xl"
            }
          `}
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          {title}
        </h3>
        <p
          className="
            mt-8
            max-w-lg
            text-xl
            leading-8
            text-[#687582]
          "
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
      <p className="font-mono text-[7px] tracking-[0.4em] text-[#8293a0]">
        {label}
      </p>
      <p
        className="mt-5 text-2xl text-[#5f6d79]"
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
        bg-[#e2ebf3]
        ${
          large
            ? "aspect-[4/3]"
            : "aspect-[4/5]"
        }
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#dceaf5] via-[#e7e0ee] to-[#d8e9f3]" />
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/70 blur-[70px]" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#d5e7f3]/70 blur-[70px]" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(#667583 0.6px, transparent 0.6px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/55">
          <Camera
            size={22}
            strokeWidth={1}
            className="text-[#71808d]"
          />
        </div>
        <span className="mt-5 font-mono text-[7px] tracking-[0.4em] text-[#71808d]">
          HAN PHOTO
        </span>
        <span
          className="mt-2 text-xl text-[#7890a4]"
          style={{
            fontFamily:
              "'Caveat', cursive",
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
   Clicking the image opens the original post.
============================================================= */
function ArchivePhoto({ photo, index }) {
  const colors = [
    ["#dceaf5", "#e6e0ee"],
    ["#e1edf6", "#d8e8f2"],
    ["#e8e0ed", "#dceaf5"],
    ["#edf3f8", "#dce8f2"],
    ["#d9e9f3", "#e7e0ed"],
    ["#e4eef6", "#dce8f1"],
  ];
  const pair =
    colors[index % colors.length];
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
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Camera
            size={isLarge ? 24 : 16}
            strokeWidth={1}
            className="
              text-[#667583]/40
              transition
              duration-300
              group-hover:scale-110
            "
          />
          <span
            className="mt-2 text-sm text-[#71899d]/60"
            style={{
              fontFamily:
                "'Caveat', cursive",
            }}
          >
            ♡
          </span>
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
        {photo.src &&
          photo.postUrl && (
            <span
              className="
                rounded-full
                bg-white/85
                px-4
                py-2
                font-mono
                text-[6px]
                uppercase
                tracking-[0.3em]
                text-[#596875]
                opacity-0
                transition
                group-hover:opacity-100
              "
            >
              Original post ↗
            </span>
          )}
      </div>
      <span className="absolute bottom-2 left-2 rounded-full bg-white/65 px-2 py-1 font-mono text-[6px] text-[#61707d]">
        {String(index + 1).padStart(
          2,
          "0"
        )}
      </span>
    </div>
  );
  /* Entire image is clickable when postUrl exists. */
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
