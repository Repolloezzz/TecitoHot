import type { generator } from "../Types";
import {routes} from '../routes'

const Patter = routes.route1
const root = "Discretas2";
const index: generator = {
  name: "Discretas 2",
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
