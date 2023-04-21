import type Module from "./Module";
export default interface Theme {
  name: string;
  description: string;
  image: string;
  url: string;
  modules: Module[];
}
