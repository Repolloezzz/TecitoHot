import { getAllContributors } from "./DataFunctions";
const Table = require("cli-table");

export default function listContributorsCLI() {
  const contributors = getAllContributors();
  if (contributors.length > 0) {
    const table = new Table({
      head: ["Nombre / Alias", "Email", "GitHub", "Twitter"],
      colWidths: [20, 30, 20, 20],
    });
    contributors.forEach((contributor) => {
      table.push([
        contributor.name !== "" ? contributor.name : "Sin nombre",
        contributor.email !== "" ? contributor.email : "Sin email",
        contributor.github !== "" ? contributor.github : "Sin GitHub",
        contributor.twitter !== "" ? contributor.twitter : "Sin Twitter",
      ]);
    });
    console.log(table.toString());
  } else {
    console.log("No hay contribuidores para mostrar");
  }
}
