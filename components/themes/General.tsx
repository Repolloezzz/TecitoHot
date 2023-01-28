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
import { Icons } from "../global/Icons";

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
  responsive = false,
  view = false,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  responsive?: boolean;
  view?: boolean;
}) {
  const [imgSrc, setImg] = useState(src);
  const [active, setA] = useState(false);
  return (
    <>
      {view ? (
        <div
          className={`fixed flex flex-col justify-center items-center z-50 h-full ${
            active ? "w-full top-0 left-0" : "w-0"
          } bg-slate-700/80 transition-all pl-[2.5rem] md:pl-[3rem] lg:pl-[4rem]`}
        >
          <button
            className="absolute right-5 top-10 lg:top-16 lg:right-16"
            onClick={() => {
              setA(false);
            }}
          >
            <Icons
              name="close"
              className="bg-red-500 border-4 border-red-800 lg:w-12 w-9 h-9 lg:h-12 text-slate-100"
            />
          </button>
          <Image
            className={`${className ? className : ""} w-[90%] lg:w-auto lg:h-3/4`}
            src={imgSrc}
            width={width ? width : 500}
            height={height ? height : 500}
            alt={alt ? alt : ""}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              setImg("/imgNotFound.webp");
            }}
          />
          <p className="text-2xl text-center text-slate-100">{alt}</p>
        </div>
      ) : null}
      <Image
        onClick={
          view
            ? () => {
                setA(true);
              }
            : () => {}
        }
        className={`${className ? className : ""} ${
          responsive ? "xl:w-80 xl:h-80 lg:w-60 lg:h-60 h-48 w-48" : ""
        } ${view ? "cursor-pointer" : ""}`}
        src={imgSrc}
        width={width ? width : 500}
        height={height ? height : 500}
        alt={alt ? alt : ""}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          setImg("/imgNotFound.webp");
        }}
      />
    </>
  );
}
