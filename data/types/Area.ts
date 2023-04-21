import type Theme from "./Theme";

export interface BaseArea {
  name: string;
  description: string;
  character: string;
  index: number;
  generator: string;
  color: string;
}

export interface Area extends BaseArea {
  image: string;
  url: string;
  themes: Theme[];
}
