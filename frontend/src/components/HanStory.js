import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Heart,
  Sparkles,
  Film,
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
export default function HanStory() {
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
        .getElementById("han-photo-archive")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };
  return (
    <main className="min-h-screen overflow-hidden bg-[#eef7fc] px-4 py-6 text-[#40586a] sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* =====================================================
            TOP
        ===================================================== */}
        <header className="flex items-center justify-between px-3 py-3">
          <div>
            <p className="font-mono text-[9px] font-medium tracking-[0.28em] text-[#557b94]">
              HANEULZ CORNER
            </p>
            <p className="mt-1 font-mono text-[8px] tracking-[0.22em] text-[#82a4b8]">
              HAN / 01
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#6e9bb7]">
            <span>♡</span>
            <span>୨୧</span>
            <span>♡</span>
          </div>
        </header>
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="relative mt-4 overflow-hidden rounded-[2.5rem] border border-[#c9dfeb] bg-[#fafdff] px-6 py-14 text-center shadow-[0_12px_35px_rgba(76,125,153,0.10)] sm:px-10">
          {/* subtle decorative pieces */}
          <div className="pointer-events-none absolute left-7 top-7 rotate-[-8deg] rounded-xl bg-[#e3f2f9] px-3 py-2 text-sm text-[#6e9bb6] shadow-sm">
            ୨୧
          </div>
          <div className="pointer-events-none absolute right-7 top-7 rotate-[7deg] rounded-xl bg-[#edf7fb] px-3 py-2 text-sm text-[#76a0b8] shadow-sm">
            ♡
          </div>
          <div className="pointer-events-none absolute bottom-8 left-9 text-xs text-[#9bbccc]">
            ✦
          </div>
          <div className="pointer-events-none absolute bottom-8 right-9 text-xs text-[#9bbccc]">
            ୨୧
          </div>
          <p
            className="text-2xl font-medium text-[#52758c]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            ୨୧ a little page for Han ୨୧
          </p>
          <div className="mt-5 text-lg tracking-[0.3em] text-[#78a5be]">
            ♡ ୨୧ ♡
          </div>
          <p className="mt-8 font-mono text-[8px] font-medium uppercase tracking-[0.4em] text-[#7293a7]">
            known as
          </p>
          <h1
            className="mt-2 text-7xl font-normal tracking-tight text-[#304c5e] sm:text-8xl"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Han
          </h1>
          <div className="mt-3 text-xl text-[#6d9bb5]">
            ♡
          </div>
          <p
            className="mt-3 text-3xl font-medium text-[#425e70]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            {profile.fullName}
          </p>
          <p
            className="mt-2 text-2xl font-medium text-[#5d86a0]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            {profile.nickname}
          </p>
          {/* HERO PHOTO */}
          <div className="mx-auto mt-10 max-w-md">
            <PhotoPlaceholder label="HAN PHOTO" />
          </div>
          <p
            className="mt-5 text-xl font-medium text-[#638da5]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            Han ♡
          </p>
          <p
            className="mx-auto mt-4 max-w-lg text-lg font-medium leading-8 text-[#526b7b]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            a tiny collection of things about Han —
            little moments, favorite things, memories,
            and pieces of the person behind the name.
          </p>
          <div className="mt-6 text-xl text-[#76a3bb]">
            ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚
          </div>
        </section>
        {/* =====================================================
            QUICK LOOK
        ===================================================== */}
        <section className="mt-8 rotate-[-0.2deg] rounded-[2rem] border border-[#cbdfea] bg-[#fafdff] px-6 py-10 shadow-[5px_6px_0_rgba(112,157,180,0.12)] sm:px-10">
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
            <InfoCard
              label="♡"
              value="Han"
            />
          </div>
        </section>
        {/* =====================================================
            ABOUT HAN
        ===================================================== */}
        <section className="mt-8 rounded-[2rem] border border-[#cbdfea] bg-[#fafdff] px-6 py-10 shadow-[5px_6px_0_rgba(112,157,180,0.10)] sm:px-10">
          <SectionTitle>
            ♡ about Han ♡
          </SectionTitle>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
            <PhotoPlaceholder
              label="A LITTLE PHOTO OF HAN"
            />
            <div>
              <p
                className="text-2xl font-medium leading-9 text-[#40596a]"
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
                className="mt-5 text-lg font-medium leading-8 text-[#607889]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Add your own little story about Han
                here whenever you're ready.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <CuteTag>
                  Han
                </CuteTag>
                <CuteTag>
                  HANEULZ
                </CuteTag>
                <CuteTag>
                  ♡
                </CuteTag>
              </div>
            </div>
          </div>
        </section>
        {/* =====================================================
            HOBBIES & INTERESTS
        ===================================================== */}
        <section className="mt-8 rotate-[0.25deg] rounded-[2rem] border border-[#cbdfea] bg-[#fafdff] px-6 py-10 shadow-[5px_6px_0_rgba(112,157,180,0.10)] sm:px-10">
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
        {/* =====================================================
            LITTLE THINGS
        ===================================================== */}
        <section className="mt-8 rounded-[2rem] border border-[#cbdfea] bg-[#fafdff] px-6 py-10 shadow-[5px_6px_0_rgba(112,157,180,0.10)] sm:px-10">
          <SectionTitle>
            ♡ little things about Han ♡
          </SectionTitle>
          <div className="mt-8">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-[#d7e6ee] py-5 last:border-b-0"
              >
                <span className="shrink-0 pt-1 text-[#6d9db7]">
                  ୨୧
                </span>
                <p
                  className="text-xl font-medium leading-8 text-[#40596a]"
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
        {/* =====================================================
            MOVIE RECOMMENDATIONS
        ===================================================== */}
        <section className="mt-8 rotate-[-0.2deg] rounded-[2rem] border border-[#cbdfea] bg-[#fafdff] px-6 py-10 shadow-[5px_6px_0_rgba(112,157,180,0.10)] sm:px-10">
          <SectionTitle>
            ୨୧ Han's movie recommendations ୨୧
          </SectionTitle>
          <div className="mx-auto mt-2 max-w-xl text-center">
            <span
              className="text-lg font-medium text-[#5e8093]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              ♡ movies Han recommends ♡
            </span>
          </div>
          {movieRecommendations.length === 0 ? (
            <div className="mt-8 rounded-[1.75rem] border border-dashed border-[#bdd7e5] bg-[#f5fbfe] px-6 py-12 text-center">
              <Film
                size={25}
                strokeWidth={1.3}
                className="mx-auto text-[#6e9db7]"
              />
              <p
                className="mt-4 text-xl font-medium text-[#557688]"
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
                    className="group flex items-center gap-4 rounded-[1.6rem] border border-[#cfe1ea] bg-[#f8fcfe] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5f3f9] text-[#6394ae]">
                      <Film
                        size={17}
                        strokeWidth={1.4}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[7px] font-medium uppercase tracking-[0.22em] text-[#7898aa]">
                        recommendation{" "}
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p
                        className="mt-1 text-xl font-medium text-[#405a6a]"
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', Georgia, serif",
                        }}
                      >
                        {movie.title}
                      </p>
                    </div>
                    <span className="ml-auto text-[#82abc0] opacity-0 transition group-hover:opacity-100">
                      ♡
                    </span>
                  </div>
                )
              )}
            </div>
          )}
        </section>
        {/* =====================================================
            PHOTO ARCHIVE
        ===================================================== */}
        <section
          id="han-photo-archive"
          className="mt-8 rounded-[2rem] border border-[#cbdfea] bg-[#fafdff] px-5 py-10 shadow-[5px_6px_0_rgba(112,157,180,0.10)] sm:px-8"
        >
          <SectionTitle>
            ୨୧ Han photos ୨୧
          </SectionTitle>
          <div className="mt-2 text-center">
            <span
              className="text-lg font-medium text-[#5d8094]"
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
                  className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-[#b9d2df] bg-[#f0f8fc] px-7 py-3 text-[9px] font-medium uppercase tracking-[0.25em] text-[#56788c] transition hover:bg-white hover:shadow-md"
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
                    onClick={() =>
                      goToPage(page)
                    }
                    className={`h-9 min-w-9 rounded-full px-3 text-xs font-medium transition ${
                      currentPage === page
                        ? "bg-[#719db5] text-white"
                        : "bg-[#edf7fb] text-[#5d8094] hover:bg-[#dceef5]"
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
                  className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#6e8fa2] underline underline-offset-4"
                >
                  close archive
                </button>
              </div>
            </>
          )}
        </section>
        {/* =====================================================
            END
        ===================================================== */}
        <footer className="px-4 py-16 text-center">
          <div className="text-2xl tracking-[0.2em] text-[#70a0b8]">
            ♡ ୨୧ ✦
          </div>
          <p
            className="mt-5 text-2xl font-medium text-[#547b91]"
            style={{
              fontFamily:
                "'Comic Sans MS', cursive",
            }}
          >
            made with love for Han ♡
          </p>
          <p className="mt-3 text-sm font-medium text-[#718e9e]">
            Han · HANEULZ
          </p>
          <p className="mt-5 text-xs font-medium tracking-[0.15em] text-[#91aab7]">
            one little page in the HANEULZ corner
          </p>
        </footer>
      </div>
    </main>
  );
}
/* ============================================================
   SECTION TITLE
============================================================ */
function SectionTitle({ children }) {
  return (
    <div className="text-center">
      <div className="text-sm text-[#6d9db7]">
        ୨୧
      </div>
      <h2
        className="mt-1 text-4xl font-medium text-[#405b6b]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {children}
      </h2>
      <div className="mt-2 text-sm text-[#6d9db7]">
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
    <div className="rounded-[1.4rem] border border-[#cfe1ea] bg-[#fafdff] p-5 text-center transition hover:-translate-y-0.5 hover:shadow-sm">
      <p className="font-mono text-[7px] font-medium tracking-[0.25em] text-[#7897a8]">
        {label}
      </p>
      <p
        className="mt-3 text-xl font-medium text-[#405a6b]"
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
   CUTE TAG
============================================================ */
function CuteTag({ children }) {
  return (
    <span className="rounded-full border border-[#c6dce7] bg-[#eef8fc] px-4 py-2 text-xs font-medium text-[#587c91]">
      {children} ♡
    </span>
  );
}
/* ============================================================
   SOFT CARD
============================================================ */
function SoftCard({ title, value }) {
  return (
    <div className="rounded-[1.6rem] border border-[#cfe1ea] bg-[#fafdff] p-6">
      <div className="flex items-center gap-2">
        <Heart
          size={14}
          strokeWidth={1.5}
          className="text-[#6d9db7]"
        />
        <p className="font-mono text-[8px] font-medium uppercase tracking-[0.25em] text-[#7897a8]">
          {title}
        </p>
      </div>
      <p
        className="mt-4 text-xl font-medium leading-8 text-[#405b6c]"
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
    <div className="group relative overflow-hidden rounded-[2rem] border border-[#c9dfe9] bg-[#fafdff]">
      <div className="aspect-[4/5] w-full bg-gradient-to-br from-[#fafdff] via-[#edf7fb] to-[#dceef5]">
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#6d9db7] shadow-sm">
            <Camera
              size={21}
              strokeWidth={1.3}
            />
          </div>
          <p className="mt-5 font-mono text-[8px] font-medium uppercase tracking-[0.25em] text-[#7897a8]">
            {label}
          </p>
          <p
            className="mt-2 text-lg font-medium text-[#5d8398]"
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
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
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
    <div className="group relative overflow-hidden rounded-[1.4rem] border border-[#cfe1ea] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:rotate-[0.4deg] hover:shadow-lg">
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/30 to-transparent px-3 pb-3 pt-10 opacity-0 transition group-hover:opacity-100">
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
    <div className="mt-8 rounded-[2rem] border border-dashed border-[#bfd8e4] bg-[#f6fbfd] px-6 py-12 text-center">
      <Camera
        size={25}
        strokeWidth={1.2}
        className="mx-auto text-[#6d9db7]"
      />
      <p
        className="mt-4 text-xl font-medium text-[#52788d]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        the photo collection is waiting ♡
      </p>
      <p className="mx-auto mt-2 max-w-md text-xs font-medium leading-6 text-[#718f9e]">
        Add Han photos to the photo archive whenever
        you're ready.
      </p>
    </div>
  );
}
