import React, { useMemo, useState } from "react";
import { ArrowUpRight, Camera, Heart, Sparkles, Cat } from "lucide-react";
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
    <main className="min-h-screen bg-[#f4f9fd] px-4 py-6 text-[#405363] sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* =================================================
            HEADER
        ================================================= */}
        <header className="flex items-center justify-between py-4">
          <div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#7598b1]">
              HANEULZ CORNER
            </p>
            <p className="mt-1 text-xs text-[#9bb2c3]">
              a little collection for Han ♡
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#8db0c7]">
            <span>♡</span>
            <span className="text-lg">🐈</span>
            <span>✦</span>
          </div>
        </header>
        {/* =================================================
            HERO
        ================================================= */}
        <section className="relative mt-5 overflow-hidden rounded-[2rem] border border-[#d5e5ef] bg-[#fbfdff] p-5 shadow-[5px_6px_0_rgba(133,170,194,0.13)] sm:p-8">
          {/* cute little cat decoration */}
          <div className="absolute left-5 top-5 rotate-[-6deg] rounded-xl bg-[#e8f3f9] px-3 py-2 text-lg shadow-sm">
            🐈
          </div>
          <div className="absolute right-6 top-6 rotate-[7deg] text-lg text-[#91b1c6]">
            ♡
          </div>
          <div className="absolute bottom-7 left-8 text-sm text-[#abc6d6]">
            ✦
          </div>
          <div className="absolute bottom-7 right-8 text-lg text-[#9dbbcd]">
            🐾
          </div>
          <div className="relative rounded-[1.5rem] border border-[#e0edf4] bg-white px-6 py-12 text-center sm:px-10">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.35em] text-[#7898ae]">
              a little page about
            </p>
            <h1 className="mt-3 font-serif text-7xl font-medium tracking-tight text-[#3f5362] sm:text-8xl">
              Han
            </h1>
            <div className="mt-2 flex items-center justify-center gap-3 text-[#87abc2]">
              <span>♡</span>
              <span className="text-xs">🐾</span>
              <span>♡</span>
            </div>
            <p className="mt-4 font-serif text-3xl text-[#5c7282]">
              {profile.fullName}
            </p>
            <p className="mt-2 text-lg font-medium text-[#7899ae]">
              {profile.nickname} ♡
            </p>
            {/* HERO PHOTO */}
            <div className="mx-auto mt-8 max-w-md">
              <PhotoPlaceholder label="HAN'S PHOTO" />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#e8f3f9] px-5 py-2 text-sm font-medium text-[#64899f] shadow-sm">
              <span>🐈</span>
              Han ♡
            </div>
            <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-8 text-[#657a89]">
              A tiny corner filled with little moments,
              favorite things, memories, and all the
              little details that make Han special.
            </p>
            <div className="mt-5 text-lg text-[#91b3c8]">
              ˚₊‧꒰ა 🐾 ໒꒱ ‧₊˚
            </div>
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
            <InfoCard
              label="FAVORITES"
              value={profile.favorites}
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
            <div className="relative rounded-[1.75rem] border border-[#dbe8f0] bg-[#fbfdff] p-7 shadow-[4px_5px_0_rgba(133,170,194,0.1)]">
              <div className="absolute -right-2 -top-3 rotate-6 rounded-md bg-[#e6f2f8] px-3 py-1 text-xs text-[#6d93a9] shadow-sm">
                little note 🐾
              </div>
              <p className="font-serif text-2xl leading-9 text-[#455a69]">
                This is a little space for everything
                that makes Han feel like Han — his
                personality, habits, memorable moments,
                and the tiny details that make people
                smile.
              </p>
              <p className="mt-5 font-serif text-lg leading-8 text-[#718592]">
                Add your own little story about Han
                here whenever you're ready.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <CuteTag>Han</CuteTag>
                <CuteTag>hani</CuteTag>
                <CuteTag>🐈</CuteTag>
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
            LITTLE THINGS
        ================================================= */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="04 · tiny memories"
            title="little things about Han"
          />
          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#dbe8f0] bg-[#fbfdff] shadow-[4px_5px_0_rgba(133,170,194,0.08)]">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-[#e5eef3] px-6 py-5 last:border-0"
              >
                <span className="mt-1 text-[#88acc1]">
                  🐾
                </span>
                <p className="font-serif text-lg leading-8 text-[#536875]">
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
          <div className="mt-6 rounded-[1.75rem] border border-[#dbe8f0] bg-[#fbfdff] p-5 shadow-[4px_5px_0_rgba(133,170,194,0.1)] sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-serif text-lg text-[#607684]">
                little snapshots ♡
              </p>
              <span className="text-lg">
                🐈
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
                    className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-[#e5f1f7] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#63889e] transition hover:-translate-y-0.5 hover:bg-[#dcecf4]"
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
                      className={`h-9 min-w-9 rounded-full px-3 text-xs font-semibold ${
                        currentPage === page
                          ? "bg-[#78a0b7] text-white"
                          : "bg-[#eaf4f8] text-[#6d91a5]"
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
                  className="mx-auto mt-6 block text-xs text-[#819eae] underline underline-offset-4"
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
          <div className="text-xl text-[#86aabd]">
            ♡ 🐾 ✦ 🐈 ✦ 🐾 ♡
          </div>
          <p className="mt-4 font-serif text-2xl text-[#607f91]">
            made with love for Han ♡
          </p>
          <p className="mt-2 text-xs text-[#91a7b4]">
            Han · HANEULZ
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
      <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-[#7899ad]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-4xl font-medium text-[#455966]">
        {title}
      </h2>
      <div className="mx-auto mt-3 flex w-fit items-center gap-2 text-[#88abc0]">
        <span>♡</span>
        <span className="text-[9px]">
          🐾
        </span>
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
    <div className="rounded-[1.4rem] border border-[#dbe8ef] bg-[#fbfdff] p-5 text-center shadow-[2px_3px_0_rgba(133,170,194,0.07)]">
      <p className="font-mono text-[7px] font-semibold tracking-[0.22em] text-[#829eae]">
        {label}
      </p>
      <p className="mt-3 font-serif text-xl text-[#526673]">
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
    <span className="rounded-full border border-[#d2e4ed] bg-[#eaf4f8] px-4 py-2 text-xs font-medium text-[#688c9f]">
      {children}
    </span>
  );
}
/* ============================================================
   SOFT CARD
============================================================ */
function SoftCard({ title, value }) {
  return (
    <div className="rounded-[1.5rem] border border-[#dbe8ef] bg-[#fbfdff] p-6 shadow-[2px_3px_0_rgba(133,170,194,0.07)]">
      <div className="flex items-center gap-2">
        <Heart
          size={14}
          strokeWidth={1.5}
          className="text-[#83aabd]"
        />
        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#829eae]">
          {title}
        </p>
      </div>
      <p className="mt-4 font-serif text-xl leading-8 text-[#586c78]">
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
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#d8e7ef] bg-[#fbfdff] p-3 shadow-[4px_5px_0_rgba(133,170,194,0.1)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#fbfdff] via-[#eaf4f8] to-[#dcecf4]">
        <div className="absolute left-3 top-3 rounded-md bg-white/80 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#7899aa] shadow-sm">
          🐈 HAN
        </div>
        <div className="absolute right-4 top-4 text-sm text-[#8dafc2]">
          ♡
        </div>
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-[#78a2b8] shadow-sm">
            <Camera
              size={21}
              strokeWidth={1.3}
            />
          </div>
          <p className="mt-5 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#7898aa]">
            {label}
          </p>
          <p className="mt-2 font-serif text-lg text-[#7397aa]">
            photo goes here ♡
          </p>
          <span className="mt-3 text-base">
            🐾
          </span>
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
    <div className="group overflow-hidden rounded-[1.2rem] border border-[#d9e7ee] bg-white p-2 shadow-[2px_3px_0_rgba(133,170,194,0.08)] transition duration-300 hover:-translate-y-1 hover:rotate-[0.5deg] hover:shadow-md">
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
    <div className="rounded-[1.5rem] border border-dashed border-[#c9dce6] bg-[#f5fafc] px-6 py-12 text-center">
      <div className="text-2xl">
        🐈
      </div>
      <Camera
        size={25}
        strokeWidth={1.2}
        className="mx-auto mt-2 text-[#7fa5b8]"
      />
      <p className="mt-4 font-serif text-xl text-[#668697]">
        the photo collection is waiting ♡
      </p>
      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#8da4b1]">
        Add Han photos to the archive whenever you're ready.
      </p>
    </div>
  );
}
