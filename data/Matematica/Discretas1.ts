import type { generator } from "../Types";
import {routes} from '../routes'

const Patter = routes['matematica'];
const root = "Discretas1";
const index: generator = {
  name: "Discretas 1",
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
