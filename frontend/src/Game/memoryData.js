const cards = [
  {
    id: 1,
    title: "JL",
    image: "/images/jl.jpg",
  },
  {
    id: 2,
    title: "Han",
    image: "/images/han.jpg",
  },
  {
    id: 3,
    title: "HANEULZ",
    image: "/images/haneulz.jpg",
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
