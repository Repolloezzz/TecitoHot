import type { generator } from "../Types";
import { all as Alg } from "./AlgebraLineal";
import { all as Ca1 } from "./Calculo1";
import { all as Ca2 } from "./Calculo2";
import { all as Ca3 } from "./Calculo3";
import { all as Dis1 } from "./Discretas1";
import { all as Dis2 } from "./Discretas2";
import { routes } from "../routes";

const root = routes.route1;

const index: generator = {
  name: "Matemática",
  description:
    "La matemática2​ (del latín mathematĭca, y este del griego μαθηματικά, transliterado como mathēmatiká, derivado de μάθημα, tr. máthēma. 'conocimiento') es una ciencia formal que surgió del estudio de las figuras geométricas y la aritmética con números. No existe una definición generalmente aceptada de las matemáticas; hoy en día se suelen describir como una ciencia que utiliza la lógica para examinar las propiedades y los patrones de las estructuras abstractas creadas por las definiciones lógicas.",
  imgUrl: `${root}/Icon.webp`,
  pageUrl: root,
  gen: "Matematica",
  color: 'red'
};

const matter = {
  ...index,
  themes: [Alg, Ca1, Ca2, Ca3, Dis1, Dis2],
};

export { index, matter, root };
