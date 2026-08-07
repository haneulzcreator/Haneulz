import { useState } from "react";
import memoryData from "./memoryData";
import { X, RotateCcw } from "lucide-react";

export default function MemoryMatch({ onClose }) {

  const createGame = () => {
    return [...memoryData]
      .map((card) => ({
        ...card,
        flipped: false,
        matched: false,
      }))
      .sort(() => Math.random() - 0.5);
  };


  const [cards, setCards] = useState(createGame());
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);



  const handleFlip = (uuid) => {

    if (locked) return;


    const card = cards.find(
      (c) => c.uuid === uuid
    );


    if (!card || card.flipped || card.matched)
      return;



    const updatedCards = cards.map((c) =>
      c.uuid === uuid
        ? { ...c, flipped: true }
        : c
    );


    setCards(updatedCards);


    const newSelected = [
      ...selected,
      uuid
    ];


    setSelected(newSelected);



    if (newSelected.length === 2) {

      setMoves((prev) => prev + 1);


      const first = updatedCards.find(
        (c) => c.uuid === newSelected[0]
      );


      const second = updatedCards.find(
        (c) => c.uuid === newSelected[1]
      );



      if (first.title === second.title) {

        setCards((prev) =>
          prev.map((c) =>
            newSelected.includes(c.uuid)
              ? {
                  ...c,
                  matched: true
                }
              : c
          )
        );


        setSelected([]);


      } else {


        setLocked(true);


        setTimeout(() => {

          setCards((prev) =>
            prev.map((c) =>
              newSelected.includes(c.uuid)
                ? {
                    ...c,
                    flipped: false
                  }
                : c
            )
          );


          setSelected([]);
          setLocked(false);


        }, 1000);

      }

    }

  };



  const restart = () => {

    setCards(createGame());
    setSelected([]);
    setMoves(0);
    setLocked(false);

  };



return (

<div className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-br from-pink-100 via-white to-blue-100">


<div className="pointer-events-none absolute inset-0 overflow-hidden">

<div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"></div>

<div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"></div>

<div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl"></div>

</div>




<div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10">



{/* TOP */}

<div className="mb-8 flex items-center justify-between">


<div>

<p className="uppercase tracking-[0.3em] text-xs text-[color:var(--ink-soft)]">
Game Room
</p>


<h1 className="mt-2 font-serif-display text-5xl">
Match the Moments
</h1>


<p className="mt-3 max-w-xl text-[color:var(--ink-soft)]">
Flip every card and find each matching HANEULZ memory.
</p>


</div>



<button
onClick={onClose}
className="grid h-12 w-12 place-items-center rounded-full border border-[color:var(--line)] hover:bg-[color:var(--pink)] transition"
>

<X size={20}/>

</button>


</div>





{/* STATS */}


<div className="mb-10 flex gap-5">


<div className="glass rounded-3xl px-8 py-5">

<p className="text-xs uppercase tracking-widest">
Moves
</p>


<h2 className="mt-2 text-4xl font-serif-display">
{moves}
</h2>


</div>



<button
onClick={restart}
className="glass flex items-center gap-3 rounded-3xl px-8 py-5"
>

<RotateCcw size={18}/>

Restart

</button>


</div>





{/* GAME GRID */}


<div className="grid grid-cols-4 gap-5 pb-10">


{cards.map((card)=>(


<button
key={card.uuid}
onClick={() => handleFlip(card.uuid)}
className="aspect-square rounded-[2rem] [perspective:1000px]"
>



<div
className={`
relative h-full w-full transition-transform duration-500
[transform-style:preserve-3d]
${card.flipped || card.matched ? "[transform:rotateY(180deg)]" : ""}
`}
>



{/* FRONT */}

<div
className="
absolute inset-0 flex items-center justify-center
rounded-[2rem] border border-[color:var(--line)]
bg-white
[backface-visibility:hidden]
"
>

<div className="text-5xl">
☁️
</div>


</div>





{/* BACK */}


<div
className="
absolute inset-0 flex flex-col items-center justify-center
rounded-[2rem] border border-[color:var(--line)]
bg-white
[backface-visibility:hidden]
[transform:rotateY(180deg)]
"
>


<img
  src={card.image}
  alt={card.title}
  className="h-32 w-32 rounded-2xl object-cover"
/>


</div>




</div>



</button>


))}



</div>




</div>


</div>

);

}
