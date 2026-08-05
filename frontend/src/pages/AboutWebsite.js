export default function AboutHaneulz() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-24">

      <div className="mx-auto max-w-4xl">

        {/* Hero */}
        <section className="text-center">

          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[color:var(--pink)] text-5xl shadow-lg">
            ☁️
          </div>

          <p className="mt-8 uppercase tracking-[0.4em] text-xs text-[color:var(--pink-deep)]">
            Our Little Corner
          </p>

          <h1 className="mt-5 font-serif-display text-5xl md:text-6xl">
            Welcome to Haneulz Corner 💗
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            A small corner on the internet created with love,
            where memories, stories, and little moments of HANEULZ
            can stay together. ☁️
          </p>

        </section>


        {/* Main Story */}
        <section className="mt-20 glass rounded-[2.5rem] p-8 md:p-12">

          <h2 className="font-serif-display text-3xl">
            ☁️ The Story Behind This Little Corner
          </h2>


          <div className="mt-8 space-y-7 text-[color:var(--ink-soft)] leading-8">


            <p>
              Haneulz Corner started from a simple thought:
              <span className="font-medium text-[color:var(--ink)]">
                {" "}what if there was a place where every little HANEULZ
                memory could be found again?
              </span>
            </p>


            <p>
              Like many fans, I found myself saving posts, bookmarking stories,
              looking for old videos, and trying to remember where I found
              something that made me smile before.
            </p>


            <p>
              Sometimes it was a story that kept me awake because I wanted to
              know what happened next. Sometimes it was a funny variety moment
              that I wanted to watch again. Sometimes it was simply a small
              interaction that reminded me why I became a fan.
            </p>


            <div className="rounded-3xl bg-[color:var(--pink)] p-7 text-center">

              <p className="font-serif-display text-2xl text-[color:var(--ink)]">
                "Maybe these little moments deserve a place where they can stay."
              </p>

            </div>


            <p>
              And that was where Haneulz Corner began.
            </p>


            <p>
              What started as a personal collection slowly became a small
              archive that I wanted to share with other Hansums — a place where
              fans can discover stories, revisit memories, and appreciate the
              creativity of the community.
            </p>


            <p>
              This website is not an official HANEULZ platform.
              It is simply a passion project made by a fan who wanted to create
              a cozy little space filled with the things that make being a
              Hansum special.
            </p>


            <p>
              Whether you are a longtime fan or someone who is just discovering
              HANEULZ, I hope this corner feels welcoming.
              A place where you can stay for a while, find something new,
              remember something old, and enjoy the wonderful creativity
              shared by fellow fans.
            </p>

          </div>

        </section>



        {/* Purpose */}
        <section className="mt-16">

          <h2 className="text-center font-serif-display text-4xl">
            Why Haneulz Corner Exists ☁️
          </h2>


          <div className="mt-8 grid gap-5 md:grid-cols-3">

            {[
              {
                icon:"📚",
                title:"Remember",
                text:"To keep track of stories, moments, and creations that deserve to be remembered."
              },
              {
                icon:"💗",
                title:"Appreciate",
                text:"To celebrate the amazing creativity and effort shared by Hansums."
              },
              {
                icon:"☁️",
                title:"Connect",
                text:"To create a small welcoming space where fans can enjoy HANEULZ together."
              }
            ].map((item)=>(
              <div
                key={item.title}
                className="glass rounded-[2rem] p-7 text-center transition hover:-translate-y-2"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-serif-display text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </section>




        {/* What's Inside */}
        <section className="mt-20 glass rounded-[2.5rem] p-8 md:p-12">

          <h2 className="text-center font-serif-display text-3xl">
            What's Waiting Inside? 💗
          </h2>


          <div className="mt-8 space-y-5">

            {[
              ["📚","AU Library","Discover stories created by talented Hansums and revisit favorites whenever you want."],
              ["🎬","Variety Corner","A collection of HANEULZ moments, videos, and memories worth keeping."],
              ["🎵","Playlist Corner","Songs and playlists that remind us of HANEULZ and special memories."],
              ["💌","Community Space","A place celebrating the creativity and love shared by fans."]
            ].map(([icon,title,text])=>(
              
              <div
                key={title}
                className="rounded-3xl border border-[color:var(--line)] p-6"
              >

                <h3 className="font-serif-display text-2xl">
                  {icon} {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[color:var(--ink-soft)]">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </section>




        {/* Community Notice */}

        <section className="mt-16 glass rounded-[2.5rem] p-8 md:p-12">

          <h2 className="font-serif-display text-3xl">
            📢 A Little Community Note
          </h2>


          <div className="mt-6 space-y-5 leading-8 text-[color:var(--ink-soft)]">

            <p>
              Haneulz Corner is a fan-made directory created to organize,
              appreciate, and celebrate the creativity within the HANEULZ
              community.
            </p>

            <p>
              Every AU, fan edit, artwork, playlist, video, and featured work
              belongs to its original creator. This website does not claim
              ownership of any linked content.
            </p>

            <p>
              The purpose of this corner is simply to make things easier to
              discover, easier to revisit, and easier to appreciate.
            </p>

            <p>
              Thank you to every author, artist, editor, creator, and fan who
              continues to make this community special. 💗
            </p>

          </div>

        </section>



        {/* Signature */}

        <section className="mt-20 text-center">

          <p className="font-serif-display text-2xl italic">
            Made with lots of love,
            late-night ideas,
            and a few too many bookmarks.
          </p>

          <p className="mt-5 text-xl">
            — K ☁️💗
          </p>

        </section>


      </div>

    </main>
  );
}
