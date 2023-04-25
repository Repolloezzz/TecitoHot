import { printBoxSection, printT } from "./components/Text";
import type { BaseArea } from "../../../data/types/Area";
import wait from "./components/wait";
import { getAreasCount } from "../functions/CRUD";
import { genArea } from "../functions/validate";
import { insertArea } from "../functions/Extension";
import { validateData } from "../functions/validate";
import editAttrArea from "./others/attrSelect";
import printPreviewArea from "./others/printArea";

const { Select, Toggle } = require("enquirer");
const clearConsole = require("clear");

const title = "Crear - Area CLI";
const message =
  "Selecciones las opciones que desea definir para la creacion de un nuevo area. Recuerde que todos los datos ingresados seran validados y si no cumplen con los requisitos. El sistema no los guardara y le pedira que los vuelva a ingresar";
const optionsMessage = [
  "🛑 Campo obligatorio",
  "📌 Campo opcional",
  "🧰 Generado por el sistema",
];
// Objeto Default, plantilla para la creacion de un area
let dataProvider: BaseArea = {
  name: "",
  description: "",
  character: "",
  color: "",
  index: getAreasCount() + 1,
  generator: "",
};

export default async function createAreaCli() {
  let finish = false;
  while (!finish) {
    // Presentación de la vista de create
    printBoxSection(title, message, optionsMessage);
    const promps = new Select({
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
        ">> ❌ Volver",
      ],
    });
    const optionSelected = await promps.run();
    clearConsole();
    switch (optionSelected) {
      case "🛑 Nombre del area":
        await editAttrArea("name", "Escriba el nombre del area:", dataProvider);
        clearConsole();
        break;
      case "📌 Descripcion del area":
        await editAttrArea(
          "description",
          "Escriba una descripcion del area:",
          dataProvider
        );
        clearConsole();
        break;
      case "🛑 Personaje del area":
        await editAttrArea(
          "character",
          "Escriba un personaje caracteristico:",
          dataProvider
        );
        clearConsole();
        break;
      case "📌 Color del area":
        await editAttrArea(
          "color",
          "Escriba un color referente a tailwind:",
          dataProvider
        );
        clearConsole();
        break;
      case "🧰 Generador del area":
        await editAttrArea(
          "generator",
          "Escriba un nombre para el archivo",
          dataProvider
        );
        clearConsole();
        break;
      case "🧰 Indice del area":
        await editAttrArea(
          "index",
          "Escriba la posición de orden del area:",
          dataProvider
        );
        clearConsole();
        break;
      case ">> 🎴 Vista previa del area":
        await printPreviewArea(
          genArea(dataProvider),
          "Continuar...",
          "Si",
          "SI"
        );
        clearConsole();
        break;
      case ">> 🔨 Crear area":
        const isValid = validateData(genArea(dataProvider));
        printT("info", isValid.msg);
        if (await createAreaOrNot(isValid)) break;
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
        finish = await continueAction.run();
        clearConsole();
        break;
    }
  }
}

async function createAreaOrNot(isValid: { valid: boolean; msg: string }) {
  let success = false;
  if (isValid.valid) {
    success = await printPreviewArea(
      genArea(dataProvider),
      "Esta seguro de que desea crear esta area?",
      "Si",
      "No"
    );
    if (success) {
      insertArea(genArea(dataProvider));
      printT("success", "Area insertada con exito✅✅✅");
      //break;
    }
  }
  return success;
}