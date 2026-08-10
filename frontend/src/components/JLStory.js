import React, { useMemo, useState } from "react";
import { Camera, Heart, Star, Flower2, Sparkles } from "lucide-react";

const PHOTOS_PER_PAGE = 12;

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
  "Add another interesting thing about JL here.",
  "Add a funny or memorable JL moment here.",
  "Add another little detail about JL here.",
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
  const [page, setPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(photos.length / PHOTOS_PER_PAGE)
  );

  const visiblePhotos = useMemo(() => {
    const start = (page - 1) * PHOTOS_PER_PAGE;
    return photos.slice(start, start + PHOTOS_PER_PAGE);
  }, [page]);

  return (
    <main className="min-h-screen bg-[#f8e9ee] px-4 py-8 text-[#594b52] sm:px-8">

      {/* BACKGROUND DOODLES */}
      <div className="pointer-events-none fixed left-3 top-28 rotate-[-12deg] text-2xl text-[#d89bad]">
        ♡
      </div>

      <div className="pointer-events-none fixed right-5 top-44 rotate-[10deg] text-xl text-[#d59aaa]">
        ✦
      </div>

      <div className="pointer-events-none fixed bottom-24 left-6 text-lg text-[#dda8b8]">
        ୨୧
      </div>

      <div className="pointer-events-none fixed bottom-20 right-6 rotate-[-8deg] text-xl text-[#d795a9]">
        ♡
      </div>


      <div className="mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}

        <header className="mb-6 flex items-end justify-between px-3">

          <div>
            <p className="font-mono text-[9px] font-bold tracking-[0.3em] text-[#a86f82]">
              HANEULZ
            </p>

            <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-[#b88b9a]">
              SCRAPBOOK • 01
            </p>
          </div>

          <div className="rotate-[5deg] rounded-sm bg-[#fff9f8] px-3 py-2 font-mono text-[8px] font-bold text-[#b8798e] shadow-sm">
            MY LITTLE JL PAGE ♡
          </div>

        </header>


        {/* ================= MAIN PAPER ================= */}

        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#dfbbc7] bg-[#fffaf7] p-4 shadow-[8px_10px_0_rgba(179,115,137,0.15)] sm:p-7">

          {/* paper texture layers */}
          <div className="pointer-events-none absolute -right-12 top-28 h-32 w-32 rotate-12 rounded-full bg-[#fce8ee] opacity-60" />
          <div className="pointer-events-none absolute -left-10 bottom-36 h-40 w-40 rounded-full bg-[#f8edf0] opacity-70" />


          {/* ================= TITLE PAGE ================= */}

          <section className="relative overflow-hidden border-b-2 border-dashed border-[#e8cbd4] px-4 pb-12 pt-8 sm:px-10">

            <Sticker className="left-3 top-3 rotate-[-8deg]">
              ♡ JL ♡
            </Sticker>

            <Sticker className="right-3 top-4 rotate-[8deg]">
              YENCE
            </Sticker>


            <div className="relative mx-auto max-w-3xl text-center">

              <p
                className="text-2xl font-bold text-[#a86c82] sm:text-3xl"
                style={{ fontFamily: "'Comic Sans MS', cursive" }}
              >
                a little scrapbook
              </p>

              <div className="mt-2 text-xl text-[#d0839b]">
                ♡ ✦ ♡
              </div>

              <p className="mt-7 font-mono text-[9px] font-bold uppercase tracking-[0.35em] text-[#aa8390]">
                this page belongs to
              </p>

              <h1
                className="mt-1 text-7xl font-bold text-[#594953] sm:text-9xl"
                style={{
                  fontFamily: "'Georgia', serif",
                }}
              >
                JL
              </h1>

              <p
                className="mt-1 text-3xl font-semibold text-[#8f5d71]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Jay Lawrence Gaspar
              </p>

              <p
                className="mt-2 text-xl font-bold text-[#bd7890]"
                style={{ fontFamily: "'Comic Sans MS', cursive" }}
              >
                Yence ♡
              </p>

              <div className="mx-auto mt-7 max-w-md">
                <Polaroid
                  src=""
                  label="JL ♡"
                  rotation="rotate-[-2deg]"
                />
              </div>

              <p
                className="mx-auto mt-8 max-w-xl text-lg font-medium leading-8 text-[#725f68]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                a tiny collection of photos, memories,
                favorite things, little facts, and all the
                small pieces that make JL special.
              </p>

              <div className="mt-6 text-lg text-[#c77f96]">
                ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚
              </div>

            </div>

          </section>


          {/* ================= JOURNAL NOTE ================= */}

          <section className="relative px-3 py-12 sm:px-10">

            <WashiTape className="left-1/2 top-7 -translate-x-1/2 rotate-[-2deg]" />

            <div className="relative mx-auto max-w-3xl rotate-[0.4deg] bg-[#fff3c9] px-7 py-8 shadow-[4px_5px_0_rgba(180,150,100,0.15)] sm:px-12">

              <div className="absolute right-5 top-4 rotate-[8deg] text-lg text-[#d38a9d]">
                ♡
              </div>

              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#aa8b68]">
                little journal note
              </p>

              <h2
                className="mt-2 text-3xl font-bold text-[#5c4e4c]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                about JL
              </h2>

              <p
                className="mt-5 text-lg font-medium leading-8 text-[#67595a]"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                This is a little space for the things
                that make JL feel like JL — personality,
                habits, memories, funny moments, and
                all the tiny details worth remembering.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <ScrapSticker>JL</ScrapSticker>
                <ScrapSticker>YENCE</ScrapSticker>
                <ScrapSticker>♡</ScrapSticker>
              </div>

            </div>

          </section>


          {/* ================= QUICK FACTS ================= */}

          <section className="relative px-3 py-10 sm:px-10">

            <SectionHeading>
              ୨୧ little facts ୨୧
            </SectionHeading>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              <PaperNote title="known as" value={profile.knownAs} />
              <PaperNote title="nickname" value={profile.nickname} />
              <PaperNote title="birthday" value={profile.birthday} />
              <PaperNote title="nationality" value={profile.nationality} />
              <PaperNote title="MBTI" value={profile.mbti} />
              <PaperNote title="favorites" value={profile.favorites} />

            </div>

          </section>


          {/* ================= HOBBIES ================= */}

          <section className="relative px-3 py-12 sm:px-10">

            <Tape />

            <SectionHeading>
              ♡ things JL likes ♡
            </SectionHeading>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">

              <JournalCard
                icon="♡"
                title="hobbies"
                value={profile.hobbies}
                rotation="rotate-[-1deg]"
              />

              <JournalCard
                icon="✦"
                title="interests"
                value={profile.interests}
                rotation="rotate-[1deg]"
              />

              <JournalCard
                icon="୨୧"
                title="favorites"
                value={profile.favorites}
                rotation="rotate-[0.5deg]"
              />

              <JournalCard
                icon="♡"
                title="more"
                value="Add anything else you want here."
                rotation="rotate-[-0.7deg]"
              />

            </div>

          </section>


          {/* ================= FUN FACTS ================= */}

          <section className="relative px-3 py-12 sm:px-10">

            <SectionHeading>
              ✦ little things about JL ✦
            </SectionHeading>

            <div className="mx-auto mt-8 max-w-3xl">

              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="relative mb-5 rotate-[0.2deg] border-b border-dashed border-[#dfc3cc] bg-[#fff6f8] px-5 py-5 pl-12"
                >

                  <span className="absolute left-4 top-5 text-[#cf8299]">
                    ♡
                  </span>

                  <p className="font-medium leading-7 text-[#62545b]">
                    {fact}
                  </p>

                </div>
              ))}

            </div>

          </section>


          {/* ================= PHOTOS ================= */}

          <section className="relative px-3 py-12 sm:px-10">

            <SectionHeading>
              ୨୧ JL's photo pile ୨୧
            </SectionHeading>

            <p className="mt-2 text-center font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#a98291]">
              photos i want to keep forever ♡
            </p>

            {!showArchive ? (
              <>
                <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">

                  {photos.slice(0, PHOTOS_PER_PAGE).map((photo, index) => (
                    <Polaroid
                      key={index}
                      src={photo.src}
                      label={`JL • ${String(index + 1).padStart(2, "0")}`}
                      rotation={
                        index % 3 === 0
                          ? "rotate-[-2deg]"
                          : index % 3 === 1
                          ? "rotate-[1.5deg]"
                          : "rotate-[-0.5deg]"
                      }
                      postUrl={photo.postUrl}
                    />
                  ))}

                </div>

                {photos.length > PHOTOS_PER_PAGE && (
                  <button
                    onClick={() => {
                      setShowArchive(true);
                      setPage(1);
                    }}
                    className="mx-auto mt-10 block rounded-full border-2 border-[#d69aad] bg-[#fff1f5] px-7 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#956477] shadow-[3px_3px_0_rgba(190,125,146,0.15)]"
                  >
                    open photo box ♡
                  </button>
                )}
              </>
            ) : (
              <>
                <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">

                  {visiblePhotos.map((photo, index) => (
                    <Polaroid
                      key={index}
                      src={photo.src}
                      label={`JL • ${String(
                        (page - 1) * PHOTOS_PER_PAGE + index + 1
                      ).padStart(2, "0")}`}
                      rotation="rotate-[0.5deg]"
                      postUrl={photo.postUrl}
                    />
                  ))}

                </div>

                <div className="mt-10 flex justify-center gap-2">

                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((number) => (
                    <button
                      key={number}
                      onClick={() => setPage(number)}
                      className={`h-9 w-9 rounded-full border font-mono text-xs font-bold ${
                        page === number
                          ? "border-[#bf7890] bg-[#bf7890] text-white"
                          : "border-[#e1bcc9] bg-white text-[#987283]"
                      }`}
                    >
                      {number}
                    </button>
                  ))}

                </div>

                <button
                  onClick={() => setShowArchive(false)}
                  className="mx-auto mt-7 block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#a17b8a] underline"
                >
                  close photo box
                </button>
              </>
            )}

          </section>


          {/* ================= END ================= */}

          <footer className="relative border-t-2 border-dashed border-[#e8cbd4] px-4 py-14 text-center">

            <div className="text-2xl text-[#cf8299]">
              ♡ ✦ ୨୧ ✦ ♡
            </div>

            <p
              className="mt-5 text-2xl font-bold text-[#9d687d]"
              style={{ fontFamily: "'Comic Sans MS', cursive" }}
            >
              made with love for JL ♡
            </p>

            <p className="mt-3 text-sm font-medium text-[#987783]">
              JL · Yence
            </p>

          </footer>

        </div>
      </div>
    </main>
  );
}


/* ================= COMPONENTS ================= */

function Sticker({ children, className = "" }) {
  return (
    <div
      className={`absolute rounded-md border border-[#ecc9d4] bg-[#fff0f5] px-3 py-2 font-mono text-[8px] font-bold tracking-wider text-[#a96e82] shadow-[2px_3px_0_rgba(190,130,150,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}

function WashiTape({ className = "" }) {
  return (
    <div
      className={`absolute z-10 h-7 w-32 bg-[#e9b4c4]/75 ${className}`}
    />
  );
}

function Tape() {
  return (
    <div className="pointer-events-none absolute right-12 top-4 h-7 w-28 rotate-[5deg] bg-[#efb8c8]/70" />
  );
}

function ScrapSticker({ children }) {
  return (
    <span className="rounded-full border border-[#ddb1bf] bg-[#fff8fa] px-4 py-2 text-xs font-bold text-[#a46e81] shadow-sm">
      {children}
    </span>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="text-center">
      <div className="text-lg text-[#ce8299]">♡</div>

      <h2
        className="mt-1 text-3xl font-bold text-[#604f58] sm:text-4xl"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {children}
      </h2>

      <div className="mt-2 text-sm text-[#d08ca0]">✦ ୨୧ ✦</div>
    </div>
  );
}

function PaperNote({ title, value }) {
  return (
    <div className="relative rotate-[0.5deg] bg-[#fff8dc] px-6 py-6 shadow-[4px_5px_0_rgba(173,145,95,0.12)]">

      <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-2deg] bg-[#efc4d0]/80" />

      <p className="font-mono text-[8px] font-bold uppercase tracking-[0.22em] text-[#a78a6b]">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold text-[#5d5152]">
        {value}
      </p>
    </div>
  );
}

function JournalCard({ icon, title, value, rotation }) {
  return (
    <div
      className={`relative ${rotation} border border-[#e8cbd4] bg-[#fffdf9] p-6 shadow-[4px_5px_0_rgba(174,125,142,0.13)]`}
    >
      <div className="absolute -right-2 -top-3 rotate-[12deg] text-xl text-[#cf839a]">
        {icon}
      </div>

      <p className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-[#a37c8b]">
        {title}
      </p>

      <p className="mt-4 text-lg font-medium leading-7 text-[#62545b]">
        {value}
      </p>
    </div>
  );
}

function Polaroid({
  src,
  label,
  rotation = "rotate-0",
  postUrl = "",
}) {
  const card = (
    <div
      className={`relative ${rotation} bg-white p-3 pb-5 shadow-[4px_6px_0_rgba(120,90,100,0.13)] transition duration-300 hover:z-10 hover:rotate-0 hover:scale-[1.03]`}
    >
      <div className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-2deg] bg-[#efb8c7]/80" />

      <div className="aspect-square overflow-hidden bg-[#f8e9ee]">

        {src ? (
          <img
            src={src}
            alt={label}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-center">

            <Camera
              size={25}
              strokeWidth={1.4}
              className="text-[#c97f96]"
            />

            <p className="mt-3 font-mono text-[8px] font-bold tracking-[0.15em] text-[#a37b89]">
              PHOTO GOES HERE
            </p>
          </div>
        )}

      </div>

      <p
        className="mt-3 text-center text-sm font-bold text-[#715b64]"
        style={{ fontFamily: "'Comic Sans MS', cursive" }}
      >
        {label} ♡
      </p>
    </div>
  );

  return postUrl ? (
    <a href={postUrl} target="_blank" rel="noreferrer">
      {card}
    </a>
  ) : (
    card
  );
}
