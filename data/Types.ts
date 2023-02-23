export interface base {
  name: string;
  imgUrl: string;
  pageUrl: string;
  description: string;
}

export interface generator extends base {
  gen: string;
  color?: string;
}

export interface Matter extends generator {
  themes: Theme[];
}

export interface Theme extends generator {
  subThemes: SubTheme[] | generator[];
}

export interface SubTheme extends generator {
  keys?: string[];
  sections?: string[];
}

export interface MatterTheme extends generator {
  themes: generator[];
}

export interface Category {
  name: string;
  pageUrl?: string;
  color?: string;
}
