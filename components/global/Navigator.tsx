import { useState } from "react";
import Image from "next/image";
import { ButtonRef } from "./ButtonRef";
import type { ButtonRefParam } from "./ButtonRef";

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
        } h-full fixed flex flex-col py-2 bg-stone-800 transition-all duration-300`}
      >
        <div
          onClick={() => changeSW(!navSW)}
          className={` md:my-2 group hover:opacity-80 transition-all duration-300 h-10 flex justify-center items-center w-full cursor-pointer group overflow-hidden relative mb-1`}
        >
          <div
            className={`${
              navSW
                ? "group-hover:translate-y-0.5 transition-all h-8 -translate-y-0.5 group-hover:rotate-[360deg] group-hover:duration-500:"
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
                  : "group-hover:w-1/2 w-full"
              }`}
            />
          </div>
          <p
            className={`${
              navSW
                ? "w-32 group-hover:translate-y-0.5 -translate-y-0.5"
                : "w-0"
            } transition-all select-none overflow-hidden flex text-lg font-bold text-red-900 justify-center items-center leading-3`}
          >
            Cerrar Menu
          </p>
          <span
            className={`${
              navSW ? "h-full w-full" : "h-0 w-0"
            } -z-10 absolute bg-red-400 transition-all border-b-4 border-red-800 group-hover:border-b-0 group-hover:border-t-4`}
          />
        </div>
        <div className="h-[20%] lg:h-[25%] w-full items-center flex justify-center transition-all relative overflow-hidden flex-col">
          <Image
            className={`${
              navSW ? "w-3/4 h-3/4 md:p-2" : "w-8 md:w-10 lg:w-12"
            }transition-all object-cover`}
            src={"/logo.jpg"}
            width={500}
            height={500}
            alt="tecito-logo"
            priority
          />
          <a
            href="https://github.com/Repolloezzz"
            className={`${
              navSW
                ? "w-full h-7 mt-auto text-opacity-100"
                : "w-0 h-0 text-opacity-0"
            } group bg-stone-500 text-slate-50 text-md overflow-hidden transition-all flex justify-center items-center leading-3`}
          >
            <p className="transition-all group-hover:translate-x-3">
              by @RepolloEzzz
            </p>
          </a>
          <span
            className={`${
              navSW ? "h-full w-full" : "h-0 w-0"
            } -z-10 absolute bg-stone-100 transition-all`}
          />
        </div>
        <hr className="border-4 border-dashed" />
        <menu className="flex flex-col w-full pt-5 mt-auto overflow-y-auto h-4/6">
          {options?.map((option: option, indexI: number) => {
            return (
              <li key={indexI}>
                <ButtonRef
                  to={option.to}
                  className={`${
                    navSW
                      ? "gap-2 md:gap-3 lg:gap-5 xl:gap-6 md:px-3 lg:px-4 xl:px-5 hover:gap-5 px-2"
                      : "justify-center"
                  } group p-0.5 text-slate-300 justify-start transition-all duration-300 hover:duration-100 hover:bg-yellow-500 hover:text-slate-800`}
                  iconName={option.iconName}
                  iconClass={
                    "min-w-[1.7rem] lg:min-w-[2.2rem] group-hover:rotate-6 group-hover:scale-110"
                  }
                  content={option.content}
                  contentClass={`${
                    navSW
                      ? "text-1.5xl lg:text-2xl opacity-100 group-hover:transition-none group-hover:font-semibold group-hover:text-slate-800 text-slate-200"
                      : "h-0 w-0 text-sm opacity-0"
                  } break-normal overflow-hidden flex transition-all duration-300 item-center leading-3 whitespace-pre-wrap`}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (
                      option.suboptions?.length != undefined &&
                      option.suboptions.length >= 0 &&
                      navSW
                    ) {
                      const submenu = e.currentTarget.nextElementSibling;
                      submenu?.classList.toggle("h-[8rem]");
                    }
                  }}
                />
                {option.suboptions?.length != undefined &&
                option.suboptions?.length >= 0 ? (
                  <menu
                    className={`${
                      navSW ? "" : "h-0"
                    } h-0 max-h-32 ml-6 overflow-x-hidden overflow-y-auto transition-all border-l-4 duration-300 scrollbar-thin scrollbar-w-1.5 scrollbar-thumb-yellow-500 scrollbar-track-slate-300`}
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
                  ? "gap-2 md:gap-4 lg:gap-5 xl:gap-6 px-2 md:px-3 lg:px-4 xl:px-5 hover:gap-5"
                  : "justify-center"
              } group p-0.5 md:p-1 lg:p-2 mt-auto bg-teal-700 text-slate-300 justify-start transition-all duration-300 hover:bg-lime-600 hover:text-slate-800`}
              contentClass={`${
                navSW
                  ? "text-1.5xl lg:text-2xl opacity-100 group-hover:transition-none"
                  : "h-0 w-0 text-sm opacity-0"
              } break-normal overflow-hidden flex transition-all duration-300 item-center leading-3 whitespace-pre-wrap`}
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
