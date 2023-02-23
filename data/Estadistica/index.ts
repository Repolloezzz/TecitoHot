import { routes } from "../routes";
import type { generator } from "../Types";

import {all as Prob} from './Probabilidad'

const root = routes["estadistica"];

const index: generator = {
  name: "Estadística",
  description: "",
  imgUrl: `${root}/Icon.webp`,
  pageUrl: root,
  gen: "Estadistica",
  color: "bg-cyan-700",
};

const matter = {
  ...index,
  themes: [Prob]
};

export { index, matter };
