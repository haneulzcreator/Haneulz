import React, { useMemo, useState } from "react";
import { ArrowUpRight, Camera, Heart, Film, Sparkles } from "lucide-react";

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
    <main className="min-h-screen bg-[#f8e9ef] px-4 py-8 text-[#4f4650] sm:px-6">

      <div className="mx-auto max-w-5xl">

        {/* TOP SCRAPBOOK LABEL */}
        <div className="mb-6 flex items-center justify-between px-2">

          <div>
            <p className="font-mono text-[10px] font-semibold tracking-[0.25em] text-[#8d6678]">
              HANEULZ SCRAPBOOK
            </p>

            <p className="mt-1 font-mono text-[9px] tracking-[0.18em] text-[#b28799]">
              JL / YENCE / 01
            </p>
          </div>

          <Sparkles
            size={20}
            strokeWidth={1.4}
            className="text-[#c47e9a]"
          />

        </div>


        {/* =====================================================
            COVER PAGE
        ===================================================== */}

        <section className="relative overflow-hidden rounded-[2rem] border-2 border-[#dfb8c9] bg-[#fffafc] p-6 shadow-[8px_9px_0_rgba(173,111,139,0.15)] sm:p-10">

          {/* tape */}
          <Tape className="left-10 top-[-10px] rotate-[-5deg]" />
          <Tape className="right-10 top-[-10px] rotate-[6deg]" />

          {/* doodles */}
          <span className="absolute left-5 top-20 rotate-[-12deg] text-2xl text-[#d18aa6]">
            ♡
          </span>

          <span className="absolute right-7 top-24 rotate-[10deg] text-xl text-[#c9829e]">
            ✦
          </span>

          <span className="absolute bottom-10 left-8 text-lg text-[#d895ad]">
            ୨୧
          </span>

          <span className="absolute bottom-8 right-9 rotate-[8deg] text-xl text-[#c9829e]">
            ♡
          </span>


          {/* centered cover */}
          <div className="mx-auto max-w-2xl text-center">

            <p
              className="text-2xl font-semibold text-[#9b627b]"
              style={{ fontFamily: "'Comic Sans MS', cursive" }}
            >
              ୨୧ a little page for Yence ୨୧
            </p>

            <div className="my-5 text-xl tracking-[0.35em] text-[#c87e9c]">
              ♡ ✦ ♡
            </div>

            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.35em] text-[#9c7a89]">
              known as
            </p>

            <h1
              className="mt-1 text-8xl font-bold leading-none text-[#554752] sm:text-9xl"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              JL
            </h1>

            <p
              className="mt-4 text-4xl font-semibold text-[#634f5a]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              {profile.fullName}
            </p>

            <p
              className="mt-2 text-2xl font-semibold text-[#a2637d]"
              style={{ fontFamily: "'Comic Sans MS', cursive" }}
            >
              {profile.nickname} · {profile.alsoKnownAs}
            </p>


            {/* taped hero photo */}
            <div className="relative mx-auto mt-10 max-w-md rotate-[-1.5deg]">

              <Tape className="left-1/2 top-[-16px] -translate-x-1/2 rotate-[2deg]" />

              <PhotoPlaceholder label="JL PHOTO" />

              <span className="absolute -bottom-4 -right-4 rotate-[8deg] rounded-lg bg-[#fde4ee] px-4 py-2 font-semibold text-[#a7657f] shadow-sm">
                Yence ♡
              </span>

            </div>


            <p
              className="mx-auto mt-10 max-w-xl text-lg font-medium leading-8 text-[#665761]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              a tiny collection of little moments, favorite
              things, memories, and pieces of the person
              behind the name.
            </p>

            <div className="mt-6 text-xl tracking-widest text-[#c87d9a]">
              ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚
            </div>

          </div>

        </section>


        {/* =====================================================
            QUICK LOOK
        ===================================================== */}

        <ScrapbookSection rotation="-rotate-[0.5deg]">

          <SectionTitle>୨୧ a quick look ୨୧</SectionTitle>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">

            <InfoCard label="KNOWN AS" value={profile.knownAs} />
            <InfoCard label="NICKNAME" value={profile.nickname} />
            <InfoCard
              label="ALSO KNOWN AS"
              value={profile.alsoKnownAs}
            />
            <InfoCard label="BIRTHDAY" value={profile.birthday} />
            <InfoCard label="NATIONALITY" value={profile.nationality} />
            <InfoCard label="MBTI" value={profile.mbti} />

          </div>

        </ScrapbookSection>


        {/* =====================================================
            ABOUT JL
        ===================================================== */}

        <ScrapbookSection rotation="rotate-[0.4deg]">

          <SectionTitle>♡ about JL ♡</SectionTitle>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">

            <div className="relative mx-auto w-full max-w-sm rotate-[-2deg]">

              <Tape className="left-1/2 top-[-14px] -translate-x-1/2 rotate-[3deg]" />

              <PhotoPlaceholder label="A LITTLE PHOTO OF JL" />

            </div>


            <div>

              <p
                className="text-2xl font-semibold leading-9 text-[#514650]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                This is a little space for everything that
                makes JL feel like JL — his personality,
                little habits, memorable moments, and
                the tiny things that make people smile.
              </p>

              <p
                className="mt-5 text-lg font-medium leading-8 text-[#71606a]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Add your own little story about Yence here
                whenever you're ready.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <CuteTag>JL</CuteTag>
                <CuteTag>Yence</CuteTag>
                <CuteTag>Jaeyel</CuteTag>
                <CuteTag>♡</CuteTag>

              </div>

            </div>

          </div>

        </ScrapbookSection>


        {/* =====================================================
            HOBBIES
        ===================================================== */}

        <ScrapbookSection rotation="-rotate-[0.35deg]">

          <SectionTitle>୨୧ hobbies & interests ୨୧</SectionTitle>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <SoftCard title="♡ hobbies" value={profile.hobbies} />
            <SoftCard title="♡ interests" value={profile.interests} />
            <SoftCard title="♡ MBTI" value={profile.mbti} />
            <SoftCard title="♡ favorites" value={profile.favorites} />

          </div>

        </ScrapbookSection>


        {/* =====================================================
            FUN FACTS
        ===================================================== */}

        <ScrapbookSection rotation="rotate-[0.3deg]">

          <SectionTitle>♡ little things about JL ♡</SectionTitle>

          <div className="mt-8">

            {facts.map((fact, index) => (

              <div
                key={index}
                className="flex gap-4 border-b border-[#ead1dc] py-5 last:border-0"
              >

                <span className="shrink-0 text-xl text-[#c87e9b]">
                  ୨୧
                </span>

                <p
                  className="text-xl font-semibold leading-8 text-[#554951]"
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


        {/* =====================================================
            PHOTOS
        ===================================================== */}

        <section
          id="jl-photo-archive"
          className="relative mt-8 rounded-[2rem] border-2 border-[#dfb8c9] bg-[#fffafc] p-5 shadow-[7px_8px_0_rgba(173,111,139,0.13)] sm:p-8"
        >

          <Tape className="left-16 top-[-12px] rotate-[-4deg]" />

          <SectionTitle>୨୧ JL photos ୨୧</SectionTitle>

          <p
            className="mt-2 text-center text-lg font-semibold text-[#856674]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            ♡ a tiny photo collection ♡
          </p>

          {!showArchive ? (
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
                  className="mx-auto mt-8 flex items-center gap-2 rounded-full border-2 border-[#d8aec0] bg-[#fdeaf2] px-7 py-3 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#80586b] hover:bg-[#f8dce7]"
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

              <div className="mt-10 flex justify-center gap-2">

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (

                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    className={`h-9 min-w-9 rounded-full px-3 font-semibold ${
                      currentPage === page
                        ? "bg-[#b86f8d] text-white"
                        : "bg-[#fdeaf2] text-[#815c6d]"
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
                className="mx-auto mt-6 block font-mono text-[9px] font-semibold uppercase tracking-[0.25em] text-[#926d7d] underline"
              >
                close archive
              </button>
            </>
          )}

        </section>


        {/* FOOTER */}

        <footer className="py-16 text-center">

          <div className="text-2xl tracking-widest text-[#c47b99]">
            ♡ ୨୧ ✦
          </div>

          <p
            className="mt-5 text-2xl font-semibold text-[#8f5d72]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            made with love for Yence ♡
          </p>

          <p className="mt-3 text-sm font-medium text-[#856c78]">
            JL · Yence · Jaeyel
          </p>

          <p className="mt-4 text-xs font-medium tracking-[0.15em] text-[#ae8e9d]">
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

function ScrapbookSection({ children, rotation }) {
  return (
    <section
      className={`relative mt-8 rounded-[1.8rem] border-2 border-[#e4c3d0] bg-[#fffafc] px-6 py-10 shadow-[6px_7px_0_rgba(173,111,139,0.12)] sm:px-10 ${rotation}`}
    >
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

      <div className="text-base font-semibold text-[#c47b98]">
        ୨୧
      </div>

      <h2
        className="mt-1 text-4xl font-bold text-[#554650]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {children}
      </h2>

      <div className="mt-2 text-base font-semibold text-[#c47b98]">
        ♡
      </div>

    </div>
  );
}


/* ============================================================
   TAPE
============================================================ */

function Tape({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute z-10 h-7 w-24 bg-[#f6d8a8]/75 shadow-sm ${className}`}
    />
  );
}


/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl border border-[#e5cbd6] bg-[#fff4f8] p-5 text-center shadow-[2px_3px_0_rgba(190,130,153,0.08)]">

      <p className="font-mono text-[8px] font-semibold tracking-[0.2em] text-[#9a7181]">
        {label}
      </p>

      <p
        className="mt-3 text-xl font-bold text-[#574952]"
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
    <span className="rounded-full border border-[#dfb8c9] bg-[#fdebf3] px-4 py-2 text-sm font-semibold text-[#875c6f]">
      {children} ♡
    </span>
  );
}


/* ============================================================
   SOFT CARD
============================================================ */

function SoftCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-[#e5cbd6] bg-[#fff5f9] p-6">

      <div className="flex items-center gap-2">

        <Heart
          size={15}
          strokeWidth={1.7}
          className="text-[#bd718f]"
        />

        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#966f7e]">
          {title}
        </p>

      </div>

      <p
        className="mt-4 text-xl font-semibold leading-8 text-[#5b4b54]"
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
    <div className="overflow-hidden rounded-xl border-2 border-[#dfbfcd] bg-[#fffafc] p-3 shadow-[3px_4px_0_rgba(173,111,139,0.12)]">

      <div className="flex aspect-[4/5] flex-col items-center justify-center bg-[#f9eaf1]">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#bc7691] shadow-sm">

          <Camera size={22} strokeWidth={1.5} />

        </div>

        <p className="mt-5 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#916b7a]">
          {label}
        </p>

        <p
          className="mt-2 text-lg font-semibold text-[#9d6f82]"
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          photo goes here ♡
        </p>

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

function PhotoCard({ photo, index }) {
  const content = (
    <div className="group relative rotate-[-1deg] border-[8px] border-white bg-white shadow-[3px_4px_8px_rgba(93,63,76,0.16)] transition duration-300 hover:-translate-y-1 hover:rotate-0 hover:shadow-lg">

      <div className="aspect-square overflow-hidden">

        <img
          src={photo.src}
          alt={photo.alt || `JL photo ${index + 1}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

      </div>

      <div className="absolute -bottom-3 -right-2 rotate-[8deg] text-sm text-[#c77c98]">
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
        {content}
      </a>
    );
  }

  return content;
}


/* ============================================================
   EMPTY STATE
============================================================ */

function EmptyPhotoState() {
  return (
    <div className="mt-8 rounded-2xl border-2 border-dashed border-[#dfbdcc] bg-[#fff5f9] px-6 py-12 text-center">

      <Camera
        size={26}
        strokeWidth={1.4}
        className="mx-auto text-[#bd7692]"
      />

      <p
        className="mt-4 text-xl font-bold text-[#795969]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        the photo collection is waiting ♡
      </p>

      <p className="mx-auto mt-2 max-w-md text-sm font-medium leading-6 text-[#876f7b]">
        Add JL photos to the scrapbook whenever you're
        ready.
      </p>

    </div>
  );
}
