import { Icons } from "./Icons";
import Link from "next/link";

/**
 * * ButtonRef - Componente que contiene un icono y letras
 * @param to            : ruta del href
 * @param className     : clases CSS del boton en 'general'
 * @param iconName      : nombre del icono a usar
 * @param iconClass     : clases CSS para el 'icono'
 * @param content       : contenido dentro del boton
 * @param contentClass  : clases CSS para el contenedor del @content
 * ! Si toIn === TRUE  => si o si incluir containerId, de lo contrario WARNING
 * 1.- existe contenido o un icono para representar el boton? ... si no es asi alerta!!
 * 2.- mandar el tipo de boton segun @toIn ,
 * 3.- validar los datos opcionales, si no se definen => se incluyen unos por defecto
 * ? en la interfaz se muestran los atributos obligatorios y otros opcionales, si
 * ? dependen uno de otro => saldra una alerta para aclararlo
 */
export interface ButtonRefParam {
  to: string;
  className?: string;
  iconName?: string;
  iconClass?: string;
  content?: string;
  contentClass?: string;
  onClick?: any;
}
export function ButtonRef({
  to,
  className,
  iconName,
  iconClass,
  content,
  contentClass,
  onClick = () => {},
}: ButtonRefParam) {
  // existe contenido para renderizarlo ?
  if (
    (content == undefined || content == "") &&
    (iconName == undefined || iconName == "")
  )
    return (
      <p className="p-2 overflow-visible text-lg text-justify bg-red-700 w-max h-max text-slate-200 break-keep">
        <b>ICONS</b> se necesita al menos un {"'icon'"} O UN {"'content'"}
      </p>
    );
  // que tipo de boton es, se queda o se va?
  return (
    <Link
      onClick={onClick}
      href={to}
      className={`${
        className
          ? className
          : "bg-white w-max p-0.5 gap-2 rounded-lg hover:bg-slate-500 transition-all hover:text-slate-50"
      } cursor-pointer flex items-center`}
    >
      {/* validando si existe un icono */}
      {iconName != undefined || "" ? (
        <Icons
          name={`${iconName}`}
          className={iconClass ? iconClass : "w-7 h-7"}
        />
      ) : null}
      {/* validando si existe un name para el contenido */}
      {content != undefined || null ? (
        <p className={contentClass ? contentClass : "text-3xl"}>{content}</p>
      ) : null}
    </Link>
  );
}
