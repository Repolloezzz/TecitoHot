import Latex from "react-latex-next";
import "katex/dist/katex.min.css";
import { LComment } from "./Comments";

// Componentes para escribir texto
export function Ltx({
  txt,
  className = "",
  block = false,
  responsive = false,
}: {
  txt: string;
  className?: string;
  block?: boolean;
  responsive?: boolean;
}) {
  return (
    <span
      className={`${className} ${
        block ? "p-1 rounded-md my-1 block" : ""
      } ${responsive ? 'text-sm md:text-base lg:text-lg xl:text-xl' : ''}`}
    >
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
        className={`${txtStyle ? txtStyle : ""} p-2 min-w-max block`}
        txt={txt}
      />
      {children != undefined ? <LComment>{children}</LComment> : null}
    </div>
  );
}
