import { printT, printBoxSection } from "./components/Text";
import { getAreasCount } from "../functions/CRUD";
import { searchByAttr } from "./components/search";
import wait from "./components/wait";
import { quitArea } from "../functions/Extension";
import printPreviewArea from "./others/printArea";
import { BaseArea } from "@/data/types/Area";
const clearConsole = require("clear");
const { Select } = require("enquirer");

const title = "Eliminar - Area CLI";
const message =
  "Seleccione la opcion buscar para continuar con la eliminacion de un area, siempre y cuado existan areas registradas en el sistema y que cumplan con los requisitos de busqueda. Entonces, se mostrara el area que desea eliminar y se le pedira queconfirme la accion.\n🎯 Puede buscar el area por atributos unicos de cada area:";
const optionsMessage = ["🔍 Tipo de busqueda", "❌ Cancelar operacion"];

export default async function deleteAreaCli() {
  let finish = false;
  const numberAreasValid = getAreasCount() > 0;
  if (!numberAreasValid) {
    printT("error", "No hay areas registradas en el sistema!");
    await wait(2000);
    clearConsole();
  }
  while (!finish && numberAreasValid) {
    printBoxSection(title, message, optionsMessage);
    const props = new Select({
      name: "Delete-Area-Options",
      message: "Seleccione una opcion",
      choices: [
        "🔍🎫 Buscar por nombre",
        "🔍🏌️‍♂️ Buscar por personaje",
        "🔍📂 Buscar por generador",
        ">> ❌ Volver",
      ],
    });
    const optionSelected = await props.run();
    let data: BaseArea | undefined;
    clearConsole();
    switch (optionSelected) {
      case "🔍🎫 Buscar por nombre":
        data = await searchByAttr("name", "Escriba el nombre del area:");
        if (await deleteDataOrNot(data)) break;
        await wait(2000);
        clearConsole();
        break;
      case "🔍🏌️‍♂️ Buscar por personaje":
        data = await searchByAttr(
          "character",
          "Escriba el personaje del area:"
        );
        if (await deleteDataOrNot(data)) break;
        await wait(2000);
        clearConsole();
        break;
      case "🔍📂 Buscar por generador":
        data = await searchByAttr(
          "generator",
          "Escriba el generador del area:"
        );
        if (await deleteDataOrNot(data)) break;
        await wait(2000);
        clearConsole();
        break;
      case ">> ❌ Volver":
        finish = true;
        clearConsole();
        break;
    }
  }
}

async function deleteDataOrNot(data: BaseArea | undefined) {
  let success = false;
  if (data) {
    success = await printPreviewArea(
      data,
      "Esta seguro que desea eliminar el area?",
      "Estoy seguro",
      "No, cancelar"
    );
    if (success) {
      quitArea(data);
      printT("success", "Area eliminada con exito!");
      // break
    }
  } else {
    printT("error", "No se encontro el area!");
  }
  return success;
}
