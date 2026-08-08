import { Reveal } from "./Reveal";
import { Cloud, Sparkles, Heart } from "lucide-react";
export default function HaneulzStory() {
  return (
    <Reveal>
      <article className="mx-auto w-full max-w-4xl px-4 pb-24 sm:px-6">
        {/* INTRO */}
        <header className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#fff4f8] via-[#f8f4ff] to-[#eef8ff] px-6 py-14 text-center shadow-[0_20px_70px_rgba(120,90,130,0.10)] sm:px-12 sm:py-20">
          <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-[#ffd9e8]/60 blur-2xl" />
          <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-[#dcd5ff]/60 blur-3xl" />
          <div className="relative">
            <Cloud
              size={28}
              strokeWidth={1.5}
              className="mx-auto mb-7 text-[#8f7898]"
            />
            <p className="text-[11px] uppercase tracking-[0.42em] text-[#9a829b]">
              a little archive
            </p>
            <h2 className="mt-5 font-serif-display text-6xl font-medium tracking-[0.04em] text-[#302735] sm:text-7xl">
              HANEULZ
            </h2>
            <div className="mx-auto mt-7 h-px w-16 bg-[#c7a9bd]" />
            <p className="mx-auto mt-7 max-w-xl font-serif-display text-lg italic leading-8 tracking-[0.02em] text-[#746576]">
              the story of two voices that found each other
            </p>
          </div>
        </header>
        {/* HERO IMAGE */}
        <StoryImage
          label="HANEULZ"
          className="mt-8"
        />
        {/* STORY */}
        <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
          {/* HANEULZ */}
          <StorySection
            title="HANEULZ"
            icon={<Cloud size={20} strokeWidth={1.5} />}
          >
            <p>
              HANEULZ is a name that came from Han and Jaeyel, the pronunciation
              of JL's name, and it also happens to sound like <i>haneul</i> (하늘),
              which means sky in Korean. I honestly think it fits them so well
              because it started from just their names, but somehow it became
              this little name that holds so many memories from Universe League
              until now.
            </p>
          </StorySection>
          {/* WHERE IT ALL STARTED */}
          <StorySection
            title="Where It All Started"
            icon={<Sparkles size={20} strokeWidth={1.5} />}
          >
            <p>
              Before HANEULZ was even a thing, Han and JL were just two trainees
              trying to make it through Universe League. They didn't start out
              as some inseparable pair or anything like that. They had their own
              stages, their own teams, and their own moments, and that's actually
              what makes their story so fun to look back on.
            </p>
            <p>
              JL first showed up with “One and Only” by BOYNEXTDOOR and immediately
              had that kind of stage presence where you just end up watching him.
              His vocals were stable, his dancing was eye-catching, and of course
              that smile was there too. During one of the drafting episodes, he
              became known as the “three pick” because three mentors chose him.
              Like… three. ㅋㅋㅋㅋ It really showed how much of an impression he
              was already making.
            </p>
          </StorySection>
          {/* HAN IMAGE */}
          <StoryImage label="HAN • SIREN" />
          {/* HAN PARAGRAPH — NO EXTRA HAN HEADER */}
          <StoryText>
            <p>
              Then came Han with “Siren.” His whole vibe was completely different.
              He had that mysterious aura when he walked onto the stage, and then
              once he started singing, you could really hear how strong his voice
              was. His dancing was sharp and detailed too, and he didn't hold
              himself back during the performance. It was one of those stages
              where you could immediately understand why people were paying
              attention to him.
            </p>
          </StoryText>
          {/* FIRST IMPRESSION */}
          <StorySection title="The First Impression">
            <p>
              And then there's the funniest part because one of Han's first
              impressions of JL wasn't some dramatic first meeting. JL literally
              entered the wrong practice room. ㅋㅋㅋㅋ He opened the door to the
              Siren practice room looking completely confused and went,
              “Eugh? This isn't One and Only team?” before realizing he was in the
              wrong room and leaving. Han remembered how funny his expression was,
              and honestly, that is such a HANEULZ way for their story to start.
            </p>
          </StorySection>
          {/* LITTLE PRINCE */}
          <StoryImage label="THE LITTLE PRINCE" />
          <StorySection
            title="The Little Prince"
            icon={<Heart size={20} strokeWidth={1.5} />}
          >
            <p>
              Then December 27, 2024 happened. The Little Prince. After seeing Han
              and JL doing their own thing throughout the competition, they finally
              got to sing together. And honestly, what else am I supposed to say
              except… their voices sounded so good together.
            </p>
            <p>
              Han's voice and JL's voice have their own colors, but they didn't
              fight each other. They actually fit together really naturally.
              Their harmonies made the whole performance feel so much fuller, and
              it was one of those stages where you could just sit there and listen
              without thinking about anything else.
            </p>
            <p>
              Even the trainees watching them reacted to it, with some of them
              saying they got goosebumps. And I completely understand why because
              hearing those two voices together for the first time was just…
              yeah. HANEULZ.
            </p>
            <p>
              That performance became such an important part of their story because
              it was one of the first times we really got to see what happens when
              Han and JL share the same stage instead of watching them separately.
            </p>
          </StorySection>
          {/* DEBUT */}
          <StorySection title="And Then They Debuted Together">
            <p>
              After everything that happened during Universe League, Han and JL
              eventually debuted together as members of AHOF on July 1, 2025.
              And honestly, this is probably one of my favorite parts of their
              whole story because after watching them go through the competition,
              seeing them actually end up in the same group felt so satisfying.
              Like finally??? They are actually going to be on the same stages now???
            </p>
            <p>
              Together with Steven, Jeongwoo, Woongki, Shuaibo, Chih En, Juwon,
              and Daisuke, they started this new chapter with AHOF's debut album
              <i>Who We Are</i> and the title track “그곳에서 다시 만나기로 해
              (Rendezvous).”
            </p>
            <p>
              And of course, HANEULZ didn't just disappear after debut. If
              anything, we started getting even more little moments.
            </p>
          </StorySection>
          {/* LITTLE THINGS */}
          <StorySection title="The Little Things">
            <p>
              One of the things that always makes me smile is how often Han and
              JL end up singing together. Han has talked about how JL is good at
              harmonizing and how beautiful his high notes are, and there have been
              so many moments where the two of them just casually start singing
              together like it's the most normal thing in the world.
            </p>
            <p>
              Han even joked about how the practice room is basically never quiet
              because he and JL are always singing. And honestly, I can believe it.
              ㅋㅋㅋㅋ
            </p>
            <p>
              There are also all those random little moments that don't necessarily
              look important on their own but somehow become the things you remember.
              JL giving Han jelly. Han eating it. Them sharing food. The random
              photos. Han leaning on JL because he was tired and JL suddenly taking
              a picture. Their random duets. Calling each other by their nicknames.
              Those little “Hani hyung~” moments. The way they can turn literally
              nothing into a whole interaction.
            </p>
            <p>
              There was even the mafia game moment where Han talked about JL always
              saving him when he was about to die and how he thought it was better
              doing it with JL because JL was good at harmonizing and his high
              notes were beautiful.
            </p>
          </StorySection>
          {/* LITTLE THINGS IMAGE — DIRECTLY AFTER HEADER/SECTION */}
          <StoryImage label="HANEULZ • LITTLE MOMENTS" />
          {/* QUOTE */}
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#fff7fa] to-[#f3efff] px-7 py-12 text-center shadow-[0_18px_60px_rgba(130,100,140,0.09)] sm:px-14 sm:py-14">
            <div className="absolute left-5 top-5 text-3xl font-serif-display text-[#d8b7ca]">
              “
            </div>
            <blockquote className="font-serif-display text-2xl leading-relaxed tracking-[0.02em] text-[#403542] sm:text-3xl">
              “Haneulz is JL and me, right?”
            </blockquote>
            <p className="mt-5 text-xs uppercase tracking-[0.28em] text-[#917b91]">
              — Han
            </p>
          </div>
          <StoryText>
            <p>
              YES. THAT. Because at that point HANEULZ wasn't just something fans
              were calling them. They knew the name too.
            </p>
            <p>
              There are so many little things like this that I could honestly keep
              going forever. Sometimes they're singing, sometimes they're joking
              around, sometimes they're just sitting together, and sometimes it's
              literally just one sentence that somehow ends up being memorable.
            </p>
            <p>
              That's what I like about HANEULZ. It's not only the big performances.
              It's all these tiny moments in between.
            </p>
          </StoryText>
          {/* HANSUM */}
          <StorySection title="Hansum">
            <p>
              And then there's Hansum. Hansum comes from Han's fandom name,
              Park Ha-dan, and JL's nickname, DimSUM. It also connects to the
              Korean word 한숨, which means a sigh or a deep breath.
            </p>
            <p>
              I actually really like that meaning because this whole little corner
              is kind of like that too. A place where you can just breathe for a
              second, look back at the memories, replay the performances, save the
              funny moments, and just enjoy being here.
            </p>
          </StorySection>
          {/* FINAL IMAGE */}
          <StoryImage label="HANEULZ" />
          {/* WHY HANEULZ */}
          <StorySection title="Why HANEULZ">
            <p>
              I don't think HANEULZ can really be summed up by one performance or
              one funny interaction. It started with two trainees who didn't even
              know that they were going to end up together. One accidentally walked
              into the wrong practice room. They eventually sang The Little Prince
              together. Then somehow, after everything, they debuted in the same group.
            </p>
            <p>
              And now there are all these little memories in between. The singing.
              The harmonies. The jokes. The food. The random photos. The lives.
              The practice room chaos. The “Hani hyung” moments. The “Jeyelie”
              moments. The times they randomly start singing together. All of those
              tiny things that probably felt ordinary when they happened but became
              memories that people kept coming back to.
            </p>
            <p>
              That's what this corner is for. Not to make their story sound bigger
              or more dramatic than it is, but just to keep the moments that made
              HANEULZ feel like HANEULZ in one place.
            </p>
            <p>
              And honestly, I'm just really happy that after everything, Han and JL
              got to debut together and keep making these memories.
            </p>
            <p className="font-serif-display text-xl italic text-[#675467]">
              So… welcome to the little HANEULZ corner. ♡
            </p>
          </StorySection>
        </div>
      </article>
    </Reveal>
  );
}
/* -------------------------------------------------------
   IMAGE PLACEHOLDER
   Admin can replace the image later.
------------------------------------------------------- */
function StoryImage({ label, className = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#f8e8f0] via-[#f3eef9] to-[#e9f3f7] shadow-[0_15px_45px_rgba(110,85,120,0.10)] ${className}`}
    >
      <div className="absolute inset-0 opacity-50">
        <div className="absolute left-[12%] top-[20%] h-20 w-20 rounded-full bg-[#ffd8e8] blur-2xl" />
        <div className="absolute bottom-[15%] right-[15%] h-24 w-24 rounded-full bg-[#dcd4ff] blur-2xl" />
      </div>
      <div className="relative flex min-h-[240px] items-center justify-center px-6 py-16 sm:min-h-[300px]">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.38em] text-[#8f7891]">
            {label}
          </p>
          <div className="mx-auto mt-5 h-px w-10 bg-[#bfa4b8]" />
          <p className="mt-5 font-serif-display text-lg italic tracking-[0.04em] text-[#766477]">
            admin image goes here
          </p>
        </div>
      </div>
    </div>
  );
}
/* -------------------------------------------------------
   SECTION WITH HEADING
------------------------------------------------------- */
function StorySection({ title, icon, children }) {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/55 px-6 py-8 shadow-[0_12px_40px_rgba(100,80,110,0.05)] backdrop-blur-sm sm:px-9 sm:py-9">
      <div className="flex items-center justify-center gap-3 text-center">
        {icon && (
          <span className="text-[#967e95]">
            {icon}
          </span>
        )}
        <h3 className="font-serif-display text-3xl tracking-[0.035em] text-[#403441] sm:text-4xl">
          {title}
        </h3>
      </div>
      <div className="mx-auto mt-5 h-px w-10 bg-[#cdb5c6]" />
      <div className="mx-auto mt-6 max-w-3xl space-y-5 text-[16px] leading-8 tracking-[0.012em] text-[#756878] sm:text-[17px] sm:leading-[1.85]">
        {children}
      </div>
    </section>
  );
}
/* -------------------------------------------------------
   PLAIN STORY TEXT
------------------------------------------------------- */
function StoryText({ children }) {
  return (
    <div className="mx-auto max-w-3xl space-y-5 px-3 text-[16px] leading-8 tracking-[0.012em] text-[#756878] sm:text-[17px] sm:leading-[1.85]">
      {children}
    </div>
  );
}
