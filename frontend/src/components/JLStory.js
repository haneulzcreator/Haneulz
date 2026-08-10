import React, { useMemo, useState } from "react";
import { ArrowUpRight, Camera, Heart, Sparkles } from "lucide-react";
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
  { src: "", alt: "Han photo 01", postUrl: "" },
  { src: "", alt: "Han photo 02", postUrl: "" },
  { src: "", alt: "Han photo 03", postUrl: "" },
  { src: "", alt: "Han photo 04", postUrl: "" },
  { src: "", alt: "Han photo 05", postUrl: "" },
  { src: "", alt: "Han photo 06", postUrl: "" },
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
    requestAnimationFrame(() => {
      document
        .getElementById("han-photo-archive")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };
  return (
    <main className="min-h-screen bg-[#f4f9fc] px-4 py-6 text-[#3f4d56] sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* =================================================
            HEADER
        ================================================= */}
        <header className="flex items-center justify-between py-4">
          <div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#6f91a7]">
              HANEULZ CORNER
            </p>
            <p className="mt-1 text-xs text-[#91a9b8]">
              a little collection for Han ♡
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#82a9c2]">
            <span>♡</span>
            <span className="text-lg">✦</span>
            <span>♡</span>
          </div>
        </header>
        {/* =================================================
            HERO
        ================================================= */}
        <section className="relative mt-5 overflow-hidden rounded-[2rem] border border-[#cbdfe9] bg-[#fbfdfe] p-5 shadow-[5px_6px_0_rgba(142,177,195,0.17)] sm:p-8">
          {/* little tape */}
          <div className="absolute left-1/2 top-0 h-7 w-24 -translate-x-1/2 -translate-y-1 rotate-[2deg] bg-[#dcecf3]/90" />
          <div className="relative rounded-[1.5rem] border border-[#dbe9ef] bg-[#ffffff] px-6 py-12 text-center sm:px-10">
            {/* scrapbook decorations */}
            <div className="absolute left-4 top-5 rotate-[-8deg] text-xl text-[#82a9c0]">
              ✿
            </div>
            <div className="absolute right-5 top-6 rotate-[8deg] text-lg text-[#9ab9c9]">
              ♡
            </div>
            <div className="absolute bottom-5 left-7 text-sm text-[#b5cfdb]">
              ✦
            </div>
            <div className="absolute bottom-6 right-7 text-sm text-[#9dbdcd]">
              ୨୧
            </div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.35em] text-[#7898ab]">
              a little page about
            </p>
            <h1 className="mt-3 font-serif text-7xl font-medium tracking-tight text-[#405866] sm:text-8xl">
              Han
            </h1>
            <div className="mt-2 flex items-center justify-center gap-3 text-[#7fa7bd]">
              <span>♡</span>
              <span className="text-xs">✦</span>
              <span>♡</span>
            </div>
            <p className="mt-4 font-serif text-3xl text-[#536b78]">
              {profile.fullName}
            </p>
            <p className="mt-2 text-lg font-medium text-[#7195aa]">
              {profile.nickname}
            </p>
            {/* HERO PHOTO */}
            <div className="mx-auto mt-8 max-w-md">
              <PhotoPlaceholder label="HAN'S PHOTO" />
            </div>
            <div className="mt-6 inline-block rotate-[2deg] rounded-xl bg-[#e4f1f6] px-5 py-2 text-sm font-medium text-[#64899d] shadow-sm">
              Han ♡
            </div>
            <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-8 text-[#647782]">
              A tiny corner filled with little moments,
              favorite things, memories, and everything
              that makes Han special.
            </p>
          </div>
        </section>
        {/* =================================================
            QUICK LOOK
        ================================================= */}
        <section className="mt-10">
          <SectionHeading
            eyebrow="01 · little details"
            title="a quick look"
          />
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
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
        </section>
        {/* =================================================
            ABOUT HAN
        ================================================= */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="02 · the little story"
            title="about Han"
          />
          <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <PhotoPlaceholder label="A LITTLE PHOTO OF HAN" />
            <div className="relative rounded-[1.75rem] border border-[#d5e5ec] bg-[#fbfdfe] p-7 shadow-[4px_5px_0_rgba(142,177,195,0.12)]">
              <div className="absolute -right-2 -top-3 rotate-[-5deg] rounded-md bg-[#deedf3] px-3 py-1 text-xs text-[#6f91a4] shadow-sm">
                little note ♡
              </div>
              <p className="font-serif text-2xl leading-9 text-[#465b66]">
                This is a little space for everything
                that makes Han feel like Han — his
                personality, habits, memorable moments,
                and the tiny details that make people
                smile.
              </p>
              <p className="mt-5 font-serif text-lg leading-8 text-[#71838d]">
                Add your own little story about Han
                here whenever you're ready.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <CuteTag>Han</CuteTag>
                <CuteTag>hani</CuteTag>
                <CuteTag>HANEULZ</CuteTag>
                <CuteTag>♡</CuteTag>
              </div>
            </div>
          </div>
        </section>
        {/* =================================================
            HOBBIES & INTERESTS
        ================================================= */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="03 · things he likes"
            title="hobbies & interests"
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
        {/* =================================================
            FUN FACTS
        ================================================= */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="04 · tiny memories"
            title="little things about Han"
          />
          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#d5e5ec] bg-[#fbfdfe] shadow-[4px_5px_0_rgba(142,177,195,0.1)]">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-[#e3eef2] px-6 py-5 last:border-0"
              >
                <span className="mt-1 text-[#79a1b7]">
                  ♡
                </span>
                <p className="font-serif text-lg leading-8 text-[#526772]">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* =================================================
            PHOTO ARCHIVE
        ================================================= */}
        <section
          id="han-photo-archive"
          className="mt-12"
        >
          <SectionHeading
            eyebrow="05 · photo diary"
            title="Han photos"
          />
          <div className="mt-6 rounded-[1.75rem] border border-[#d5e5ec] bg-[#fbfdfe] p-5 shadow-[4px_5px_0_rgba(142,177,195,0.1)] sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-serif text-lg text-[#617681]">
                little snapshots ♡
              </p>
              <Sparkles
                size={18}
                strokeWidth={1.4}
                className="text-[#78a1b8]"
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
                    className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-[#deedf3] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#607f91] transition hover:-translate-y-0.5 hover:bg-[#d3e8f0]"
                  >
                    load more ♡
                    <ArrowUpRight
                      size={14}
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
                      className={`h-9 min-w-9 rounded-full px-3 text-xs font-semibold ${
                        currentPage === page
                          ? "bg-[#79a0b5] text-white"
                          : "bg-[#e7f2f6] text-[#668697]"
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
                  className="mx-auto mt-6 block text-xs text-[#7897a6] underline underline-offset-4"
                >
                  close archive
                </button>
              </>
            )}
          </div>
        </section>
        {/* =================================================
            FOOTER
        ================================================= */}
        <footer className="py-16 text-center">
          <div className="text-xl text-[#7ea5b9]">
            ♡ ✦ ୨୧ ✦ ♡
          </div>
          <p className="mt-4 font-serif text-2xl text-[#617f8f]">
            made with love for Han ♡
          </p>
          <p className="mt-2 text-xs text-[#91a9b5]">
            Han · hani
          </p>
        </footer>
      </div>
    </main>
  );
}
/* ============================================================
   SECTION HEADING
============================================================ */
function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center">
      <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-[#7798aa]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-4xl font-medium text-[#485d68]">
        {title}
      </h2>
      <div className="mx-auto mt-3 flex w-fit items-center gap-2 text-[#7fa7bb]">
        <span>♡</span>
        <span className="text-[9px]">✦</span>
        <span>♡</span>
      </div>
    </div>
  );
}
/* ============================================================
   INFO CARD
============================================================ */
function InfoCard({ label, value }) {
  return (
    <div className="rounded-[1.4rem] border border-[#d6e5eb] bg-[#fbfdfe] p-5 text-center shadow-[2px_3px_0_rgba(142,177,195,0.08)]">
      <p className="font-mono text-[7px] font-semibold tracking-[0.22em] text-[#819ca9]">
        {label}
      </p>
      <p className="mt-3 font-serif text-xl text-[#536872]">
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
    <span className="rounded-full border border-[#c9dfe8] bg-[#eaf4f8] px-4 py-2 text-xs font-medium text-[#668b9d]">
      {children}
    </span>
  );
}
/* ============================================================
   SOFT CARD
============================================================ */
function SoftCard({ title, value }) {
  return (
    <div className="rounded-[1.5rem] border border-[#d6e5eb] bg-[#fbfdfe] p-6 shadow-[2px_3px_0_rgba(142,177,195,0.08)]">
      <div className="flex items-center gap-2">
        <Heart
          size={14}
          strokeWidth={1.5}
          className="text-[#7ea5b9]"
        />
        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#819ca9]">
          {title}
        </p>
      </div>
      <p className="mt-4 font-serif text-xl leading-8 text-[#566b75]">
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
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d3e4eb] bg-[#fbfdfe] p-3 shadow-[4px_5px_0_rgba(142,177,195,0.12)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#fbfdfe] via-[#eaf4f8] to-[#dcecf2]">
        <div className="absolute left-3 top-3 rounded-md bg-white/80 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#7897a6] shadow-sm">
          HAN
        </div>
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-[#7da5b9] shadow-sm">
            <Camera
              size={21}
              strokeWidth={1.3}
            />
          </div>
          <p className="mt-5 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#7895a3]">
            {label}
          </p>
          <p className="mt-2 font-serif text-lg text-[#7195a7]">
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
  if (!validPhotos.length) {
    return <EmptyPhotoState />;
  }
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
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
  const card = (
    <div className="group overflow-hidden rounded-[1.2rem] border border-[#d4e4ea] bg-white p-2 shadow-[2px_3px_0_rgba(142,177,195,0.1)] transition duration-300 hover:-translate-y-1 hover:rotate-[-0.5deg] hover:shadow-md">
      <div className="aspect-square overflow-hidden rounded-[0.9rem]">
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
    <div className="rounded-[1.5rem] border border-dashed border-[#c7dce5] bg-[#f6fbfd] px-6 py-12 text-center">
      <Camera
        size={25}
        strokeWidth={1.2}
        className="mx-auto text-[#7fa5b8]"
      />
      <p className="mt-4 font-serif text-xl text-[#688896]">
        the photo collection is waiting ♡
      </p>
      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#8da4ae]">
        Add Han photos to the archive whenever
        you're ready.
      </p>
    </div>
  );
}
