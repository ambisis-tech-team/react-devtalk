import { useContext, useEffect } from "react";
import { Section } from "./Section";
import { NumberContext } from "../context/NumberContext";

export function Paragraph() {
  const number = useContext(NumberContext);
  const text = "Hello, World!";

  useEffect(() => {
    console.log("Componente foi montado ou atualizado");

    return () => {
      console.log("Componente foi desmontado, ele morreu");
    };
  }, [number]);

  return (
    <>
      <p>{text}</p>
      <Section />
    </>
  );
}
