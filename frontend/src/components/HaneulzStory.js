import { Cloud } from "lucide-react";

export default function HaneulzStory() {
  return (
    <div className="w-full rounded-[2rem] bg-pink-100 p-8 text-gray-800">

      <div className="text-center">
        <Cloud className="mx-auto mb-4" size={28} />

        <h2 className="font-serif-display text-5xl">
          HANEULZ
        </h2>

        <p className="mt-4 text-gray-600">
          the story of two voices that found each other
        </p>
      </div>

      <div className="mt-10 rounded-[2rem] bg-white/70 p-8">

        <h3 className="font-serif-display text-4xl">
          HANEULZ
        </h3>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          HANEULZ is a name that came from Han and Jaeyel,
          the pronunciation of JL's name, and it also happens
          to sound like haneul (하늘), which means sky in Korean.
          I honestly think it fits them so well because it started
          from just their names, but somehow it became this little
          name that holds so many memories from Universe League
          until now.
        </p>

      </div>

    </div>
  );
}
