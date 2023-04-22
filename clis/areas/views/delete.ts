import { H1, justify, p, errorMSG, successMSG } from "./components/Text";
import { viewBox, viewAreaBox } from "./components/Boxes";
import { searchByAttr } from "./components/search";
import { wait } from "./components/animations";
import { quitArea } from "../functions/Extension";
const clearConsole = require("clear");
const { Select, Toggle } = require("enquirer");

const message =
  "Seleccione la opcion buscar para continuar con la eliminacion de un area, siempre y cuado\n" +
  "existan areas registradas en el sistema y que cumplan con los requisitos de busqueda. Entonces" +
  "se mostrara el area que desea eliminar y se le pedira que confirme la accion.\n" +
  "🎯 Puede buscar el area por atributos unicos de cada area:";
const optionsMessage = `
    - 🔍 Tipo de busqueda
    - ❌ Cancelar operacion
`;

export default async function deleteAreaCli() {
  clearConsole();
  let finish = false;
  while (!finish) {
    console.log(
      viewBox(
        H1(">>> Eliminar area <<<"),
        justify(message) + "\n" + p(optionsMessage)
      )
    );
    const props = new Select({
      name: "Delete-Area-Options",
      message: "Seleccione una opcion",
      choices: [
        "🔍🎫 Buscar por nombre",
        "🔍🏌️‍♂️ Buscar por personaje",
        "🔍📂 Buscar por generador",
        "🔍🎲 Buscar por indice",
        ">> ❌ Cancelar",
      ],
    });
    const optionSelected = await props.run();
    const continueAction = new Toggle({
      name: "Continue",
      message: "Esta seguro que desea eliminar el area?",
      enabled: "Estoy seguro",
      disabled: "No, cancelar",
    });
    let data;
    switch (optionSelected) {
      case "🔍🎫 Buscar por nombre":
        data = await searchByAttr("name", "Escriba el nombre del area:");
        if (data) {
          console.log(viewAreaBox(data));
          finish = await continueAction.run();
          if (finish) {
            quitArea(data);
            console.log(successMSG("Area eliminada con exito!"));
            break;
          }
        } else {
          console.log(errorMSG("No se encontro el area!"));
        }
        await wait(() => {}, 2000);
        clearConsole();
        break;
      case "🔍🏌️‍♂️ Buscar por personaje":
        data = await searchByAttr(
          "character",
          "Escriba el personaje del area:"
        );
        if (data) {
          console.log(viewAreaBox(data));
          finish = await continueAction.run();
          if (finish) {
            quitArea(data);
            console.log(successMSG("Area eliminada con exito!"));
            break;
          }
        } else {
          console.log(errorMSG("No se encontro el area!"));
        }
        await wait(() => {}, 2000);
        clearConsole();
        break;
      case "🔍📂 Buscar por generador":
        data = await searchByAttr(
          "generator",
          "Escriba el generador del area:"
        );
        if (data) {
          console.log(viewAreaBox(data));
          finish = await continueAction.run();
          if (finish) {
            quitArea(data);
            console.log(successMSG("Area eliminada con exito!"));
            break;
          }
        } else {
          console.log(errorMSG("No se encontro el area!"));
        }
        await wait(() => {}, 2000);
        clearConsole();
        break;
      case "🔍🎲 Buscar por indice":
        data = await searchByAttr("index", "Escriba el indice del area:");
        if (data) {
          console.log(viewAreaBox(data));
          finish = await continueAction.run();
          if (finish) {
            quitArea(data);
            console.log(successMSG("Area eliminada con exito!"));
            break;
          }
        } else {
          console.log(errorMSG("No se encontro el area!"));
        }
        await wait(() => {}, 2000);
        clearConsole();
        break;
      case ">> ❌ Cancelar":
        const cancelAction = new Toggle({
          name: "cancel",
          message: "Desea cancelar la eliminacion del area?",
          enabled: "Si",
          disabled: "No",
        });
        finish = await cancelAction.run();
        clearConsole();
        break;
    }
  }
}
