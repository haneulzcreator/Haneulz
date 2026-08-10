import React, { useMemo, useState } from "react";
import { ArrowUpRight, Camera, Heart, Paperclip, Sparkles, Star } from "lucide-react";
const PHOTOS_PER_PAGE = 25;
/*
============================================================
JL SCRAPBOOK
============================================================
Everything below can eventually be connected to your
admin page.
Replace the placeholder values whenever you're ready.
============================================================
*/
const profile = {
  fullName: "Jay Lawrence Gaspar",
  knownAs: "JL",
  nickname: "Yence",
  birthday: "Add later",
  nationality: "Add later",
  hobbies: "Add later",
  interests: "Add later",
  favorites: "Add later",
  mbti: "Add later",
};
const facts = [
  "Add JL's first fun fact here.",
  "Add another interesting fact about JL here.",
  "Add a funny or memorable detail here.",
  "Add another little JL fact here.",
  "Add another detail whenever you want.",
];
const photos = [
  {
    src: "",
    alt: "JL photo 01",
    postUrl: "",
    caption: "a little JL moment ♡",
  },
  {
    src: "",
    alt: "JL photo 02",
    postUrl: "",
    caption: "one for the scrapbook",
  },
  {
    src: "",
    alt: "JL photo 03",
    postUrl: "",
    caption: "yence ♡",
  },
  {
    src: "",
    alt: "JL photo 04",
    postUrl: "",
    caption: "another little memory",
  },
  {
    src: "",
    alt: "JL photo 05",
    postUrl: "",
    caption: "୨୧",
  },
  {
    src: "",
    alt: "JL photo 06",
    postUrl: "",
    caption: "saved with love",
  },
];
/* ============================================================
   MAIN
============================================================ */
export default function JLStory() {
  const [showArchive, setShowArchive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(
    1,
    Math.ceil(photos.length / PHOTOS_PER_PAGE)
  );
  const visiblePhotos = useMemo(() => {
    const start = (currentPage - 1) * PHOTOS_PER_PAGE;
    return photos.slice(start, start + PHOTOS_PER_PAGE);
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
    <main className="min-h-screen overflow-hidden bg-[#eee3d4] px-3 py-5 text-[#5d514d] sm:px-6">
      {/* PAPER TEXTURE */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.12] mix-blend-multiply">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(#8d7768 0.6px, transparent 0.6px)",
            backgroundSize: "7px 7px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-5xl">
        {/* =================================================
            SCRAPBOOK COVER HEADER
        ================================================= */}
        <header className="relative mx-auto mb-7 max-w-xl text-center">
          <div className="absolute -left-2 top-1 hidden rotate-[-12deg] text-[#bd8a92] sm:block">
            ✦
          </div>
          <div className="absolute -right-2 top-2 hidden rotate-[10deg] text-[#bd8a92] sm:block">
            ♡
          </div>
          <p
            className="text-2xl text-[#765f58]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            HANEULZ
          </p>
          <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.38em] text-[#a78d82]">
            scrapbook no. 01
          </p>
          <div className="mx-auto mt-3 h-px w-20 bg-[#c9aea0]" />
        </header>
        {/* =================================================
            HERO SCRAPBOOK PAGE
        ================================================= */}
        <section className="relative mx-auto max-w-4xl bg-[#f8f0df] px-5 py-8 shadow-[4px_6px_0_rgba(101,79,65,0.16)] sm:px-10 sm:py-12">
          {/* paper corners */}
          <div className="absolute left-0 top-0 h-5 w-5 border-b border-r border-[#d6c4ae]" />
          <div className="absolute right-0 top-0 h-5 w-5 border-b border-l border-[#d6c4ae]" />
          <div className="absolute bottom-0 left-0 h-5 w-5 border-r border-t border-[#d6c4ae]" />
          <div className="absolute bottom-0 right-0 h-5 w-5 border-l border-t border-[#d6c4ae]" />
          {/* tiny label */}
          <div className="absolute left-5 top-5 rotate-[-5deg] bg-[#d8a8b0] px-3 py-1 font-mono text-[7px] uppercase tracking-[0.2em] text-white shadow-sm">
            my little archive
          </div>
          {/* sticker */}
          <div className="absolute right-5 top-5 rotate-[8deg] text-2xl text-[#c48c99]">
            ♡
          </div>
          {/* HERO CONTENT */}
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="pt-8 text-3xl text-[#755d58]"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              ୨୧ a little page for Yence ୨୧
            </p>
            <div className="mt-3 text-sm tracking-[0.4em] text-[#bc8490]">
              ♡ ✦ ♡
            </div>
            <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.35em] text-[#a38a80]">
              known as
            </p>
            <h1
              className="mt-1 text-8xl leading-none text-[#514643] sm:text-9xl"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              JL
            </h1>
            <p
              className="mt-3 text-4xl text-[#725c58]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              {profile.fullName}
            </p>
            <div className="mx-auto mt-2 inline-block rotate-[-2deg] bg-[#e5c0c6] px-5 py-1 shadow-sm">
              <p
                className="text-xl text-[#76525c]"
                style={{
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                {profile.nickname} ♡
              </p>
            </div>
            {/* HERO PHOTO */}
            <div className="mx-auto mt-12 max-w-sm">
              <ScrapbookPhoto
                label="JL PHOTO"
                rotate="-2deg"
                tape="top"
              />
            </div>
            <p
              className="mt-6 text-xl text-[#89686d]"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              saved here with love ♡
            </p>
            <p
              className="mx-auto mt-4 max-w-lg text-xl leading-9 text-[#756761]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              a tiny collection of moments,
              memories, favorite things,
              and little pieces of JL.
            </p>
          </div>
          {/* DECORATIONS */}
          <div className="absolute bottom-7 left-7 rotate-[-8deg] text-xl text-[#b7838c]">
            ✦
          </div>
          <div className="absolute bottom-8 right-8 rotate-[8deg] text-xl text-[#b7838c]">
            ୨୧
          </div>
        </section>
        {/* =================================================
            QUICK LOOK — PAPER NOTE
        ================================================= */}
        <section className="relative mx-auto mt-10 max-w-4xl rotate-[-0.7deg] bg-[#fffaf0] px-6 py-9 shadow-[4px_5px_0_rgba(101,79,65,0.14)] sm:px-10">
          <Tape className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[2deg]" />
          <PaperClip className="absolute right-5 top-4 rotate-[12deg]" />
          <ScrapbookHeading>
            ୨୧ a quick look ୨୧
          </ScrapbookHeading>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Note
              label="known as"
              value={profile.knownAs}
            />
            <Note
              label="nickname"
              value={profile.nickname}
            />
            <Note
              label="birthday"
              value={profile.birthday}
            />
            <Note
              label="nationality"
              value={profile.nationality}
            />
            <Note
              label="mbti"
              value={profile.mbti}
            />
          </div>
        </section>
        {/* =================================================
            ABOUT JL
        ================================================= */}
        <section className="relative mx-auto mt-10 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            {/* PHOTO */}
            <div className="rotate-[-3deg]">
              <ScrapbookPhoto
                label="a little photo of JL"
                rotate="-1deg"
                tape="corner"
              />
              <p
                className="mt-3 text-center text-lg text-[#80666b]"
                style={{
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                one of my favorites ♡
              </p>
            </div>
            {/* NOTE */}
            <div className="relative rotate-[1.2deg] bg-[#e8d6bd] px-7 py-9 shadow-[4px_5px_0_rgba(101,79,65,0.15)]">
              <Tape className="absolute -top-3 right-8 rotate-[5deg]" />
              <span className="absolute right-5 top-5 text-lg text-[#a77b83]">
                ✦
              </span>
              <ScrapbookHeading>
                ♡ about JL ♡
              </ScrapbookHeading>
              <p
                className="mt-7 text-2xl leading-9 text-[#655653]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                This is a little space for everything
                that makes JL feel like JL — his
                personality, little habits, memorable
                moments, and the tiny things that make
                people smile.
              </p>
              <p
                className="mt-5 text-lg leading-8 text-[#806b65]"
                style={{
                  fontFamily:
                    "'Comic Sans MS', cursive",
                }}
              >
                Add your own little story about Yence
                here whenever you're ready ♡
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Sticker>JL</Sticker>
                <Sticker>Yence</Sticker>
                <Sticker>♡</Sticker>
              </div>
            </div>
          </div>
        </section>
        {/* =================================================
            HOBBIES
        ================================================= */}
        <section className="relative mx-auto mt-12 max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#c9aea0]" />
            <span
              className="text-xl text-[#8c6c67]"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              little pieces of JL
            </span>
            <div className="h-px flex-1 bg-[#c9aea0]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <MiniScrap
              title="♡ hobbies"
              value={profile.hobbies}
              rotate="-1.2deg"
            />
            <MiniScrap
              title="♡ interests"
              value={profile.interests}
              rotate="1deg"
            />
            <MiniScrap
              title="♡ favorites"
              value={profile.favorites}
              rotate="0.7deg"
            />
            <MiniScrap
              title="♡ MBTI"
              value={profile.mbti}
              rotate="-0.8deg"
            />
          </div>
        </section>
        {/* =================================================
            FUN FACTS — JOURNAL PAGE
        ================================================= */}
        <section className="relative mx-auto mt-12 max-w-4xl bg-[#f7edda] px-6 py-10 shadow-[4px_5px_0_rgba(101,79,65,0.13)] sm:px-10">
          <div className="absolute left-5 top-5 text-lg text-[#ba858f]">
            ✦
          </div>
          <div className="absolute right-6 top-5 text-lg text-[#ba858f]">
            ♡
          </div>
          <ScrapbookHeading>
            ♡ little things about JL ♡
          </ScrapbookHeading>
          <p
            className="mx-auto mt-2 max-w-md text-center text-base text-[#90766f]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            things worth saving in the margins
          </p>
          <div className="mx-auto mt-8 max-w-2xl">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="relative flex gap-4 border-b border-dashed border-[#cbb5a3] py-5 last:border-b-0"
              >
                <span className="pt-1 text-[#b97f8a]">
                  {index % 2 === 0 ? "♡" : "✦"}
                </span>
                <p
                  className="text-xl leading-8 text-[#665653]"
                  style={{
                    fontFamily:
                      "'Comic Sans MS', cursive",
                  }}
                >
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* =================================================
            PHOTO WALL
        ================================================= */}
        <section
          id="jl-photo-archive"
          className="relative mx-auto mt-12 max-w-4xl bg-[#f9f1e2] px-5 py-10 shadow-[4px_5px_0_rgba(101,79,65,0.14)] sm:px-8"
        >
          <PaperClip className="absolute right-6 top-3 rotate-[15deg]" />
          <ScrapbookHeading>
            ୨୧ JL photo wall ୨୧
          </ScrapbookHeading>
          <p
            className="mt-2 text-center text-lg text-[#896d69]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            little moments worth keeping ♡
          </p>
          {photos.length === 0 ? (
            <EmptyPhotoState />
          ) : !showArchive ? (
            <>
              <PhotoGrid
                photos={photos.slice(0, PHOTOS_PER_PAGE)}
                startIndex={0}
              />
              {photos.length > PHOTOS_PER_PAGE && (
                <button
                  type="button"
                  onClick={() => {
                    setShowArchive(true);
                    setCurrentPage(1);
                  }}
                  className="mx-auto mt-9 flex items-center gap-2 bg-[#d9aeb6] px-6 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white shadow-[3px_3px_0_rgba(101,79,65,0.15)] transition hover:-translate-y-0.5"
                >
                  load more ♡
                  <ArrowUpRight size={13} />
                </button>
              )}
            </>
          ) : (
            <>
              <PhotoGrid
                photos={visiblePhotos}
                startIndex={(currentPage - 1) * PHOTOS_PER_PAGE}
              />
              <div className="mt-9 flex flex-wrap justify-center gap-2">
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`h-9 min-w-9 px-3 font-mono text-xs shadow-sm transition ${
                      currentPage === page
                        ? "bg-[#b97f8b] text-white"
                        : "bg-[#fffaf0] text-[#806a66]"
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
                  className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#957a75] underline underline-offset-4"
                >
                  close archive
                </button>
              </div>
            </>
          )}
        </section>
        {/* =================================================
            END
        ================================================= */}
        <footer className="relative mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="text-2xl tracking-[0.3em] text-[#b77e89]">
            ♡ ✦ ୨୧ ✦ ♡
          </div>
          <p
            className="mt-5 text-3xl text-[#705956]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            saved with love for Yence ♡
          </p>
          <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.25em] text-[#a68c83]">
            JL · YENCE
          </p>
          <p
            className="mt-7 text-sm text-[#b09a8f]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            one little page in the HANEULZ scrapbook
          </p>
        </footer>
      </div>
    </main>
  );
}
/* ============================================================
   SCRAPBOOK HEADING
============================================================ */
function ScrapbookHeading({ children }) {
  return (
    <div className="text-center">
      <div className="text-sm text-[#b77f89]">
        ✦
      </div>
      <h2
        className="mt-1 text-4xl text-[#655451]"
        style={{
          fontFamily:
            "'Comic Sans MS', cursive",
        }}
      >
        {children}
      </h2>
      <div className="mx-auto mt-2 h-px w-16 bg-[#c9aea0]" />
    </div>
  );
}
/* ============================================================
   TAPE
============================================================ */
function Tape({ className = "" }) {
  return (
    <div
      className={`h-7 w-24 bg-[#e4c6a4]/80 shadow-sm ${className}`}
    />
  );
}
/* ============================================================
   PAPER CLIP
============================================================ */
function PaperClip({ className = "" }) {
  return (
    <Paperclip
      size={30}
      strokeWidth={1.3}
      className={`text-[#8c817a] ${className}`}
    />
  );
}
/* ============================================================
   NOTE
============================================================ */
function Note({ label, value }) {
  return (
    <div className="rotate-[-1deg] border-b border-dashed border-[#cbb8a8] pb-3">
      <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#9b8278]">
        {label}
      </p>
      <p
        className="mt-2 text-xl text-[#665653]"
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
   MINI SCRAP
============================================================ */
function MiniScrap({
  title,
  value,
  rotate,
}) {
  return (
    <div
      className="relative min-h-[150px] bg-[#fffaf0] px-6 py-7 shadow-[4px_4px_0_rgba(101,79,65,0.12)]"
      style={{
        transform: `rotate(${rotate})`,
      }}
    >
      <Tape className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[2deg]" />
      <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#9b8178]">
        {title}
      </p>
      <p
        className="mt-5 text-2xl leading-8 text-[#655552]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {value}
      </p>
      <span className="absolute bottom-4 right-5 text-[#bc8790]">
        ♡
      </span>
    </div>
  );
}
/* ============================================================
   STICKER
============================================================ */
function Sticker({ children }) {
  return (
    <span className="inline-flex rotate-[-2deg] items-center rounded-full border-2 border-white bg-[#d9aeb7] px-4 py-2 text-xs text-white shadow-[2px_3px_0_rgba(101,79,65,0.12)]">
      {children}
    </span>
  );
}
/* ============================================================
   SCRAPBOOK PHOTO
============================================================ */
function ScrapbookPhoto({
  label = "JL PHOTO",
  rotate = "0deg",
  tape = "top",
}) {
  return (
    <div
      className="relative bg-white p-3 pb-8 shadow-[4px_5px_0_rgba(75,62,55,0.18)]"
      style={{
        transform: `rotate(${rotate})`,
      }}
    >
      {tape === "top" && (
        <Tape className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 rotate-[2deg]" />
      )}
      {tape === "corner" && (
        <Tape className="absolute -top-3 right-[-10px] z-10 rotate-[38deg]" />
      )}
      <div className="aspect-[4/5] overflow-hidden bg-[#eee2d4]">
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f8f0e3] text-[#b77f89]">
            <Camera
              size={22}
              strokeWidth={1.2}
            />
          </div>
          <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.22em] text-[#9a8178]">
            {label}
          </p>
          <p
            className="mt-2 text-lg text-[#a27e80]"
            style={{
              fontFamily:
                "'Comic Sans MS', cursive",
            }}
          >
            photo goes here ♡
          </p>
        </div>
      </div>
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <span
          className="text-sm text-[#8e726e]"
          style={{
            fontFamily:
              "'Comic Sans MS', cursive",
          }}
        >
          JL ♡
        </span>
      </div>
    </div>
  );
}
/* ============================================================
   PHOTO GRID
============================================================ */
function PhotoGrid({
  photos,
  startIndex = 0,
}) {
  const validPhotos = photos.filter(
    (photo) => photo && photo.src
  );
  if (validPhotos.length === 0) {
    return <EmptyPhotoState />;
  }
  return (
    <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
      {validPhotos.map((photo, index) => (
        <PhotoCard
          key={`${photo.src}-${index}`}
          photo={photo}
          index={startIndex + index}
        />
      ))}
    </div>
  );
}
/* ============================================================
   PHOTO CARD
============================================================ */
function PhotoCard({
  photo,
  index,
}) {
  const rotations = [
    "-1.5deg",
    "1.2deg",
    "-0.6deg",
    "1.8deg",
    "-1deg",
    "0.7deg",
  ];
  const content = (
    <div
      className="group relative bg-white p-2 pb-7 shadow-[3px_4px_0_rgba(75,62,55,0.16)] transition duration-300 hover:z-10 hover:scale-[1.03]"
      style={{
        transform: `rotate(${rotations[index % rotations.length]})`,
      }}
    >
      <div className="absolute -top-3 left-1/2 z-10 h-6 w-16 -translate-x-1/2 rotate-[-2deg] bg-[#e2c09d]/80" />
      <div className="aspect-square overflow-hidden bg-[#eee2d4]">
        <img
          src={photo.src}
          alt={photo.alt || `JL photo ${index + 1}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <p
        className="absolute bottom-1.5 left-0 right-0 text-center text-xs text-[#806a66]"
        style={{
          fontFamily:
            "'Comic Sans MS', cursive",
        }}
      >
        {photo.caption || "JL ♡"}
      </p>
    </div>
  );
  if (photo.postUrl) {
    return (
      <a
        href={photo.postUrl}
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }
  return content;
}
/* ============================================================
   EMPTY PHOTO
============================================================ */
function EmptyPhotoState() {
  return (
    <div className="mx-auto mt-9 max-w-md rotate-[-1deg] bg-[#fffaf0] px-6 py-12 text-center shadow-[4px_4px_0_rgba(101,79,65,0.12)]">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ead5c0] text-[#a77e80]">
        <Camera
          size={24}
          strokeWidth={1.2}
        />
      </div>
      <p
        className="mt-5 text-2xl text-[#765f5a]"
        style={{
          fontFamily:
            "'Comic Sans MS', cursive",
        }}
      >
        this page needs more memories ♡
      </p>
      <p
        className="mx-auto mt-3 max-w-sm text-base leading-7 text-[#958078]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        Add JL photos to the scrapbook whenever
        you're ready.
      </p>
    </div>
  );
}
