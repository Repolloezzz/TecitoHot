import { Icons } from "../global/Icons";
import { LComment } from "./Comments";
import { useState } from "react";
export function ImportantBox({
  title,
  comment,
  children,
  color,
  className,
  icon,
}: {
  title: string;
  comment?: string;
  children?: any;
  color?: string;
  className: string;
  icon?: string;
}) {
  let style: string[] = [];
  switch (color) {
    case "red":
      style.push("bg-red-300");
      style.push("bg-red-700");
      style.push("text-red-600");
      style.push("border-red-700");
      break;
    case "orange":
      style.push("bg-orange-300/70");
      style.push("bg-orange-400");
      style.push("text-orange-800");
      style.push("border-orange-700");
      break;
    case "green":
      style.push("bg-red-300");
      style.push("text-red-600");
      style.push("border-red-700");
      break;
    case "pink":
      style.push("bg-red-300");
      style.push("text-red-600");
      style.push("border-red-700");
      break;

    default:
      style.push("bg-slate-300");
      style.push("text-slate-600");
      style.push("border-slate-700");
      break;
  }

  return (
    <div
      className={`w-full ${style[0]} group p-1 lg:p-3 border-l-4 ${style[3]} ${
        className ? className : ""
      }`}
    >
      <h1
        className={`${style[2]} text-2xl lg:text-3xl font-semibold flex gap-1 md:gap-2 items-center`}
      >
        <Icons
          name={`${icon ? icon : "align-justify"}`}
          className={`group-hover:scale-125 group-hover:-translate-y-1 transition-all lg:min-w-[2rem] min-w-[1.25rem] min-h-[1.25rem] lg:min-h-[2rem] ${style[0]} ${style[1]}`}
        />
        <p>{title}</p>
      </h1>
      <div className="pr-3 pl-7 lg:px-10">
        {comment ? <LComment txt={comment} /> : null}
        <div className="text-base text-justify md:text-lg lg:text-xl">
          {children}
        </div>
      </div>
    </div>
  );
}

export function BoxwC({
  comment,
  children,
  className,
  boxStyle,
}: {
  comment?: string;
  className?: string;
  children?: any;
  boxStyle: string;
}) {
  return (
    <div
      className={`${
        className ? className : ""
      } w-full p-4 flex flex-col items-center`}
    >
      <div className={`flex w-full ${boxStyle ? boxStyle : ""}`}>
        {children}
      </div>
      {comment ? <LComment txt={comment} /> : null}
    </div>
  );
}

interface Section {
  name: string;
  section: JSX.Element;
}

export function ButtonBox({ data, className = "" }: any) {
  const [page, setPage] = useState(0);
  return (
    <div className={`${className}`}>
      <div className={`flex overflow-x-auto border-2 border-black`}>
        {data.map((element: Section, index: number) => {
          return (
            <button
              onClick={() => {
                setPage(index);
              }}
              className={`w-full px-2 p-0.5 md:p-2 text-base md:text-xl transition-all text-slate-50 hover:bg-slate-300 ${
                index == page ? "bg-slate-200 text-black" : "bg-slate-700 text-slate-50"
              }`}
              key={index}
            >
              {element.name}
            </button>
          );
        })}
      </div>
      <div>{data[page].section ? data[page].section : null}</div>
    </div>
  );
}

export function ChordBox({
  className,
  h1Class,
  title,
  children,
  initial = false,
}: {
  className?: string;
  title: string;
  h1Class?: string;
  children: any;
  initial: boolean;
}) {
  const [open, setOpen] = useState(initial);
  return (
    <div className={`border-l-4 p-3 ${className} group overflow-hidden`}>
      <h1
        onClick={() => {
          setOpen(!open);
        }}
        className={`w-full flex gap-5 md:gap-4 lg:gap-3 text-start items-center cursor-pointer text-xl md:text-2xl transition-all ${
          open ? "mb-2" : "mb-0"
        }`}
      >
        <Icons
          name="add-box"
          className={`min-w-[1.5rem] min-h-[1.5rem] group-hover:scale-125 transition-all md:min-w-[1.75rem] md:min-h-[1.75rem] lg:min-h-[2rem] lg:min-w-[2rem] ${
            open ? "rotate-45" : ""
          }`}
        />
        <p>{title}</p>
      </h1>
      <div
        className={`${
          open ? "h-max" : "h-0"
        } overflow-hidden text-sm md:text-lg ${h1Class}`}
      >
        {children}
      </div>
    </div>
  );
}
export function SimpleBox({
  className,
  h1Class,
  title,
  children,
}: {
  className?: string;
  title?: string;
  h1Class?: string;
  children: any;
}) {
  return (
    <div
      className={`border-l-4 p-3 ${className ? className : ""} overflow-hidden`}
    >
      {title ? (
        <h1
          className={`w-full mb-2 text-xl md:text-2xl ${
            h1Class ? h1Class : ""
          }`}
        >
          {title}
        </h1>
      ) : null}
      <div className={`text-sm md:text-lg`}>{children}</div>
    </div>
  );
}
