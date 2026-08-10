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
  "Add another detail whenever you're ready.",
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
    <main className="min-h-screen bg-[#f3f9fd] px-4 py-6 text-[#405568] sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="flex items-center justify-between py-4">
          <div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#6289a5]">
              HANEULZ CORNER
            </p>

            <p className="mt-1 text-xs text-[#8caabd]">
              a little collection for Han ♡
            </p>
          </div>

          <div className="flex items-center gap-2 text-[#78a4c0]">
            <span>♡</span>
            <span className="text-lg">✦</span>
            <span>♡</span>
          </div>
        </header>


        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative mt-5 overflow-hidden rounded-[2rem] border border-[#c9dfed] bg-[#fbfdff] p-5 shadow-[5px_6px_0_rgba(121,165,193,0.14)] sm:p-8">

          <div className="absolute left-1/2 top-0 h-7 w-24 -translate-x-1/2 -translate-y-1 rotate-[2deg] bg-[#dcecf5]/80" />

          <div className="relative rounded-[1.5rem] border border-[#dce8ef] bg-white px-6 py-12 text-center sm:px-10">

            {/* tiny cat details */}

            <div className="absolute left-5 top-5 rotate-[-7deg] text-xl text-[#17212b]">
              ♡
            </div>

            <div className="absolute right-5 top-5 rotate-[7deg] text-[#17212b]">
              <Cat
                size={18}
                strokeWidth={1.5}
              />
            </div>

            <div className="absolute bottom-6 left-7 text-sm text-[#9fc1d5]">
              ✦
            </div>

            <div className="absolute bottom-6 right-7 text-sm text-[#7ea9c3]">
              ୨୧
            </div>


            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.35em] text-[#6e95ae]">
              a little page about
            </p>


            <h1 className="mt-3 font-serif text-7xl font-medium tracking-tight text-[#304b5d] sm:text-8xl">
              Han
            </h1>


            <div className="mt-2 flex items-center justify-center gap-3 text-[#6f9bb7]">
              <span>♡</span>
              <span className="text-xs">✦</span>
              <span>♡</span>
            </div>


            <p className="mt-4 font-serif text-3xl text-[#536d7e]">
              {profile.fullName}
            </p>


            <p className="mt-2 text-lg font-medium text-[#7198b0]">
              {profile.nickname}
            </p>


            {/* HERO PHOTO */}

            <div className="mx-auto mt-8 max-w-md">
              <PhotoPlaceholder label="HAN'S PHOTO" />
            </div>


            <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#e4f1f8] px-5 py-2 text-sm font-medium text-[#5d86a0] shadow-sm">
              <Cat
                size={14}
                strokeWidth={1.5}
              />
              hani ♡
            </div>


            <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-8 text-[#617988]">
              A tiny corner filled with little moments,
              favorite things, memories, and everything
              that makes Han special.
            </p>


            <div className="mt-5 flex items-center justify-center gap-2 text-[#8ab1c9]">
              <span>˚</span>
              <span>₊</span>
              <span>♡</span>
              <span>₊</span>
              <span>˚</span>
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
              label="FAVORITE"
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

            <PhotoPlaceholder
              label="A LITTLE PHOTO OF HAN"
            />


            <div className="relative rounded-[1.75rem] border border-[#cfe2ed] bg-[#fbfdff] p-7 shadow-[4px_5px_0_rgba(121,165,193,0.10)]">

              <div className="absolute -right-2 -top-3 rotate-6 rounded-md bg-[#e1eef6] px-3 py-1 text-xs text-[#658ba3] shadow-sm">
                little note ♡
              </div>


              <p className="font-serif text-2xl leading-9 text-[#3d5565]">
                This is a little space for everything
                that makes Han feel like Han — his
                personality, habits, memorable moments,
                and the tiny details that make people
                smile.
              </p>


              <p className="mt-5 font-serif text-lg leading-8 text-[#6b8290]">
                Add your own little story about Han
                here whenever you're ready.
              </p>


              <div className="mt-7 flex flex-wrap gap-2">
                <CuteTag>Han</CuteTag>
                <CuteTag>hani</CuteTag>
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


          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#cfe2ed] bg-[#fbfdff] shadow-[4px_5px_0_rgba(121,165,193,0.08)]">

            {facts.map((fact, index) => (

              <div
                key={index}
                className="flex gap-4 border-b border-[#dfebf2] px-6 py-5 last:border-0"
              >

                <span className="mt-1 text-[#76a2bc]">
                  ♡
                </span>


                <p className="font-serif text-lg leading-8 text-[#4d6473]">
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
            eyebrow="05 · things he recommends"
            title="movie recommendations"
          />


          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {movieRecommendations.map(
              (movie, index) => (

                <div
                  key={`${movie.title}-${index}`}
                  className="group flex items-center gap-4 rounded-[1.5rem] border border-[#cfe2ed] bg-[#fbfdff] p-5 shadow-[2px_3px_0_rgba(121,165,193,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-md"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e5f1f7] text-[#6894ae]">

                    <span className="text-base">
                      ♡
                    </span>

                  </div>


                  <div className="min-w-0">

                    <p className="font-mono text-[7px] font-semibold uppercase tracking-[0.2em] text-[#91a9b7]">
                      recommendation{" "}
                      {String(index + 1).padStart(2, "0")}
                    </p>


                    <p className="mt-1 font-serif text-xl text-[#4d6473]">
                      {movie.title}
                    </p>

                  </div>


                  <span className="ml-auto text-[#83a9be] opacity-0 transition group-hover:opacity-100">
                    ♡
                  </span>

                </div>

              )
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


          <div className="mt-6 rounded-[1.75rem] border border-[#cfe2ed] bg-[#fbfdff] p-5 shadow-[4px_5px_0_rgba(121,165,193,0.10)] sm:p-7">

            <div className="mb-6 flex items-center justify-between">

              <p className="font-serif text-lg text-[#5d7483]">
                little snapshots ♡
              </p>


              <div className="flex items-center gap-2">

                <Cat
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#202a31]"
                />

                <Sparkles
                  size={17}
                  strokeWidth={1.4}
                  className="text-[#78a4bd]"
                />

              </div>

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
                    className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-[#dcecf5] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#557b93] transition hover:-translate-y-0.5 hover:bg-[#d2e7f1]"
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
                          ? "bg-[#709bb5] text-white"
                          : "bg-[#e7f2f8] text-[#63869c]"
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
                  className="mx-auto mt-6 block text-xs text-[#7697a9] underline underline-offset-4"
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

          <div className="flex items-center justify-center gap-2 text-xl text-[#79a6bf]">
            <span>♡</span>
            <span>✦</span>
            <Cat
              size={17}
              strokeWidth={1.5}
              className="text-[#202a31]"
            />
            <span>✦</span>
            <span>♡</span>
          </div>


          <p className="mt-4 font-serif text-2xl text-[#5e8095]">
            made with love for Han ♡
          </p>


          <p className="mt-2 text-xs text-[#8ca6b4]">
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

      <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-[#7197ad]">
        {eyebrow}
      </p>


      <h2 className="mt-2 font-serif text-4xl font-medium text-[#3f5665]">
        {title}
      </h2>


      <div className="mx-auto mt-3 flex w-fit items-center gap-2 text-[#79a6bf]">
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
    <div className="rounded-[1.4rem] border border-[#cfe2ed] bg-[#fbfdff] p-5 text-center shadow-[2px_3px_0_rgba(121,165,193,0.07)]">

      <p className="font-mono text-[7px] font-semibold tracking-[0.22em] text-[#829eae]">
        {label}
      </p>


      <p className="mt-3 font-serif text-xl text-[#4b6271]">
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
    <span className="rounded-full border border-[#c9deea] bg-[#e8f3f8] px-4 py-2 text-xs font-medium text-[#62869d]">
      {children}
    </span>
  );
}


/* ============================================================
   SOFT CARD
============================================================ */

function SoftCard({ title, value }) {
  return (
    <div className="rounded-[1.5rem] border border-[#cfe2ed] bg-[#fbfdff] p-6 shadow-[2px_3px_0_rgba(121,165,193,0.07)]">

      <div className="flex items-center gap-2">

        <Heart
          size={14}
          strokeWidth={1.5}
          className="text-[#76a2bb]"
        />

        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#829dab]">
          {title}
        </p>

      </div>


      <p className="mt-4 font-serif text-xl leading-8 text-[#506775]">
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
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#cfe1eb] bg-[#fbfdff] p-3 shadow-[4px_5px_0_rgba(121,165,193,0.10)]">

      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#fbfdff] via-[#eaf5fa] to-[#d9ebf4]">

        {/* tiny cat sticker */}

        <div className="absolute right-3 top-3 rounded-full bg-white/85 p-2 text-[#202a31] shadow-sm">
          <Cat
            size={15}
            strokeWidth={1.5}
          />
        </div>


        <div className="flex h-full flex-col items-center justify-center text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-[#719db7] shadow-sm">

            <Camera
              size={21}
              strokeWidth={1.3}
            />

          </div>


          <p className="mt-5 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#7696a7]">
            {label}
          </p>


          <p className="mt-2 font-serif text-lg text-[#6892aa]">
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
    <div className="group overflow-hidden rounded-[1.2rem] border border-[#cfe0e9] bg-white p-2 shadow-[2px_3px_0_rgba(121,165,193,0.08)] transition duration-300 hover:-translate-y-1 hover:rotate-[0.4deg] hover:shadow-md">

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
    <div className="rounded-[1.5rem] border border-dashed border-[#bdd6e4] bg-[#f5fafe] px-6 py-12 text-center">

      <div className="flex items-center justify-center gap-2">

        <Camera
          size={24}
          strokeWidth={1.2}
          className="text-[#719db6]"
        />

        <Cat
          size={17}
          strokeWidth={1.5}
          className="text-[#202a31]"
        />

      </div>


      <p className="mt-4 font-serif text-xl text-[#608499]">
        the photo collection is waiting ♡
      </p>


      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#8ba4b2]">
        Add Han photos to the archive whenever
        you're ready.
      </p>

    </div>
  );
}
