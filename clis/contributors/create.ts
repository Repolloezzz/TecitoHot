import type Contributor from "../../data/types/Contributor";
import { isContributor, addContributor } from "./DataFunctions";
import chalk from "chalk";

// * Definicion de el contenido a mostrar
import {
  fromContributorParams,
  confirmToggle,
  formatDataForm,
  loadProcess,
} from "./Components";

// * Definicion de la funcion principal
export default async function createContributor() {
  const contributor: Contributor = await fromContributorParams().run();
  console.log(formatDataForm(contributor));
  const { name } = contributor;
  await validate(name, () => {
    loadProcess("Creando contribuidor...", "Contribuidor creado!!!", () => {
      addContributor(contributor);
    });
  });
}

// Para confirmar y validar las acciones
async function validate(name: string, action: Function) {
  if (name != "") {
    if (!isContributor(name)) {
      const confirm: any = await confirmToggle().run();
      if (confirm) {
        await action();
      } else {
        const end = chalk`{bold.redBright Operacion cancelada}`;
        console.log("❌", end);
      }
    } else {
      const error = chalk`{bold.redBright El nombre del contribuidor ya existe}`;
      console.log("❌", error);
    }
  } else {
    const error = chalk`{bold.redBright El nombre del contribuidor no puede estar vacio}`;
    console.log("⚠", error);
  }
}
