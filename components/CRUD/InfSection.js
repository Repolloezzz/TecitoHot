import { Icons } from "../Icons";
import {
  getElements,
  addElement,
  editElement,
  delElement,
} from "../../functions/mattersMethodsAPI";
//Contexto de las alertas
import { useContext } from "react";
import ActionContext from "../../context/CrudActions/ActionContext";
import { CardInf } from "./CardInf";
import style from '../../styles/Sroll.module.css'

/**
 * * InfSection --- Seccion de información del objeto
 * @param object :  Objeto de tipo Page [Matter, Theme, Subtheme]
 * @returns : una instancia del componente con caracteristicas según @object
 */
export function InfSection({ object, className, level, id, superObject }) {
  const { setDelAlert, setActionAPI, setFormAlert, actionAPI } =
    useContext(ActionContext);

  return (
    <div className={className} id={id}>
      {/* Informacion sobre sus atributos */}
      <div className="flex gap-10 p-5 overflow-hidden bg-white">
        <picture className="w-40 h-40 min-w-[10rem]">
          {/* Prevencion de error SRC */}
          <img
            className="object-cover w-full h-full border-4 border-dashed border-slate-700"
            src={object.img}
            alt={`${object.name}-icon`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = "/themes/NotFoundIMG.webp";
            }}
          />
        </picture>
        {/* Seccion de la informacion PRINCIPAL del objeto */}
        <div className="flex flex-col w-full">
          <h1 className="flex items-center text-3xl -translate-x-6">
            <Icons name="play" className="w-8 h-8" />
            <p>{object.name}</p>
          </h1>
          <div className="flex w-full bg-alpha-100">
            <span className="flex items-center justify-center p-1 text-xl text-white border-b-2 border-vector-100 bg-slate-700 w-max">
              ID: {object.id}
            </span>
            <span className="flex items-center justify-center p-1 text-xl text-white bg-indigo-600 border-b-2 border-vector-100 w-max">
              URL: <a href={object.url}>{object.url}</a>
            </span>
            <span className="flex items-center justify-center p-1 text-xl text-white bg-orange-500 border-b-2 border-vector-100 w-max">
              IMG: {object.img}
            </span>
            <div className="flex gap-2 ml-auto">
              <button
                className="flex items-center justify-center p-2 text-white transition-all bg-blue-500 hover:bg-blue-700"
                onClick={() => {
                  if(level == 1) {
                    setActionAPI({
                      ...actionAPI,
                      head: {
                        name: object.name,
                        id: object.id,
                        level: 1,
                        matterID: object.id,
                      },
                      element: object,
                    });
                  } else {
                    setActionAPI({
                      ...actionAPI,
                      head: {
                        name: object.name,
                        id: object.id,
                        level: 2,
                        matterID: superObject.id,
                        themeID: object.id
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
                className="flex items-center justify-center p-2 text-white transition-all bg-red-500 hover:bg-red-700"
                onClick={() => {
                  setDelAlert(true);
                  if(level == 1) {
                    setActionAPI({
                      ...actionAPI,
                      head: { name: object.name, level: 1, matterID: object.id },
                    });
                  } else {
                    setActionAPI({
                      ...actionAPI,
                      head: { name: object.name, level: 2, matterID: superObject.id, themeID: object.id},
                    });
                  }
                }}
              >
                <Icons name="trash" className="w-4 h-4" />
                <p className="text-xl">Borrar</p>
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-xl">Descripción</h2>
            <p className={`w-[86%] p-2 overflow-y-auto text-xl max-h-20 bg-alpha-100 ${style.scrollA}`}>
              {object.description}
            </p>
          </div>
        </div>
      </div>
      {/* seccion de CONTENIDO del objeto */}
      <div
        className="grid gap-5 p-5 bg-slate-300"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(16rem, 1fr))" }}
      >
        {level == 1
          ? object.themes.map((theme) => {
              return (
                <CardInf key={theme.id} object={theme} patternObject={object} level={2}/>
              );
            })
          : object.subthemes.map((subtheme) => {
              return (
                <CardInf
                  key={subtheme.id}
                  object={subtheme}
                  patternObject={object}
                  superPatternObject={superObject}
                  level={3}
                />
              );
            })}
        <div
          className="bg-alpha-300 w-64 h-80 min-w-[16rem] min-h-[20rem] flex items-center justify-center cursor-pointer hover:scale-110 transition-all"
          onClick={() => {
            if(level == 1) {
              setActionAPI({
                ...actionAPI,
                head: {
                  //datos para la PRESENTACIÓN
                  name: object.name,
                  id: object.id,
                  formType: "add",
                  //Datos para la PETICIÓN
                  level: 2,
                  matterID: object.id,
                },
                element: {
                  name: "",
                  id: "",
                  url: "",
                  img: "",
                  description: "",
                  themes: [],
                  subthemes: [],
                },
              });
            } else {
              setActionAPI({
                ...actionAPI,
                head: {
                  //datos para la PRESENTACIÓN
                  name: object.name,
                  id: object.id,
                  formType: "add",
                  //Datos para la PETICIÓN
                  level: 3,
                  matterID: superObject.id,
                  themeID: object.id
                },
                element: {
                  name: "",
                  id: "",
                  url: "",
                  img: "",
                  description: "",
                  themes: [],
                  subthemes: [],
                },
              });
            }
            setFormAlert(true);
          }}
        >
          <Icons name="plus" className="w-10 h-10 text-white" />
        </div>
      </div>
    </div>
  );
}
