import { useEffect, useState } from "react";
import { X, RotateCcw, Sparkles, Trophy } from "lucide-react";
import { api } from "../lib/api";

export default function MemoryMatch({ onClose }) {
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [gameComplete, setGameComplete] = useState(false);

  /*
   * Choose random photos from the admin-uploaded pool.
   *
   * Each photo becomes TWO cards.
   * The pair is identified by pairId so two different Han photos
   * cannot accidentally match just because they are both labeled "Han".
   */
  const createGame = (memoryPool) => {
    if (!memoryPool || memoryPool.length < 2) {
      return [];
    }

    /*
     * Shuffle the available photos first.
     */
    const shuffled = [...memoryPool].sort(
      () => Math.random() - 0.5
    );

    /*
     * Pick up to 6 different photos.
     *
     * 6 photos = 12 cards.
     *
     * This means every game can have a different combination.
     */
    const selectedPhotos = shuffled.slice(
      0,
      Math.min(6, shuffled.length)
    );

    /*
     * Turn every photo into a pair.
     */
    const pairedCards = selectedPhotos.flatMap((photo) => {
      const pairId = photo.id;

      return [
        {
          ...photo,
          uuid: `${pairId}-1-${crypto.randomUUID()}`,
          pairId,
          flipped: false,
          matched: false,
        },
        {
          ...photo,
          uuid: `${pairId}-2-${crypto.randomUUID()}`,
          pairId,
          flipped: false,
          matched: false,
        },
      ];
    });

    /*
     * Shuffle the actual game cards.
     */
    return pairedCards.sort(
      () => Math.random() - 0.5
    );
  };

  /*
   * Load the cards uploaded by the admin.
   */
  useEffect(() => {
    const loadCards = async () => {
      try {
        setLoading(true);

        const response = await api.get("/memory-cards");

        const memoryPool = response.data || [];

        setCards(createGame(memoryPool));
      } catch (error) {
        console.error(
          "Failed to load memory cards:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadCards();
  }, []);

  /*
   * Flip a card.
   */
  const handleFlip = (uuid) => {
    if (locked || gameComplete) return;

    const card = cards.find(
      (item) => item.uuid === uuid
    );

    if (
      !card ||
      card.flipped ||
      card.matched
    ) {
      return;
    }

    /*
     * Don't allow more than two cards.
     */
    if (selected.length >= 2) {
      return;
    }

    const updatedCards = cards.map((item) =>
      item.uuid === uuid
        ? {
            ...item,
            flipped: true,
          }
        : item
    );

    setCards(updatedCards);

    const newSelected = [
      ...selected,
      uuid,
    ];

    setSelected(newSelected);

    /*
     * First card only.
     */
    if (newSelected.length !== 2) {
      return;
    }

    setMoves((previous) => previous + 1);

    const first = updatedCards.find(
      (item) =>
        item.uuid === newSelected[0]
    );

    const second = updatedCards.find(
      (item) =>
        item.uuid === newSelected[1]
    );

    /*
     * MATCH
     */
    if (
      first &&
      second &&
      first.pairId === second.pairId
    ) {
      const matchedCards = updatedCards.map(
        (item) =>
          newSelected.includes(item.uuid)
            ? {
                ...item,
                matched: true,
              }
            : item
      );

      setCards(matchedCards);
      setSelected([]);

      /*
       * Check if every card has been matched.
       */
      const finished = matchedCards.every(
        (item) => item.matched
      );

      if (finished) {
        setGameComplete(true);
      }

      return;
    }

    /*
     * NOT A MATCH
     */
    setLocked(true);

    setTimeout(() => {
      setCards((previous) =>
        previous.map((item) =>
          newSelected.includes(item.uuid)
            ? {
                ...item,
                flipped: false,
              }
            : item
        )
      );

      setSelected([]);
      setLocked(false);
    }, 900);
  };

  /*
   * Start another game.
   *
   * We fetch the pool again so newly uploaded admin photos
   * can immediately become available.
   */
  const restart = async () => {
    try {
      setLocked(true);
      setGameComplete(false);
      setSelected([]);
      setMoves(0);

      const response = await api.get(
        "/memory-cards"
      );

      const memoryPool = response.data || [];

      setCards(createGame(memoryPool));
    } catch (error) {
      console.error(
        "Failed to restart memory game:",
        error
      );
    } finally {
      setLocked(false);
    }
  };

  /*
   * Loading screen
   */
  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] grid place-items-center bg-gradient-to-br from-pink-100 via-white to-blue-100">
        <div className="text-center">
          <div className="text-5xl">☁️</div>

          <p className="mt-4 font-serif-display text-2xl">
            Getting the memories...
          </p>

          <p className="mt-2 text-sm text-[color:var(--ink-soft)]">
            Just a little moment 💗
          </p>
        </div>
      </div>
    );
  }

  /*
   * Not enough cards uploaded yet.
   */
  if (cards.length === 0) {
    return (
      <div className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-br from-pink-100 via-white to-blue-100">
        <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-10">
          <div className="glass w-full rounded-[2.5rem] p-10 text-center">

            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-white/70 text-4xl">
              ☁️
            </div>

            <h1 className="mt-6 font-serif-display text-4xl">
              The game is still getting ready
            </h1>

            <p className="mx-auto mt-4 max-w-lg text-[color:var(--ink-soft)]">
              There aren't enough memory cards yet.
              Once the admin adds some Han and JL
              memories, they'll appear here.
            </p>

            <button
              onClick={onClose}
              className="mt-8 rounded-full bg-[color:var(--pink-deep)] px-7 py-3 text-sm font-bold text-white"
            >
              Back to the Corner
            </button>

          </div>
        </div>
      </div>
    );
  }

  /*
   * Calculate number of pairs.
   */
  const pairCount = cards.length / 2;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-br from-pink-100 via-white to-blue-100">

      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="absolute right-[-100px] top-1/3 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute bottom-[-100px] left-1/3 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />

      </div>

      <div className="relative mx-auto min-h-screen max-w-6xl px-5 py-8 sm:px-8 sm:py-12">

        {/* HEADER */}
        <div className="flex items-start justify-between gap-6">

          <div>

            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
              <Sparkles size={14} />
              HANEULZ Game Room
            </div>

            <h1 className="mt-3 font-serif-display text-4xl sm:text-6xl">
              Match the Moments
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[color:var(--ink-soft)] sm:text-base">
              Find every matching HANEULZ memory.
              Every game mixes the memories differently,
              so you never know which ones you'll get. ☁️
            </p>

          </div>

          <button
            onClick={onClose}
            aria-label="Close game"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[color:var(--line)] bg-white/60 transition hover:bg-white"
          >
            <X size={20} />
          </button>

        </div>

        {/* GAME INFO */}
        <div className="mt-8 flex flex-wrap items-center gap-3">

          <div className="rounded-2xl border border-[color:var(--line)] bg-white/60 px-5 py-3 backdrop-blur">

            <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
              Moves
            </p>

            <p className="mt-1 font-serif-display text-3xl">
              {moves}
            </p>

          </div>

          <div className="rounded-2xl border border-[color:var(--line)] bg-white/60 px-5 py-3 backdrop-blur">

            <p className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink-soft)]">
              Pairs
            </p>

            <p className="mt-1 font-serif-display text-3xl">
              {pairCount}
            </p>

          </div>

          <button
            onClick={restart}
            className="flex items-center gap-2 rounded-2xl border border-[color:var(--line)] bg-white/60 px-5 py-4 text-sm font-semibold transition hover:bg-white"
          >
            <RotateCcw size={17} />
            New Game
          </button>

        </div>

        {/* GAME */}
        <div className="mx-auto mt-8 max-w-4xl">

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-5">

            {cards.map((card) => {

              const visible =
                card.flipped ||
                card.matched;

              return (
                <button
                  key={card.uuid}
                  type="button"
                  onClick={() =>
                    handleFlip(card.uuid)
                  }
                  disabled={
                    locked ||
                    card.flipped ||
                    card.matched
                  }
                  className="group aspect-square [perspective:1000px]"
                >

                  <div
                    className={`
                      relative h-full w-full
                      transition-transform duration-500
                      [transform-style:preserve-3d]
                      ${
                        visible
                          ? "[transform:rotateY(180deg)]"
                          : ""
                      }
                    `}
                  >

                    {/* CARD FRONT */}

                    <div
                      className="
                        absolute inset-0
                        flex items-center justify-center
                        overflow-hidden
                        rounded-[1.5rem]
                        border border-white/80
                        bg-white/75
                        shadow-sm
                        [backface-visibility:hidden]
                        sm:rounded-[2rem]
                      "
                    >

                      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/70 via-white to-blue-100/70" />

                      <div className="relative text-4xl transition-transform duration-300 group-hover:scale-110 sm:text-5xl">
                        ☁️
                      </div>

                    </div>

                    {/* CARD BACK / IMAGE */}

                    <div
                      className="
                        absolute inset-0
                        overflow-hidden
                        rounded-[1.5rem]
                        border border-white
                        bg-white
                        shadow-md
                        [backface-visibility:hidden]
                        [transform:rotateY(180deg)]
                        sm:rounded-[2rem]
                      "
                    >

                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover"
                      />

                      {/* Small label */}
                      <div className="absolute bottom-2 left-2 right-2">

                        <div className="rounded-full bg-white/85 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest backdrop-blur sm:text-[10px]">
                          {card.title}
                        </div>

                      </div>

                      {/* Matched indicator */}
                      {card.matched && (
                        <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-sm shadow">
                          ✓
                        </div>
                      )}

                    </div>

                  </div>

                </button>
              );
            })}

          </div>

        </div>

        {/* COMPLETED */}
        {gameComplete && (
          <div className="fixed inset-0 z-[110] grid place-items-center bg-black/20 px-6 backdrop-blur-sm">

            <div className="w-full max-w-md rounded-[2.5rem] border border-white/70 bg-white/90 p-8 text-center shadow-xl">

              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-pink-100 text-pink-500">
                <Trophy size={34} />
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[color:var(--ink-soft)]">
                Memory Complete
              </p>

              <h2 className="mt-3 font-serif-display text-4xl">
                You matched them all! ☁️
              </h2>

              <p className="mt-3 text-sm text-[color:var(--ink-soft)]">
                You finished in{" "}
                <strong>{moves}</strong>{" "}
                moves.
              </p>

              <div className="mt-7 flex gap-3">

                <button
                  onClick={restart}
                  className="flex-1 rounded-full bg-[color:var(--pink-deep)] px-5 py-3 text-sm font-bold text-white"
                >
                  Play Again
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 rounded-full border border-[color:var(--line)] bg-white px-5 py-3 text-sm font-bold"
                >
                  Exit
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
