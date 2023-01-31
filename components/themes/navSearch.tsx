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
        className={`z-30 fixed transition-all flex flex-col gap-1 p-2 overflow-hidden bg-base-200 shadow-lg md:pl-14 lg:gap-5 lg:h-full lg:w-80 xl:w-96 top-0 lg:left-auto left-0 w-full pl-12 lg:pl-2 ${
          open ? "h-[30rem]" : "h-20 md:h-24"
        }`}
      >
        <div className="flex w-full gap-2 pt-2 lg:flex-col">
          <Link
            href={index.pageUrl.substring(
              0,
              index.pageUrl.length - index.gen.length
            )}
            className="flex lg:bg-neutral lg:text-neutral-content lg:p-2 text-xl group items-center hover:bg-opacity-80 justify-start rounded-none gap-3"
          >
            <Icons
              name="chevron-left"
              className="w-6 h-6 bg-red-700 lg:w-8 lg:h-8 text-neutral-content lg:bg-transparent"
            />
            <p className="hidden transition-all lg:block group-hover:-translate-x-2 lg:text-2xl">
              Volver
            </p>
          </Link>
          <label className="flex border-neutral items-center justify-center w-full h-8 gap-2 p-1 border-2 lg:h-auto bg-slate-100">
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
          <Icons name="menu" className="w-5 h-5 md:w-6 md:h-6" />
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
        <h1 className="text-2xl text-base-content text-center font-semibold font-sharemono">
          {index.name}
        </h1>
        <div
          className={`flex flex-col w-full h-full overflow-x-hidden overflow-y-auto scroll-smooth snap-y scrollbar-thin scrollbar-w-1 scrollbar-thumb-stone-600 scrollbar-track-slate-100`}
        >
          <menu className="flex flex-col w-full h-full gap-1 p-2">
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
                        className={`flex items-center group rounded-none w-full gap-2 py-1 cursor-pointer ${
                          element.gen == actually
                            ? "btn btn-primary font-bold"
                            : "btn btn-secondary"
                        }`}
                      >
                        <Link href={element.pageUrl}>
                          <Icons
                            name="play"
                            className={`xl:min-h-[2rem] min-h-[1rem] min-w-[1rem] lg:min-w-[1.4rem] lg:min-h-[1.4rem] xl:min-w-[2rem]  ${
                              element.gen == actually
                                ? "bg-slate-800 text-slate-50"
                                : "bg-secondary-focus text-secondary-content"
                            }`}
                          />
                        </Link>
                        <b className="ml-auto mr-auto">{element.name}</b>
                      </button>
                      <menu
                        className={`h-0 w-full pl-4 lg:pl-10 ml-6 xl:ml-8 overflow-hidden border-neutral border-l-4 transition-all`}
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
                      className={`flex items-center rounded-none group w-full gap-2 py-1 cursor-pointer ${
                        element.gen == actually
                          ? "btn btn-primary font-bold btn-active"
                          : "btn-secondary btn"
                      }`}
                      href={element.pageUrl}
                    >
                      <Icons
                        name="play"
                        className={`xl:min-h-[2rem] min-h-[1rem] min-w-[1rem] lg:min-w-[1.4rem] lg:min-h-[1.4rem] xl:min-w-[2rem] ${
                          element.gen == actually
                            ? "bg-primary-focus text-slate-50"
                            : "bg-secondary-focus text-secondary-content"
                        }`}
                      />
                      <b className="ml-auto mr-auto">{element.name}</b>
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
