import { Cloud, Sparkles, Heart } from "lucide-react";
export default function HaneulzStory() {
  return (
    <article className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] bg-[#f4ebe6] text-[#40383f] shadow-[0_24px_80px_rgba(70,55,65,0.16)] sm:rounded-[2.5rem] lg:rounded-[3rem]">
      {/* =====================================================
          SOFT PAGE BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* warm pink */}
        <div className="absolute -left-44 -top-24 h-[440px] w-[440px] rounded-full bg-[#e7b5c7]/35 blur-[110px]" />
        {/* lavender */}
        <div className="absolute -right-44 top-[700px] h-[460px] w-[460px] rounded-full bg-[#c7b9dd]/28 blur-[120px]" />
        {/* blue */}
        <div className="absolute -left-48 top-[1550px] h-[480px] w-[480px] rounded-full bg-[#a9ced4]/25 blur-[120px]" />
        {/* pink again */}
        <div className="absolute -right-44 top-[2450px] h-[480px] w-[480px] rounded-full bg-[#e2b6c9]/25 blur-[120px]" />
        {/* sage */}
        <div className="absolute -left-44 top-[3450px] h-[480px] w-[480px] rounded-full bg-[#b9d3c8]/25 blur-[120px]" />
        {/* tiny decorative dots */}
        <span className="absolute left-[9%] top-[900px] h-2 w-2 rounded-full bg-[#b87998]/45" />
        <span className="absolute right-[12%] top-[1450px] h-2.5 w-2.5 rounded-full bg-[#8172a4]/40" />
        <span className="absolute left-[13%] top-[2650px] h-2 w-2 rounded-full bg-[#6b9da7]/45" />
        <span className="absolute right-[10%] top-[3300px] h-2.5 w-2.5 rounded-full bg-[#8cae9c]/45" />
      </div>
      {/* =====================================================
          COVER
      ===================================================== */}
      <section className="relative min-h-[520px] px-5 py-14 sm:min-h-[600px] sm:px-8 sm:py-20 md:px-12 lg:min-h-[650px] lg:px-16">
        <span
          className="absolute left-6 top-7 rotate-[-5deg] text-[10px] tracking-[0.1em] text-[#806477] sm:left-10 sm:top-10 sm:text-xs"
          style={{ fontFamily: "'Comic Sans MS', cursive" }}
        >
          our little archive
        </span>
        <span
          className="absolute right-5 top-8 text-[8px] uppercase tracking-[0.45em] text-[#806c7d] sm:right-10 sm:top-12 sm:text-[10px]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          vol. 01
        </span>
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[62px] font-bold tracking-[-0.08em] text-white/35 sm:text-[105px] md:text-[150px] lg:text-[190px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          HANEULZ
        </div>
        <div className="relative flex min-h-[430px] items-center justify-center sm:min-h-[500px]">
          <div className="w-full text-center">
            <div className="mb-7 flex items-center justify-center gap-3 sm:mb-9 sm:gap-5">
              <span className="h-px w-8 bg-[#b97999] sm:w-14" />
              <Cloud
                size={23}
                strokeWidth={1.1}
                className="text-[#79669b]"
              />
              <span className="h-px w-8 bg-[#b97999] sm:w-14" />
            </div>
            <p
              className="text-[9px] uppercase tracking-[0.7em] text-[#795f70] sm:text-[10px] sm:tracking-[0.85em]"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              HAN × JL
            </p>
            <h1
              className="mt-6 text-[4.2rem] leading-[0.82] tracking-[0.035em] text-[#40373f] sm:text-7xl md:text-8xl lg:text-[10rem]"
              style={{
                fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              HANEULZ
            </h1>
            <div className="mx-auto mt-9 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#b97999] sm:w-12" />
              <span className="text-sm text-[#816a9e]">✦</span>
              <span className="h-px w-14 bg-[#b97999] sm:w-20" />
            </div>
            <p
              className="mx-auto mt-6 max-w-[320px] text-[17px] leading-7 tracking-[0.075em] text-[#675d65] sm:max-w-md sm:text-xl sm:leading-8"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              the story of two voices that found each other
            </p>
            <div
              className="mx-auto mt-8 inline-block rotate-[-2deg] border border-[#c596ac] bg-[#fff7f1]/75 px-5 py-2.5 text-[10px] tracking-[0.12em] text-[#755c6e] shadow-[4px_5px_0_rgba(120,85,110,0.1)] sm:mt-10 sm:text-xs"
              style={{ fontFamily: "'Comic Sans MS', cursive" }}
            >
              saved here, just because ♡
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          COVER IMAGE
      ===================================================== */}
      <div className="px-4 sm:px-7 md:px-10 lg:px-12">
        <ImagePlaceholder
          label="HANEULZ"
          large
          rotate="-1deg"
        />
      </div>
      {/* =====================================================
          HANEULZ
      ===================================================== */}
      <section className="relative px-6 pb-8 pt-5 sm:px-8 sm:pb-10 sm:pt-6 md:px-16 lg:px-24">
        <SectionHeader
          number="01"
          title="HANEULZ"
          icon={<Cloud size={17} strokeWidth={1.2} />}
        />
        <div className="mt-5 max-w-4xl sm:mt-6">
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
      <section className="relative px-6 pb-7 pt-1 sm:px-8 sm:pb-9 md:px-16 lg:px-24">
        <SectionHeader
          number="02"
          title="Where It All Started"
          icon={<Sparkles size={17} strokeWidth={1.2} />}
        />
        <div className="mt-5 max-w-4xl sm:mt-6">
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
          HAN
      ===================================================== */}
      <section className="relative px-6 pb-8 pt-5 sm:px-8 sm:pb-10 sm:pt-6 md:px-20 lg:px-32">
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
      <section className="relative mx-4 my-5 rounded-[2rem] border border-[#d9c5ce]/60 bg-[#fff8f4]/55 px-6 py-8 sm:mx-6 sm:my-7 sm:rounded-[2.5rem] sm:px-9 sm:py-10 md:mx-10 md:px-14 lg:mx-16">
        <SectionHeader
          number="03"
          title="The First Impression"
        />
        <div className="mt-5 max-w-4xl sm:mt-6">
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
      <section className="relative px-6 pb-8 pt-5 sm:px-8 sm:pb-10 sm:pt-6 md:px-16 lg:px-24">
        <SectionHeader
          number="04"
          title="The Little Prince"
          icon={<Heart size={17} strokeWidth={1.2} />}
        />
        <div className="mt-5 max-w-4xl sm:mt-6">
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
          NEW CHAPTER
      ===================================================== */}
      <section className="relative mx-4 my-6 overflow-hidden rounded-[2.5rem] border border-[#736878]/20 bg-[#655967] px-6 py-9 text-[#faf4ef] shadow-[0_18px_55px_rgba(70,55,65,0.16)] sm:mx-6 sm:my-8 sm:rounded-[3rem] sm:px-9 sm:py-12 md:mx-10 md:px-14 lg:mx-16 lg:px-20">
        <div className="absolute -right-10 -top-14 text-[140px] tracking-[-0.1em] text-white/[0.035] sm:text-[200px]">
          AHOF
        </div>
        <div className="relative">
          <p className="text-[8px] uppercase tracking-[0.6em] text-[#ead5de] sm:text-[9px] sm:tracking-[0.7em]">
            05 · new chapter
          </p>
          <h2
            className="mt-4 max-w-2xl text-4xl leading-[1.02] tracking-[0.05em] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
            }}
          >
            And Then They
            <br />
            Debuted Together
          </h2>
          <div className="mt-8 sm:mt-10">
            <ImagePlaceholder
              label="AHOF · GROUP PHOTO"
              group
              darkFrame
              rotate="1deg"
            />
          </div>
          <div className="mt-5 max-w-4xl">
            <StoryParagraph dark>
              After everything that happened during Universe League, Han and JL
              eventually debuted together as members of AHOF on July 1, 2025.
              And honestly, this is probably one of my favorite parts of their
              whole story because after watching them go through the competition,
              seeing them actually end up in the same group felt so satisfying.
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
      <section className="relative px-6 pb-3 pt-10 sm:px-8 sm:pb-4 sm:pt-12 md:px-16 lg:px-24">
        <SectionHeader
          number="06"
          title="The Little Things"
        />
      </section>
      {/* IMAGE IMMEDIATELY AFTER HEADER */}
      <div className="px-5 sm:px-8 md:px-20 lg:px-28">
        <ImagePlaceholder
          label="LITTLE MOMENTS"
          rotate="1deg"
        />
      </div>
      {/* LITTLE THINGS TEXT */}
      <section className="px-6 pb-8 pt-5 sm:px-8 sm:pb-10 sm:pt-6 md:px-20 lg:px-32">
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
          SPECIAL HIGHLIGHT
      ===================================================== */}
      <section className="relative mx-5 my-8 sm:mx-8 sm:my-10 md:mx-14 lg:mx-20">
        {/* decorative offset shape */}
        <div className="absolute inset-x-3 top-3 bottom-[-8px] rotate-[1.5deg] rounded-[2rem] bg-[#d5c1d7]/55 sm:rounded-[2.5rem]" />
        <div className="absolute inset-x-1 top-1 bottom-[-4px] rotate-[-1deg] rounded-[2rem] bg-[#edc4d2]/45 sm:rounded-[2.5rem]" />
        <div className="relative overflow-hidden rounded-[2rem] border border-[#c39aae]/55 bg-[#fff4ef] px-6 py-11 shadow-[0_15px_45px_rgba(91,66,87,0.12)] sm:rounded-[2.5rem] sm:px-10 sm:py-14 md:px-14 lg:px-20">
          {/* tiny decorative marks */}
          <span className="absolute left-6 top-6 text-2xl text-[#b77e9c]/60 sm:left-9 sm:top-8">
            “
          </span>
          <span className="absolute bottom-[-5px] right-7 text-6xl text-[#a98ab0]/25 sm:right-12 sm:text-8xl">
            ”
          </span>
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-7 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c28da7] sm:w-14" />
              <span className="text-[8px] uppercase tracking-[0.55em] text-[#846a7c] sm:text-[9px] sm:tracking-[0.7em]">
                a little moment
              </span>
              <span className="h-px w-8 bg-[#c28da7] sm:w-14" />
            </div>
            <blockquote
              className="mx-auto max-w-3xl text-[2.25rem] leading-[1.12] tracking-[0.055em] text-[#403640] sm:text-4xl md:text-5xl lg:text-[4.1rem]"
              style={{
                fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
              }}
            >
              “Haneulz is JL and me, right?”
            </blockquote>
            <div className="mx-auto mt-7 h-[1px] w-16 bg-[#b9829e] sm:mt-9 sm:w-24" />
            <div className="mt-5">
              <p
                className="text-[20px] tracking-[0.09em] text-[#644e5e] sm:text-[23px]"
                style={{
                  fontFamily: "'Comic Sans MS', cursive",
                }}
              >
                — Han
              </p>
              <p className="mt-2 text-[7px] uppercase tracking-[0.55em] text-[#a17f91] sm:text-[8px] sm:tracking-[0.7em]">
                one sentence, enough said
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================
          AFTER QUOTE
      ===================================================== */}
      <section className="px-6 pb-8 pt-5 sm:px-8 sm:pb-10 sm:pt-6 md:px-20 lg:px-32">
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
      <section className="relative mx-4 my-6 overflow-hidden rounded-[2.5rem] border border-[#b8ced0]/55 bg-[#edf3f0]/70 px-6 py-9 sm:mx-6 sm:my-8 sm:rounded-[3rem] sm:px-9 sm:py-11 md:mx-10 md:px-14 lg:mx-20 lg:px-20">
        <div className="absolute right-6 top-6 text-[#739da0]/20">
          <Heart size={48} strokeWidth={1} />
        </div>
        <SectionHeader
          number="07"
          title="Hansum"
        />
        <div className="mt-5 max-w-4xl sm:mt-6">
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
      <section className="relative px-6 pb-10 pt-5 sm:px-8 sm:pb-13 sm:pt-6 md:px-16 lg:px-24">
        <SectionHeader
          number="08"
          title="Why HANEULZ"
        />
        <div className="mt-5 max-w-4xl sm:mt-6">
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
        <div className="mt-8 flex justify-center sm:mt-11">
          <div
            className="max-w-[320px] rotate-[-2deg] border border-[#c493ab] bg-[#fff7f1]/85 px-5 py-4 text-center shadow-[5px_7px_0_rgba(105,76,99,0.1)] sm:max-w-none sm:px-8 sm:py-5"
            style={{
              fontFamily: "'Comic Sans MS', cursive",
            }}
          >
            <p className="text-base tracking-[0.065em] text-[#735c6c] sm:text-lg">
              So… welcome to the little HANEULZ corner. ♡
            </p>
            <p className="mt-2 text-[8px] uppercase tracking-[0.45em] text-[#9b7d90] sm:text-[10px]">
              made with love
            </p>
          </div>
        </div>
      </section>
      {/* =====================================================
          FOOTER
      ===================================================== */}
      <div className="flex items-center justify-center gap-4 pb-9 pt-1 sm:gap-5 sm:pb-12">
        <span className="h-px w-10 bg-[#b97999] sm:w-16" />
        <Cloud
          size={14}
          strokeWidth={1}
          className="text-[#77639a]"
        />
        <span className="h-px w-10 bg-[#b97999] sm:w-16" />
      </div>
    </article>
  );
}
/* =============================================================
   SECTION HEADER
============================================================= */
function SectionHeader({ number, title, icon }) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2 sm:gap-3">
        <span
          className="shrink-0 text-[8px] tracking-[0.55em] text-[#806477] sm:text-[9px] sm:tracking-[0.65em]"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          {number}
        </span>
        <span className="h-px w-5 shrink-0 bg-[#b97999] sm:w-9" />
        {icon && (
          <span className="shrink-0 text-[#77639a]">
            {icon}
          </span>
        )}
      </div>
      <h2
        className="mt-3 break-words text-[2.15rem] leading-[1.04] tracking-[0.075em] text-[#423943] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl"
        style={{
          fontFamily: "'Bodoni 72', 'Didot', Georgia, serif",
        }}
      >
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-2 sm:mt-5">
        <span className="h-[2px] w-6 bg-[#b97999] sm:w-9" />
        <span className="h-px w-12 bg-[#c7a5b7] sm:w-20" />
      </div>
    </div>
  );
}
/* =============================================================
   STORY PARAGRAPH
============================================================= */
function StoryParagraph({ children, dark = false }) {
  return (
    <p
      className={`mb-3 text-[16px] leading-[1.7] tracking-[0.06em] sm:mb-3.5 sm:text-[17px] sm:leading-[1.76] md:text-[18px] md:leading-[1.8] ${
        dark ? "text-[#ded4db]" : "text-[#615861]"
      }`}
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      {children}
    </p>
  );
}
/* =============================================================
   ADMIN IMAGE PLACEHOLDER
   Replace the placeholder with the admin-selected image later.
   The fixed aspect ratios prevent unpredictable giant spacing.
============================================================= */
function ImagePlaceholder({
  label,
  large = false,
  group = false,
  darkFrame = false,
  rotate = "0deg",
}) {
  return (
    <div
      className="relative w-full"
      style={{
        transform: `rotate(${rotate})`,
        marginBottom: "-5px",
      }}
    >
      {/* tape */}
      <div className="absolute left-1/2 top-[-7px] z-20 h-7 w-20 -translate-x-1/2 rotate-[-2deg] bg-[#dbc99b]/75 shadow-sm sm:top-[-9px] sm:h-8 sm:w-28" />
      {/* shadow */}
      <div className="absolute inset-2 rounded-[1.8rem] bg-[#594b5b]/15 blur-md sm:rounded-[2.5rem]" />
      {/* frame */}
      <div
        className={`relative w-full overflow-hidden rounded-[1.8rem] border-[6px] shadow-[0_15px_35px_rgba(63,49,64,0.14)] sm:rounded-[2.5rem] sm:border-[8px] sm:shadow-[0_18px_45px_rgba(63,49,64,0.16)] ${
          large || group ? "aspect-[16/9]" : "aspect-[4/3]"
        } ${
          darkFrame
            ? "border-[#66596a] bg-[#514955]"
            : "border-[#fffaf5] bg-[#d9cdcf]"
        }`}
      >
        {/* placeholder background */}
        <div
          className={`absolute inset-0 ${
            darkFrame
              ? "bg-gradient-to-br from-[#77677e] via-[#667282] to-[#527a80]"
              : "bg-gradient-to-br from-[#d28eaa] via-[#a08fbc] to-[#77adb7]"
          }`}
        />
        {/* subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.11]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "15px 15px",
          }}
        />
        {/* placeholder */}
        <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/65 bg-white/20 sm:mb-4 sm:h-14 sm:w-14">
              <Cloud
                size={21}
                strokeWidth={1}
                className="text-white/85"
              />
            </div>
            <p
              className="text-[8px] uppercase tracking-[0.5em] text-white/90 sm:text-[10px] sm:tracking-[0.7em]"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              {label}
            </p>
            <div className="mx-auto mt-3 h-px w-9 bg-white/60 sm:mt-4 sm:w-12" />
            <p
              className="mt-3 text-xs tracking-[0.05em] text-white/75 sm:text-sm"
              style={{ fontFamily: "'Comic Sans MS', cursive" }}
            >
              admin image goes here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
