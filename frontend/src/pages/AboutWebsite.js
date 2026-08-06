import { motion } from "framer-motion";
import { Code2, Heart, Sparkles, BookOpen, Tv, Music2, Users } from "lucide-react";
import { Reveal } from "../components/Reveal";
import Footer from "../components/Footer";

const journey = [
  {
    icon: Code2,
    title: "A New Challenge",
    text:
      "I never expected that being a fan would lead me to learning how to build a website. Haneulz Corner started as an idea, but slowly became a project that pushed me to explore something completely new."
  },
  {
    icon: Sparkles,
    title: "Learning Through Mistakes",
    text:
      "There were broken pages, confusing errors, and moments when nothing seemed to work. But every problem became part of learning how to create something better."
  },
  {
    icon: Heart,
    title: "A Corner Made With Love",
    text:
      "Behind every page is the excitement of wanting to create a place where fans can easily discover stories, memories, and moments connected to HANEULZ."
  }
];

const features = [
  {
    icon: BookOpen,
    title: "AU Library",
    text: "A collection of alternate universe stories created and shared by talented Hansums."
  },
  {
    icon: Tv,
    title: "Variety Corner",
    text: "A place to revisit memorable moments and clips that fans love."
  },
  {
    icon: Music2,
    title: "Playlists",
    text: "A space for songs and playlists that remind us of special memories."
  },
  {
    icon: Users,
    title: "Community",
    text: "A corner celebrating the creativity and passion of fellow fans."
  }
];


export default function AboutWebsite() {
  return (
    <div className="pt-32">

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-6">

        <Reveal>

          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            The story behind this corner
          </p>


          <h1 className="mt-5 max-w-4xl font-serif-display text-6xl font-medium leading-none md:text-8xl">
            Haneulz
            <br />
            Corner
          </h1>


          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[color:var(--ink-soft)]">
            A small fan-made corner on the internet created from a simple
            wish — to keep HANEULZ memories, stories, and moments together
            in one place.
          </p>

        </Reveal>


      </section>





      {/* STORY */}
      <section className="mx-auto mt-24 max-w-6xl px-6">

        <Reveal>

          <div className="glass rounded-[2.5rem] p-8 md:p-14">

            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pink-deep)]">
              How it started
            </p>


            <h2 className="mt-5 font-serif-display text-4xl md:text-5xl">
              From a simple idea into a little home for memories
            </h2>


            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-[color:var(--ink-soft)]">

              <p>
                Haneulz Corner started because I wanted a place where
                everything about HANEULZ could be easier to find.
              </p>


              <p>
                Like many fans, I had saved posts, stories, videos, and
                moments that meant something to me. But they were scattered
                everywhere.
              </p>


              <p>
                I wanted to create a small space where those memories could
                stay — a place fans could visit whenever they wanted to
                discover, revisit, or simply enjoy HANEULZ.
              </p>


              <p className="font-serif-display text-2xl text-[color:var(--ink)]">
                What started as an idea became a journey I never expected.
              </p>


            </div>

          </div>

        </Reveal>

      </section>







      {/* CODING JOURNEY */}
      <section className="mx-auto mt-24 max-w-6xl px-6">

        <Reveal>

          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            Behind the website
          </p>


          <h2 className="mt-4 font-serif-display text-5xl md:text-6xl">
            The Coding Journey
          </h2>

        </Reveal>


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {journey.map((item,index)=>(

            <Reveal key={item.title} delay={index * 0.1}>

              <div className="glass h-full rounded-[2rem] p-8">

                <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--pink)]">

                  <item.icon size={22}/>

                </div>


                <h3 className="mt-6 font-serif-display text-2xl">
                  {item.title}
                </h3>


                <p className="mt-4 leading-relaxed text-[color:var(--ink-soft)]">
                  {item.text}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </section>








      {/* PURPOSE */}
      <section className="mx-auto mt-24 max-w-6xl px-6">

        <Reveal>

          <div className="rounded-[3rem] bg-[color:var(--pink)] p-10 md:p-16">

            <h2 className="font-serif-display text-5xl md:text-6xl">
              Made by a Hansum,
              <br />
              for Hansums
            </h2>


            <p className="mt-6 max-w-2xl text-lg leading-relaxed">
              This website is a passion project created to celebrate
              the creativity, stories, and love within the HANEULZ
              community.
            </p>


          </div>

        </Reveal>

      </section>








      {/* FEATURES */}
      <section className="mx-auto mt-24 max-w-6xl px-6">

        <Reveal>

          <h2 className="font-serif-display text-5xl md:text-6xl">
            Inside Haneulz Corner
          </h2>

        </Reveal>


        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {features.map((item,index)=>(

            <Reveal key={item.title} delay={index*0.08}>

              <div className="glass rounded-[2rem] p-8 flex gap-5">

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color:var(--blue)]">

                  <item.icon size={22}/>

                </div>


                <div>

                  <h3 className="font-serif-display text-2xl">
                    {item.title}
                  </h3>


                  <p className="mt-3 leading-relaxed text-[color:var(--ink-soft)]">
                    {item.text}
                  </p>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </section>







      {/* END */}
      <section className="mx-auto mt-28 max-w-4xl px-6 text-center">

        <Reveal>

          <p className="font-serif-display text-3xl italic leading-relaxed">
            Made with lots of love,
            late-night ideas, delulu,
            and a determination to create something meaningful.
          </p>


          <p className="mt-6 text-lg">
            — K 💗
          </p>

        </Reveal>

      </section>


      <Footer />

    </div>
  );
}
