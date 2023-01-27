import type { generator } from "../Types";
import {routes} from '../routes'

const Patter = routes.route3
const root = "Funcional";
const index: generator = {
  name: "Programación Funcional",
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
