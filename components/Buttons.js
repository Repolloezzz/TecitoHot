import { Link } from "react-scroll";
import { Icons } from "./Icons";

/**
 * * Boton simple - icon
 *
 * @param to  {""}          : STRING - href del button
 * @param toIn  {false}     : BOOLEAN - tipo de enlace si fuera ( false ) o dentro ( true ) de la página
 * ?      containerId  {""} : STRING - si [ toIn = true ] => incluir el ID del contenedor del elemento al cual llegar
 * @param name  {"Example"} : STRING - contenido del boton
 * @param icon  {undefined} : STRING - nombre del icon del paquete PIXELARTICONS
 * @param className {""}    : STRING - clases CSS incluidas para el botton
 * ?      iconClass  {""}   : STRING - clases CSS para el ICONO
 * ?      nameClass  {""}   : STRING - clases CSS para el contenedor del @param name
 * @returns       <Link> || <a>
 */

export function ButtonRef({
  to = "",
  toIn = false,
  containerId = "",
  name = undefined,
  icon = undefined,
  className = "",
  iconClass = "",
  nameClass = "",
}) {
  return (
    <>
      {/* validando el tipo de enlace IN || OUT */}
      {toIn ? (
        <Link
          activeClass={"active"}
          to={to}
          spy={true}
          smooth={true}
          duration={300}
          containerId={containerId}
          className={`${className} cursor-pointer flex items-center`}
        >
          {/* validando si existe un icono */}
          {icon != undefined ? (
            <Icons name={`${icon}`} className={iconClass} />
          ) : null}
          {/* validando si existe un name para el contenido */}
          {name != undefined ? <p className={nameClass}>{name}</p> : null}
        </Link>
      ) : (
        <a
          href={to}
          className={`${className} cursor-pointer flex items-center`}
        >
          {/* validando si existe un icono */}
          {icon != undefined ? (
            <Icons name={`${icon}`} className={iconClass} />
          ) : null}
          {/* validando si existe un name para el contenido */}
          {name != undefined ? <p className={nameClass}>{name}</p> : null}
        </a>
      )}
    </>
  );
}
