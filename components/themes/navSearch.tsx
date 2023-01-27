import { Icons } from "../global/Icons";
import type { generator } from "../../data/Types";
import Link from "next/link";
import { useState } from "react";
import { SubTheme } from "./../../data/Types";

export function NavSearch({
  index,
  props,
  actually,
}: {
  index: generator;
  props: SubTheme[];
  actually: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`z-30 fixed transition-all flex flex-col gap-1 p-2 overflow-hidden shadow-lg lg:gap-5 lg:p-4 lg:h-full bg-slate-50 lg:w-80 xl:w-96 top-0 lg:left-auto left-0 w-full pl-12 lg:pl-4 ${
          open ? "h-[30rem]" : "h-20 md:h-24"
        }`}
      >
        <div className="flex w-full gap-2 pt-2 lg:flex-col">
          <Link
            href={index.pageUrl.substring(
              0,
              index.pageUrl.length - index.gen.length
            )}
            className="flex items-center gap-3 transition-all group hover:bg-slate-100"
          >
            <Icons
              name="chevron-left"
              className="w-6 h-6 bg-red-700 lg:w-8 lg:h-8 text-slate-100 lg:bg-transparent lg:text-slate-700"
            />
            <p className="hidden transition-all lg:block lg:text-2xl group-hover:-translate-x-4">
              Volver
            </p>
          </Link>
          <label className="flex items-center justify-center w-full h-8 gap-2 p-1 border-2 lg:h-auto bg-slate-100 focus:bg-red border-slate-300">
            <Icons
              name="search"
              className="min-w-[1rem] h-4 lg:h-6 lg:w-6 text-slate-600"
            />
            <input
              type={"text"}
              alt="Busqueda de Contenido"
              placeholder="Buscar..."
              className="w-full text-lg bg-transparent outline-none lg:text-xl focus:border-0 placeholder:text-slate-600"
            />
          </label>
        </div>
        <span
          className="flex items-center gap-1 cursor-pointer w-max lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <Icons name="open" className="w-5 h-5 md:w-6 md:h-6" />
          <p className="flex items-center justify-center text-lg md:text-2xl">
            Menu
          </p>
          <Icons
            name="chevron-right"
            className={`w-4 h-4 md:w-5 md:h-5 transition-all ${
              open ? "rotate-90" : ""
            }`}
          />
        </span>
        <h1 className="text-2xl font-semibold font-sharemono">{index.name}</h1>
        <div
          className={`flex flex-col w-full h-full overflow-x-hidden overflow-y-auto scroll-smooth snap-y scrollbar-thin scrollbar-w-1 md:scrollbar-w-2 lg:scrollbar-w-3 scrollbar-thumb-stone-600 scrollbar-track-slate-100`}
        >
          <menu className="flex flex-col w-full h-full gap-1 py-2 pl-1 border-l-4 lg:pl-3">
            {props.map((element: SubTheme, index: number) => {
              return (
                <li key={index}>
                  {element.sections != undefined &&
                  element.sections.length > 0 ? (
                    <>
                      <button
                        onClick={({ currentTarget }) => {
                          const submenu = currentTarget.nextElementSibling;
                          submenu?.classList.toggle("h-min");
                        }}
                        className={`flex items-center group justify-center w-full gap-2 py-1 cursor-pointer ${
                          element.gen == actually
                            ? "bg-slate-800 hover:bg-slate-400 font-bold"
                            : "bg-slate-100 hover:bg-slate-200"
                        }`}
                      >
                        <Link href={element.pageUrl}>
                          <Icons
                            name="play"
                            className={`xl:min-h-[2rem] min-h-[1rem] min-w-[1rem] lg:min-w-[1.4rem] lg:min-h-[1.4rem] xl:min-w-[2rem] text-slate-50 bg-slate-800 ${
                              element.gen == actually
                                ? "text-slate-100 bg-slate-100"
                                : "text-slate-100 bg-slate-700"
                            }`}
                          />
                        </Link>
                        <p
                          className={`w-full text-center ${
                            element.gen == actually ? "text-slate-100" : ""
                          }`}
                        >
                          {element.name}
                        </p>
                      </button>
                      <menu
                        className={`h-0 w-full pl-4 lg:pl-10 ml-3 overflow-hidden border-l-4 transition-all`}
                      >
                        {element.sections?.map(
                          (section: string, index: number) => {
                            return (
                              <li key={index}>
                                <Link
                                  className="block w-full text-base transition-all hover:translate-x-3 lg:text-xl"
                                  href={`${element.pageUrl}#${section}`}
                                >
                                  {section}
                                </Link>
                              </li>
                            );
                          }
                        )}
                      </menu>
                    </>
                  ) : (
                    <Link
                      className={`flex items-center group justify-center w-full gap-2 py-1 cursor-pointer ${
                        element.gen == actually
                          ? "bg-slate-800 hover:bg-slate-500 font-bold"
                          : "bg-slate-100 hover:bg-slate-200"
                      }`}
                      href={element.pageUrl}
                    >
                      <Icons
                        name="play"
                        className={`xl:min-h-[2rem] min-h-[1rem] min-w-[1rem] lg:min-w-[1.4rem] lg:min-h-[1.4rem] xl:min-w-[2rem] text-slate-50 bg-slate-800 ${
                          element.gen == actually
                            ? "text-slate-100 bg-slate-100"
                            : "text-slate-100 bg-slate-700"
                        }`}
                      />
                      <p
                        className={`w-full text-center ${
                          element.gen == actually ? "text-slate-100" : ""
                        }`}
                      >
                        {element.name}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </menu>
        </div>
      </nav>
      <span className="lg:min-w-[20rem] xl:min-w-[24rem] w-full lg:w-auto min-h-[5rem] lg:min-h-0 md:min-h-[6rem]" />
    </>
  );
}
