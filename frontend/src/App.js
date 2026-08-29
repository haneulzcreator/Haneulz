import "@/App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
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
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function Shell() {
  const { pathname } = useLocation();
  const hideNav =
    pathname === "/admin/login" ||
    pathname === "/admin";
  return (
    <>
      {!hideNav && <Nav />}
      <ScrollTop />
      <Routes>
        {/* =========================
            MAIN PAGES
        ========================= */}
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
        {/* =========================
            GAMES
        ========================= */}
        <Route
          path="/game"
          element={<GameRoom />}
        />
        {/* =========================
            OUR LITTLE CORNER
        ========================= */}
        <Route
          path="/our-little-corner"
          element={<OurLittleCorner />}
        />
        {/* =========================
            ABOUT HANEULZ
        ========================= */}
        <Route
          path="/about-haneulz"
          element={<AboutWebsite />}
        />
        {/* =========================
            ADMIN
        ========================= */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />
      </Routes>
    </>
  );
}
function App() {
  return (
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
        <BrowserRouter>
          <AuthProvider>
            <Shell />
          </AuthProvider>
        </BrowserRouter>
      </ReactLenis>
    </div>
  );
}
export default App;
