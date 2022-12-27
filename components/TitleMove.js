import style from "../styles/TitleMove.module.css";
import { useState, useEffect } from "react";
// Para el titulo del background
export function ClickDown({ title = "" }) {
  const chars = title != "" ? [...title] : [];
  // para sacar un conjunto de colores distintos
  const coolor = [
    "hover:text-palete-100",
    "hover:text-palete-200",
    "hover:text-palete-300",
    "hover:text-palete-400",
    "hover:text-palete-500",
  ];
  var con = 0;
  function getCoolor() {
    if (con == coolor.length) {
      con = 0;
    }
    return coolor[con++];
  }
  // grados de inclinación random para cada uno de las letras
  const [randomA, setRandomA] = useState(
    Array.from(
      { length: chars.length },
      () => parseInt(Math.floor(Math.random() * (-70 - 70) + 70) / 10) * 10
    )
  );
  return (
    <>
      {chars.map((char, index) => {
        return (
          <span
            key={index}
            char={char}
            style={{
              "--deg": `${randomA[index]}deg`,
              textShadow: "0px 5px 2px #00000070",
            }}
            className={`relative block p-0 m-0 text-5xl transition-all cursor-pointer select-none font-silk sm:text-7xl md:text-9xl border-double text-slate-100 box-content
                    ${getCoolor()}`}
            onClick={(e) => {
              // ESTO ES LA ANIMACION ONCLICK PARA EL TITULO
              e.target.classList.add(`${style.ClickDown}`);
              setTimeout(() => {
                e.target.classList.remove(`${style.ClickDown}`);
              }, 1500);
            }}
          >
            {char}
          </span>
        );
      })}
    </>
  );
}

// Titulo para temas
export function ClickScale({ title = "" }) {
  const chars = title != "" ? [...title] : [];
  return (
    <>
      {chars.map((char, index) => {
        return (
          <span
            key={index}
            className="inline-block transition-all cursor-pointer select-none hover:bg-slate-100 hover:text-slate-800 text-slate-100"
            onClick={(e) => {
              // ESTO ES LA ANIMACION ONCLICK PARA EL TITULO
              e.target.classList.add(`${style.ClickScale}`);
              setTimeout(() => {
                e.target.classList.remove(`${style.ClickScale}`);
              }, 1500);
            }}
          >
            {char}
          </span>
        );
      })}
    </>
  );
}
