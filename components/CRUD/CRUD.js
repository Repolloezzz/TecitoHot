import {
  getElements,
  addElement,
  editElement,
  delElement,
} from "../../functions/mattersMethodsAPI";

import { HeroNavV } from "../HeroNav";
import { useState, useEffect, useContext } from "react";
import { InfSection } from "./InfSection";
import { FormCRUD } from "./Form";
import ActionContext from "../../context/CrudActions/ActionContext";
import { Icons } from "../Icons";
import style from '../../styles/Sroll.module.css'

export function CRUD() {
  const mattersURL = "./api/mattersAPI";
  const [data, setData] = useState([]);
  const [change, setChange] = useState(true);

  const defaultPropety = {
    name: "",
    id: "",
    url: "",
    img: "",
    description: "",
    themes: [],
    subthemes: [],
  };

  // Para recargar los datos
  function reloadData() {
    getElements(mattersURL).then((res) => setData(res));
  }

  useEffect(() => {
    reloadData();
  }, [change]);

  //Contexto
  const {
    delAlert,
    setDelAlert,
    formAlert,
    setFormAlert,
    actionAPI,
    setActionAPI,
    secAlert,
    setSecAlert,
  } = useContext(ActionContext);

  return (
    <>
      <section className="flex flex-col items-center justify-center w-screen h-screen bg-slate-50">
        <HeroNavV
          user={{ name: "CRUD - Materias", img: undefined, link: "#" }}
          options={[
            ...data.map((matter) => {
              return {
                className: "hover:bg-tropical-600",
                name: matter.name,
                to: matter.id,
                toIn: true,
                icon: "checkbox-on",
                containerId: "Container",
              };
            }),
            {
              className: "bg-indigo-500 hover:bg-indigo-700",
              name: "Crear Materia",
              to: "#",
              toIn: false,
              icon: "plus",
              especial: true,
              onClick: () => {
                setFormAlert(true);
                setActionAPI({
                  head: {
                    name: "Matters",
                    id: "matters[]",
                    formType: "add",
                    //datos para la PETICIÓN
                    level: 1,
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
              },
            },
          ]}
        />
        <section
          id="Container"
          className={`flex flex-col w-full h-screen gap-5 pl-16 pr-5 overflow-x-hidden overflow-y-auto bg-blue-400 ${style.scrollB}`}
        >
          <h1 className="flex items-center justify-center p-2 text-6xl text-white underline font-silk bg-cyan-500">
            CRUD - MATTERS
          </h1>
          {data.map((matter) => {
            return (
              <InfSection
                id={matter.id}
                object={matter}
                key={matter.id}
                level={1}
              />
            );
          })}
        </section>
        {/* VENTANAS SOBREPUESTAS */}
        {/* Ventana de BORRADO DE UN ELEMENTO */}
        {delAlert ? (
          <div
            className={`z-10 flex flex-col absolute top-0 left-0 w-screen h-screen bg-alpha-300 justify-center items-center`}
          >
            <div className="flex flex-col items-center w-3/4 p-2 overflow-hidden h-1/4 bg-slate-50">
              <h1 className="w-full text-3xl text-center">
                Seguro que quieres eliminar {actionAPI.head.name} - [nivel:{" "}
                {actionAPI.head.level}]
              </h1>
              <div className="flex justify-center w-full gap-5 mt-auto">
                <button
                  className="w-3/12 p-2 text-3xl text-white transition-all bg-red-500 hover:scale-110"
                  onClick={() => {
                    delElement(mattersURL, actionAPI.head);
                    //console.log(actionAPI.head)
                    setChange(!change);
                    setDelAlert(false);
                    setFormAlert(false);
                    setSecAlert(false);
                  }}
                >
                  Borrar
                </button>
                <button
                  className="w-3/12 p-2 text-3xl text-white transition-all bg-slate-500 hover:scale-110"
                  onClick={() => {
                    setDelAlert(false);
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {/* Form */}
        {formAlert ? (
          <div
            className={`z-10 flex flex-col absolute top-0 left-0 w-screen h-screen bg-alpha-300 justify-center items-center overflow-y-auto overflow-x-hidden`}
          >
            <FormCRUD
              type={actionAPI.head.formType}
              matterURL={mattersURL}
              setChange={setChange}
              change={change}
            ></FormCRUD>
          </div>
        ) : null}
        {/* Seccion secundaria */}
        {secAlert ? (
          <div
            className={`flex flex-col absolute overflow-x-hidden top-0 left-0 w-screen h-screen bg-alpha-300 items-center ${style.scrollB}`}
          >
            <div className="flex flex-col w-[90%] bg-slate-200 border-4 border-black">
              <h1 className="flex p-2 text-2xl text-white bg-slate-800">
                <p>Ver tema en detalles</p>
                <button
                  className="ml-auto transition-all bg-red-500 hover:bg-red-700"
                  onClick={() => {
                    setSecAlert(false);
                  }}
                >
                  <Icons name="close" className="w-8 h-8" />
                </button>
              </h1>
              <InfSection
                id={actionAPI.secElement.id}
                object={actionAPI.secElement}
                level={2}
                superObject={actionAPI.superElement}
              />
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}

/**
   * <button
            onClick={() => {
              //getElements(mattersURL)
            }}
            className="h-8 text-2xl w-52 bg-tropical-600"
          >
            Obtener todo
          </button>
          <button
            onClick={() => {
              //addElement(mattersURL, {level: 1, matterID: 'mate', themeID: 'mate_calc1'}, {})
            }}
            className="h-8 text-2xl w-52 bg-tropical-200"
          >
            Agregar uno
          </button>
          <button
            onClick={() => {
              //editElement(mattersURL, {level: 1, matterID: 'pato', themeID: 'mate_calc1', subthemeID: '3-element'}, {id: 'mate'})
            }}
            className="h-8 text-2xl w-52 bg-tropical-500"
          >
            Editar un elemento
          </button>
          <button
            onClick={() => {
              //delElement(mattersURL, {level: 1, matterID: 'gato'})
            }}
            className="h-8 text-2xl w-52 bg-tropical-100"
          >
            Borrar un elemento
          </button>
   */
