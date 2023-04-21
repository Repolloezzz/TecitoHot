import type Author from "./Contributor";
import type Category from "./Category";

// Atributos definidos en un archivo .mdx
export default interface Doc {
  name: string;
  author: Author;
  categories: Category[];
  tags: string[];
  gen: string;
}

// Atributos generados por el sistema
export interface Post extends Doc {
  index: number;
  created: Date;
  updated: Date;
}

// Dirección de la página web de un post
export interface Page extends Post {
  url: string;
}
