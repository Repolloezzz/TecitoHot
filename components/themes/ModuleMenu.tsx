import type { SubTheme } from "../../data/Types";
import { useThemeContext } from "../../context/ThemeContent";
import { LightOptions, DarkOptions } from "../../context/ThemeContent";
import { PixelIcons } from "../global/Icons";
import { useRef, useState } from "react";
import Link from "next/link";
import React from "react";
interface context {
  title: string;
  options: SubTheme[];
  className: string;
  actually: string;
}
const ModuleMenu = ({ title, className, options, actually }: context) => {
  const { changeTheme, themeContent } = useThemeContext();
  const focusSearch = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  options.sort((a, b) => a.index - b.index);
  return (
    <>
      <nav
        className={`bg-base-100 max-h-[95vh] flex flex-col lg:min-w-[35%] lg:p-4 xl:p-7 sticky top-16 bottom-0 overflow-y-hidden z-30 ${className}`}
      >
        {/* Button for Small */}
        <button
          onClick={() => setOpen(!open)}
          className="flex gap-2 items-center p-2 px-5 btn btn-outline btn-primary rounded-none justify-start lg:hidden"
        >
          <PixelIcons name="menu" className="w-5 h-5" />
          <span className="text-base">Menú de contenido</span>
          <PixelIcons
            name="chevron-right"
            className={`w-4 h-4 transition-all ${
              open ? "rotate-90" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`${
            open ? "h-[32rem]" : "h-0"
          } overflow-hidden lg:overflow-visible lg:h-auto border-b-4 md:border-b-8 border-primary`}
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center">
            {title}
          </h1>
          <div
            onClick={() => {
              focusSearch?.current?.focus();
            }}
            className={`flex w-full bg-neutral-focus p-2 items-center gap-2`}
          >
            <PixelIcons name="search" className="w-4 h-4 lg:w-5 lg:h-5" />
            <input
              ref={focusSearch}
              className="w-full outline-0 bg-transparent text-lg md:text-xl"
              type={"text"}
              placeholder="Buscar contenido"
            />
          </div>
          {/* Toggle for Theme */}
          <div className="flex flex-col alert alert-info p-0 rounded-none">
            <div className="form-control w-52">
              <label className="cursor-pointer label flex gap-10">
                <PixelIcons name="info-box" className="w-5 h-5" />
                <span className="label-text min-w-max text-lg lg:text-xl">
                  Contenido Claro?
                </span>
                <input
                  type="checkbox"
                  className="toggle toggle-success toggle-sm md:toggle-md rounded-none"
                  checked={themeContent.is}
                  onChange={() =>
                    changeTheme({
                      theme: !themeContent.is
                        ? LightOptions[1]
                        : DarkOptions[0],
                      is: !themeContent.is,
                    })
                  }
                />
              </label>
            </div>
          </div>
          <div className="divider"></div>
          <menu className="w-full h-[18rem] lg:h-[60vh] gap-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-w-1 scrollbar-thumb-stone-600 scrollbar-track-stone-800 md:scrollbar-w-2 box-content">
            {options.map((element, index) => {
              return (
                <li key={index} className={`flex flex-col p-0 relative`}>
                  <div
                    onClick={({ currentTarget }) => {
                      currentTarget.nextElementSibling?.classList.toggle(
                        "max-h-[0px]"
                      );
                      currentTarget.nextElementSibling?.classList.toggle(
                        "pb-2"
                      );
                    }}
                    className={`text-lg lg:text-xl font-medium p-0 rounded-none btn btn-sm md:btn-md ${
                      element.gen == actually ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {element.name}
                  </div>
                  <div className="flex flex-col bg-slate-100/20 pl-4 overflow-hidden max-h-[0px]">
                    <Link
                      href={element.pageUrl}
                      className="flex gap-2 items-center hover:scale-105 transition-all"
                    >
                      <PixelIcons name="label-alt" className="w-5 h-5" />
                      <span className="lg:text-1.5xl">Inicio de página</span>
                    </Link>
                    {element.sections?.map((section, index) => {
                      return (
                        <Link
                          key={index}
                          href={`${element.pageUrl}/#${section}`}
                          className="flex items-center border-l-4 pl-5 ml-2 text-lg lg:text-xl hover:bg-neutral-focus hover:translate-x-2 transition-all gap-2 group overflow-hidden"
                        >
                          <span className="border-2 flex items-center justify-center group-hover:scale-125 w-4 h-4 lg:w-5 lg:h-5">
                            {index+1}
                          </span>
                          <span>{section}</span>
                        </Link>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </menu>
        </div>
      </nav>
    </>
  );
};

export default ModuleMenu;
