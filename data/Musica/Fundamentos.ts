import type { generator } from "../Types";
import {routes} from '../routes'

const Patter = routes['musica']
const root = "Fundamentos";
const index: generator = {
  name: "Fundamentos de la música",
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
