import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/api";
const AuthContext = createContext(null);
const TOKEN_KEY = "haneulz_token";
export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [ready, setReady] = useState(false);
  // =========================================================
  // RESTORE LOGIN SESSION
  // =========================================================
  useEffect(() => {
    let cancelled = false;
    const restoreSession = async () => {
      const token = localStorage.getItem(TOKEN_KEY);
      if (!token) {
        if (!cancelled) {
          setAdmin(false);
          setReady(true);
        }
        return;
      }
      api.defaults.headers.common.Authorization =
        `Bearer ${token}`;
      try {
        const response = await api.get("/auth/me");
        if (cancelled) return;
        setAdmin(response.data);
      } catch (error) {
        console.error(
          "AUTH SESSION ERROR:",
          error.response?.data || error.message
        );
        if (cancelled) return;
        localStorage.removeItem(TOKEN_KEY);
        delete api.defaults.headers.common.Authorization;
        setAdmin(false);
      } finally {
        if (!cancelled) {
          setReady(true);
        }
      }
    };
    restoreSession();
    return () => {
      cancelled = true;
    };
  }, []);
  // =========================================================
  // LOGIN
  // =========================================================
  const login = async (email, password) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    const data = response.data;
    if (!data?.token) {
      throw new Error(
        "Login succeeded but no token was returned."
      );
    }
    // Save token
    localStorage.setItem(TOKEN_KEY, data.token);
    // Set Axios authorization immediately
    api.defaults.headers.common.Authorization =
      `Bearer ${data.token}`;
    // Use the user returned by login.
    // Do NOT require /auth/me to complete login.
    const loggedInAdmin =
      data.user ||
      data.admin ||
      {
        email,
      };
    setAdmin(loggedInAdmin);
    setReady(true);
    return loggedInAdmin;
  };
  // =========================================================
  // LOGOUT
  // =========================================================
  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    delete api.defaults.headers.common.Authorization;
    setAdmin(false);
    setReady(true);
  };
  // =========================================================
  // PROVIDER
  // =========================================================
  return (
    <AuthContext.Provider
      value={{
        admin,
        ready,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
// =========================================================
// HOOK
// =========================================================
export function useAuth() {
  return useContext(AuthContext);
}
