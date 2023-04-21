import type Doc from "../../data/types/Post";
import type { Post } from "../../data/types/Post";
import matter from "gray-matter";
import { getDirsPosts } from "./getGenerators";
import { contentDir } from "@/data/routes";

import fs from "fs";
import path from "path";

// Extrae los datos del archivo .mdx
export function getDocObjects(
  area: string,
  theme: string,
  modul: string
): Doc[] {
  try {
    const dirs = getDirsPosts(area, theme, modul);
    const files = dirs.map((dir) => {
      return fs.readFileSync(
        path.join(contentDir, area, theme, modul, `${dir}.mdx`),
        "utf-8"
      );
    });
    const docs = files.map((file) => {
      const { data } = matter(file);
      return data as Doc;
    });
    return docs;
  } catch (error) {
    console.log("Error en getDocObjects()");
    console.error(error);
    return [];
  }
}

// Extrae los datos del archivo .mdx asi como información de creación y modificación
export function getPostObjects(
  area: string,
  theme: string,
  modul: string
): Post[] {
  try {
    const docs = getDocObjects(area, theme, modul);
    const posts = docs.map((doc, index) => {
      const { birthtime, mtime } = fs.statSync(
        path.join(contentDir, area, theme, modul, `${doc.gen}.mdx`)
      );
      const post: Post = {
        ...doc,
        index,
        created: birthtime,
        updated: mtime,
      };
      return post;
    });
    return posts;
  } catch (error) {
    console.log("Error en getPostObjects()");
    console.error(error);
    return [];
  }
}
