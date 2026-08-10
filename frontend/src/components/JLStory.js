import React, { useMemo, useState } from "react";
import { ArrowUpRight, Camera, Heart, Sparkles } from "lucide-react";

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
    <main className="min-h-screen bg-[#fdf6f8] px-4 py-6 text-[#463c42] sm:px-6">
      <div className="mx-auto max-w-5xl">

        {/* HEADER */}
        <header className="flex items-center justify-between py-4">
          <div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.3em] text-[#a56f85]">
              HANEULZ CORNER
            </p>

            <p className="mt-1 text-xs text-[#b894a3]">
              a little collection for JL ♡
            </p>
          </div>

          <div className="flex items-center gap-2 text-[#c47d99]">
            <span>♡</span>
            <span className="text-lg">✦</span>
            <span>♡</span>
          </div>
        </header>

        {/* HERO */}
        <section className="relative mt-5 overflow-hidden rounded-[2rem] border border-[#e8cbd6] bg-[#fffafb] p-5 shadow-[5px_6px_0_rgba(211,157,178,0.16)] sm:p-8">

          {/* little tape */}
          <div className="absolute left-1/2 top-0 h-7 w-24 -translate-x-1/2 -translate-y-1 rotate-[-2deg] bg-[#f4d9e3]/80" />

          <div className="relative rounded-[1.5rem] border border-[#f0dce3] bg-[#fffdfd] px-6 py-12 text-center sm:px-10">

            <div className="absolute left-4 top-5 rotate-[-8deg] text-xl text-[#d38ba5]">
              ✿
            </div>

            <div className="absolute right-5 top-6 rotate-[8deg] text-lg text-[#dca0b5]">
              ♡
            </div>

            <div className="absolute bottom-5 left-7 text-sm text-[#e2b2c4]">
              ✦
            </div>

            <div className="absolute bottom-6 right-7 text-sm text-[#d79bb0]">
              ୨୧
            </div>

            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.35em] text-[#ae7b8f]">
              a little page about
            </p>

            <h1 className="mt-3 font-serif text-7xl font-medium tracking-tight text-[#4b3d45] sm:text-8xl">
              JL
            </h1>

            <div className="mt-2 flex items-center justify-center gap-3 text-[#c9829c]">
              <span>♡</span>
              <span className="text-xs">✦</span>
              <span>♡</span>
            </div>

            <p className="mt-4 font-serif text-3xl text-[#67535e]">
              {profile.fullName}
            </p>

            <p className="mt-2 text-lg font-medium text-[#a56d83]">
              {profile.nickname} · {profile.alsoKnownAs}
            </p>

            <div className="mx-auto mt-8 max-w-md">
              <PhotoPlaceholder label="JL'S PHOTO" />
            </div>

            <div className="mt-6 inline-block rotate-[-2deg] rounded-xl bg-[#f8e5ec] px-5 py-2 text-sm font-medium text-[#9c647c] shadow-sm">
              Yence ♡
            </div>

            <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-8 text-[#75636c]">
              A tiny corner filled with little moments,
              favorite things, memories, and everything
              that makes JL special.
            </p>

          </div>
        </section>

        {/* QUICK LOOK */}
        <section className="mt-10">
          <SectionHeading
            eyebrow="01 · little details"
            title="a quick look"
          />

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <InfoCard label="KNOWN AS" value={profile.knownAs} />
            <InfoCard label="NICKNAME" value={profile.nickname} />
            <InfoCard label="ALSO KNOWN AS" value={profile.alsoKnownAs} />
            <InfoCard label="BIRTHDAY" value={profile.birthday} />
            <InfoCard label="NATIONALITY" value={profile.nationality} />
            <InfoCard label="MBTI" value={profile.mbti} />
          </div>
        </section>

        {/* ABOUT */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="02 · the little story"
            title="about JL"
          />

          <div className="mt-6 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">

            <PhotoPlaceholder label="A LITTLE PHOTO OF JL" />

            <div className="relative rounded-[1.75rem] border border-[#ead3dc] bg-[#fffafb] p-7 shadow-[4px_5px_0_rgba(213,163,181,0.12)]">

              <div className="absolute -right-2 -top-3 rotate-6 rounded-md bg-[#f5dce5] px-3 py-1 text-xs text-[#a97086] shadow-sm">
                little note ♡
              </div>

              <p className="font-serif text-2xl leading-9 text-[#51444b]">
                This is a little space for everything
                that makes JL feel like JL — his
                personality, habits, memorable moments,
                and the tiny details that make people
                smile.
              </p>

              <p className="mt-5 font-serif text-lg leading-8 text-[#79666f]">
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
        <section className="mt-12">
          <SectionHeading
            eyebrow="03 · things he likes"
            title="hobbies & interests"
          />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <SoftCard title="hobbies" value={profile.hobbies} />
            <SoftCard title="interests" value={profile.interests} />
            <SoftCard title="MBTI" value={profile.mbti} />
            <SoftCard title="favorites" value={profile.favorites} />
          </div>
        </section>

        {/* FACTS */}
        <section className="mt-12">
          <SectionHeading
            eyebrow="04 · tiny memories"
            title="little things about JL"
          />

          <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#ead3dc] bg-[#fffafb] shadow-[4px_5px_0_rgba(213,163,181,0.1)]">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="flex gap-4 border-b border-[#f0dfe5] px-6 py-5 last:border-0"
              >
                <span className="mt-1 text-[#c9809b]">♡</span>

                <p className="font-serif text-lg leading-8 text-[#5e5058]">
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PHOTO ARCHIVE */}
        <section id="jl-photo-archive" className="mt-12">
          <SectionHeading
            eyebrow="05 · photo diary"
            title="JL photos"
          />

          <div className="mt-6 rounded-[1.75rem] border border-[#ead3dc] bg-[#fffafb] p-5 shadow-[4px_5px_0_rgba(213,163,181,0.1)] sm:p-7">

            <div className="mb-6 flex items-center justify-between">
              <p className="font-serif text-lg text-[#725d67]">
                little snapshots ♡
              </p>

              <Sparkles
                size={18}
                strokeWidth={1.4}
                className="text-[#c9859e]"
              />
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
                    className="mx-auto mt-8 flex items-center gap-2 rounded-full bg-[#f3dce5] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8e5e73] transition hover:-translate-y-0.5 hover:bg-[#efd2df]"
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
                      className={`h-9 min-w-9 rounded-full px-3 text-xs font-semibold ${
                        currentPage === page
                          ? "bg-[#b97992] text-white"
                          : "bg-[#f8e8ee] text-[#956b7d]"
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
                  className="mx-auto mt-6 block text-xs text-[#a27b8b] underline underline-offset-4"
                >
                  close archive
                </button>
              </>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-16 text-center">
          <div className="text-xl text-[#c78099]">
            ♡ ✦ ୨୧ ✦ ♡
          </div>

          <p className="mt-4 font-serif text-2xl text-[#805b6c]">
            made with love for Yence ♡
          </p>

          <p className="mt-2 text-xs text-[#ad8c99]">
            JL · Yence · Jaeyel
          </p>
        </footer>

      </div>
    </main>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="text-center">
      <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-[#b17b8e]">
        {eyebrow}
      </p>

      <h2 className="mt-2 font-serif text-4xl font-medium text-[#51434b]">
        {title}
      </h2>

      <div className="mx-auto mt-3 flex w-fit items-center gap-2 text-[#cc86a0]">
        <span>♡</span>
        <span className="text-[9px]">✦</span>
        <span>♡</span>
      </div>
    </div>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-[1.4rem] border border-[#ead3dc] bg-[#fffafb] p-5 text-center shadow-[2px_3px_0_rgba(213,163,181,0.08)]">
      <p className="font-mono text-[7px] font-semibold tracking-[0.22em] text-[#aa8794]">
        {label}
      </p>

      <p className="mt-3 font-serif text-xl text-[#5b4b54]">
        {value}
      </p>
    </div>
  );
}

function CuteTag({ children }) {
  return (
    <span className="rounded-full border border-[#e5c4d0] bg-[#faeaf0] px-4 py-2 text-xs font-medium text-[#95677a]">
      {children}
    </span>
  );
}

function SoftCard({ title, value }) {
  return (
    <div className="rounded-[1.5rem] border border-[#ead3dc] bg-[#fffafb] p-6 shadow-[2px_3px_0_rgba(213,163,181,0.08)]">
      <div className="flex items-center gap-2">
        <Heart
          size={14}
          strokeWidth={1.5}
          className="text-[#c9809b]"
        />

        <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#a98794]">
          {title}
        </p>
      </div>

      <p className="mt-4 font-serif text-xl leading-8 text-[#5d4e56]">
        {value}
      </p>
    </div>
  );
}

function PhotoPlaceholder({ label }) {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#e7ced8] bg-[#fffafb] p-3 shadow-[4px_5px_0_rgba(213,163,181,0.12)]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#fffafb] via-[#f9e8ef] to-[#f1d9e3]">

        <div className="absolute left-3 top-3 rounded-md bg-white/80 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#a67989] shadow-sm">
          JL
        </div>

        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-[#c77f99] shadow-sm">
            <Camera size={21} strokeWidth={1.3} />
          </div>

          <p className="mt-5 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#a17c8b]">
            {label}
          </p>

          <p className="mt-2 font-serif text-lg text-[#a56e83]">
            photo goes here ♡
          </p>
        </div>
      </div>
    </div>
  );
}

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

function PhotoCard({ photo, index }) {
  const card = (
    <div className="group overflow-hidden rounded-[1.2rem] border border-[#e6ced7] bg-white p-2 shadow-[2px_3px_0_rgba(213,163,181,0.1)] transition duration-300 hover:-translate-y-1 hover:rotate-[0.5deg] hover:shadow-md">
      <div className="aspect-square overflow-hidden rounded-[0.9rem]">
        <img
          src={photo.src}
          alt={photo.alt || `JL photo ${index + 1}`}
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

function EmptyPhotoState() {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-[#dfbdca] bg-[#fff7fa] px-6 py-12 text-center">
      <Camera
        size={25}
        strokeWidth={1.2}
        className="mx-auto text-[#c77f99]"
      />

      <p className="mt-4 font-serif text-xl text-[#8e6577]">
        the photo collection is waiting ♡
      </p>

      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-[#a98b98]">
        Add JL photos to the archive whenever you're ready.
      </p>
    </div>
  );
}
