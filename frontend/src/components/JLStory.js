import React, { useMemo, useState } from "react";
import { ArrowUpRight, Camera, Heart, Sparkles } from "lucide-react";
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
  "Add another interesting fact about JL here.",
  "Add a funny or memorable detail here.",
  "Add another little JL fact here.",
  "Add another detail whenever you want.",
];
const photos = [
  { src: "", alt: "JL photo 01", postUrl: "" },
  { src: "", alt: "JL photo 02", postUrl: "" },
  { src: "", alt: "JL photo 03", postUrl: "" },
  { src: "", alt: "JL photo 04", postUrl: "" },
  { src: "", alt: "JL photo 05", postUrl: "" },
  { src: "", alt: "JL photo 06", postUrl: "" },
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
    return photos.slice(start, start + PHOTOS_PER_PAGE);
  }, [currentPage]);
  const goToPage = (page) => {
    setCurrentPage(page);
    requestAnimationFrame(() => {
      document
        .getElementById("jl-photo-archive")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };
  return (
    <main className="min-h-screen bg-[#fff9fb] px-4 py-8 text-[#4f4650] sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <header className="flex items-center justify-between px-2">
          <div>
            <p className="font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-[#b57b91]">
              HANEULZ CORNER
            </p>
            <p className="mt-1 text-xs text-[#b99aa8]">
              a little corner for JL ♡
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#d492aa]">
            <span>♡</span>
            <span>✦</span>
            <span>♡</span>
          </div>
        </header>
        {/* HERO */}
        <section className="relative mt-6 overflow-hidden rounded-[2.5rem] border border-[#f0dce4] bg-[#fffdfd] px-6 py-12 shadow-[0_12px_35px_rgba(181,123,145,0.08)] sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute left-8 top-8 text-[#e3b4c5]">
            ✿
          </div>
          <div className="pointer-events-none absolute right-9 top-8 text-[#dfadbf]">
            ♡
          </div>
          <div className="pointer-events-none absolute bottom-8 left-10 text-xs text-[#e8c4d1]">
            ✦
          </div>
          <div className="pointer-events-none absolute bottom-8 right-10 text-[#e2b6c7]">
            ୨୧
          </div>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[8px] uppercase tracking-[0.38em] text-[#b98a9c]">
              a little page about
            </p>
            <h1
              className="mt-3 text-7xl font-medium tracking-tight text-[#51454d] sm:text-8xl"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              JL
            </h1>
            <div className="mt-3 flex items-center justify-center gap-3 text-[#d28da5]">
              <span>♡</span>
              <span className="text-xs">✦</span>
              <span>♡</span>
            </div>
            <p
              className="mt-4 text-3xl text-[#6a5962]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              {profile.fullName}
            </p>
            <p className="mt-2 text-sm font-medium tracking-wide text-[#aa7188]">
              {profile.nickname} · {profile.alsoKnownAs}
            </p>
            {/* HERO PHOTO */}
            <div className="mx-auto mt-9 max-w-sm">
              <PhotoPlaceholder label="JL'S PHOTO" />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f9e9ef] px-5 py-2 text-sm font-medium text-[#a56c83]">
              <Heart size={13} fill="currentColor" />
              Yence
            </div>
            <p
              className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#776770]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              A tiny collection of little moments,
              favorite things, memories, and everything
              that makes JL special. ♡
            </p>
          </div>
        </section>
        {/* QUICK LOOK */}
        <section className="mt-12">
          <SectionHeading
            number="01"
            title="a quick look"
          />
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
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
        <section className="mt-14">
          <SectionHeading
            number="02"
            title="about JL"
          />
          <div className="mt-7 grid gap-7 md:grid-cols-2 md:items-center">
            <PhotoPlaceholder label="A LITTLE PHOTO OF JL" />
            <div className="relative rounded-[2rem] bg-[#fffdfd] p-7 shadow-[0_8px_28px_rgba(181,123,145,0.07)]">
              <div className="absolute -right-1 -top-2 text-[#e0adbf]">
                ✿
              </div>
              <p
                className="text-2xl leading-9 text-[#554850]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                This is a little space for everything
                that makes JL feel like JL — his
                personality, habits, memorable moments,
                and the tiny details that make people
                smile.
              </p>
              <p
                className="mt-5 text-lg leading-8 text-[#806e77]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Add your own little story about Yence
                here whenever you're ready.
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
        <section className="mt-14">
          <SectionHeading
            number="03"
            title="things he likes"
          />
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <SoftCard
              title="hobbies"
              value={profile.hobbies}
            />
            <SoftCard
              title="interests"
              value={profile.interests}
            />
            <SoftCard
              title="MBTI"
              value={profile.mbti}
            />
            <SoftCard
              title="favorites"
              value={profile.favorites}
            />
          </div>
        </section>
        {/* FACTS */}
        <section className="mt-14">
          <SectionHeading
            number="04"
            title="little things about JL"
          />
          <div className="mt-7 rounded-[2rem] bg-[#fffdfd] px-6 py-2 shadow-[0_8px_28px_rgba(181,123,145,0.06)]">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-[#f1e2e8] py-5 last:border-0"
              >
                <span className="mt-1 shrink-0 text-[#d18da5]">
                  ♡
                </span>
                <p
                  className="text-lg leading-8 text-[#61535b]"
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
          className="mt-14"
        >
          <SectionHeading
            number="05"
            title="JL photos"
          />
          <div className="mt-7 rounded-[2rem] bg-[#fffdfd] p-5 shadow-[0_8px_28px_rgba(181,123,145,0.06)] sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <p
                className="text-xl text-[#725d67]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                little snapshots ♡
              </p>
              <Sparkles
                size={17}
                strokeWidth={1.4}
                className="text-[#d18da5]"
              />
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
                    className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-[#f8e5ec] px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-[#98647a] transition hover:bg-[#f3d9e3]"
                  >
                    load more ♡
                    <ArrowUpRight size={14} />
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
                <div className="mt-8 flex justify-center gap-2">
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
                          ? "bg-[#c7839d] text-white"
                          : "bg-[#f9e9ef] text-[#976b7d]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowArchive(false);
                    setCurrentPage(1);
                  }}
                  className="mx-auto mt-6 block text-xs text-[#a37b8c] underline underline-offset-4"
                >
                  close archive
                </button>
              </>
            )}
          </div>
        </section>
        {/* FOOTER */}
        <footer className="py-16 text-center">
          <div className="text-xl tracking-[0.25em] text-[#d18ca5]">
            ♡ ✦ ୨୧ ✦ ♡
          </div>
          <p
            className="mt-5 text-2xl text-[#856174]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            made with love for Yence ♡
          </p>
          <p className="mt-2 text-xs text-[#b394a0]">
            JL · Yence · Jaeyel
          </p>
        </footer>
      </div>
    </main>
  );
}
/* ============================================================
   SECTION HEADING
============================================================ */
function SectionHeading({ number, title }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-[#ecd4de]" />
        <p className="font-mono text-[8px] tracking-[0.28em] text-[#b98a9c]">
          {number}
        </p>
        <span className="h-px w-10 bg-[#ecd4de]" />
      </div>
      <h2
        className="mt-2 text-4xl text-[#564850]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {title}
      </h2>
      <div className="mt-2 text-sm text-[#d18da5]">
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
    <div className="rounded-[1.5rem] bg-[#fffdfd] px-4 py-5 text-center shadow-[0_5px_18px_rgba(181,123,145,0.06)]">
      <p className="font-mono text-[7px] font-medium tracking-[0.22em] text-[#aa8996]">
        {label}
      </p>
      <p
        className="mt-3 text-xl text-[#604f58]"
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
    <span className="rounded-full bg-[#faeaf0] px-4 py-2 text-xs font-medium text-[#986a7c]">
      {children} ♡
    </span>
  );
}
/* ============================================================
   SOFT CARD
============================================================ */
function SoftCard({ title, value }) {
  return (
    <div className="rounded-[1.7rem] bg-[#fffdfd] p-6 shadow-[0_5px_20px_rgba(181,123,145,0.05)]">
      <div className="flex items-center gap-2">
        <Heart
          size={13}
          strokeWidth={1.5}
          className="text-[#d08ba3]"
        />
        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#a98a96]">
          {title}
        </p>
      </div>
      <p
        className="mt-4 text-xl leading-8 text-[#62535b]"
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
function PhotoPlaceholder({ label }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#fffdfd] p-3 shadow-[0_7px_25px_rgba(181,123,145,0.08)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#fffdfd] via-[#faeaf1] to-[#f2dce5]">
        <div className="absolute left-4 top-4 text-sm text-[#d79caf]">
          ✿
        </div>
        <div className="absolute right-4 top-4 text-sm text-[#ddaabc]">
          ♡
        </div>
        <div className="flex h-full flex-col items-center justify-center px-5 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-[#cc829d] shadow-sm">
            <Camera
              size={21}
              strokeWidth={1.3}
            />
          </div>
          <p className="mt-5 font-mono text-[8px] font-medium uppercase tracking-[0.22em] text-[#a77d8c]">
            {label}
          </p>
          <p
            className="mt-2 text-lg text-[#a66d84]"
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
function PhotoGrid({ photos, startIndex = 0 }) {
  const validPhotos = photos.filter(
    (photo) => photo && photo.src
  );
  if (!validPhotos.length) {
    return <EmptyPhotoState />;
  }
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
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
function PhotoCard({ photo, index }) {
  const card = (
    <div className="group overflow-hidden rounded-[1.4rem] bg-white p-2 shadow-[0_4px_15px_rgba(181,123,145,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-square overflow-hidden rounded-[1rem]">
        <img
          src={photo.src}
          alt={
            photo.alt ||
            `JL photo ${index + 1}`
          }
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
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
        {card}
      </a>
    );
  }
  return card;
}
/* ============================================================
   EMPTY PHOTO STATE
============================================================ */
function EmptyPhotoState() {
  return (
    <div className="rounded-[1.7rem] bg-[#fff8fb] px-6 py-12 text-center">
      <Camera
        size={24}
        strokeWidth={1.2}
        className="mx-auto text-[#cf88a1]"
      />
      <p
        className="mt-4 text-xl text-[#906477]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        the photo collection is waiting ♡
      </p>
      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#aa8c99]">
        Add JL photos to the archive whenever you're ready.
      </p>
    </div>
  );
}
