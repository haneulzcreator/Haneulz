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

      </div>

    </main>
  );
}
