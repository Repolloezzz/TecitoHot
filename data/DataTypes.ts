export interface Base {
  name: string;
  index: number;
  gen: string;
  url: string;
  description: string;
}

export interface View extends Base {
  description: string;
  img: string;
}

export interface Content extends Base {
  keys: string[];
  created: string;
  updated: string;
}

export interface SubTheme extends Base {
  contents: Content[];
}

export interface Theme extends View {
  subThemes: SubTheme[];
}

export interface Matter extends View {
  color: string;
  character: string;
  themes: Theme[];
}

export default Base;
