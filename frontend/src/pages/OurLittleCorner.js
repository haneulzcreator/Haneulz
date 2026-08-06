import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";
import { Music2, Gamepad2, Heart, Sparkles } from "lucide-react";

const sections = [
  {
    icon: Music2,
    title: "Spotify Corner",
    text:
      "A little collection of playlists made for moments, memories, and everything that reminds us of HANEULZ.",
  },
  {
    icon: Gamepad2,
    title: "Game Corner",
    text:
      "Take a break and enjoy fun games, quizzes, and fan-made activities created for Hansums.",
  },
  {
    icon: Heart,
    title: "Fan Notes",
    text:
      "A place for little messages, memories, and things shared by the community.",
  },
];


export default function OurLittleCorner() {
  return (
    <div className="pt-32">

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6">

        <Reveal>

          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            A small place for little things
          </p>


          <h1 className="mt-5 max-w-4xl font-serif-display text-6xl font-medium leading-none md:text-8xl">
            Our Little
            <br />
            Corner
          </h1>


          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[color:var(--ink-soft)]">
            A cozy space filled with playlists, games,
            and little moments created for Hansums.
          </p>

        </Reveal>

      </section>


      {/* FEATURE SECTIONS */}
      <section className="mx-auto mt-20 grid max-w-6xl gap-6 px-6 md:grid-cols-3">

        {sections.map((item,index)=>(

          <Reveal key={item.title} delay={index*0.1}>

            <div className="glass rounded-[2.5rem] p-8">

              <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--pink)]">

                <item.icon size={22}/>

              </div>


              <h2 className="mt-6 font-serif-display text-3xl">
                {item.title}
              </h2>


              <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
                {item.text}
              </p>


            </div>

          </Reveal>

        ))}

      </section>


      {/* SPOTIFY */}
      <section className="mx-auto mt-24 max-w-6xl px-6">

        <Reveal>

          <div className="glass rounded-[3rem] p-10 md:p-14">

            <div className="flex items-center gap-3">

              <Music2 />

              <h2 className="font-serif-display text-5xl">
                Spotify Corner
              </h2>

            </div>


            <p className="mt-5 max-w-2xl text-lg text-[color:var(--ink-soft)]">
              Listen to playlists created for different moods
              and moments.
            </p>


            <div className="mt-10 rounded-[2rem] border border-[color:var(--line)] p-10 text-center">

              <Sparkles className="mx-auto" />

              <p className="mt-4 text-[color:var(--ink-soft)]">
                Spotify playlists will be added here.
              </p>

            </div>


          </div>

        </Reveal>

      </section>



      {/* GAME CORNER */}
      <section className="mx-auto mt-24 max-w-6xl px-6">

        <Reveal>

          <div className="glass rounded-[3rem] p-10 md:p-14">

            <div className="flex items-center gap-3">

              <Gamepad2 />

              <h2 className="font-serif-display text-5xl">
                Game Corner
              </h2>

            </div>


            <p className="mt-5 max-w-2xl text-lg text-[color:var(--ink-soft)]">
              A fun little space for games and activities
              made for the HANEULZ community.
            </p>



            <div className="mt-10 grid gap-6 md:grid-cols-3">


              <div className="rounded-[2rem] bg-[color:var(--pink)] p-8">

                <h3 className="font-serif-display text-2xl">
                  Coming Soon
                </h3>

                <p className="mt-3 text-sm">
                  Fan games and quizzes will appear here.
                </p>

              </div>


            </div>


          </div>

        </Reveal>

      </section>

      {/* END */}
      <section className="mx-auto mt-24 max-w-4xl px-6 text-center">

        <Reveal>

          <p className="font-serif-display text-3xl italic">
            A small corner made for memories,
            creativity, and fun.
          </p>


          <p className="mt-6">
            — K
          </p>

        </Reveal>

      </section>


      <Footer />

    </div>
  );
}
