import { Reveal } from "./Reveal";
import {
  Cloud,
  Sparkles,
  Heart,
  Camera,
} from "lucide-react";

export default function HaneulzStory() {
  return (
    <Reveal>
      <article className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-[#fff4fa] via-[#f5f0ff] to-[#eef8ff] px-5 py-10 shadow-[0_20px_70px_rgba(120,80,130,0.15)] sm:px-8 sm:py-12 md:px-12 md:py-14">

        {/* DECORATIVE BACKGROUND BLOBS */}
        <div className="pointer-events-none absolute -left-16 top-24 h-40 w-40 rounded-full bg-[#ffcce6]/40 blur-3xl" />

        <div className="pointer-events-none absolute -right-16 top-80 h-48 w-48 rounded-full bg-[#cfc5ff]/40 blur-3xl" />

        <div className="pointer-events-none absolute bottom-40 -left-20 h-48 w-48 rounded-full bg-[#bfefff]/40 blur-3xl" />

        <div className="pointer-events-none absolute bottom-10 -right-16 h-40 w-40 rounded-full bg-[#ffd5e9]/40 blur-3xl" />


        {/* FLOATING DECOR */}
        <div className="pointer-events-none absolute left-5 top-10 rotate-[-12deg] text-[#d28ab4]/60">
          <Cloud size={42} strokeWidth={1.3} />
        </div>

        <div className="pointer-events-none absolute right-7 top-24 rotate-[10deg] text-[#a997e8]/70">
          <Sparkles size={34} strokeWidth={1.3} />
        </div>

        <div className="pointer-events-none absolute bottom-72 left-5 rotate-[8deg] text-[#df91b3]/50">
          <Heart size={35} strokeWidth={1.3} />
        </div>


        {/* TITLE */}
        <header className="relative text-center">

          <div className="mb-4 flex justify-center gap-3 text-[#b875a2]">
            <Cloud size={20} />
            <Sparkles size={17} />
            <Heart size={18} />
          </div>

          <h2 className="font-serif-display text-6xl font-medium tracking-tight text-[#4b3548] sm:text-7xl md:text-8xl">
            HANEULZ
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#8b6f86] sm:text-base">
            the story of two voices that found each other
          </p>

        </header>


        {/* MAIN IMAGE */}
        <AdminImage
          label="HANEULZ"
          className="mt-9 h-[230px] sm:h-[300px] md:h-[350px]"
        />


        {/* STORY */}
        <div className="relative mt-10 space-y-10 sm:mt-12 sm:space-y-12">


          {/* INTRO */}
          <StoryText>
            HANEULZ is a name that came from Han and Jaeyel, the pronunciation
            of JL’s name, and it also happens to sound like haneul (하늘), which
            means sky in Korean. I honestly think it fits them so well because
            it started from just their names, but somehow it became this little
            name that holds so many memories from Universe League until now.
          </StoryText>


          {/* WHERE IT ALL STARTED */}
          <StorySection
            title="WHERE IT ALL STARTED"
            icon={<Sparkles size={19} />}
          >
            Before HANEULZ was even a thing, Han and JL were just two trainees
            trying to make it through Universe League. They didn’t start out
            as some inseparable pair or anything like that. They had their own
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


          {/* JL IMAGE */}
          <AdminImage
            label="JL"
            className="h-[210px] sm:h-[280px] md:h-[320px]"
          />


          {/* HAN */}
          <StoryText>
            Then came Han with “Siren.” His whole vibe was completely
            different. He had that mysterious aura when he walked onto the
            stage, and then once he started singing, you could really hear
            how strong his voice was. His dancing was sharp and detailed too,
            and he didn’t hold himself back during the performance. It was one
            of those stages where you could immediately understand why people
            were paying attention to him.
          </StoryText>


          {/* FIRST IMPRESSION */}
          <StorySection title="THE FIRST IMPRESSION">
            And then there’s the funniest part because one of Han’s first
            impressions of JL wasn’t some dramatic first meeting. JL literally
            entered the wrong practice room. ㅋㅋㅋㅋ He opened the door to the
            Siren practice room looking completely confused and went, “Eugh?
            This isn’t One and Only team?” before realizing he was in the wrong
            room and leaving. Han remembered how funny his expression was, and
            honestly, that is such a HANEULZ way for their story to start.
          </StorySection>


          {/* LITTLE PRINCE */}
          <StorySection
            title="THE LITTLE PRINCE"
            icon={<Heart size={19} />}
          >
            Then December 27, 2024 happened. The Little Prince. After seeing
            Han and JL doing their own thing throughout the competition, they
            finally got to sing together. And honestly, what else am I supposed
            to say except… their voices sounded so good together. Han’s voice
            and JL’s voice have their own colors, but they didn’t fight each
            other. They actually fit together really naturally. Their
            harmonies made the whole performance feel so much fuller, and it
            was one of those stages where you could just sit there and listen
            without thinking about anything else. Even the trainees watching
            them reacted to it, with some of them saying they got goosebumps.
            And I completely understand why because hearing those two voices
            together for the first time was just… yeah. HANEULZ. That
            performance became such an important part of their story because
            it was one of the first times we really got to see what happens
            when Han and JL share the same stage instead of watching them
            separately.
          </StorySection>


          {/* LITTLE PRINCE IMAGE */}
          <AdminImage
            label="THE LITTLE PRINCE"
            className="h-[210px] sm:h-[280px] md:h-[320px]"
          />


          {/* DEBUT */}
          <StorySection title="AND THEN THEY DEBUTED TOGETHER">
            After everything that happened during Universe League, Han and JL
            eventually debuted together as members of AHOF on July 1, 2025.
            And honestly, this is probably one of my favorite parts of their
            whole story because after watching them go through the competition,
            seeing them actually end up in the same group felt so satisfying.
            Like finally??? They are actually going to be on the same stages
            now??? Together with Steven, Jeongwoo, Woongki, Shuaibo, Chih En,
            Juwon, and Daisuke, they started this new chapter with AHOF’s debut
            album Who We Are and the title track “그곳에서 다시 만나기로 해
            (Rendezvous).” And of course, HANEULZ didn’t just disappear after
            debut. If anything, we started getting even more little moments.
          </StorySection>


          {/* DEBUT IMAGE */}
          <AdminImage
            label="AHOF DEBUT"
            className="h-[210px] sm:h-[280px] md:h-[320px]"
          />


          {/* LITTLE THINGS */}
          <StorySection title="THE LITTLE THINGS">
            One of the things that always makes me smile is how often Han and
            JL end up singing together. Han has talked about how JL is good at
            harmonizing and how beautiful his high notes are, and there have
            been so many moments where the two of them just casually start
            singing together like it’s the most normal thing in the world. Han
            even joked about how the practice room is basically never quiet
            because he and JL are always singing. And honestly, I can believe
            it. ㅋㅋㅋㅋ There are also all those random little moments that
            don’t necessarily look important on their own but somehow become
            the things you remember. JL giving Han jelly, them sharing food,
            the random photos, Han lying on JL because he was tired and JL
            suddenly taking a picture, their random duets, calling each other
            by their nicknames, and those little “Hani hyung~” moments. The
            way they can turn literally nothing into a whole interaction is so
            HANEULZ.
          </StorySection>


          {/* MOMENTS IMAGE */}
          <AdminImage
            label="HANEULZ MOMENTS"
            className="h-[210px] sm:h-[280px] md:h-[320px]"
          />


          {/* HIGHLIGHTED QUOTE */}
          <div className="relative mx-auto max-w-2xl rounded-[2rem] border border-[#f0c5dc] bg-gradient-to-r from-[#fff0f7] via-[#f4efff] to-[#edf8ff] px-6 py-8 text-center shadow-[0_12px_35px_rgba(180,130,170,0.10)]">

            <Cloud
              className="mx-auto mb-4 text-[#b875a2]"
              size={23}
            />

            <p className="font-serif-display text-2xl leading-relaxed text-[#513c4d] sm:text-3xl md:text-4xl">
              “Haneulz is JL and me, right?”
            </p>

            <div className="mt-5 flex justify-center gap-2 text-[#c283aa]">
              <Sparkles size={13} />
              <Heart size={14} />
              <Sparkles size={13} />
            </div>

          </div>


          {/* AFTER QUOTE */}
          <StoryText>
            Because at that point HANEULZ wasn’t just something fans were
            calling them. They knew the name too. There are so many little
            things like this that I could honestly keep going forever.
            Sometimes they’re singing, sometimes they’re joking around,
            sometimes they’re just sitting together, and sometimes it’s
            literally just one sentence that somehow ends up being memorable.
            That’s what I like about HANEULZ. It’s not only the big
            performances. It’s all these tiny moments in between.
          </StoryText>


          {/* HANSUM */}
          <StorySection title="HANSUM">
            And then there’s Hansum. Hansum comes from Han’s fandom name, Park
            Ha-dan, and JL’s nickname, DimSUM. It also connects to the Korean
            word 한숨, which means a sigh or a deep breath. I actually really
            like that meaning because this whole little corner is kind of like
            that too. A place where you can just breathe for a second, look
            back at the memories, replay the performances, save the funny
            moments, and just enjoy being here.
          </StorySection>


          {/* HANSUM IMAGE */}
          <AdminImage
            label="HANSUM"
            className="h-[190px] sm:h-[250px] md:h-[290px]"
          />


          {/* WHY HANEULZ */}
          <StorySection title="WHY HANEULZ">
            I don’t think HANEULZ can really be summed up by one performance
            or one funny interaction. It started with two trainees who didn’t
            even know that they were going to end up together. One accidentally
            walked into the wrong practice room, they eventually sang The
            Little Prince together, and then somehow, after everything, they
            debuted in the same group. And now there are all these little
            memories in between. The singing, the harmonies, the jokes, the
            food, the random photos, the lives, the practice room chaos, the
            “Hani hyung” moments, the “Jeyelie” moments, and the times they
            randomly start singing together. All of those tiny things probably
            felt ordinary when they happened but became memories that people
            kept coming back to. That’s what this corner is for. Not to make
            their story sound bigger or more dramatic than it is, but just to
            keep the moments that made HANEULZ feel like HANEULZ in one place.
            And honestly, I’m just really happy that after everything, Han and
            JL got to debut together and keep making these memories. So…
            welcome to the little HANEULZ corner. ♡
          </StorySection>


          {/* SMALL FINISH */}
          <div className="flex justify-center gap-3 pt-1 text-[#bd83a9]">
            <Cloud size={16} />
            <Heart size={17} />
            <Sparkles size={15} />
          </div>

        </div>
      </article>
    </Reveal>
  );
}


function StoryText({ children }) {
  return (
    <p className="mx-auto max-w-3xl text-[15px] leading-8 text-[#766275] sm:text-base">
      {children}
    </p>
  );
}


function StorySection({ title, icon, children }) {
  return (
    <section>
      <div className="flex items-center justify-center gap-2.5 text-center">
        {icon && (
          <span className="text-[#b875a2]">
            {icon}
          </span>
        )}

        <h3 className="font-serif-display text-3xl font-medium tracking-tight text-[#4b3548] sm:text-4xl md:text-5xl">
          {title}
        </h3>
      </div>

      <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#766275] sm:mt-6 sm:text-base">
        {children}
      </p>
    </section>
  );
}


function AdminImage({ label, className = "" }) {
  return (
    <div
      className={`group relative mx-auto w-full overflow-hidden rounded-[1.8rem] border-[8px] border-white bg-[#f0e5ed] shadow-[0_14px_38px_rgba(100,65,95,0.12)] ${className}`}
    >

      {/* SCRAPBOOK TAPE */}
      <div className="absolute left-1/2 top-[-5px] z-10 h-7 w-24 -translate-x-1/2 rotate-[-2deg] bg-[#f0d4df]/90 shadow-sm" />

      <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.95),transparent_30%),linear-gradient(135deg,#ffeaf4,#eee8ff_55%,#e5f7ff)] px-6 text-center">

        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-[#b875a2] shadow-sm">
          <Camera size={21} strokeWidth={1.4} />
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b7f91]">
          Admin Image
        </p>

        <p className="mt-2 font-serif-display text-xl text-[#624b5d]">
          {label}
        </p>

        <p className="mt-1 text-xs text-[#a28d9e]">
          Image can be added or edited by admin
        </p>

      </div>
    </div>
  );
}
