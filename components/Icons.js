import { ReactSVG } from "react-svg";

/**
 * * Componente que retorna iconos SVG del paquete PIXELARTICONS
 *
 * @param name {"file"}   : STRING - nombre del icono
 * @param className {""}  : STRING - clases CSS para el SVG
 * @return <svg>
 * ! Si no existe el icono => retorna un contenedor de PELIGRO(no es peligroso)
 */
export function Icons({ name = "file", className = "" }) {
  try {
    const icon = require(`pixelarticons/svg/${name}.svg`);
    const src = icon.default.src;
    return (
      <>
        <ReactSVG icon={icon} className={`${className}`} src={src}></ReactSVG>
      </>
    );
  } catch (error) {
    console.log(error);
    console.log("Error el nombre del icono no existe");
    return (
      <>
        <p className="box-content inline-block w-20 h-20 p-1 text-justify text-white bg-red-500">
          Error No existe ese icono
        </p>
      </>
    );
  }
}
