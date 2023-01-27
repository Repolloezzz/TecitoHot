import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = (rootTheme: string) =>
  fs.readdirSync(path.join(root, rootTheme));

export const getFileBySlug = async (slug: string, rootTheme: string) => {
  const mdxSource = fs.readFileSync(
    path.join(root, rootTheme, `${slug}.mdx`),
    "utf-8"
  );

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {});

  return {
    source,
    frontMatter: {
      slug,
      ...data,
    },
  };
};

export const getAllFilesMetaData = (rootTheme: string) => {
  try {
    const files = getFiles(rootTheme);
    return files.reduce((allPosts: any, postSlug: any) => {
      const mdxSource = fs.readFileSync(
        path.join(root, rootTheme, postSlug),
        "utf-8"
      );
      const { data } = matter(mdxSource);
      return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
    }, []);
  } catch (error) {
    return { hola: "fallo todo " };
  }
};
