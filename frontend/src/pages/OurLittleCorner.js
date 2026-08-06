import { useState } from "react";
import MemoryMatch from "../Game/MemoryMatch";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";
import {
  Music2,
  Gamepad2,
  ArrowUpRight,
  Sparkles,
  Heart,
} from "lucide-react";


const playlists = [
  {
    title: "HANEULZ Playlist",
    description:
      "Songs that feel like memories, comfort, and the little moments that remind us of HANEULZ.",
  },
  {
    title: "JL's Playlist",
    description:
      "A collection of songs that match JL's energy, warmth, and bright moments.",
  },
  {
    title: "Han's Playlist",
    description:
      "A softer corner filled with songs that carry Han's calm and emotional charm.",
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
      "Match the memories and moments hidden inside the corner.",
    status: "Coming Soon",
  },
  {
    title: "Fan Challenge",
    description:
      "Small challenges made for Hansums to enjoy.",
    status: "Coming Soon",
  },
];


export default function OurLittleCorner() {

  const [openGame, setOpenGame] = useState(null);

  return (
    <div className="pt-32">


      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6">

        <Reveal>

          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            A hidden space inside Haneulz
          </p>


          <h1 className="mt-5 font-serif-display text-6xl font-medium leading-none md:text-8xl">
            Our Little
            <br />
            Corner
          </h1>


          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[color:var(--ink-soft)]">
            A small place where playlists, games,
            memories, and little fan moments stay together.
          </p>

        </Reveal>

      </section>







      {/* PLAYLIST SHELF */}
      <section className="mx-auto mt-24 max-w-6xl px-6">

        <Reveal>

          <div className="glass rounded-[3rem] p-8 md:p-12">


            <div className="flex items-center gap-4">

              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#1DB954] text-white">
                <Music2 size={22}/>
              </div>


              <div>

                <p className="text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">
                  Music Shelf
                </p>

                <h2 className="font-serif-display text-5xl">
                  Spotify Corner
                </h2>

              </div>

            </div>





            <div className="mt-10 grid gap-6 md:grid-cols-3">


              {playlists.map((item,index)=>(

                <Reveal key={item.title} delay={index*0.1}>

                  <div className="group rounded-[2rem] border border-[color:var(--line)] bg-white/40 p-7 transition hover:-translate-y-2">


                    <h3 className="font-serif-display text-2xl">
                      {item.title}
                    </h3>


                    <p className="mt-4 text-sm leading-7 text-[color:var(--ink-soft)]">
                      {item.description}
                    </p>



                    <button
                      className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest"
                    >
                      Listen
                      <ArrowUpRight size={14}/>
                    </button>


                  </div>

                </Reveal>

              ))}


            </div>


          </div>

        </Reveal>


      </section>









      {/* GAME ROOM */}
      <section className="mx-auto mt-24 max-w-6xl px-6">


        <Reveal>


          <div className="rounded-[3rem] bg-[color:var(--pink)] p-8 md:p-12">


            <div className="flex items-center gap-4">


              <div className="grid h-12 w-12 place-items-center rounded-full bg-white/60">

                <Gamepad2 size={22}/>

              </div>



              <div>

                <p className="text-xs uppercase tracking-widest">
                  Fun Zone
                </p>

                <h2 className="font-serif-display text-5xl">
                  Game Room
                </h2>

              </div>


            </div>






            <p className="mt-6 max-w-2xl text-lg leading-relaxed">
              A little room for fun activities, quizzes,
              and games created especially for Hansums.
            </p>







            <div className="mt-10 grid gap-6 md:grid-cols-3">


              {games.map((game,index)=>(

                <Reveal key={game.title} delay={index*0.1}>


                  <div className="rounded-[2rem] bg-white/60 p-7 backdrop-blur">


                    <Sparkles size={20}/>


                    <h3 className="mt-5 font-serif-display text-2xl">
                      {game.title}
                    </h3>


                    <p className="mt-3 text-sm leading-7">
                      {game.description}
                    </p>



                    <button
  onClick={() => {
    if(game.title === "Memory Game"){
      setOpenGame("memory");
    }
  }}
  className="mt-6 inline-block rounded-full border border-black/10 px-4 py-2 text-xs uppercase tracking-widest hover:bg-white transition"
>
  {game.title === "Memory Game" ? "Play Now" : game.status}
</button>


                  </div>


                </Reveal>


              ))}



            </div>



          </div>


        </Reveal>


      </section>









      {/* LITTLE NOTE */}
      <section className="mx-auto mt-24 max-w-4xl px-6 text-center">


        <Reveal>


          <Heart className="mx-auto" size={25}/>


          <h2 className="mt-6 font-serif-display text-4xl">
            A Corner Made For Memories
          </h2>



          <p className="mt-5 text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Because sometimes the smallest things —
            a song, a game, or a saved memory —
            become the things we remember the most.
          </p>



          <p className="mt-8">
            — K
          </p>


        </Reveal>


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
