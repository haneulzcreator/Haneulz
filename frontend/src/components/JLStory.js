import { useMemo } from "react";
import { Reveal } from "../components/Reveal";
import {
  Heart,
  Sparkles,
  Camera,
  Star,
  Cloud,
  Music2,
  Flower2,
} from "lucide-react";

export default function JLStory() {
  const photos = useMemo(
    () => [
      {
        title: "Yence ♡",
        image: "/images/jl-1.jpg",
      },
      {
        title: "JL",
        image: "/images/jl-2.jpg",
      },
      {
        title: "a little JL moment",
        image: "/images/jl-3.jpg",
      },
    ],
    []
  );

  return (
    <div className="relative overflow-hidden rounded-[3rem] bg-[#eef6ff] p-6 md:p-12">

      {/* soft decorations */}
      <div className="pointer-events-none absolute -right-16 top-10 h-48 w-48 rounded-full bg-white/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-56 w-56 rounded-full bg-[#dcecff] blur-3xl" />

      {/* =========================
          INTRO
      ========================= */}
      <Reveal>
        <div className="relative">

          <div className="flex items-center gap-2 text-[#7188a5]">
            <Sparkles size={15} />
            <span className="text-xs uppercase tracking-[0.3em]">
              JL / 01
            </span>
          </div>

          <h1 className="mt-5 font-serif-display text-6xl leading-[0.9] text-[#31465f] md:text-8xl">
            a little
            <br />
            page for Yence
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#7188a5]">
            a tiny collection of little things, memories, and moments
            about JL ♡
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/80 px-4 py-2 text-xs text-[#637994]">
              ୨୧ gentle
            </span>

            <span className="rounded-full bg-white/80 px-4 py-2 text-xs text-[#637994]">
              ♡ dreamy
            </span>

            <span className="rounded-full bg-white/80 px-4 py-2 text-xs text-[#637994]">
              🦌 soft-hearted
            </span>
          </div>

        </div>
      </Reveal>


      {/* =========================
          NAME CARD
      ========================= */}
      <Reveal>
        <section className="relative mt-14 rounded-[2.5rem] bg-white/75 p-7 shadow-sm md:p-10">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e3efff] text-[#6d87a5]">
              <Heart size={19} />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#91a2b8]">
                known as
              </p>

              <h2 className="font-serif-display text-3xl text-[#31465f]">
                JL
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <InfoCard
              label="Full Name"
              value="Jay Lawrence Gaspar"
            />

            <InfoCard
              label="Nickname"
              value="Yence · Jaeyel"
            />

          </div>

        </section>
      </Reveal>


      {/* =========================
          PHOTO
      ========================= */}
      <Reveal>
        <section className="relative mt-8">

          <div className="mb-5 flex items-end justify-between">

            <div>
              <div className="flex items-center gap-2 text-[#7188a5]">
                <Camera size={16} />
                <span className="text-[10px] uppercase tracking-[0.3em]">
                  little snapshots
                </span>
              </div>

              <h2 className="mt-2 font-serif-display text-4xl text-[#31465f] md:text-5xl">
                JL photo ♡
              </h2>
            </div>

            <span className="hidden text-2xl text-[#9db4ce] md:block">
              ୨୧
            </span>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">

            {photos.map((photo, index) => (
              <div
                key={`${photo.title}-${index}`}
                className="group overflow-hidden rounded-[2rem] bg-white/80 p-3 shadow-sm"
              >

                <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#dfeeff]">

                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="px-2 pb-2 pt-4">

                  <p className="text-sm text-[#647a95]">
                    {photo.title}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>
      </Reveal>


      {/* =========================
          QUICK LOOK
      ========================= */}
      <Reveal>
        <section className="relative mt-10 rounded-[2.5rem] bg-[#dcecff] p-8 md:p-10">

          <div className="flex items-center gap-2 text-[#6c85a3]">
            <Star size={15} />
            <span className="text-[10px] uppercase tracking-[0.3em]">
              a quick look
            </span>
          </div>

          <h2 className="mt-3 font-serif-display text-4xl text-[#31465f]">
            little things about JL
          </h2>


          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <TinyCard
              icon={<Flower2 size={17} />}
              label="KNOWN AS"
              value="JL"
            />

            <TinyCard
              icon={<Heart size={17} />}
              label="NICKNAME"
              value="Yence"
            />

            <TinyCard
              icon={<Cloud size={17} />}
              label="VIBE"
              value="soft deer ♡"
            />

          </div>

        </section>
      </Reveal>


      {/* =========================
          LITTLE NOTE
      ========================= */}
      <Reveal>
        <section className="relative mt-8 overflow-hidden rounded-[2.5rem] bg-white/80 p-8 md:p-10">

          <div className="absolute right-7 top-6 text-[#b5cbe3]">
            ୨୧
          </div>

          <div className="flex items-center gap-2 text-[#7188a5]">
            <Music2 size={15} />
            <span className="text-[10px] uppercase tracking-[0.3em]">
              a tiny note
            </span>
          </div>

          <p className="mt-6 max-w-2xl font-serif-display text-3xl leading-relaxed text-[#40556d] md:text-4xl">
            “some people just have a quiet kind of warmth that makes you want
            to stay a little longer.”
          </p>

          <p className="mt-5 text-sm text-[#91a2b8]">
            — a little corner for JL ♡
          </p>

        </section>
      </Reveal>


      {/* =========================
          DECORATION
      ========================= */}
      <div className="relative mt-12 flex items-center justify-center gap-3 text-[#91abc6]">

        <span>୨୧</span>
        <Heart size={14} fill="currentColor" />
        <span>˚₊‧</span>
        <Sparkles size={14} />
        <span>‧₊˚</span>
        <Heart size={14} fill="currentColor" />
        <span>୨୧</span>

      </div>

    </div>
  );
}


/* =========================
   INFO CARD
========================= */

function InfoCard({ label, value }) {
  return (
    <div className="rounded-[1.5rem] bg-[#f5f9ff] p-5">

      <p className="text-[10px] uppercase tracking-[0.25em] text-[#9aaabd]">
        {label}
      </p>

      <p className="mt-2 font-serif-display text-2xl text-[#41566e]">
        {value}
      </p>

    </div>
  );
}


/* =========================
   TINY CARD
========================= */

function TinyCard({ icon, label, value }) {
  return (
    <div className="rounded-[1.5rem] bg-white/75 p-5">

      <div className="flex items-center gap-2 text-[#7790ad]">
        {icon}

        <span className="text-[9px] uppercase tracking-[0.2em]">
          {label}
        </span>
      </div>

      <p className="mt-3 font-serif-display text-2xl text-[#40556d]">
        {value}
      </p>

    </div>
  );
}
