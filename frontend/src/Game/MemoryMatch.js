import { useState } from "react";
import memoryData from "./memoryData";
import { X, RotateCcw } from "lucide-react";

export default function MemoryMatch({ onClose }) {

  const [cards, setCards] = useState(memoryData);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-br from-pink-100 via-white to-blue-100">
     <div className="pointer-events-none absolute inset-0 overflow-hidden">

  <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"></div>

  <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"></div>

  <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl"></div>

</div>
    
    <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10">

        {/* Top */}
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

        {/* Stats */}

        <div className="mb-10 flex gap-5">

          <div className="glass rounded-3xl px-8 py-5">
            <p className="text-xs uppercase tracking-widest">
              Moves
            </p>

            <h2 className="mt-2 text-4xl font-serif-display">
              0
            </h2>
          </div>

          <div className="glass rounded-3xl px-8 py-5">
            <p className="text-xs uppercase tracking-widest">
              Time
            </p>

            <h2 className="mt-2 text-4xl font-serif-display">
              00:00
            </h2>
          </div>

          <button className="glass flex items-center gap-3 rounded-3xl px-8 py-5">
            <RotateCcw size={18}/>
            Restart
          </button>

        </div>

        {/* Game Grid */}

       <div className="grid flex-1 grid-cols-4 gap-5">

  {cards.map((card) => (

    <button
      key={card.uuid}
      className="aspect-square rounded-[2rem] border border-[color:var(--line)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >

      <div className="flex h-full flex-col items-center justify-center">

        {card.flipped ? (
          <>
            <div className="text-5xl">
              {card.icon}
            </div>

            <p className="mt-3 font-serif-display text-lg">
              {card.title}
            </p>
          </>
        ) : (
          <div className="text-5xl">
            ☁️
          </div>
        )}

      </div>

    </button>

  ))}

</div>

      </div>
    </div>
  );
}
