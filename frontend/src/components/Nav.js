import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/aus", label: "AU Library" },
  { to: "/variety", label: "Variety Corner" },
  { to: "/submit", label: "Submit" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <nav
        data-testid="main-nav"
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-[1.75rem] px-5 py-3 md:rounded-full md:px-7"
      >
        <Link
          to="/"
          data-testid="nav-logo"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 font-serif-display text-xl font-medium tracking-tight md:text-2xl"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-full"
            style={{ background: "linear-gradient(135deg,var(--pink-deep),var(--blue-deep))" }}
          >
            <Heart size={15} className="text-white" fill="white" />
          </span>
          HANEULZ
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`link-underline text-sm uppercase tracking-widest ${
                pathname === l.to ? "text-[color:var(--ink)]" : "text-[color:var(--ink-soft)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/submit"
            data-testid="nav-cta"
            className="pill-btn hidden rounded-full bg-[color:var(--ink)] px-5 py-2 text-xs uppercase tracking-widest text-white hover:bg-[color:var(--pink-deep)] sm:inline-block"
          >
            Share an AU
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            data-testid="mobile-menu"
            className="glass mx-auto mt-3 max-w-6xl overflow-hidden rounded-[1.75rem] p-3 md:hidden"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                  className={`rounded-2xl px-4 py-3 text-sm uppercase tracking-widest ${
                    pathname === l.to
                      ? "bg-[color:var(--pink)] text-[color:var(--ink)]"
                      : "text-[color:var(--ink-soft)]"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/submit"
                onClick={() => setOpen(false)}
                data-testid="mobile-nav-cta"
                className="mt-2 rounded-2xl bg-[color:var(--ink)] px-4 py-3 text-center text-xs uppercase tracking-widest text-white"
              >
                Share an AU
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
