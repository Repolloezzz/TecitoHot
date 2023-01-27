
import { Icons } from "./Icons";
import { TitleMove } from "./TitleAnimation";
import { base } from "./../../data/Types";
import { useState, useRef, MutableRefObject, useEffect } from "react";
import style from "../../styles/Selector.module.css";

interface props {
  className?: string;
  id?: string;
  main: base;
  seconds?: Array<base>;
}
const PresentSection = ({
  className = "",
  id = "",
  main,
  seconds = [],
}: props) => {
  const [view, setView] = useState<base>(main);
  const index: MutableRefObject<number> = useRef(-1);
  const [stateButton, setStateButton] = useState(false);
  const transition: MutableRefObject<string | null> = useRef(null);
  const [typeContent, setType] = useState(true);
  const home = useRef(true);
  function changeView(type: string) {
    if (seconds.length === 0) {
      return false;
    }
    setType(true);

    if (type == "left") {
      index.current = index.current - 1;
      if (index.current == -1 || index.current == -2) {
        index.current = seconds.length - 1;
      }
      transition.current = "left";
    } else {
      index.current = index.current + 1;
      if (index.current == seconds.length) {
        index.current = 0;
      }
      transition.current = "right";
    }

    if (seconds[index.current].name === view.name) {
      switch (transition.current) {
        case "left":
          index.current = index.current - 1;
          break;
        default:
          index.current = index.current + 1;
          break;
      }
    }

    setTimeout(() => {
      transition.current = null;
    }, 1000);
    setTimeout(() => {
      setView(seconds[index.current]);
    }, 600);
    setStateButton(true);
    setTimeout(() => setStateButton(false), 1000);
    home.current = false;
  }
  function changeHome(viewBase: base, type: boolean) {
    index.current = -1;
    transition.current = "right";
    setTimeout(() => {
      transition.current = null;
    }, 1000);
    setTimeout(() => {
      setView(viewBase);
    }, 600);
    setStateButton(true);
    setTimeout(() => setStateButton(false), 1000);
    home.current = type;
    setType(true);
  }

  return (
    <section
      id={id}
      className={`box-content relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ${className}`}
    >
      <div className="flex flex-col w-full h-full gap-2 p-2 sm:p-4 md:gap-3 lg:gap-5 md:p-6 lg:p-10">
        <h1
          className={`transition-all text-5xl sm:text-5xl md:text-8xl flex items-center lg:text-9xl text-slate-50 ${style.titleShake}`}
        >
          <Icons name="play" />
          <TitleMove
            content={main.name}
            className="hover:bg-slate-100 hover:text-slate-800"
          />
        </h1>
        <div
          className={`box-content flex flex-col w-full h-full overflow-hidden sm:flex-row`}
        >
          <div className="flex flex-col items-center justify-center h-[45%] sm:h-full max-h-[40%] sm:max-h-min w-full sm:w-auto">
            <picture className="relative flex items-center justify-center h-full p-2 overflow-hidden md:p-5 lg:p-10 w-3/4 bg-stone-800 min-w-[25%] md:w-auto">
              <img
                className={`object-cover w-full h-full cursor-pointer select-none md:h-min md:w-min ${
                  transition.current != null ? `${style.imgTransition}` : ""
                }`}
                src={`${view.imgUrl}`}
                alt={`${view.name}-icon`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/imgNotFound.webp";
                }}
              />
            </picture>
          </div>
          <div className="box-content flex flex-col items-center w-full h-full overflow-hidden md:w-3/4">
            <div className="flex w-full bg-slate-200 min-h-[10%] overflow-hidden relative">
              <span
                className={`absolute w-full h-full bg-stone-800 opacity-0 ${
                  transition.current != null
                    ? transition.current == "left"
                      ? `${style.changeButtonLeft}`
                      : `${style.changeButtonRight}`
                    : ""
                }`}
              ></span>
              <button
                disabled={stateButton}
                onClick={() => {
                  changeView("left");
                  console.log(seconds);
                }}
                className="z-10 transition-all mr-auto hover:bg-stone-800 hover:text-slate-100 min-w-[10%] md:min-w[20%] flex justify-center items-center hover:scale-125"
              >
                <Icons
                  name="chevron-left"
                  className="w-6 h-6 lg:w-8 lg:h-8 md:w-7 md:h-7"
                />
              </button>
              <p
                className={`flex z-10 leading-3 items-center justify-center w-full overflow-hidden p-3 text-xl min-h-[10%] md:text-3xl lg:text-3xl text-center ${
                  transition.current != null ? `${style.titleTransition}` : ""
                }`}
              >
                {home.current ? "Descripción" : view.name}
              </p>
              <button
                disabled={stateButton}
                onClick={() => {
                  changeView("right");
                }}
                className="z-10 transition-all ml-auto hover:bg-stone-800 hover:text-slate-100 min-w-[10%] md:min-w[20%] flex justify-center items-center hover:scale-125"
              >
                <Icons
                  name="chevron-right"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                />
              </button>
            </div>
            <div className="flex flex-col w-full gap-5 bg-slate-200/50 min-h-[90%]">
              <div className="w-full overflow-y-auto scrollbar-thin scrollbar-w-1 md:scrollbar-w-2 lg:scrollbar-w-3 scrollbar-thumb-stone-800 scrollbar-track-slate-100">
                {typeContent ? (
                  <p className="p-3 overflow-y-auto text-xl text-justify lg:p-6 md:p-4 md:text-2xl lg:text-3xl">
                    {view.description}
                  </p>
                ) : (
                  <menu className="flex flex-col gap-2 p-3 overflow-y-auto text-xl text-justify list-decimal lg:p-6 md:p-4 md:text-2xl lg:text-3xl">
                    {seconds.map((theme: base, index: number) => {
                      return (
                        <li
                          className="font-medium transition-all cursor-pointer hover:translate-x-3"
                          onClick={() => {
                            changeHome(theme, false);
                            setType(true);
                          }}
                          key={index}
                        >
                          {theme.name}
                        </li>
                      );
                    })}
                  </menu>
                )}
              </div>
              <div className="flex justify-end w-full gap-5 p-2 mt-auto md:p-3 lg:p-5 bg-slate-200">
                {home.current ? (
                  <button
                    onClick={() => setType(!typeContent)}
                    className={`p-1 text-xl transition-all cursor-pointer select-none hover:scale-110 md:text-2xl lg:text-4xl bg-slate-700 text-slate-100`}
                  >
                    {typeContent ? "Ver Lista" : "Ver descripción"}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      changeHome(main, true);
                    }}
                    className={`p-1 z-10 text-xl flex items-center transition-all cursor-pointer select-none hover:scale-110 md:text-2xl lg:text-4xl bg-slate-700 text-slate-100`}
                  >
                    <Icons
                      name="article"
                      className="w-7 h-7 sm:w-10 sm:h-10 md:w-10 md:h-10 bg-stone-800"
                    />
                    <p>Volver</p>
                  </button>
                )}
                <a
                  href={view.pageUrl}
                  className={` p-1 text-xl transition-all cursor-pointer select-none hover:scale-110 md:text-2xl lg:text-4xl bg-slate-700 text-slate-100`}
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PresentSection };
