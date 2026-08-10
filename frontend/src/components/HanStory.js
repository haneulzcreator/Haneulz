import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Heart,
  Film,
  Sparkles,
  Star,
} from "lucide-react";
const PHOTOS_PER_PAGE = 25;
const profile = {
  fullName: "Park Han",
  knownAs: "Han",
  nickname: "hani",
  birthday: "Add later",
  nationality: "Add later",
  hobbies: "Add later",
  interests: "Add later",
  favorites: "Add later",
  mbti: "Add later",
};
const facts = [
  "Add Han's first fun fact here.",
  "Add another interesting fact about Han here.",
  "Add a funny or memorable detail here.",
  "Add another little Han fact here.",
  "Add another detail whenever you want.",
];
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
];
/*
============================================================
HAN MOVIE RECOMMENDATIONS
============================================================
Add as many as you want.
Only the movie title is displayed.
Example:
{
  title: "Your Movie Title"
}
============================================================
*/
const movieRecommendations = [
  {
    title: "Add movie recommendation here",
  },
  {
    title: "Add another movie here",
  },
  {
    title: "Add another movie here",
  },
];
export default function HanStory() {
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
        .getElementById("han-photo-archive")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };
  return (
    <main className="min-h-screen overflow-hidden bg-[#dcecf7] px-4 py-8 text-[#38546a] sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* =================================================
            SCRAPBOOK HEADER
        ================================================= */}
        <header className="relative mb-6 rotate-[-0.3deg]">
          <div className="absolute -top-3 left-1/2 z-10 h-7 w-28 -translate-x-1/2 rotate-[-2deg] bg-[#b8d6e8]/80 shadow-sm" />
          <div className="rounded-[1.5rem] border-2 border-[#b5d0e1] bg-[#f9fcff] px-6 py-5 shadow-[4px_5px_0_rgba(89,126,151,0.14)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-[9px] font-bold tracking-[0.3em] text-[#557890]">
                  HANEULZ SCRAPBOOK
                </p>
                <p className="mt-1 font-mono text-[8px] tracking-[0.22em] text-[#7696aa]">
                  HAN / PAGE 01
                </p>
              </div>
              <div className="rotate-6 text-2xl text-[#6f9bb7]">
                ♡
              </div>
            </div>
          </div>
        </header>
        {/* =================================================
            HERO SCRAPBOOK PAGE
        ================================================= */}
        <section className="relative overflow-hidden rounded-[2rem] border-2 border-[#b8d4e5] bg-[#f8fcff] px-6 py-12 shadow-[6px_7px_0_rgba(91,130,157,0.14)] sm:px-10">
          {/* paper doodles */}
          <div className="pointer-events-none absolute left-5 top-5 rotate-[-12deg] text-xl text-[#78a4c0]">
            ✦
          </div>
          <div className="pointer-events-none absolute right-7 top-6 rotate-12 text-xl text-[#78a4c0]">
            ୨୧
          </div>
          <div className="pointer-events-none absolute bottom-7 left-8 rotate-[-8deg] text-lg text-[#9bbbd0]">
            ♡
          </div>
          <div className="pointer-events-none absolute bottom-6 right-7 rotate-12 text-lg text-[#9bbbd0]">
            ✦
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="text-2xl text-[#507995]"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              ୨୧ a little page for Han ୨୧
            </p>
            <div className="mt-4 text-lg tracking-[0.3em] text-[#709bb7]">
              ♡ ✦ ♡
            </div>
            <p className="mt-7 font-mono text-[8px] font-bold uppercase tracking-[0.4em] text-[#7897aa]">
              known as
            </p>
            <h1
              className="mt-1 text-7xl font-normal text-[#36576d] sm:text-8xl"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Han
            </h1>
            <p
              className="mt-2 text-3xl text-[#456b83]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              {profile.fullName}
            </p>
            <p
              className="mt-2 text-2xl text-[#5d88a2]"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              {profile.nickname} ♡
            </p>
            {/* taped hero photo */}
            <div className="relative mx-auto mt-10 max-w-md">
              <div className="absolute -top-4 left-1/2 z-10 h-8 w-28 -translate-x-1/2 rotate-[-3deg] bg-[#a9cee3]/80 shadow-sm" />
              <PhotoPlaceholder label="HAN PHOTO" />
            </div>
            <p
              className="mt-5 text-xl text-[#5b89a5]"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              Han ♡
            </p>
            <p
              className="mx-auto mt-4 max-w-lg text-lg leading-8 text-[#526f81]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              a tiny collection of things about Han —
              little moments, favorite things, memories,
              and pieces of the person behind the name.
            </p>
            <div className="mt-6 text-xl text-[#6d9ab5]">
              ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚
            </div>
          </div>
        </section>
        {/* =================================================
            QUICK LOOK
        ================================================= */}
        <ScrapbookSection
          tape="left"
          title="୨୧ a quick look ୨୧"
        >
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
        </ScrapbookSection>
        {/* =================================================
            ABOUT HAN
        ================================================= */}
        <ScrapbookSection
          tape="right"
          title="♡ about Han ♡"
        >
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
            <div className="relative">
              <div className="absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 rotate-3 bg-[#b9d8e9]/80" />
              <PhotoPlaceholder
                label="A LITTLE PHOTO OF HAN"
              />
            </div>
            <div>
              <p
                className="text-2xl leading-9 text-[#3f5d70]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                This is a little space for everything
                that makes Han feel like Han — his
                personality, little habits, memorable
                moments, and the tiny things that make
                people smile.
              </p>
              <p
                className="mt-5 text-lg leading-8 text-[#5e7889]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Add your own little story about Han
                here whenever you're ready.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <CuteTag>Han</CuteTag>
                <CuteTag>HANEULZ</CuteTag>
                <CuteTag>♡</CuteTag>
              </div>
            </div>
          </div>
        </ScrapbookSection>
        {/* =================================================
            HOBBIES & INTERESTS
        ================================================= */}
        <ScrapbookSection
          tape="left"
          title="୨୧ hobbies & interests ୨୧"
        >
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
        </ScrapbookSection>
        {/* =================================================
            FUN FACTS
        ================================================= */}
        <ScrapbookSection
          tape="right"
          title="♡ little things about Han ♡"
        >
          <div className="mt-8">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex gap-4 border-b-2 border-dashed border-[#c5dbe8] py-5 last:border-b-0"
              >
                <span className="shrink-0 rotate-[-8deg] text-[#5f91ad]">
                  ୨୧
                </span>
                <p
                  className="text-xl leading-8 text-[#405f72]"
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
        </ScrapbookSection>
        {/* =================================================
            MOVIE RECOMMENDATIONS
        ================================================= */}
        <ScrapbookSection
          tape="left"
          title="୨୧ Han's movie recommendations ୨୧"
        >
          <div className="mx-auto mt-2 max-w-xl text-center">
            <span
              className="text-lg text-[#557d94]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              ♡ movies Han recommends ♡
            </span>
          </div>
          {movieRecommendations.length === 0 ? (
            <div className="mt-8 rounded-[1.75rem] border-2 border-dashed border-[#b9d3e2] bg-[#f4faff] px-6 py-12 text-center">
              <Film
                size={25}
                strokeWidth={1.2}
                className="mx-auto text-[#6593ad]"
              />
              <p
                className="mt-4 text-xl text-[#557d94]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Han's movie list is waiting ♡
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {movieRecommendations.map(
                (movie, index) => (
                  <div
                    key={`${movie.title}-${index}`}
                    className="relative rounded-[1.4rem] border-2 border-[#c3dbe8] bg-[#fafdff] p-5 shadow-[3px_4px_0_rgba(95,139,164,0.10)] transition duration-300 hover:-translate-y-1 hover:rotate-[-0.5deg]"
                  >
                    <div className="absolute -right-2 -top-3 rotate-12 text-[#709bb6]">
                      ✦
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 rotate-[-4deg] items-center justify-center rounded-xl border border-[#c4dce9] bg-[#e9f5fc] text-[#5f91ad]">
                        <Film
                          size={17}
                          strokeWidth={1.4}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[7px] font-bold uppercase tracking-[0.22em] text-[#7898aa]">
                          Han's pick · {String(index + 1).padStart(2, "0")}
                        </p>
                        <p
                          className="mt-1 text-xl text-[#3f6074]"
                          style={{
                            fontFamily:
                              "'Cormorant Garamond', Georgia, serif",
                          }}
                        >
                          {movie.title}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </ScrapbookSection>
        {/* =================================================
            PHOTO ARCHIVE
        ================================================= */}
        <section
          id="han-photo-archive"
          className="relative mt-8 overflow-hidden rounded-[2rem] border-2 border-[#b8d4e4] bg-[#f8fcff] px-5 py-10 shadow-[5px_6px_0_rgba(89,130,157,0.12)] sm:px-8"
        >
          <div className="absolute -top-3 left-16 h-7 w-24 rotate-[-4deg] bg-[#b2d3e5]/80" />
          <SectionTitle>
            ୨୧ Han photos ୨୧
          </SectionTitle>
          <div className="mt-2 text-center">
            <span
              className="text-lg text-[#527d95]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              ♡ a tiny photo collection ♡
            </span>
          </div>
          {photos.length === 0 ? (
            <EmptyPhotoState />
          ) : !showArchive ? (
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
                  className="mx-auto mt-8 flex items-center gap-2 rounded-full border-2 border-[#a9c8da] bg-white px-7 py-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#52758b] transition hover:-translate-y-0.5 hover:shadow-md"
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
                    className={`h-9 min-w-9 rounded-full border-2 px-3 text-xs transition ${
                      currentPage === page
                        ? "border-[#6f9bb5] bg-[#6f9bb5] text-white"
                        : "border-[#bdd5e3] bg-white text-[#587e94] hover:bg-[#eaf5fb]"
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
                  className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#587d91] underline underline-offset-4"
                >
                  close archive
                </button>
              </div>
            </>
          )}
        </section>
        {/* =================================================
            ENDING
        ================================================= */}
        <footer className="px-4 py-16 text-center">
          <div className="text-2xl tracking-[0.2em] text-[#5f91ad]">
            ♡ ୨୧ ✦
          </div>
          <p
            className="mt-5 text-2xl text-[#527c94]"
            style={{
              fontFamily:
                "'Comic Sans MS', cursive",
            }}
          >
            made with love for Han ♡
          </p>
          <p className="mt-3 text-sm text-[#6f8d9e]">
            Han · HANEULZ
          </p>
          <p className="mt-5 text-xs font-medium tracking-[0.15em] text-[#7896a7]">
            one little page in the HANEULZ scrapbook
          </p>
        </footer>
      </div>
    </main>
  );
}
/* ============================================================
   SCRAPBOOK SECTION
============================================================ */
function ScrapbookSection({
  children,
  title,
  tape = "left",
}) {
  return (
    <section className="relative mt-8 rounded-[2rem] border-2 border-[#bdd6e4] bg-[#f9fcff] px-6 py-10 shadow-[5px_6px_0_rgba(91,130,157,0.11)] sm:px-10">
      <div
        className={`absolute -top-3 h-7 w-24 bg-[#b4d3e4]/80 ${
          tape === "right"
            ? "right-16 rotate-3"
            : "left-16 rotate-[-3deg]"
        }`}
      />
      <SectionTitle>
        {title}
      </SectionTitle>
      {children}
    </section>
  );
}
/* ============================================================
   SECTION TITLE
============================================================ */
function SectionTitle({ children }) {
  return (
    <div className="text-center">
      <div className="rotate-[-5deg] text-sm font-bold text-[#5686a0]">
        ୨୧
      </div>
      <h2
        className="mt-1 text-4xl font-medium text-[#36576d]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {children}
      </h2>
      <div className="mt-2 rotate-3 text-sm font-bold text-[#5686a0]">
        ♡
      </div>
    </div>
  );
}
/* ============================================================
   INFO CARD
============================================================ */
function InfoCard({ label, value }) {
  return (
    <div className="rounded-[1.3rem] border-2 border-[#c7dce8] bg-[#fafdff] p-5 text-center shadow-[2px_3px_0_rgba(93,136,161,0.08)] transition hover:-translate-y-0.5 hover:rotate-[-0.5deg]">
      <p className="font-mono text-[7px] font-bold tracking-[0.25em] text-[#61859a]">
        {label}
      </p>
      <p
        className="mt-3 text-xl text-[#3d5e72]"
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
   TAG
============================================================ */
function CuteTag({ children }) {
  return (
    <span className="rounded-full border-2 border-[#bfd7e4] bg-[#f3faff] px-4 py-2 text-xs font-medium text-[#527b92]">
      {children} ♡
    </span>
  );
}
/* ============================================================
   SOFT CARD
============================================================ */
function SoftCard({ title, value }) {
  return (
    <div className="rounded-[1.5rem] border-2 border-[#c8dce8] bg-[#fafdff] p-6 shadow-[2px_3px_0_rgba(94,137,162,0.07)]">
      <div className="flex items-center gap-2">
        <Heart
          size={14}
          strokeWidth={1.6}
          className="text-[#5e90aa]"
        />
        <p className="font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#61859a]">
          {title}
        </p>
      </div>
      <p
        className="mt-4 text-xl leading-8 text-[#405f72]"
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
   PHOTO PLACEHOLDER
============================================================ */
function PhotoPlaceholder({
  label = "HAN PHOTO",
}) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border-2 border-[#bfd7e4] bg-white shadow-[4px_5px_0_rgba(87,128,151,0.10)]">
      <div className="aspect-[4/5] w-full bg-gradient-to-br from-[#fafdff] via-[#eaf5fb] to-[#d9ebf5]">
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="flex h-14 w-14 rotate-[-4deg] items-center justify-center rounded-xl border-2 border-[#bfd7e4] bg-white text-[#5d91ac] shadow-sm">
            <Camera
              size={21}
              strokeWidth={1.3}
            />
          </div>
          <p className="mt-5 font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#61879b]">
            {label}
          </p>
          <p
            className="mt-2 text-lg text-[#5c8399]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            photo goes here ♡
          </p>
        </div>
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
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
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
  const content = (
    <div className="group relative overflow-hidden rounded-[1.2rem] border-2 border-[#bfd7e4] bg-white shadow-[3px_4px_0_rgba(86,127,150,0.10)] transition duration-300 hover:-translate-y-1 hover:rotate-[-1deg] hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={photo.src}
          alt={
            photo.alt ||
            `Han photo ${index + 1}`
          }
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#23455a]/45 to-transparent px-3 pb-3 pt-10 opacity-0 transition group-hover:opacity-100">
        <p className="text-right text-[10px] text-white">
          ୨୧
        </p>
      </div>
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
   EMPTY PHOTO STATE
============================================================ */
function EmptyPhotoState() {
  return (
    <div className="mt-8 rounded-[1.75rem] border-2 border-dashed border-[#b8d3e1] bg-[#f5fbff] px-6 py-12 text-center">
      <Camera
        size={25}
        strokeWidth={1.2}
        className="mx-auto text-[#5d91ac]"
      />
      <p
        className="mt-4 text-xl text-[#527b92]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        the photo collection is waiting ♡
      </p>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#638395]">
        Add Han photos to the photo archive whenever
        you're ready.
      </p>
    </div>
  );
}
