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
      // No saved token
      if (!token) {
        if (!cancelled) {
          setAdmin(false);
          setReady(true);
        }
        return;
      }
      // Set token on Axios immediately
      api.defaults.headers.common.Authorization =
        `Bearer ${token}`;
      try {
        // Verify saved token with backend
        const response = await api.get("/auth/me");
        if (cancelled) return;
        setAdmin(response.data);
      } catch (error) {
        console.error(
          "AUTH SESSION ERROR:",
          error.response?.data || error.message
        );
        if (cancelled) return;
        // Saved token is invalid/expired
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
    // Make sure backend actually returned a token
    if (!data?.token) {
      throw new Error(
        "Login succeeded but no token was returned."
      );
    }
    // Save token
    localStorage.setItem(
      TOKEN_KEY,
      data.token
    );
    // Set Axios default authorization
    api.defaults.headers.common.Authorization =
      `Bearer ${data.token}`;
    // Use the user returned from login
    setAdmin(
      data.user || {
        email,
        role: "admin",
        name: "Admin",
      }
    );
    setReady(true);
    return data.user;
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
