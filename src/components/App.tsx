import { useState } from "react";
import { Paragraph } from "./Paragraph";
import { NumberContext } from "../context/NumberContext";

function App() {
  const [number, setNumber] = useState(1);

  return (
    <NumberContext.Provider value={number}>
      <div>
        <Paragraph />
        <button onClick={() => setNumber(number + 1)}>{number}</button>
      </div>
    </NumberContext.Provider>
  );
}

export default App;
