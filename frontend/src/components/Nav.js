import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/aus", label: "AU Library" },
  { to: "/variety", label: "Variety Corner" },
  { to: "/submit", label: "Submit" },
];

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <nav
        data-testid="main-nav"
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 md:px-7"
      >
        <Link
          to="/"
          data-testid="nav-logo"
          className="flex items-center gap-2 font-serif-display text-2xl font-medium tracking-tight"
        >
          <span
            className="grid h-8 w-8 place-items-center rounded-full"
            style={{ background: "linear-gradient(135deg,var(--pink-deep),var(--blue-deep))" }}
          >
            <Heart size={15} className="text-white" fill="white" />
          </span>
          HANEULZ
        </Link>

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

        <Link
          to="/submit"
          data-testid="nav-cta"
          className="pill-btn rounded-full bg-[color:var(--ink)] px-5 py-2 text-xs uppercase tracking-widest text-white hover:bg-[color:var(--pink-deep)]"
        >
          Share an AU
        </Link>
      </nav>
    </motion.header>
  );
}
