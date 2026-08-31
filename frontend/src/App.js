import "@/App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import { useEffect } from "react";
import {
  AuthProvider,
  useAuth,
} from "./context/AuthContext";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import AULibrary from "./pages/AULibrary";
import AUDetail from "./pages/AUDetail";
import Variety from "./pages/Variety";
import Submit from "./pages/Submit";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AboutWebsite from "./pages/AboutWebsite";
import OurLittleCorner from "./pages/OurLittleCorner";
import GameRoom from "./pages/GameRoom";
// =========================================================
// SCROLL TO TOP
// =========================================================
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
// =========================================================
// ADMIN ROUTE
// =========================================================
function AdminRoute({ children }) {
  const { admin, ready } = useAuth();
  /*
   * IMPORTANT:
   *
   * While AuthProvider is checking localStorage
   * and /auth/me, show an opaque full-screen loader.
   *
   * This prevents the public page or admin page
   * underneath from flashing on screen.
   */
  if (!ready) {
    return (
      <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[color:var(--background)]">
        <span className="text-sm text-[color:var(--ink-soft)]">
          Loading…
        </span>
      </div>
    );
  }
  /*
   * Authentication has finished checking.
   *
   * No admin = go to login.
   */
  if (!admin) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }
  /*
   * Authenticated admin.
   */
  return children;
}
// =========================================================
// ADMIN LOGIN ROUTE
// =========================================================
function AdminLoginRoute() {
  const { admin, ready } = useAuth();
  /*
   * Don't show the login page while the existing
   * session is still being restored.
   */
  if (!ready) {
    return (
      <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-[color:var(--background)]">
        <span className="text-sm text-[color:var(--ink-soft)]">
          Loading…
        </span>
      </div>
    );
  }
  /*
   * Already logged in?
   * Don't briefly show the login page.
   */
  if (admin) {
    return (
      <Navigate
        to="/admin"
        replace
      />
    );
  }
  return <AdminLogin />;
}
// =========================================================
// SHELL
// =========================================================
function Shell() {
  const { pathname } = useLocation();
  /*
   * Hide public navigation on every admin page.
   */
  const isAdminPage =
    pathname.startsWith("/admin");
  return (
    <>
      {!isAdminPage && <Nav />}
      <ScrollTop />
      <Routes>
        {/* =================================================
            PUBLIC PAGES
        ================================================= */}
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/aus"
          element={<AULibrary />}
        />
        <Route
          path="/aus/:id"
          element={<AUDetail />}
        />
        <Route
          path="/variety"
          element={<Variety />}
        />
        <Route
          path="/submit"
          element={<Submit />}
        />
        <Route
          path="/game"
          element={<GameRoom />}
        />
        <Route
          path="/our-little-corner"
          element={<OurLittleCorner />}
        />
        <Route
          path="/about-haneulz"
          element={<AboutWebsite />}
        />
        {/* =================================================
            ADMIN LOGIN
        ================================================= */}
        <Route
          path="/admin/login"
          element={<AdminLoginRoute />}
        />
        {/* =================================================
            ADMIN DASHBOARD
        ================================================= */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </>
  );
}
// =========================================================
// APP
// =========================================================
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App grain">
          <Toaster
            position="top-center"
            richColors
          />
          <ReactLenis
            root
            options={{
              lerp: 0.08,
              smoothWheel: true,
            }}
          >
            <Shell />
          </ReactLenis>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
