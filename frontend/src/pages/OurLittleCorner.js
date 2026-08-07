import { useState } from "react";
import MemoryMatch from "../Game/MemoryMatch";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

import {
  Music2,
  Gamepad2,
  Cloud,
  UserRound,
  Palette,
  Mail,
  Sparkles,
} from "lucide-react";


const tabs = [
  {
    id: "haneulz",
    name: "☁ HANEULZ",
    icon: Cloud,
  },
  {
    id: "jl",
    name: "JL Corner",
    icon: UserRound,
  },
  {
    id: "han",
    name: "Han Corner",
    icon: UserRound,
  },
  {
    id: "spotify",
    name: "Spotify Corner",
    icon: Music2,
  },
  {
    id: "games",
    name: "Game Room",
    icon: Gamepad2,
  },
  {
    id: "gallery",
    name: "Fan Art Gallery",
    icon: Palette,
  },
  {
    id: "letters",
    name: "Letter To HANEULZ",
    icon: Mail,
  },
];


const games = [
  {
    title: "HANEULZ Quiz",
    description:
      "How well do you know HANEULZ? Test your knowledge with fun fan questions.",
    status: "Coming Soon",
  },
  {
    title: "Memory Game",
    description:
      "Match the memories and little moments hidden inside the corner.",
    status: "Play Now",
  },
  {
    title: "Fan Challenge",
    description:
      "Small challenges made for Hansums to enjoy together.",
    status: "Coming Soon",
  },
];


export default function OurLittleCorner() {

  const [activeTab, setActiveTab] = useState("haneulz");
  const [openGame, setOpenGame] = useState(null);


  return (

    <div className="pt-32">


      {/* HERO */}

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
            A small place where stories, memories,
            playlists, games, and fan moments stay together.
          </p>


        </Reveal>

      </section>



      {/* TABS */}

      <section className="mx-auto mt-16 max-w-6xl px-6">

        <Reveal>

          <div className="flex flex-wrap justify-center gap-3">


            {tabs.map((tab)=>{

              const Icon = tab.icon;


              return (

                <button

                  key={tab.id}

                  onClick={()=>setActiveTab(tab.id)}

                  className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm transition ${
                    activeTab === tab.id
                    ? "bg-pink-200"
                    : "bg-white/50 hover:bg-white"
                  }`}

                >

                  <Icon size={16}/>

                  {tab.name}

                </button>

              )

            })}


          </div>


        </Reveal>


      </section>





      {/* CONTENT AREA */}

      <section className="mx-auto mt-20 max-w-6xl px-6">


        <Reveal>


          <div className="glass rounded-[3rem] p-10 md:p-12">



            {activeTab === "haneulz" && (

              <div>

                <h2 className="font-serif-display text-5xl">
                  ☁ HANEULZ
                </h2>


                <p className="mt-5 text-lg text-[color:var(--ink-soft)]">
                  A little story about two voices,
                  their journey, and the community that grew with them.
                </p>


                <div className="mt-10 grid gap-5 md:grid-cols-2">


                  {[
                    "How They Met",
                    "Interview Moments",
                    "Their Words For Each Other",
                    "Hansum + HANEULZ Story",
                  ].map((item)=>(

                    <div
                      key={item}
                      className="rounded-[2rem] bg-white/40 p-6"
                    >

                      <h3 className="font-serif-display text-2xl">
                        ✦ {item}
                      </h3>

                    </div>

                  ))}


                </div>


              </div>

            )}






            {activeTab === "jl" && (

              <div>

                <h2 className="font-serif-display text-5xl">
                  JL Corner
                </h2>


                <div className="mt-8 space-y-5">

                  <p>
                    ✦ Interests
                  </p>

                  <p>
                    ✦ Hobbies
                  </p>

                  <p>
                    ✦ Fun Facts
                  </p>

                  <p>
                    ✦ Favorite Things
                  </p>

                </div>


              </div>

            )}






            {activeTab === "han" && (

              <div>

                <h2 className="font-serif-display text-5xl">
                  Han Corner
                </h2>


                <div className="mt-8 space-y-5">

                  <p>
                    ✦ Interests
                  </p>

                  <p>
                    ✦ Hobbies
                  </p>

                  <p>
                    ✦ Fun Facts
                  </p>

                  <p>
                    ✦ Favorite Things
                  </p>

                  <p>
                    ✦ Movie Recommendations
                  </p>


                </div>


              </div>

            )}







            {activeTab === "spotify" && (

              <div>

                <h2 className="font-serif-display text-5xl">
                  Spotify Corner
                </h2>


                <p className="mt-5 text-[color:var(--ink-soft)]">
                  Playlist cards will be added here.
                </p>


              </div>

            )}







            {activeTab === "games" && (

              <div>


                <h2 className="font-serif-display text-5xl">
                  Game Room
                </h2>



                <div className="mt-10 grid gap-6 md:grid-cols-3">


                  {games.map((game)=>(


                    <div
                      key={game.title}
                      className="rounded-[2rem] bg-white/50 p-7"
                    >

                      <Sparkles size={20}/>


                      <h3 className="mt-5 font-serif-display text-2xl">
                        {game.title}
                      </h3>


                      <p className="mt-3 text-sm">
                        {game.description}
                      </p>


                      <button

                        onClick={()=>{

                          if(game.title === "Memory Game"){
                            setOpenGame("memory");
                          }

                        }}

                        className="mt-6 rounded-full border px-4 py-2 text-xs uppercase tracking-widest"

                      >

                        {game.status}

                      </button>


                    </div>


                  ))}


                </div>


              </div>

            )}








            {activeTab === "gallery" && (

              <div>

                <h2 className="font-serif-display text-5xl">
                  Fan Art Gallery
                </h2>


                <p className="mt-5 text-[color:var(--ink-soft)]">
                  Fan artworks will be displayed here.
                </p>


              </div>

            )}








            {activeTab === "letters" && (

              <div>

                <h2 className="font-serif-display text-5xl">
                  Letter To HANEULZ
                </h2>


                <p className="mt-5 text-[color:var(--ink-soft)]">
                  A place where Hansums can leave messages and letters.
                </p>


              </div>

            )}



          </div>


        </Reveal>


      </section>





      {openGame === "memory" && (

        <MemoryMatch
          onClose={()=>setOpenGame(null)}
        />

      )}



      <Footer />


    </div>

  );

}
