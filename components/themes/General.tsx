import Image from "next/image";
import { useState } from "react";
export function List({
  className,
  eStyle,
  items,
}: {
  className: string;
  eStyle: string;
  items: any[];
}) {
  return (
    <ul className={`${className ? className : ""}`}>
      {items?.map((e: any, index: number) => {
        return (
          <li className={`${eStyle ? eStyle : ""}`} key={index}>
            {e}
          </li>
        );
      })}
    </ul>
  );
}

import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

// Componentes para escribir texto
export function Ltx({ txt }: { txt: string }) {
  return <Latex strict>{`$${txt}$`}</Latex>;
}

export function Ref({ id }: { id: string }) {
  return <span id={id} className="relative -top-24 lg:top-0" />;
}

export function Img({
  src,
  width,
  height,
  alt,
  className,
  responsive = false
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  responsive?: boolean
}) {
  const [imgSrc, setImg] = useState(src);
  return (
    <Image
      className={`${className ? className : ""} ${responsive ? 'xl:w-80 xl:h-80 lg:w-60 lg:h-60 h-48 w-48' : ''}`}
      src={imgSrc}
      width={width ? width : 500}
      height={height ? height : 500}
      alt={alt ? alt : ""}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        setImg("/imgNotFound.webp");
      }}
    />
  );
}
