import { Link } from "react-router-dom";
import { Twitter } from "lucide-react";

const CREATOR_X = "haneulz_creator";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-[color:var(--line)] px-6 pb-10 pt-16" data-testid="footer">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h3 className="font-serif-display text-4xl font-medium">HANEULZ</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[color:var(--ink-soft)]">
            A fan-made love letter to the HANEULZ ship — JL Gaspar & Park Han of AHOF. Made by
            FOHA, for FOHA. Unofficial fan project.
          </p>
        </div>
        <div className="flex gap-10 text-sm uppercase tracking-widest text-[color:var(--ink-soft)]">
          <Link to="/aus" className="link-underline">AUs</Link>
          <Link to="/variety" className="link-underline">Variety</Link>
          <Link to="/submit" className="link-underline">Submit</Link>
          <Link to="/admin/login" className="link-underline" data-testid="footer-admin-link">Admin</Link>
        </div>
      </div>

      {/* About us */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-[color:var(--line)] pt-10" data-testid="footer-about-us">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-lg">
            <h4 className="font-serif-display text-2xl font-medium">About us</h4>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
              Hi! I'm the creator behind this little corner of the internet — a HANEULZ fan curating
              AUs and soft moments of JL & Han. This site is made purely out of love for the ship
              and the fandom.
            </p>
            <a
              href={`https://x.com/${CREATOR_X}`}
              target="_blank"
              rel="noreferrer"
              data-testid="footer-creator-x"
              className="pill-btn mt-4 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-2 text-xs uppercase tracking-widest text-white"
            >
              <Twitter size={14} /> @{CREATOR_X}
            </a>
          </div>
          <div className="max-w-sm rounded-[1.5rem] border border-[color:var(--line)] bg-white/50 p-5" data-testid="footer-disclaimer">
            <p className="text-[0.65rem] uppercase tracking-widest text-[color:var(--pink-deep)]">Disclaimer</p>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
              All AUs belong to their respective authors. If you're the author of an AU featured here
              and would like your work removed, please message us on X and we'll take it down right
              away. 💌
            </p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">
        © {new Date().getFullYear()} HANEULZ · not affiliated with AHOF or F&F Entertainment
      </p>
    </footer>
  );
}
