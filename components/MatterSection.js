import { ClickScale } from "./TitleMove";
import { Icons } from "./Icons";
import style from "../styles/Selector.module.css";
import { useRef, useState } from "react";

export function MatterSection({ object = {}, className, id }) {
  const [view, setView] = useState(object);
  const index = useRef(-1);
  const [stateButton, setStateButton] = useState(false);
  const transition = useRef(null);
  const home = useRef(true);
  function changeView(type) {
    if (type == "left") {
      index.current = index.current - 1;
      if (index.current == -1 || index.current == -2) {
        index.current = object.themes.length - 1;
      }
      transition.current = "left";
    } else {
      index.current = index.current + 1;
      if (index.current == object.themes.length) {
        index.current = 0;
      }
      transition.current = "right";
    }
    setTimeout(() => {
      transition.current = null;
    }, 1000);
    setTimeout(() => {
      setView(object.themes[index.current]);
    }, 600);
    setStateButton(true);
    setTimeout(() => setStateButton(false), 1000);
    home.current = false;
  }
  function changeHome() {
    index.current = -1;
    transition.current = "right";
    setTimeout(() => {
      transition.current = null;
    }, 1000);
    setTimeout(() => {
      setView(object);
    }, 600);
    setStateButton(true);
    setTimeout(() => setStateButton(false), 1000);
    home.current = true;
  }

  return (
    <section
      id={id}
      className={`box-content relative flex flex-col items-center justify-center w-full h-screen overflow-hidden ${className}`}
    >
      <div className="flex flex-col w-full h-full gap-2 p-4 md:gap-3 lg:gap-5 md:p-6 lg:p-10">
        <h1
          className={`transition-all text-6xl md:text-8xl lg:text-9xl text-slate-50 ${style.titleShake}`}
        >
          <ClickScale title={object.name} />
        </h1>
        <div
          className={`box-content flex flex-col w-full h-full overflow-hidden ${className} md:flex-row`}
        >
          {!home.current ? (
            <button
              onClick={changeHome}
              className={`p-1 z-10 absolute text-xl transition-all cursor-pointer select-none hover:scale-110 md:text-2xl lg:text-4xl bg-slate-700 text-slate-100`}
            >
              <Icons
                name="article"
                className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12"
              />
            </button>
          ) : null}
          <div className="flex flex-col items-center justify-center h-[45%] md:h-full max-h-[40%] md:max-h-min w-full md:w-auto">
            <picture className="relative flex items-center justify-center h-full p-2 overflow-hidden md:p-5 lg:p-10 w-3/4 bg-vector-100 min-w-[25%] md:w-auto">
              <img
                className={`object-cover w-full h-full cursor-pointer select-none md:h-min md:w-min ${
                  transition.current != null ? `${style.imgTransition}` : ""
                }`}
                src={view.img}
                alt={`${view.name}-icon`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/themes/NotFoundIMG.webp";
                }}
              />
            </picture>
          </div>
          <div className="box-content flex flex-col items-center w-full h-full overflow-hidden md:w-3/4">
            <div className="flex w-full bg-slate-200 lg:min-h-[10%] overflow-hidden relative">
              <span
                className={`absolute w-full h-full bg-vector-100 opacity-0 ${
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
                }}
                className="z-10 transition-all mr-auto hover:bg-vector-100 hover:text-slate-100 min-w-[20%] flex justify-center items-center hover:scale-125"
              >
                <Icons
                  name="chevron-left"
                  className="w-6 h-6 lg:w-8 lg:h-8 md:w-7 md:h-7"
                />
              </button>
              <p
                className={`flex z-10 items-center justify-center w-full overflow-hidden p-3 text-xl min-h-[10%] md:text-3xl lg:text-3xl ${
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
                className="z-10 transition-all ml-auto hover:bg-vector-100 hover:text-slate-100 min-w-[20%] flex justify-center items-center hover:scale-125"
              >
                <Icons
                  name="chevron-right"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                />
              </button>
            </div>
            <div className="flex flex-col w-full gap-5 bg-alphaSlate-100 min-h-[90%]">
              <div className="w-full overflow-y-auto">
                <p className="p-3 overflow-y-auto text-xl text-justify lg:p-6 md:p-4 md:text-2xl lg:text-3xl">
                  {view.description}
                </p>
              </div>
              <div className="flex w-full gap-5 p-2 mt-auto md:p-3 lg:p-5">
                {home.current ? (
                  <a
                    className={`p-1 ml-auto text-xl transition-all cursor-pointer select-none hover:scale-110 md:text-2xl lg:text-4xl bg-slate-700 text-slate-100`}
                  >
                    Documentación
                  </a>
                ) : (
                  <>
                    <a
                      href={view.url}
                      className={` p-1 ml-auto text-xl transition-all cursor-pointer select-none hover:scale-110 md:text-2xl lg:text-4xl bg-slate-700 text-slate-100`}
                    >
                      Ver más
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
