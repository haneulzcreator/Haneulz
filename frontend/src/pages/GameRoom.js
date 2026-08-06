import { useState } from "react";
import MemoryMatch from "../Games/MemoryMatch";

export default function GameRoom() {
  const [activeGame, setActiveGame] = useState(false);

  return (
    <main className="min-h-screen px-6 pt-32 pb-20">

      {!activeGame ? (
        <div className="mx-auto max-w-6xl">

          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--ink-soft)]">
            Our Little Corner
          </p>

          <h1 className="mt-4 font-serif-display text-6xl">
            Game Room
          </h1>

          <p className="mt-5 max-w-xl text-lg text-[color:var(--ink-soft)]">
            A little place where Hansums can relax, play, and revisit memories.
          </p>


          <div className="mt-12 glass rounded-[2.5rem] p-10">

            <h2 className="font-serif-display text-3xl">
              💗 Match the Moments
            </h2>

            <p className="mt-3 text-[color:var(--ink-soft)]">
              Flip the cards and find every HANEULZ memory.
            </p>


            <button
              onClick={() => setActiveGame(true)}
              className="mt-8 rounded-full bg-[color:var(--ink)] px-8 py-4 text-white uppercase tracking-widest"
            >
              Play Game
            </button>

          </div>

        </div>
      ) : (
        <MemoryMatch onClose={() => setActiveGame(false)} />
      )}

    </main>
  );
}
