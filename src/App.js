import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
