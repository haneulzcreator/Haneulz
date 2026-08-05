export default function AboutHaneulz() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20">

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <section className="text-center">

          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[color:var(--pink)] text-4xl">
            ☁️
          </div>

          <p className="mt-6 uppercase tracking-[0.35em] text-sm text-[color:var(--pink-deep)]">
            Our Little Corner
          </p>

          <h1 className="mt-4 font-serif-display text-5xl md:text-6xl">
            Welcome to Haneulz Corner 💗
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            A tiny corner on the internet where memories, stories, and love for
            HANEULZ are kept together.
          </p>

        </section>


        {/* Story */}
        <section className="mt-20 glass rounded-[2rem] p-8 md:p-12">

          <h2 className="font-serif-display text-3xl">
            ☁ How This Little Corner Began
          </h2>

          <div className="mt-8 space-y-6 leading-8 text-[color:var(--ink-soft)]">

            <p>
              Haneulz Corner started as a simple idea from one Hansum who just
              wanted a place where everything about HANEULZ could be found a
              little more easily.
            </p>

            <p>
              Like many fans, I found myself scrolling through old bookmarks,
              searching for a specific AU, trying to remember where I saved a
              favorite variety clip, or looking for a post I loved but couldn't
              find again.
            </p>

            <p className="rounded-2xl bg-[color:var(--pink)] p-5 font-serif-display text-xl text-[color:var(--ink)]">
              "Why not create one little corner where everything could live
              together?"
            </p>

            <p>
              What started as a personal collection slowly became something I
              wanted to share with fellow Hansums.
            </p>

            <p>
              Haneulz Corner is not an official website. It is simply a
              fan-made passion project created with love for the HANEULZ
              community.
            </p>

            <p>
              Whether you are discovering a new AU, revisiting an old favorite,
              watching variety moments, or simply spending a little time here,
              I hope this corner feels like a cozy place you can always return
              to.
            </p>

          </div>

        </section>


        {/* What this corner has */}
        <section className="mt-16">

          <h2 className="text-center font-serif-display text-4xl">
            What's Inside Our Corner? ☁️
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">

            {[
              {
                icon: "📚",
                title: "AU Library",
                text: "A place to discover and revisit stories created by talented Hansums."
              },
              {
                icon: "🎬",
                title: "Variety Corner",
                text: "A collection of HANEULZ moments, appearances, and memories."
              },
              {
                icon: "💗",
                title: "Community",
                text: "A space celebrating the creativity and love of fellow fans."
              },
              {
                icon: "🎵",
                title: "Playlists",
                text: "Music that reminds us of HANEULZ and special moments."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="glass rounded-[1.75rem] p-7 transition hover:-translate-y-1"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-serif-display text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* Notice */}
        <section className="mt-16 glass rounded-[2rem] p-8">

          <h2 className="font-serif-display text-3xl">
            📢 A Small Community Note
          </h2>

          <p className="mt-5 leading-8 text-[color:var(--ink-soft)]">
            Haneulz Corner is a fan-made directory created to organize and
            appreciate the amazing creativity within the HANEULZ community.
          </p>

          <p className="mt-5 leading-8 text-[color:var(--ink-soft)]">
            All AUs, edits, playlists, videos, artwork, and other featured
            content belong to their original creators. This website does not
            claim ownership of any linked works.
          </p>

          <p className="mt-5 leading-8 text-[color:var(--ink-soft)]">
            This corner simply exists to help fans discover, revisit, and
            support the wonderful creations shared by the community.
          </p>

        </section>


        {/* Ending */}
        <section className="mt-20 text-center">

          <p className="font-serif-display text-2xl italic">
            Made with lots of love, late-night ideas,
            and a few too many bookmarks.
          </p>

          <p className="mt-4 text-xl">
            — K ☁️💗
          </p>

        </section>


      </div>

    </main>
  );
}
