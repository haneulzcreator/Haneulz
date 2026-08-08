import { Cloud } from "lucide-react";

export default function HaneulzStory() {
  return (
    <div className="mx-auto w-full max-w-5xl pb-20">

      <div className="rounded-[2.5rem] bg-[#f5eee8] px-6 py-12 md:px-12 md:py-16">

        <div className="text-center">

          <Cloud
            size={32}
            className="mx-auto mb-5"
          />

          <h2 className="font-serif-display text-5xl md:text-7xl">
            HANEULZ
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[color:var(--ink-soft)]">
            the story of two voices that found each other
          </p>

        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-white/60">
          <div className="flex min-h-[280px] items-center justify-center text-sm text-[color:var(--ink-soft)]">
            HANEULZ IMAGE
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">

  <p className="text-base leading-8 text-[color:var(--ink-soft)]">
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

    </div>
  );
}
