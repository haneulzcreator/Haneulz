import { Reveal } from "./Reveal";
import { Cloud, Sparkles, Heart, Star } from "lucide-react";

export default function HaneulzStory() {
  return (
    <Reveal>
      <article className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] px-5 py-10 md:px-12 md:py-16">

        {/* SOFT BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[3rem] bg-gradient-to-b from-[#eef7ff] via-[#fffafd] to-[#f8f3ff]">
          <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
          <div className="absolute -right-24 top-[35%] h-72 w-72 rounded-full bg-[#e8f2ff]/70 blur-3xl" />
          <div className="absolute left-1/3 bottom-20 h-72 w-72 rounded-full bg-[#fff0f7]/60 blur-3xl" />

          <span className="absolute left-8 top-36 text-2xl opacity-40">☁</span>
          <span className="absolute right-10 top-[24%] text-xl opacity-30">✦</span>
          <span className="absolute left-10 top-[55%] text-lg opacity-30">♡</span>
          <span className="absolute right-8 top-[72%] text-2xl opacity-30">☁</span>
          <span className="absolute left-16 bottom-28 text-lg opacity-30">✦</span>
        </div>

        {/* HERO */}
        <header className="text-center">
          <div className="mb-6 flex justify-center gap-3 text-[#9eb9d6]">
            <span>✦</span>
            <Cloud size={30} strokeWidth={1.4} />
            <span>✦</span>
          </div>

          <p className="text-[10px] uppercase tracking-[0.5em] text-[color:var(--ink-soft)]">
            a little story
          </p>

          <h1 className="mt-4 font-serif-display text-6xl font-medium tracking-tight md:text-8xl">
            HANEULZ
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base italic leading-7 text-[color:var(--ink-soft)] md:text-lg">
            the story of two voices that found each other
          </p>

          <div className="mx-auto mt-10 h-px w-20 bg-[color:var(--line)]" />
        </header>

        {/* HERO IMAGE */}
        <StoryImage
          label="HANEULZ"
          className="mt-12 h-[300px] md:h-[480px]"
        />

        {/* INTRO */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <SectionHeading title="HANEULZ" icon={<Cloud size={19} />} />

          <StoryParagraph>
            HANEULZ is a name that came from Han and Jaeyel, the pronunciation
            of JL&apos;s name, and it also happens to sound like haneul (하늘),
            which means sky in Korean. I honestly think it fits them so well
            because it started from just their names, but somehow it became
            this little name that holds so many memories from Universe League
            until now.
          </StoryParagraph>
        </div>

        <LittleDivider />

        {/* WHERE IT STARTED */}
        <StoryBlock>
          <SectionHeading
            title="WHERE IT ALL STARTED"
            icon={<Sparkles size={19} />}
          />

          <StoryImage
            label="UNIVERSE LEAGUE"
            className="mt-9 h-[260px] md:h-[390px]"
          />

          <StoryParagraph>
            Before HANEULZ was even a thing, Han and JL were just two trainees
            trying to make it through Universe League. They didn&apos;t start
            out as some inseparable pair or anything like that. They had their
            own stages, their own teams, and their own moments, and that&apos;s
            actually what makes their story so fun to look back on.
          </StoryParagraph>

          <StoryParagraph>
            JL first showed up with “One and Only” by BOYNEXTDOOR and
            immediately had that kind of stage presence where you just end up
            watching him. His vocals were stable, his dancing was eye-catching,
            and of course that smile was there too. During one of the drafting
            episodes, he became known as the “three pick” because three mentors
            chose him. Like… three. ㅋㅋㅋㅋ It really showed how much of an
            impression he was already making.
          </StoryParagraph>

          <StoryParagraph>
            Then came Han with “Siren.” His whole vibe was completely
            different. He had that mysterious aura when he walked onto the
            stage, and then once he started singing, you could really hear how
            strong his voice was. His dancing was sharp and detailed too, and
            he didn&apos;t hold himself back during the performance. It was one
            of those stages where you could immediately understand why people
            were paying attention to him.
          </StoryParagraph>
        </StoryBlock>

        <StoryImage
          label="ADMIN IMAGE"
          className="my-14 h-[240px] md:h-[330px]"
        />

        {/* FIRST IMPRESSION */}
        <StoryBlock>
          <SectionHeading title="THE FIRST IMPRESSION" />

          <StoryParagraph>
            And then there&apos;s the funniest part because one of Han&apos;s
            first impressions of JL wasn&apos;t some dramatic first meeting.
          </StoryParagraph>

          <Quote>
            JL literally entered the wrong practice room. ㅋㅋㅋㅋ
          </Quote>

          <StoryParagraph>
            He opened the door to the Siren practice room looking completely
            confused and went, “Eugh? This isn&apos;t One and Only team?”
            before realizing he was in the wrong room and leaving. Han
            remembered how funny his expression was, and honestly, that is
            such a HANEULZ way for their story to start.
          </StoryParagraph>
        </StoryBlock>

        <StoryImage
          label="FIRST IMPRESSION"
          className="my-14 h-[260px] md:h-[360px]"
        />

        {/* LITTLE PRINCE */}
        <StoryBlock>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
              December 27, 2024
            </p>

            <SectionHeading
              title="THE LITTLE PRINCE"
              icon={<Heart size={19} />}
            />
          </div>

          <StoryImage
            label="THE LITTLE PRINCE"
            className="mt-9 h-[300px] md:h-[430px]"
          />

          <StoryParagraph>
            After seeing Han and JL doing their own thing throughout the
            competition, they finally got to sing together. And honestly, what
            else am I supposed to say except… their voices sounded so good
            together.
          </StoryParagraph>

          <StoryParagraph>
            Han&apos;s voice and JL&apos;s voice have their own colors, but
            they didn&apos;t fight each other. They actually fit together really
            naturally. Their harmonies made the whole performance feel so much
            fuller, and it was one of those stages where you could just sit
            there and listen without thinking about anything else.
          </StoryParagraph>

          <StoryParagraph>
            Even the trainees watching them reacted to it, with some of them
            saying they got goosebumps. And I completely understand why because
            hearing those two voices together for the first time was just…
            yeah. HANEULZ.
          </StoryParagraph>

          <StoryParagraph>
            That performance became such an important part of their story
            because it was one of the first times we really got to see what
            happens when Han and JL share the same stage instead of watching
            them separately.
          </StoryParagraph>
        </StoryBlock>

        <LittleDivider />

        {/* DEBUT */}
        <StoryBlock>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--ink-soft)]">
              July 1, 2025
            </p>

            <SectionHeading title="AND THEN THEY DEBUTED TOGETHER" />
          </div>

          <StoryImage
            label="AHOF"
            className="mt-9 h-[300px] md:h-[430px]"
          />

          <StoryParagraph>
            After everything that happened during Universe League, Han and JL
            eventually debuted together as members of AHOF on July 1, 2025.
          </StoryParagraph>

          <StoryParagraph>
            And honestly, this is probably one of my favorite parts of their
            whole story because after watching them go through the competition,
            seeing them actually end up in the same group felt so satisfying.
            Like finally??? They are actually going to be on the same stages
            now???
          </StoryParagraph>

          <StoryParagraph>
            Together with Steven, Jeongwoo, Woongki, Shuaibo, Chih En, Juwon,
            and Daisuke, they started this new chapter with AHOF&apos;s debut
            album <i>Who We Are</i> and the title track “그곳에서 다시 만나기로
            해 (Rendezvous).”
          </StoryParagraph>

          <StoryParagraph>
            And of course, HANEULZ didn&apos;t just disappear after debut.
          </StoryParagraph>

          <Quote> If anything, we started getting even more little moments. </Quote>
        </StoryBlock>

        {/* LITTLE THINGS */}
        <StoryBlock>
          <SectionHeading
            title="THE LITTLE THINGS"
            icon={<Star size={19} />}
          />

          <StoryImage
            label="ADMIN COLLAGE"
            className="mt-9 h-[280px] md:h-[380px]"
          />

          <StoryParagraph>
            One of the things that always makes me smile is how often Han and
            JL end up singing together. Han has talked about how JL is good at
            harmonizing and how beautiful his high notes are, and there have
            been so many moments where the two of them just casually start
            singing together like it&apos;s the most normal thing in the world.
          </StoryParagraph>

          <StoryParagraph>
            Han even talked about how the practice room was basically never
            quiet because he and JL were always singing. And honestly, I can
            believe it. ㅋㅋㅋㅋ
          </StoryParagraph>

          <StoryParagraph>
            There are also all those random little moments that don&apos;t
            necessarily look important on their own but somehow become the
            things you remember. JL giving Han jelly. Han eating it. Them
            sharing food. The random photos. Han lying on JL because he was
            tired and JL suddenly taking a picture. Their random duets.
            Calling each other by their nicknames. Those little “Hani hyung~”
            moments. The way they can turn literally nothing into a whole
            interaction.
          </StoryParagraph>

          <StoryParagraph>
            There was even the mafia game moment where Han talked about JL
            always saving him when he was about to die and how he thought it
            was better doing it with JL because JL was good at harmonizing and
            his high notes were beautiful.
          </StoryParagraph>

          <Quote>“Haneulz is JL and me, right?”</Quote>

          <StoryParagraph>
            YES. THAT.
          </StoryParagraph>

          <StoryParagraph>
            Because at that point HANEULZ wasn&apos;t just something fans were
            calling them. They knew the name too.
          </StoryParagraph>

          <StoryParagraph>
            There are so many little things like this that I could honestly
            keep going forever. Sometimes they&apos;re singing, sometimes
            they&apos;re joking around, sometimes they&apos;re just sitting
            together, and sometimes it&apos;s literally just one sentence that
            somehow ends up being memorable.
          </StoryParagraph>

          <StoryParagraph>
            That&apos;s what I like about HANEULZ. It&apos;s not only the big
            performances. It&apos;s all these tiny moments in between.
          </StoryParagraph>
        </StoryBlock>

        <StoryImage
          label="ADMIN PHOTO"
          className="my-14 h-[260px] md:h-[350px]"
        />

        {/* DORM */}
        <StoryBlock>
          <SectionHeading title="THE SAME DORM, THE SAME TEAM" />

          <StoryParagraph>
            After debut, Han and JL also got to spend even more time around
            each other because they were living in the same dorm with the rest
            of the AHOF members. They aren&apos;t roommates, but they still get
            to share the same space and experience this whole new chapter
            together as members of the same group.
          </StoryParagraph>

          <StoryParagraph>
            I think that makes all the little moments even more fun to look
            back on. They went from being two trainees in completely different
            teams during Universe League to actually seeing each other almost
            every day as members of AHOF. From practicing separately to suddenly
            having random singing sessions, eating together, talking during
            lives, and just being around each other as part of the same group.
          </StoryParagraph>

          <StoryParagraph>
            It&apos;s kind of crazy when you think about where they started.
          </StoryParagraph>
        </StoryBlock>

        {/* HANSUM */}
        <StoryBlock>
          <SectionHeading
            title="HANSUM"
            icon={<Cloud size={19} />}
          />

          <StoryImage
            label="HANSUM"
            className="mt-9 h-[240px] md:h-[320px]"
          />

          <StoryParagraph>
            And then there&apos;s Hansum.
          </StoryParagraph>

          <StoryParagraph>
            Hansum comes from Han&apos;s fandom name, Park Ha-dan, and JL&apos;s
            nickname, DimSUM. It also connects to the Korean word 한숨, which
            means a sigh or a deep breath.
          </StoryParagraph>

          <StoryParagraph>
            I actually really like that meaning because this whole little
            corner is kind of like that too. A place where you can just breathe
            for a second, look back at the memories, replay the performances,
            save the funny moments, and just enjoy being here.
          </StoryParagraph>
        </StoryBlock>

        <LittleDivider />

        {/* WHY HANEULZ */}
        <StoryBlock>
          <SectionHeading title="WHY HANEULZ" />

          <StoryImage
            label="ADMIN IMAGE"
            className="mt-9 h-[260px] md:h-[350px]"
          />

          <StoryParagraph>
            I guess that&apos;s really why I wanted to make this little corner
            in the first place. There are just so many HANEULZ moments that I
            don&apos;t want to forget, from the big stages that made us fall in
            love with their voices to the random little things that probably
            meant nothing at the time but somehow became memories we still talk
            about. I wanted somewhere where all of those moments could stay
            together, especially now that Han and JL are getting to make even
            more memories together as AHOF.
          </StoryParagraph>

          <StoryParagraph>
            Looking back at everything from Universe League until now, I&apos;m
            just really happy that their paths crossed and that, after
            everything, they ended up debuting together. And knowing that there
            are still so many moments waiting to happen makes this little story
            feel like it&apos;s nowhere near finished yet. ♡
          </StoryParagraph>
        </StoryBlock>

        {/* END */}
        <footer className="mt-20 text-center">
          <div className="flex justify-center gap-4 text-[#9eb9d6]">
            <span>☁</span>
            <span>✦</span>
            <Heart size={18} strokeWidth={1.5} />
            <span>✦</span>
            <span>☁</span>
          </div>

          <p className="mt-6 font-serif-display text-3xl">
            welcome to the little
            <br />
            HANEULZ corner.
          </p>

          <p className="mt-4 text-sm text-[color:var(--ink-soft)]">
            ♡
          </p>
        </footer>
      </article>
    </Reveal>
  );
}


/* ----------------------------- */
/* STORY COMPONENTS               */
/* ----------------------------- */

function StoryBlock({ children }) {
  return (
    <section className="mx-auto max-w-4xl">
      {children}
    </section>
  );
}


function SectionHeading({ title, icon }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3">
        {icon && (
          <span className="text-[#9eb9d6]">
            {icon}
          </span>
        )}

        <h2 className="font-serif-display text-4xl font-medium tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>

      <div className="mx-auto mt-5 flex items-center justify-center gap-2 text-[#a9bfd7]">
        <span className="h-px w-8 bg-[#d9e4ef]" />
        <span className="text-xs">✦</span>
        <span className="h-px w-8 bg-[#d9e4ef]" />
      </div>
    </div>
  );
}


function StoryParagraph({ children }) {
  return (
    <p className="mx-auto mt-8 max-w-3xl text-[16px] leading-[2] text-[color:var(--ink-soft)] md:text-[17px]">
      {children}
    </p>
  );
}


function Quote({ children }) {
  return (
    <div className="mx-auto my-10 max-w-2xl px-5 text-center">
      <span className="font-serif-display text-5xl leading-none text-[#b7cce1]">
        “
      </span>

      <p className="mt-1 font-serif-display text-2xl italic leading-relaxed text-[color:var(--ink)] md:text-3xl">
        {children}
      </p>

      <span className="font-serif-display text-4xl leading-none text-[#b7cce1]">
        ”
      </span>
    </div>
  );
}


function StoryImage({ label, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/50 shadow-[0_20px_60px_rgba(120,150,180,0.10)] backdrop-blur-sm ${className}`}
    >
      {/* Replace this area later with the admin-uploaded image */}
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-[#9eb9d6] shadow-sm">
            <Cloud size={21} strokeWidth={1.5} />
          </div>

          <p className="text-[10px] uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            {label}
          </p>

          <p className="mt-2 text-xs text-[color:var(--ink-soft)] opacity-70">
            Admin image
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/30" />
    </div>
  );
}


function LittleDivider() {
  return (
    <div className="my-20 flex items-center justify-center gap-4">
      <span className="h-px w-16 bg-[color:var(--line)]" />
      <span className="text-sm text-[#a9bfd7]">☁</span>
      <span className="text-xs text-[#b7cce1]">✦</span>
      <span className="text-sm text-[#a9bfd7]">☁</span>
      <span className="h-px w-16 bg-[color:var(--line)]" />
    </div>
  );
}
