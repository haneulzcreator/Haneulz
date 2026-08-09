import React from "react";
import {
  ArrowUpRight,
  Camera,
  Heart,
  Sparkles,
  Star,
} from "lucide-react";
export default function JLStory() {
  /*
   * =========================================================
   * JL INFORMATION
   * =========================================================
   *
   * Replace the "Add later" text whenever you have the details.
   */
  const profile = {
    fullName: "Jay Lawrence Gaspar",
    knownAs: "JL",
    nicknames: "Yence / Jaeyel",
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
    "Add another detail whenever you want.",
  ];
  /*
   * =========================================================
   * JL PHOTO ARCHIVE
   * =========================================================
   *
   * There is NO hard limit here.
   *
   * To add a photo, simply add another object:
   *
   * {
   *   src: "IMAGE_URL",
   *   alt: "JL photo",
   *   originalPost: "ORIGINAL_POST_URL"
   * }
   *
   * Clicking a photo opens its original post.
   */
  const photos = [
    {
      src: "",
      alt: "JL photo 01",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 02",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 03",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 04",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 05",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 06",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 07",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 08",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 09",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 10",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 11",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 12",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 13",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 14",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 15",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 16",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 17",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 18",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 19",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 20",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 21",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 22",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 23",
      originalPost: "",
    },
    {
      src: "",
      alt: "JL photo 24",
      originalPost: "",
    },
  ];
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3eef2] text-[#514a56]">
      {/* =====================================================
          SOFT PASTEL BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#dce9f4]/75 blur-[100px]" />
        <div className="absolute -right-40 top-[10%] h-[520px] w-[520px] rounded-full bg-[#eadff0]/80 blur-[110px]" />
        <div className="absolute -left-40 top-[42%] h-[500px] w-[500px] rounded-full bg-[#f2dfe5]/65 blur-[110px]" />
        <div className="absolute -right-40 top-[68%] h-[560px] w-[560px] rounded-full bg-[#f4e8c9]/60 blur-[120px]" />
        <div className="absolute left-[20%] top-[88%] h-[420px] w-[420px] rounded-full bg-[#dce9df]/60 blur-[110px]" />
        {/* subtle paper texture */}
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "radial-gradient(#786e79 0.65px, transparent 0.65px)",
            backgroundSize: "18px 18px",
          }}
        />
        {/* little decorative lines */}
        <span className="absolute left-[8%] top-[18%] h-24 w-px rotate-[18deg] bg-[#a88f9f]/25" />
        <span className="absolute right-[8%] top-[30%] h-28 w-px rotate-[-20deg] bg-[#a88f9f]/20" />
        <span className="absolute left-[7%] top-[72%] h-24 w-px rotate-[-20deg] bg-[#a88f9f]/20" />
      </div>
      {/* =====================================================
          COVER
      ===================================================== */}
      <section className="relative px-6 pb-24 pt-8 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[8px] tracking-[0.45em] text-[#a4778d]">
              HANEULZ
            </span>
            <span className="h-px w-8 bg-[#c9b5c1]" />
            <span className="font-mono text-[7px] tracking-[0.4em] text-[#918792]">
              JL / PROFILE
            </span>
          </div>
          <span className="font-mono text-[8px] tracking-[0.3em] text-[#9b919b]">
            01
          </span>
        </div>
        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* soft decorative letters */}
          <span
            className="pointer-events-none absolute -left-5 -top-14 select-none text-[10rem] font-black leading-none tracking-[-0.15em] text-[#ddd2e3]/70 sm:text-[15rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            J
          </span>
          <span
            className="pointer-events-none absolute right-[2%] top-[12%] select-none text-[7rem] font-black leading-none text-[#f0dbe3]/70 sm:text-[10rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            L
          </span>
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span
                className="text-xl text-[#a4748a]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                known as
              </span>
              <span className="h-px w-10 bg-[#c4aab8]" />
              <span className="font-mono text-[7px] tracking-[0.35em] text-[#958b96]">
                JL
              </span>
            </div>
            <h1
              className="mt-3 text-[8rem] leading-[0.75] tracking-[-0.09em] text-[#494251] sm:text-[12rem] md:text-[15rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Bodoni MT', Didot, Georgia, serif",
              }}
            >
              JL
            </h1>
            <div className="mt-10">
              <p
                className="text-3xl text-[#5b5261] sm:text-4xl"
                style={{
                  fontFamily:
                    "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Jay Lawrence Gaspar
              </p>
              <p
                className="mt-1 text-2xl text-[#a4778c]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Yence · Jaeyel ♡
              </p>
            </div>
          </div>
          {/* MAIN PHOTO */}
          <div className="relative z-20 mt-14 ml-auto w-[94%] max-w-[570px] sm:w-[68%]">
            <div className="absolute -inset-3 rotate-[2deg] rounded-[2.3rem] bg-[#e6d8ed]" />
            <div className="absolute -inset-3 -rotate-[2deg] rounded-[2.3rem] bg-[#f1dce3]" />
            <PhotoPlaceholder
              large
              className="relative"
            />
            <div className="absolute -bottom-6 -left-5 rotate-[-5deg] rounded-full bg-[#fff0ca] px-5 py-2.5 shadow-[0_12px_30px_rgba(70,55,70,0.08)]">
              <span
                className="text-xl text-[#6b606d]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Yence ♡
              </span>
            </div>
            <div className="absolute -right-3 -top-7 rotate-[7deg] rounded-full bg-white/75 px-4 py-2">
              <span className="font-mono text-[7px] tracking-[0.25em] text-[#827782]">
                jaeyel
              </span>
            </div>
            <Sparkles
              size={23}
              strokeWidth={1}
              className="absolute -right-5 top-[38%] rotate-12 text-[#aa8497]"
            />
          </div>
          {/* SMALL CUTE DEER DRAWING */}
          <CuteDeer />
        </div>
        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-[#9e969f]">
            a little corner for JL
          </span>
          <span className="text-sm text-[#a67d91]">
            ୨୧
          </span>
        </div>
      </section>
      {/* =====================================================
          QUICK LOOK
      ===================================================== */}
      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="02"
          title="QUICK LOOK"
        />
        <div className="relative overflow-hidden rounded-[2.7rem] border border-white/60 bg-[#e9e1ef]/90 p-7 shadow-[0_20px_55px_rgba(70,55,75,0.05)] sm:p-10">
          <span className="absolute right-8 top-6 text-xl text-[#b08b9c]">
            ♡
          </span>
          <div className="relative grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
            <QuickItem
              label="KNOWN AS"
              value={profile.knownAs}
            />
            <QuickItem
              label="NICKNAME"
              value="Yence"
            />
            <QuickItem
              label="ALSO"
              value="Jaeyel"
            />
            <QuickItem
              label="BIRTHDAY"
              value={profile.birthday}
            />
            <QuickItem
              label="HOBBY"
              value={profile.hobbies}
            />
            <QuickItem
              label="MBTI"
              value={profile.mbti}
            />
          </div>
        </div>
      </section>
      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="03"
          title="ABOUT JL"
        />
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-[#f3dce5]" />
            <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70">
              <PhotoPlaceholder />
            </div>
            <div className="absolute -bottom-5 -right-4 rounded-full bg-[#dce8f4] px-5 py-2.5">
              <span
                className="text-lg text-[#626875]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Jay Lawrence ♡
              </span>
            </div>
          </div>
          <div>
            <p
              className="text-2xl leading-9 text-[#655d69] sm:text-3xl sm:leading-10"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              This is where you can write a proper introduction
              about JL — who he is, what makes him memorable,
              and anything you want people visiting the HANEULZ
              archive to know about him.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Tag text="JL" />
              <Tag text="Yence" />
              <Tag text="Jaeyel" />
              <Tag text="Jay Lawrence Gaspar" />
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          HOBBIES & INTERESTS
      ===================================================== */}
      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="04"
          title="HOBBIES & INTERESTS"
        />
        <div className="grid gap-5 md:grid-cols-12">
          <FeatureCard
            className="min-h-[310px] md:col-span-7"
            background="#dce8f4"
            number="01"
            title="HOBBIES"
            value={profile.hobbies}
            large
          />
          <FeatureCard
            className="min-h-[250px] md:col-span-5 md:mt-12"
            background="#e8dcef"
            number="02"
            title="INTERESTS"
            value={profile.interests}
          />
          <FeatureCard
            className="min-h-[230px] md:col-span-4 md:-mt-7"
            background="#fff0ca"
            number="03"
            title="MBTI"
            value={profile.mbti}
          />
          <FeatureCard
            className="min-h-[270px] md:col-span-8"
            background="#f1dce3"
            number="04"
            title="MORE"
            value="Add anything else you want people to know about JL."
          />
        </div>
      </section>
      {/* =====================================================
          FAVORITES
      ===================================================== */}
      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="05"
          title="FAVORITES"
        />
        <div className="relative rounded-[2.8rem] border border-white/60 bg-[#e6e0ef] p-8 shadow-[0_20px_55px_rgba(70,55,75,0.05)] sm:p-12">
          <div className="absolute right-8 top-7">
            <span className="text-2xl text-[#a98396]">
              ☆
            </span>
          </div>
          <p
            className="text-2xl text-[#a1758b]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            JL's favorites ♡
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FavoriteCard
              label="MUSIC"
              value="Add later"
            />
            <FavoriteCard
              label="FOOD"
              value="Add later"
            />
            <FavoriteCard
              label="COLOR"
              value="Add later"
            />
            <FavoriteCard
              label="OTHER"
              value="Add later"
            />
          </div>
        </div>
      </section>
      {/* =====================================================
          FUN FACTS
      ===================================================== */}
      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="06"
          title="FUN FACTS"
        />
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <h2
              className="text-7xl leading-[0.78] tracking-[-0.07em] text-[#484150] sm:text-[8rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              LITTLE
              <br />
              FACTS
              <br />
              <span className="text-[#aa7d93]">
                ABOUT JL
              </span>
            </h2>
            <p
              className="mt-7 text-xl text-[#a1768c]"
              style={{
                fontFamily: "'Caveat', cursive",
              }}
            >
              tiny things ♡
            </p>
          </div>
          <div>
            {facts.map((fact, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 border-t border-[#cec2cc] py-6"
              >
                <span className="pt-1 font-mono text-[8px] tracking-[0.25em] text-[#ae8498]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-2xl leading-8 text-[#615a68]"
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', Georgia, serif",
                  }}
                >
                  {fact}
                </p>
                <span className="ml-auto shrink-0 text-[#ad899b] opacity-0 transition group-hover:opacity-100">
                  ♡
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =====================================================
          PHOTO ARCHIVE
      ===================================================== */}
      <section className="relative px-5 py-24 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="07"
          title="PHOTO ARCHIVE"
        />
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <Camera
                size={17}
                strokeWidth={1}
                className="text-[#a67e91]"
              />
              <span
                className="text-xl text-[#a1758b]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                little JL moments ♡
              </span>
            </div>
            <h2
              className="mt-2 text-6xl leading-[0.78] tracking-[-0.07em] text-[#403a4a] sm:text-8xl"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              ARCHIVE
            </h2>
          </div>
          <p
            className="max-w-xs text-lg leading-7 text-[#817985]"
            style={{
              fontFamily:
                "'Cormorant Garamond', Georgia, serif",
            }}
          >
            Click a photo to visit the original post.
            Add as many photos as you want.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-6 gap-2 sm:gap-3">
          {photos.map((photo, index) => (
            <ArchivePhoto
              key={index}
              photo={photo}
              index={index}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <span
            className="text-lg text-[#a1768c]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            more little moments to come ♡
          </span>
        </div>
      </section>
      {/* =====================================================
          END
      ===================================================== */}
      <section className="relative px-6 pb-28 pt-10 text-center sm:px-10">
        <div className="mx-auto flex max-w-sm items-center gap-4">
          <span className="h-px flex-1 bg-[#cec2cc]" />
          <span className="text-lg text-[#b5899e]">
            ♡
          </span>
          <span className="h-px flex-1 bg-[#cec2cc]" />
        </div>
        <h2
          className="mt-9 text-7xl tracking-[-0.08em] text-[#403a4b] sm:text-[10rem]"
          style={{
            fontFamily:
              "'Bodoni 72', Didot, Georgia, serif",
          }}
        >
          JL
        </h2>
        <p
          className="mt-1 text-2xl text-[#a1768c]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          Yence · Jaeyel ♡
        </p>
        <p className="mt-5 font-mono text-[7px] tracking-[0.4em] text-[#9d939d]">
          HANEULZ ARCHIVE
        </p>
      </section>
    </main>
  );
}
/* =============================================================
   SECTION LABEL
============================================================= */
function SectionLabel({ number, title }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-[8px] tracking-[0.3em] text-[#ad8296]">
        {number}
      </span>
      <span className="h-px w-10 bg-[#cdbec9]" />
      <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-[#9e969f]">
        {title}
      </span>
    </div>
  );
}
/* =============================================================
   QUICK ITEM
============================================================= */
function QuickItem({ label, value }) {
  return (
    <div className="border-l border-[#c9bbc6] pl-4">
      <p className="font-mono text-[7px] tracking-[0.35em] text-[#9d8492]">
        {label}
      </p>
      <p
        className="mt-3 text-xl leading-6 text-[#5d5665]"
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
/* =============================================================
   TAG
============================================================= */
function Tag({ text }) {
  return (
    <span className="rounded-full border border-[#cbb8c4] bg-white/45 px-5 py-2 font-mono text-[7px] tracking-[0.18em] text-[#7e707c]">
      {text}
    </span>
  );
}
/* =============================================================
   FEATURE CARD
============================================================= */
function FeatureCard({
  background,
  number,
  title,
  value,
  className = "",
  large = false,
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2.4rem] p-8 shadow-[0_18px_45px_rgba(65,55,75,0.055)] transition duration-300 hover:-translate-y-1 sm:p-10 ${className}`}
      style={{
        backgroundColor: background,
      }}
    >
      <span
        className="absolute -right-3 -top-10 text-[10rem] leading-none text-black/[0.035]"
        style={{
          fontFamily:
            "'Bodoni 72', Didot, Georgia, serif",
        }}
      >
        {number}
      </span>
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] tracking-[0.35em] text-[#827681]">
            {number}
          </span>
          <span className="text-sm text-[#8b7c87]">
            ୨୧
          </span>
        </div>
        <h3
          className={`mt-9 text-[#5b5463] ${
            large ? "text-5xl sm:text-6xl" : "text-4xl"
          }`}
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          {title}
        </h3>
        <p
          className="mt-7 max-w-lg text-xl leading-8 text-[#6d6572]"
          style={{
            fontFamily:
              "'Cormorant Garamond', Georgia, serif",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
/* =============================================================
   FAVORITE CARD
============================================================= */
function FavoriteCard({ label, value }) {
  return (
    <div className="rounded-[1.6rem] border border-white/60 bg-white/45 p-6 backdrop-blur-sm">
      <p className="font-mono text-[7px] tracking-[0.4em] text-[#9d8b98]">
        {label}
      </p>
      <p
        className="mt-5 text-2xl text-[#5f5867]"
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
/* =============================================================
   PHOTO PLACEHOLDER
============================================================= */
function PhotoPlaceholder({
  className = "",
  large = false,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.4rem] bg-[#e9e2e9] ${
        large ? "aspect-[4/3]" : "aspect-[4/5]"
      } ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#dce8f4] via-[#e8dcef] to-[#f1dce3]" />
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/60 blur-[70px]" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#fff0ca]/65 blur-[70px]" />
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(#756c78 0.6px, transparent 0.6px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/50">
          <Camera
            size={22}
            strokeWidth={1}
            className="text-[#817586]"
          />
        </div>
        <span className="mt-5 font-mono text-[7px] tracking-[0.4em] text-[#817586]">
          JL PHOTO
        </span>
      </div>
    </div>
  );
}
/* =============================================================
   PHOTO ARCHIVE ITEM
============================================================= */
function ArchivePhoto({ photo, index }) {
  const colors = [
    ["#dce8f4", "#e8dcef"],
    ["#f1dce3", "#fff0ca"],
    ["#e8dcef", "#dce9df"],
    ["#fff0ca", "#dce8f4"],
    ["#dce9df", "#f1dce3"],
    ["#e7e1f2", "#e8dcef"],
  ];
  const pair = colors[index % colors.length];
  const isLarge =
    index === 0 ||
    index === 4 ||
    index === 8 ||
    index === 13 ||
    index === 18;
  const content = (
    <div
      className={`group relative overflow-hidden rounded-[1rem] sm:rounded-[1.4rem] ${
        isLarge
          ? "col-span-4 row-span-2 aspect-square"
          : "col-span-2 aspect-square"
      }`}
      style={{
        background: `linear-gradient(135deg, ${pair[0]}, ${pair[1]})`,
      }}
    >
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <Camera
            size={isLarge ? 24 : 16}
            strokeWidth={1}
            className="text-[#766b79]/45 transition duration-300 group-hover:scale-110"
          />
        </div>
      )}
      <span className="absolute bottom-2 left-2 rounded-full bg-white/65 px-2 py-1 font-mono text-[6px] text-[#6c6370]">
        {String(index + 1).padStart(2, "0")}
      </span>
      {photo.originalPost && (
        <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-[#786b77] opacity-0 transition group-hover:opacity-100">
          <ArrowUpRight
            size={12}
            strokeWidth={1.2}
          />
        </span>
      )}
    </div>
  );
  /*
   * If an original post exists, the entire photo becomes clickable.
   */
  if (photo.originalPost) {
    return (
      <a
        href={photo.originalPost}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open original post for ${photo.alt}`}
      >
        {content}
      </a>
    );
  }
  return content;
}
/* =============================================================
   CUTE DEER DRAWING
   ============================================================= */
function CuteDeer() {
  return (
    <div
      className="pointer-events-none absolute bottom-[1%] left-[2%] z-30 hidden w-[105px] rotate-[-4deg] sm:block"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 160 170"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        {/* ears */}
        <path
          d="M58 43C44 29 42 13 47 8C57 12 66 25 68 42"
          fill="#E8D8D0"
          stroke="#74646C"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M101 42C106 25 116 12 126 9C130 18 125 34 111 47"
          fill="#E8D8D0"
          stroke="#74646C"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* inner ears */}
        <path
          d="M54 34C49 26 49 19 51 16C57 21 61 28 62 35"
          fill="#F3C9CF"
        />
        <path
          d="M108 35C111 27 117 19 122 16C122 24 119 31 112 38"
          fill="#F3C9CF"
        />
        {/* head */}
        <path
          d="M54 47C60 32 101 31 108 47C116 64 111 94 98 108C88 118 71 118 61 107C48 93 46 64 54 47Z"
          fill="#E8D8D0"
          stroke="#74646C"
          strokeWidth="2"
        />
        {/* little hair */}
        <path
          d="M74 38C76 29 82 27 85 37C89 27 96 30 96 40"
          stroke="#74646C"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* eyes */}
        <circle
          cx="68"
          cy="68"
          r="3"
          fill="#5B5158"
        />
        <circle
          cx="96"
          cy="68"
          r="3"
          fill="#5B5158"
        />
        {/* eye sparkles */}
        <circle
          cx="69"
          cy="67"
          r="1"
          fill="white"
        />
        <circle
          cx="97"
          cy="67"
          r="1"
          fill="white"
        />
        {/* cheeks */}
        <ellipse
          cx="59"
          cy="82"
          rx="7"
          ry="4"
          fill="#F1C9CF"
          opacity="0.8"
        />
        <ellipse
          cx="105"
          cy="82"
          rx="7"
          ry="4"
          fill="#F1C9CF"
          opacity="0.8"
        />
        {/* muzzle */}
        <ellipse
          cx="82"
          cy="83"
          rx="13"
          ry="10"
          fill="#F1E5DE"
        />
        {/* nose */}
        <path
          d="M78 80C80 78 84 78 86 80C86 83 84 85 82 85C80 85 78 83 78 80Z"
          fill="#74646C"
        />
        {/* mouth */}
        <path
          d="M82 85C82 89 78 90 76 88M82 85C82 89 86 90 88 88"
          stroke="#74646C"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        {/* neck */}
        <path
          d="M65 108C68 119 68 128 65 139"
          stroke="#74646C"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M99 108C96 119 96 128 99 139"
          stroke="#74646C"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* body */}
        <path
          d="M63 119C52 124 46 138 48 151C53 159 66 161 82 160C98 161 111 159 116 151C118 138 112 124 101 119"
          fill="#E8D8D0"
          stroke="#74646C"
          strokeWidth="2"
        />
        {/* tiny bow */}
        <path
          d="M70 126C64 121 58 124 61 130C64 135 70 132 74 129"
          fill="#E7B9C5"
          stroke="#74646C"
          strokeWidth="1.5"
        />
        <path
          d="M75 129C81 123 87 125 85 131C83 135 77 134 74 130"
          fill="#E7B9C5"
          stroke="#74646C"
          strokeWidth="1.5"
        />
        <circle
          cx="74"
          cy="129"
          r="2"
          fill="#C991A4"
        />
      </svg>
      <span
        className="absolute -right-3 bottom-1 text-base text-[#a67d91]"
        style={{
          fontFamily: "'Caveat', cursive",
        }}
      >
        ♡
      </span>
    </div>
  );
}
