import React, { createContext, useContext, useReducer } from "react";

// Create the StateContext
export const StateContext = createContext();

// Create the StateProvider component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Create a custom hook for using the state and dispatch
export const useStateValue = () => useContext(StateContext);
