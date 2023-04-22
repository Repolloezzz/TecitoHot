import { H1, p, justify, errorMSG, successMSG } from "./components/Text";
import { BaseArea } from "../../../data/types/Area";
import { viewAreaBox, viewBox } from "./components/Boxes";
import { wait } from "./components/animations";
import { getAreasCount, createArea } from "../functions/CRUD";
import { insertArea } from "../functions/Extension";
import {
  existAreaByCharacter,
  existAreaByGenerator,
  existAreaByIndex,
  existAreaByName,
} from "../functions/validate";

const { Select, Toggle, Input } = require("enquirer");
const clear = require("clear");
const message =
  "Selecciones las opciones que desea definir para la creacion de un nuevo area.\n" +
  "Recuerde que todos los datos ingresados seran validados y si no cumplen con los requisitos\n" +
  "el sistema no los guardara y le pedira que los vuelva a ingresar";
const optionsMessage = `
  - 🛑 Campo obligatorio
  - 📌 Campo opcional
  - 🧰 Generado por el sistema
`;
let dataProvider: BaseArea = {
  name: "",
  description: "",
  character: "",
  color: "",
  index: getAreasCount() + 1,
  generator: "",
};

export default async function createAreaCli() {
  // Limpiar la consola y presentar la vista
  clear();
  let loop = false;
  // presentacion de la vista
  while (!loop) {
    console.log(
      viewBox(
        H1(" >>> Crear area <<<"),
        justify(message) + "\n" + p(optionsMessage)
      )
    );
    // Opciones de la vista
    const props = new Select({
      name: "Create-Area-Options",
      message: "Seleccione una opcion",
      choices: [
        "🛑 Nombre del area",
        "📌 Descripcion del area",
        "🛑 Personaje del area",
        "📌 Color del area",
        "🧰 Generador del area",
        "🧰 Indice del area",
        ">> 🎴 Vista previa del area",
        ">> 🔨 Crear area",
        ">> ❌ Cancelar",
      ],
    });
    const optionSelected = await props.run();
    const continueAction = new Toggle({
      name: "Continue",
      message: "Desea cancelar la creacion del area?",
      enabled: "Si",
      disabled: "No",
    });
    switch (optionSelected) {
      case "🛑 Nombre del area":
        await editAttrArea("name", "Escriba el nombre del area:");
        clear();
        break;
      case "📌 Descripcion del area":
        await editAttrArea("description", "Escriba una descripcion del area:");
        clear();
        break;
      case "🛑 Personaje del area":
        await editAttrArea("character", "Escriba un personaje caracteristico:");
        clear();
        break;
      case "📌 Color del area":
        await editAttrArea("color", "Escriba un color referente a tailwind:");
        clear();
        break;
      case "🧰 Generador del area":
        await editAttrArea("generator", "Escriba un nombre para el archivo");
        clear();
        break;
      case "🧰 Indice del area":
        await editAttrArea("index", "Escriba la posición de orden del area:");
        clear();
        break;
      case ">> 🎴 Vista previa del area":
        clear();
        await printPreviewArea();
        clear();
        break;
      case ">> 🔨 Crear area":
        const isValid = validateData();
        console.log(p(isValid.msg));
        if (isValid.valid) {
          clear();
          console.log(viewAreaBox(dataProvider));
          const confirm = new Toggle({
            name: "Continue",
            message: "Esta seguro de crear el area?",
            enabled: "Si",
            disabled: "No",
          });
          if (isValid.index) {
            if (await confirm.run()) {
              insertArea(getFinishObject());
              console.log(successMSG("Area insertada con exito✅✅✅"));
              loop = true;
              await wait(() => {}, 2000);
              clear();
              break;
            }
          } else {
            if (await confirm.run()) {
              createArea(getFinishObject());
              console.log(successMSG("Area creada con exito✅✅✅"));
              loop = true;
              await wait(() => {}, 2000);
              clear();
              break;
            }
          }
        }
        loop = await continueAction.run();
        if (loop) {
          console.log(errorMSG("Creacion de area cancelada"));
        }
        await wait(() => {}, 2000);
        clear();
        break;

      case ">> ❌ Cancelar":
        loop = await continueAction.run();
        if (loop) {
          console.log(errorMSG("Creacion de area cancelada"));
        }
        await wait(() => {}, 2000);
        clear();
        break;
    }
  }
}

async function printPreviewArea() {
  console.log(viewAreaBox(getFinishObject()));
  const props = new Toggle({
    name: "Continue",
    message: "Continuar...",
    enabled: "Si",
    disabled: "SI",
  });
  const continueOption = await props.run();
  return continueOption;
}

async function editAttrArea<K extends keyof BaseArea>(
  attr: K,
  message: string
) {
  const props = new Input({
    name: "value",
    message: message,
    default: getFinishObject()[attr],
  });
  const value = await props.run();
  dataProvider[attr] = value;
}

/**
 * Funcion que valida que los datos name, character no esten vacios
 * que el index sea un numero mayor igual a 0
 * que el generator no tenga espacios
 * que el color sea un color valido de tailwind
 */
function validateData() {
  let res = { valid: false, index: false, msg: "Esto son los registros:" };
  const { name, character, index, generator } = getFinishObject();
  let valid;
  // Validar que no exista un area con el mismo nombre
  if (name != "") {
    valid = existAreaByName(name);
    res.valid = !valid;
    res.msg += valid
      ? "-❌ El nombre ya existe\n"
      : "-✅ El nombre no existe\n";
  }
  // Validar que no exista un area con el mismo personaje
  if (character != "") {
    valid = existAreaByCharacter(character);
    res.valid = !valid;
    res.msg += valid
      ? "-❌ El personaje ya existe\n"
      : "-✅ El personaje no existe\n";
  }
  // Validar que no exista un area con el mismo indice
  if (index > 0) {
    valid = existAreaByIndex(index);
    res.index = !valid;
    res.msg += valid
      ? "-💠 El indice ya existe\n"
      : "-✅ El indice no existe\n";
  }
  // Validar que no exista un area con el mismo generator
  if (generator != "" && !generator.includes(" ")) {
    valid = existAreaByGenerator(generator);
    res.valid = !valid;
    res.msg += valid
      ? "-❌ El generator ya existe\n"
      : "-✅ El generator no existe\n";
  }
  // Valores por defecto
  if (name === "" || character === "" || index < 0 || generator.includes(" ")) {
    res.valid = false;
    res.msg = `
    Verifique los siguientes errores, uno o mas de estos errores pueden estar presentes:
    - ❌ El nombre no puede estar vacio
    - ❌ El personaje no puede estar vacio
    - ❌ El indice no puede ser menor a 0
    - ❌ El generator no puede tener espacios
    `;
  }
  return res;
}

function getFinishObject() {
  return {
    ...dataProvider,
    generator:
      dataProvider.generator == ""
        ? dataProvider.index + "_" + dataProvider.name.replace(" ", "")
        : dataProvider.index + "_" + dataProvider.generator,
  };
}
