import {
  Cloud,
  Sparkles,
  Heart,
  Star,
  Music2,
} from "lucide-react";

export default function HaneulzStory() {
  return (
    <article className="relative mx-auto max-w-6xl overflow-hidden px-4 pb-24">

      {/* soft decorative background */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] top-[700px] h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="pointer-events-none absolute left-[-100px] top-[1500px] h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-100px] top-[2300px] h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />

      {/* floating decoration */}
      <div className="pointer-events-none absolute right-8 top-10 hidden rotate-12 text-3xl opacity-40 md:block">
        ☁
      </div>

      <div className="pointer-events-none absolute left-8 top-[500px] hidden -rotate-12 text-2xl opacity-30 md:block">
        ✦
      </div>

      <div className="pointer-events-none absolute right-10 top-[1200px] hidden rotate-12 text-2xl opacity-30 md:block">
        ♡
      </div>

      {/* HEADER */}
      <header className="relative pt-8 text-center md:pt-12">

        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/50 px-5 py-2 text-xs tracking-[0.25em] text-[color:var(--ink-soft)] shadow-sm backdrop-blur-md">
            <Cloud size={15} />
            HANEULZ
            <Cloud size={15} />
          </div>
        </div>

        <h2 className="font-serif-display text-6xl font-medium leading-[0.9] tracking-tight md:text-8xl">
          HANEULZ
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[color:var(--ink-soft)] md:text-lg">
          the story of two voices that found each other
        </p>

        <div className="mt-7 flex justify-center gap-3 text-sm opacity-50">
          <span>☁</span>
          <span>✦</span>
          <span>♡</span>
          <span>✦</span>
          <span>☁</span>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="relative mt-12 md:mt-16">

        <div className="absolute -inset-3 rotate-[-1deg] rounded-[2.5rem] bg-white/40 shadow-sm" />

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/50 shadow-[0_20px_60px_rgba(100,120,150,0.12)] backdrop-blur-sm">

          {/* Admin can replace this later */}
          <div className="flex min-h-[280px] items-center justify-center bg-gradient-to-br from-sky-100/70 via-white/50 to-pink-100/60 p-10 md:min-h-[480px]">

            <div className="text-center">

              <div className="mb-5 text-4xl opacity-50">
                ☁
              </div>

              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
                HANEULZ
              </p>

              <p className="mt-3 text-sm text-[color:var(--ink-soft)]">
                Admin image will appear here
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* STORY */}
      <div className="relative mt-20 md:mt-28">

        {/* INTRO */}
        <StorySection
          eyebrow="01 · HANEULZ"
          title="A name that became a story"
          icon={<Cloud size={19} />}
        >
          HANEULZ is a name that came from Han and Jaeyel, the pronunciation
          of JL’s name, and it also happens to sound like <i>haneul</i> (하늘),
          which means sky in Korean. I honestly think it fits them so well
          because it started from just their names, but somehow it became this
          little name that holds so many memories from Universe League until
          now.
        </StorySection>


        {/* IMAGE */}
        <StoryImage />


        {/* UNIVERSE LEAGUE */}
        <StorySection
          eyebrow="02 · UNIVERSE LEAGUE"
          title="Where it all started"
          icon={<Sparkles size={19} />}
        >
          Before HANEULZ was even a thing, Han and JL were just two trainees
          trying to make it through Universe League. They didn’t start out as
          some inseparable pair or anything like that. They had their own
          stages, their own teams, and their own moments, and that’s actually
          what makes their story so fun to look back on. JL first showed up
          with “One and Only” by BOYNEXTDOOR and immediately had that kind of
          stage presence where you just end up watching him. His vocals were
          stable, his dancing was eye-catching, and of course that smile was
          there too. During one of the drafting episodes, he became known as
          the “three pick” because three mentors chose him. Like… three.
          ㅋㅋㅋㅋ It really showed how much of an impression he was already
          making.
        </StorySection>


        <StorySection
          title="Then came Han"
        >
          Then came Han with “Siren.” His whole vibe was completely different.
          He had that mysterious aura when he walked onto the stage, and then
          once he started singing, you could really hear how strong his voice
          was. His dancing was sharp and detailed too, and he didn’t hold
          himself back during the performance. It was one of those stages where
          you could immediately understand why people were paying attention to
          him.
        </StorySection>


        {/* FIRST IMPRESSION */}
        <StoryImage />


        <StorySection
          eyebrow="03 · FIRST IMPRESSION"
          title="And then… the wrong room"
          icon={<Heart size={19} />}
        >
          And then there’s the funniest part because one of Han’s first
          impressions of JL wasn’t some dramatic first meeting. JL literally
          entered the wrong practice room. ㅋㅋㅋㅋ He opened the door to the
          Siren practice room looking completely confused and went,
          “Eugh? This isn’t One and Only team?” before realizing he was in the
          wrong room and leaving. Han remembered how funny his expression was,
          and honestly, that is such a HANEULZ way for their story to start.
        </StorySection>


        {/* LITTLE PRINCE */}
        <div className="my-24 flex justify-center text-2xl opacity-40">
          ☁　✦　☁
        </div>


        <StorySection
          eyebrow="04 · DECEMBER 27, 2024"
          title="The Little Prince"
          icon={<Music2 size={19} />}
        >
          Then December 27, 2024 happened. The Little Prince. After seeing Han
          and JL doing their own thing throughout the competition, they finally
          got to sing together. And honestly, what else am I supposed to say
          except… their voices sounded so good together. Han’s voice and JL’s
          voice have their own colors, but they didn’t fight each other. They
          actually fit together really naturally. Their harmonies made the
          whole performance feel so much fuller, and it was one of those
          stages where you could just sit there and listen without thinking
          about anything else. Even the trainees watching them reacted to it,
          with some of them saying they got goosebumps. And I completely
          understand why because hearing those two voices together for the
          first time was just… yeah. HANEULZ.
        </StorySection>


        <StoryImage />


        <StorySection
          title="Why this stage mattered"
        >
          That performance became such an important part of their story because
          it was one of the first times we really got to see what happens when
          Han and JL share the same stage instead of watching them separately.
          It wasn’t about one person trying to stand above the other. Their
          voices simply worked together, and that made the performance feel
          special in its own way.
        </StorySection>


        {/* DEBUT */}
        <StorySection
          eyebrow="05 · JULY 1, 2025"
          title="And then they debuted together"
          icon={<Star size={19} />}
        >
          After everything that happened during Universe League, Han and JL
          eventually debuted together as members of AHOF on July 1, 2025. And
          honestly, this is probably one of my favorite parts of their whole
          story because after watching them go through the competition, seeing
          them actually end up in the same group felt so satisfying. Like
          finally??? They are actually going to be on the same stages now???
          Together with Steven, Jeongwoo, Woongki, Shuaibo, Chih En, Juwon,
          and Daisuke, they started this new chapter with AHOF’s debut album
          <i> Who We Are</i> and the title track “그곳에서 다시 만나기로 해
          (Rendezvous).”
        </StorySection>


        <StoryImage />


        {/* AFTER DEBUT */}
        <StorySection
          eyebrow="06 · AFTER DEBUT"
          title="The little things"
          icon={<Heart size={19} />}
        >
          And of course, HANEULZ didn’t just disappear after debut. If anything,
          there were even more little moments. One of the things that always
          makes me smile is how often Han and JL end up singing together. Han
          has talked about how JL is good at harmonizing and how beautiful his
          high notes are, and there have been so many moments where the two of
          them just casually start singing together like it’s the most normal
          thing in the world.
        </StorySection>


        <StorySection>
          Han even joked about how the practice room is basically never quiet
          because he and JL are always singing. And honestly, I can believe it.
          ㅋㅋㅋㅋ There are also all those random little moments that don’t
          necessarily look important on their own but somehow become the things
          you remember. JL giving Han jelly. Han eating it. Them sharing food.
          The random photos. Han lying on JL because he was tired and JL
          suddenly taking a picture. Their random duets. Calling each other by
          their nicknames. Those little “Hani hyung~” moments. The way they can
          turn literally nothing into a whole interaction.
        </StorySection>


        <StoryImage />


        <StorySection>
          There was even the mafia game moment where Han talked about JL always
          saving him when he was about to die and how he thought it was better
          doing it with JL because JL was good at harmonizing and his high notes
          were beautiful.
        </StorySection>


        {/* QUOTE */}
        <div className="my-20 text-center">

          <div className="mx-auto max-w-3xl rounded-[2rem] bg-white/45 px-8 py-12 shadow-sm backdrop-blur-sm">

            <div className="mb-5 text-2xl opacity-40">
              “
            </div>

            <p className="font-serif-display text-3xl leading-relaxed md:text-4xl">
              Haneulz is JL and me, right?
            </p>

            <div className="mt-5 text-xs uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
              Han
            </div>

          </div>

        </div>


        <StorySection>
          YES. THAT. Because at that point HANEULZ wasn’t just something fans
          were calling them. They knew the name too. There are so many little
          things like this that I could honestly keep going forever. Sometimes
          they’re singing, sometimes they’re joking around, sometimes they’re
          just sitting together, and sometimes it’s literally just one
          sentence that somehow ends up being memorable.
        </StorySection>


        {/* HANSUM */}
        <StorySection
          eyebrow="07 · HANSUM"
          title="A little explanation"
          icon={<Cloud size={19} />}
        >
          And then there’s Hansum. Hansum comes from Han’s fandom name,
          Park Ha-dan, and JL’s nickname, DimSUM. It also connects to the
          Korean word 한숨, which means a sigh or a deep breath. I actually
          really like that meaning because this whole little corner is kind of
          like that too. A place where you can just breathe for a second,
          look back at the memories, replay the performances, save the funny
          moments, and just enjoy being here.
        </StorySection>


        {/* WHY HANEULZ */}
        <div className="my-24 flex justify-center text-2xl opacity-40">
          ☁　♡　✦　♡　☁
        </div>


        <StorySection
          eyebrow="08 · WHY HANEULZ"
          title="Why I made this little corner"
        >
          I don’t think HANEULZ can really be summed up by one performance or
          one funny interaction. It started with two trainees who didn’t even
          know that they were going to end up together. One accidentally walked
          into the wrong practice room. They eventually sang The Little Prince
          together. Then somehow, after everything, they debuted in the same
          group.
        </StorySection>


        <StorySection>
          And now there are all these little memories in between. The singing.
          The harmonies. The jokes. The food. The random photos. The lives.
          The practice room chaos. The “Hani hyung” moments. The “Jeyelie”
          moments. The times they randomly start singing together. All of those
          tiny things that probably felt ordinary when they happened but became
          memories that people kept coming back to.
        </StorySection>


        <StorySection>
          That’s what this corner is for. Not to make their story sound bigger
          or more dramatic than it is, but just to keep the moments that made
          HANEULZ feel like HANEULZ in one place.
        </StorySection>


        {/* END */}
        <div className="relative mt-24 overflow-hidden rounded-[3rem] bg-gradient-to-br from-sky-100/70 via-white/50 to-pink-100/70 px-8 py-16 text-center shadow-sm">

          <div className="absolute left-8 top-8 rotate-[-12deg] text-2xl opacity-30">
            ☁
          </div>

          <div className="absolute right-8 top-10 rotate-12 text-2xl opacity-30">
            ✦
          </div>

          <div className="absolute bottom-8 left-12 rotate-12 text-xl opacity-30">
            ♡
          </div>

          <div className="absolute bottom-8 right-12 rotate-[-12deg] text-xl opacity-30">
            ☁
          </div>

          <p className="font-serif-display text-3xl leading-relaxed md:text-4xl">
            And honestly, I’m just really happy that after everything,
            Han and JL got to debut together and keep making these memories.
          </p>

          <div className="mt-8 text-2xl opacity-50">
            ☁ ✦ ♡ ✦ ☁
          </div>

          <p className="mt-5 text-sm tracking-wide text-[color:var(--ink-soft)]">
            welcome to the little HANEULZ corner ♡
          </p>

        </div>

      </div>

    </article>
  );
}


/* STORY SECTION */

function StorySection({
  eyebrow,
  title,
  icon,
  children,
}) {
  return (
    <section className="mx-auto max-w-4xl py-8 text-center">

      {eyebrow && (
        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
          {eyebrow}
        </p>
      )}

      {title && (
        <div className="flex items-center justify-center gap-3">

          {icon && (
            <span className="opacity-50">
              {icon}
            </span>
          )}

          <h3 className="font-serif-display text-4xl leading-tight md:text-5xl">
            {title}
          </h3>

        </div>
      )}

      <p className="mt-8 text-left text-[17px] leading-[2] text-[color:var(--ink-soft)] md:text-lg md:leading-[2.05]">
        {children}
      </p>

    </section>
  );
}


/* ADMIN IMAGE AREA */

function StoryImage() {
  return (
    <div className="relative my-16 md:my-20">

      <div className="absolute -inset-2 rotate-[1deg] rounded-[2rem] bg-white/40" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-sm">

        <div className="flex min-h-[260px] items-center justify-center bg-gradient-to-br from-white/50 via-sky-50/50 to-pink-50/50 p-8 md:min-h-[380px]">

          <div className="text-center">

            <div className="mb-4 text-3xl opacity-30">
              ✦
            </div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              HANEULZ ARCHIVE
            </p>

            <p className="mt-3 text-sm text-[color:var(--ink-soft)]">
              Admin image upload
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
