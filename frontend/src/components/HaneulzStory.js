import { Cloud, Sparkles, Heart, Star } from "lucide-react";

export default function HaneulzStory() {
  return (
    <article className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-[#fff9fc] px-5 py-10 shadow-[0_20px_80px_rgba(80,40,70,0.08)] sm:px-8 md:px-12 md:py-14">

      {/* soft decorative background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#f4e8f3] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#e9f3f4] opacity-70 blur-3xl" />

      <div className="relative">

        {/* TITLE */}
        <header className="text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3 text-[#8d7187]">
            <span className="h-px w-10 bg-[#d9c5d5]" />
            <Cloud size={24} strokeWidth={1.5} />
            <span className="h-px w-10 bg-[#d9c5d5]" />
          </div>

          <h2 className="font-serif-display text-5xl font-medium tracking-tight text-[#29222a] sm:text-6xl md:text-7xl">
            HANEULZ
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#8a7b87] sm:text-lg">
            the story of two voices that found each other
          </p>
        </header>


        {/* HERO IMAGE — ADMIN EDITABLE */}
        <AdminImage
          label="HANEULZ"
          className="mt-10 h-[250px] sm:h-[340px] md:h-[390px]"
        />


        {/* STORY */}
        <div className="mt-12 space-y-12 md:mt-14 md:space-y-14">

          {/* INTRO */}
          <StorySection
            title="HANEULZ"
            icon={<Cloud size={20} strokeWidth={1.5} />}
          >
            HANEULZ is a name that came from Han and Jaeyel, the pronunciation
            of JL’s name, and it also happens to sound like haneul (하늘), which
            means sky in Korean. I honestly think it fits them so well because
            it started from just their names, but somehow it became this little
            name that holds so many memories from Universe League until now.

          </StorySection>


          {/* WHERE IT ALL STARTED */}
          <StorySection
            title="WHERE IT ALL STARTED"
            icon={<Sparkles size={20} strokeWidth={1.5} />}
          >
            Before HANEULZ was even a thing, Han and JL were just two trainees
            trying to make it through Universe League. They didn’t start out as
            some inseparable pair or anything like that. They had their own
            stages, their own teams, and their own moments, and that’s actually
            what makes their story so fun to look back on.

            <br /><br />

            JL first showed up with “One and Only” by BOYNEXTDOOR and immediately
            had that kind of stage presence where you just end up watching him.
            His vocals were stable, his dancing was eye-catching, and of course
            that smile was there too. During one of the drafting episodes, he
            became known as the “three pick” because three mentors chose him.
            Like… three. ㅋㅋㅋㅋ It really showed how much of an impression he
            was already making.
          </StorySection>


          {/* JL IMAGE — ADMIN EDITABLE */}
          <AdminImage
            label="JL"
            className="h-[230px] sm:h-[300px] md:h-[340px]"
          />


          {/* HAN PARAGRAPH — NO EXTRA HAN HEADING */}
          <StoryText>
            Then came Han with “Siren.” His whole vibe was completely different.
            He had that mysterious aura when he walked onto the stage, and then
            once he started singing, you could really hear how strong his voice
            was. His dancing was sharp and detailed too, and he didn’t hold
            himself back during the performance. It was one of those stages where
            you could immediately understand why people were paying attention to
            him.
          </StoryText>


          {/* FIRST IMPRESSION */}
          <StorySection title="THE FIRST IMPRESSION">
            And then there’s the funniest part because one of Han’s first
            impressions of JL wasn’t some dramatic first meeting.

            <br /><br />

            JL literally entered the wrong practice room. ㅋㅋㅋㅋ

            <br /><br />

            He opened the door to the Siren practice room looking completely
            confused and went, “Eugh? This isn’t One and Only team?” before
            realizing he was in the wrong room and leaving. Han remembered how
            funny his expression was, and honestly, that is such a HANEULZ way
            for their story to start.
          </StorySection>


          {/* IMAGE */}
          <AdminImage
            label="First Impression"
            className="h-[230px] sm:h-[300px] md:h-[340px]"
          />


          {/* LITTLE PRINCE */}
          <StorySection
            title="THE LITTLE PRINCE"
            icon={<Heart size={20} strokeWidth={1.5} />}
          >
            Then December 27, 2024 happened.

            <br /><br />

            The Little Prince.

            <br /><br />

            After seeing Han and JL doing their own thing throughout the
            competition, they finally got to sing together. And honestly, what
            else am I supposed to say except… their voices sounded so good
            together.

            <br /><br />

            Han’s voice and JL’s voice have their own colors, but they didn’t
            fight each other. They actually fit together really naturally. Their
            harmonies made the whole performance feel so much fuller, and it was
            one of those stages where you could just sit there and listen without
            thinking about anything else.

            <br /><br />

            Even the trainees watching them reacted to it, with some of them
            saying they got goosebumps. And I completely understand why because
            hearing those two voices together for the first time was just… yeah.
            HANEULZ.

            <br /><br />

            That performance became such an important part of their story because
            it was one of the first times we really got to see what happens when
            Han and JL share the same stage instead of watching them separately.
          </StorySection>


          {/* IMAGE */}
          <AdminImage
            label="The Little Prince"
            className="h-[230px] sm:h-[300px] md:h-[340px]"
          />


          {/* DEBUT */}
          <StorySection title="AND THEN THEY DEBUTED TOGETHER">
            After everything that happened during Universe League, Han and JL
            eventually debuted together as members of AHOF on July 1, 2025.

            <br /><br />

            And honestly, this is probably one of my favorite parts of their
            whole story because after watching them go through the competition,
            seeing them actually end up in the same group felt so satisfying.
            Like finally??? They are actually going to be on the same stages
            now???

            <br /><br />

            Together with Steven, Jeongwoo, Woongki, Shuaibo, Chih En, Juwon,
            and Daisuke, they started this new chapter with AHOF’s debut album
            Who We Are and the title track “그곳에서 다시 만나기로 해
            (Rendezvous).”

            <br /><br />

            And of course, HANEULZ didn’t just disappear after debut.

            <br /><br />

            If anything, we started getting even more little moments.
          </StorySection>


          {/* IMAGE */}
          <AdminImage
            label="AHOF Debut"
            className="h-[230px] sm:h-[300px] md:h-[340px]"
          />


          {/* LITTLE THINGS */}
          <StorySection title="THE LITTLE THINGS">
            One of the things that always makes me smile is how often Han and
            JL end up singing together. Han has talked about how JL is good at
            harmonizing and how beautiful his high notes are, and there have
            been so many moments where the two of them just casually start
            singing together like it’s the most normal thing in the world.

            <br /><br />

            Han even joked about how the practice room is basically never quiet
            because he and JL are always singing. And honestly, I can believe
            it. ㅋㅋㅋㅋ

            <br /><br />

            There are also all those random little moments that don’t necessarily
            look important on their own but somehow become the things you
            remember.

            <br /><br />

            JL giving Han jelly. Han eating it. Them sharing food. The random
            photos. Han lying on JL because he was tired and JL suddenly taking
            a picture. Their random duets. Calling each other by their nicknames.
            Those little “Hani hyung~” moments. The way they can turn literally
            nothing into a whole interaction.

            <br /><br />

            There was even the mafia game moment where Han talked about JL always
            saving him when he was about to die and how he thought it was better
            doing it with JL because JL was good at harmonizing and his high notes
            were beautiful.

            <br /><br />

            And then there was that moment when Han basically went,

            <br /><br />

            “Haneulz is JL and me, right?”

            <br /><br />

            YES. THAT.

            <br /><br />

            Because at that point HANEULZ wasn’t just something fans were calling
            them. They knew the name too.

            <br /><br />

            There are so many little things like this that I could honestly keep
            going forever. Sometimes they’re singing, sometimes they’re joking
            around, sometimes they’re just sitting together, and sometimes it’s
            literally just one sentence that somehow ends up being memorable.

            <br /><br />

            That’s what I like about HANEULZ. It’s not only the big performances.
            It’s all these tiny moments in between.
          </StorySection>


          {/* IMAGE */}
          <AdminImage
            label="HANEULZ Moments"
            className="h-[230px] sm:h-[300px] md:h-[340px]"
          />


          {/* HANSUM */}
          <StorySection title="HANSUM">
            And then there’s Hansum.

            <br /><br />

            Hansum comes from Han’s fandom name, Park Ha-dan, and JL’s nickname,
            DimSUM. It also connects to the Korean word 한숨, which means a sigh
            or a deep breath.

            <br /><br />

            I actually really like that meaning because this whole little corner
            is kind of like that too. A place where you can just breathe for a
            second, look back at the memories, replay the performances, save the
            funny moments, and just enjoy being here.
          </StorySection>


          {/* WHY HANEULZ */}
          <StorySection
            title="WHY HANEULZ"
            icon={<Star size={20} strokeWidth={1.5} />}
          >
            I don’t think HANEULZ can really be summed up by one performance or
            one funny interaction.

            <br /><br />

            It started with two trainees who didn’t even know that they were going
            to end up together. One accidentally walked into the wrong practice
            room. They eventually sang The Little Prince together. Then somehow,
            after everything, they debuted in the same group.

            <br /><br />

            And now there are all these little memories in between.

            <br /><br />

            The singing. The harmonies. The jokes. The food. The random photos.
            The lives. The practice room chaos. The “Hani hyung” moments. The
            “Jeyelie” moments. The times they randomly start singing together.
            All of those tiny things that probably felt ordinary when they
            happened but became memories that people kept coming back to.

            <br /><br />

            That’s what this corner is for.

            <br /><br />

            Not to make their story sound bigger or more dramatic than it is,
            but just to keep the moments that made HANEULZ feel like HANEULZ in
            one place.

            <br /><br />

            And honestly, I’m just really happy that after everything, Han and JL
            got to debut together and keep making these memories.

            <br /><br />

            So… welcome to the little HANEULZ corner. ♡
          </StorySection>


          {/* FINAL IMAGE */}
          <AdminImage
            label="HANEULZ"
            className="mt-2 h-[250px] sm:h-[320px] md:h-[360px]"
          />

        </div>
      </div>
    </article>
  );
}


/* -----------------------------
   STORY SECTION
----------------------------- */

function StorySection({ title, icon, children }) {
  return (
    <section className="text-center">

      <div className="flex items-center justify-center gap-2.5 text-[#725b70]">
        {icon}

        <h3 className="font-serif-display text-3xl font-medium tracking-tight sm:text-4xl md:text-[2.7rem]">
          {title}
        </h3>
      </div>

      <StoryText>
        {children}
      </StoryText>

    </section>
  );
}


/* -----------------------------
   PARAGRAPH
----------------------------- */

function StoryText({ children }) {
  return (
    <p className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-8 text-[#716570] sm:text-base sm:leading-8 md:text-[17px] md:leading-9">
      {children}
    </p>
  );
}


/* -----------------------------
   ADMIN IMAGE PLACEHOLDER
   Admin can replace the image
   source later.
----------------------------- */

function AdminImage({ label, className = "" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-[#eadde7] bg-gradient-to-br from-[#f5edf4] via-[#fffafa] to-[#edf5f5] shadow-[0_12px_35px_rgba(80,50,75,0.06)] ${className}`}
    >
      {/* decorative shapes */}
      <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[#ead9e8] opacity-50 blur-2xl" />
      <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-[#dcecee] opacity-50 blur-2xl" />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">

        <div className="mb-4 flex items-center gap-3 text-[#aa8fa6]">
          <span className="h-px w-8 bg-[#d8c4d4]" />
          <Cloud size={21} strokeWidth={1.4} />
          <span className="h-px w-8 bg-[#d8c4d4]" />
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-[#9b8997]">
          {label}
        </p>

        <p className="mt-2 text-sm text-[#9b8997]">
          Admin image placeholder
        </p>

      </div>
    </div>
  );
}
