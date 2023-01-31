import { useState } from "react";
import Image from "next/image";
import { ButtonRef } from "./Buttons";
import type { ButtonRefParam } from "./Buttons";

interface option extends ButtonRefParam {
  suboptions?: Array<ButtonRefParam>;
}

interface optionsContext {
  options?: Array<option>;
}

const VerticalNav = ({ options }: optionsContext) => {
  const [navSW, changeSW] = useState(false);
  return (
    <nav className="h-full min-w-[2.5rem] md:min-w-[3rem] lg:min-w-[4rem] flex flex-col gap-2 z-50">
      <div
        className={`${
          navSW
            ? "w-[60%] md:w-[40%] lg:w-[30%] xl:w-[20%]"
            : "w-10 md:w-12 lg:w-16"
        } h-full fixed flex flex-col py-2 bg-base-100 transition-all duration-300`}
      >
        {/* Hambuguer button */}
        <div
          onClick={() => changeSW(!navSW)}
          className={` md:my-2 group hover:opacity-80 transition-all h-10 flex justify-center items-center w-full cursor-pointer overflow-hidden relative mb-1`}
        >
          <div
            className={`${
              navSW
                ? "group-hover:translate-y-0.5 transition-all h-8 -translate-y-0.5 group-hover:rotate-[360deg]"
                : "h-10"
            } w-10 px-0.5 flex flex-col gap-1 items-center justify-center relative overflow-hidden `}
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
          <p
            className={`${
              navSW ? "w-32 group-hover:translate-y-1" : "w-0"
            } transition-all select-none overflow-hidden flex text-lg md:text-xl font-bold text-red-900 justify-center items-center`}
          >
            Cerrar Menu
          </p>
          <span
            className={`${
              navSW ? "h-full w-full" : "h-0 w-0"
            } -z-10 absolute bg-red-400 transition-all border-b-4 border-red-800 group-hover:border-b-0 group-hover:border-t-4`}
          />
        </div>
        {/* logo container */}
        <div className="h-[20%] lg:h-[25%] w-full items-center justify-end flex overflow-hidden transition-all relative flex-col">
          <div
            className={`${
              navSW ? "p-10" : "p-1 md:p-2"
            } transition-all w-full h-full flex justify-center items-center overflow-hidden`}
          >
            <Image
              className="w-full transition-all relative object-cover block z-0"
              src={"/icons/logo.jpg"}
              width={500}
              height={500}
              alt="tecito-logo"
              priority
            />
          </div>
          <a
            href="https://github.com/Repolloezzz"
            className={`${
              navSW ? "w-full text-opacity-100" : "text-opacity-0 w-0"
            } group bg-slate-800/80 min-h-[1.75rem] mt-auto text-white text-md overflow-hidden transition-all flex justify-center items-center z-10 leading-3`}
          >
            <p className="transition-all group-hover:translate-x-3">
              by @RepolloEzzz
            </p>
          </a>
          <span
            className={`${
              navSW ? "w-full" : "w-0"
            } -z-10 absolute min-h-full overflow-hidden bg-white transition-all`}
          />
        </div>
        <hr className="border-4 border-dashed" />
        {/* Opciones del menu */}
        <menu className="flex flex-col w-full pt-5 mt-auto overflow-y-auto h-4/6">
          {options?.map((option: option, indexI: number) => {
            return (
              <li key={indexI}>
                <ButtonRef
                  to={option.to}
                  className={`${
                    navSW
                      ? "md:pl-3 lg:pl-4 xl:pl-5 pl-2 justify-start"
                      : "justify-center py-0.5"
                  } group p-1 text-white gap-2 md:gap-3 lg:gap-5 xl:gap-6 transition-all hover:bg-secondary`}
                  iconName={option.iconName}
                  iconClass={
                    "min-w-[1.7rem] lg:min-w-[2.2rem] group-hover:rotate-6 group-hover:scale-110"
                  }
                  content={option.content}
                  contentClass={`${
                    navSW
                      ? "group-hover:transition-none group-hover:font-semibold"
                      : "hidden"
                  } break-normal overflow-hidden h-4 lg:h-8 overflow-hidden flex text-1.5xl lg:text-2xl transition-all duration-300 item-center leading-3 whitespace-pre-wrap`}
                  onClick={({
                    currentTarget,
                  }: React.MouseEvent<HTMLButtonElement>) => {
                    if (option.suboptions?.length && navSW) {
                      const submenu = currentTarget.nextElementSibling;
                      submenu?.classList.toggle("h-[8rem]");
                    }
                  }}
                />
                {option.suboptions?.length ? (
                  <menu
                    className={`${
                      navSW ? "" : "h-0"
                    } h-0 max-h-32 ml-5 md:ml-6 lg:ml-8 overflow-x-hidden overflow-y-auto transition-all border-l-4 duration-300 scrollbar-thin scrollbar-w-1.5 scrollbar-thumb-yellow-500 scrollbar-track-slate-300`}
                  >
                    {option.suboptions.map(
                      (suboption: ButtonRefParam, indexJ: number) => {
                        return (
                          <li key={indexJ}>
                            <ButtonRef
                              to={suboption.to}
                              className={
                                "text-slate-200 pl-5 hover:bg-tropical-200 hover:pl-9 transition-all duration-200"
                              }
                              content={suboption.content}
                              contentClass={"text-xl"}
                            />
                          </li>
                        );
                      }
                    )}
                  </menu>
                ) : null}
              </li>
            );
          })}
          <li className="mt-auto">
            <ButtonRef
              to="About"
              className={`${
                navSW
                  ? "px-2 md:px-3 lg:px-4 xl:px-5 justify-start "
                  : "justify-center"
              } group p-0.5 md:p-1 lg:p-2 mt-auto gap-2 md:gap-4 lg:gap-5 xl:gap-6 bg-primary text-slate-300 transition-all duration-300 hover:bg-primary-focus`}
              contentClass={`${
                navSW
                  ? "group-hover:transition-none group-hover:font-semibold"
                  : "hidden"
              } break-normal text-withe text-1.5xl lg:text-2xl overflow-hidden h-4 lg:h-8 transition-all duration-300 item-center leading-3 whitespace-pre-wrap`}
              iconClass="min-w-[1.7rem] lg:min-w-[2.2rem] group-hover:rotate-6 group-hover:scale-110"
              content="Sobre TeCitHot"
              iconName="downasaur"
            />
          </li>
        </menu>
      </div>
    </nav>
  );
};

export { VerticalNav };
