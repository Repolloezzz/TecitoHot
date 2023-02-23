import type { generator, SubTheme } from "../Types";
import { routes } from "../routes";

const MatterRoute = routes["estadistica"];
const root = "Probabilidad";

const index: generator = {
  name: "Probabilidad y estadística",
  imgUrl: `${MatterRoute}/${root}/Icon.webp`,
  pageUrl: `${MatterRoute}/${root}`,
  description: "",
  gen: root,
};

const subThemes: SubTheme[] = [
  {
    name: "Conceptos generales",
    imgUrl: "",
    pageUrl: `${MatterRoute}/${root}/ConceptosGenerales`,
    description: "",
    gen: "ConceptosGenerales",
    sections: [
      "ecuaciones lineales",
      "conjunto solución",
      "sistemas de ecuaciones",
      "operaciones elementales",
      "resolucion de un sistema",
      "metodos de reduccion",
    ],
  },
];

const all = {
  ...index,
  subThemes,
};

export { index, subThemes, all };