import { Reveal } from "./Reveal";
import {
  Cloud,
  Sparkles,
  Heart,
  Star,
} from "lucide-react";

export default function HaneulzStory() {
  return (
    <Reveal>
      <article className="mx-auto w-full max-w-4xl pb-24">

        {/* SOFT BACKGROUND */}
        <div className="relative overflow-hidden rounded-[3rem] bg-[#f7f0eb] px-5 py-12 md:px-12 md:py-16">

          {/* DECORATIONS */}
          <div className="pointer-events-none absolute left-6 top-8 text-[#d8c8bd]">
            <Cloud size={28} />
          </div>

          <div className="pointer-events-none absolute right-8 top-20 text-[#d8c8bd]">
            <Sparkles size={22} />
          </div>

          <div className="pointer-events-none absolute bottom-20 left-8 text-[#d8c8bd]">
            <Star size={18} />
          </div>

          <div className="pointer-events-none absolute bottom-10 right-8 text-[#d8c8bd]">
            <Heart size={22} />
          </div>


          {/* TITLE */}
          <header className="relative text-center">

            <Cloud
              size={32}
              className="mx-auto mb-5 text-[#8d817a]"
            />

            <h2 className="font-serif-display text-6xl leading-none md:text-7xl">
              HANEULZ
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[color:var(--ink-soft)] md:text-base">
              the story of two voices that found each other
            </p>

          </header>


          {/* HERO IMAGE — ADMIN EDITABLE */}
          <AdminImage
            className="mt-10"
            label="HANEULZ hero image"
          />


          {/* INTRO */}
          <div className="mx-auto mt-10 max-w-3xl">

            <p className="text-base leading-8 text-[color:var(--ink-soft)] md:text-lg md:leading-9">
              HANEULZ is a name that came from Han and Jaeyel,
              the pronunciation of JL's name, and it also happens
              to sound like haneul (하늘), which means sky in Korean.
              I honestly think it fits them so well because it started
              from just their names, but somehow it became this little
              name that holds so many memories from Universe League
              until now.
            </p>

          </div>


          {/* WHERE IT ALL STARTED */}
          <StorySection
            title="WHERE IT ALL STARTED"
            icon={<Sparkles size={20} />}
          >

            Before HANEULZ was even a thing, Han and JL were just
            two trainees trying to make it through Universe League.
            They didn't start out as some inseparable pair or anything
            like that. They had their own stages, their own teams,
            and their own moments, and that's actually what makes
            their story so fun to look back on.

            <br /><br />

            JL first showed up with "One and Only" by BOYNEXTDOOR
            and immediately had that kind of stage presence where
            you just end up watching him. His vocals were stable,
            his dancing was eye-catching, and of course that smile
            was there too.

            <br /><br />

            During one of the drafting episodes, he became known
            as the "three pick" because three mentors chose him.
            Like… three. ㅋㅋㅋㅋ It really showed how much of an
            impression he was already making.

          </StorySection>


          {/* HAN IMAGE — ADMIN EDITABLE */}
          <AdminImage
            label="Han Universe League image"
          />


          {/* HAN */}
          <StorySection title="HAN">

            Then came Han with "Siren."

            His whole vibe was completely different. He had that
            mysterious aura when he walked onto the stage, and then
            once he started singing, you could really hear how strong
            his voice was.

            <br /><br />

            His dancing was sharp and detailed too, and he didn't
            hold himself back during the performance. It was one of
            those stages where you could immediately understand why
            people were paying attention to him.

          </StorySection>


          {/* FIRST IMPRESSION */}
          <AdminImage
            label="JL and Han first memories image"
          />

          <StorySection title="THE FIRST IMPRESSION">

            And then there's the funniest part because one of Han's
            first impressions of JL wasn't some dramatic first meeting.

            <br /><br />

            JL literally entered the wrong practice room. ㅋㅋㅋㅋ

            <br /><br />

            He opened the door to the Siren practice room looking
            completely confused and went, "Eugh? This isn't One and
            Only team?" before realizing he was in the wrong room
            and leaving.

            <br /><br />

            Han remembered how funny his expression was, and honestly,
            that is such a HANEULZ way for their story to start.

          </StorySection>


          {/* LITTLE PRINCE */}
          <StorySection
            title="THE LITTLE PRINCE"
            icon={<Heart size={20} />}
          >

            Then December 27, 2024 happened.

            <br /><br />

            The Little Prince.

            <br /><br />

            After seeing Han and JL doing their own thing throughout
            the competition, they finally got to sing together.
            And honestly, what else am I supposed to say except…
            their voices sounded so good together.

            <br /><br />

            Han's voice and JL's voice have their own colors, but
            they didn't fight each other. They actually fit together
            really naturally. Their harmonies made the whole
            performance feel so much fuller.

            <br /><br />

            It became one of those performances that you could just
            sit there and listen to without thinking about anything
            else.

          </StorySection>


          {/* LITTLE PRINCE IMAGE — ADMIN EDITABLE */}
          <AdminImage
            label="The Little Prince image"
          />


          {/* DEBUT */}
          <StorySection title="AND THEN THEY DEBUTED TOGETHER">

            After everything that happened during Universe League,
            Han and JL eventually debuted together as members of AHOF
            on July 1, 2025.

            <br /><br />

            And honestly, this is probably one of my favorite parts
            of their whole story because after watching them go
            through the competition, seeing them actually end up in
            the same group felt so satisfying.

            <br /><br />

            Like finally??? They are actually going to be on the same
            stages now???

            <br /><br />

            Together with Steven, Jeongwoo, Woongki, Shuaibo, Chih En,
            Juwon, and Daisuke, they started this new chapter with
            AHOF's debut album "Who We Are" and the title track
            "그곳에서 다시 만나기로 해 (Rendezvous)."

          </StorySection>


          {/* DEBUT IMAGE — ADMIN EDITABLE */}
          <AdminImage
            label="AHOF debut image"
          />


          {/* LITTLE THINGS */}
          <StorySection title="THE LITTLE THINGS">

            One of the things that always makes me smile is how often
            Han and JL end up singing together.

            <br /><br />

            Han has talked about how JL is good at harmonizing and
            how beautiful his high notes are, and there have been so
            many moments where the two of them just casually start
            singing together like it's the most normal thing in the
            world.

            <br /><br />

            Han even joked about how the practice room is basically
            never quiet because he and JL are always singing.
            And honestly, I can believe it. ㅋㅋㅋㅋ

            <br /><br />

            There are also all those random little moments that don't
            necessarily look important on their own but somehow become
            the things you remember.

            <br /><br />

            JL giving Han jelly. Han eating it. Them sharing food.
            The random photos. Han lying on JL because he was tired
            and JL suddenly taking a picture. Their random duets.
            Calling each other by their nicknames.

            <br /><br />

            Those little moments are what make HANEULZ feel like
            HANEULZ to me.

          </StorySection>


          {/* POST DEBUT IMAGE — ADMIN EDITABLE */}
          <AdminImage
            label="HANEULZ post-debut collage"
          />


          {/* HANEULZ NAME */}
          <StorySection title="HANEULZ IS JL AND ME, RIGHT?">

            There was even that moment when Han basically went,

            <br /><br />

            <span className="block text-center font-serif-display text-2xl text-[color:var(--ink)] md:text-3xl">
              "Haneulz is JL and me, right?"
            </span>

            <br />

            YES. THAT.

            <br /><br />

            Because at that point HANEULZ wasn't just something fans
            were calling them. They knew the name too.

            <br /><br />

            And that's honestly one of the little things I love most
            about it. It's not only a name that fans made up and
            attached to them. It's something they recognize too.

          </StorySection>


          {/* HANSUM */}
          <StorySection
            title="HANSUM"
            icon={<Cloud size={20} />}
          >

            And then there's Hansum.

            <br /><br />

            Hansum comes from Han's fandom name, Park Ha-dan, and
            JL's nickname, DimSUM. It also connects to the Korean
            word 한숨, which means a sigh or a deep breath.

            <br /><br />

            I actually really like that meaning because this whole
            little corner is kind of like that too.

            <br /><br />

            A place where you can just breathe for a second, look
            back at the memories, replay the performances, save the
            funny moments, and just enjoy being here.

          </StorySection>


          {/* HANSUM IMAGE — ADMIN EDITABLE */}
          <AdminImage
            label="Hansum image"
          />


          {/* WHY HANEULZ */}
          <StorySection title="WHY HANEULZ">

            I don't think HANEULZ can really be summed up by one
            performance or one funny interaction.

            <br /><br />

            It started with two trainees who didn't even know that
            they were going to end up together. One accidentally
            walked into the wrong practice room. They eventually
            sang The Little Prince together. Then somehow, after
            everything, they debuted in the same group.

            <br /><br />

            And now there are all these little memories in between.

            <br /><br />

            The singing. The harmonies. The jokes. The food. The
            random photos. The lives. The practice room chaos.
            The "Hani hyung" moments. The "Jeyelie" moments. The
            times they randomly start singing together.

            <br /><br />

            All of those tiny things that probably felt ordinary
            when they happened but became memories that people kept
            coming back to.

          </StorySection>


          {/* FINAL IMAGE — ADMIN EDITABLE */}
          <AdminImage
            label="HANEULZ ending image"
          />


          {/* END */}
          <div className="mx-auto mt-12 max-w-3xl text-center">

            <p className="text-base leading-8 text-[color:var(--ink-soft)] md:text-lg md:leading-9">
              That's what this corner is for.
              <br /><br />
              Not to make their story sound bigger or more dramatic
              than it is, but just to keep the moments that made
              HANEULZ feel like HANEULZ in one place.
              <br /><br />
              And honestly, I'm just really happy that after
              everything, Han and JL got to debut together and keep
              making these memories.
            </p>

            <div className="mt-8 text-2xl tracking-[0.5em] text-[#b6a59b]">
              ☁ ✦ ♡
            </div>

            <p className="mt-5 font-serif-display text-2xl">
              welcome to the little HANEULZ corner ♡
            </p>

          </div>

        </div>

      </article>
    </Reveal>
  );
}


function StorySection({ title, icon, children }) {
  return (
    <section className="mx-auto mt-12 max-w-3xl">

      <div className="flex items-center justify-center gap-3 text-center">

        {icon && (
          <span className="text-[#9f8f86]">
            {icon}
          </span>
        )}

        <h3 className="font-serif-display text-3xl leading-tight md:text-4xl">
          {title}
        </h3>

      </div>

      <p className="mt-6 text-base leading-8 text-[color:var(--ink-soft)] md:text-lg md:leading-9">
        {children}
      </p>

    </section>
  );
}


function AdminImage({ label, className = "" }) {
  return (
    <div
      className={`relative mt-10 overflow-hidden rounded-[2rem] bg-white/60 ${className}`}
    >
      <div className="flex min-h-[240px] items-center justify-center px-6 text-center text-xs uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
        {label}
      </div>
    </div>
  );
}
