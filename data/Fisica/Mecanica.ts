import type { generator, SubTheme } from "../Types";
import {routes} from '../routes'

const Patter = routes.route2
const root = "Mecanica";
const index: generator = {
  name: "Mecanica",
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
