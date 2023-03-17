import { ReactSVG } from "react-svg";


/**
 * * Componente que retorna iconos SVG del paquete PIXELARTICONS
 *
 * @param name {"file"}   : STRING - nombre del icono
 * @param className {""}  : STRING - clases CSS para el SVG
 * @return <svg>
 * 1.- pedir el icono SVG mediante el @name
 *    ? por defecto @name tiene el valor de 'file' que si existe en el paquete
 * 2.- retornar el SVG, si no existe => ERROR!!! => mandar error en forma de contenedor
 * ! Si no existe el icono => retorna un contenedor de PELIGRO(no es peligroso)
 */
interface params {
  name?: string;
  className?: string;
}
export function PixelIcons({ name = "file", className }: params) {
  try {
    const icon = require(`pixelarticons/svg/${name}.svg`);
    const src = icon.default.src;
    return (
      <>
        <ReactSVG
          icon={icon}
          className={`${
            className || "" ? className : "w-8 h-8 bg-slate-800 text-slate-100"
          }`}
          src={src}
          wrapper="span"
        ></ReactSVG>
      </>
    );
  } catch (error) {
    console.log(error);
    console.log("Error el nombre del icono no existe");
    return (
      <>
        <span className="box-content inline-block w-8 h-8 text-justify text-white bg-red-500 break-keep">
          Error No existe ese icono
        </span>
      </>
    );
  }
}