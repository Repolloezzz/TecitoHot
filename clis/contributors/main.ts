import createContributor from "./create";
import editContributor from "./edit";
import deleteContributorCLI from "./delete";
import listContributorsCLI from "./list";
import chalk from "chalk";

const { Select } = require("enquirer");

async function ContributorCLI() {
  let loop = true;
  while (loop) {
    console.log(
      chalk.bgCyanBright.black.bold("Bienvenido al CLI de contribuidores")
    );
    const menu = new Select({
      name: "action",
      message: "Que desea hacer?",
      choices: [
        "Crear un nuevo contribuidor",
        "Editar un contribuidor",
        "Borrar un contribuidor",
        "Listar todos los contribuidores",
        "Salir",
      ],
    });
    const options = await menu.run();
    switch (options) {
      case "Crear un nuevo contribuidor":
        console.log(chalk.bold.bgYellow("Crear un nuevo contribuidor"));
        await createContributor();
        break;
      case "Editar un contribuidor":
        console.log(chalk.bold.bgYellow("Editar un contribuidor"));
        await editContributor();
        break;

      case "Borrar un contribuidor":
        console.log(chalk.bold.bgYellow("Borrar un contribuidor"));
        await deleteContributorCLI();
        break;

      case "Listar todos los contribuidores":
        console.log(chalk.bold.bgYellow("Listar todos los contribuidores"));
        listContributorsCLI();
        break;

      case "Salir":
        console.log(chalk.bgCyanBright.black.bold("👋 Hasta luego!"));
        loop = false;
        break;
    }
  }
}

ContributorCLI();
