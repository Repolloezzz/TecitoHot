import { printBoxSection, printT } from "./components/Text";
import { viewAreaBox } from "./components/Boxes";
import { searchByAttr } from "./components/search";
import { validateData } from "../functions/validate";
import { updateArea } from "../functions/Extension";
import printPreviewArea from "./others/printArea";
import editAttrArea from "./others/attrSelect";
import wait from "./components/wait";
import { genArea } from "../functions/validate";
import { BaseArea } from "../../../data/types/Area";
const clearConsole = require("clear");
const { Select, Toggle } = require("enquirer");

const title = "Actualizar - Area CLI";
const message =
  "Seleccione la opcion buscar para continuar con la actualizacion de un area, siempre y cuado " +
  "existan areas registradas en el sistema y que cumplan con los requisitos de busqueda. Entonces " +
  "se mostrara el area que desea actualizar y se le pedira que confirme la accion." +
  "🎯 Puede buscar el area por atributos unicos de cada area:";

const optionsMessage = ["🔍 Tipo de busqueda", "❌ Cancelar operacion"];
export default async function updateAreaCli() {
  clearConsole();
  let finish = false;
  while (!finish) {
    printBoxSection(title, message, optionsMessage);
    const props = new Select({
      name: "Update-Area-Options",
      message: "Seleccione una opcion",
      choices: [
        "🔍🎫 Buscar por nombre",
        "🔍🏌️‍♂️ Buscar por personaje",
        "🔍📂 Buscar por generador",
        ">> ❌ Volver",
      ],
    });
    const optionSelected = await props.run();
    let data;
    switch (optionSelected) {
      case "🔍🎫 Buscar por nombre":
        data = await searchByAttr("name", "Escriba el nombre del area:");
        if (data) {
          finish = await validateAction(data);
        }
        break;
      case "🔍🏌️‍♂️ Buscar por personaje":
        data = await searchByAttr(
          "character",
          "Escriba el nombre del personaje:"
        );
        if (data) {
          finish = await validateAction(data);
          if (finish) break;
        }
        break;
      case "🔍📂 Buscar por generador":
        data = await searchByAttr(
          "generator",
          "Escriba el nombre del generador:"
        );
        if (data) {
          finish = await validateAction(data);
        }
        break;
      case ">> ❌ Volver":
        finish = true;
        break;
    }
  }
}

async function validateAction(area: BaseArea) {
  let success = false;
  console.log(viewAreaBox(area));
  const continueAction = new Toggle({
    name: "Continue",
    message: "Esta seguro que desea actualizar el area?",
    enabled: "Estoy seguro",
    disabled: "No, cancelar",
  });
  if (area) {
    if (await continueAction.run()) {
      success = true;
      await formAreaEdit(area);
    }
  }
  return success;
}

async function formAreaEdit(area: BaseArea) {
  let finishCLI = false;
  let areaUpdated: BaseArea = {
    ...area,
    generator: area.generator.split("_")[1],
  };
  while (!finishCLI) {
    const props = new Select({
      name: "Update-Area-Options",
      message: "Seleccione una opcion",
      choices: [
        "🛑 Nombre del area",
        "📌 Descripcion del area",
        "🛑 Personaje del area",
        "📌 Color del area",
        "🧰 Generador del area",
        "🧰 Indice del area",
        ">> 🎴 Vista previa del area",
        ">> 🔧 Actualizar area",
        ">> ❌ Volver",
      ],
    });
    const optionSelected = await props.run();
    switch (optionSelected) {
      case "🛑 Nombre del area":
        await editAttrArea("name", "Escriba el nombre del area:", areaUpdated);
        clearConsole();
        break;
      case "📌 Descripcion del area":
        await editAttrArea(
          "description",
          "Escriba una descripcion del area:",
          areaUpdated
        );
        clearConsole();
        break;
      case "🛑 Personaje del area":
        await editAttrArea(
          "character",
          "Escriba un personaje caracteristico:",
          areaUpdated
        );
        clearConsole();
        break;
      case "📌 Color del area":
        await editAttrArea(
          "color",
          "Escriba un color referente a tailwind:",
          areaUpdated
        );
        clearConsole();
        break;
      case "🧰 Generador del area":
        await editAttrArea(
          "generator",
          "Escriba un nombre para el archivo",
          areaUpdated
        );
        clearConsole();
        break;
      case "🧰 Indice del area":
        await editAttrArea(
          "index",
          "Escriba la posición de orden del area:",
          areaUpdated
        );
        clearConsole();
        break;
      case ">> 🎴 Vista previa del area":
        await printPreviewArea(
          genArea(areaUpdated),
          "Continuar...",
          "Si",
          "SI"
        );
        clearConsole();
        break;
      case ">> 🔧 Actualizar area":
        const isValid = validateData(genArea(areaUpdated));
        printT("info", isValid.msg);
        if (isValid.valid) {
          await editAreaOrNot(areaUpdated);
        }
        await wait(2000);
        clearConsole();
        break;

      case ">> ❌ Volver":
        const continueAction = new Toggle({
          name: "Continue",
          message: "Desea cancelar la creacion del area?",
          enabled: "Si",
          disabled: "No",
        });
        finishCLI = await continueAction.run();
        clearConsole();
        break;
    }
  }
}

async function editAreaOrNot(area: BaseArea) {
  let success = false;
  const continueAction = new Toggle({
    name: "Continue",
    message: "Esta seguro que desea actualizar el area?",
    enabled: "Estoy seguro",
    disabled: "No, cancelar",
  });
  if (await continueAction.run()) {
    success = true;
    updateArea(area);
  }
  return success;
}
