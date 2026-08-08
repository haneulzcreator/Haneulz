import { Reveal } from "./Reveal";
import { Cloud, Sparkles, Heart } from "lucide-react";

export default function HaneulzStory({ images = {} }) {
  return (
    <Reveal>
      <article className="relative mx-auto max-w-3xl px-5 pb-16 md:px-8">

        {/* soft background decorations */}
        <div className="pointer-events-none absolute -left-24 top-24 h-48 w-48 rounded-full bg-white/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-[700px] h-56 w-56 rounded-full bg-[color:var(--pink)] opacity-20 blur-3xl" />

        <div className="relative">

          {/* TITLE */}
          <header className="pt-2 text-center">
            <Cloud
              size={28}
              strokeWidth={1.4}
              className="mx-auto mb-4 text-[color:var(--ink-soft)]"
            />

            <h2 className="font-serif-display text-5xl leading-none md:text-7xl">
              HANEULZ
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[color:var(--ink-soft)]">
              the story of two voices that found each other
            </p>
          </header>

          {/* MAIN HANEULZ IMAGE — ADMIN CONTROLLED */}
          <AdminImage
            src={images.haneulz}
            alt="HANEULZ"
            className="mt-9"
          />

          {/* HANEULZ */}
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

            {/* JL PARAGRAPH */}
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

          {/* HANEULZ IMAGE BETWEEN JL AND HAN */}
          <AdminImage
            src={images.haneulz}
            alt="HANEULZ"
            className="my-9"
          />

          {/* HAN PARAGRAPH */}
          <div className="mx-auto max-w-2xl">
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

          {/* THE LITTLE PRINCE */}
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

          {/* THE LITTLE THINGS */}
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

            <p className="pt-2 text-center font-serif-display text-xl md:text-2xl">
              “Haneulz is JL and me, right?”
            </p>

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

        </div>
      </article>
    </Reveal>
  );
}


/* STORY SECTION */

function StorySection({ title, icon, children }) {
  return (
    <section className="mt-11">
      <header className="mb-5 text-center">
        <div className="mb-2 flex justify-center text-[color:var(--ink-soft)]">
          {icon}
        </div>

        <h3 className="font-serif-display text-3xl leading-tight md:text-4xl">
          {title}
        </h3>
      </header>

      <div className="mx-auto max-w-2xl space-y-2.5 text-base leading-8 text-[color:var(--ink-soft)] md:text-lg md:leading-9">
        {children}
      </div>
    </section>
  );
}


/* ADMIN-CONTROLLED IMAGE */

function AdminImage({ src, alt, className = "" }) {
  if (!src) return null;

  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[2rem] bg-white/30">
        <img
          src={src}
          alt={alt}
          className="block max-h-[480px] w-full object-cover"
        />
      </div>
    </figure>
  );
}
