import { ReactSVG } from 'react-svg';

interface PixelParams extends React.SVGProps<SVGSVGElement> {
  name?: string;
  className?: string;
}
/**
 * Componente que retorna iconos SVG del paquete PIXELARTICONS
 * La lista completa de iconos se encuentra en:
 * https://pixelarticons.com/free/
 * @prop name       : nombre del icono
 * @prop className  : clases CSS para el SVG
 * @return Icono convertido en svg <svg>
 * ! Si sucede un error -> retorna un span con el mensaje de error
 */
export function PixelIcons({
  name = 'file',
  className = 'bg-slate-800 w-8 h-8 text-slate-100',
}: PixelParams) {
  try {
    const icon = require(`pixelarticons/svg/${name}.svg`);
    const src = icon.default.src;
    return (
      <ReactSVG
        icon={icon}
        className={`${className} inline-block`}
        src={src}
        wrapper="span"
      ></ReactSVG>
    );
  } catch (error) {
    console.log('Hubo un error al cargar el icono:', error);
    return (
      <span className="box-content inline-block w-8 h-8 text-justify text-white bg-red-500 break-keep">
        Error No existe ese icono
      </span>
    );
  }
}
