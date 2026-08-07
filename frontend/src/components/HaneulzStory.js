import { Reveal } from "./Reveal";
import {
  Sparkles,
  Heart,
  Quote,
} from "lucide-react";


const sections = [
  {
    title: "The Meaning Behind HANEULZ",
    image: "/images/haneulz/meaning.jpg",
    content: `
HANEULZ came from the combination of Han and Jaeyel
(the pronunciation of JL's name).

The name also resembles "Haneul (하늘)",
which means sky in Korean.

A name that represents two voices,
two artists, and a connection that continues
to grow through music and memories.
`,
  },

  {
    title: "Hansum",
    image: "/images/haneulz/hansum.jpg",
    content: `
Hansum is the fandom name connected to HANEULZ.

It came from the combination of Han's fandom name
and JL's nickname, DimSUM.

The word also resembles a Korean expression
meaning a sigh or a deep breath,
representing comfort, emotions, and the moments
shared between HANEULZ and the fans.
`,
  },


  {
    title: "How Their Story Began",
    image: "/images/haneulz/universe-league.jpg",
    content: `
Their journey started from the survival show
Universe League.

JL (Jay Lawrence Gaspar) captured attention
with his performance of "One and Only" by BoyNextDoor.

His stable vocals, bright energy,
stage presence, and dancing made him stand out.
He was also known as the trainee chosen by
three mentors during the drafting process.

Han (Park Han) entered with his own charm
through the performance of "Siren".

His mysterious aura, powerful vocals,
and detailed dancing showed his strength
as a performer.

From their first stages, both showed the talent
and potential that made people hope to see them
perform together.
`,
  },


  {
    title: "First Impression",
    image: "/images/haneulz/first-impression.jpg",
    content: `
When Han was asked about his first impression of JL,
he shared a memorable moment:

"Jay L had accidentally come to the Siren practice room,
and his bewildered expression was hilarious ㅋㅋ"

JL had entered the wrong practice room,
thinking it was the One and Only team.

A small funny moment that became one of the early
memories connected to HANEULZ.
`,
  },


  {
    title: "The Little Prince",
    image: "/images/haneulz/little-prince.jpg",
    content: `
December 27, 2024.

The Little Prince duet became one of the most
memorable moments of their journey.

Their voices blended naturally,
showing their harmony and musical chemistry.

Instead of competing against each other,
their voices supported one another,
creating a performance that many people remembered.
`,
  },


  {
    title: "AHOF Chapter",
    image: "/images/haneulz/ahof.jpg",
    content: `
On July 1, 2025, Han and JL officially debuted
together as members of AHOF (아홉).

A new chapter began as they continued their journey
with their members Steven, Jeongwoo, Woongki,
Shuaibo, Chih En, Juwon, and Daisuke.

Their story continued from Universe League
to standing together on the same stage.
`,
  },

];



export default function HaneulzStory(){

return (

<div className="space-y-10">


{/* HEADER */}

<Reveal>

<div className="glass rounded-[3rem] overflow-hidden">


<img
src="/images/haneulz/hero.jpg"
alt="HANEULZ"
className="h-[400px] w-full object-cover"
/>


<div className="p-8 md:p-12">


<p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
A story between two voices
</p>


<h1 className="mt-4 font-serif-display text-6xl">
☁ HANEULZ
</h1>


<p className="mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--ink-soft)]">

A collection of memories, performances,
interviews, and moments that tell the story
of HANEULZ.

</p>


</div>


</div>

</Reveal>





{/* STORY SECTIONS */}


{sections.map((section,index)=>(

<Reveal key={section.title} delay={index * 0.05}>


<div className="glass rounded-[3rem] overflow-hidden">


<img
src={section.image}
alt={section.title}
className="h-72 w-full object-cover"
/>



<div className="p-8 md:p-10">


<div className="flex items-center gap-3">


<Sparkles size={20}/>


<h2 className="font-serif-display text-4xl">

{section.title}

</h2>


</div>



<p className="mt-6 whitespace-pre-line text-lg leading-8 text-[color:var(--ink-soft)]">

{section.content}

</p>


</div>


</div>


</Reveal>


))}





{/* QUOTES */}


<Reveal>


<div className="rounded-[3rem] bg-[color:var(--pink)] p-10">


<div className="flex items-center gap-3">

<Quote size={22}/>

<h2 className="font-serif-display text-4xl">

Their Words

</h2>

</div>



<p className="mt-6 text-lg leading-8">

❝ Small words, messages, and interview moments
saved from their journey. ❞

</p>


</div>


</Reveal>





{/* END */}


<Reveal>


<div className="py-10 text-center">


<Heart className="mx-auto"/>


<h2 className="mt-5 font-serif-display text-4xl">

A story still being written

</h2>


<p className="mt-4 text-[color:var(--ink-soft)]">

More memories will continue to be added
as their journey continues.

</p>


</div>


</Reveal>



</div>

);

}
