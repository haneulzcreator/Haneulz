import { Reveal } from "./Reveal";
import { Cloud, Sparkles, Heart } from "lucide-react";
export default function HaneulzStory() {
  return (
    <Reveal>
      <article className="mx-auto w-full max-w-4xl px-5 pb-20">
        {/* TOP */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50 px-6 py-14 text-center shadow-sm">
          <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-pink-200/50 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-purple-200/50 blur-2xl" />
          <div className="relative">
            <Cloud
              size={27}
              strokeWidth={1.5}
              className="mx-auto mb-6 text-purple-400"
            />
            <p className="text-[10px] uppercase tracking-[0.5em] text-purple-400">
              a little archive
            </p>
            <h2
              className="mt-4 text-6xl font-semibold tracking-[0.12em] text-gray-800 md:text-7xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              HANEULZ
            </h2>
            <div className="mx-auto mt-6 h-px w-12 bg-purple-300" />
            <p
              className="mx-auto mt-6 max-w-lg text-lg italic leading-8 tracking-wide text-gray-500"
              style={{ fontFamily: "Georgia, serif" }}
            >
              the story of two voices that found each other
            </p>
          </div>
        </div>
        {/* HERO IMAGE */}
        <ImagePlaceholder label="HANEULZ" className="mt-7" />
        <div className="mt-9 space-y-8">
          {/* HANEULZ */}
          <StorySection
            title="HANEULZ"
            icon={<Cloud size={19} strokeWidth={1.5} />}
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
            icon={<Sparkles size={19} strokeWidth={1.5} />}
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
          <ImagePlaceholder label="HAN • SIREN" />
          {/* HAN PARAGRAPH */}
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
          <ImagePlaceholder label="THE LITTLE PRINCE" />
          <StorySection
            title="The Little Prince"
            icon={<Heart size={19} strokeWidth={1.5} />}
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
          {/* LITTLE THINGS HEADER */}
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
          {/* LITTLE THINGS IMAGE */}
          <ImagePlaceholder label="HANEULZ • LITTLE MOMENTS" />
          {/* QUOTE */}
          <div className="rounded-[2rem] bg-gradient-to-r from-pink-50 to-purple-50 px-7 py-10 text-center shadow-sm">
            <p
              className="text-2xl leading-relaxed tracking-wide text-gray-700 md:text-3xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              “Haneulz is JL and me, right?”
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-purple-400">
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
          <ImagePlaceholder label="HANEULZ" />
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
            <p
              className="text-center text-lg italic tracking-wide text-purple-500"
              style={{ fontFamily: "Georgia, serif" }}
            >
              So… welcome to the little HANEULZ corner. ♡
            </p>
          </StorySection>
        </div>
      </article>
    </Reveal>
  );
}
/* IMAGE PLACEHOLDER */
function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50 shadow-sm ${className}`}
    >
      <div className="flex min-h-[250px] items-center justify-center p-8">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.45em] text-purple-400">
            {label}
          </p>
          <div className="mx-auto mt-4 h-px w-10 bg-purple-300" />
          <p
            className="mt-4 text-sm italic tracking-wide text-gray-400"
            style={{ fontFamily: "Georgia, serif" }}
          >
            admin image goes here
          </p>
        </div>
      </div>
    </div>
  );
}
/* SECTION */
function StorySection({ title, icon, children }) {
  return (
    <section className="rounded-[2rem] bg-white/60 px-6 py-8 shadow-sm backdrop-blur-sm sm:px-8">
      <div className="flex items-center justify-center gap-3 text-center">
        {icon && (
          <span className="text-purple-400">
            {icon}
          </span>
        )}
        <h3
          className="text-3xl tracking-[0.06em] text-gray-800 sm:text-4xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </h3>
      </div>
      <div className="mx-auto mt-4 h-px w-9 bg-pink-300" />
      <div className="mx-auto mt-6 max-w-3xl space-y-5 text-[16px] leading-8 tracking-[0.018em] text-gray-600 sm:text-[17px]">
        {children}
      </div>
    </section>
  );
}
/* NORMAL TEXT */
function StoryText({ children }) {
  return (
    <div className="mx-auto max-w-3xl space-y-5 px-3 text-[16px] leading-8 tracking-[0.018em] text-gray-600 sm:text-[17px]">
      {children}
    </div>
  );
}
