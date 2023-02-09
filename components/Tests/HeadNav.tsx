// * Modulos, datos y tipos
import Link from "next/link";
import { useState } from "react";
import type { base } from "../../data/Types";

// * Componentes
import { Icons } from "../global/Icons";

interface context {
  options?: base[];
}
const HeadNav = ({ options }: context) => {
  const [navSW, changeSW] = useState(false);
  return (
    <div className={`navbar sticky top-0 transition-all bg-base-100`}>
      <div className="flex-1 z-10">
        <a
          id="LogoContainer"
          className="select-none h-full bg-primary flex items-center text-3xl px-1 lg:text-5xl lg:px-5"
        >
          <b className="text-white">TeCito</b>
          <b className="text-orange-400">Hot</b>
        </a>
      </div>
      {/* Button */}
      <a className="btn btn-ghost rounded-none lg:hidden">
        <Icons name="search" className="w-5 h-5 lg:w-8 lg:h-8 text-white" />
      </a>
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
          navSW ? "w-3/4 pl-5 lg:p-0" : "w-0"
        } overflow-hidden transition-all flex-col pt-32 gap-2 absolute top-12 right-0 bg-base-100 h-screen lg:flex-row lg:static lg:bg-none lg:h-auto lg:w-auto lg:overflow-visible lg:p-0`}
      >
        <menu className="flex menu menu-vertical lg:menu-horizontal w-full lg:w-auto">
          <li className="text-xl rounded-none">
            <Link
              href="/"
              className="flex item-center justify-start lg:justify-center gap-1"
            >
              <Icons name="home" className="w-6 h-6" />
              <p>Inicio</p>
            </Link>
          </li>
          <li tabIndex={0} className="text-xl rounded-none block">
            <Link
              href={"#Materias"}
              className="flex item-center justify-start lg:justify-center gap-1"
            >
              <Icons name="downasaur" className="w-6 h-6" />
              <p>Materias</p>
            </Link>
            <ul className="bg-base-100/50 left-0 relative border-l-2 ml-6 lg:absolute lg:m-0 lg:border-none">
              {options?.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="text-xl flex justify-start lg:justify-center"
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
              <Icons name="folder-plus" className="w-6 h-6" />
              <p>Recursos</p>
            </Link>
          </li>
          <li className="text-xl rounded-none">
            <Link
              href="/Aplicaciones"
              className="flex item-center justify-start lg:justify-center gap-1"
            >
              <Icons name="calculator" className="w-6 h-6" />
              <p>Aplicaciones</p>
            </Link>
          </li>
        </menu>
        <a className="btn btn-ghost rounded-none hidden lg:flex">
          <Icons name="search" className="w-5 h-5 lg:w-8 lg:h-8 text-white" />
        </a>
        <a
          href="https://github.com/Repolloezzz/tecitohot--ts"
          className="btn btn-ghost m-0 p-0 btn-circle avatar mt-auto mb-20 lg:m-0"
        >
          <picture className="w-8 rounded-full bg-white overflow-hidden">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub-Icon"
            />
          </picture>
        </a>
      </div>
    </div>
  );
};
export default HeadNav;

/**
 * <header data-theme="forest" className="navbar bg-neutral w-full flex">
      <div
        id="LogoContainer"
        className="h-full bg-primary text-6xl flex items-center px-5"
      >
        <b className="text-white">TeCito</b>
        <b className="text-orange-500">Hot</b>
      </div>
      <picture className="avatar w-10 bg-white rounded-full p-0.5">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt='GitHub-Icon'/>
      </picture>
    </header>
 */
