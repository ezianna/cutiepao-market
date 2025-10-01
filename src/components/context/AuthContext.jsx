import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { role: "admin" | "user", name: "..." }

  const login = (username, password) => {
    if (username === "admin" && password === "123") {
      setUser({ role: "admin", name: "Admin" });
    } else if (username === "user" && password === "123") {
      setUser({ role: "user", name: "User" });
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
