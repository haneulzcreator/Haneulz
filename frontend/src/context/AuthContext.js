import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("haneulz_token");

    if (!token) {
      setAdmin(false);
      setReady(true);
      return;
    }

    api
      .get("/auth/me")
      .then((r) => setAdmin(r.data))
      .catch(() => {
        localStorage.removeItem("haneulz_token");
        setAdmin(false);
      })
      .finally(() => setReady(true));

  }, []);


  const login = async (email, password) => {

    const { data } = await api.post("/auth/login", {
      email,
      password,
    });


    localStorage.setItem(
      "haneulz_token",
      data.token
    );


    api.defaults.headers.common.Authorization =
      `Bearer ${data.token}`;


    setAdmin(data.user);


    return data.user;
  };


  const logout = () => {

    localStorage.removeItem(
      "haneulz_token"
    );

    delete api.defaults.headers.common.Authorization;

    setAdmin(false);

  };


  return (
    <AuthContext.Provider
      value={{
        admin,
        ready,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export const useAuth = () => useContext(AuthContext);
