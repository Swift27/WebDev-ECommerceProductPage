import { useState, createContext } from "react";
import "./App.css";
import { Navbar, Main, Inspect } from "./containers";

export const AppContext = createContext();

function App() {
  const [showInspect, setShowInspect] = useState(false);
  const [amount, setAmount] = useState(0);

  return (
    <div className="App">
      <AppContext.Provider value={{ showInspect, setShowInspect, amount, setAmount }}>
        <Navbar />
        <Main />
        {showInspect && <Inspect />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
