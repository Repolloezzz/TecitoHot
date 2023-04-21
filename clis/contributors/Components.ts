import Contributor from "@/data/types/Contributor";
import { getAllContributors } from "./DataFunctions";
import boxen from "boxen";
import ora from "ora";

const { Form, Toggle, AutoComplete } = require("enquirer");

export const defaulData = {
  name: "",
  email: "",
  github: "",
  twitter: "",
};

export function confirmToggle(message = "Esta seguro de este contribuidor?") {
  return new Toggle({
    message,
    enabled: "Si",
    disabled: "No",
  });
}

export function searchContributor() {
  return new AutoComplete({
    name: "contributor",
    message: "Seleccione el contribuidor a editar",
    limit: 10,
    choices: getAllContributors().map((contributor) => contributor.name),
  });
}

export function fromContributorParams(params?: Contributor) {
  params = params ?? defaulData;
  return new Form({
    name: "contributor",
    message: "Por favor ingrese los datos del contribuidor",
    choices: [
      { name: "name", message: "Nombre / Alias", initial: params.name },
      {
        name: "email",
        message: "Email",
        initial: params.email,
      },
      { name: "github", message: "GitHub", initial: params.github },
      { name: "twitter", message: "Twitter", initial: params.twitter },
    ],
  });
}

export function formatDataForm(contributor: Contributor) {
  return boxen(
    `Nombre: ${contributor.name}\nEmail: ${contributor.email}\nGitHub: ${contributor.github}\nTwitter: ${contributor.twitter}`,
    {
      padding: 1,
      margin: 1,
      borderStyle: "double",
      title: "📑 Datos recibidos",
    }
  );
}

export function loadProcess(
  message: string,
  messageSuccess: string,
  action: Function
) {
  const spinner = ora(message).start();
  setTimeout(async () => {
    await action();
    spinner.text = messageSuccess;
    spinner.succeed();
  }, 500);
}
