import createAreaCli from "./views/create";
import readAreaCli from "./views/read";
import updateAreaCli from "./views/update";
import deleteAreaCli from "./views/delete";
import { printBoxSection, printT } from "./views/components/Text";
import wait from "./views/components/wait";
const clearConsole = require("clear");
const { Select } = require("enquirer");

const title = "Area - CRUD CLI";
const message =
  "Este es una interfaz de linea de comandos que tiene el objetivo de realizar procesos datos y archivos de las areas del blog, como crear, leer, actualizar y eliminar. La interfaz es interactiva y se puede navegar con las flechas del teclado, el espaciador y la tecla enter.";
const optionsMessage: string[] = [];

areaCli();
export default async function areaCli() {
  clearConsole();
  let finishCLI = false;
  while (!finishCLI) {
    printBoxSection(title, message, optionsMessage);
    const prompt = new Select({
      name: "Area-Options",
      message: "Seleccione una opcion",
      choices: [
        "🧱 Crear",
        "📚 Leer",
        "🔧 Actualizar",
        "🗑️ Eliminar",
        ">> ❌ Salir",
      ],
    });
    const optionSelected = await prompt.run();
    switch (optionSelected) {
      case "🧱 Crear":
        clearConsole();
        await createAreaCli();
        clearConsole();
        break;
      case "📚 Leer":
        clearConsole();
        await readAreaCli();
        clearConsole();
        break;
      case "🔧 Actualizar":
        clearConsole();
        await updateAreaCli();
        clearConsole();
        break;

      case "🗑️ Eliminar":
        clearConsole();
        await deleteAreaCli();
        clearConsole();
        break;
      case ">> ❌ Salir":
        clearConsole();
        printT("accent", "👋 Hasta luego!");
        await wait(2000);
        finishCLI = true;
        clearConsole();
        break;
    }
  }
}
