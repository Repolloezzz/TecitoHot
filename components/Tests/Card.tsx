import type { Matter } from "../../data/Types";
import Image from "next/image";
import Link from "next/link";
import { useAbsoluteContext } from "../../context/Absolute";
interface context {
  className?: string;
  base: Matter;
}
const BaseCard = ({ className, base }: context) => {
  const { change, context } = useAbsoluteContext();
  console.log(context);
  return (
    <div
      className={`${
        className ? className : ""
      } flex flex-col items-center bg-base-100`}
    >
      <h1 className="text-2xl bg-base-300 w-full text-center text-base-content">
        {base.name}
      </h1>
      <Image
        src={base.imgUrl}
        alt={`${base.name}-image`}
        width={500}
        height={500}
      />
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
                    <h1 className="text-2xl underline">Lista de Temas</h1>
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
                            <span className="col-span-2">{element.name}</span>
                            <Link
                            className="btn btn-outline btn-secondary btn-sm md:btn-md rounded-none w-full"
                              href={
                                element.subThemes != undefined && element.subThemes[0] != undefined
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
export { BaseCard };
