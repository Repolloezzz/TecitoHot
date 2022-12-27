import { ButtonRef } from "./Buttons";
import { ClickDown } from "./TitleMove";
import style from "../styles/Background.module.css";
// TODO: crear un background PIXELART PARALLAX para el HEROSECTION

/**
 *
 * @param id {""}         : STRING - un identificador para el CONTENEDOR
 * @param className {""}  : STRING - clases CSS para el CONTENEDOR
 * @param title {""}      : STRING - titulo dinámico frente a todos los elementos
 * @param description {}  : STRING - descripción sobre algo dabajo el title
 * @param buttons {[]}    : ARRAY< Object > - Lista de objetos para crear botones
 * ?      name            : STRING - contenido del boton
 * ?      to              : STRING - href del boton
 * ?      toIn            : BOOLEAN - (true => href dentro la página) || (false => href fuera de la página)
 * ?      containerId     : STRING - si [ toIn = true ] => incluir el ID del contenedor del elemento al cual llegar
 * ?      className       : String - clases CSS para el boton
 * @returns
 */

export function HeroBackground({
  id = "",
  className = "",
  title = "",
  description,
  options = [
    { name: "", to: "#", toIn: false, containerId: "", className: "" },
  ],
}) {
  // title => ARRAY<String> cada letra es un elemento
  const chars = title != "" ? [...title] : [];

  return (
    <>
      <div id={id}>
        <div
          className={`${className} h-screen overflow-hidden flex flex-col justify-center items-center`}
        >
          {/* TITULO DINÁMICO - validando si exista para crearlo */}
          {title != undefined ? (
            <div className={`flex h-14 sm:h-16 md:h-32 ${style.HeroTitleMove}`}>
              <ClickDown title={title} />
            </div>
          ) : null}

          {/* Creacndo la descripcion de Hero */}
          {description != undefined ? (
            <div className="w-4/5 my-2 text-sm text-center text-white sm:w-3/6 sm:text-lg md:text-xl">
              {description}
            </div>
          ) : null}

          {/* CREACION DE BOTONES - validando si existe almenos un objeto */}
          {options != undefined ? (
            <div className="flex gap-5 mt-5 overflow-x-auto sm:gap-10 sm:mt-10">
              {/* Si existen objetos => crear botones */}
              {options.map((button, index) => {
                return (
                  <ButtonRef
                    name={button.name}
                    to={button.to}
                    toIn={button.toIn}
                    containerId={button.containerId}
                    className={`text-black sm:text-2xl p-1 border-b-4 border-slate-800 transition-all duration-100
                    bg-slate-200 hover:border-x-2 hover:border-b-0 hover:border-t-4 hover:bg-slate-400
                  `}
                    key={index}
                  />
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
