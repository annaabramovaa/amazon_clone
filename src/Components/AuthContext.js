// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [greeting, setGreeting] = useState("Hello Guest");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = () => {
    setIsSignedIn(true);
    setGreeting("Hello User");
  };

  const signOut = () => {
    setIsSignedIn(false);
    setGreeting("Hello Guest");
  };

  return (
    <AuthContext.Provider value={{ greeting, isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
