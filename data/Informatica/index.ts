import type { generator } from "../Types";
import { all as Fun } from "./Funcional";
import { all as Log } from "./Logica";
import { all as Poo } from "./POO";
import { all as Num } from "./Numeros";

import { routes } from "../routes";

const root = routes.route3;
const index: generator = {
  name: "Informática",
  description:
    "La informática,1​ también llamada computación,2​ es el área de la ciencia que se encarga de estudiar la administración de métodos, técnicas y procesos con el fin de almacenar, procesar y transmitir información y datos en formato digital. La informática abarca desde disciplinas teóricas (como algoritmos, teoría de la computación y teoría de la información) hasta disciplinas prácticas (incluido el diseño y la implementación de hardware y software).3​ La informática generalmente se considera un área de investigación académica y distinta de la programación informática.4​",
  imgUrl: `${root}/Icon.webp`,
  pageUrl: root,
  gen: "Informatica",
  color: 'bg-slate-700'
};

const matter = {
  ...index,
  themes: [Fun, Log, Poo, Num],
};

export { index, matter, root };
