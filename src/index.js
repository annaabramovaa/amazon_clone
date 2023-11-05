import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from the standard react-dom package
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./Components/reducer";
import { StateProvider } from "./Components/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider
      initialState={initialState}
      reducer={reducer}
    ></StateProvider>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
