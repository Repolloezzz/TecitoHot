import type { generator } from "../Types";
import {routes} from '../routes'

const Patter = routes['matematica'];
const root = "Calculo2";
const index: generator = {
  name: "Cálculo 2",
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
