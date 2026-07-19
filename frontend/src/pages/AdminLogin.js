import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { formatApiError } from "../lib/api";

export default function AdminLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      await login(email, password);
      navigate("/admin");
    } catch (err) {
      setError(formatApiError(err.response?.data?.detail) || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  const input =
    "w-full rounded-full border border-[color:var(--line)] bg-white/70 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--pink-deep)]";

  return (
    <div className="grid min-h-screen place-items-center px-6">
      <div className="glass w-full max-w-md rounded-[2.5rem] p-10" data-testid="admin-login-card">
        <Link to="/" className="mb-8 flex items-center gap-2 font-serif-display text-2xl">
          <span className="grid h-8 w-8 place-items-center rounded-full" style={{ background: "linear-gradient(135deg,var(--pink-deep),var(--blue-deep))" }}>
            <Heart size={15} className="text-white" fill="white" />
          </span>
          HANEULZ
        </Link>
        <h1 className="font-serif-display text-4xl font-medium">Admin</h1>
        <p className="mt-2 text-sm text-[color:var(--ink-soft)]">Sign in to moderate AUs & notes.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={input} data-testid="admin-email-input" />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className={input} data-testid="admin-password-input" />
          {error && <p className="text-sm text-[color:var(--destructive,#d9534f)]" data-testid="admin-login-error">{error}</p>}
          <button type="submit" disabled={busy} data-testid="admin-login-btn" className="pill-btn w-full rounded-full bg-[color:var(--ink)] py-3 text-sm uppercase tracking-widest text-white disabled:opacity-50">
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
