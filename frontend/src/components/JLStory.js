import React, { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Heart,
  Sparkles,
  Star,
  PawPrint,
  Flower2,
  Moon,
  Cloud,
  Leaf,
} from "lucide-react";
export default function JLStory() {
  const [showArchive, setShowArchive] = useState(false);
  const [photoLimit, setPhotoLimit] = useState(9);
  /* =========================================================
     JL INFORMATION
     ========================================================= */
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
  const timeline = [
    {
      year: "2024",
      title: "THE BEGINNING",
      text: "Add an important moment from this year.",
    },
    {
      year: "2025",
      title: "ANOTHER CHAPTER",
      text: "Add an important moment from this year.",
    },
    {
      year: "2026",
      title: "CURRENT CHAPTER",
      text: "Add the latest JL moments here.",
    },
  ];
  /* =========================================================
     PHOTO ARCHIVE
     NEWEST PHOTO = FIRST ITEM
     ========================================================= */
  const photos = [
    { src: "", alt: "JL photo 01" },
    { src: "", alt: "JL photo 02" },
    { src: "", alt: "JL photo 03" },
    { src: "", alt: "JL photo 04" },
    { src: "", alt: "JL photo 05" },
    { src: "", alt: "JL photo 06" },
    { src: "", alt: "JL photo 07" },
    { src: "", alt: "JL photo 08" },
    { src: "", alt: "JL photo 09" },
    { src: "", alt: "JL photo 10" },
    { src: "", alt: "JL photo 11" },
    { src: "", alt: "JL photo 12" },
    { src: "", alt: "JL photo 13" },
    { src: "", alt: "JL photo 14" },
    { src: "", alt: "JL photo 15" },
    { src: "", alt: "JL photo 16" },
    { src: "", alt: "JL photo 17" },
    { src: "", alt: "JL photo 18" },
    { src: "", alt: "JL photo 19" },
    { src: "", alt: "JL photo 20" },
    { src: "", alt: "JL photo 21" },
    { src: "", alt: "JL photo 22" },
    { src: "", alt: "JL photo 23" },
    { src: "", alt: "JL photo 24" },
  ];
  return (
    <main className="relative min-h-screen overflow-hidden rounded-[3rem] bg-[#f5efe8] text-[#443d47]">
      {/* =====================================================
          BACKGROUND TEXTURE
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-32 h-[520px] w-[520px] rounded-full bg-[#d8e5df]/70 blur-[110px]" />
        <div className="absolute -right-44 top-[12%] h-[560px] w-[560px] rounded-full bg-[#e9d9e5]/75 blur-[120px]" />
        <div className="absolute -left-48 top-[42%] h-[600px] w-[600px] rounded-full bg-[#dce8f0]/65 blur-[120px]" />
        <div className="absolute -right-48 top-[68%] h-[600px] w-[600px] rounded-full bg-[#f1dfb9]/60 blur-[120px]" />
        <div className="absolute left-[15%] top-[87%] h-[500px] w-[500px] rounded-full bg-[#d7e4d3]/60 blur-[120px]" />
        {/* paper grain */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(#544b55 0.7px, transparent 0.7px)",
            backgroundSize: "13px 13px",
          }}
        />
        {/* decorative lines */}
        <div className="absolute left-[8%] top-[18%] h-32 w-px rotate-[22deg] bg-[#927c88]/25" />
        <div className="absolute right-[9%] top-[30%] h-44 w-px rotate-[-25deg] bg-[#927c88]/25" />
        <div className="absolute left-[8%] top-[69%] h-40 w-px rotate-[-20deg] bg-[#927c88]/20" />
      </div>
      {/* =====================================================
          COVER
      ===================================================== */}
      <section className="relative min-h-[850px] px-6 pb-24 pt-8 sm:px-10 md:px-16 lg:px-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[8px] tracking-[0.45em] text-[#98788b]">
              HANEULZ
            </span>
            <span className="h-px w-8 bg-[#c8aebc]" />
            <span className="font-mono text-[7px] tracking-[0.4em] text-[#928994]">
              JL / LITTLE FILE
            </span>
          </div>
          <span className="font-mono text-[8px] tracking-[0.3em] text-[#948b94]">
            01 / 08
          </span>
        </div>
        {/* handwritten note */}
        <div
          className="absolute right-[9%] top-24 rotate-[7deg] rounded-lg bg-[#fff3c9] px-5 py-3 shadow-[4px_6px_0_rgba(90,70,75,0.08)]"
          style={{
            fontFamily: "'Comic Sans MS', cursive",
          }}
        >
          <p className="text-sm text-[#70616b]">
            hi, this is JL ♡
          </p>
        </div>
        <div className="relative mt-24">
          {/* giant letters */}
          <span
            className="pointer-events-none absolute -left-10 -top-28 select-none text-[15rem] font-black leading-none tracking-[-0.18em] text-[#d5ddd7]/70 sm:text-[21rem] md:text-[29rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            J
          </span>
          <span
            className="pointer-events-none absolute right-[-5%] top-[10%] select-none text-[9rem] font-black leading-none tracking-[-0.15em] text-[#ead4df]/70 sm:text-[13rem]"
            style={{
              fontFamily: "Arial Black, sans-serif",
            }}
          >
            L
          </span>
          <div className="relative z-10">
            <div className="ml-2 flex items-center gap-3">
              <span
                className="text-xl text-[#927086]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                known as
              </span>
              <span className="h-px w-10 bg-[#bd9aab]" />
              <span className="font-mono text-[7px] tracking-[0.35em] text-[#958b96]">
                JL
              </span>
            </div>
            <h1
              className="mt-2 text-[8rem] leading-[0.7] tracking-[-0.09em] text-[#403a48] sm:text-[11rem] md:text-[15rem] lg:text-[18rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', 'Bodoni MT', Didot, Georgia, serif",
              }}
            >
              JL
            </h1>
            <div className="mt-12 ml-2">
              <p
                className="text-3xl tracking-[0.01em] text-[#514a59] sm:text-4xl"
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
                Yence · Jaeyel
              </p>
            </div>
          </div>
          {/* MAIN PHOTO */}
          <div className="relative z-20 mt-16 ml-auto w-[94%] max-w-[600px] sm:w-[70%]">
            <div className="absolute -inset-3 rotate-[4deg] rounded-[2.5rem] bg-[#dce7de]" />
            <div className="absolute -inset-3 -rotate-[2deg] rounded-[2.5rem] bg-[#f0d9e3]" />
            <div className="relative rotate-[1deg]">
              <PhotoPlaceholder
                large
                className="relative"
              />
              {/* tape */}
              <div className="absolute -top-5 left-[15%] h-10 w-28 rotate-[-8deg] bg-[#d9c995]/70" />
              <div className="absolute -top-5 right-[13%] h-9 w-24 rotate-[9deg] bg-[#e5d4ad]/70" />
            </div>
            {/* raccoon sticker */}
            <CharacterSticker
              type="raccoon"
              className="absolute -bottom-12 -left-12 rotate-[-8deg]"
            />
            {/* deer sticker */}
            <CharacterSticker
              type="deer"
              className="absolute -right-12 -top-10 rotate-[8deg]"
            />
            <div className="absolute -bottom-7 left-24 rotate-[-5deg] rounded-full bg-[#fff0ca] px-6 py-3 shadow-[0_15px_35px_rgba(70,55,70,0.1)]">
              <span
                className="text-xl text-[#6b606d]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Yence ♡
              </span>
            </div>
          </div>
        </div>
        {/* cover decorations */}
        <div className="absolute bottom-20 left-[9%] rotate-[-8deg]">
          <RaccoonMini />
        </div>
        <div className="absolute bottom-14 right-[10%] rotate-[8deg]">
          <DeerMini />
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-[#9e969f]">
            open JL's file
          </span>
          <ArrowDown
            size={14}
            strokeWidth={1}
            className="text-[#ad8598]"
          />
        </div>
      </section>
      {/* =====================================================
          QUICK LOOK
      ===================================================== */}
      <section className="relative px-6 py-24 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="02"
          title="QUICK LOOK"
          doodle="🦝"
        />
        <div className="relative">
          <div className="absolute -right-3 -top-8 z-20 rotate-[8deg]">
            <DeerMini />
          </div>
          <div className="relative overflow-hidden rounded-[2.8rem] border border-[#d4c5cf] bg-[#eee7f2] p-7 shadow-[8px_10px_0_rgba(100,80,95,0.06)] sm:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#fff1cf]/70 blur-[70px]" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#dcebdd]/70 blur-[70px]" />
            <div className="relative grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              <QuickItem
                label="KNOWN AS"
                value="JL"
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
                label="NATIONALITY"
                value={profile.nationality}
              />
              <QuickItem
                label="MBTI"
                value={profile.mbti}
              />
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          ABOUT JL
      ===================================================== */}
      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="03"
          title="ABOUT JL"
          doodle="🦌"
        />
        <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full bg-[#f3dbe3]" />
            <div className="absolute -bottom-8 -left-8 z-20 rotate-[-8deg]">
              <RaccoonMini />
            </div>
            <div className="relative rotate-[-2deg] overflow-hidden rounded-[2.5rem] border-[7px] border-white shadow-[12px_15px_0_rgba(90,70,80,0.08)]">
              <PhotoPlaceholder />
            </div>
            <div className="absolute -bottom-6 -right-5 rounded-full bg-[#dce9f7] px-6 py-3 rotate-[4deg]">
              <span
                className="text-xl text-[#5f6470]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                Jay Lawrence
              </span>
            </div>
          </div>
          <div className="relative">
            {/* paper note */}
            <div className="relative rotate-[1deg] rounded-[2rem] bg-[#fffaf2] px-7 py-9 shadow-[8px_10px_0_rgba(90,70,80,0.07)] sm:px-10">
              <div className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 rotate-[-3deg] bg-[#d8c89e]/70" />
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
              <div className="mt-8 flex justify-end">
                <span
                  className="rotate-[-3deg] text-xl text-[#a1758b]"
                  style={{
                    fontFamily: "'Caveat', cursive",
                  }}
                >
                  — from the archive ♡
                </span>
              </div>
            </div>
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
      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="04"
          title="HOBBIES & INTERESTS"
          doodle="🦝"
        />
        <div className="relative grid gap-6 md:grid-cols-12">
          <FeatureCard
            className="min-h-[350px] md:col-span-7"
            background="#dce9f7"
            number="01"
            title="HOBBIES"
            value={profile.hobbies}
            large
            character="raccoon"
          />
          <FeatureCard
            className="min-h-[270px] md:col-span-5 md:mt-16"
            background="#eadcf2"
            number="02"
            title="INTERESTS"
            value={profile.interests}
            character="deer"
          />
          <FeatureCard
            className="min-h-[250px] md:col-span-4 md:-mt-8"
            background="#fff0ca"
            number="03"
            title="MBTI"
            value={profile.mbti}
            character="raccoon"
          />
          <FeatureCard
            className="min-h-[300px] md:col-span-8"
            background="#f3dce5"
            number="04"
            title="MORE"
            value="Add anything else you want people to know about JL."
            character="deer"
          />
        </div>
      </section>
      {/* =====================================================
          FAVORITES
      ===================================================== */}
      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="05"
          title="FAVORITES"
          doodle="🦌"
        />
        <div className="relative rounded-[3rem] border border-[#cbbbd0] bg-[#e8e1f1] p-8 shadow-[10px_12px_0_rgba(90,70,90,0.06)] sm:p-12 md:p-16">
          <div className="absolute right-8 top-8">
            <Star
              size={28}
              strokeWidth={1}
              className="rotate-12 text-[#a98396]"
            />
          </div>
          <div className="absolute bottom-5 right-8 rotate-[6deg]">
            <DeerMini />
          </div>
          <p
            className="text-2xl text-[#a1758b]"
            style={{
              fontFamily: "'Caveat', cursive",
            }}
          >
            things JL likes ♡
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FavoriteCard
              label="MUSIC"
              value="Add later"
              icon={<Star size={15} />}
            />
            <FavoriteCard
              label="FOOD"
              value="Add later"
              icon={<Heart size={15} />}
            />
            <FavoriteCard
              label="COLOR"
              value="Add later"
              icon={<Sparkles size={15} />}
            />
            <FavoriteCard
              label="OTHER"
              value="Add later"
              icon={<Leaf size={15} />}
            />
          </div>
        </div>
      </section>
      {/* =====================================================
          JOURNEY
      ===================================================== */}
      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="06"
          title="JOURNEY"
          doodle="🦝"
        />
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="relative">
            <h2
              className="text-8xl leading-[0.75] tracking-[-0.07em] text-[#403a49] sm:text-[9rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              HIS
              <br />
              <span className="ml-8 text-[#a97990]">
                JOURNEY
              </span>
            </h2>
            <p
              className="mt-10 max-w-sm text-xl leading-8 text-[#7a717d]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Important moments, milestones, and chapters can
              live here as the archive grows.
            </p>
            <div className="mt-10 rotate-[-5deg]">
              <RaccoonMini />
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-[27px] top-5 bottom-5 w-px border-l border-dashed border-[#bba9b4]" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative grid grid-cols-[56px_1fr] gap-6"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#cbbac5] bg-[#fff8ee] shadow-[3px_4px_0_rgba(90,70,80,0.06)]">
                    {index % 2 === 0 ? (
                      <span className="text-xl">🦝</span>
                    ) : (
                      <span className="text-xl">🦌</span>
                    )}
                  </div>
                  <div className="rotate-[0.5deg] border-b border-[#d0c4cc] bg-[#fffaf2]/70 px-6 pb-10 pt-4">
                    <span className="font-mono text-[8px] tracking-[0.35em] text-[#a67d91]">
                      {item.year}
                    </span>
                    <h3
                      className="mt-3 text-3xl text-[#514a59]"
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#7c747f]">
                      {item.text}
                    </p>
                    <span
                      className="mt-4 block text-right text-lg text-[#a77c91]"
                      style={{
                        fontFamily: "'Caveat', cursive",
                      }}
                    >
                      memory #{String(index + 1).padStart(2, "0")} ♡
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          FUN FACTS
      ===================================================== */}
      <section className="relative px-6 py-28 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="07"
          title="FUN FACTS"
          doodle="🦌"
        />
        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <h2
              className="text-8xl leading-[0.76] tracking-[-0.07em] text-[#403a4a] sm:text-[9rem]"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              FACTS
              <br />
              ABOUT
              <br />
              <span className="text-[#aa7d93]">
                JL
              </span>
            </h2>
            <div className="mt-10 rotate-[5deg]">
              <DeerMini />
            </div>
          </div>
          <div className="space-y-5">
            {facts.map((fact, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-[1.7rem] border border-[#d2c2cb] px-6 py-6 shadow-[5px_7px_0_rgba(90,70,80,0.05)] ${
                  index % 2 === 0
                    ? "rotate-[-1deg] bg-[#fff8e8]"
                    : "rotate-[1deg] bg-[#f0e7f3]"
                }`}
              >
                <span className="absolute -right-4 -top-5 text-7xl opacity-[0.06]">
                  {index % 2 === 0 ? "🦝" : "🦌"}
                </span>
                <div className="relative flex items-start gap-5">
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
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1}
                    className="ml-auto mt-1 shrink-0 text-[#ad899b] opacity-0 transition group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =====================================================
          PHOTO ARCHIVE
      ===================================================== */}
      <section className="relative px-5 py-28 sm:px-10 md:px-16 lg:px-24">
        <SectionLabel
          number="08"
          title="PHOTO ARCHIVE"
          doodle="🦝"
        />
        <div className="relative flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
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
                JL photos
              </span>
            </div>
            <h2
              className="mt-2 text-7xl leading-[0.75] tracking-[-0.07em] text-[#403a4a] sm:text-9xl"
              style={{
                fontFamily:
                  "'Bodoni 72', Didot, Georgia, serif",
              }}
            >
              ARCHIVE
            </h2>
          </div>
          <div className="relative max-w-xs">
            <div className="absolute -right-12 -top-16 rotate-[8deg]">
              <RaccoonMini />
            </div>
            <p
              className="text-lg leading-7 text-[#817985]"
              style={{
                fontFamily:
                  "'Cormorant Garamond', Georgia, serif",
              }}
            >
              The newest photo goes first. Open the archive to
              keep exploring JL's little collection.
            </p>
          </div>
        </div>
        {/* scrapbook photo wall */}
        <div className="relative mt-14 grid grid-cols-6 gap-3 sm:gap-5">
          {photos
            .slice(0, showArchive ? photoLimit : 9)
            .map((photo, index) => (
              <ArchivePhoto
                key={index}
                photo={photo}
                index={index}
              />
            ))}
        </div>
        {!showArchive ? (
          <button
            type="button"
            onClick={() => setShowArchive(true)}
            className="mx-auto mt-12 flex items-center gap-3 rounded-full border border-[#bba6b4] bg-[#413a4d] px-8 py-3 text-[8px] uppercase tracking-[0.4em] text-white shadow-[5px_6px_0_rgba(90,70,80,0.08)] transition hover:-translate-y-1"
          >
            View Full Archive
            <ArrowUpRight
              size={13}
              strokeWidth={1}
            />
          </button>
        ) : (
          <div className="mt-12 flex flex-col items-center gap-5">
            {photoLimit < photos.length && (
              <button
                type="button"
                onClick={() =>
                  setPhotoLimit((current) =>
                    Math.min(current + 9, photos.length)
                  )
                }
                className="rounded-full bg-[#eadcf2] px-8 py-3 text-[8px] uppercase tracking-[0.4em] text-[#625969] transition hover:bg-[#e1d1eb]"
              >
                Load More
              </button>
            )}
            {photoLimit >= photos.length && (
              <span
                className="text-xl text-[#a1768c]"
                style={{
                  fontFamily: "'Caveat', cursive",
                }}
              >
                End of archive ♡
              </span>
            )}
            <button
              type="button"
              onClick={() => {
                setShowArchive(false);
                setPhotoLimit(9);
              }}
              className="text-[8px] uppercase tracking-[0.4em] text-[#9c939e] underline underline-offset-4"
            >
              Close Archive
            </button>
          </div>
        )}
      </section>
      {/* =====================================================
          FINAL NOTE
      ===================================================== */}
      <section className="relative px-6 pb-28 pt-14 text-center sm:px-10">
        <div className="mx-auto flex max-w-sm items-center gap-4">
          <span className="h-px flex-1 bg-[#cec2cc]" />
          <Heart
            size={15}
            strokeWidth={1}
            className="text-[#b5899e]"
          />
          <span className="h-px flex-1 bg-[#cec2cc]" />
        </div>
        <div className="mt-8 flex items-center justify-center gap-5">
          <RaccoonMini />
          <h2
            className="text-8xl tracking-[-0.08em] text-[#403a4b] sm:text-[11rem]"
            style={{
              fontFamily:
                "'Bodoni 72', Didot, Georgia, serif",
            }}
          >
            JL
          </h2>
          <DeerMini />
        </div>
        <p
          className="mt-2 text-2xl text-[#a1768c]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          Yence · Jaeyel
        </p>
        <div
          className="mx-auto mt-8 max-w-md rotate-[-1deg] rounded-xl bg-[#fff1c9] px-6 py-4 shadow-[5px_6px_0_rgba(90,70,80,0.07)]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          <p className="text-xl text-[#6d5d66]">
            end of file... for now ♡
          </p>
          <div className="mt-1 flex justify-center gap-3 text-sm">
            <span>🦝</span>
            <span>✦</span>
            <span>🦌</span>
          </div>
        </div>
      </section>
    </main>
  );
}
/* =============================================================
   SECTION LABEL
============================================================= */
function SectionLabel({ number, title, doodle }) {
  return (
    <div className="relative mb-14 flex items-center gap-4">
      <span className="font-mono text-[8px] tracking-[0.3em] text-[#ad8296]">
        {number}
      </span>
      <span className="h-px w-12 bg-[#cdbec9]" />
      <span className="font-mono text-[7px] uppercase tracking-[0.5em] text-[#9e969f]">
        {title}
      </span>
      {doodle && (
        <span className="ml-2 text-sm">
          {doodle}
        </span>
      )}
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
    <span className="rounded-full border border-[#cbb8c4] bg-white/50 px-5 py-2 font-mono text-[7px] tracking-[0.18em] text-[#7e707c] shadow-[2px_3px_0_rgba(90,70,80,0.04)]">
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
  character = "raccoon",
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2.6rem] border border-white/60 p-8 shadow-[8px_10px_0_rgba(65,55,75,0.06)] transition duration-300 hover:-translate-y-2 sm:p-10 ${className}`}
      style={{
        backgroundColor: background,
      }}
    >
      <span
        className="absolute -right-4 -top-12 text-[12rem] leading-none text-black/[0.035]"
        style={{
          fontFamily:
            "'Bodoni 72', Didot, Georgia, serif",
        }}
      >
        {number}
      </span>
      <div className="absolute bottom-5 right-6 rotate-[7deg] opacity-70 transition group-hover:scale-110">
        {character === "raccoon" ? (
          <RaccoonMini />
        ) : (
          <DeerMini />
        )}
      </div>
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[8px] tracking-[0.35em] text-[#827681]">
            {number}
          </span>
          <Sparkles
            size={16}
            strokeWidth={1}
            className="text-[#827681]/70"
          />
        </div>
        <h3
          className={`mt-10 text-[#5b5463] ${
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
          className="relative z-10 mt-8 max-w-lg text-xl leading-8 text-[#6d6572]"
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
function FavoriteCard({ label, value, icon }) {
  return (
    <div className="rounded-[1.7rem] border border-white/60 bg-white/45 p-6 shadow-[3px_4px_0_rgba(90,70,80,0.04)] backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[7px] tracking-[0.4em] text-[#9d8b98]">
          {label}
        </p>
        <span className="text-[#a47c91]">
          {icon}
        </span>
      </div>
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
      className={`relative overflow-hidden rounded-[2.5rem] bg-[#e9e2e9] ${
        large ? "aspect-[4/3]" : "aspect-[4/5]"
      } ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#dce9f7] via-[#eadcf2] to-[#f3d9e3]" />
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/60 blur-[70px]" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#fff0ca]/70 blur-[70px]" />
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
   ARCHIVE PHOTO
============================================================= */
function ArchivePhoto({ photo, index }) {
  const colors = [
    ["#dce9f7", "#eadcf2"],
    ["#f3d9e3", "#fff0ca"],
    ["#eadcf2", "#dcebdd"],
    ["#fff0ca", "#dce9f7"],
    ["#dcebdd", "#f3d9e3"],
    ["#e7e1f2", "#eadcf2"],
  ];
  const pair = colors[index % colors.length];
  const isLarge =
    index === 0 ||
    index === 4 ||
    index === 8 ||
    index === 13 ||
    index === 18;
  const rotations = [
    "-2deg",
    "1deg",
    "-1deg",
    "2deg",
    "-1.5deg",
    "1.5deg",
  ];
  return (
    <div
      className={`group relative overflow-hidden rounded-[1rem] border-[5px] border-white shadow-[5px_7px_0_rgba(75,60,75,0.08)] sm:rounded-[1.5rem] ${
        isLarge
          ? "col-span-4 row-span-2 aspect-square"
          : "col-span-2 aspect-square"
      }`}
      style={{
        background: `linear-gradient(135deg, ${pair[0]}, ${pair[1]})`,
        transform: `rotate(${rotations[index % rotations.length]})`,
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
      <span className="absolute bottom-2 left-2 rounded-full bg-white/70 px-2 py-1 font-mono text-[6px] text-[#6c6370]">
        {String(index + 1).padStart(2, "0")}
      </span>
      {index % 5 === 0 && (
        <span className="absolute right-2 top-2 text-sm opacity-70">
          🦝
        </span>
      )}
      {index % 7 === 0 && (
        <span className="absolute bottom-2 right-2 text-sm opacity-70">
          🦌
        </span>
      )}
    </div>
  );
}
/* =============================================================
   CHARACTER STICKERS
============================================================= */
function CharacterSticker({ type, className = "" }) {
  return (
    <div
      className={`flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-[#a58d99] bg-[#fff8ef]/90 shadow-[5px_7px_0_rgba(70,55,70,0.08)] sm:h-32 sm:w-32 ${className}`}
    >
      <div className="text-center">
        <div className="text-5xl">
          {type === "raccoon" ? "🦝" : "🦌"}
        </div>
        <p
          className="mt-1 text-sm text-[#74636e]"
          style={{
            fontFamily: "'Caveat', cursive",
          }}
        >
          {type === "raccoon" ? "JL's little raccoon" : "deer friend ♡"}
        </p>
      </div>
    </div>
  );
}
/* =============================================================
   MINI RACCOON
============================================================= */
function RaccoonMini() {
  return (
    <div className="relative flex h-20 w-20 rotate-[-4deg] items-center justify-center rounded-full bg-[#e6ddd8] shadow-[3px_5px_0_rgba(70,55,65,0.08)]">
      <span className="text-4xl">
        🦝
      </span>
      <span className="absolute -right-2 -top-2 text-xs">
        ✦
      </span>
    </div>
  );
}
/* =============================================================
   MINI DEER
============================================================= */
function DeerMini() {
  return (
    <div className="relative flex h-20 w-20 rotate-[4deg] items-center justify-center rounded-full bg-[#eadfcf] shadow-[3px_5px_0_rgba(70,55,65,0.08)]">
      <span className="text-4xl">
        🦌
      </span>
      <span className="absolute -left-2 -top-2 text-xs">
        ♡
      </span>
    </div>
  );
}
