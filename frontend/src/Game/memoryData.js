const cards = [
  {
    id: 1,
    title: "JL",
    icon: "🦌",
  },
  {
    id: 2,
    title: "Han",
    icon: "🐈",
  },
  {
    id: 3,
    title: "HANEULZ",
    icon: "☁️",
  },
  {
    id: 4,
    title: "AHOF",
    icon: "✨",
  },
  {
    id: 5,
    title: "Universe League",
    icon: "🏆",
  },
  {
    id: 6,
    title: "The Little Prince",
    icon: "🎤",
  },
  {
    id: 7,
    title: "FOHA",
    icon: "💙",
  },
  {
    id: 8,
    title: "HANSUM",
    icon: "💗",
  },
];

export default [...cards, ...cards]
  .sort(() => Math.random() - 0.5)
  .map((card, index) => ({
    ...card,
    uuid: index,
    flipped: false,
    matched: false,
  }));
