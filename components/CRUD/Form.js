import { Icons } from "../Icons";
import { useContext } from "react";
import ActionContext from "../../context/CrudActions/ActionContext";
import { addElement, editElement } from "../../functions/mattersMethodsAPI";

/**
 * *    FormCRUD - formulario para un CRUD de materias
 * @param type  : STRING - tipo de formulario [ add || edit ]
 * !    si no se define => el formulario es de agregación
 */
export function FormCRUD({ type, className, matterURL, setChange, change }) {
  const { setDelAlert, setActionAPI, setFormAlert, formAlert, actionAPI, setSecAlert } =
    useContext(ActionContext);

  function changeInput(e) {
    let elementChange = actionAPI.element;
    elementChange = { ...elementChange, [e.target.name]: e.target.value };
    actionAPI.element = elementChange;
    setActionAPI(actionAPI);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(actionAPI.element);
    if(type == 'add') {
        addElement(matterURL, actionAPI.head, actionAPI.element)
    } else {
        editElement(matterURL, actionAPI.head, actionAPI.element)
    }
    setChange(!change)
    setFormAlert(false)
    setSecAlert(false)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={`${className} bg-slate-100 w-4/5 h-4/5 flex flex-col border-4 border-slate-800`}
    >
      <h1 className="flex justify-center gap-2 p-2 text-3xl text-white bg-slate-800">
        {type == "add" ? (
          <>
            <p>Agregando un elemento en</p>
            <p className="text-black bg-yellow-500">{actionAPI.head.name}</p>
            <p className="text-white bg-slate-700">#{actionAPI.head.id}</p>
          </>
        ) : (
          <>
            <p>Editando el elemento</p>
            <p className="text-black bg-yellow-500">{actionAPI.head.name}</p>
            <p className="text-white bg-slate-700">#{actionAPI.head.id}</p>
          </>
        )}
        <div
          className="ml-auto bg-red-500 cursor-pointer"
          onClick={() => {
            setFormAlert(false);
          }}
        >
          <Icons name="close" className="w-8 h-8" />
        </div>
      </h1>
      <div className="flex flex-col w-full h-full gap-2 p-2 pl-8 bg-slate-200">
        <span className="flex gap-2 text-2xl">
          <label className="w-32">Nombre:</label>
          <input
            className="w-[58%]"
            type="text"
            name="name"
            placeholder="Ej. Matematicas"
            onChange={changeInput}
            value={actionAPI.element.name}
          />
        </span>
        <span className="flex gap-2 text-2xl">
          <label className="w-32">Identificador:</label>
          <input
            className="w-[58%]"
            type="text"
            name="id"
            placeholder="Ej. mate"
            onChange={changeInput}
            value={actionAPI.element.id}
          />
        </span>
        <span className="flex gap-2 text-2xl">
          <label className="w-32">Pagina [URL]:</label>
          <input
            className="w-[58%]"
            type="text"
            name="url"
            placeholder="Ej. themes/Matematica"
            onChange={changeInput}
            value={actionAPI.element.url}
          />
        </span>
        <span className="flex gap-2 text-2xl">
          <label className="w-32">Icono [IMG]:</label>
          <input
            className="w-[58%]"
            type="text"
            name="img"
            placeholder="Ej. /themes/Matematica/icon.webp"
            onChange={changeInput}
            value={actionAPI.element.img}
          />
        </span>
        <span className="flex flex-col text-2xl">
          <label className="w-32">Descripción:</label>
          <textarea
            className="w-3/4 h-64 p-2 overflow-x-hidden overflow-y-auto resize-none"
            type="text"
            name="description"
            placeholder="Ej. Puros número wey"
            onChange={changeInput}
            value={actionAPI.element.description}
          />
        </span>
      </div>
      <div className="flex justify-end w-full gap-2 p-2 mt-auto">
        <button
          type="submit"
          className="flex items-center justify-center p-2 text-white transition-all bg-emerald-500 hover:bg-emerald-700"
        >
          <p className="text-xl">Enviar</p>
        </button>
        <button
          type="reset"
          className="flex items-center justify-center p-2 text-white transition-all bg-red-500 hover:bg-red-700"
          onClick={() => {
            setFormAlert(false);
          }}
        >
          <p className="text-xl">Cancelar</p>
        </button>
      </div>
    </form>
  );
}
