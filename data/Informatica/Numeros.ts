import type { generator } from "../Types";
import {routes} from '../routes'

const Patter = routes.route3
const root = "Numeros";
const index: generator = {
  name: "Teoria de números",
  imgUrl: `${Patter}/${root}/Icon.webp`,
  pageUrl: `${Patter}/${root}`,
  description: "",
  gen: root,
};

const subThemes: generator[] = [];

const all = {
  ...index,
  subThemes,
};
export { index, subThemes, all };
