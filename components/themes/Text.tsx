import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { LComment } from "./Comments";

// Componentes para escribir texto
export function Ltx({
  txt,
  className = "",
  block = false
}: {
  txt: string;
  className?: string;
  block?: boolean

}) {
  return (
    <span className={`${className} ${block ? 'bg-slate-100/50 p-1 rounded-md my-1 block' : ''}`}>
      <Latex strict>{`$${txt}$`}</Latex>
    </span>
  );
}

export function BLtx({
  txt,
  txtStyle,
  children,
  className = "",
}: {
  txt: string;
  txtStyle?: string;
  children?: any;
  className?: string;
}) {
  return (
    <div className={`w-full ${className} flex`}>
      <Ltx
        className={`${
          txtStyle ? txtStyle : ""
        } p-2 min-w-max block`}
        txt={txt}
      />
      {children != undefined ? <LComment>{children}</LComment> : null}
    </div>
  );
}
