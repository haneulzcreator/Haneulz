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
  // RESTORE SAVED LOGIN
  // =========================================================
  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setAdmin(false);
      setReady(true);
      return;
    }
    // Restore token immediately
    api.defaults.headers.common.Authorization =
      `Bearer ${token}`;
    // Treat the saved token as authenticated.
    // The admin API requests will tell us if the token
    // is actually invalid.
    setAdmin({
      email: "Admin",
      role: "admin",
    });
    setReady(true);
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
    localStorage.setItem(
      TOKEN_KEY,
      data.token
    );
    // Attach token to every future API request
    api.defaults.headers.common.Authorization =
      `Bearer ${data.token}`;
    const loggedInUser =
      data.user || {
        email,
        role: "admin",
        name: "Admin",
      };
    // Update auth state
    setAdmin(loggedInUser);
    setReady(true);
    return loggedInUser;
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
