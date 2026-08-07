import { useState } from "react";
import MemoryMatch from "../Game/MemoryMatch";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

import {
  Music2,
  Gamepad2,
  Palette,
  Mail,
  Cloud,
  UserRound,
  Heart,
  Sparkles,
} from "lucide-react";


export default function OurLittleCorner() {

  const [activeTab, setActiveTab] = useState("haneulz");
  const [openGame, setOpenGame] = useState(null);


  const tabs = [
    {
      id: "haneulz",
      name: "☁ HANEULZ",
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

            A small archive of stories,
            memories, music, and moments
            created with love.

          </p>


        </Reveal>

      </section>





      {/* TABS */}

      <section className="mx-auto mt-16 max-w-6xl px-6">


        <div className="glass rounded-[2rem] p-4">


          <div className="flex flex-wrap justify-center gap-3">


            {tabs.map((tab)=>{

              const Icon = tab.icon;


              return (

                <button

                  key={tab.id}

                  onClick={() => setActiveTab(tab.id)}

                  className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm transition

                  ${
                    activeTab === tab.id
                    ? "bg-black text-white"
                    : "bg-white/50 hover:bg-white"
                  }

                  `}

                >

                  <Icon size={16}/>

                  {tab.name}

                </button>

              );

            })}


          </div>


        </div>


      </section>







      {/* CONTENT AREA */}

      <section className="mx-auto mt-16 max-w-6xl px-6">


        {activeTab === "haneulz" && (

          <Reveal>

            <div className="glass rounded-[3rem] p-8 md:p-12">


              <h2 className="font-serif-display text-5xl">
                ☁ HANEULZ
              </h2>


              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--ink-soft)]">

                A story written through two voices,
                shared memories, and the journey
                that brought HANEULZ together.

              </p>



              <div className="mt-10 grid gap-6 md:grid-cols-2">


                <div className="rounded-[2rem] border border-[color:var(--line)] p-6">

                  <Sparkles size={20}/>

                  <h3 className="mt-4 font-serif-display text-3xl">

                    The Beginning

                  </h3>


                  <p className="mt-3 leading-7 text-sm">

                    Their journey began from Universe League,
                    where two talented voices slowly became
                    a story that fans continued to treasure.

                  </p>


                </div>





                <div className="rounded-[2rem] border border-[color:var(--line)] p-6">

                  <Heart size={20}/>


                  <h3 className="mt-4 font-serif-display text-3xl">

                    Memories

                  </h3>


                  <p className="mt-3 leading-7 text-sm">

                    A collection of performances,
                    interviews, and moments that shaped
                    the story of HANEULZ.

                  </p>


                </div>


              </div>


            </div>


          </Reveal>

        )}





        {activeTab === "jl" && (

          <Placeholder title="JL Corner" />

        )}



        {activeTab === "han" && (

          <Placeholder title="Han Corner" />

        )}



        {activeTab === "spotify" && (

          <Placeholder title="Spotify Corner" />

        )}



        {activeTab === "games" && (

          <Reveal>

            <div className="rounded-[3rem] bg-[color:var(--pink)] p-10">


              <h2 className="font-serif-display text-5xl">

                Game Room

              </h2>


              <button

                onClick={() => setOpenGame("memory")}

                className="mt-8 rounded-full bg-white px-6 py-3 text-sm"

              >

                Play Memory Game

              </button>


            </div>


          </Reveal>

        )}



        {activeTab === "gallery" && (

          <Placeholder title="Fan Art Gallery" />

        )}



        {activeTab === "letters" && (

          <Placeholder title="Letter To HANEULZ" />

        )}



      </section>






      {openGame === "memory" && (

        <MemoryMatch

          onClose={() => setOpenGame(null)}

        />

      )}





      <Footer />


    </div>

  );

}





function Placeholder({title}){

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
