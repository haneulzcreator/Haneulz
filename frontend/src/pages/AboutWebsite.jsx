export default function AboutWebsite() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20">

      <div className="mx-auto max-w-4xl">

        {/* Hero */}
        <section className="text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-[color:var(--pink-deep)]">
            ☁ Our Story
          </p>

          <h1 className="mt-5 font-serif-display text-5xl md:text-6xl">
            Welcome to Haneulz Corner
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            A little corner on the internet, made with love for every Hansum.
          </p>

          <div className="mx-auto mt-10 max-w-xl rounded-[2rem] glass p-8">
            <p className="font-serif-display text-xl italic">
              "Every archive begins with a memory. This one began with a bookmark."
            </p>
          </div>

        </section>


        {/* How It Started */}
        <section className="mt-24">

          <h2 className="font-serif-display text-4xl">
            How It Started ☁
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-[color:var(--ink-soft)]">

            <p>
              Haneulz Corner started as a simple idea from one Hansum who just
              wanted a place where everything about HANEULZ could be found a
              little more easily.
            </p>

            <p>
              Like many fans, I often found myself scrolling through old
              bookmarks, searching for a specific AU, trying to remember where
              I had saved a variety clip, or looking for that one post I loved
              but couldn't find again.
            </p>

            <p>
              After doing that over and over again, I thought —
            </p>

            <p className="font-serif-display text-xl text-[color:var(--ink)]">
              "Why not create one little corner where everything could live
              together?"
            </p>

            <p>
              What started as a personal collection slowly grew into something
              I wanted to share with fellow Hansums.
            </p>

            <p>
              Haneulz Corner isn't an official website. It's simply a fan-made
              archive built with love — a place where stories, memories,
              variety content, and everything that makes HANEULZ special can be
              found a little more easily.
            </p>

            <p>
              Whether you're discovering a new AU, revisiting an old favorite,
              catching up on variety appearances, or simply spending a few
              quiet minutes here, I hope this little corner makes your visit a
              little easier and a little happier.
            </p>

          </div>

        </section>


        {/* What You'll Find Here */}
        <section className="mt-24">

          <h2 className="font-serif-display text-4xl text-center">
            What You'll Find Here ☁
          </h2>

          <p className="mt-4 text-center text-[color:var(--ink-soft)]">
            A little space where Hansums can discover, revisit, and enjoy the
            creativity of the community.
          </p>


          <div className="mt-10 grid gap-6 md:grid-cols-2">


            <div className="glass rounded-[2rem] p-8">
              <div className="text-3xl">📚</div>

              <h3 className="mt-4 font-serif-display text-2xl">
                AU Library
              </h3>

              <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                Explore fan-made stories from talented creators across
                different platforms and discover new favorites.
              </p>
            </div>


            <div className="glass rounded-[2rem] p-8">
              <div className="text-3xl">🎬</div>

              <h3 className="mt-4 font-serif-display text-2xl">
                Variety Corner
              </h3>

              <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                Find HANEULZ variety appearances, memorable moments, and
                videos collected in one place.
              </p>
            </div>


            <div className="glass rounded-[2rem] p-8">
              <div className="text-3xl">☁</div>

              <h3 className="mt-4 font-serif-display text-2xl">
                Our Little Corner
              </h3>

              <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                Learn more about HANEULZ through fun facts, interests,
                favorites, and special moments.
              </p>
            </div>


            <div className="glass rounded-[2rem] p-8">
              <div className="text-3xl">💗</div>

              <h3 className="mt-4 font-serif-display text-2xl">
                Community
              </h3>

              <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                A place created to celebrate the creativity, passion, and
                love shared by Hansums everywhere.
              </p>
            </div>


          </div>

        </section>


        {/* Community Notice */}
        <section className="mt-24 glass rounded-[2rem] p-8">

          <h2 className="font-serif-display text-4xl">
            Community Notice 📢
          </h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-[color:var(--ink-soft)]">

            <p>
              Haneulz Corner is a fan-made directory created to help organize
              and appreciate the amazing creativity within the HANEULZ
              community.
            </p>

            <p>
              All AUs, fan edits, playlists, videos, artwork, and other
              featured content belong entirely to their respective creators.
              This website does not claim ownership of any linked content
              unless otherwise stated.
            </p>

            <p>
              Since many entries link to publicly shared posts, some may
              eventually become unavailable, deleted, or set to private.
              If you notice a broken link or missing content, please feel free
              to let us know so it can be updated.
            </p>

            <p>
              If any creator would like their work removed from Haneulz Corner,
              they are always welcome to contact us, and their request will be
              handled respectfully.
            </p>

            <p>
              Above all, please continue supporting the talented authors,
              artists, editors, and creators whose passion makes this
              community so special.
            </p>

          </div>

        </section>


        {/* Ending */}
        <section className="mt-24 text-center">

          <p className="font-serif-display text-2xl italic">
            Made with lots of love, late-night ideas, and a few too many
            bookmarks.
          </p>

          <p className="mt-4 font-serif-display text-xl">
            — K ☁💗
          </p>

        </section>


      </div>

    </main>
  );
}
