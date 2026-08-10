import React, { useMemo, useState } from "react";
import { ArrowUpRight, Camera, Heart, Film, Sparkles } from "lucide-react";

const PHOTOS_PER_PAGE = 25;

const profile = {
  fullName: "Han",
  knownAs: "Han",
  nickname: "Add later",
  alsoKnownAs: "Add later",
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

/*
============================================================
HAN PHOTO ARCHIVE
============================================================

Add photos here.

Example:

{
  src: "https://your-image-url.com/photo.jpg",
  alt: "Han photo",
  postUrl: "https://x.com/..."
}

postUrl is optional.
============================================================
*/

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

/*
============================================================
HAN MOVIE RECOMMENDATIONS
============================================================

Add as many movies as you want.

Only the title is displayed.

Example:

{
  title: "Your Movie Title"
}

You can keep adding movies underneath.
============================================================
*/

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
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-[#f7fbff] via-[#edf6ff] to-[#f8fbff] px-4 py-6 text-[#596b7c] sm:px-6">

      <div className="mx-auto max-w-5xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="flex items-center justify-between px-2 py-3">

          <div>
            <p className="font-mono text-[9px] tracking-[0.28em] text-[#7895ad]">
              HANEULZ ARCHIVE
            </p>

            <p className="mt-1 font-mono text-[8px] tracking-[0.22em] text-[#a5bacb]">
              HAN / 01
            </p>
          </div>

          <div className="text-xl text-[#82a9c8]">
            ୨୧
          </div>

        </header>


        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative mt-4 overflow-hidden rounded-[2.5rem] border border-[#d8e7f2] bg-white/65 px-6 py-14 text-center shadow-[0_18px_55px_rgba(105,145,175,0.10)] backdrop-blur-md sm:px-10">

          <div className="pointer-events-none absolute left-6 top-6 text-sm text-[#9dbbd2]">
            ୨୧
          </div>

          <div className="pointer-events-none absolute right-6 top-6 text-sm text-[#9dbbd2]">
            ♡
          </div>

          <div className="pointer-events-none absolute bottom-7 left-8 text-xs text-[#b8cfdf]">
            ✦
          </div>

          <div className="pointer-events-none absolute bottom-7 right-8 text-xs text-[#b8cfdf]">
            ୨୧
          </div>


          <p
            className="text-2xl text-[#6f91aa]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            ୨୧ a little page for Han ୨୧
          </p>


          <div className="mt-5 text-lg tracking-[0.3em] text-[#82a8c4]">
            ♡ ୨୧ ♡
          </div>


          <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.4em] text-[#88a4ba]">
            known as
          </p>


          <h1
            className="mt-2 text-7xl font-normal tracking-tight text-[#536b7d] sm:text-8xl"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Han
          </h1>


          <div className="mt-3 text-xl text-[#83a8c2]">
            ♡
          </div>


          <p
            className="mt-3 text-3xl text-[#536b7d]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            {profile.fullName}
          </p>


          <p
            className="mt-2 text-2xl text-[#6f91aa]"
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
            className="mt-5 text-xl text-[#7195ae]"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            Han ♡
          </p>


          <p
            className="mx-auto mt-4 max-w-lg text-lg leading-8 text-[#8195a5]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            a tiny collection of things about Han —
            little moments, favorite things, memories,
            and pieces of the person behind the name.
          </p>


          <div className="mt-6 text-xl text-[#82a8c3]">
            ˚₊‧꒰ა ♡ ໒꒱ ‧₊˚
          </div>

        </section>


        {/* =================================================
            QUICK LOOK
        ================================================= */}

        <section className="mt-8 rounded-[2.25rem] border border-[#dbe8f2] bg-white/60 px-6 py-10 shadow-[0_12px_40px_rgba(105,145,175,0.07)] backdrop-blur-md sm:px-10">

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
            ABOUT HAN
        ================================================= */}

        <section className="mt-8 rounded-[2.25rem] border border-[#dbe8f2] bg-white/60 px-6 py-10 shadow-[0_12px_40px_rgba(105,145,175,0.07)] backdrop-blur-md sm:px-10">

          <SectionTitle>
            ♡ about Han ♡
          </SectionTitle>


          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">

            <PhotoPlaceholder
              label="A LITTLE PHOTO OF HAN"
            />


            <div>

              <p
                className="text-2xl leading-9 text-[#607487]"
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
                className="mt-5 text-lg leading-8 text-[#8297a8]"
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


        {/* =================================================
            HOBBIES & INTERESTS
        ================================================= */}

        <section className="mt-8 rounded-[2.25rem] border border-[#dbe8f2] bg-white/60 px-6 py-10 shadow-[0_12px_40px_rgba(105,145,175,0.07)] backdrop-blur-md sm:px-10">

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

        <section className="mt-8 rounded-[2.25rem] border border-[#dbe8f2] bg-white/60 px-6 py-10 shadow-[0_12px_40px_rgba(105,145,175,0.07)] backdrop-blur-md sm:px-10">

          <SectionTitle>
            ♡ little things about Han ♡
          </SectionTitle>


          <div className="mt-8">

            {facts.map((fact, index) => (

              <div
                key={index}
                className="flex gap-4 border-b border-[#d9e5ee] py-5 last:border-b-0"
              >

                <span className="shrink-0 text-[#82a6c0]">
                  ୨୧
                </span>


                <p
                  className="text-xl leading-8 text-[#607487]"
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
            MOVIE RECOMMENDATIONS
        ================================================= */}

        <section className="mt-8 rounded-[2.25rem] border border-[#dbe8f2] bg-white/60 px-6 py-10 shadow-[0_12px_40px_rgba(105,145,175,0.07)] backdrop-blur-md sm:px-10">

          <SectionTitle>
            ୨୧ Han's movie recommendations ୨୧
          </SectionTitle>


          <div className="mx-auto mt-2 max-w-xl text-center">

            <span
              className="text-lg text-[#7796aa]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              ♡ movies Han recommends ♡
            </span>

          </div>


          {movieRecommendations.length === 0 ? (

            <div className="mt-8 rounded-[1.75rem] border border-dashed border-[#c9dce9] bg-[#f8fcff] px-6 py-12 text-center">

              <Film
                size={25}
                strokeWidth={1.2}
                className="mx-auto text-[#82a7c1]"
              />

              <p
                className="mt-4 text-xl text-[#7894a8]"
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
                    className="group flex items-center gap-4 rounded-[1.6rem] border border-[#d9e6ef] bg-[#fafdff]/80 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9f4fb] text-[#7199b4]">

                      <Film
                        size={17}
                        strokeWidth={1.4}
                      />

                    </div>


                    <div className="min-w-0">

                      <p className="font-mono text-[7px] uppercase tracking-[0.22em] text-[#9bb2c2]">
                        recommendation {String(index + 1).padStart(2, "0")}
                      </p>

                      <p
                        className="mt-1 text-xl text-[#5f7384]"
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', Georgia, serif",
                        }}
                      >
                        {movie.title}
                      </p>

                    </div>


                    <span className="ml-auto text-[#a0bbcc] opacity-0 transition group-hover:opacity-100">
                      ♡
                    </span>

                  </div>

                )
              )}

            </div>

          )}

        </section>


        {/* =================================================
            PHOTO ARCHIVE
        ================================================= */}

        <section
          id="han-photo-archive"
          className="mt-8 rounded-[2.25rem] border border-[#dbe8f2] bg-white/60 px-5 py-10 shadow-[0_12px_40px_rgba(105,145,175,0.07)] backdrop-blur-md sm:px-8"
        >

          <SectionTitle>
            ୨୧ Han photos ୨୧
          </SectionTitle>


          <div className="mt-2 text-center">

            <span
              className="text-lg text-[#7796aa]"
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
                  className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-[#bdd2e1] bg-white/70 px-7 py-3 text-[9px] uppercase tracking-[0.25em] text-[#718b9d] transition hover:bg-white hover:shadow-md"
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
                        ? "bg-[#7fa6c0] text-white"
                        : "bg-white/70 text-[#7c96a8] hover:bg-[#e8f3fa]"
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
                  className="text-[9px] uppercase tracking-[0.3em] text-[#91a8b7] underline underline-offset-4"
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

          <div className="text-2xl tracking-[0.2em] text-[#82a7c0]">
            ♡ ୨୧ ✦
          </div>


          <p
            className="mt-5 text-2xl text-[#7192a8]"
            style={{
              fontFamily:
                "'Comic Sans MS', cursive",
            }}
          >
            made with love for Han ♡
          </p>


          <p className="mt-3 text-sm text-[#9aafbd]">
            Han · HANEULZ
          </p>


          <p className="mt-5 text-xs tracking-[0.15em] text-[#c0d0db]">
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

      <div className="text-sm text-[#82a7c0]">
        ୨୧
      </div>


      <h2
        className="mt-1 text-4xl text-[#607487]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {children}
      </h2>


      <div className="mt-2 text-sm text-[#82a7c0]">
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

    <div className="rounded-[1.4rem] border border-[#d9e6ef] bg-[#fafdff]/80 p-5 text-center transition hover:-translate-y-0.5 hover:shadow-sm">

      <p className="font-mono text-[7px] tracking-[0.25em] text-[#91aaba]">
        {label}
      </p>


      <p
        className="mt-3 text-xl text-[#627789]"
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

    <span className="rounded-full border border-[#cfe0eb] bg-[#f7fbfe] px-4 py-2 text-xs text-[#7593a7]">
      {children} ♡
    </span>

  );

}


/* ============================================================
   SOFT CARD
============================================================ */

function SoftCard({ title, value }) {

  return (

    <div className="rounded-[1.6rem] border border-[#d9e6ef] bg-[#fafdff]/75 p-6">

      <div className="flex items-center gap-2">

        <Heart
          size={14}
          strokeWidth={1.5}
          className="text-[#82a7c0]"
        />

        <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-[#91aaba]">
          {title}
        </p>

      </div>


      <p
        className="mt-4 text-xl leading-8 text-[#65798a]"
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

    <div className="group relative overflow-hidden rounded-[2rem] border border-[#d9e6ef] bg-[#fafdff]">

      <div className="aspect-[4/5] w-full bg-gradient-to-br from-[#fbfdff] via-[#edf7fc] to-[#e1eff8]">

        <div className="flex h-full flex-col items-center justify-center px-6 text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-[#82a7c0] shadow-sm">

            <Camera
              size={21}
              strokeWidth={1.3}
            />

          </div>


          <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.25em] text-[#91aaba]">
            {label}
          </p>


          <p
            className="mt-2 text-lg text-[#82a2b7]"
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

    <div className="group relative overflow-hidden rounded-[1.4rem] border border-[#d9e6ef] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

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


      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 to-transparent px-3 pb-3 pt-10 opacity-0 transition group-hover:opacity-100">

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

    <div className="mt-8 rounded-[2rem] border border-dashed border-[#c8dce9] bg-[#fafdff]/70 px-6 py-12 text-center">

      <Camera
        size={25}
        strokeWidth={1.2}
        className="mx-auto text-[#82a7c0]"
      />


      <p
        className="mt-4 text-xl text-[#7895a9]"
        style={{
          fontFamily:
            "'Cormorant Garamond', Georgia, serif",
        }}
      >
        the photo collection is waiting ♡
      </p>


      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#9aafbd]">
        Add Han photos to the photo archive whenever
        you're ready.
      </p>

    </div>

  );

}
