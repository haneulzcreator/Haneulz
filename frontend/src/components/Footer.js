import { Link } from "react-router-dom";

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
      <p className="mx-auto mt-12 max-w-6xl text-xs uppercase tracking-widest text-[color:var(--ink-soft)]">
        © {new Date().getFullYear()} HANEULZ · not affiliated with AHOF or F&F Entertainment
      </p>
    </footer>
  );
}
