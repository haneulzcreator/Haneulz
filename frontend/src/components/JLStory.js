import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Heart,
  Star,
  Sparkles,
  Flower2,
  Paperclip,
  Scissors,
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
    <main className="min-h-screen overflow-hidden bg-[#ead7c5] px-3 py-5 text-[#3f3835] sm:px-6">

      <div className="mx-auto max-w-6xl">

        {/* =========================
            SCRAPBOOK COVER
        ========================== */}

        <section className="relative overflow-hidden border-[10px] border-[#8d6955] bg-[#f5e9da] p-3 shadow-[0_12px_0_rgba(80,55,43,0.18)]">

          <div className="relative min-h-[700px] overflow-hidden border border-[#c9a98e] bg-[#f8eee2] px-5 py-12 sm:px-12">

            {/* paper texture pieces */}

            <div className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-[#e7c8b8]/50 blur-2xl" />
            <div className="absolute -right-12 bottom-20 h-48 w-48 rounded-full bg-[#d8c7ae]/50 blur-2xl" />

            {/* tape */}

            <Tape className="absolute left-8 top-5 rotate-[-7deg]" />
            <Tape className="absolute right-10 top-12 rotate-[8deg]" />

            {/* stickers */}

            <Sticker className="absolute left-5 top-44 rotate-[-12deg]">
              ♡
            </Sticker>

            <Sticker className="absolute right-5 top-52 rotate-[12deg]">
              ★
            </Sticker>

            <Sticker className="absolute bottom-24 left-8 rotate-[7deg]">
              ✦
            </Sticker>

            <Sticker className="absolute bottom-16 right-8 rotate-[-8deg]">
              ♡
            </Sticker>

            {/* title */}

            <div className="relative mx-auto max-w-3xl text-center">

              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#8d6b59]">
                HANEULZ MEMORY BOOK
              </p>

              <div className="mt-5 inline-block rotate-[-2deg] bg-[#fffdf8] px-7 py-4 shadow-[4px_5px_0_rgba(80,55,43,0.13)]">
                <p className="font-serif text-lg text-[#9c705b]">
                  a little page for
                </p>

                <h1 className="mt-1 font-serif text-7xl font-bold text-[#443936] sm:text-9xl">
                  JL
                </h1>
              </div>

              <div className="mt-8 flex justify-center gap-5 text-[#9d695d]">
                <Heart size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Flower2 size={18} />
              </div>

              <p className="mt-7 font-serif text-3xl font-semibold text-[#57443d]">
                Jay Lawrence Gaspar
              </p>

              <p className="mt-2 text-xl font-semibold text-[#a36f62]">
                Yence · Jaeyel
              </p>

            </div>

            {/* polaroid */}

            <div className="relative mx-auto mt-12 w-full max-w-sm rotate-[2deg] bg-white p-4 pb-7 shadow-[8px_10px_0_rgba(74,54,45,0.18)]">

              <div className="aspect-[4/5] bg-[#eadfd3]">
                <PhotoPlaceholder label="JL PHOTO" />
              </div>

              <p className="mt-4 text-center font-serif text-xl font-semibold text-[#554640]">
                my favorite little page ♡
              </p>

            </div>

            {/* handwritten note */}

            <div className="relative mx-auto mt-10 max-w-lg rotate-[-1.5deg] bg-[#fff6a8] px-6 py-5 shadow-[4px_6px_0_rgba(88,73,39,0.14)]">

              <p className="text-center text-lg font-semibold leading-7 text-[#635632]">
                ✎ little moments, little memories,
                and all the things that make JL special.
              </p>

            </div>

            <p className="mt-10 text-center font-mono text-[9px] uppercase tracking-[0.3em] text-[#9d806e]">
              page 01 · JL archive
            </p>

          </div>
        </section>


        {/* =========================
            QUICK LOOK
        ========================== */}

        <ScrapbookSection
          title="a quick look"
          sticker="♡"
          rotation="-rotate-[0.5deg]"
        >

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">

            <PaperCard label="KNOWN AS" value={profile.knownAs} />
            <PaperCard label="NICKNAME" value={profile.nickname} />
            <PaperCard label="ALSO KNOWN AS" value={profile.alsoKnownAs} />
            <PaperCard label="BIRTHDAY" value={profile.birthday} />
            <PaperCard label="NATIONALITY" value={profile.nationality} />
            <PaperCard label="MBTI" value={profile.mbti} />

          </div>

        </ScrapbookSection>


        {/* =========================
            ABOUT
        ========================== */}

        <ScrapbookSection
          title="about JL"
          sticker="✦"
          rotation="rotate-[0.4deg]"
        >

          <div className="grid items-center gap-10 md:grid-cols-2">

            <Polaroid
              label="A LITTLE PHOTO OF JL"
              rotation="-rotate-[3deg]"
            />

            <div className="relative">

              <Tape className="absolute -right-2 -top-7 rotate-[9deg]" />

              <div className="rotate-[1deg] bg-[#fffdf5] p-7 shadow-[5px_7px_0_rgba(79,59,49,0.12)]">

                <p className="font-serif text-2xl font-semibold leading-9 text-[#453b38]">
                  This is a little space for everything
                  that makes JL feel like JL — his
                  personality, little habits, memorable
                  moments, and the tiny things that make
                  people smile.
                </p>

                <p className="mt-5 font-serif text-lg leading-8 text-[#75645c]">
                  Add your own little story about Yence
                  here whenever you're ready.
                </p>

              </div>

              <div className="mt-7 flex flex-wrap gap-3">

                <ScrapTag>JL ♡</ScrapTag>
                <ScrapTag>Yence</ScrapTag>
                <ScrapTag>Jaeyel</ScrapTag>

              </div>

            </div>

          </div>

        </ScrapbookSection>


        {/* =========================
            HOBBIES
        ========================== */}

        <ScrapbookSection
          title="things JL likes"
          sticker="★"
          rotation="-rotate-[0.3deg]"
        >

          <div className="grid gap-6 sm:grid-cols-2">

            <NoteCard
              title="♡ hobbies"
              value={profile.hobbies}
              color="yellow"
              rotation="-rotate-[1deg]"
            />

            <NoteCard
              title="✦ interests"
              value={profile.interests}
              color="blue"
              rotation="rotate-[1.2deg]"
            />

            <NoteCard
              title="♡ favorites"
              value={profile.favorites}
              color="pink"
              rotation="-rotate-[0.7deg]"
            />

            <NoteCard
              title="✦ MBTI"
              value={profile.mbti}
              color="green"
              rotation="rotate-[0.8deg]"
            />

          </div>

        </ScrapbookSection>


        {/* =========================
            FUN FACTS
        ========================== */}

        <ScrapbookSection
          title="little things about JL"
          sticker="♡"
          rotation="rotate-[0.5deg]"
        >

          <div className="relative mx-auto max-w-3xl">

            <Paperclip className="absolute -right-2 -top-7 rotate-[20deg] text-[#826957]" />

            <div className="bg-[#fffdf5] p-5 shadow-[6px_7px_0_rgba(73,54,43,0.13)]">

              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-b border-dashed border-[#d5c5b8] px-3 py-5 last:border-0"
                >

                  <span className="font-serif text-xl font-bold text-[#a56e62]">
                    {index + 1}.
                  </span>

                  <p className="font-serif text-xl font-semibold leading-8 text-[#4c403b]">
                    {fact}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </ScrapbookSection>


        {/* =========================
            PHOTO ARCHIVE
        ========================== */}

        <ScrapbookSection
          title="JL photo collection"
          sticker="📷"
          rotation="-rotate-[0.4deg]"
          id="jl-photo-archive"
        >

          <p className="text-center font-serif text-lg font-semibold text-[#79645b]">
            little snapshots kept here ♡
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
                  className="mx-auto mt-10 flex items-center gap-2 border-2 border-[#765b4c] bg-[#fff6a8] px-7 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#58473e] shadow-[4px_4px_0_rgba(74,54,45,0.15)] transition hover:-translate-y-1"
                >
                  open archive ♡
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

              <div className="mt-10 flex justify-center gap-2">

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`h-9 min-w-9 border-2 px-3 font-mono text-xs font-bold ${
                      currentPage === page
                        ? "border-[#765b4c] bg-[#765b4c] text-white"
                        : "border-[#c5ad9c] bg-[#fffdf7] text-[#765b4c]"
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
                className="mx-auto mt-6 block font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#80685b] underline"
              >
                close archive
              </button>
            </>
          )}

        </ScrapbookSection>


        {/* =========================
            FOOTER
        ========================== */}

        <footer className="relative py-20 text-center">

          <div className="mx-auto max-w-md rotate-[-1deg] bg-[#fff6a8] px-7 py-8 shadow-[5px_7px_0_rgba(73,54,43,0.15)]">

            <div className="flex justify-center gap-4 text-[#9b6a5d]">
              <Heart size={18} fill="currentColor" />
              <Sparkles size={18} />
              <Heart size={18} fill="currentColor" />
            </div>

            <p className="mt-5 font-serif text-2xl font-bold text-[#59453d]">
              made with love for Yence ♡
            </p>

            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#856d61]">
              JL · Yence · Jaeyel
            </p>

          </div>

        </footer>

      </div>
    </main>
  );
}


/* ============================================================
   SCRAPBOOK SECTION
============================================================ */

function ScrapbookSection({
  title,
  sticker,
  rotation = "",
  children,
  id,
}) {
  return (
    <section
      id={id}
      className={`relative mt-12 bg-[#f8eee1] p-3 shadow-[7px_8px_0_rgba(73,54,43,0.13)] ${rotation}`}
    >

      <div className="relative border border-[#d1b69f] bg-[#fffaf2] px-5 py-12 sm:px-10">

        <Tape className="absolute left-1/2 top-[-12px] -translate-x-1/2 rotate-[2deg]" />

        <div className="mb-10 text-center">

          <div className="mx-auto inline-flex items-center gap-3 bg-[#fff6a8] px-6 py-3 shadow-[3px_4px_0_rgba(73,54,43,0.12)]">

            <span className="text-[#9a6b5c]">
              {sticker}
            </span>

            <h2 className="font-serif text-3xl font-bold text-[#493b36] sm:text-4xl">
              {title}
            </h2>

            <span className="text-[#9a6b5c]">
              {sticker}
            </span>

          </div>

        </div>

        {children}

      </div>
    </section>
  );
}


/* ============================================================
   TAPE
============================================================ */

function Tape({ className = "" }) {
  return (
    <div
      className={`h-8 w-24 bg-[#e7c7a7]/75 shadow-sm ${className}`}
    />
  );
}


/* ============================================================
   STICKER
============================================================ */

function Sticker({ children, className = "" }) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full bg-[#fff6a8] font-serif text-xl font-bold text-[#95685b] shadow-[3px_4px_0_rgba(73,54,43,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}


/* ============================================================
   PAPER CARD
============================================================ */

function PaperCard({ label, value }) {
  return (
    <div className="rotate-[0.5deg] bg-[#fffdf7] p-6 text-center shadow-[4px_5px_0_rgba(73,54,43,0.12)]">

      <p className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#927568]">
        {label}
      </p>

      <div className="mx-auto mt-3 h-px w-12 bg-[#d6b9a5]" />

      <p className="mt-4 font-serif text-2xl font-bold text-[#493d38]">
        {value}
      </p>

    </div>
  );
}


/* ============================================================
   NOTE CARD
============================================================ */

function NoteCard({
  title,
  value,
  color,
  rotation,
}) {
  const colors = {
    yellow: "bg-[#fff6a8]",
    blue: "bg-[#cfe8ee]",
    pink: "bg-[#f4ccd4]",
    green: "bg-[#d6e7c8]",
  };

  return (
    <div
      className={`relative min-h-[160px] p-7 shadow-[5px_6px_0_rgba(73,54,43,0.12)] ${colors[color]} ${rotation}`}
    >

      <Tape className="absolute left-1/2 top-[-9px] h-6 w-20 -translate-x-1/2 rotate-[2deg]" />

      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#66544b]">
        {title}
      </p>

      <p className="mt-5 font-serif text-xl font-semibold leading-8 text-[#403834]">
        {value}
      </p>

    </div>
  );
}


/* ============================================================
   SCRAP TAG
============================================================ */

function ScrapTag({ children }) {
  return (
    <span className="rotate-[-1deg] border border-[#c8aa98] bg-[#fffdf7] px-4 py-2 font-mono text-[10px] font-bold text-[#70594d] shadow-[2px_3px_0_rgba(73,54,43,0.1)]">
      {children}
    </span>
  );
}


/* ============================================================
   POLAROID
============================================================ */

function Polaroid({ label, rotation }) {
  return (
    <div
      className={`mx-auto w-full max-w-sm bg-white p-4 pb-7 shadow-[7px_8px_0_rgba(73,54,43,0.17)] ${rotation}`}
    >

      <PhotoPlaceholder label={label} />

      <p className="mt-4 text-center font-serif text-lg font-bold text-[#594740]">
        a little memory ♡
      </p>

    </div>
  );
}


/* ============================================================
   PHOTO PLACEHOLDER
============================================================ */

function PhotoPlaceholder({ label }) {
  return (
    <div className="flex aspect-[4/5] flex-col items-center justify-center bg-[#eadfd3] text-center">

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fffdf7] text-[#96705e] shadow-sm">
        <Camera size={25} strokeWidth={1.4} />
      </div>

      <p className="mt-5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#796256]">
        {label}
      </p>

      <p className="mt-2 font-serif text-lg font-semibold text-[#8a7063]">
        photo goes here ♡
      </p>

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
    <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">

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
    <div className="bg-white p-3 pb-5 shadow-[5px_6px_0_rgba(73,54,43,0.14)] transition duration-300 hover:-translate-y-2 hover:rotate-1">

      <div className="aspect-square overflow-hidden bg-[#eadfd3]">

        <img
          src={photo.src}
          alt={photo.alt || `JL photo ${index + 1}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />

      </div>

      <p className="mt-3 text-center font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-[#796256]">
        JL · {String(index + 1).padStart(2, "0")} ♡
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
        {card}
      </a>
    );
  }

  return card;
}


/* ============================================================
   EMPTY
============================================================ */

function EmptyPhotoState() {
  return (
    <div className="mx-auto mt-10 max-w-md rotate-[-1deg] bg-[#fff6a8] px-7 py-12 text-center shadow-[5px_6px_0_rgba(73,54,43,0.13)]">

      <Camera
        size={28}
        className="mx-auto text-[#92705f]"
        strokeWidth={1.4}
      />

      <p className="mt-5 font-serif text-xl font-bold text-[#57443d]">
        the photo collection is waiting ♡
      </p>

      <p className="mt-2 font-mono text-[9px] leading-5 text-[#79685f]">
        Add JL photos to the scrapbook whenever
        you're ready.
      </p>

    </div>
  );
}
