import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Heart,
  Sparkles,
  Cat,
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
  { src: "", alt: "Han photo 01", postUrl: "" },
  { src: "", alt: "Han photo 02", postUrl: "" },
  { src: "", alt: "Han photo 03", postUrl: "" },
  { src: "", alt: "Han photo 04", postUrl: "" },
  { src: "", alt: "Han photo 05", postUrl: "" },
  { src: "", alt: "Han photo 06", postUrl: "" },
];
const movieRecommendations = [
  { title: "Add movie recommendation here" },
  { title: "Add another movie here" },
  { title: "Add another movie here" },
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
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-6 text-[#454545] sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* =================================================
            HEADER
        ================================================= */}
        <header className="flex items-center justify-between py-4">
          <div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#555]">
              HANEULZ CORNER
            </p>
            <p className="mt-1 text-xs text-[#999]">
              a little collection for Han ♡
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#555]">
            <span>♡</span>
            <span className="text-lg">✦</span>
            <span>♡</span>
          </div>
        </header>
        {/* =================================================
            HERO
        ================================================= */}
        <section className="relative mt-5 overflow-hidden rounded-[2rem] border border-[#d9d9d9] bg-[#fff] p-5 shadow-[5px_6px_0_rgba(0,0,0,0.07)] sm:p-8">
          {/* subtle decorations */}
          <div className="absolute left-5 top-5 rotate-[-8deg] text-lg text-[#777]">
            ୨୧
          </div>
          <div className="absolute right-6 top-6 rotate-[7deg] text-lg text-[#555]">
            ♡
          </div>
          <div className="absolute bottom-7 left-7 text-sm text-[#aaa]">
            ✦
          </div>
          <div className="absolute bottom-7 right-7 rotate-[8deg] text-sm text-[#777]">
            ♡
          </div>
          <div className="relative rounded-[1.5rem] border border-[#e3e3e3] bg-[#fafafa] px-6 py-12 text-center sm:px-10">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.35em] text-[#777]">
              a little page about
            </p>
            <h1 className="mt-3 font-serif text-7xl font-medium tracking-tight text-[#303030] sm:text-8xl">
              Han
            </h1>
            <div className="mt-2 flex items-center justify-center gap-3 text-[#555]">
              <span>♡</span>
              <span className="text-xs">✦</span>
              <span>♡</span>
            </div>
            <p className="mt-4 font-serif text-3xl text-[#555]">
              {profile.fullName}
            </p>
            <p className="mt-2 text-lg font-medium text-[#777]">
              {profile.nickname}
            </p>
            {/* tiny black-cat detail */}
            <div className="mt-5 flex items-center justify-center gap-2 text-[#444]">
              <Cat
                size={15}
                strokeWidth={1.4}
              />
              <span className="text-xs">
                little black cat ♡
              </span>
            </div>
            <div className="mx-auto mt-8 max-w-md">
              <PhotoPlaceholder label="HAN'S PHOTO" />
            </div>
            <div className="mt-6 inline-block rotate-[-2deg] rounded-xl bg-[#eeeeee] px-5 py-2 text-sm font-medium text-[#4c4c4c] shadow-sm">
              Han ♡
            </div>
            <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-8 text-[#666]">
              A tiny corner filled with little moments,
              favorite things, memories, and everything
              that makes Han special.
            </p>
            <div className="mt-6 text-sm text-[#777]">
              ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚
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
            <div className="relative rounded-[1.75rem] border border-[#dedede] bg-[#fff] p-7 shadow-[4px_5px_0_rgba(0,0,0,0.07)]">
              <div className="absolute -right-2 -top-3 rotate-6 rounded-md bg-[#eeeeee] px-3 py-1 text-xs text-[#555] shadow-sm">
                little note ♡
              </div>
              <p className="font-serif text-2xl leading-9 text-[#3f3f3f]">
                This is a little space for everything
                that makes Han feel like Han — his
                personality, little habits, memorable
                moments, and the tiny things that make
                people smile.
              </p>
              <p className="mt-5 font-serif text-lg leading-8 text-[#707070]">
                Add your own little story about Han
                here whenever you're ready.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <CuteTag>Han</CuteTag>
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
            LITTLE THINGS
        ================================================= */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="04 · tiny memories"
            title="little things about Han"
          />
          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#dedede] bg-[#fff] shadow-[4px_5px_0_rgba(0,0,0,0.06)]">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-[#eeeeee] px-6 py-5 last:border-0"
              >
                <span className="mt-1 text-[#555]">
                  ♡
                </span>
                <p className="font-serif text-lg leading-8 text-[#555]">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* =================================================
            MOVIE RECOMMENDATIONS
        ================================================= */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="05 · movie diary"
            title="Han's movie recommendations"
          />
          <div className="mt-6 rounded-[1.75rem] border border-[#dedede] bg-[#fff] p-5 shadow-[4px_5px_0_rgba(0,0,0,0.06)] sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-serif text-lg text-[#666]">
                movies Han recommends ♡
              </p>
              <Sparkles
                size={18}
                strokeWidth={1.4}
                className="text-[#666]"
              />
            </div>
            {movieRecommendations.length === 0 ? (
              <div className="rounded-[1.5rem] border border-dashed border-[#d5d5d5] bg-[#fafafa] px-6 py-12 text-center">
                <p className="font-serif text-xl text-[#666]">
                  Han's movie list is waiting ♡
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {movieRecommendations.map(
                  (movie, index) => (
                    <div
                      key={`${movie.title}-${index}`}
                      className="group flex items-center gap-4 rounded-[1.5rem] border border-[#e2e2e2] bg-[#fafafa] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ededed] text-[#555]">
                        <span className="text-base">
                          ♡
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[7px] font-semibold uppercase tracking-[0.22em] text-[#999]">
                          recommendation{" "}
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </p>
                        <p className="mt-1 font-serif text-xl text-[#505050]">
                          {movie.title}
                        </p>
                      </div>
                      <span className="ml-auto text-[#777] opacity-0 transition group-hover:opacity-100">
                        ♡
                      </span>
                    </div>
                  )
                )}
              </div>
            )}
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
            eyebrow="06 · photo diary"
            title="Han photos"
          />
          <div className="mt-6 rounded-[1.75rem] border border-[#dedede] bg-[#fff] p-5 shadow-[4px_5px_0_rgba(0,0,0,0.06)] sm:p-7">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-serif text-lg text-[#666]">
                little snapshots ♡
              </p>
              <Camera
                size={18}
                strokeWidth={1.4}
                className="text-[#666]"
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
                {photos.length >
                  PHOTOS_PER_PAGE && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowArchive(true);
                      setCurrentPage(1);
                    }}
                    className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-[#e9e9e9] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#555] transition hover:-translate-y-0.5 hover:bg-[#dedede]"
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
                          ? "bg-[#555] text-white"
                          : "bg-[#eeeeee] text-[#666]"
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
                  className="mx-auto mt-6 block text-xs text-[#777] underline underline-offset-4"
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
          <div className="flex items-center justify-center gap-3 text-xl text-[#555]">
            <span>♡</span>
            <span>✦</span>
            <span>୨୧</span>
            <span>✦</span>
            <span>♡</span>
          </div>
          <p className="mt-4 font-serif text-2xl text-[#555]">
            made with love for Han ♡
          </p>
          <p className="mt-2 text-xs text-[#999]">
            Han · HANEULZ
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#aaa]">
            one little page in the HANEULZ corner
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
      <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-[#888]">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-serif text-4xl font-medium text-[#444]">
        {title}
      </h2>
      <div className="mx-auto mt-3 flex w-fit items-center gap-2 text-[#666]">
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
    <div className="rounded-[1.4rem] border border-[#dedede] bg-[#fff] p-5 text-center shadow-[2px_3px_0_rgba(0,0,0,0.05)]">
      <p className="font-mono text-[7px] font-semibold tracking-[0.22em] text-[#999]">
        {label}
      </p>
      <p className="mt-3 font-serif text-xl text-[#505050]">
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
    <span className="rounded-full border border-[#d8d8d8] bg-[#f2f2f2] px-4 py-2 text-xs font-medium text-[#555]">
      {children}
    </span>
  );
}
/* ============================================================
   SOFT CARD
============================================================ */
function SoftCard({ title, value }) {
  return (
    <div className="rounded-[1.5rem] border border-[#dedede] bg-[#fff] p-6 shadow-[2px_3px_0_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-2">
        <Heart
          size={14}
          strokeWidth={1.5}
          className="text-[#555]"
        />
        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#999]">
          {title}
        </p>
      </div>
      <p className="mt-4 font-serif text-xl leading-8 text-[#555]">
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
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#dedede] bg-[#fff] p-3 shadow-[4px_5px_0_rgba(0,0,0,0.07)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#fafafa] via-[#ededed] to-[#dddddd]">
        {/* subtle cat accent */}
        <div className="absolute left-3 top-3 rounded-md bg-white/80 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#555] shadow-sm">
          Han ♡
        </div>
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-[#444] shadow-sm">
            <Camera
              size={21}
              strokeWidth={1.3}
            />
          </div>
          <p className="mt-5 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#777]">
            {label}
          </p>
          <p className="mt-2 font-serif text-lg text-[#666]">
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
    <div className="group overflow-hidden rounded-[1.2rem] border border-[#dedede] bg-white p-2 shadow-[2px_3px_0_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:rotate-[0.5deg] hover:shadow-md">
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
    <div className="rounded-[1.5rem] border border-dashed border-[#d2d2d2] bg-[#fafafa] px-6 py-12 text-center">
      <Camera
        size={25}
        strokeWidth={1.2}
        className="mx-auto text-[#666]"
      />
      <p className="mt-4 font-serif text-xl text-[#666]">
        the photo collection is waiting ♡
      </p>
      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#999]">
        Add Han photos to the archive whenever
        you're ready.
      </p>
    </div>
  );
}
