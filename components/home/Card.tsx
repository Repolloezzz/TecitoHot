import type { Matter, Theme } from "../../data/Types";
import Link from "next/link";
import { useAbsoluteContext } from "../../context/Absolute";

interface context {
  className?: string;
  base: Matter;
}
const MatterCard = ({ className, base }: context) => {
  const { change } = useAbsoluteContext();
  return (
    <div
      className={`${
        className ? className : ""
      } flex flex-col items-center bg-base-100`}
    >
      <h1 className="text-2xl bg-base-300 w-full text-center text-base-content">
        {base.name}
      </h1>
      <picture>
        <img src={base.imgUrl} alt={`${base.name}-image`} onError={({currentTarget}) => {
          currentTarget.onerror = null
          currentTarget.src = '/imgNotFound.webp'
        }}/>
      </picture>
      <div className="bg-base-300 w-full flex justify-around p-2 overflow-hidden my-auto">
        <Link
          className="btn btn-primary px-3 py-0 btn-sm flex md:btn-md rounded-none"
          href={base.pageUrl}
        >
          Explorar
        </Link>
        <button
          onClick={() =>
            change({
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
                      {base.themes.map((element, index) => {
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
                              onClick={() => change({title: 'Hola mundo', open: false, content: <></>})}
                              href={
                                element.subThemes != undefined &&
                                element.subThemes[0] != undefined
                                  ? element.subThemes[0].pageUrl
                                  : "#"
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
            })
          }
          className="btn btn-secondary px-3 py-0 btn-outline btn-sm md:btn-md rounded-none"
        >
          Ver lista
        </button>
      </div>
    </div>
  );
};

interface contextTheme {
  className?: string;
  base: Theme;
}
const ThemeCard = ({ className, base }: contextTheme) => {
  const { change } = useAbsoluteContext();

  return (
    <div className={`${className ? className : ""} flex flex-col items-center`}>
      <h1 className="text-lg bg-base-300 w-full text-center text-base-content leading-6 break-all md:text-xl lg:text-2xl">
        {base.name}
      </h1>
      <picture>
        <img src={base.imgUrl} alt={`${base.name}-image`} onError={({currentTarget}) => {
          currentTarget.onerror = null
          currentTarget.src = '/imgNotFound.webp'
        }}/>
      </picture>
      <div className="w-full flex justify-around p-2 overflow-hidden my-auto">
        <Link
          className="btn btn-primary px-3 py-0 btn-sm flex md:btn-md rounded-none"
          href={base.pageUrl}
        >
          Explorar
        </Link>
        <button
          onClick={() =>
            change({
              title: `Detalles de ${base.name}`,
              open: true,
              content: (
                <div>
                  <h1 className="text-3xl text-base-content md:text-4xl lg:text-6xl underline">
                    #{base.name}
                  </h1>
                  <div className="flex flex-col items-center w-full md:p-2 lg:p-5 gap-5 lg:flex-row">
                    <picture className="md:min-w-[30%]">
                      <img
                        src={base.imgUrl}
                        alt={`${base.name}-image`}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = "/imgNotFound.webp";
                        }}
                      />
                    </picture>
                    <div className="bg-slate-200/10 p-2 max-h-[20rem] overflow-y-auto scrollbar-thin scrollbar-w-0.5 scrollbar-thumb-primary-focus scrollbar-track-secondary md:scrollbar-w-2 md:p-4 lg:p-6">
                      <p className="text-lg text-justify  text-base-content md:text-xl lg:text-3xl">
                        {base.description}
                      </p>
                    </div>
                  </div>
                  <h2 className="text-5xl text-base-content underline">
                    #Sub-Temas
                  </h2>
                  <ul className="w-full md:p-2 lg:p-5">
                    <li className="grid grid-cols-4 w-full justify-around bg-primary-focus p-2 text-xl text-center">
                      <span>Nro</span>
                      <span className="col-span-2">Nombre</span>
                      <span>Link</span>
                    </li>
                    {base.subThemes?.map((element, index) => {
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
                            href={element.pageUrl}
                            onClick={() => change({title: 'Hola mundo', open: false, content: <></>})}
                          >
                            Ver más
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ),
            })
          }
          className="btn btn-secondary px-3 py-0 btn-outline btn-sm md:btn-md rounded-none"
        >
          Detalles
        </button>
      </div>
    </div>
  );
};

export { ThemeCard, MatterCard };
