import { Icons } from "./Icons";
import { useState } from "react";
import Image from "next/image";

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
    <div className="relative overflow-hidden">
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
            className={`${
              className ? className : ""
            } w-[90%] lg:w-auto lg:h-3/4`}
            src={imgSrc}
            width={width ? width : 500}
            height={height ? height : 500}
            alt={alt ? alt : ""}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              setImg("/imgNotFound.webp");
            }}
          />
          <p className="text-lg text-center md:text-xl lg:text-2xl text-slate-100">
            {alt}
          </p>
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
    </div>
  );
}
