import React, { useMemo, useState } from "react";
import { ArrowUpRight, Camera, Heart, Star } from "lucide-react";

const PHOTOS_PER_PAGE = 25;

const profile = {
  fullName: "Jay Lawrence Gaspar",
  knownAs: "JL",
  nickname: "Yence",
  alsoKnownAs: "Jaeyel",
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
  ADD PHOTOS HERE

  You can add as many as you want.

  src     = image URL
  postUrl = original post URL

  Example:

  {
    src: "https://...",
    alt: "JL photo",
    postUrl: "https://..."
  }
*/

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

  // Add as many as you want...
];

export default function JLStory() {
  const [showArchive, setShowArchive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(photos.length / PHOTOS_PER_PAGE)
  );

  const visiblePhotos = useMemo(() => {
    const start = (currentPage - 1) * PHOTOS_PER_PAGE;

    return photos.slice(
      start,
      start + PHOTOS_PER_PAGE
    );
  }, [currentPage]);

  const goToPage = (page) => {
    setCurrentPage(page);

    window.requestAnimationFrame(() => {
      document
        .getElementById("jl-photo-archive")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#fff7fb] via-[#fdeef6] to-[#fff5f9] px-4 py-6 text-[#665765] sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* TOP */}
        <header className="flex items-center justify-between px-2 py-3">
          <div>
            <p className="font-mono text-[9px] tracking-[0.25em] text-[#aa8a9e]">
              HANEULZ ARCHIVE
            </p>

            <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-[#c2a9b7]">
              JL / 01
            </p>
          </div>

          <span className="text-lg text-[#c49aae]">
            ୨୧
          </span>
        </header>

        {/* HERO */}
        <section className="relative mt-4 rounded-[2rem] bg-white/45 px-6 py-14 text-center shadow-[0_12px_40px_rgba(170,130,150,0.08)] backdrop-blur-sm sm:px-10">

          <div className="absolute left-5 top-5 text-[#d3aebe]">
            ♡୨୧
          </div>

          <div className="absolute right-5 top-5 text-[#d3aebe]">
            ୨୧♡
          </div>

          <p
            className="text-2xl text-[#a67d91]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            ୨୧ a little page for Yence ୨୧
          </p>

          <div className="mt-5 text-xl text-[#c193a8]">
            ♡୨୧♡
          </div>

          <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.35em] text-[#b59ba9]">
            known as
          </p>

          <h1
            className="mt-2 text-7xl font-normal tracking-tight text-[#675462] sm:text-8xl"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            JL
          </h1>

          <div className="mt-4 text-xl text-[#b18498]">
            ♡
          </div>

          <p
            className="mt-3 text-3xl text-[#675462]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Jay Lawrence Gaspar
          </p>

          <p
            className="mt-2 text-2xl text-[#a97c91]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            Yence · Jaeyel
          </p>

          {/* CUTE PHOTO */}
          <div className="mx-auto mt-10 max-w-md">
            <PhotoPlaceholder />
          </div>

          <div className="mt-6 text-2xl text-[#bd91a4]">
            Yence ♡
          </div>

          <p
            className="mt-5 text-xl text-[#a88799]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            a tiny collection of things about JL
          </p>

          <div className="mt-5 text-xl text-[#c49aae]">
            ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚
          </div>

          {/* DEER */}
          <CuteDeer />
        </section>

        {/* QUICK LOOK */}
        <section className="mt-8 rounded-[2rem] bg-white/40 px-6 py-10 shadow-[0_10px_35px_rgba(170,130,150,0.06)] backdrop-blur-sm sm:px-10">

          <SectionTitle>
            ୨୧ a quick look ୨୧
          </SectionTitle>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

            <InfoCard
              label="KNOWN AS"
              value={profile.knownAs}
            />

            <InfoCard
              label="NICKNAME"
              value={profile.nickname}
            />

            <InfoCard
              label="ALSO KNOWN AS"
              value={profile.alsoKnownAs}
            />

            <InfoCard
              label="BIRTHDAY"
              value={profile.birthday}
            />

            <InfoCard
              label="NATIONALITY"
              value={profile.nationality}
            />

            <InfoCard
              label="MBTI"
              value={profile.mbti}
            />

          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-8 rounded-[2rem] bg-white/40 px-6 py-10 shadow-[0_10px_35px_rgba(170,130,150,0.06)] backdrop-blur-sm sm:px-10">

          <SectionTitle>
            ♡ about JL ♡
          </SectionTitle>

          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">

            <PhotoPlaceholder />

            <div>
              <p
                className="text-2xl leading-9 text-[#756271]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                This is where you can write a little
                introduction about JL, Yence, and
                everything you want people visiting
                this little HANEULZ corner to know.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <CuteTag>JL</CuteTag>
                <CuteTag>Yence</CuteTag>
                <CuteTag>Jaeyel</CuteTag>
              </div>
            </div>

          </div>
        </section>

        {/* HOBBIES */}
        <section className="mt-8 rounded-[2rem] bg-white/40 px-6 py-10 shadow-[0_10px_35px_rgba(170,130,150,0.06)] backdrop-blur-sm sm:px-10">

          <SectionTitle>
            ୨୧ hobbies & interests ୨୧
          </SectionTitle>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <SoftCard
              title="♡ hobbies"
              value={profile.hobbies}
            />

            <SoftCard
              title="♡ interests"
              value={profile.interests}
            />

            <SoftCard
              title="♡ MBTI"
              value={profile.mbti}
            />

            <SoftCard
              title="♡ favorites"
              value={profile.favorites}
            />

          </div>
        </section>

        {/* FUN FACTS */}
        <section className="mt-8 rounded-[2rem] bg-white/40 px-6 py-10 shadow-[0_10px_35px_rgba(170,130,150,0.06)] backdrop-blur-sm sm:px-10">

          <SectionTitle>
            ♡ fun facts about JL ♡
          </SectionTitle>

          <div className="mt-8">

            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-[#ead6df] py-5 last:border-b-0"
              >
                <span className="shrink-0 text-[#bd91a5]">
                  ୨୧
                </span>

                <p
                  className="text-xl leading-8 text-[#756271]"
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

        {/* PHOTO ARCHIVE */}
        <section
          id="jl-photo-archive"
          className="mt-8 rounded-[2rem] bg-white/40 px-5 py-10 shadow-[0_10px_35px_rgba(170,130,150,0.06)] backdrop-blur-sm sm:px-8"
        >

          <SectionTitle>
            ୨୧ JL photos ୨୧
          </SectionTitle>

          <div className="mt-2 text-center">
            <span className="text-lg text-[#b58a9d]">
              ♡ a tiny photo collection ♡
            </span>
          </div>

          {!showArchive ? (
            <>
              <PhotoGrid
                photos={photos.slice(
                  0,
                  PHOTOS_PER_PAGE
                )}
                startIndex={0}
              />

              {photos.length > PHOTOS_PER_PAGE && (
                <button
                  type="button"
                  onClick={() => {
                    setShowArchive(true);
                    setCurrentPage(1);
                  }}
                  className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-[#d8bbc8] bg-white/60 px-7 py-3 text-[9px] uppercase tracking-[0.25em] text-[#896e7d] transition hover:bg-white hover:shadow-md"
                >
                  load more ♡
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1}
                  />
                </button>
              )}
            </>
          ) : (
            <>
              <PhotoGrid
                photos={visiblePhotos}
                startIndex={
                  (currentPage - 1) *
                  PHOTOS_PER_PAGE
                }
              />

              <div className="mt-10 flex flex-wrap justify-center gap-2">

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`h-9 min-w-9 rounded-full px-3 text-xs transition ${
                      currentPage === page
                        ? "bg-[#b98da1] text-white"
                        : "bg-white/60 text-[#987c8b] hover:bg-[#f5e1ea]"
                    }`}
                  >
                    {page}
                  </button>
                ))}

              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowArchive(false);
                    setCurrentPage(1);
                  }}
                  className="text-[9px] uppercase tracking-[0.3em] text-[#ad91a0] underline underline-offset-4"
                >
                  close archive
                </button>
              </div>
            </>
          )}
        </section>

        {/* END */}
        <footer className="px-4 py-16 text-center">

          <div className="text-2xl text-[#c092a5]">
            ♡ ୨୧ ♡
          </div>

          <p
            className="mt-4 text-2xl text-[#9f778a]"
            style={{
              fontFamily:
                "'Comic Sans MS', cursive",
            }}
          >
            made with love for Yence
          </p>

          <p className="mt-3 text-sm text-[#b49aa8]">
            Yence · Jaeyel ♡
          </p>

        </footer>

      </div>
    </main>
  );
}

/* ============================================================
   SMALL COMPONENTS
============================================================ */

function SectionTitle({ children }) {
  return (
    <div className="text-center">
      <div className="text-sm text-[#c092a5]">
        ୨୧
      </div>

      <h2
        className="mt-1 text-4xl text-[#715d6b]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {children}
      </h2>

      <div className="mt-2 text-sm text-[#c092a5]">
        ♡
      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-[1.4rem] border border-[#ead6df] bg-[#fffafd]/70 p-5 text-center">
      <p className="font-mono text-[7px] tracking-[0.25em] text-[#ad91a0]">
        {label}
      </p>

      <p
        className="mt-3 text-xl text-[#725f6c]"
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

function CuteTag({ children }) {
  return (
    <span className="rounded-full border border-[#dec5d0] bg-[#fffafd]/80 px-4 py-2 text-sm text-[#98798a]">
      ୨୧ {children} ♡
    </span>
  );
}

function SoftCard({ title, value }) {
  return (
    <div className="rounded-[1.7rem] bg-[#fffafd]/70 p-6">
      <p
        className="text-xl text-[#a2788c]"
        style={{
          fontFamily:
            "'Comic Sans MS', cursive",
        }}
      >
        {title}
      </p>

      <p
        className="mt-4 text-xl leading-8 text-[#756271]"
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
   PHOTO GRID
============================================================ */

function PhotoGrid({ photos, startIndex }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
      {photos.map((photo, index) => (
        <ArchivePhoto
          key={`${startIndex}-${index}`}
          photo={photo}
          index={startIndex + index}
        />
      ))}
    </div>
  );
}

function ArchivePhoto({ photo, index }) {
  const image = (
    <div className="group relative aspect-square overflow-hidden rounded-[1.3rem] border border-[#ead5df] bg-[#f8eaf0]">

      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center text-[#bd9aaa]">
          <Camera
            size={20}
            strokeWidth={1}
          />

          <span className="mt-2 text-[7px] tracking-[0.15em]">
            JL PHOTO
          </span>
        </div>
      )}

      {photo.src && photo.postUrl && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#6d5361]/0 transition group-hover:bg-[#6d5361]/15">
          <span className="rounded-full bg-white/85 px-3 py-2 text-[7px] tracking-[0.15em] text-[#765f6c] opacity-0 transition group-hover:opacity-100">
            ORIGINAL POST ↗
          </span>
        </div>
      )}

      <span className="absolute bottom-2 left-2 rounded-full bg-white/75 px-2 py-1 text-[7px] text-[#866f7d]">
        {String(index + 1).padStart(2, "0")}
      </span>

    </div>
  );

  if (photo.src && photo.postUrl) {
    return (
      <a
        href={photo.postUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open original post for ${photo.alt}`}
      >
        {image}
      </a>
    );
  }

  return image;
}

/* ============================================================
   PLACEHOLDER
============================================================ */

function PhotoPlaceholder() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#ead5df] bg-gradient-to-br from-[#f8e7ef] via-[#f5eaf5] to-[#f8eee3]">

      <div className="absolute left-8 top-8 text-xl text-white/80">
        ♡
      </div>

      <div className="absolute right-8 top-10 text-lg text-white/70">
        ୨୧
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/55">
          <Camera
            size={22}
            strokeWidth={1}
            className="text-[#9d7e8d]"
          />
        </div>

        <span className="mt-4 text-[8px] tracking-[0.3em] text-[#9c7d8c]">
          JL PHOTO
        </span>

        <span className="mt-3 text-lg text-[#bd91a5]">
          ♡
        </span>

      </div>
    </div>
  );
}

/* ============================================================
   CUTE DEER
============================================================ */

function CuteDeer() {
  return (
    <div className="absolute bottom-6 left-6 text-[#b6879a]">

      <div className="relative text-center">

        <div className="absolute -left-2 -top-4 text-xs">
          ♡
        </div>

        <div
          className="text-[44px] leading-none"
          aria-label="cute deer"
        >
          ૮ • ﻌ • ა
        </div>

        <div className="mt-[-3px] text-[28px] leading-none">
          ୨♡୧
        </div>

        <div className="mt-1 text-[9px] tracking-widest">
          ᐢ. .ᐢ
        </div>

      </div>

    </div>
  );
}
