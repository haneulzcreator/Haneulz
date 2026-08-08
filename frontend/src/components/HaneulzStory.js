import { Reveal } from "./Reveal";
import { Cloud, Sparkles, Heart, Star } from "lucide-react";

export default function HaneulzStory({ images = {} }) {
  return (
    <Reveal>
      <article className="relative mx-auto max-w-4xl overflow-hidden rounded-[3rem] bg-gradient-to-b from-[#fdf9f7] via-[#f8f3f5] to-[#f3eef5] px-5 py-10 shadow-[0_20px_80px_rgba(80,60,80,0.08)] md:px-12 md:py-14">

        {/* BACKGROUND DECORATIONS */}

        <div className="pointer-events-none absolute -left-20 top-20 h-52 w-52 rounded-full bg-white/70 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 top-[35rem] h-64 w-64 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="pointer-events-none absolute -left-24 top-[75rem] h-72 w-72 rounded-full bg-purple-200/20 blur-3xl" />

        <div className="pointer-events-none absolute right-[-80px] top-[115rem] h-64 w-64 rounded-full bg-white/70 blur-3xl" />

        <div className="relative">

          {/* HEADER */}

          <header className="text-center">

            <div className="mb-4 flex justify-center">
              <Cloud
                size={30}
                strokeWidth={1.3}
                className="text-[color:var(--ink-soft)]"
              />
            </div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
              a little archive
            </p>

            <h2 className="mt-3 font-serif-display text-6xl leading-none md:text-8xl">
              HANEULZ
            </h2>

            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
              the story of two voices that found each other
            </p>

            <div className="mx-auto mt-7 h-px w-20 bg-black/10" />

          </header>


          {/* MAIN IMAGE */}

          <AdminImage
            src={images.hero}
            alt="HANEULZ"
            label="HANEULZ"
            className="mt-10"
          />


          {/* INTRO */}

          <StorySection
            title="HANEULZ"
            icon={<Cloud size={18} />}
          >

            <p>
              HANEULZ is a name that came from Han and Jaeyel, the pronunciation
              of JL’s name, and it also happens to sound like haneul (하늘), which
              means sky in Korean. I honestly think it fits them so well because
              it started from just their names, but somehow it became this little
              name that holds so many memories from Universe League until now.
            </p>

          </StorySection>


          {/* WHERE IT ALL STARTED */}

          <StorySection
            title="WHERE IT ALL STARTED"
            icon={<Sparkles size={18} />}
          >

            <p>
              Before HANEULZ was even a thing, Han and JL were just two trainees
              trying to make it through Universe League. They didn’t start out
              as some inseparable pair or anything like that. They had their own
              stages, their own teams, and their own moments, and that’s actually
              what makes their story so fun to look back on.
            </p>


            {/* JL */}

            <p>
              JL first showed up with “One and Only” by BOYNEXTDOOR and
              immediately had that kind of stage presence where you just end up
              watching him. His vocals were stable, his dancing was eye-catching,
              and of course that smile was there too. During one of the drafting
              episodes, he became known as the “three pick” because three mentors
              chose him. Like… three. ㅋㅋㅋㅋ It really showed how much of an
              impression he was already making.
            </p>

          </StorySection>


          {/* HANEULZ IMAGE */}

          <AdminImage
            src={images.haneulz}
            alt="HANEULZ moment"
            label="HANEULZ"
            className="mt-8"
          />


          {/* HAN */}

          <div className="mx-auto mt-7 max-w-2xl">

            <p className="text-base leading-8 text-[color:var(--ink-soft)] md:text-lg md:leading-9">
              Then came Han with “Siren.” His whole vibe was completely
              different. He had that mysterious aura when he walked onto the
              stage, and then once he started singing, you could really hear
              how strong his voice was. His dancing was sharp and detailed too,
              and he didn’t hold himself back during the performance. It was one
              of those stages where you could immediately understand why people
              were paying attention to him.
            </p>

          </div>


          {/* FIRST IMPRESSION */}

          <StorySection title="THE FIRST IMPRESSION">

            <p>
              And then there’s the funniest part because one of Han’s first
              impressions of JL wasn’t some dramatic first meeting.
            </p>

            <p>
              JL literally entered the wrong practice room. ㅋㅋㅋㅋ He opened
              the door to the Siren practice room looking completely confused
              and went, “Eugh? This isn’t One and Only team?” before realizing
              he was in the wrong room and leaving.
            </p>

            <p>
              Han remembered how funny JL’s expression was, and honestly, it is
              such a funny way for their story to start. Nothing dramatic, just
              JL walking into the wrong room and immediately realizing he was
              supposed to be somewhere else. ㅋㅋㅋㅋ
            </p>

          </StorySection>


          {/* FIRST IMPRESSION IMAGE */}

          <AdminImage
            src={images.firstImpression}
            alt="HANEULZ first impression"
            label="first memories"
          />


          {/* LITTLE PRINCE */}

          <StorySection
            title="THE LITTLE PRINCE"
            icon={<Heart size={18} />}
          >

            <p>
              Then December 27, 2024 happened.
            </p>

            <p>
              The Little Prince.
            </p>

            <p>
              After seeing Han and JL doing their own thing throughout the
              competition, they finally got to sing together. And honestly,
              what else am I supposed to say except… their voices sounded so
              good together.
            </p>

            <p>
              Han’s voice and JL’s voice have their own colors, but they didn’t
              fight each other. They actually fit together really naturally.
              Their harmonies made the whole performance feel so much fuller,
              and it was one of those stages where you could just sit there and
              listen without thinking about anything else.
            </p>

            <p>
              Even the trainees watching them reacted to it, with some of them
              saying they got goosebumps. And I completely understand why,
              because hearing those two voices together for the first time was
              just… yeah. HANEULZ.
            </p>

            <p>
              That performance became such an important part of their story
              because it was one of the first times we really got to see what
              happens when Han and JL share the same stage instead of watching
              them separately.
            </p>

          </StorySection>


          {/* LITTLE PRINCE IMAGE */}

          <AdminImage
            src={images.littlePrince}
            alt="The Little Prince"
            label="THE LITTLE PRINCE"
          />


          {/* DEBUT */}

          <StorySection title="AND THEN THEY DEBUTED TOGETHER">

            <p>
              After everything that happened during Universe League, Han and JL
              eventually debuted together as members of AHOF on July 1, 2025.
            </p>

            <p>
              And honestly, this is probably one of my favorite parts of their
              whole story because after watching them go through the competition,
              seeing them actually end up in the same group felt so satisfying.
              Like finally??? They are actually going to be on the same stages
              now???
            </p>

            <p>
              Together with Steven, Jeongwoo, Woongki, Shuaibo, Chih En, Juwon,
              and Daisuke, they started this new chapter with AHOF’s debut album
              <i> Who We Are</i> and the title track “그곳에서 다시 만나기로 해
              (Rendezvous).”
            </p>

            <p>
              And of course, HANEULZ didn’t just disappear after debut. If
              anything, we started getting even more little moments.
            </p>

          </StorySection>


          {/* DEBUT IMAGE */}

          <AdminImage
            src={images.debut}
            alt="HANEULZ after debut"
            label="AFTER DEBUT"
          />


          {/* LITTLE THINGS */}

          <StorySection title="THE LITTLE THINGS">

            <p>
              One of the things that always makes me smile is how often Han and
              JL end up singing together. Han has talked about how JL is good at
              harmonizing and how beautiful his high notes are, and there have
              been so many moments where the two of them just casually start
              singing together like it’s the most normal thing in the world.
            </p>

            <p>
              Han even joked about how the practice room is basically never
              quiet because he and JL are always singing. And honestly, I can
              believe it. ㅋㅋㅋㅋ
            </p>

            <p>
              There are also all those random little moments that don’t
              necessarily look important on their own but somehow become the
              things you remember. JL giving Han jelly. Han eating it. Them
              sharing food. The random photos. Han lying on JL because he was
              tired and JL suddenly taking a picture. Their random duets.
              Calling each other by their nicknames. Those little “Hani hyung~”
              moments.
            </p>

            <p>
              There was even the mafia game moment where Han talked about JL
              always saving him when he was about to die and how he thought it
              was better doing it with JL because JL was good at harmonizing and
              his high notes were beautiful.
            </p>

            <div className="my-7 rounded-[2rem] bg-white/60 px-6 py-7 text-center shadow-sm">

              <Star
                size={18}
                className="mx-auto mb-3 text-[color:var(--ink-soft)]"
              />

              <p className="font-serif-display text-xl md:text-2xl">
                “Haneulz is JL and me, right?”
              </p>

            </div>

            <p>
              YES. THAT. Because at that point HANEULZ wasn’t just something
              people were calling them. They knew the name too.
            </p>

            <p>
              There are so many little things like this that I could honestly
              keep going forever. Sometimes they’re singing, sometimes they’re
              joking around, sometimes they’re just sitting together, and
              sometimes it’s literally just one sentence that somehow ends up
              being memorable.
            </p>

            <p>
              That’s what I like about HANEULZ. It’s not only the big
              performances. It’s all these tiny moments in between.
            </p>

          </StorySection>


          {/* LITTLE THINGS IMAGE */}

          <AdminImage
            src={images.moments}
            alt="HANEULZ moments"
            label="little moments"
          />


          {/* HANSUM */}

          <StorySection title="HANSUM">

            <p>
              And then there’s Hansum.
            </p>

            <p>
              Hansum comes from Han’s fandom name, Park Ha-dan, and JL’s
              nickname, DimSUM. It also connects to the Korean word 한숨, which
              means a sigh or a deep breath.
            </p>

            <p>
              I actually really like that meaning because this whole little
              corner is kind of like that too. A place where you can just
              breathe for a second, look back at the memories, replay the
              performances, save the funny moments, and just enjoy being here.
            </p>

          </StorySection>


          {/* HANSUM IMAGE */}

          <AdminImage
            src={images.hansum}
            alt="HANSUM"
            label="HANSUM"
          />


          {/* WHY HANEULZ */}

          <StorySection title="WHY HANEULZ">

            <p>
              I don’t think HANEULZ can really be summed up by one performance
              or one funny interaction.
            </p>

            <p>
              It started with two trainees who didn’t even know that they were
              going to end up together. One accidentally walked into the wrong
              practice room. They eventually sang The Little Prince together.
              Then somehow, after everything, they debuted in the same group.
            </p>

            <p>
              And now there are all these little memories in between.
            </p>

            <p>
              The singing. The harmonies. The jokes. The food. The random
              photos. The lives. The practice room chaos. The “Hani hyung”
              moments. The “Jeyelie” moments. The times they randomly start
              singing together. All of those tiny things that probably felt
              ordinary when they happened but became memories that people kept
              coming back to.
            </p>

            <p>
              That’s what this corner is for. Not to make their story sound
              bigger or more dramatic than it is, but just to keep the moments
              that made HANEULZ feel like HANEULZ in one place.
            </p>

            <p>
              And honestly, I’m just really happy that after everything, Han
              and JL got to debut together and keep making these memories.
            </p>

          </StorySection>


          {/* FINAL IMAGE */}

          <AdminImage
            src={images.final}
            alt="HANEULZ"
            label="HANEULZ ♡"
            className="mt-9"
          />

        </div>
      </article>
    </Reveal>
  );
}


/* STORY SECTION */

function StorySection({ title, icon, children }) {
  return (
    <section className="mt-12">

      <header className="mb-5 text-center">

        {icon && (
          <div className="mb-2 flex justify-center text-[color:var(--ink-soft)]">
            {icon}
          </div>
        )}

        <h3 className="font-serif-display text-3xl leading-tight md:text-4xl">
          {title}
        </h3>

      </header>

      <div className="mx-auto max-w-2xl space-y-3 text-base leading-8 text-[color:var(--ink-soft)] md:text-lg md:leading-9">
        {children}
      </div>

    </section>
  );
}


/* ADMIN IMAGE SLOT */

function AdminImage({
  src,
  alt,
  label = "HANEULZ",
  className = "",
}) {
  return (
    <figure className={`relative ${className}`}>

      <div className="relative overflow-hidden rounded-[2.3rem] border border-white/70 bg-white/50 p-2 shadow-[0_12px_35px_rgba(80,60,80,0.07)]">

        {src ? (
          <img
            src={src}
            alt={alt}
            className="block h-[260px] w-full rounded-[1.8rem] object-cover md:h-[390px]"
          />
        ) : (
          <div className="flex h-[260px] flex-col items-center justify-center rounded-[1.8rem] bg-gradient-to-br from-white/70 to-pink-50/60 md:h-[390px]">

            <Cloud
              size={30}
              strokeWidth={1.2}
              className="mb-3 text-[color:var(--ink-soft)]"
            />

            <p className="font-serif-display text-xl">
              {label}
            </p>

            <p className="mt-2 text-xs text-[color:var(--ink-soft)]">
              Admin image
            </p>

          </div>
        )}

      </div>

    </figure>
  );
}
