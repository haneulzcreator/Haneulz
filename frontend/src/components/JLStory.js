import React, { useState } from "react";
import { Camera, Heart, Sparkles, ArrowDown, Plus } from "lucide-react";
export default function JLPage() {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [visiblePhotos, setVisiblePhotos] = useState(9);
  const photos = Array.from({ length: 27 }, (_, index) => ({
    id: index + 1,
    label: `JL PHOTO ${String(index + 1).padStart(2, "0")}`,
  }));
  const displayedPhotos = showAllPhotos
    ? photos.slice(0, visiblePhotos)
    : photos.slice(0, 9);
  return (
    <main className="min-h-screen bg-[#eee3df] px-2 py-2 text-[#40383e] sm:px-4 sm:py-4">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-20 h-[420px] w-[420px] rounded-full bg-[#e7b7c5]/30 blur-[110px]" />
        <div className="absolute -right-40 top-[650px] h-[460px] w-[460px] rounded-full bg-[#c5b9d7]/25 blur-[120px]" />
        <div className="absolute -left-48 top-[1500px] h-[500px] w-[500px] rounded-full bg-[#b7d0d0]/24 blur-[130px]" />
        <div className="absolute -right-40 top-[2700px] h-[500px] w-[500px] rounded-full bg-[#dfb6c6]/22 blur-[130px]" />
      </div>
      <article className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] bg-[#f6eee9]/90 shadow-[0_25px_90px_rgba(67,52,62,0.15)] backdrop-blur-[2px] sm:rounded-[2.5rem] lg:rounded-[3rem]">
        {/* =====================================================
            COVER
        ===================================================== */}
        <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden px-6 py-16 sm:min-h-[700px] sm:px-10 md:min-h-[760px]">
          <div className="absolute left-7 top-8 rotate-[-5deg] text-[9px] uppercase tracking-[0.4em] text-[#856779] sm:left-12 sm:top-12 sm:text-[10px]">
            personal archive
          </div>
          <div className="absolute right-7 top-9 text-[8px] uppercase tracking-[0.55em] text-[#806c7b] sm:right-12 sm:top-12 sm:text-[10px]">
            JL / 01
          </div>
          {/* giant background initials */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[190px] font-bold tracking-[-0.12em] text-white/45 sm:text-[280px] md:text-[360px]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            JL
          </div>
          <div className="relative z-10 w-full text-center">
            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#b97b98] sm:w-16" />
              <Sparkles
                size={18}
                strokeWidth={1}
                className="text-[#8170a0]"
              />
              <span className="h-px w-10 bg-[#b97b98] sm:w-16" />
            </div>
            <p className="text-[9px] uppercase tracking-[0.75em] text-[#806577] sm:text-[10px] sm:tracking-[0.9em]">
              JAEYEL
            </p>
            <h1
              className="mt-5 text-[5rem] leading-[0.8] tracking-[0.035em] text-[#40373e] sm:text-[7rem] md:text-[9rem] lg:text-[11rem]"
              style={{
                fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              JL
            </h1>
            <div className="mx-auto mt-9 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b97b98]" />
              <span className="text-sm text-[#8270a0]">✦</span>
              <span className="h-px w-14 bg-[#b97b98]" />
            </div>
            <p
              className="mx-auto mt-7 max-w-[340px] text-[18px] leading-7 tracking-[0.075em] text-[#665b63] sm:max-w-lg sm:text-xl sm:leading-8"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              a little corner dedicated to JL
            </p>
            <div
              className="mx-auto mt-9 inline-block rotate-[-2deg] border border-[#c596ac] bg-[#fff8f3]/80 px-5 py-2.5 text-[10px] tracking-[0.12em] text-[#765d6d] shadow-[5px_6px_0_rgba(115,82,104,0.08)]"
              style={{ fontFamily: "'Comic Sans MS', cursive" }}
            >
              saved here, just because ♡
            </div>
          </div>
          <div className="absolute bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#897281]">
            <span className="text-[7px] uppercase tracking-[0.5em]">
              scroll
            </span>
            <ArrowDown size={15} strokeWidth={1} />
          </div>
        </section>
        {/* =====================================================
            INTRO IMAGE
        ===================================================== */}
        <div className="px-5 sm:px-8 md:px-12 lg:px-16">
          <ImagePlaceholder
            label="JL"
            large
            rotate="-1deg"
          />
        </div>
        {/* =====================================================
            ABOUT JL
        ===================================================== */}
        <section className="px-6 pb-8 pt-6 sm:px-9 sm:pb-10 sm:pt-8 md:px-16 lg:px-24">
          <SectionHeader
            number="01"
            title="About JL"
            icon={<Heart size={17} strokeWidth={1.2} />}
          />
          <div className="mt-6 max-w-4xl">
            <StoryParagraph>
              JL, whose name is Jaeyel, is the kind of person who can quietly
              become one of the most memorable people in a room. There's this
              calmness to him, but once he's on stage or around the people he's
              comfortable with, you get to see so many different sides of him.
            </StoryParagraph>
            <StoryParagraph>
              From his dancing and vocals to the little expressions he makes
              without even realizing it, there's always something about JL that
              makes you want to keep watching. And then there's the smile.
              Obviously, we have to mention the smile.
            </StoryParagraph>
            <StoryParagraph>
              This page is basically a little collection of those things —
              the moments, details, and memories that make JL feel like JL.
            </StoryParagraph>
          </div>
        </section>
        {/* =====================================================
            PROFILE CARD
        ===================================================== */}
        <section className="mx-5 my-5 sm:mx-8 sm:my-7 md:mx-12 lg:mx-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d6c3ca] bg-[#fff8f3]/65 px-6 py-8 shadow-[0_12px_35px_rgba(82,61,76,0.08)] sm:rounded-[2.5rem] sm:px-9 sm:py-10 md:px-14">
            <div className="absolute -right-10 -top-10 text-[130px] tracking-[-0.1em] text-[#c9a9bb]/15">
              JL
            </div>
            <p className="text-[8px] uppercase tracking-[0.65em] text-[#8a6b7d]">
              little profile
            </p>
            <div className="relative mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <InfoItem title="Name" value="Jaeyel" />
              <InfoItem title="Nickname" value="JL" />
              <InfoItem title="Known For" value="HANEULZ" />
              <InfoItem title="Home" value="AHOF" />
            </div>
          </div>
        </section>
        {/* =====================================================
            LITTLE THINGS
        ===================================================== */}
        <section className="px-6 pb-9 pt-7 sm:px-9 sm:pb-11 sm:pt-9 md:px-16 lg:px-24">
          <SectionHeader
            number="02"
            title="The Little Things"
            icon={<Sparkles size={17} strokeWidth={1.2} />}
          />
          <div className="mt-6 max-w-4xl">
            <StoryParagraph>
              JL has so many tiny habits and details that make him easy to
              recognize. The way he reacts when something surprises him. The
              little expressions he makes. The way his smile appears when he's
              genuinely having fun.
            </StoryParagraph>
            <StoryParagraph>
              He's also someone who seems to have a naturally playful side,
              especially around the people he's close to. Sometimes it's a
              joke, sometimes it's teasing, and sometimes it's just him doing
              something completely random.
            </StoryParagraph>
            <StoryParagraph>
              And honestly, those tiny things are usually the moments that end
              up becoming the most memorable.
            </StoryParagraph>
          </div>
        </section>
        {/* =====================================================
            QUOTE
        ===================================================== */}
        <section className="relative mx-5 my-7 sm:mx-8 sm:my-9 md:mx-14 lg:mx-20">
          <div className="absolute inset-x-2 top-3 bottom-[-7px] rotate-[1deg] rounded-[2rem] bg-[#d8c4d8]/45 sm:rounded-[2.5rem]" />
          <div className="absolute inset-x-1 top-1 bottom-[-3px] rotate-[-1deg] rounded-[2rem] bg-[#e9c2cf]/45 sm:rounded-[2.5rem]" />
          <div className="relative rounded-[2rem] border border-[#c49aac]/55 bg-[#fff5f0] px-6 py-11 text-center shadow-[0_15px_45px_rgba(80,59,76,0.1)] sm:rounded-[2.5rem] sm:px-10 sm:py-14 md:px-16">
            <span className="absolute left-6 top-5 text-5xl text-[#b47d99]/30 sm:left-9 sm:top-6">
              “
            </span>
            <span className="absolute bottom-[-10px] right-7 text-7xl text-[#a78bac]/20 sm:right-12 sm:text-9xl">
              ”
            </span>
            <p className="mb-6 text-[8px] uppercase tracking-[0.65em] text-[#886c7c]">
              a little JL thought
            </p>
            <blockquote
              className="mx-auto max-w-3xl text-[2.2rem] leading-[1.13] tracking-[0.055em] text-[#433940] sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              Some moments are small,
              <br />
              but they're still worth keeping.
            </blockquote>
            <div className="mx-auto mt-8 h-px w-16 bg-[#ba849e]" />
          </div>
        </section>
        {/* =====================================================
            PHOTO ARCHIVE HEADER
        ===================================================== */}
        <section className="px-6 pb-4 pt-9 sm:px-9 sm:pb-5 sm:pt-11 md:px-16 lg:px-24">
          <div className="flex items-end justify-between gap-5">
            <div className="min-w-0">
              <SectionHeader
                number="03"
                title="Photo Archive"
                icon={<Camera size={17} strokeWidth={1.2} />}
              />
            </div>
            {/* ADMIN BUTTON */}
            <button
              type="button"
              className="hidden shrink-0 items-center gap-2 rounded-full border border-[#c59aae] bg-[#fff7f2] px-4 py-2 text-[8px] uppercase tracking-[0.3em] text-[#765c6d] transition hover:bg-[#f5e2e6] sm:flex"
            >
              <Plus size={12} strokeWidth={1.5} />
              Add Photo
            </button>
          </div>
          <div className="mt-5 flex items-center justify-between gap-4 sm:mt-6">
            <p
              className="max-w-md text-[15px] leading-6 tracking-[0.05em] text-[#766a71] sm:text-base"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              A growing collection of JL moments, saved one picture at a time.
            </p>
            <span className="shrink-0 text-[8px] uppercase tracking-[0.35em] text-[#9a7d8d]">
              {photos.length} photos
            </span>
          </div>
        </section>
        {/* =====================================================
            MOBILE ADMIN BUTTON
        ===================================================== */}
        <div className="px-6 pb-4 sm:hidden">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#c59aae] bg-[#fff7f2] px-4 py-3 text-[8px] uppercase tracking-[0.3em] text-[#765c6d]"
          >
            <Plus size={12} strokeWidth={1.5} />
            Admin · Add Photo
          </button>
        </div>
        {/* =====================================================
            3 × 3 PHOTO GRID
        ===================================================== */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="grid grid-cols-3 gap-1.5 overflow-hidden rounded-[1.3rem] bg-[#d9cbd0] p-1.5 sm:gap-2 sm:rounded-[2rem] sm:p-2">
            {displayedPhotos.map((photo) => (
              <PhotoTile
                key={photo.id}
                number={photo.id}
              />
            ))}
          </div>
        </section>
        {/* =====================================================
            VIEW ALL / LOAD MORE
        ===================================================== */}
        <section className="px-6 pb-10 pt-5 text-center sm:px-9 sm:pb-12 sm:pt-6">
          {!showAllPhotos ? (
            <button
              type="button"
              onClick={() => setShowAllPhotos(true)}
              className="group inline-flex items-center gap-3 border-b border-[#aa7e91] pb-2 text-[9px] uppercase tracking-[0.45em] text-[#765d6c] transition hover:text-[#b16e8c]"
            >
              View All Photos
              <ArrowDown
                size={13}
                strokeWidth={1.2}
                className="transition group-hover:translate-y-1"
              />
            </button>
          ) : (
            <div className="flex flex-col items-center gap-5">
              {visiblePhotos < photos.length && (
                <button
                  type="button"
                  onClick={() =>
                    setVisiblePhotos((current) =>
                      Math.min(current + 9, photos.length)
                    )
                  }
                  className="rounded-full border border-[#b98ba0] bg-[#fff7f2] px-6 py-3 text-[8px] uppercase tracking-[0.4em] text-[#765c6d] transition hover:bg-[#f4dfe5]"
                >
                  Load More Photos
                </button>
              )}
              {visiblePhotos >= photos.length && (
                <p className="text-[8px] uppercase tracking-[0.45em] text-[#9a7b8b]">
                  you've reached the end ♡
                </p>
              )}
              <button
                type="button"
                onClick={() => {
                  setShowAllPhotos(false);
                  setVisiblePhotos(9);
                }}
                className="text-[8px] uppercase tracking-[0.35em] text-[#967487] underline underline-offset-4"
              >
                Show Less
              </button>
            </div>
          )}
        </section>
        {/* =====================================================
            FINAL NOTE
        ===================================================== */}
        <section className="relative mx-5 mb-8 overflow-hidden rounded-[2rem] border border-[#d4c4ca] bg-[#fff7f2]/75 px-6 py-10 text-center sm:mx-8 sm:mb-10 sm:rounded-[2.5rem] sm:px-10 sm:py-12 md:mx-12 lg:mx-16">
          <div className="absolute -right-8 -top-8 text-[120px] text-[#c9a8b9]/10">
            JL
          </div>
          <p className="relative text-[8px] uppercase tracking-[0.65em] text-[#8b6d7c]">
            one more thing
          </p>
          <h2
            className="relative mt-4 text-4xl tracking-[0.055em] text-[#423940] sm:text-5xl"
            style={{
              fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
            }}
          >
            Keep the little moments.
          </h2>
          <p
            className="relative mx-auto mt-5 max-w-xl text-[16px] leading-7 tracking-[0.06em] text-[#70646c] sm:text-lg sm:leading-8"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Because sometimes those are the ones you remember the longest.
          </p>
        </section>
        {/* =====================================================
            FOOTER
        ===================================================== */}
        <div className="flex items-center justify-center gap-4 pb-10 pt-1 sm:gap-5 sm:pb-12">
          <span className="h-px w-10 bg-[#b97999] sm:w-16" />
          <Sparkles
            size={14}
            strokeWidth={1}
            className="text-[#7c6a99]"
          />
          <span className="h-px w-10 bg-[#b97999] sm:w-16" />
        </div>
      </article>
    </main>
  );
}
/* =============================================================
   SECTION HEADER
============================================================= */
function SectionHeader({ number, title, icon }) {
  return (
    <div>
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="text-[8px] tracking-[0.55em] text-[#806477] sm:text-[9px] sm:tracking-[0.65em]">
          {number}
        </span>
        <span className="h-px w-6 bg-[#b97999] sm:w-9" />
        {icon && (
          <span className="text-[#77639a]">
            {icon}
          </span>
        )}
      </div>
      <h2
        className="mt-3 text-[2.15rem] leading-[1.04] tracking-[0.075em] text-[#423943] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl"
        style={{
          fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
        }}
      >
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-2 sm:mt-5">
        <span className="h-[2px] w-6 bg-[#b97999] sm:w-9" />
        <span className="h-px w-12 bg-[#c7a5b7] sm:w-20" />
      </div>
    </div>
  );
}
/* =============================================================
   STORY PARAGRAPH
============================================================= */
function StoryParagraph({ children }) {
  return (
    <p
      className="mb-3 text-[16px] leading-[1.7] tracking-[0.06em] text-[#615861] sm:mb-3.5 sm:text-[17px] sm:leading-[1.76] md:text-[18px] md:leading-[1.8]"
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      {children}
    </p>
  );
}
/* =============================================================
   PROFILE ITEM
============================================================= */
function InfoItem({ title, value }) {
  return (
    <div className="border-l border-[#cdaabc] pl-4">
      <p className="text-[7px] uppercase tracking-[0.5em] text-[#98798a]">
        {title}
      </p>
      <p
        className="mt-2 text-xl tracking-[0.04em] text-[#4b4148]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {value}
      </p>
    </div>
  );
}
/* =============================================================
   PHOTO TILE
============================================================= */
function PhotoTile({ number }) {
  return (
    <button
      type="button"
      className="group relative aspect-square overflow-hidden bg-[#cdbbc4] text-left"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#cf8faa] via-[#a493b8] to-[#75a8b1] transition duration-500 group-hover:scale-105" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/15 sm:h-11 sm:w-11">
          <Camera
            size={15}
            strokeWidth={1}
            className="text-white/85 sm:size-[18px]"
          />
        </div>
      </div>
      <div className="absolute bottom-2 left-2 text-[6px] uppercase tracking-[0.2em] text-white/80 sm:bottom-3 sm:left-3 sm:text-[7px]">
        JL · {String(number).padStart(2, "0")}
      </div>
    </button>
  );
}
/* =============================================================
   IMAGE PLACEHOLDER
============================================================= */
function ImagePlaceholder({
  label,
  large = false,
  rotate = "0deg",
}) {
  return (
    <div
      className="relative w-full"
      style={{
        transform: `rotate(${rotate})`,
        marginBottom: "-5px",
      }}
    >
      <div className="absolute left-1/2 top-[-8px] z-20 h-7 w-20 -translate-x-1/2 rotate-[-2deg] bg-[#dbc99b]/75 shadow-sm sm:h-8 sm:w-28" />
      <div className="absolute inset-2 rounded-[1.8rem] bg-[#594b5b]/15 blur-md sm:rounded-[2.5rem]" />
      <div
        className={`relative w-full overflow-hidden rounded-[1.8rem] border-[6px] border-[#fffaf5] bg-[#d9cdcf] shadow-[0_16px_40px_rgba(63,49,64,0.14)] sm:rounded-[2.5rem] sm:border-[8px] ${
          large ? "aspect-[16/9]" : "aspect-[4/3]"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#d28eaa] via-[#a08fbc] to-[#77adb7]" />
        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "15px 15px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/65 bg-white/20 sm:h-14 sm:w-14">
              <Camera
                size={22}
                strokeWidth={1}
                className="text-white/85"
              />
            </div>
            <p className="text-[8px] uppercase tracking-[0.55em] text-white/90 sm:text-[10px] sm:tracking-[0.7em]">
              {label}
            </p>
            <div className="mx-auto mt-4 h-px w-12 bg-white/60" />
            <p
              className="mt-3 text-xs tracking-[0.05em] text-white/75 sm:text-sm"
              style={{ fontFamily: "'Comic Sans MS', cursive" }}
            >
              admin image goes here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
