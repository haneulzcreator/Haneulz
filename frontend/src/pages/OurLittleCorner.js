export default function OurLittleCorner() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <section className="text-center">

          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[color:var(--pink)] text-4xl">
            🎵☁️
          </div>

          <p className="mt-6 uppercase tracking-[0.35em] text-sm text-[color:var(--pink-deep)]">
            Our Little Corner
          </p>

          <h1 className="mt-4 font-serif-display text-5xl md:text-6xl">
            A Little Space for HANEULZ 💗
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            A cozy corner filled with music, memories, and little things that remind us of HANEULZ.
          </p>

        </section>


        {/* Spotify */}
        <section className="mt-20">

          <h2 className="text-center font-serif-display text-4xl">
            🎵 Playlist Corner
          </h2>

          <p className="mt-3 text-center text-[color:var(--ink-soft)]">
            Songs that bring us back to HANEULZ moments.
          </p>


          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="glass rounded-[2rem] p-8">

              <div className="text-4xl">
                🎧
              </div>

              <h3 className="mt-5 font-serif-display text-3xl">
                Hansum Playlist
              </h3>

              <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                A collection of songs chosen by fans that feel like HANEULZ.
              </p>

              <button className="mt-6 rounded-full bg-black px-6 py-3 text-sm text-white">
                Open Spotify
              </button>

            </div>



            <div className="glass rounded-[2rem] p-8">

              <div className="text-4xl">
                💙
              </div>

              <h3 className="mt-5 font-serif-display text-3xl">
                Han Playlist
              </h3>

              <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                Songs that remind us of Han and his special moments.
              </p>

              <button className="mt-6 rounded-full bg-black px-6 py-3 text-sm text-white">
                Open Spotify
              </button>

            </div>

          </div>

        </section>


        {/* Future section */}
        <section className="mt-20 glass rounded-[2rem] p-8 text-center">

          <h2 className="font-serif-display text-3xl">
            More Little Things Coming Soon ☁️
          </h2>

          <p className="mt-4 text-[color:var(--ink-soft)]">
            Favorite songs, memories, fun facts, and more HANEULZ moments will live here.
          </p>

        </section>


      </div>

    </main>
  );
}
