import { Icons } from "../Icons";
import { useContext } from "react";
import ActionContext from "../../context/CrudActions/ActionContext";

export function CardInf({ object, patternObject, superPatternObject, level }) {
  const { setDelAlert, setActionAPI, setFormAlert, setSecAlert, actionAPI } =
    useContext(ActionContext);
  return (
    <div className="flex w-64 h-52 overflow-hidden min-w-[16rem] min-h-[20rem] bg-white transition-all hover:scale-110 cursor-pointer flex-col">
      <h1 className="w-full text-xl text-center text-white bg-slate-700">
        {object.name.substring(0, 20)} {object.name.length > 20 ? "..." : null}
      </h1>
      <picture className="min-w-[12rem] min-h-[6rem] h-full">
        <img
          onClick={() => {
            if (level == 2) {
              setSecAlert(true);
              setActionAPI({
                ...actionAPI,
                secElement: object,
                superElement: patternObject,
              });
            } else {
              alert("un tercero");
            }
          }}
          className="object-cover w-full h-full"
          src={object.img}
          alt={`${object.name}-icon`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/themes/NotFoundIMG.webp";
          }}
        />
      </picture>
      <div className="flex flex-col w-full bg-alpha-100">
        <span className="flex items-center justify-center w-full text-white border-b-2 border-vector-100 bg-slate-700">
          ID: {object.id}
        </span>
        <span className="flex items-center justify-center w-full text-white bg-indigo-600 border-b-2 border-vector-100">
          URL: <a href={object.url}>{object.url}</a>
        </span>
        <span className="flex items-center justify-center w-full text-white bg-orange-500 border-b-2 border-vector-100">
          IMG: {object.img}
        </span>
        <div className="flex justify-center">
          <button
            className="flex items-center justify-center w-full text-white transition-all bg-blue-500 hover:bg-blue-700"
            onClick={() => {
              if (level == 2) {
                setActionAPI({
                  ...actionAPI,
                  head: {
                    //datos para la PRESENTACIÓN
                    name: object.name,
                    id: object.id,
                    //datos para la PETICIÓN
                    level: 2,
                    matterID: patternObject.id,
                    themeID: object.id,
                  },
                  element: object,
                });
              } else {
                setActionAPI({
                  ...actionAPI,
                  head: {
                    //datos para la PRESENTACIÓN
                    name: object.name,
                    id: object.id,
                    //datos para la PETICIÓN
                    level: 3,
                    matterID: superPatternObject.id,
                    themeID: patternObject.id,
                    subthemeID: object.id,
                  },
                  element: object,
                });
              }
              setFormAlert(true);
            }}
          >
            <Icons name="edit" className="w-4 h-4" />
            <p className="text-xl">Editar</p>
          </button>
          <button
            className="flex items-center justify-center w-full text-white transition-all bg-red-500 hover:bg-red-700"
            onClick={() => {
              if (level == 2) {
                setActionAPI({
                  ...actionAPI,
                  head: {
                    name: object.name,
                    level: 2,
                    matterID: patternObject.id,
                    themeID: object.id,
                  },
                });
              } else {
                setActionAPI({
                  ...actionAPI,
                  head: {
                    name: object.name,
                    level: 3,
                    matterID: superPatternObject.id,
                    themeID: patternObject.id,
                    subthemeID: object.id,
                  },
                });
              }
              setDelAlert(true);
            }}
          >
            <Icons name="trash" className="w-4 h-4" />
            <p className="text-xl">Borrar</p>
          </button>
        </div>
      </div>
    </div>
  );
}
