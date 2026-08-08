import {
  Cloud,
  Sparkles,
  Heart,
  Star,
} from "lucide-react";
export default function HaneulzStory() {
  return (
    <article className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[1.8rem] bg-[#f7f1eb] text-[#423b43] shadow-[0_20px_70px_rgba(71,54,75,0.14)] sm:rounded-[2.4rem] lg:rounded-[3rem]">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-[#f2b7d1]/40 blur-[80px] sm:h-80 sm:w-80 lg:h-[430px] lg:w-[430px] lg:blur-[110px]" />
        <div className="absolute -right-32 top-[700px] h-72 w-72 rounded-full bg-[#c8b8ed]/35 blur-[90px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px] lg:blur-[120px]" />
        <div className="absolute -left-32 top-[1500px] h-72 w-72 rounded-full bg-[#b6dfe0]/35 blur-[90px] sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px] lg:blur-[120px]" />
        <div className="absolute -right-32 top-[2700px] h-80 w-80 rounded-full bg-[#efbdd4]/30 blur-[100px] sm:h-[430px] sm:w-[430px] lg:h-[550px] lg:w-[550px] lg:blur-[130px]" />
        <div className="absolute left-1/2 top-[4200px] h-80 w-80 -translate-x-1/2 rounded-full bg-[#d8c7ec]/30 blur-[100px] sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px] lg:blur-[130px]" />
        {/* background typography */}
        <div
          className="absolute -right-8 top-[850px] rotate-90 text-[120px] leading-none tracking-[-0.08em] text-white/40 sm:text-[160px] md:text-[200px] lg:text-[230px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          H
        </div>
        <div
          className="absolute -left-10 top-[1900px] text-[130px] leading-none tracking-[-0.1em] text-white/30 sm:text-[180px] md:text-[220px] lg:text-[260px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          HZ
        </div>
        <div
          className="absolute -right-12 top-[3400px] rotate-[-8deg] text-[130px] leading-none text-white/35 sm:text-[180px] md:text-[220px] lg:text-[240px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          ♡
        </div>
        {/* dots */}
        <div className="absolute left-[8%] top-[520px] h-1.5 w-1.5 rounded-full bg-[#bd91aa]/40 sm:h-2 sm:w-2" />
        <div className="absolute right-[12%] top-[1150px] h-2 w-2 rounded-full bg-[#a69ac9]/35 sm:h-3 sm:w-3" />
        <div className="absolute left-[15%] top-[2200px] h-1.5 w-1.5 rounded-full bg-[#93bdbf]/40 sm:h-2 sm:w-2" />
        <div className="absolute right-[9%] top-[3500px] h-1.5 w-1.5 rounded-full bg-[#c58ca9]/40 sm:h-2 sm:w-2" />
      </div>
      {/* =====================================================
          COVER
      ===================================================== */}
      <section className="relative min-h-[540px] px-5 py-16 sm:min-h-[600px] sm:px-8 sm:py-20 md:px-12 lg:min-h-[650px] lg:px-16 lg:py-24">
        <div
          className="absolute left-6 top-7 rotate-[-6deg] text-[11px] text-[#a77f9c] sm:left-10 sm:top-9 sm:text-sm md:left-14"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          our little archive ♡
        </div>
        <div
          className="absolute right-5 top-9 rotate-[8deg] text-[8px] uppercase tracking-[0.3em] text-[#9b8aa0] sm:right-8 sm:top-12 sm:text-[10px] sm:tracking-[0.35em]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          vol. 01
        </div>
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[64px] font-bold tracking-[-0.08em] text-white/50 xs:text-[75px] sm:text-[105px] md:text-[150px] lg:text-[190px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          HANEULZ
        </div>
        <div className="relative flex min-h-[440px] items-center justify-center sm:min-h-[500px]">
          <div className="w-full text-center">
            <div className="mb-7 flex items-center justify-center gap-3 sm:mb-8 sm:gap-5">
              <span className="h-px w-8 bg-[#c7a4bc] sm:w-12 md:w-16" />
              <Cloud
                size={22}
                strokeWidth={1.2}
                className="text-[#a68aaa] sm:h-7 sm:w-7"
              />
              <span className="h-px w-8 bg-[#c7a4bc] sm:w-12 md:w-16" />
            </div>
            <p
              className="text-[8px] uppercase tracking-[0.5em] text-[#9b8499] sm:text-[10px] sm:tracking-[0.7em]"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              HAN × JL
            </p>
            <h1
              className="mt-6 text-[4.2rem] leading-[0.82] tracking-[-0.04em] text-[#403940] sm:mt-7 sm:text-7xl md:text-8xl lg:text-[10rem]"
              style={{
                fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              HANEULZ
            </h1>
            <div className="mx-auto mt-8 flex items-center justify-center gap-2 sm:mt-10 sm:gap-3">
              <span className="h-px w-7 bg-[#d1b2c5] sm:w-10" />
              <span className="text-sm text-[#b18bab] sm:text-base">
                ✦
              </span>
              <span className="h-px w-12 bg-[#d1b2c5] sm:w-20" />
            </div>
            <p
              className="mx-auto mt-6 max-w-[290px] text-base leading-7 tracking-[0.04em] text-[#716773] sm:mt-8 sm:max-w-md sm:text-xl sm:leading-8"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              the story of two voices that found each other
            </p>
            <div
              className="mx-auto mt-8 inline-block rotate-[-3deg] border border-[#d7c0d0] bg-[#fffaf6]/70 px-4 py-2 text-[10px] text-[#927b91] shadow-sm sm:mt-10 sm:px-5 sm:text-xs"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              saved here, just because ♡
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap text-[7px] uppercase tracking-[0.3em] text-[#aa98a7] sm:bottom-9 sm:gap-4 sm:text-[9px] sm:tracking-[0.45em]">
          <span>stories</span>
          <span>·</span>
          <span>memories</span>
          <span>·</span>
          <span>music</span>
        </div>
      </section>
      {/* =====================================================
          HERO IMAGE
      ===================================================== */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-12">
        <ImagePlaceholder
          label="HANEULZ"
          large
          rotate="-1deg"
        />
      </div>
      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="relative px-6 py-10 sm:px-8 sm:py-12 md:px-16 md:py-14 lg:px-24 lg:py-16">
        <div className="absolute right-5 top-9 hidden rotate-[7deg] md:block">
          <div className="border border-[#d8bfd0] bg-[#fffaf8]/75 px-3 py-2 text-[10px] text-[#927c91] shadow-sm lg:px-4 lg:py-3 lg:text-xs">
            <p style={{ fontFamily: "'Comic Sans MS', cursive" }}>
              how did this even become a thing? ♡
            </p>
          </div>
        </div>
        <SectionHeader
          number="01"
          title="HANEULZ"
          icon={<Cloud size={17} strokeWidth={1.2} />}
        />
        <div className="mt-6 max-w-3xl sm:mt-7">
          <StoryParagraph>
            HANEULZ is a name that came from Han and Jaeyel, the pronunciation
            of JL's name, and it also happens to sound like <i>haneul</i> (하늘),
            which means sky in Korean. I honestly think it fits them so well
            because it started from just their names, but somehow it became
            this little name that holds so many memories from Universe League
            until now.
          </StoryParagraph>
        </div>
      </section>
      {/* =====================================================
          WHERE IT STARTED
      ===================================================== */}
      <section className="relative px-6 py-8 sm:px-8 sm:py-10 md:px-16 lg:px-24">
        <SectionHeader
          number="02"
          title="Where It All Started"
          icon={<Sparkles size={17} strokeWidth={1.2} />}
        />
        <div className="mt-6 max-w-4xl sm:mt-7">
          <StoryParagraph>
            Before HANEULZ was even a thing, Han and JL were just two trainees
            trying to make it through Universe League. They didn't start out
            as some inseparable pair or anything like that. They had their own
            stages, their own teams, and their own moments, and that's actually
            what makes their story so fun to look back on.
          </StoryParagraph>
          <StoryParagraph>
            JL first showed up with “One and Only” by BOYNEXTDOOR and immediately
            had that kind of stage presence where you just end up watching him.
            His vocals were stable, his dancing was eye-catching, and of course
            that smile was there too. During one of the drafting episodes, he
            became known as the “three pick” because three mentors chose him.
            Like… three. ㅋㅋㅋㅋ It really showed how much of an impression he
            was already making.
          </StoryParagraph>
        </div>
      </section>
      {/* =====================================================
          HAN IMAGE
      ===================================================== */}
      <div className="px-6 sm:px-10 md:px-20 lg:px-32">
        <ImagePlaceholder
          label="HAN · SIREN"
          rotate="2deg"
        />
      </div>
      {/* =====================================================
          HAN TEXT
      ===================================================== */}
      <section className="relative px-6 py-8 sm:px-8 sm:py-10 md:px-20 lg:px-32">
        <div className="absolute left-5 top-7 hidden text-5xl text-[#d7a8bf]/30 md:block">
          “
        </div>
        <StoryParagraph>
          Then came Han with “Siren.” His whole vibe was completely different.
          He had that mysterious aura when he walked onto the stage, and then
          once he started singing, you could really hear how strong his voice
          was. His dancing was sharp and detailed too, and he didn't hold
          himself back during the performance. It was one of those stages
          where you could immediately understand why people were paying
          attention to him.
        </StoryParagraph>
      </section>
      {/* =====================================================
          FIRST IMPRESSION
      ===================================================== */}
      <section className="relative mx-4 my-6 rounded-[2rem] border border-white/70 bg-white/30 px-6 py-9 sm:mx-6 sm:my-8 sm:rounded-[2.5rem] sm:px-8 sm:py-12 md:mx-10 md:px-14 lg:mx-16 lg:px-16">
        <SectionHeader
          number="03"
          title="The First Impression"
        />
        <div className="mt-6 max-w-3xl sm:mt-7">
          <StoryParagraph>
            And then there's the funniest part because one of Han's first
            impressions of JL wasn't some dramatic first meeting. JL literally
            entered the wrong practice room. ㅋㅋㅋㅋ He opened the door to the
            Siren practice room looking completely confused and went,
            “Eugh? This isn't One and Only team?” before realizing he was in the
            wrong room and leaving.
          </StoryParagraph>
          <StoryParagraph>
            Han remembered how funny his expression was, and honestly, that is
            such a HANEULZ way for their story to start.
          </StoryParagraph>
        </div>
      </section>
      {/* =====================================================
          LITTLE PRINCE IMAGE
      ===================================================== */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <ImagePlaceholder
          label="THE LITTLE PRINCE · 12.27.2024"
          rotate="-2deg"
        />
      </div>
      {/* =====================================================
          LITTLE PRINCE
      ===================================================== */}
      <section className="relative px-6 py-10 sm:px-8 sm:py-12 md:px-16 lg:px-24">
        <SectionHeader
          number="04"
          title="The Little Prince"
          icon={<Heart size={17} strokeWidth={1.2} />}
        />
        <div className="mt-6 max-w-4xl sm:mt-7">
          <StoryParagraph>
            Then December 27, 2024 happened. The Little Prince. After seeing Han
            and JL doing their own thing throughout the competition, they finally
            got to sing together. And honestly, what else am I supposed to say
            except… their voices sounded so good together.
          </StoryParagraph>
          <StoryParagraph>
            Han's voice and JL's voice have their own colors, but they didn't
            fight each other. They actually fit together really naturally.
            Their harmonies made the whole performance feel so much fuller, and
            it was one of those stages where you could just sit there and listen
            without thinking about anything else.
          </StoryParagraph>
          <StoryParagraph>
            Even the trainees watching them reacted to it, with some of them
            saying they got goosebumps. And I completely understand why because
            hearing those two voices together for the first time was just…
            yeah. HANEULZ.
          </StoryParagraph>
          <StoryParagraph>
            That performance became such an important part of their story because
            it was one of the first times we really got to see what happens when
            Han and JL share the same stage instead of watching them separately.
          </StoryParagraph>
        </div>
      </section>
      {/* =====================================================
          DEBUT
      ===================================================== */}
      <section className="relative mx-4 my-7 overflow-hidden rounded-[2.4rem] bg-[#45404b] px-6 py-10 text-[#f8f2ed] sm:mx-6 sm:my-8 sm:rounded-[3rem] sm:px-9 sm:py-14 md:mx-10 md:px-14 lg:mx-16 lg:px-20 lg:py-16">
        <div className="absolute -right-8 -top-12 text-[100px] text-white/[0.035] sm:text-[150px] md:text-[190px]">
          AHOF
        </div>
        <div className="relative">
          <p className="text-[8px] uppercase tracking-[0.45em] text-[#d4c2d0] sm:text-[9px] sm:tracking-[0.55em]">
            05 · new chapter
          </p>
          <h2
            className="mt-4 max-w-2xl text-4xl leading-[1.02] tracking-[0.02em] sm:mt-5 sm:text-5xl md:text-6xl"
            style={{
              fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
            }}
          >
            And Then They
            <br />
            Debuted Together
          </h2>
          <div className="mt-6 max-w-3xl sm:mt-8">
            <StoryParagraph dark>
              After everything that happened during Universe League, Han and JL
              eventually debuted together as members of AHOF on July 1, 2025.
              And honestly, this is probably one of my favorite parts of their
              whole story because after watching them go through the competition,
              seeing them actually end up in the same group felt so satisfying.
              Like finally??? They are actually going to be on the same stages now???
            </StoryParagraph>
            <StoryParagraph dark>
              Together with Steven, Jeongwoo, Woongki, Shuaibo, Chih En, Juwon,
              and Daisuke, they started this new chapter with AHOF's debut album
              <i>Who We Are</i> and the title track “그곳에서 다시 만나기로 해
              (Rendezvous).”
            </StoryParagraph>
            <StoryParagraph dark>
              And of course, HANEULZ didn't just disappear after debut. If
              anything, we started getting even more little moments.
            </StoryParagraph>
          </div>
        </div>
      </section>
      {/* =====================================================
          LITTLE THINGS HEADER
      ===================================================== */}
      <section className="relative px-6 pb-6 pt-10 sm:px-8 sm:pb-7 sm:pt-12 md:px-16 lg:px-24">
        <SectionHeader
          number="06"
          title="The Little Things"
        />
      </section>
      {/* IMAGE DIRECTLY UNDER HEADER */}
      <div className="px-5 sm:px-8 md:px-20 lg:px-28">
        <ImagePlaceholder
          label="LITTLE MOMENTS"
          rotate="1deg"
        />
      </div>
      {/* LITTLE THINGS TEXT */}
      <section className="px-6 py-5 sm:px-8 sm:py-7 md:px-20 lg:px-32">
        <StoryParagraph>
          One of the things that always makes me smile is how often Han and JL
          end up singing together. Han has talked about how JL is good at
          harmonizing and how beautiful his high notes are, and there have been
          so many moments where the two of them just casually start singing
          together like it's the most normal thing in the world.
        </StoryParagraph>
        <StoryParagraph>
          Han even joked about how the practice room is basically never quiet
          because he and JL are always singing. And honestly, I can believe it.
          ㅋㅋㅋㅋ
        </StoryParagraph>
        <StoryParagraph>
          There are also all those random little moments that don't necessarily
          look important on their own but somehow become the things you remember.
          JL giving Han jelly. Han eating it. Them sharing food. The random
          photos. Han leaning on JL because he was tired and JL suddenly taking
          a picture. Their random duets. Calling each other by their nicknames.
          Those little “Hani hyung~” moments. The way they can turn literally
          nothing into a whole interaction.
        </StoryParagraph>
        <StoryParagraph>
          There was even the mafia game moment where Han talked about JL always
          saving him when he was about to die and how he thought it was better
          doing it with JL because JL was good at harmonizing and his high
          notes were beautiful.
        </StoryParagraph>
      </section>
      {/* =====================================================
          QUOTE
      ===================================================== */}
      <section className="relative my-7 overflow-hidden px-5 py-14 text-center sm:my-10 sm:px-7 sm:py-20">
        <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dfc4e3]/40 blur-[65px] sm:h-72 sm:w-72 sm:blur-[80px]" />
        <div className="relative">
          <Star
            className="mx-auto mb-6 text-[#ad8baa]"
            size={17}
            strokeWidth={1}
          />
          <p
            className="mx-auto max-w-3xl text-[2rem] leading-[1.15] tracking-[0.025em] text-[#4b424d] sm:text-4xl md:text-5xl lg:text-6xl"
            style={{
              fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
            }}
          >
            “Haneulz is JL and me, right?”
          </p>
          <div className="mx-auto mt-7 flex items-center justify-center gap-3 sm:mt-8 sm:gap-4">
            <span className="h-px w-7 bg-[#c6a7bc] sm:w-10" />
            <span
              className="text-[9px] uppercase tracking-[0.4em] text-[#9b8197] sm:text-xs sm:tracking-[0.5em]"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              — Han
            </span>
            <span className="h-px w-7 bg-[#c6a7bc] sm:w-10" />
          </div>
        </div>
      </section>
      <section className="px-6 py-5 sm:px-8 sm:py-7 md:px-20 lg:px-32">
        <StoryParagraph>
          YES. THAT. Because at that point HANEULZ wasn't just something fans
          were calling them. They knew the name too.
        </StoryParagraph>
        <StoryParagraph>
          There are so many little things like this that I could honestly keep
          going forever. Sometimes they're singing, sometimes they're joking
          around, sometimes they're just sitting together, and sometimes it's
          literally just one sentence that somehow ends up being memorable.
        </StoryParagraph>
        <StoryParagraph>
          That's what I like about HANEULZ. It's not only the big performances.
          It's all these tiny moments in between.
        </StoryParagraph>
      </section>
      {/* =====================================================
          HANSUM
      ===================================================== */}
      <section className="relative mx-4 my-8 overflow-hidden rounded-[2.4rem] border border-white/70 bg-[#eee8f3]/65 px-6 py-10 sm:mx-6 sm:my-10 sm:rounded-[3rem] sm:px-9 sm:py-14 md:mx-10 md:px-14 lg:mx-20 lg:px-20">
        <div className="absolute right-5 top-5 text-[#a895b5]/30 sm:right-7 sm:top-7">
          <Heart
            size={32}
            strokeWidth={1}
            className="sm:h-10 sm:w-10"
          />
        </div>
        <SectionHeader
          number="07"
          title="Hansum"
        />
        <div className="mt-6 max-w-3xl sm:mt-7">
          <StoryParagraph>
            And then there's Hansum. Hansum comes from Han's fandom name,
            Park Ha-dan, and JL's nickname, DimSUM. It also connects to the
            Korean word 한숨, which means a sigh or a deep breath.
          </StoryParagraph>
          <StoryParagraph>
            I actually really like that meaning because this whole little corner
            is kind of like that too. A place where you can just breathe for a
            second, look back at the memories, replay the performances, save the
            funny moments, and just enjoy being here.
          </StoryParagraph>
        </div>
      </section>
      {/* =====================================================
          FINAL IMAGE
      ===================================================== */}
      <div className="px-5 sm:px-8 md:px-20 lg:px-28">
        <ImagePlaceholder
          label="HANEULZ · ALWAYS"
          large
          rotate="-1deg"
        />
      </div>
      {/* =====================================================
          WHY HANEULZ
      ===================================================== */}
      <section className="relative px-6 py-11 sm:px-8 sm:py-14 md:px-16 lg:px-24">
        <SectionHeader
          number="08"
          title="Why HANEULZ"
        />
        <div className="mt-6 max-w-4xl sm:mt-7">
          <StoryParagraph>
            I don't think HANEULZ can really be summed up by one performance or
            one funny interaction. It started with two trainees who didn't even
            know that they were going to end up together. One accidentally walked
            into the wrong practice room. They eventually sang The Little Prince
            together. Then somehow, after everything, they debuted in the same group.
          </StoryParagraph>
          <StoryParagraph>
            And now there are all these little memories in between. The singing.
            The harmonies. The jokes. The food. The random photos. The lives.
            The practice room chaos. The “Hani hyung” moments. The “Jeyelie”
            moments. The times they randomly start singing together. All of those
            tiny things that probably felt ordinary when they happened but became
            memories that people kept coming back to.
          </StoryParagraph>
          <StoryParagraph>
            That's what this corner is for. Not to make their story sound bigger
            or more dramatic than it is, but just to keep the moments that made
            HANEULZ feel like HANEULZ in one place.
          </StoryParagraph>
          <StoryParagraph>
            And honestly, I'm just really happy that after everything, Han and JL
            got to debut together and keep making these memories.
          </StoryParagraph>
        </div>
        <div className="mt-10 flex justify-center sm:mt-14">
          <div
            className="max-w-[290px] rotate-[-2deg] border border-[#d2b6c9] bg-[#fffaf7]/80 px-5 py-4 text-center shadow-[4px_7px_0_rgba(185,145,170,0.12)] sm:max-w-none sm:px-7 sm:py-5"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            <p className="text-base text-[#806a7e] sm:text-lg">
              So… welcome to the little HANEULZ corner. ♡
            </p>
            <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-[#ad98aa] sm:text-[10px] sm:tracking-[0.35em]">
              made with love
            </p>
          </div>
        </div>
      </section>
      {/* =====================================================
          FOOTER
      ===================================================== */}
      <div className="flex items-center justify-center gap-4 pb-9 pt-1 sm:gap-5 sm:pb-12">
        <span className="h-px w-10 bg-[#d0b6c6] sm:w-16" />
        <Cloud
          size={13}
          strokeWidth={1}
          className="text-[#a98aa7] sm:h-[15px] sm:w-[15px]"
        />
        <span className="h-px w-10 bg-[#d0b6c6] sm:w-16" />
      </div>
    </article>
  );
}
/* ===============================================================
   SECTION HEADER
================================================================ */
function SectionHeader({ number, title, icon }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2 sm:gap-3">
        <span
          className="shrink-0 text-[8px] font-medium tracking-[0.4em] text-[#a4869d] sm:text-[9px] sm:tracking-[0.5em]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          {number}
        </span>
        <span className="h-px w-5 shrink-0 bg-[#cfb1c4] sm:w-8" />
        {icon && (
          <span className="shrink-0 text-[#aa8baa]">
            {icon}
          </span>
        )}
      </div>
      <h2
        className="mt-3 break-words text-[2.15rem] leading-[1.05] tracking-[0.035em] text-[#443c45] sm:mt-4 sm:text-4xl sm:tracking-[0.04em] md:text-5xl lg:text-6xl"
        style={{
          fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
        }}
      >
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-2 sm:mt-5">
        <span className="h-[2px] w-6 bg-[#bd99b1] sm:w-8" />
        <span className="h-px w-12 bg-[#dfccd7] sm:w-20" />
      </div>
    </div>
  );
}
/* ===============================================================
   PARAGRAPH
================================================================ */
function StoryParagraph({ children, dark = false }) {
  return (
    <p
      className={`mb-4 text-[16px] leading-[1.75] tracking-[0.035em] sm:mb-5 sm:text-[17px] sm:leading-[1.82] sm:tracking-[0.04em] md:text-[18px] md:leading-[1.85] ${
        dark ? "text-[#ddd4dc]" : "text-[#6d646d]"
      }`}
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      {children}
    </p>
  );
}
/* ===============================================================
   ADMIN IMAGE PLACEHOLDER
================================================================ */
function ImagePlaceholder({
  label,
  large = false,
  rotate = "0deg",
}) {
  return (
    <div
      className={`relative my-6 w-full sm:my-8 ${
        large
          ? "min-h-[280px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[420px]"
          : "min-h-[250px] sm:min-h-[300px] md:min-h-[330px]"
      }`}
      style={{
        transform: `rotate(${rotate})`,
      }}
    >
      {/* tape */}
      <div className="absolute left-1/2 top-[-8px] z-20 h-6 w-16 -translate-x-1/2 rotate-[-2deg] bg-[#e6d4a8]/70 shadow-sm sm:top-[-10px] sm:h-7 sm:w-24" />
      {/* shadow */}
      <div className="absolute inset-2 rounded-[1.8rem] bg-[#d3c2d0]/30 blur-md sm:rounded-[2.3rem]" />
      {/* frame */}
      <div className="relative min-h-inherit overflow-hidden rounded-[1.8rem] border-[5px] border-[#fffdf9] bg-[#eee5e5] shadow-[0_15px_40px_rgba(77,57,76,0.14)] sm:rounded-[2.3rem] sm:border-[7px] sm:shadow-[0_20px_50px_rgba(77,57,76,0.16)]">
        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f2d4df] via-[#eeeaf4] to-[#cfe2e0]" />
        {/* dots */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        {/* placeholder */}
        <div className="relative flex min-h-inherit items-center justify-center p-5 sm:p-8">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/35 sm:mb-5 sm:h-14 sm:w-14">
              <Cloud
                size={19}
                strokeWidth={1}
                className="text-[#9f859d] sm:h-[22px] sm:w-[22px]"
              />
            </div>
            <p
              className="text-[8px] uppercase tracking-[0.4em] text-[#8f788d] sm:text-[10px] sm:tracking-[0.6em]"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              {label}
            </p>
            <div className="mx-auto mt-3 h-px w-8 bg-[#aa8ba5] sm:mt-4 sm:w-10" />
            <p
              className="mt-3 text-xs text-[#907e8d] sm:mt-4 sm:text-sm"
              style={{
                fontFamily: "'Comic Sans MS', cursive",
              }}
            >
              admin image goes here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
