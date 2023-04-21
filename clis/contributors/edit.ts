import type Contributor from "../../data/types/Contributor";
import {
  isContributor,
  addContributor,
  getContributor,
  deleteContributor,
} from "./DataFunctions";
import chalk from "chalk";
import {
  searchContributor,
  fromContributorParams,
  confirmToggle,
  loadProcess,
  formatDataForm,
} from "./Components";

export default async function editContributor() {
  // Buscar el contribuidor a editar, si existe, entonces editar
  const contributorName = await searchContributor().run();
  if (isContributor(contributorName)) {
    console.log("✅", "Contribuidor encontrado");
    console.log(
      chalk`{bold.blueBright Se editara el contribuidor:} ${contributorName}`
    );
    // Correr los formularios
    const oldContributor = getContributor(contributorName);
    const contributor: Contributor = await fromContributorParams(
      oldContributor
    ).run();
    console.log(formatDataForm(contributor));
    const { name } = contributor;
    await validate(name, () => {
      loadProcess("Editando contribuidor...", "Contribuidor editado!!!", () => {
        deleteContributor(contributorName);
        addContributor(contributor);
      });
    });
  } else {
    const error = chalk`{bold.redBright El nombre del contribuidor no existe}`;
    console.log("❌", error);
  }
}

async function validate(name: string, action: Function) {
  if (name != "") {
    const confirm: any = await confirmToggle().run();
    if (confirm) {
      action();
    } else {
      const end = chalk`{bold.redBright Operacion cancelada}`;
      console.log("❌", end);
    }
  } else {
    const error = chalk`{bold.redBright El nombre del contribuidor no puede estar vacio}`;
    console.log("⚠", error);
  }
}
