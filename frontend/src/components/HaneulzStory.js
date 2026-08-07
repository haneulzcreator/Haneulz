import { Reveal } from "./Reveal";
import { Cloud, Sparkles, Heart } from "lucide-react";


export default function HaneulzStory() {

 return (
    <article className="mx-auto max-w-5xl">


        {/* TITLE */}

        <div className="text-center">

          <Cloud
            className="mx-auto mb-5"
            size={34}
          />

          <h2 className="font-serif-display text-6xl md:text-7xl">
            HANEULZ
          </h2>

          <p className="mt-4 text-lg text-[color:var(--ink-soft)]">
            the story of two voices that found each other
          </p>

        </div>



        {/* HERO IMAGE */}

        <div className="mt-12 overflow-hidden rounded-[3rem] bg-white/40">

          <div className="flex h-[420px] items-center justify-center text-sm text-[color:var(--ink-soft)]">

            Admin Image Upload Area

          </div>

        </div>





        {/* STORY */}

        <div className="mt-16 space-y-16">



          <StorySection
            title="HANEULZ"
            icon={<Cloud size={22}/>}
          >

            HANEULZ is a name created from Han and Jaeyel,
            the pronunciation of JL's name. It also carries
            the meaning of 하늘 (haneul), which means "sky"
            in Korean.

            <br /><br />

            A name that started from two artists, two voices,
            and a journey that slowly became something special.

          </StorySection>





          <ImagePlaceholder />





          <StorySection
            title="Where It All Started"
            icon={<Sparkles size={22}/>}
          >

            Before HANEULZ existed, Han and JL were two
            trainees chasing the same dream through Universe
            League.

            <br /><br />

            JL first caught attention through his performance
            of "One and Only" by BOYNEXTDOOR. His stable
            vocals, bright energy, dancing, and stage presence
            showed the potential of an artist who could capture
            attention on stage.

            <br /><br />

            During the drafting episodes, JL became known as
            the "three pick" after being chosen by three mentors,
            showing the strong impression he left during the
            competition.

            <br /><br />

            Han showed another side of himself through
            "Siren." His mysterious aura, powerful vocals,
            and detailed dancing created a performance that
            showed his unique color as an artist.

          </StorySection>





          <ImagePlaceholder />





          <StorySection
            title="The First Impression"
          >

            One of Han's first memories of JL was actually
            a funny one.

            <br /><br />

            When JL accidentally entered the Siren practice
            room, Han remembered his confused expression
            when he opened the door.

            <br /><br />

            "Eugh? This isn't One and Only team?"

            <br /><br />

            A small mistake during their trainee days became
            one of the earliest memories between them.

          </StorySection>





          <ImagePlaceholder />





          <StorySection
            title="The Little Prince"
            icon={<Heart size={22}/>}
          >

            December 27, 2024 became one of the most
            memorable moments for HANEULZ.

            <br /><br />

            The Little Prince duet finally brought their
            voices together on one stage.

            <br /><br />

            Their vocals blended naturally, showing two
            different voices supporting each other instead
            of competing.

            <br /><br />

            It became a performance that showed their
            chemistry and the reason many people continued
            to treasure their journey.

          </StorySection>





          <ImagePlaceholder />





          <StorySection
            title="Debut As AHOF"
          >

            On July 1, 2025, Han and JL officially debuted
            together as members of AHOF (아홉).

            <br /><br />

            After their journey through Universe League,
            seeing them finally stand on the same stage
            became a new beginning.

            <br /><br />

            Together with Steven, Jeongwoo, Woongki,
            Shuaibo, Chih En, Juwon, and Daisuke,
            they started a new chapter with the debut album
            "Who We Are" and the title track
            "그곳에서 다시 만나기로 해 (Rendezvous)."

          </StorySection>





          <ImagePlaceholder />





          <StorySection
            title="After Debut Moments"
          >

            After debut, their little moments continued.

            <br /><br />

            Han shared how much he enjoyed singing with JL
            because of his harmonization and beautiful high
            notes.

            <br /><br />

            Their practice room was rarely quiet because
            they were always singing together.

            <br /><br />

            From random duets, shared food, funny moments,
            unexpected photos, and small conversations,
            these simple memories became part of what made
            HANEULZ special.

            <br /><br />

            One memorable moment was when Han said:

            <br /><br />

            "Haneulz is JL and me, right?"

            <br /><br />

            A simple sentence that showed how meaningful
            the name had become to both of them.

          </StorySection>





          <ImagePlaceholder />





          <StorySection
            title="Hansum"
          >

            Hansum is the community name connected to
            HANEULZ.

            <br /><br />

            The name comes from Han's fandom connection,
            Park Ha-dan, and JL's nickname, DimSUM.

            <br /><br />

            Hansum also means a sigh or a deep breath in
            Korean, representing comfort, memories, and
            moments shared together.

          </StorySection>





          <StorySection
            title="Why HANEULZ"
          >

            HANEULZ is not only about one performance
            or one moment.

            <br /><br />

            It is about two artists who started from
            different places and slowly created memories
            together.

            <br /><br />

            From Universe League, The Little Prince,
            and their debut as AHOF, their story continues.

            <br /><br />

            This little corner exists to keep those stories,
            memories, and moments together.

          </StorySection>


        </div>


      </article>


    </Reveal>

  );

}





function StorySection({title, icon, children}) {

  return (

    <section>

      <div className="flex items-center justify-center gap-3 text-center">

        {icon}

        <h3 className="font-serif-display text-4xl md:text-5xl">
          {title}
        </h3>

      </div>


      <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-[color:var(--ink-soft)]">

        {children}

      </p>


    </section>

  );

}





function ImagePlaceholder(){

  return (

    <div className="overflow-hidden rounded-[3rem] bg-white/40">

      <div className="flex h-[360px] items-center justify-center text-sm text-[color:var(--ink-soft)]">

        Admin Image Upload Area

      </div>

    </div>

  );

}
