import type { generator } from "../Types";
import {routes} from '../routes'

const Patter = routes['fisica']
const root = "electro";
const index: generator = {
  name: "Electromagnetismo",
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
