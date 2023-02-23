import type { generator } from "../Types";
import { all as Fun } from "./Fundamentos";
import { all as Arm1 } from "./Armonia1";
import { routes } from "../routes";

const root = routes['musica'];
const index: generator = {
  name: "Música",
  description:
    "La música (del griego: μουσική [τέχνη] - mousikē [téchnē], «el arte de las musas») es, según la definición tradicional del término, el arte de crear y organizar sonidos y silencios respetando los principios fundamentales de la melodía, la armonía y el ritmo, mediante la intervención de complejos procesos psicoanímicos. El concepto de música ha ido evolucionando desde su origen en la Antigua Grecia, en que se reunía sin distinción a la poesía, la música y la danza como arte unitario. Desde hace varias décadas se ha vuelto más compleja la definición de qué es y qué no es la música, ya que destacados compositores en el marco de diversas experiencias artísticas fronterizas han realizado obras que, si bien podrían considerarse musicales, expanden los límites de la definición de este arte.",
  imgUrl: `${root}/Icon.webp`,
  pageUrl: root,
  gen: "Musica",
  color: "bg-indigo-700",
};

const matter = {
  ...index,
  themes: [Fun, Arm1],
};

export { index, matter, root };
