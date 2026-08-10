import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Heart,
  Sparkles,
  TreePine,
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
  "Add another interesting fact here.",
  "Add a funny or memorable detail here.",
  "Add another fact about JL here.",
  "Add another little detail whenever you want.",
];

/*
============================================================
JL PHOTO ARCHIVE
============================================================

Add photos like this:

{
  src: "https://your-image-url.com/photo.jpg",
  alt: "JL photo",
  postUrl: "https://x.com/..."
}

postUrl is optional.
============================================================
*/

const photos = [
  {
    src: "",
    alt: "JL photo 01",
    postUrl: "",
  },
  {
    src: "",
    alt: "JL photo 02",
    postUrl: "",
  },
  {
    src: "",
    alt: "JL photo 03",
    postUrl: "",
  },
  {
    src: "",
    alt: "JL photo 04",
    postUrl: "",
  },
  {
    src: "",
    alt: "JL photo 05",
    postUrl: "",
  },
  {
    src: "",
    alt: "JL photo 06",
    postUrl: "",
  },
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

    return photos.slice(
      start,
      start + PHOTOS_PER_PAGE
    );
  }, [currentPage]);

  const goToPage = (page) => {
    setCurrentPage(page);

    window.requestAnimationFrame(() => {
      document
        .getElementById("jl-photo-archive")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#fffafd] via-[#fff0f6] to-[#fff8fb] px-4 py-6 text-[#665765] sm:px-6">

      <div className="mx-auto max-w-5xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="flex items-center justify-between px-2 py-3">

          <div>
            <p className="font-mono text-[9px] tracking-[0.28em] text-[#b4879d]">
              HANEULZ ARCHIVE
            </p>

            <p className="mt-1 font-mono text-[8px] tracking-[0.22em] text-[#d1adbe]">
              JL / 01
            </p>
          </div>

          <div className="flex items-center gap-2 text-[#cf9db2]">
            <span className="text-sm">🦌</span>
            <span className="text-xl">୨୧</span>
          </div>

        </header>


        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative mt-4 overflow-hidden rounded-[2.5rem] border border-[#f1d6e2] bg-white/65 px-6 py-14 text-center shadow-[0_18px_55px_rgba(180,130,155,0.10)] backdrop-blur-md sm:px-10">

          {/* decorations */}

          <div className="pointer-events-none absolute left-6 top-6 text-sm text-[#d9adbf]">
            ୨୧
          </div>

          <div className="pointer-events-none absolute right-7 top-6 text-sm text-[#d9adbf]">
            ♡
          </div>

          <div className="pointer-events-none absolute bottom-7 left-8 text-xs text-[#e5c0cf]">
            ✦
          </div>

          <div className="pointer-events-none absolute bottom-7 right-8 text-xs text-[#e5c0cf]">
            ୨୧
          </div>


          <div className="flex justify-center">
            <span className="rounded-full border border-[#edcfdb] bg-[#fff8fb] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.3em] text-[#ad8196]">
              a little page for Yence ♡
            </span>
          </div>


          <div className="mt-5 text-lg tracking-[0.3em] text-[#c995aa]">
            ♡ ୨୧ ♡
          </div>


          <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.4em] text-[#b894a5]">
            known as
          </p>


          <h1
            className="mt-2 text-7xl font-normal tracking-tight text-[#665462] sm:text-8xl"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            JL
          </h1>


          <div className="mt-3 text-xl text-[#c18fa5]">
            ♡
          </div>


          <p
            className="mt-3 text-3xl text-[#665462]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Jay Lawrence Gaspar
          </p>


          <p
            className="mt-2 text-2xl text-[#a97c91]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            Yence · Jaeyel
          </p>


          {/* HERO PHOTO */}

          <div className="mx-auto mt-10 max-w-md">
            <PhotoPlaceholder label="JL PHOTO" />
          </div>


          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 rounded-full bg-[#fff7fa] px-5 py-2 text-sm text-[#b48699]">
              <span>🦌</span>
              <span>soft little Yence</span>
              <Heart
                size={13}
                fill="currentColor"
              />
            </div>
          </div>


          <p
            className="mx-auto mt-6 max-w-lg text-lg leading-8 text-[#917986]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            a tiny collection of things about JL —
            little moments, favorite things, and pieces
            of the person behind Yence.
          </p>


          <div className="mt-6 text-xl text-[#c69aaa]">
            ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚
          </div>

        </section>


        {/* =================================================
            QUICK LOOK
        ================================================= */}

        <section className="mt-8 rounded-[2.25rem] border border-[#f0dce5] bg-white/55 px-6 py-10 shadow-[0_12px_40px_rgba(180,130,155,0.07)] backdrop-blur-md sm:px-10">

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


        {/* =================================================
            ABOUT JL
        ================================================= */}

        <section className="mt-8 rounded-[2.25rem] border border-[#f0dce5] bg-white/55 px-6 py-10 shadow-[0_12px_40px_rgba(180,130,155,0.07)] backdrop-blur-md sm:px-10">

          <SectionTitle>
            ♡ about JL ♡
          </SectionTitle>


          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">

            <PhotoPlaceholder
              label="A LITTLE PHOTO OF JL"
            />


            <div>

              <p
                className="text-2xl leading-9 text-[#756271]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                This is a little space for everything
                that makes JL feel like JL — his
                personality, little habits, memorable
                moments, and the things that make
                people smile.
              </p>


              <p
                className="mt-5 text-lg leading-8 text-[#9a7f8d]"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Add your own little story about Yence
                here whenever you're ready.
              </p>


              <div className="mt-6 flex flex-wrap gap-2">

                <CuteTag>
                  JL
                </CuteTag>

                <CuteTag>
                  Yence
                </CuteTag>

                <CuteTag>
                  Jaeyel
                </CuteTag>

                <CuteTag>
                  🦌
                </CuteTag>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            HOBBIES & INTERESTS
        ================================================= */}

        <section className="mt-8 rounded-[2.25rem] border border-[#f0dce5] bg-white/55 px-6 py-10 shadow-[0_12px_40px_rgba(180,130,155,0.07)] backdrop-blur-md sm:px-10">

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


        {/* =================================================
            FUN FACTS
        ================================================= */}

        <section className="mt-8 rounded-[2.25rem] border border-[#f0dce5] bg-white/55 px-6 py-10 shadow-[0_12px_40px_rgba(180,130,155,0.07)] backdrop-blur-md sm:px-10">

          <SectionTitle>
            ♡ little things about JL ♡
          </SectionTitle>


          <div className="mt-8">

            {facts.map((fact, index) => (

              <div
                key={index}
                className="flex gap-4 border-b border-[#ead6df] py-5 last:border-b-0"
              >

                <span className="shrink-0 text-[#bd91a5]">
                  ୨୧
                </span>


                <p
                  className="text-xl leading-8 text-[#756271]"
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


        {/* =================================================
            PHOTO ARCHIVE
        ================================================= */}

        <section
          id="jl-photo-archive"
          className="mt-8 rounded-[2.25rem] border border-[#f0dce5] bg-white/55 px-5 py-10 shadow-[0_12px_40px_rgba(180,130,155,0.07)] backdrop-blur-md sm:px-8"
        >

          <SectionTitle>
            ୨୧ JL photos ୨୧
          </SectionTitle>


          <div className="mt-2 text-center">

            <span
              className="text-lg text-[#b58a9d]"
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
                  className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-[#d8bbc8] bg-white/70 px-7 py-3 text-[9px] uppercase tracking-[0.25em] text-[#896e7d] transition hover:bg-white hover:shadow-md"
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
                    className={`h-9 min-w-9 rounded-full px-3 text-xs transition ${
                      currentPage === page
                        ? "bg-[#b98da1] text-white"
                        : "bg-white/70 text-[#987c8b] hover:bg-[#f5e1ea]"
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
                  className="text-[9px] uppercase tracking-[0.3em] text-[#ad91a0] underline underline-offset-4"
                >
                  close archive
                </button>

              </div>

            </>

          )}

        </section>


        {/* =================================================
            LITTLE ENDING
        ================================================= */}

        <footer className="px-4 py-16 text-center">

          <div className="flex justify-center gap-3 text-2xl tracking-[0.2em] text-[#c092a5]">
            <span>♡</span>
            <span>🦌</span>
            <span>୨୧</span>
            <span>✦</span>
          </div>


          <p
            className="mt-5 text-2xl text-[#9f778a]"
            style={{
              fontFamily:
                "'Comic Sans MS', cursive",
            }}
          >
            made with love for Yence ♡
          </p>


          <p className="mt-3 text-sm text-[#b49aa8]">
            JL · Yence · Jaeyel
          </p>


          <p className="mt-5 text-xs tracking-[0.15em] text-[#ceb5c1]">
            one little page in the HANEULZ archive
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

      <div className="text-sm text-[#c092a5]">
        ୨୧
      </div>


      <h2
        className="mt-1 text-4xl text-[#715d6b]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {children}
      </h2>


      <div className="mt-2 text-sm text-[#c092a5]">
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

    <div className="rounded-[1.4rem] border border-[#ead6df] bg-[#fffafd]/80 p-5 text-center transition hover:-translate-y-0.5 hover:shadow-sm">

      <p className="font-mono text-[7px] tracking-[0.25em] text-[#ad91a0]">
        {label}
      </p>


      <p
        className="mt-3 text-xl text-[#725f6c]"
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

    <span className="rounded-full border border-[#e8cbd7] bg-[#fff8fb] px-4 py-2 text-xs text-[#98788a]">
      {children} ♡
    </span>

  );

}


/* ============================================================
   SOFT CARD
============================================================ */

function SoftCard({ title, value }) {

  return (

    <div className="rounded-[1.6rem] border border-[#ead6df] bg-[#fffafd]/75 p-6">

      <div className="flex items-center gap-2">

        <Heart
          size={14}
          strokeWidth={1.5}
          className="text-[#c092a5]"
        />

        <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#ad91a0]">
          {title}
        </p>

      </div>


      <p
        className="mt-4 text-xl leading-8 text-[#756271]"
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
  label = "JL PHOTO",
}) {

  return (

    <div className="group relative overflow-hidden rounded-[2rem] border border-[#ead6df] bg-[#fffafd]">

      <div className="aspect-[4/5] w-full bg-gradient-to-br from-[#fffafd] via-[#fceff5] to-[#f5dfe9]">

        <div className="flex h-full flex-col items-center justify-center px-6 text-center">

          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/85 text-[#c092a5] shadow-sm">

            <Camera
              size={21}
              strokeWidth={1.3}
            />

            <span className="absolute -right-1 -top-1 text-xs">
              ♡
            </span>

          </div>


          <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.25em] text-[#ad91a0]">
            {label}
          </p>


          <p
            className="mt-2 text-lg text-[#b28b9d]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            photo goes here ♡
          </p>


          <div className="mt-3 text-xs text-[#d1a9b9]">
            🦌 ✦
          </div>

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

    <div className="group relative overflow-hidden rounded-[1.4rem] border border-[#ead6df] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="aspect-square overflow-hidden">

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


      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent px-3 pb-3 pt-10 opacity-0 transition group-hover:opacity-100">

        <div className="flex justify-end gap-1 text-white">
          <span>♡</span>
          <span>୨୧</span>
        </div>

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

    <div className="mt-8 rounded-[2rem] border border-dashed border-[#dfc3cf] bg-[#fffafd]/70 px-6 py-12 text-center">

      <div className="flex justify-center gap-2 text-[#c092a5]">
        <Camera
          size={25}
          strokeWidth={1.2}
        />

        <span className="text-lg">
          ♡
        </span>
      </div>


      <p
        className="mt-4 text-xl text-[#9d7e8d]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        the photo collection is waiting ♡
      </p>


      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#b49aa8]">
        Add JL photos to the photo archive whenever
        you're ready.
      </p>

      <div className="mt-4 text-xs text-[#d0aabb]">
        🦌 ୨୧ ✦
      </div>

    </div>

  );

}
