// * Modulos, datos y tipos
import Link from "next/link";
import { useState } from "react";
import type { base } from "../../data/Types";
import { allData as defaultData } from "../../data/main";
import { DiGithubBadge } from "react-icons/di";

// * Componentes
import { PixelIcons } from "../global/Icons";

const HeadNav = () => {
  const [navSW, changeSW] = useState(false);
  const navFormatData = defaultData?.map((matter: base) => {
    return matter;
  });
  return (
    <header className={`navbar sticky top-0 transition-all bg-base-100 z-50`}>
      <div className="flex-1 z-10">
        <Link
          href={"/"}
          id="LogoContainer"
          className="select-none h-full bg-primary flex items-center text-3xl px-1 lg:text-5xl lg:px-5"
        >
          <b className="text-white">TeCito</b>
          <b className="text-orange-400">Hot</b>
        </Link>
      </div>
      {/* Button */}
      <div
        onClick={() => changeSW(!navSW)}
        className={`w-10 px-0.5 h-10 flex transition-all flex-col gap-1 items-center justify-center relative overflow-hidden lg:hidden`}
      >
        <span
          className={`h-1 bg-yellow-400 transition-all duration-500  ${
            navSW
              ? "absolute rotate-[45deg] md:h-1.5 w-6"
              : "group-hover:w-3/4 w-full"
          }`}
        />
        <span
          className={`h-1 bg-yellow-400 transition-all duration-700 ${
            navSW ? "w-0" : "w-full"
          }`}
        />
        <span
          className={`h-1 bg-yellow-400 transition-all duration-300  ${
            navSW
              ? "absolute -rotate-[225deg] md:h-1.5 w-6"
              : "group-hover:w-3/4 w-full"
          }`}
        />
      </div>
      {/* Opciones */}
      <div
        className={`${
          navSW ? "w-3/4 sm:w-1/2 md:w-2/5" : "w-0 px-0"
        } flex flex-col p-5 pb-20 overflow-hidden transition-all gap-2 absolute top-16 right-0 bg-base-100/95 h-screen lg:flex-row lg:static lg:bg-none lg:h-auto lg:w-auto lg:overflow-visible lg:p-0`}
      >
        <menu className="grid grid-cols-1 menu menu-vertical overflow-y-auto lg:menu-horizontal w-full lg:w-auto order-2 lg:order-1 lg:flex box-content lg:overflow-y-visible">
          <li className="text-xl rounded-none">
            <Link
              href="/"
              className="flex item-center justify-start lg:justify-center gap-1"
            >
              <PixelIcons name="home" className="w-6 h-6" />
              <p className="mx-auto lg:mx-0">Inicio</p>
            </Link>
          </li>
          <li tabIndex={0} className="text-xl rounded-none block">
            <Link
              href={"#Materias"}
              className="flex item-center justify-start lg:justify-center gap-1"
            >
              <PixelIcons name="downasaur" className="w-6 h-6" />
              <p className="mx-auto lg:mx-0">Materias</p>
            </Link>
            <ul className="bg-base-100/80 left-0 relative border-l-2 ml-6 lg:absolute lg:m-0 lg:border-none overflow-y-auto max-h-[15rem] scrollbar-w-1 scrollbar-thumb-slate-100 scrollbar-thin">
              {navFormatData?.map((item: base, index: number) => {
                return (
                  <li key={index}>
                    <Link
                      className="text-xl flex justify-center"
                      href={item.pageUrl}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="text-xl rounded-none">
            <Link
              href="/Recursos"
              className="flex item-center justify-start lg:justify-center gap-1"
            >
              <PixelIcons name="folder-plus" className="w-6 h-6" />
              <p className="mx-auto lg:mx-0">Recursos</p>
            </Link>
          </li>
          <li className="text-xl rounded-none">
            <Link
              href="/Aplicaciones"
              className="flex item-center justify-start lg:justify-center gap-1"
            >
              <PixelIcons name="calculator" className="w-6 h-6" />
              <p className="mx-auto lg:mx-0">Aplicaciones</p>
            </Link>
          </li>
        </menu>
        <div className="order-1 flex item-center lg:gap-2 justify-center items-center relative w-full mb-5 lg:order-2 lg:m-0 lg:w-auto">
          <a className="btn text-xs font-dotgot gap-2 p-2 w-3/4 rounded-none lg:w-auto btn-outline lg:btn-ghost">
            <PixelIcons
              name="search"
              className="w-4 h-4 lg:w-7 lg:h-7 lg:text-slate-100"
            />
            <p className="lg:hidden">Buscar</p>
          </a>
          <a
            href="https://github.com/Repolloezzz/tecitohot--ts"
            className="btn btn-ghost m-0 p-1 btn-circle avatar w-1/4 lg:w-auto"
          >
            <DiGithubBadge className="w-10 h-10 lg:text-slate-100" />
          </a>
        </div>
      </div>
    </header>
  );
};
export default HeadNav;
