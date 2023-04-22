import type Theme from "./Theme";

export interface FileArea {
  name: string;
  description: string;
  character: string;
  color: string;
}

export interface BaseArea extends FileArea {
  index: number;
  generator: string;
}

export interface Area extends BaseArea {
  image: string;
  url: string;
  themes: Theme[];
}
