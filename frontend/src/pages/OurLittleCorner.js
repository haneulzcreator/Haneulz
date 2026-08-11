import { useState } from "react";
import MemoryMatch from "../Game/MemoryMatch";

import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";
import HaneulzStory from "../components/HaneulzStory";
import JLStory from "../components/JLStory";
import HanStory from "../components/HanStory";
import Music from "../components/Music";
import Gallery from "../components/Gallery";
import Letters from "../components/Letters";

import {
  Music2,
  Gamepad2,
  Palette,
  Mail,
  Cloud,
  UserRound,
} from "lucide-react";

export default function OurLittleCorner() {
  const [activeTab, setActiveTab] = useState("haneulz");
  const [openGame, setOpenGame] = useState(null);

  const tabs = [
    {
      id: "haneulz",
      name: "HANEULZ",
      icon: Cloud,
    },
    {
      id: "jl",
      name: "JL",
      icon: UserRound,
    },
    {
      id: "han",
      name: "Han",
      icon: UserRound,
    },
    {
      id: "spotify",
      name: "Spotify",
      icon: Music2,
    },
    {
      id: "games",
      name: "Games",
      icon: Gamepad2,
    },
    {
      id: "gallery",
      name: "Gallery",
      icon: Palette,
    },
    {
      id: "letters",
      name: "Letters",
      icon: Mail,
    },
  ];

  return (
    <div className="pt-32">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>

          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            A hidden space inside HANEULZ
          </p>

          <h1 className="mt-5 font-serif-display text-6xl font-medium leading-none md:text-8xl">
            Our Little
            <br />
            Corner
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[color:var(--ink-soft)]">
            A small archive of stories, memories, music, and moments
            created with love.
          </p>

        </Reveal>
      </section>


      {/* =====================================================
          TABS
      ===================================================== */}

      <section className="mx-auto mt-16 max-w-6xl px-6">

        <div className="glass rounded-[2rem] p-4">

          <div className="flex flex-wrap justify-center gap-3">

            {tabs.map((tab) => {

              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-5
                    py-3
                    text-sm
                    transition
                    ${
                      activeTab === tab.id
                        ? "bg-black text-white"
                        : "bg-white/50 hover:bg-white"
                    }
                  `}
                >

                  <Icon size={16} />

                  {tab.name}

                </button>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTENT AREA
      ===================================================== */}

      <section className="mx-auto mt-16 max-w-6xl px-6">

        {/* =====================================================
            HANEULZ
        ===================================================== */}

        {activeTab === "haneulz" && (
          <HaneulzStory />
        )}


        {/* =====================================================
            JL
        ===================================================== */}

        {activeTab === "jl" && (
          <JLStory />
        )}


        {/* =====================================================
            HAN
        ===================================================== */}

        {activeTab === "han" && (
          <HanStory />
        )}


        {/* =====================================================
            SPOTIFY
        ===================================================== */}

        {activeTab === "spotify" && (
          <Music />
        )}


        {/* =====================================================
            GAMES
        ===================================================== */}

        {activeTab === "games" && (
          <Reveal>

            <div className="rounded-[3rem] bg-[color:var(--pink)] p-10">

              <h2 className="font-serif-display text-5xl">
                Game Room
              </h2>

              <button
                type="button"
                onClick={() => setOpenGame("memory")}
                className="mt-8 rounded-full bg-white px-6 py-3 text-sm"
              >
                Play Memory Game
              </button>

            </div>

          </Reveal>
        )}


        {/* =====================================================
            GALLERY
        ===================================================== */}

        {activeTab === "gallery" && (
          <Gallery />
        )}


        {/* =====================================================
            LETTERS
        ===================================================== */}

        {activeTab === "letters" && (
  <Letters />
)}
      </section>


      {/* =====================================================
          MEMORY GAME
      ===================================================== */}

      {openGame === "memory" && (
        <MemoryMatch
          onClose={() => setOpenGame(null)}
        />
      )}


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
}


/* =============================================================
   PLACEHOLDER
============================================================= */

function Placeholder({ title }) {
  return (
    <Reveal>

      <div className="glass rounded-[3rem] p-12 text-center">

        <h2 className="font-serif-display text-5xl">
          {title}
        </h2>

        <p className="mt-5 text-[color:var(--ink-soft)]">
          Coming soon...
        </p>

      </div>

    </Reveal>
  );
}
