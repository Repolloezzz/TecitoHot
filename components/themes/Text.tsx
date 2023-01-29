import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

// Componentes para escribir texto
export function Ltx({ txt }: { txt: string }) {
  return <Latex strict>{`$${txt}$`}</Latex>;
}