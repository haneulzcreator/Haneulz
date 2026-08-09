import React, { useState } from "react";
import {
  Camera,
  Heart,
  Sparkles,
  Plus,
  ArrowDown,
  Star,
} from "lucide-react";
export default function JLStory() {
  const [showAll, setShowAll] = useState(false);
  const [visiblePhotos, setVisiblePhotos] = useState(9);
  // Temporary preview data.
  // Later, these can come from your admin system.
  const photos = Array.from({ length: 27 }, (_, index) => ({
    id: index + 1,
  }));
  const visible = showAll
    ? photos.slice(0, visiblePhotos)
    : photos.slice(0, 9);
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-[#f8eee9] text-[#413a40] shadow-[0_25px_80px_rgba(75,53,66,0.12)]">
      {/* BACKGROUND DECOR */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#e7a9bd]/25 blur-[90px]" />
        <div className="absolute -right-32 top-[700px] h-80 w-80 rounded-full bg-[#aaa2d0]/25 blur-[100px]" />
        <div className="absolute -left-32 top-[1500px] h-96 w-96 rounded-full bg-[#9fc7c8]/20 blur-[110px]" />
        <div className="absolute right-[-150px] top-[2400px] h-96 w-96 rounded-full bg-[#e8b1bd]/25 blur-[110px]" />
      </div>
      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="relative min-h-[650px] px-6 py-16 sm:px-10 sm:py-20 md:min-h-[720px] md:px-16 lg:px-24">
        <div className="absolute left-6 top-8 rotate-[-4deg] text-[8px] uppercase tracking-[0.5em] text-[#8b6b7d] sm:left-10">
          another little corner
        </div>
        <div className="absolute right-6 top-8 text-[8px] uppercase tracking-[0.5em] text-[#8b6b7d] sm:right-10">
          JL / 01
        </div>
        {/* giant background letters */}
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none text-[230px] font-bold leading-none tracking-[-0.14em] text-[#d7b7c5]/20 sm:text-[330px] md:text-[430px]"
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          JL
        </div>
        <div className="relative z-10 flex min-h-[570px] flex-col justify-center">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#b97999]" />
            <Sparkles
              size={15}
              strokeWidth={1.2}
              className="text-[#756697]"
            />
            <span className="text-[8px] uppercase tracking-[0.45em] text-[#806477]">
              getting to know him
            </span>
          </div>
          <h1
            className="max-w-4xl text-[5rem] leading-[0.82] tracking-[0.045em] sm:text-[7rem] md:text-[9rem] lg:text-[11rem]"
            style={{
              fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
            }}
          >
            JL
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span
              className="text-xl tracking-[0.08em] text-[#645660] sm:text-2xl"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Jay Lawrence Gaspar
            </span>
            <span className="text-[#b97999]">·</span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#856679]">
              Yence · Jaeyel
            </span>
          </div>
          <p
            className="mt-8 max-w-xl text-[18px] leading-8 tracking-[0.055em] text-[#6d6169] sm:text-xl"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            A little space for the things that make JL,
            well... JL.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <span className="rotate-[-2deg] rounded-sm bg-[#fff8ed] px-4 py-2 text-[8px] uppercase tracking-[0.25em] shadow-[3px_4px_0_rgba(103,75,91,0.08)]">
              JL
            </span>
            <span className="rotate-[2deg] rounded-sm bg-[#ead7e3] px-4 py-2 text-[8px] uppercase tracking-[0.25em] shadow-[3px_4px_0_rgba(103,75,91,0.08)]">
              Yence
            </span>
            <span className="rotate-[-1deg] rounded-sm bg-[#dce9e7] px-4 py-2 text-[8px] uppercase tracking-[0.25em] shadow-[3px_4px_0_rgba(103,75,91,0.08)]">
              Jaeyel
            </span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#8b7180]">
          <span className="text-[7px] uppercase tracking-[0.5em]">
            keep scrolling
          </span>
          <ArrowDown size={14} strokeWidth={1} />
        </div>
      </section>
      {/* =====================================================
          HERO IMAGE
      ===================================================== */}
      <section className="relative px-5 sm:px-9 md:px-14 lg:px-20">
        <ImagePlaceholder
          label="JL"
          large
          rotation="-1deg"
        />
      </section>
      {/* =====================================================
          WHO IS JL
      ===================================================== */}
      <section className="relative px-6 pb-10 pt-10 sm:px-10 sm:pt-14 md:px-16 lg:px-24">
        <SectionTitle
          number="01"
          title="Who is JL?"
        />
        <div className="mt-7 max-w-4xl">
          <Paragraph>
            Jay Lawrence Gaspar, known as JL, is someone whose personality
            cannot really be captured in just one sentence. There are the
            obvious things people notice first, but then there are all the
            smaller details that make him feel familiar.
          </Paragraph>
          <Paragraph>
            This little corner is for those details. The hobbies, favorites,
            random facts, little habits, and moments that make you understand
            the person behind the name JL.
          </Paragraph>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <MiniNote text="Jay Lawrence Gaspar" rotate="-2deg" />
          <MiniNote text="JL" rotate="2deg" />
          <MiniNote text="Yence" rotate="-1deg" />
          <MiniNote text="Jaeyel" rotate="3deg" />
        </div>
      </section>
      {/* =====================================================
          GETTING TO KNOW JL
      ===================================================== */}
      <section className="relative px-6 py-10 sm:px-10 sm:py-14 md:px-16 lg:px-24">
        <SectionTitle
          number="02"
          title="Getting To Know JL"
        />
        <p
          className="mt-5 max-w-2xl text-[16px] leading-7 tracking-[0.05em] text-[#756971] sm:text-lg"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}
        >
          More than just a name — a collection of the little things we know
          about him.
        </p>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            label="FULL NAME"
            value="Jay Lawrence Gaspar"
            type="cream"
          />
          <InfoCard
            label="KNOWN AS"
            value="JL"
            type="pink"
          />
          <InfoCard
            label="NICKNAMES"
            value="Yence · Jaeyel"
            type="blue"
          />
          <InfoCard
            label="HOBBIES"
            value="Add later"
            type="purple"
          />
          <InfoCard
            label="LIKES"
            value="Add later"
            type="green"
          />
          <InfoCard
            label="FAVORITES"
            value="Add later"
            type="yellow"
          />
        </div>
      </section>
      {/* =====================================================
          MORE ABOUT HIM
      ===================================================== */}
      <section className="relative px-6 py-10 sm:px-10 sm:py-14 md:px-16 lg:px-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d5bdc8] bg-[#fff7f1]/75 p-7 sm:rounded-[2.5rem] sm:p-10 md:p-14">
          <div className="absolute -right-8 -top-8 text-[130px] font-bold tracking-[-0.12em] text-[#d6b5c5]/20">
            JL
          </div>
          <div className="relative">
            <div className="flex items-center gap-3">
              <Heart
                size={16}
                strokeWidth={1.2}
                className="text-[#b56f8d]"
              />
              <p className="text-[8px] uppercase tracking-[0.55em] text-[#87697b]">
                more about him
              </p>
            </div>
            <h3
              className="mt-4 text-4xl tracking-[0.06em] text-[#433a40] sm:text-5xl"
              style={{
                fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              The little details.
            </h3>
            <div className="mt-6 max-w-3xl">
              <Paragraph>
                This section can grow with the archive. Hobbies, interests,
                favorite things, habits, personality traits, funny facts —
                anything that feels like something worth knowing about JL.
              </Paragraph>
              <Paragraph>
                Instead of having to redesign this page whenever something new
                is added, these details can eventually be managed through the
                admin side of HANEULZ.
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          LITTLE THINGS
      ===================================================== */}
      <section className="relative px-6 py-10 sm:px-10 sm:py-14 md:px-16 lg:px-24">
        <SectionTitle
          number="03"
          title="The Little Things"
        />
        <div className="mt-8 grid gap-7 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <ImagePlaceholder
            label="A JL MOMENT"
            rotation="2deg"
          />
          <div className="md:pl-4">
            <Paragraph>
              Sometimes the smallest things end up being the most memorable.
              A reaction, a smile, a random habit, or something that only
              becomes noticeable after you've seen it a hundred times.
            </Paragraph>
            <Paragraph>
              This section can become a collection of those tiny JL moments —
              the things that don't necessarily need a whole story, but still
              deserve a place here.
            </Paragraph>
          </div>
        </div>
      </section>
      {/* =====================================================
          FAVORITES / INTERESTS
      ===================================================== */}
      <section className="relative px-6 py-10 sm:px-10 sm:py-14 md:px-16 lg:px-24">
        <SectionTitle
          number="04"
          title="A Few More Things"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <LargeNote
            icon={<Star size={17} strokeWidth={1.2} />}
            title="Hobbies"
            text="This can be filled in from the admin panel."
            rotation="-1deg"
          />
          <LargeNote
            icon={<Heart size={17} strokeWidth={1.2} />}
            title="Favorite Things"
            text="Favorite food, music, colors, games, or anything else."
            rotation="1deg"
          />
          <LargeNote
            icon={<Sparkles size={17} strokeWidth={1.2} />}
            title="Random Facts"
            text="The fun little details that don't fit anywhere else."
            rotation="1deg"
          />
          <LargeNote
            icon={<Plus size={17} strokeWidth={1.2} />}
            title="More"
            text="This section can grow whenever you want."
            rotation="-2deg"
          />
        </div>
      </section>
      {/* =====================================================
          PHOTO ARCHIVE
      ===================================================== */}
      <section className="relative px-5 pb-8 pt-12 sm:px-9 sm:pb-10 sm:pt-16 md:px-14 lg:px-20">
        <div className="flex items-end justify-between gap-5">
          <SectionTitle
            number="05"
            title="Photo Archive"
          />
          <div className="hidden shrink-0 items-center gap-2 rounded-full border border-[#c49bad] bg-[#fff8f3] px-4 py-2 text-[7px] uppercase tracking-[0.35em] text-[#795e70] sm:flex">
            <Camera size={11} strokeWidth={1.2} />
            Admin
          </div>
        </div>
        <div className="mt-6 flex items-end justify-between gap-4">
          <p
            className="max-w-md text-[16px] leading-7 tracking-[0.05em] text-[#746870] sm:text-lg"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Little moments, saved here one picture at a time.
          </p>
          <span className="shrink-0 text-[7px] uppercase tracking-[0.4em] text-[#9a7b8a]">
            {photos.length} photos
          </span>
        </div>
        <div className="mt-7 grid grid-cols-3 gap-1.5 overflow-hidden rounded-[1.5rem] bg-[#d4c5ca] p-1.5 sm:gap-2 sm:rounded-[2rem] sm:p-2">
          {visible.map((photo) => (
            <PhotoTile
              key={photo.id}
              number={photo.id}
            />
          ))}
        </div>
        <div className="flex justify-center pt-7">
          {!showAll ? (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="group flex items-center gap-3 border-b border-[#a8778d] pb-2 text-[8px] uppercase tracking-[0.45em] text-[#775c6d]"
            >
              View All Photos
              <ArrowDown
                size={12}
                strokeWidth={1}
                className="transition group-hover:translate-y-1"
              />
            </button>
          ) : (
            <div className="flex flex-col items-center gap-4">
              {visiblePhotos < photos.length && (
                <button
                  type="button"
                  onClick={() =>
                    setVisiblePhotos((value) =>
                      Math.min(value + 9, photos.length)
                    )
                  }
                  className="rounded-full border border-[#bb8da0] bg-[#fff8f3] px-6 py-3 text-[8px] uppercase tracking-[0.4em] text-[#765c6d] transition hover:bg-[#f4dce3]"
                >
                  Load More Photos
                </button>
              )}
              {visiblePhotos >= photos.length && (
                <p className="text-[7px] uppercase tracking-[0.4em] text-[#98798a]">
                  you've reached the end
                </p>
              )}
              <button
                type="button"
                onClick={() => {
                  setShowAll(false);
                  setVisiblePhotos(9);
                }}
                className="text-[7px] uppercase tracking-[0.35em] text-[#957183] underline underline-offset-4"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </section>
      {/* =====================================================
          END
      ===================================================== */}
      <section className="relative px-6 pb-16 pt-12 text-center sm:px-10 sm:pb-20">
        <div className="mx-auto flex max-w-xl items-center justify-center gap-4">
          <span className="h-px flex-1 bg-[#c89eb0]" />
          <Sparkles
            size={15}
            strokeWidth={1}
            className="text-[#77689b]"
          />
          <span className="h-px flex-1 bg-[#c89eb0]" />
        </div>
        <h3
          className="mt-9 text-4xl tracking-[0.06em] text-[#463c43] sm:text-5xl"
          style={{
            fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
          }}
        >
          More to come.
        </h3>
        <p
          className="mx-auto mt-4 max-w-md text-[16px] leading-7 tracking-[0.05em] text-[#776a72]"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}
        >
          Because there will always be another little thing worth saving.
        </p>
      </section>
    </div>
  );
}
/* =============================================================
   SECTION TITLE
============================================================= */
function SectionTitle({ number, title }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-[8px] tracking-[0.55em] text-[#806477]">
          {number}
        </span>
        <span className="h-px w-8 bg-[#b97999]" />
        <span className="h-px w-14 bg-[#d0a9ba]" />
      </div>
      <h2
        className="mt-3 text-[2.3rem] leading-none tracking-[0.065em] text-[#423940] sm:text-4xl md:text-5xl"
        style={{
          fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
/* =============================================================
   PARAGRAPH
============================================================= */
function Paragraph({ children }) {
  return (
    <p
      className="mb-3 text-[16px] leading-[1.75] tracking-[0.055em] text-[#675d64] sm:mb-4 sm:text-[17px] sm:leading-[1.8]"
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      {children}
    </p>
  );
}
/* =============================================================
   INFO CARD
============================================================= */
function InfoCard({ label, value, type }) {
  const backgrounds = {
    cream: "bg-[#fff7e9]",
    pink: "bg-[#f1d9e1]",
    blue: "bg-[#dce9e8]",
    purple: "bg-[#e4deed]",
    green: "bg-[#dce9df]",
    yellow: "bg-[#f2e8c9]",
  };
  return (
    <div
      className={`min-h-[150px] rounded-[1.5rem] border border-white/70 p-6 shadow-[4px_6px_0_rgba(78,58,73,0.06)] ${backgrounds[type]}`}
    >
      <p className="text-[7px] uppercase tracking-[0.5em] text-[#806779]">
        {label}
      </p>
      <p
        className="mt-5 text-2xl tracking-[0.045em] text-[#4a4047]"
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
   SMALL NOTE
============================================================= */
function MiniNote({ text, rotate }) {
  return (
    <span
      className="rounded-sm bg-[#fff8ed] px-4 py-2 text-[8px] uppercase tracking-[0.25em] text-[#725c69] shadow-[3px_4px_0_rgba(90,66,82,0.08)]"
      style={{
        transform: `rotate(${rotate})`,
      }}
    >
      {text}
    </span>
  );
}
/* =============================================================
   LARGE NOTE
============================================================= */
function LargeNote({ icon, title, text, rotation }) {
  return (
    <div
      className="rounded-[1.8rem] border border-white/70 bg-[#fff7f1]/75 p-7 shadow-[5px_7px_0_rgba(86,62,79,0.06)]"
      style={{
        transform: `rotate(${rotation})`,
      }}
    >
      <div className="flex items-center gap-3 text-[#80627a]">
        {icon}
        <p className="text-[8px] uppercase tracking-[0.45em]">
          {title}
        </p>
      </div>
      <p
        className="mt-5 text-[17px] leading-7 tracking-[0.045em] text-[#6c6068]"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        {text}
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
      className="group relative aspect-square overflow-hidden bg-[#c8b6c0]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#d291aa] via-[#a79abc] to-[#7caeb0] transition duration-500 group-hover:scale-105" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/15">
          <Camera
            size={17}
            strokeWidth={1}
            className="text-white/85"
          />
        </div>
      </div>
      <span className="absolute bottom-2 left-2 text-[6px] uppercase tracking-[0.25em] text-white/80">
        JL · {String(number).padStart(2, "0")}
      </span>
    </button>
  );
}
/* =============================================================
   IMAGE PLACEHOLDER
============================================================= */
function ImagePlaceholder({
  label,
  large = false,
  rotation = "0deg",
}) {
  return (
    <div
      className="relative"
      style={{
        transform: `rotate(${rotation})`,
      }}
    >
      <div className="absolute left-1/2 top-[-8px] z-20 h-7 w-24 -translate-x-1/2 rotate-[-2deg] bg-[#dbc99c]/75 shadow-sm sm:h-8 sm:w-32" />
      <div className="absolute inset-2 rounded-[2rem] bg-[#594b5b]/15 blur-md" />
      <div
        className={`relative overflow-hidden rounded-[2rem] border-[7px] border-[#fffaf6] bg-[#d3c6ca] shadow-[0_18px_45px_rgba(64,48,62,0.15)] sm:rounded-[2.5rem] sm:border-[9px] ${
          large ? "aspect-[16/9]" : "aspect-[4/3]"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#cf8eaa] via-[#a295bd] to-[#78adb0]" />
        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/65 bg-white/20 sm:h-14 sm:w-14">
              <Camera
                size={21}
                strokeWidth={1}
                className="text-white/90"
              />
            </div>
            <p className="mt-4 text-[8px] uppercase tracking-[0.6em] text-white/90 sm:text-[9px]">
              {label}
            </p>
            <div className="mx-auto mt-3 h-px w-10 bg-white/60" />
            <p
              className="mt-3 text-xs text-white/75"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              admin image goes here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
