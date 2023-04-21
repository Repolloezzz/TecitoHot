import {
  isContributor,
  getContributor,
  getAllContributors,
  deleteContributor,
} from "./DataFunctions";
import chalk from "chalk";
import {
  searchContributor,
  defaulData,
  formatDataForm,
  confirmToggle,
  loadProcess,
} from "./Components";

export default async function deleteContributorCLI() {
  // Buscar el contribuidor a editar, si existe, entonces editar
  await validate(async () => {
    const contributorName = await searchContributor().run();
    if (isContributor(contributorName)) {
      console.log("✅", "Contribuidor encontrado");
      const contributor = getContributor(contributorName) ?? defaulData;
      console.log(formatDataForm(contributor));
      const confirm = await confirmToggle().run();
      if (confirm) {
        loadProcess(
          "Borrando contribuidor...",
          "Contribuidor borrado!!!",
          () => {
            deleteContributor(contributorName);
          }
        );
      } else {
        const end = chalk`{bold.redBright Operacion cancelada}`;
        console.log("❌", end);
      }
    }
  });
}

async function validate(action: Function) {
  if (getAllContributors().length > 0) {
    await action();
  } else {
    const end = chalk`{bold.redBright No hay contribuidores para borrar, operacion cancela}`;
    console.log("❌", end);
  }
}
