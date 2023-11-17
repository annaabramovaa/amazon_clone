import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [greeting, setGreeting] = useState("Hello Guest");

  return (
    <AuthContext.Provider value={{ greeting, setGreeting }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
