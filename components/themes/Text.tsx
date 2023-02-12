import "katex/dist/katex.min.css";
import Latex from "react-latex-next";


export function Ltx({ txt }:{txt:string}) {
  return (
    <Latex>{txt}</Latex>
  );
}

const all = {Ltx}
export default all