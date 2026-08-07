import { useState } from "react";
import memoryData from "./memoryData";
import { X, RotateCcw } from "lucide-react";

export default function MemoryMatch({ onClose }) {

  const createGame = () => {
    const shuffled = [...memoryData]
      .map((card) => ({
        ...card,
        flipped: false,
        matched: false,
      }))
      .sort(() => Math.random() - 0.5);

    return shuffled;
  };

  const [cards, setCards] = useState(createGame());
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);


  const handleFlip = (uuid) => {

    if (locked) return;

    const card = cards.find((c) => c.uuid === uuid);

    if (!card || card.flipped || card.matched) return;


    const updated = cards.map((c) =>
      c.uuid === uuid
        ? { ...c, flipped: true }
        : c
    );

    setCards(updated);

    const newSelected = [...selected, uuid];
    setSelected(newSelected);


    if (newSelected.length === 2) {

      setMoves((prev) => prev + 1);

      const first = updated.find(
        (c) => c.uuid === newSelected[0]
      );

      const second = updated.find(
        (c) => c.uuid === newSelected[1]
      );


      if (first.title === second.title) {

        setCards((prev) =>
          prev.map((c) =>
            newSelected.includes(c.uuid)
              ? { ...c, matched: true }
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
                ? { ...c, flipped: false }
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

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10">


        {/* HEADER */}

        <div className="mb-8 flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[0.3em] text-xs">
              Game Room
            </p>

            <h1 className="mt-2 font-serif-display text-5xl">
              Match the Moments
            </h1>

            <p className="mt-3">
              Flip every card and find each matching HANEULZ memory.
            </p>

          </div>


          <button
            onClick={onClose}
            className="grid h-12 w-12 place-items-center rounded-full border"
          >
            <X size={20}/>
          </button>

        </div>



        {/* STATS */}

        <div className="mb-10 flex gap-5">

          <div className="glass rounded-3xl px-8 py-5">

            <p className="text-xs uppercase">
              Moves
            </p>

            <h2 className="text-4xl">
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



        {/* CARDS */}

        <div className="grid grid-cols-4 gap-5 pb-10">


          {cards.map((card)=>(


            <button
              key={card.uuid}
              onClick={()=>handleFlip(card.uuid)}
              className="aspect-square rounded-[2rem] border bg-white text-center transition hover:-translate-y-1 hover:shadow-xl"
            >


              {card.flipped || card.matched ? (

                <div>

                  <div className="text-5xl">
                    {card.icon}
                  </div>


                  <p className="mt-3 font-serif-display text-lg">
                    {card.title}
                  </p>


                </div>


              ) : (

                <div className="text-5xl">
                  ☁️
                </div>

              )}


            </button>


          ))}


        </div>


      </div>

    </div>

  );
}
