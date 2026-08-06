import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-32 pb-24">

      {/* Floating decorations */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute left-8 top-40 text-6xl opacity-40"
      >
        ☁️
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="pointer-events-none absolute right-10 top-80 text-5xl opacity-30"
      >
        💗
      </motion.div>


      {/* Hero */}
      <section className="mx-auto max-w-5xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[color:var(--pink)] text-5xl">
            ☁️
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.4em] text-[color:var(--pink-deep)]">
            About Haneulz Corner
          </p>


          <h1 className="mt-5 font-serif-display text-6xl leading-tight md:text-8xl">
            More Than Just
            <br />
            An Archive
          </h1>


          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[color:var(--ink-soft)]">
            A little corner on the internet created with love,
            memories, and a dream of keeping everything
            HANEULZ in one cozy place.
          </p>

        </motion.div>

      </section>



      {/* Story */}
      <Reveal>
        <section className="mx-auto mt-24 max-w-4xl">

          <div className="glass rounded-[2rem] p-8 md:p-12">

            <h2 className="font-serif-display text-4xl">
              💌 How This Little Corner Began
            </h2>


            <div className="mt-8 space-y-6 text-lg leading-9 text-[color:var(--ink-soft)]">

              <p>
                Haneulz Corner started from a simple idea:
                creating a place where fans could easily find
                the stories, moments, and memories they love.
              </p>


              <p>
                Like many Hansums, I had countless saved posts,
                bookmarks, screenshots, and videos scattered
                everywhere.
              </p>


              <p>
                Sometimes I wanted to revisit something special,
                but finding it again felt impossible.
              </p>


              <p className="rounded-3xl bg-[color:var(--pink)] p-6 font-serif-display text-2xl text-[color:var(--ink)]">
                "What if there was one little corner where
                everything could stay together?"
              </p>


              <p>
                And that small thought slowly became
                Haneulz Corner.
              </p>

            </div>

          </div>

        </section>
      </Reveal>




      {/* Coding story */}
      <Reveal>
        <section className="mx-auto mt-16 max-w-4xl">

          <div className="glass rounded-[2rem] p-8 md:p-12">

            <h2 className="font-serif-display text-4xl">
              💻 Something I Never Expected
            </h2>


            <div className="mt-8 space-y-6 text-lg leading-9 text-[color:var(--ink-soft)]">

              <p>
                The funny thing is...
                I never imagined I would learn coding because
                of a fandom.
              </p>


              <p>
                I started this project without knowing how
                websites were created.
              </p>


              <p>
                I learned step by step — fixing errors,
                rebuilding pages, and celebrating every small
                thing that finally worked.
              </p>


              <p>
                There were times when the website broke,
                pages went blank, and I had no idea what
                I was doing.
              </p>


              <p className="font-serif-display text-2xl text-[color:var(--ink)]">
                I didn't build this because I knew how.
                I built this because I cared enough to learn.
              </p>

            </div>

          </div>

        </section>
      </Reveal>





      {/* Memory cards */}
      <Reveal>
        <section className="mx-auto mt-16 max-w-4xl">

          <div className="glass rounded-[2rem] p-8">

            <h2 className="font-serif-display text-3xl">
              📌 Little Things That Made This Possible
            </h2>


            <div className="mt-8 grid gap-5 md:grid-cols-3">

              {[
                {
                  icon:"☕",
                  title:"Late Nights",
                  text:"Building this corner one little step at a time."
                },
                {
                  icon:"💻",
                  title:"Learning",
                  text:"Turning mistakes into lessons and memories."
                },
                {
                  icon:"💗",
                  title:"Love",
                  text:"Creating something special for fellow Hansums."
                }
              ].map((item)=>(
                <div
                  key={item.title}
                  className="rounded-3xl bg-[color:var(--pink)] p-6"
                >

                  <div className="text-4xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-serif-display text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[color:var(--ink-soft)]">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>
      </Reveal>





      {/* Made by Hansum */}
      <Reveal>
        <section className="mx-auto mt-16 max-w-4xl">

          <div className="rounded-[2rem] bg-[color:var(--pink)] p-10 text-center">

            <h2 className="font-serif-display text-4xl">
              💗 Made by a Hansum,
              <br />
              for Hansums
            </h2>


            <p className="mx-auto mt-6 max-w-xl leading-8">
              Haneulz Corner is a passion project created
              because HANEULZ brought happiness,
              inspiration, and unforgettable moments.
            </p>

          </div>

        </section>
      </Reveal>





      {/* Community */}
      <Reveal>
        <section className="mx-auto mt-16 max-w-4xl">

          <div className="glass rounded-[2rem] p-8">

            <h2 className="font-serif-display text-3xl">
              📢 Community Notice
            </h2>


            <p className="mt-5 leading-8 text-[color:var(--ink-soft)]">
              Haneulz Corner is a fan-made directory created
              to organize and appreciate the creativity
              within the HANEULZ community.
            </p>


            <p className="mt-5 leading-8 text-[color:var(--ink-soft)]">
              All AUs, fan edits, playlists, videos, artwork,
              and featured content belong to their original
              creators.
            </p>


          </div>

        </section>
      </Reveal>




      {/* Signature */}
      <Reveal>
        <section className="mt-20 text-center">

          <p className="font-serif-display text-3xl italic">
            Made with lots of love,
            late-night ideas,
            and a few too many bookmarks.
          </p>


          <p className="mt-5 text-xl">
            — K ☁️💗
          </p>

        </section>
      </Reveal>


    </main>
  );
}
