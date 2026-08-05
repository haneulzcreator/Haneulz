export default function AboutHaneulz() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24 overflow-hidden">

      {/* Floating decorations */}
      <div className="pointer-events-none fixed top-32 left-10 text-4xl opacity-40">
        ☁️
      </div>
      <div className="pointer-events-none fixed top-64 right-10 text-3xl opacity-40">
        💗
      </div>

      <div className="mx-auto max-w-5xl">

        {/* Hero */}
        <section className="text-center">

          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[color:var(--pink)] text-5xl shadow-lg">
            ☁️
          </div>

          <p className="mt-7 uppercase tracking-[0.4em] text-xs text-[color:var(--pink-deep)]">
            Our Little Corner
          </p>

          <h1 className="mt-5 font-serif-display text-5xl md:text-7xl">
            Welcome to
            <br />
            Haneulz Corner 💗
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[color:var(--ink-soft)]">
            A small cozy corner created by a Hansum, for Hansums —
            a place where stories, memories, music, and moments of HANEULZ
            can stay together.
          </p>

          <div className="mx-auto mt-10 flex justify-center gap-3 text-2xl">
            ☁️ 💗 ☁️
          </div>

        </section>


        {/* Beginning Story */}
        <section className="mt-20 glass rounded-[2.5rem] p-8 md:p-14">

          <h2 className="font-serif-display text-4xl">
            ☁️ How This Little Corner Started
          </h2>


          <div className="mt-8 space-y-7 text-[color:var(--ink-soft)] leading-8">

            <p>
              Haneulz Corner started from a simple thought:
              <span className="font-medium text-[color:var(--ink)]">
                {" "}what if there was one little place where everything about
                HANEULZ could be found more easily?
              </span>
            </p>


            <p>
              Like many fans, I experienced those moments of searching through
              endless bookmarks, scrolling through old posts, trying to find
              that one AU that made me smile, that one variety clip I wanted to
              watch again, or that one memory I knew I saved somewhere.
            </p>


            <div className="rounded-3xl bg-[color:var(--pink)] p-7 text-center">

              <p className="font-serif-display text-2xl text-[color:var(--ink)]">
                "Maybe we just need a little corner where all these memories
                can stay together."
              </p>

            </div>


            <p>
              What started as a personal collection slowly became something
              bigger — a small space that could also be shared with fellow
              Hansums who love HANEULZ just as much.
            </p>


            <p>
              This website is not an official platform.
              It is simply a passion project made with appreciation, creativity,
              and love for the HANEULZ community.
            </p>


            <p>
              Whether you are here to discover a new story, revisit an old
              favorite, find a memorable clip, or simply spend a few quiet
              moments surrounded by things made by fans —
              I hope Haneulz Corner feels like a warm little home on the internet.
            </p>

          </div>

        </section>



        {/* Mission */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="glass rounded-[2rem] p-7 text-center">

            <div className="text-4xl">
              📚
            </div>

            <h3 className="mt-4 font-serif-display text-2xl">
              Preserve Memories
            </h3>

            <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
              Keeping favorite stories, moments, and creations easier to find
              and revisit.
            </p>

          </div>


          <div className="glass rounded-[2rem] p-7 text-center">

            <div className="text-4xl">
              💗
            </div>

            <h3 className="mt-4 font-serif-display text-2xl">
              Celebrate Fans
            </h3>

            <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
              A place that appreciates the creativity and passion of Hansums.
            </p>

          </div>


          <div className="glass rounded-[2rem] p-7 text-center">

            <div className="text-4xl">
              ☁️
            </div>

            <h3 className="mt-4 font-serif-display text-2xl">
              Create a Home
            </h3>

            <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
              A peaceful corner where fans can always come back to.
            </p>

          </div>


        </section>



        {/* What's Inside */}
        <section className="mt-20">

          <h2 className="text-center font-serif-display text-4xl">
            What's Waiting Inside? ☁️
          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-center text-[color:var(--ink-soft)]">
            Explore different parts of our little corner made especially for
            the HANEULZ community.
          </p>


          <div className="mt-10 grid gap-5 md:grid-cols-2">


            {[
              {
                icon:"📖",
                title:"AU Library",
                text:"Discover fan-written stories and revisit unforgettable AUs created by talented Hansums."
              },
              {
                icon:"🎬",
                title:"Variety Corner",
                text:"A collection of HANEULZ moments, appearances, and videos worth remembering."
              },
              {
                icon:"🎵",
                title:"Hansum Playlists",
                text:"Songs and playlists that bring comfort, memories, and HANEULZ feelings."
              },
              {
                icon:"✨",
                title:"Community Space",
                text:"A place celebrating fan creativity, love, and the little things that make this fandom special."
              }
            ].map((item)=>(
              <div
                key={item.title}
                className="glass rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2"
              >

                <div className="text-5xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-serif-display text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-sm text-[color:var(--ink-soft)]">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </section>



        {/* Community Notice */}
        <section className="mt-20 glass rounded-[2.5rem] p-8 md:p-12">


          <h2 className="font-serif-display text-4xl">
            📢 A Little Community Note
          </h2>


          <div className="mt-7 space-y-6 leading-8 text-[color:var(--ink-soft)]">

            <p>
              Haneulz Corner is a fan-made directory created to organize,
              appreciate, and celebrate the amazing creativity within the
              HANEULZ community.
            </p>


            <p>
              All AUs, fan edits, playlists, videos, artwork, and featured
              creations belong to their original creators.
              This website does not claim ownership of any linked works.
            </p>


            <p>
              Some links may change, disappear, or become unavailable over
              time. If you notice something that needs updating, please feel
              free to reach out.
            </p>


            <p>
              Above all, please continue supporting the writers, artists,
              editors, and creators whose passion makes this community special.
            </p>


          </div>

        </section>



        {/* Signature */}
        <section className="mt-24 text-center">

          <div className="text-3xl">
            ☁️💗
          </div>

          <p className="mt-6 font-serif-display text-3xl italic">
            Made with lots of love,
            <br/>
            late-night ideas,
            <br/>
            and a few too many bookmarks.
          </p>

          <p className="mt-6 text-xl">
            — K ☁️💗
          </p>


        </section>


      </div>

    </main>
  );
}
