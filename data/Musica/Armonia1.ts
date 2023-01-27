import type { generator } from "../Types";
import { routes } from "../routes";

const Patter = routes.route1;
const root = "Armonia1";
const index: generator = {
  name: "Armonia 1",
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
