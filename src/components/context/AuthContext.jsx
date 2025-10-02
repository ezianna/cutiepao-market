import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { email, role }
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password, role) => {
    // Dummy validation sesuai permintaan
    if (
      (role === "user" && email === "fauzi@gmail.com" && password === "121314") ||
      (role === "admin" && email === "admin@gmail.com" && password === "adminganteng")
    ) {
      setUser({ email, role });
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
