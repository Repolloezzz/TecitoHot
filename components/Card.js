import { ClickScale } from "./TitleMove";
import { Icons } from "./Icons";
/**
 *
 * @param object        : OBJECT - objeto con la información necesaria para desplegar la tarjeta
 * ?        name        : STRING - nombre
 * ?        id          : STRING - identificador UNICO
 * ?        img         : STRING - ruta de una imagen, !! si no se encuentra => imagen default !!
 * ?        url         : STRING - HREF de la tarjeta
 * ?        description : STRING - información sobre el objeto en si
 * @param className     : STRING - lista de nombres de clases del componente
 */
export function SimpleCard({ object, className }) {
  return (
    <div
      className={`box-content flex flex-col items-center w-full h-full overflow-hidden bg-red-600 md:flex-row ${className}`}
    >
      <picture className="flex items-center justify-center p-2 h-[30%] md:h-full max-h-[40%] md:max-h-min md:p-5 lg:p-10 bg-vector-100 min-w-[25%] w-3/4 md:w-auto">
        <img
          className="object-cover w-full h-full cursor-pointer select-none md:h-min md:w-min"
          src={object.img}
          alt={`${object.name}-icon`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/themes/NotFoundIMG.webp";
          }}
        />
      </picture>
      <div className="box-content flex flex-col items-center w-full h-full overflow-hidden md:w-3/4">
        <div className="flex w-full bg-slate-200 lg:min-h-[10%]">
          <button className="transition-all hover:bg-vector-100 hover:text-slate-100 min-w-[20%] flex justify-center items-center hover:scale-125">
            <Icons
              name="chevron-left"
              className="w-6 h-6 lg:w-8 lg:h-8 md:w-7 md:h-7"
            />
          </button>
          <p className="flex items-center justify-center w-full text-2xl md:text-3xl lg:text-5xl">
            Descripción
          </p>
          <button className="transition-all hover:bg-vector-100 hover:text-slate-100 min-w-[20%] flex justify-center items-center hover:scale-125">
            <Icons
              name="chevron-right"
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
            />
          </button>
        </div>
        <div className="flex flex-col w-full gap-5 bg-alphaSlate-100 min-h-[90%]">
          <div className="w-full overflow-y-auto">
            <p className="p-3 overflow-y-auto text-xl text-justify lg:p-4 md:text-2xl lg:text-3xl">
              {object.description}
            </p>
          </div>
          <div className="flex w-full p-2 mt-auto md:p-3 lg:p-5">
            <a className="p-1 ml-auto text-2xl cursor-pointer select-none md:text-3xl lg:text-4xl bg-slate-700 text-slate-100">
              Documentación
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
