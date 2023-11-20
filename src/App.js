import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </div>
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
