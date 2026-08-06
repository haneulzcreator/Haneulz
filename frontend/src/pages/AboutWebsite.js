import { motion } from "framer-motion";
import { Reveal } from "../components/Reveal";

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-32 pb-24">

      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-[-120px] top-40 h-80 w-80 rounded-full bg-[color:var(--pink)] opacity-20 blur-3xl" />

      <div className="pointer-events-none absolute right-[-120px] top-[600px] h-96 w-96 rounded-full bg-[color:var(--blue)] opacity-20 blur-3xl" />


      {/* Hero */}
      <section className="mx-auto max-w-5xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >

          <p className="text-xs uppercase tracking-[0.45em] text-[color:var(--pink-deep)]">
            About Haneulz Corner
          </p>


          <h1 className="mt-8 font-serif-display text-6xl leading-tight md:text-8xl">
            A Little Corner
            <br />
            Made With Love
          </h1>


          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[color:var(--ink-soft)]">
            A fan-made archive created to keep stories,
            memories, and moments of HANEULZ together
            in one special place.
          </p>

        </motion.div>

      </section>


      {/* Beginning */}
      <Reveal>
        <section className="mx-auto mt-24 max-w-4xl">

          <div className="glass rounded-[2.5rem] p-8 md:p-12">

            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pink-deep)]">
              The Beginning
            </p>


            <h2 className="mt-5 font-serif-display text-4xl">
              How Haneulz Corner Started
            </h2>


            <div className="mt-8 space-y-6 text-lg leading-9 text-[color:var(--ink-soft)]">

              <p>
                Haneulz Corner started from a simple idea:
                creating a place where everything about HANEULZ
                could be found a little more easily.
              </p>


              <p>
                Like many fans, I found myself saving posts,
                bookmarking stories, and keeping memories
                scattered across different places.
              </p>


              <p>
                Sometimes I wanted to revisit a favorite AU,
                find a variety moment again, or share something
                special with other fans.
              </p>


              <p className="font-serif-display text-2xl text-[color:var(--ink)]">
                I wanted to create a small corner where those
                memories could stay.
              </p>


              <p>
                What started as a personal collection slowly
                became something I wanted to share with fellow
                Hansums.
              </p>

            </div>

          </div>

        </section>
      </Reveal>


      {/* Coding Journey */}
      <Reveal>
        <section className="mx-auto mt-20 max-w-4xl">

          <div className="glass rounded-[2.5rem] p-8 md:p-12">

            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pink-deep)]">
              A Personal Journey
            </p>


            <h2 className="mt-5 font-serif-display text-4xl">
              Something I Never Expected
            </h2>


            <div className="mt-8 space-y-6 text-lg leading-9 text-[color:var(--ink-soft)]">

              <p>
                I never thought that being a fan would lead me
                to learning how to build a website.
              </p>


              <p>
                When I started Haneulz Corner, I didn't know
                much about coding or how websites were created.
              </p>


              <p>
                I learned by trying, making mistakes, fixing
                problems, and slowly understanding how
                everything worked.
              </p>


              <p>
                There were moments when pages broke, designs
                didn't work, and I had no idea what went wrong.
              </p>


              <p className="font-serif-display text-2xl text-[color:var(--ink)]">
                But every small improvement became part of
                building this little corner.
              </p>


              <p>
                This website is not just a collection of pages.
                It is also a reminder of something I learned
                because I cared enough to create it.
              </p>

            </div>

          </div>

        </section>
      </Reveal>


      {/* Made by Hansum */}
      <Reveal>
        <section className="mx-auto mt-20 max-w-4xl">

          <div className="rounded-[2.5rem] bg-[color:var(--pink)] p-10 text-center md:p-14">

            <h2 className="font-serif-display text-4xl">
              Made by a Hansum,
              <br />
              for Hansums
            </h2>


            <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
              Haneulz Corner was created as a small passion
              project for fans who want a place to discover,
              revisit, and appreciate the creativity within
              the community.
            </p>

          </div>

        </section>
      </Reveal>


      {/* What is inside */}
      <Reveal>
        <section className="mx-auto mt-20 max-w-5xl">

          <h2 className="text-center font-serif-display text-5xl">
            What You Can Find Here
          </h2>


          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {[
              {
                title: "AU Library",
                text: "A collection of alternate universes and stories shared by talented creators."
              },
              {
                title: "Variety Corner",
                text: "A place to revisit HANEULZ moments, appearances, and memories."
              },
              {
                title: "Playlists",
                text: "Music collections that remind fans of special moments."
              },
              {
                title: "Community",
                text: "A space that celebrates the creativity and passion of Hansums."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="glass rounded-[2rem] p-8"
              >

                <h3 className="font-serif-display text-2xl">
                  {item.title}
                </h3>


                <p className="mt-4 leading-7 text-[color:var(--ink-soft)]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </section>
      </Reveal>


      {/* Community Note */}
      <Reveal>
        <section className="mx-auto mt-20 max-w-4xl">

          <div className="glass rounded-[2.5rem] p-8 md:p-12">

            <h2 className="font-serif-display text-4xl">
              A Note From This Corner
            </h2>


            <div className="mt-6 space-y-5 leading-8 text-[color:var(--ink-soft)]">

              <p>
                Haneulz Corner is a fan-made directory created
                to organize and appreciate the amazing creativity
                within the HANEULZ community.
              </p>


              <p>
                All AUs, fan edits, playlists, videos, artwork,
                and other featured content belong to their
                respective creators.
              </p>


              <p>
                This website exists only to help fans discover,
                revisit, and support the wonderful works shared
                by the community.
              </p>

            </div>

          </div>

        </section>
      </Reveal>



      {/* Ending */}
      <Reveal>
        <section className="mx-auto mt-24 max-w-3xl text-center">

          <p className="font-serif-display text-3xl italic leading-relaxed">
            Made with lots of love,
            late-night ideas,
            and a few too many bookmarks.
          </p>


          <p className="mt-6 text-xl">
            — K
          </p>

        </section>
      </Reveal>


    </main>
  );
}
