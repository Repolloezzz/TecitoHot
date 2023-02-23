import type { generator } from "../Types";
import {routes} from '../routes'

const Patter = routes['informatica']
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
