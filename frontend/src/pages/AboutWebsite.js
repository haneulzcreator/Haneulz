import { motion } from "framer-motion";

export default function AboutHaneulz() {
  const sections = [
    {
      icon: "📚",
      title: "AU Library",
      text: "A cozy shelf of stories created by talented Hansums. Discover new worlds, revisit favorite moments, and support the amazing writers who share their imagination with the community."
    },
    {
      icon: "🎬",
      title: "Variety Corner",
      text: "A little collection of HANEULZ moments, clips, appearances, and memories gathered together so fans can easily find and enjoy them again."
    },
    {
      icon: "🎵",
      title: "Hansum Playlists",
      text: "A collection of songs and playlists that remind us of HANEULZ, special memories, and the feelings that make this corner feel like home."
    },
    {
      icon: "💗",
      title: "Community Love",
      text: "A place that celebrates the creativity, kindness, and passion of every author, editor, artist, and fan who makes the HANEULZ community special."
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden px-6 pt-32 pb-24">

      {/* Floating decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-10 top-40 text-5xl opacity-70 animate-bounce">
          ☁️
        </div>

        <div className="absolute right-12 top-72 text-4xl opacity-70 animate-pulse">
          💗
        </div>

        <div className="absolute left-20 top-[700px] text-3xl">
          ✨
        </div>

        <div className="absolute right-20 top-[1200px] text-5xl opacity-60 animate-bounce">
          ☁️
        </div>

        <div className="absolute left-1/3 top-[1700px] text-3xl">
          💕
        </div>

      </div>


      <div className="relative mx-auto max-w-4xl">


        {/* Header */}

        <motion.section
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.8}}
          className="text-center"
        >

          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[color:var(--pink)] text-5xl shadow">
            ☁️
          </div>


          <p className="mt-8 uppercase tracking-[0.4em] text-sm text-[color:var(--pink-deep)]">
            Our Little Corner
          </p>


          <h1 className="mt-5 font-serif-display text-5xl md:text-6xl">
            Welcome to Haneulz Corner 💗
          </h1>


          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[color:var(--ink-soft)]">
            A tiny corner on the internet where stories, memories,
            playlists, and little pieces of HANEULZ love can stay together.
          </p>

        </motion.section>



        {/* Story */}

        <motion.section
          initial={{opacity:0, y:40}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.8}}
          className="mt-20 glass rounded-[2rem] p-8 md:p-12"
        >

          <h2 className="font-serif-display text-3xl">
            ☁ How This Little Corner Began
          </h2>


          <div className="mt-8 space-y-6 leading-8 text-[color:var(--ink-soft)]">

            <p>
              Haneulz Corner started from a simple thought:
              what if there was a little place where everything about
              HANEULZ could be found more easily?
            </p>


            <p>
              Like many fans, I found myself searching through old bookmarks,
              trying to find a specific AU I loved, looking for a variety clip
              I wanted to watch again, or remembering a post that made me smile
              but was buried somewhere online.
            </p>


            <p className="rounded-3xl bg-[color:var(--pink)] p-6 text-xl font-serif-display text-[color:var(--ink)]">
              "Maybe we just need a small corner where all these memories can stay."
            </p>


            <p>
              What started as a personal collection slowly became a space
              that I wanted to share with fellow Hansums.
            </p>


            <p>
              Haneulz Corner is not an official website.
              It is simply a fan-made passion project created with love,
              appreciation, and endless support for HANEULZ.
            </p>


            <p>
              Whether you are here to discover a new AU, revisit an old
              favorite, find variety moments, or simply spend a little time
              enjoying the creativity of fellow fans, I hope this corner feels
              like a warm and comfortable place you can always return to.
            </p>

          </div>

        </motion.section>




        {/* Cards */}

        <motion.section
          initial={{opacity:0, y:40}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.8}}
          className="mt-20"
        >

          <h2 className="text-center font-serif-display text-4xl">
            What's Inside Our Corner? ☁️
          </h2>


          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {sections.map((item,index)=>(

              <motion.div
                key={item.title}
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{delay:index * 0.1}}
                className="glass rounded-[2rem] p-7 rotate-[-1deg] transition hover:-translate-y-2 hover:rotate-0"
              >

                <div className="text-5xl">
                  {item.icon}
                </div>


                <h3 className="mt-5 font-serif-display text-2xl">
                  {item.title}
                </h3>


                <p className="mt-3 leading-7 text-sm text-[color:var(--ink-soft)]">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.section>





        {/* Made by Hansum */}

        <motion.section
          initial={{opacity:0, y:40}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="mt-20 glass rounded-[2rem] p-8 text-center"
        >

          <h2 className="font-serif-display text-3xl">
            ☁️ Made by a Hansum, for Hansums 💗
          </h2>


          <p className="mt-5 leading-8 text-[color:var(--ink-soft)]">
            This little corner was created by a fan who simply wanted a place
            where HANEULZ memories, stories, and creations could be collected
            together.

            <br/><br/>

            Every saved bookmark, every late-night idea, and every moment that
            brought happiness helped shape this small space.
          </p>


        </motion.section>





        {/* Community Notice */}

        <motion.section
          initial={{opacity:0, y:40}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          className="mt-16 glass rounded-[2rem] p-8"
        >

          <h2 className="font-serif-display text-3xl">
            📢 A Small Community Note
          </h2>


          <p className="mt-5 leading-8 text-[color:var(--ink-soft)]">
            Haneulz Corner is a fan-made directory created to organize,
            appreciate, and celebrate the creativity within the HANEULZ
            community.
          </p>


          <p className="mt-5 leading-8 text-[color:var(--ink-soft)]">
            All AUs, fan edits, playlists, videos, artwork, and other featured
            content belong to their original creators.
            This website does not claim ownership over any linked works.
          </p>


          <p className="mt-5 leading-8 text-[color:var(--ink-soft)]">
            This corner exists only to help fans discover, revisit, and support
            the amazing creators who share their work.
          </p>


        </motion.section>





        {/* Signature */}

        <motion.section
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          viewport={{once:true}}
          className="mt-20 text-center"
        >

          <p className="font-serif-display text-2xl italic">
            Made with lots of love,
            late-night ideas,
            and a few too many bookmarks.
          </p>


          <p className="mt-5 text-xl">
            — K ☁️💗
          </p>

        </motion.section>


      </div>

    </main>
  );
}
