import type {Base } from '@/data/DataTypes';
import Link from 'next/link';
import { useAbsoluteContext } from '../../context/Absolute';
import {ID_txt} from '../global/Text';

/**
 * @prop className : Clase del componente
 * @prop base      : Base de la cual se obtienen los temas
 * @prop theme     : Si es true, muestra los temas de la base, si los subtemas
 */
interface context {
  className?: string;
  base: any;
  theme?: boolean
}
/**
 * Componente que retorna una carta de presentación
 * ya sea de una materia o un tema, la misma
 * tiene diferentes contextos que afectan
 * al AbsoluteContext y que muestran información
 * relevante.
 */
const PresentCard = ({ className, base, theme = false }: context) => {
  const { change } = useAbsoluteContext();
  let content: any
  if (!theme) {
    content = {
      title: `Lista de temas de ${base.name}`,
      open: true,
      content: (
        <>
          <div>
            <ul className="w-full md:p-2 lg:p-5">
              <li className="grid grid-cols-4 w-full justify-around bg-primary-focus p-2 text-xl text-center">
                <span>Nro</span>
                <span className="col-span-2">Nombre</span>
                <span>Link</span>
              </li>
              {base.themes?.map((element: any, index: number) => {
                return (
                  <li
                    key={index}
                    className="grid grid-cols-4 w-full border-0 justify-around bg-base-300 hover:bg-base-100 hover:border-l-2 box-content my-1 items-center py-2 text-center"
                  >
                    <span>{index + 1}</span>
                    <span className="col-span-2 text-base md:text-xl">
                      {element.name}
                    </span>
                    <Link
                      className="btn btn-outline btn-secondary btn-sm md:btn-md rounded-none w-full"
                      onClick={() =>
                        change({
                          title: 'Hola mundo',
                          open: false,
                          content: <></>,
                        })
                      }
                      href={
                        element.subThemes != undefined &&
                        element.subThemes[0] != undefined
                          ? element.subThemes[0].url
                          : '#'
                      }
                    >
                      Ver más
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ),
    };
  } else {
    content = {
      title: `Detalles de ${base.name}`,
      open: true,
      content: (
        <div>
          <ID_txt url={`${base.url}`} id={base.name} className="text-3xl text-base-content md:text-4xl lg:text-6xl underline">
            {base.name}
          </ID_txt>
          <div className="flex flex-col items-center w-full md:p-2 lg:p-5 gap-5 lg:flex-row">
            <picture className="md:min-w-[30%]">
              <img
                src={base.img}
                alt={`${base.name}-image`}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = '/imgNotFound.webp';
                }}
              />
            </picture>
            <div className="bg-slate-200/10 p-2 max-h-[20rem] overflow-y-auto scrollbar-thin scrollbar-w-0.5 scrollbar-thumb-primary-focus scrollbar-track-secondary md:scrollbar-w-2 md:p-4 lg:p-6">
              <p className="text-lg text-justify  text-base-content md:text-xl lg:text-3xl">
                {base.description}
              </p>
            </div>
          </div>
          <ID_txt url={`${base.url}#subthemes`} id={`${base.name}-subthemes`} className="text-5xl text-base-content underline">Sub-Temas</ID_txt>
          <ul className="w-full md:p-2 lg:p-5">
            <li className="grid grid-cols-4 w-full justify-around bg-primary-focus p-2 text-xl text-center">
              <span>Nro</span>
              <span className="col-span-2">Nombre</span>
              <span>Link</span>
            </li>
            {base.subThemes?.map((element: Base, index: number) => {
              return (
                <li
                  key={index}
                  className="grid grid-cols-4 w-full border-0 justify-around bg-base-300 hover:bg-base-100 hover:border-l-2 box-content my-1 items-center py-2 text-center"
                >
                  <span className="mr-1">{index + 1}</span>
                  <span className="col-span-2 text-base md:text-xl mx-1">
                    {element.name}
                  </span>
                  <Link
                    className="btn btn-outline btn-secondary btn-sm md:btn-md rounded-none w-full ml-1"
                    href={element.url}
                    onClick={() =>
                      change({
                        title: 'Hola mundo',
                        open: false,
                        content: <></>,
                      })
                    }
                  >
                    Ver más
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ),
    };
  }
  return (
    <div
      className={`${
        className ? className : ''
      } flex flex-col items-center bg-base-100`}
    >
      <h1 className="text-2xl bg-base-300 w-full text-center text-base-content">
        {base.name}
      </h1>
      <picture>
        <img
          src={base.img}
          alt={`${base.name}-image`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/imgNotFound.webp';
          }}
        />
      </picture>
      <div className="bg-base-300 w-full flex justify-around p-2 overflow-hidden my-auto">
        <Link
          className="btn btn-primary px-3 py-0 btn-sm flex md:btn-md rounded-none"
          href={base.url}
        >
          Explorar
        </Link>
        <button
          onClick={() =>
            change(content)
          }
          className="btn btn-secondary px-3 py-0 btn-outline btn-sm md:btn-md rounded-none"
        >
          Ver lista
        </button>
      </div>
    </div>
  );
};

export { PresentCard };
