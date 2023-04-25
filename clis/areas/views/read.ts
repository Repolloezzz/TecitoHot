import { printBoxSection, printT } from "./components/Text";
import { getAllBaseAreas } from "../../../lib/content/getAreasObject";
import { searchByAttr } from "./components/search";
import type { BaseArea } from "../../../data/types/Area";
import { viewAreaBox } from "./components/Boxes";
import { openArea } from "../functions/Extension";
const clearConsole = require("clear");
const { Select, Toggle } = require("enquirer");

const title = "Leer -  Area CLI";
const message =
  "Seleccione un metodo para mostrar uno o mas areas segun sus atributos unicos. En su mayoria todos los métodos conllevan un proceso de busqueda, también pueden incluir filtros para mostrar, y en algunos casos, es posible abrir los archivos y directorios del area.";
const optionsMessage = [
  "📚 Método que se aplica para más de un elemento",
  "📖 Método que se aplica a un único elemento",
  "❌ Cancelar operacion",
];

export default async function readAreaCli() {
  let finishCLI = false;
  while (!finishCLI) {
    printBoxSection(title, message, optionsMessage);
    const prompt = new Select({
      name: "Read-Area-Options",
      message: "Seleccione una opcion",
      choices: [
        "📚 Mostrar todas las areas",
        "📖 Mostrar un area especifica",
        "💡 Filtrar areas",
        ">> ❌ Volver",
      ],
    });
    const optionSelected = await prompt.run();
    const continueAction = new Toggle({
      message: "Desea cerrar la lectura de areas?",
      enabled: "Si",
      disabled: "No",
    });
    clearConsole();
    switch (optionSelected) {
      case "📚 Mostrar todas las areas":
        printAllAreas();
        finishCLI = await continueAction.run();
        clearConsole();
        break;
      case "📖 Mostrar un area especifica":
        let data = await searchOneArea();
        if (data) {
          await OneAreaOptions(data);
        } else {
          printT("error", "No se encontro el area que buscaba");
        }
        clearConsole();
        break;
      case "💡 Filtrar areas":
        printT("info", "Esta opcion no esta disponible");
        finishCLI = await continueAction.run();
        clearConsole();
        break;
      case ">> ❌ Volver":
        finishCLI = true;
        clearConsole();
        break;
    }
  }
}

const Table = require("cli-table");
function printAllAreas() {
  const areas = getAllBaseAreas();
  const tableAreas = new Table({
    head: ["Index", "Nombre", "Personaje", "Color"],
    colWidths: [10, 20, 20, 20],
  });
  areas.forEach((area) => {
    tableAreas.push([area.index, area.name, area.character, area.color]);
  });
  console.log(tableAreas.toString());
}

// Muestra el area y genera un menu para abrir archivos y directorios
async function searchOneArea() {
  const promp = new Select({
    name: "Search-Area-Options",
    message: "Seleccione una opcion",
    choices: [
      "🔍🎫 Buscar por nombre",
      "🔍🏌️‍♂️ Buscar por personaje",
      "🔍📂 Buscar por generador",
      ">> ❌ Volver",
    ],
  });
  const optionSelected = await promp.run();
  let data: BaseArea | undefined;
  clearConsole();
  switch (optionSelected) {
    case "🔍🎫 Buscar por nombre":
      data = await searchByAttr("name", "Escriba el nombre del area:");
      break;
    case "🔍🏌️‍♂️ Buscar por personaje":
      data = await searchByAttr("character", "Escriba el personaje del area:");
      break;
    case "🔍📂 Buscar por generador":
      data = await searchByAttr("generator", "Escriba el generador del area:");
      break;
    case ">> ❌ Volver":
      break;
  }
  return data;
}
async function OneAreaOptions(area: BaseArea) {
  let finishCLI = false;
  while (!finishCLI) {
    clearConsole();
    console.log(viewAreaBox(area));
    const prompt = new Select({
      name: "One-Area-Options",
      message: "Seleccione una opcion",
      choices: [
        "📂 Abrir directorio de documentos",
        "💾 Abrir directorio de recursos",
        "📄 Abrir archivo del area",
        ">> ❌ Volver",
      ],
    });
    const optionSelected = await prompt.run();
    switch (optionSelected) {
      case "📂 Abrir directorio de documentos":
        await openArea("content", area.generator);
        break;
      case "💾 Abrir directorio de recursos":
        await openArea("resource", area.generator);
        break;
      case "📄 Abrir archivo del area":
        await openArea("content", area.generator, "area.json");
        break;
      case ">> ❌ Volver":
        finishCLI = true;
        break;
    }
  }
}
