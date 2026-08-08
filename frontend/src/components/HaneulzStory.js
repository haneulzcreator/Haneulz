import { Reveal } from "./Reveal";
import { Cloud, Sparkles, Heart, Star } from "lucide-react";

export default function HaneulzStory() {
  return (
    <Reveal>
      <article className="mx-auto w-full max-w-4xl px-4 pb-24 md:px-6">

        {/* HEADER */}
        <header className="pt-4 text-center">
          <div className="mb-5 flex justify-center gap-3 text-[color:var(--ink-soft)]">
            <span>☁</span>
            <span>✦</span>
            <span>♡</span>
            <span>✦</span>
            <span>☁</span>
          </div>

          <p className="text-[11px] uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            a little story archive
          </p>

          <h2 className="mt-4 font-serif-display text-6xl leading-none md:text-8xl">
            HANEULZ
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[color:var(--ink-soft)] md:text-lg">
            the story of two voices that found each other
          </p>
        </header>


        {/* HERO IMAGE */}
        <AdminImage
          className="mt-10 h-[280px] md:h-[390px]"
          label="HANEULZ"
        />


        {/* INTRO */}
        <StorySection title="HANEULZ" icon={<Cloud size={19} />}>
          HANEULZ is a name that came from Han and Jaeyel, the pronunciation
          of JL's name, and it also happens to sound like haneul (하늘), which
          means sky in Korean. I honestly think it fits them so well because
          it started from just their names, but somehow it became this little
          name that holds so many memories from Universe League until now.
        </StorySection>


        {/* UNIVERSE LEAGUE */}
        <StorySection
          title="WHERE IT ALL STARTED"
          icon={<Sparkles size={19} />}
        >
          Before HANEULZ was even a thing, Han and JL were just two trainees
          trying to make it through Universe League. They didn't start out as
          some inseparable pair or anything like that. They had their own
          stages, their own teams, and their own moments, and that's actually
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


        {/* HAN PHOTO — ADMIN EDITABLE */}
        <div className="my-10">
          <AdminImage
            className="h-[300px] md:h-[400px]"
            label="HAN · SIREN"
          />

          <p className="mt-3 text-center text-[10px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)]">
            Universe League · Siren
          </p>
        </div>


        {/* HAN / SIREN */}
        <StorySection title="THEN CAME HAN">
          Han came in with “Siren,” and his whole vibe was completely
          different. He had that mysterious aura when he walked onto the
          stage, and then once he started singing, you could really hear how
          strong his voice was. His dancing was sharp and detailed too, and
          he didn't hold himself back during the performance. It was one of
          those stages where you could immediately understand why people were
          paying attention to him.
        </StorySection>


        {/* FIRST IMPRESSION */}
        <StorySection title="THE FIRST IMPRESSION">
          One of Han's first impressions of JL was actually a really funny
          one.
          <br /><br />
          JL accidentally came into the Siren practice room. As soon as he
          opened the door, he looked completely bewildered and asked,
          “Eugh? This isn't One and Only team?”
          <br /><br />
          ㅋㅋㅋㅋ
          <br /><br />
          And then he left.
          <br /><br />
          It's such a small moment, but I love that this was one of Han's
          first memories of JL. Nothing dramatic, nothing planned. JL just
          walked into the wrong room and Han remembered how funny his
          expression was.
        </StorySection>


        {/* LITTLE PRINCE */}
        <div className="my-10">
          <AdminImage
            className="h-[300px] md:h-[400px]"
            label="THE LITTLE PRINCE"
          />
        </div>

        <StorySection
          title="THE LITTLE PRINCE"
          icon={<Heart size={19} />}
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
          Han's voice and JL's voice have their own colors, but they didn't
          fight each other. They actually fit together really naturally.
          Their harmonies made the whole performance feel so much fuller,
          and it was one of those stages where you could just sit there and
          listen without thinking about anything else.
          <br /><br />
          Even the trainees watching them reacted to it, with some of them
          saying they got goosebumps. And I completely understand why because
          hearing those two voices together for the first time was just…
          yeah. HANEULZ.
          <br /><br />
          That performance became such an important part of their story
          because it was one of the first times we really got to see what
          happens when Han and JL share the same stage instead of watching
          them separately.
        </StorySection>


        {/* DEBUT */}
        <div className="my-10">
          <AdminImage
            className="h-[300px] md:h-[400px]"
            label="AHOF · DEBUT"
          />
        </div>

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
          and Daisuke, they started this new chapter with AHOF's debut album
          <i> Who We Are</i> and the title track
          “그곳에서 다시 만나기로 해 (Rendezvous).”
          <br /><br />
          And of course, HANEULZ didn't just disappear after debut.
          If anything, we started getting even more little moments.
        </StorySection>


        {/* AFTER DEBUT */}
        <div className="my-10">
          <AdminImage
            className="h-[280px] md:h-[360px]"
            label="AFTER DEBUT"
          />
        </div>

        <StorySection title="THE LITTLE THINGS">
          One of the things that always makes me smile is how often Han and
          JL end up singing together. Han has talked about how JL is good at
          harmonizing and how beautiful his high notes are, and there have
          been so many moments where the two of them just casually start
          singing together like it's the most normal thing in the world.
          <br /><br />
          Han even joked about how the practice room is basically never
          quiet because he and JL are always singing. And honestly, I can
          believe it. ㅋㅋㅋㅋ
          <br /><br />
          There are also all those random little moments that don't
          necessarily look important on their own but somehow become the
          things you remember.
          <br /><br />
          JL giving Han jelly. Han eating it. Them sharing food. The random
          photos. Han lying on JL because he was tired and JL suddenly taking
          a picture. Their random duets. Calling each other by their
          nicknames. Those little “Hani hyung~” moments. The way they can
          turn literally nothing into a whole interaction.
          <br /><br />
          There was even the mafia game moment where Han talked about JL
          always saving him when he was about to die and how he thought it
          was better doing it with JL because JL was good at harmonizing and
          his high notes were beautiful.
          <br /><br />
          And then there was that moment when Han basically went,
          <br /><br />
          “Haneulz is JL and me, right?”
          <br /><br />
          YES. THAT.
          <br /><br />
          Because at that point HANEULZ wasn't just something fans were
          calling them. They knew the name too.
          <br /><br />
          There are so many little things like this that I could honestly
          keep going forever. Sometimes they're singing, sometimes they're
          joking around, sometimes they're just sitting together, and
          sometimes it's literally just one sentence that somehow ends up
          being memorable.
          <br /><br />
          That's what I like about HANEULZ. It's not only the big
          performances. It's all these tiny moments in between.
        </StorySection>


        {/* HANSUM */}
        <StorySection title="HANSUM">
          And then there's Hansum.
          <br /><br />
          Hansum comes from Han's fandom name, Park Ha-dan, and JL's nickname,
          DimSUM. It also connects to the Korean word 한숨, which means a sigh
          or a deep breath.
          <br /><br />
          I actually really like that meaning because this whole little
          corner is kind of like that too. A place where you can just breathe
          for a second, look back at the memories, replay the performances,
          save the funny moments, and just enjoy being here.
        </StorySection>


        {/* WHY */}
        <div className="my-12 flex justify-center gap-4 text-[color:var(--ink-soft)]">
          <Star size={15} />
          <span>☁</span>
          <Heart size={15} />
          <span>✦</span>
          <Star size={15} />
        </div>

        <StorySection title="WHY HANEULZ">
          I don't think HANEULZ can really be summed up by one performance
          or one funny interaction.
          <br /><br />
          It started with two trainees who didn't even know that they were
          going to end up together. One accidentally walked into the wrong
          practice room. They eventually sang The Little Prince together.
          Then somehow, after everything, they debuted in the same group.
          <br /><br />
          And now there are all these little memories in between.
          <br /><br />
          The singing. The harmonies. The jokes. The food. The random
          photos. The lives. The practice room chaos. The “Hani hyung”
          moments. The “Jeyelie” moments. The times they randomly start
          singing together. All of those tiny things that probably felt
          ordinary when they happened but became memories that people kept
          coming back to.
          <br /><br />
          That's what this corner is for.
          <br /><br />
          Not to make their story sound bigger or more dramatic than it is,
          but just to keep the moments that made HANEULZ feel like HANEULZ
          in one place.
          <br /><br />
          And honestly, I'm just really happy that after everything, Han and
          JL got to debut together and keep making these memories.
          <br /><br />
          So… welcome to the little HANEULZ corner. ♡
        </StorySection>


        {/* END DECORATION */}
        <div className="mt-14 text-center text-xl tracking-[0.5em] text-[color:var(--ink-soft)]">
          ☁ ✦ ♡ ✦ ☁
        </div>

      </article>
    </Reveal>
  );
}


function StorySection({ title, icon, children }) {
  return (
    <section className="my-14">
      <div className="text-center">
        <div className="mb-3 flex justify-center text-[color:var(--ink-soft)]">
          {icon}
        </div>

        <h3 className="font-serif-display text-3xl uppercase tracking-wide md:text-4xl">
          {title}
        </h3>

        <div className="mx-auto mt-4 h-px w-10 bg-[color:var(--line)]" />
      </div>

      <p className="mx-auto mt-7 max-w-3xl text-[16px] leading-8 text-[color:var(--ink-soft)] md:text-[17px] md:leading-8">
        {children}
      </p>
    </section>
  );
}


function AdminImage({ className = "", label = "Admin Image Upload Area" }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-gradient-to-br from-white/70 via-white/30 to-[color:var(--pink)]/40 shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${className}`}
    >
      <div className="absolute left-5 top-5 rounded-full bg-white/70 px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-[color:var(--ink-soft)] backdrop-blur-md">
        {label}
      </div>

      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <Cloud
            size={28}
            strokeWidth={1.2}
            className="mx-auto mb-3 text-[color:var(--ink-soft)]"
          />

          <p className="text-xs tracking-[0.2em] text-[color:var(--ink-soft)]">
            IMAGE SPACE
          </p>

          <p className="mt-2 text-[10px] text-[color:var(--ink-soft)]/70">
            editable by admin
          </p>
        </div>
      </div>
    </div>
  );
}
