import { useContext } from "react";
import { NumberContext } from "../context/NumberContext";

export function Section() {
  const number = useContext(NumberContext);

  return (
    <section>
      <h1>Section</h1>
      <p>Eu também quero usar a variável "number": {number}</p>
    </section>
  );
}
