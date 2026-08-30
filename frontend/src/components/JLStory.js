import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";
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
    <main className="min-h-screen bg-[#fff4f8] px-4 py-7 text-[#493c43] sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* HEADER */}
        <header className="flex items-center justify-between px-2 py-3">
          <div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9f526f]">
              HANEULZ CORNER
            </p>
            <p className="mt-1 text-xs text-[#b87991]">
              a little collection for JL ♡
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#c65f82]">
            <span>♡</span>
            <span className="text-sm">✦</span>
            <span>♡</span>
          </div>
        </header>
        {/* HERO */}
        <section className="relative mt-5 overflow-hidden rounded-[2rem] border border-[#e7b9ca] bg-[#fffafd] shadow-[0_12px_35px_rgba(191,91,125,0.10)]">
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#f1bfd0] via-[#cf7393] to-[#f1bfd0]" />
          <div className="relative px-6 py-14 text-center sm:px-12">
            <div className="absolute left-6 top-7 text-lg text-[#d27796]">
              ✿
            </div>
            <div className="absolute right-7 top-8 text-lg text-[#d98ba5]">
              ♡
            </div>
            <div className="absolute bottom-7 left-8 text-sm text-[#e1a8ba]">
              ✦
            </div>
            <div className="absolute bottom-8 right-8 text-sm text-[#d98ba5]">
              ୨୧
            </div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.35em] text-[#a45b76]">
              a little page about
            </p>
            <h1
              className="mt-3 text-7xl font-medium tracking-tight text-[#4b343e] sm:text-8xl"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              JL
            </h1>
            <div className="mt-2 flex items-center justify-center gap-3 text-[#c65f82]">
              <span>♡</span>
              <span className="text-[9px]">✦</span>
              <span>♡</span>
            </div>
            <p
              className="mt-4 text-3xl text-[#604852]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              {profile.fullName}
            </p>
            <p className="mt-2 text-lg font-medium text-[#a85270]">
              {profile.nickname} · {profile.alsoKnownAs}
            </p>
            <div className="mx-auto mt-9 max-w-md">
              <PhotoPlaceholder label="JL'S PHOTO" />
            </div>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#e5b6c8] bg-[#fce5ee] px-5 py-2 text-sm font-medium text-[#974b69]">
              <Heart size={13} strokeWidth={1.5} />
              Yence
            </div>
            <p
              className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#705c65]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              A tiny corner filled with little moments,
              favorite things, memories, and everything
              that makes JL special.
            </p>
            <div className="mt-7 text-sm tracking-[0.3em] text-[#c76b8a]">
              ♡ · ✦ · ♡
            </div>
          </div>
        </section>
        {/* QUICK LOOK */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="01 · little details"
            title="a quick look"
          />
          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <InfoCard label="KNOWN AS" value={profile.knownAs} />
            <InfoCard label="NICKNAME" value={profile.nickname} />
            <InfoCard label="ALSO KNOWN AS" value={profile.alsoKnownAs} />
            <InfoCard label="BIRTHDAY" value={profile.birthday} />
            <InfoCard label="NATIONALITY" value={profile.nationality} />
            <InfoCard label="MBTI" value={profile.mbti} />
          </div>
        </section>
        {/* ABOUT */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="02 · the little story"
            title="about JL"
          />
          <div className="mt-7 grid gap-7 md:grid-cols-[0.9fr_1.1fr]">
            <PhotoPlaceholder label="A LITTLE PHOTO OF JL" />
            <div className="relative rounded-[1.8rem] border border-[#e5c1cf] bg-[#fffafd] p-7 shadow-[0_8px_25px_rgba(190,88,122,0.07)]">
              <div className="absolute -right-2 -top-3 rounded-full bg-[#f6d8e3] px-3 py-1 text-xs font-medium text-[#9c5770] shadow-sm">
                little note ♡
              </div>
              <p
                className="text-2xl leading-9 text-[#514149]"
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
                className="mt-5 text-lg leading-8 text-[#79646d]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Add your own little story about Yence
                here whenever you're ready.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <CuteTag>JL</CuteTag>
                <CuteTag>Yence</CuteTag>
                <CuteTag>Jaeyel</CuteTag>
                <CuteTag>♡</CuteTag>
              </div>
            </div>
          </div>
        </section>
        {/* HOBBIES */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="03 · things he likes"
            title="hobbies & interests"
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <SoftCard title="hobbies" value={profile.hobbies} />
            <SoftCard title="interests" value={profile.interests} />
            <SoftCard title="MBTI" value={profile.mbti} />
            <SoftCard title="favorites" value={profile.favorites} />
          </div>
        </section>
        {/* FACTS */}
        <section className="mt-14">
          <SectionHeading
            eyebrow="04 · tiny memories"
            title="little things about JL"
          />
          <div className="mt-7 rounded-[1.8rem] border border-[#e5c1cf] bg-[#fffafd] p-2 shadow-[0_8px_25px_rgba(190,88,122,0.06)]">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-[1.3rem] px-5 py-5 transition hover:bg-[#fff2f6]"
              >
                <span className="mt-1 shrink-0 text-[#c65f82]">
                  ♡
                </span>
                <p
                  className="text-lg leading-8 text-[#5c4c54]"
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
        <section id="jl-photo-archive" className="mt-14">
          <SectionHeading
            eyebrow="05 · photo diary"
            title="JL photos"
          />
          <div className="mt-7 rounded-[1.8rem] border border-[#e5c1cf] bg-[#fffafd] p-5 shadow-[0_8px_25px_rgba(190,88,122,0.06)] sm:p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p
                  className="text-xl text-[#644d58]"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  little snapshots ♡
                </p>
                <p className="mt-1 text-xs text-[#ae7a8c]">
                  moments worth keeping
                </p>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fce5ee] text-[#c65f82]">
                <Sparkles size={16} strokeWidth={1.4} />
              </div>
            </div>
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
                    className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-[#c96b89] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#b95d7b]"
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
                  startIndex={(currentPage - 1) * PHOTOS_PER_PAGE}
                />
                <div className="mt-8 flex justify-center gap-2">
                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => goToPage(page)}
                      className={`h-9 min-w-9 rounded-full px-3 text-xs font-semibold transition ${
                        currentPage === page
                          ? "bg-[#c96b89] text-white"
                          : "bg-[#f8e1ea] text-[#92556d] hover:bg-[#f3d3df]"
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
                  className="mx-auto mt-6 block text-xs text-[#9d667c] underline underline-offset-4"
                >
                  close archive
                </button>
              </>
            )}
          </div>
        </section>
        {/* FOOTER */}
        <footer className="py-16 text-center">
          <div className="flex items-center justify-center gap-3 text-[#c65f82]">
            <span>♡</span>
            <Star size={13} fill="currentColor" strokeWidth={1} />
            <span>♡</span>
          </div>
          <p
            className="mt-4 text-2xl text-[#805268]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            made with love for Yence ♡
          </p>
          <p className="mt-2 text-xs text-[#ad7d8e]">
            JL · Yence · Jaeyel
          </p>
          <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-[#c79aaa]">
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
      <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-[#a75c76]">
        {eyebrow}
      </p>
      <h2
        className="mt-2 text-4xl font-medium text-[#513e47]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {title}
      </h2>
      <div className="mx-auto mt-3 flex w-fit items-center gap-2 text-[#c96b89]">
        <span>♡</span>
        <span className="text-[8px]">✦</span>
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
    <div className="rounded-[1.5rem] border border-[#e5c1cf] bg-[#fffafd] p-5 text-center shadow-[0_5px_18px_rgba(190,88,122,0.05)] transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="font-mono text-[7px] font-semibold tracking-[0.22em] text-[#a97889]">
        {label}
      </p>
      <p
        className="mt-3 text-xl text-[#5b4650]"
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
    <span className="rounded-full border border-[#e3b9c9] bg-[#fce6ee] px-4 py-2 text-xs font-medium text-[#97536d]">
      {children}
    </span>
  );
}
/* ============================================================
   SOFT CARD
============================================================ */
function SoftCard({ title, value }) {
  return (
    <div className="rounded-[1.6rem] border border-[#e5c1cf] bg-[#fffafd] p-6 shadow-[0_5px_18px_rgba(190,88,122,0.05)] transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fce5ee]">
          <Heart
            size={13}
            strokeWidth={1.5}
            className="text-[#c65f82]"
          />
        </div>
        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#a97889]">
          {title}
        </p>
      </div>
      <p
        className="mt-4 text-xl leading-8 text-[#5d4c55]"
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
    <div className="relative overflow-hidden rounded-[1.8rem] border border-[#e4bdcc] bg-[#fffafd] p-3 shadow-[0_7px_22px_rgba(190,88,122,0.07)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-[#fffafd] via-[#f9e4ec] to-[#f2d2df]">
        <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#a5677e] shadow-sm">
          JL
        </div>
        <div className="absolute right-4 top-4 text-[#d2879e]">
          ♡
        </div>
        <div className="flex h-full flex-col items-center justify-center px-5 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-[#c65f82] shadow-sm">
            <Camera size={21} strokeWidth={1.3} />
          </div>
          <p className="mt-5 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#9d6d80]">
            {label}
          </p>
          <p
            className="mt-2 text-lg text-[#a45f78]"
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
function PhotoCard({ photo, index }) {
  const card = (
    <div className="group overflow-hidden rounded-[1.3rem] border border-[#e3c0ce] bg-white p-2 shadow-[0_4px_15px_rgba(190,88,122,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
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
      <div className="px-2 pb-1 pt-2 text-right text-[10px] text-[#c06b87]">
        ♡
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
    <div className="rounded-[1.6rem] border border-dashed border-[#dfb8c7] bg-[#fff6fa] px-6 py-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fce5ee] text-[#c65f82]">
        <Camera
          size={22}
          strokeWidth={1.2}
        />
      </div>
      <p
        className="mt-4 text-xl text-[#8f5d72]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        the photo collection is waiting ♡
      </p>
      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#a87c8d]">
        Add JL photos to the archive whenever
        you're ready.
      </p>
    </div>
  );
}
