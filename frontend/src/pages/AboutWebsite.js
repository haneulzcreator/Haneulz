import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-32 pb-24">

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-10 top-40 text-7xl opacity-40"
      >
        ☁️
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute right-10 top-96 text-5xl opacity-30"
      >
        💗
      </motion.div>



      {/* COVER */}
      <section className="mx-auto max-w-5xl text-center">

        <motion.div
          initial={{opacity:0, y:40}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
        >

          <p className="text-xs uppercase tracking-[0.5em] text-[color:var(--pink-deep)]">
            About Haneulz Corner
          </p>


          <h1 className="mt-8 font-serif-display text-6xl md:text-9xl">
            A Little Sky
            <br/>
            Where Memories Stay ☁️
          </h1>


          <p className="mx-auto mt-10 max-w-2xl text-xl leading-9 text-[color:var(--ink-soft)]">
            A fan-made corner created with love,
            late nights, and a dream of keeping
            HANEULZ memories together.
          </p>


          <div className="mt-10 inline-block rounded-full bg-[color:var(--pink)] px-6 py-3 text-sm">
            Made by a Hansum, for Hansums 💗
          </div>


        </motion.div>

      </section>





      {/* LETTER */}
      <Reveal>
      <section className="mx-auto mt-24 max-w-4xl">

        <div className="glass rounded-[2.5rem] p-10 md:p-14">

          <p className="text-sm uppercase tracking-widest text-[color:var(--pink-deep)]">
            Dear Hansums,
          </p>


          <div className="mt-8 space-y-7 text-lg leading-9 text-[color:var(--ink-soft)]">

            <p>
              Welcome to Haneulz Corner. ☁️
            </p>


            <p>
              This website started from a very simple thought:
              "I wish there was a place where everything
              about HANEULZ could stay together."
            </p>


            <p>
              Like many fans, I had so many saved posts,
              screenshots, bookmarks, and videos.
              Every memory was somewhere different.
            </p>


            <p>
              Sometimes I wanted to find that one AU,
              that one variety moment, or that one post
              that made me smile again.
            </p>


            <p className="rounded-3xl bg-[color:var(--pink)] p-6 font-serif-display text-2xl text-[color:var(--ink)]">
              So I decided to create a little corner
              where memories could stay.
            </p>


          </div>

        </div>

      </section>
      </Reveal>






      {/* CODING JOURNEY */}
      <Reveal>
      <section className="mx-auto mt-20 max-w-4xl">

        <h2 className="text-center font-serif-display text-5xl">
          💻 The Little Coding Journey
        </h2>


        <div className="mt-10 space-y-5">


          {[
            ["☁️ The Idea",
            "A simple wish to create a home for HANEULZ memories."],

            ["💻 The First Step",
            "Learning how websites work even without knowing where to start."],

            ["😭 The Struggles",
            "Broken pages, errors, blank screens, and many moments of confusion."],

            ["✨ The Little Victory",
            "Seeing Haneulz Corner finally become something real."]
          ].map((item,index)=>(

            <motion.div
              key={item[0]}
              initial={{opacity:0,x:-30}}
              whileInView={{opacity:1,x:0}}
              transition={{delay:index*0.1}}
              className="glass rounded-[2rem] p-7"
            >

              <h3 className="font-serif-display text-2xl">
                {item[0]}
              </h3>

              <p className="mt-3 text-[color:var(--ink-soft)]">
                {item[1]}
              </p>

            </motion.div>

          ))}


        </div>

      </section>
      </Reveal>






      {/* MEMORY SHELF */}
      <Reveal>
      <section className="mx-auto mt-20 max-w-5xl">


        <h2 className="text-center font-serif-display text-5xl">
          ☁️ What Lives Inside Our Corner?
        </h2>


        <div className="mt-10 grid gap-6 md:grid-cols-4">


        {[
          ["📚","AU Library","Stories waiting to be discovered."],
          ["🎬","Variety Corner","Moments worth replaying."],
          ["🎵","Playlists","Songs that feel like HANEULZ."],
          ["💌","Community","A space made with fans."]
        ].map(item=>(

          <div
          key={item[1]}
          className="rounded-[2rem] bg-[color:var(--pink)] p-6"
          >

            <div className="text-4xl">
              {item[0]}
            </div>

            <h3 className="mt-4 font-serif-display text-xl">
              {item[1]}
            </h3>

            <p className="mt-3 text-sm">
              {item[2]}
            </p>

          </div>

        ))}


        </div>


      </section>
      </Reveal>







      {/* END */}
      <Reveal>
      <section className="mx-auto mt-24 max-w-3xl text-center">


        <div className="rounded-[3rem] bg-[color:var(--pink)] p-10">


          <h2 className="font-serif-display text-4xl">
            Thank you for visiting
            <br/>
            my little corner ☁️
          </h2>


          <p className="mt-6 text-lg leading-8">
            I hope whenever you come here,
            it feels like a small place to rest,
            remember, and enjoy HANEULZ.
          </p>


          <p className="mt-8 font-serif-display text-2xl italic">
            Made with lots of love,
            late-night ideas,
            and a few too many bookmarks.
          </p>


          <p className="mt-5 text-xl">
            — K ☁️💗
          </p>


        </div>


      </section>
      </Reveal>


    </main>
  );
}
