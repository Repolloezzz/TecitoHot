import type { generator } from "../Types";
import { all as Electro } from "./ElectroMagnetismo";
import { all as Mecanica } from "./Mecanica";
import { all as Ondas } from "./Ondas";
import { all as Termo } from "./Termodinamica";

import { routes } from "../routes";

const root = routes.route2;

const index: generator = {
  name: "Física",
  description: 'La física es una ciencia natural que estudia cómo opera el universo. Busca describir la función de las cosas a nuestro alrededor, por ejemplo, cómo se mueven los objetos, por qué las cosas caen, cómo se propaga el sonido, qué es la luz, entre otras.\n\nLa palabra "física" deriva del latín physĭca, que se puede traducir como ‘natural’ o ‘naturaleza’. La física es probablemente la primera ciencia de la humanidad, junto con la matemática, de la que toma gran parte de sus herramientas teóricas.',
  imgUrl: `${root}/Icon.webp`,
  pageUrl: root,
  gen: "Fisica",
  color: 'bg-blue-600'
};

const matter = {
  ...index,
  themes: [Electro, Mecanica, Ondas, Termo],
};

export { index, matter, root };
