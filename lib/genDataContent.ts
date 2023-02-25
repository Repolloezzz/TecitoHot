import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { generator, SubTheme, SubThemeMD } from "../data/Types";

// * Operaciones establecidas en la ruta markdown
const root = process.cwd();
export const getFiles = (...rootTheme: string[]) =>
  fs.readdirSync(path.join(root, "markdown", ...rootTheme));
export const readFiles = (...rootTheme: string[]) =>
  fs.readFileSync(path.join(root, "markdown", ...rootTheme), "utf-8");

// * Para detectar y generar directorios que cumplen las condiciones descritas en format.excalidraw
// ? format.excalidraw es un archivo que describe como se debe de estructurar un directorio para generarlo
/**
 * ! PARA TODOS LOS GETTERS
 * 1.- Obtener las rutas segun el tipo (Matter, Theme, SubTheme)
 * 2.- Validar si cumple las condiciones dadas
 * 3.- Filtrar unicamente los archivos o directorios validos
 * 4.- Generar sus rutas
 * @ return : lista de las rutas o archivos validos generados
 */
export const getMatterGenerators = () => {
  // Obtener todas las carpetas en el markdown
  let generators = getFiles("");
  // Para filtrar archivos no deseados para la generación
  generators = generators.filter(
    (gen) => !gen.includes(".json") && !generators.includes(".excalidraw")
  );
  let data: string[] = [];
  generators.forEach((gen) => {
    let matterRoot = getFiles(gen);
    // Filtrar si es valido para generarlo
    matterRoot.find((element) => {
      if (element == "index.json") {
        data.push(gen);
      }
    });
  });
  return data;
};
export const getThemeGenerators = (matterGen: string) => {
  // Obtener todos las carpetas en @matterGen
  let generators = getFiles(matterGen);
  // Para omitir el archivo del Matter
  generators = generators.filter((gen) => gen != "index.json");
  let data: string[] = [];
  generators.forEach((gen) => {
    let themeRoot = getFiles(matterGen, gen);
    // Filtrar carpetas en @matterGen que sean validas para generarlos
    themeRoot.find((element) => {
      if (element == "index.json") {
        data.push(gen);
      }
    });
  });
  return data;
};
export const getSubThemeGenerators = (matterGen: string, themeGen: string) => {
  // Obtener todos los archivos en @matterGen -> @themeGen
  let generators = getFiles(matterGen, themeGen);
  // Filtrar los archivos .mdx para considerarlo un subTheme
  generators = generators.filter(
    (gen) => gen != "index.json" && gen.includes(".mdx")
  );
  // Para remover su extensión .mdx y retornar unicamente el generador
  generators = generators.map((gen) => gen.replace(".mdx", ""));
  return generators;
};

/**
 * * Para retornar objetos generados segun la informacion en los archivos
 * ! PARA TODOS LOS METODOS ALL
 * 1.- Obtener los generadores respecto al tipo que se quiere obtener (Matter, Theme, SubTheme)
 * 2.- Leer el archivo de validación según el tipo (Matter, Theme, SubTheme)
 * 3.- Convertir o parsear los datos obtenidos en 2)
 * 4.- Generar objetos de los respectivos datos en 3)
 * @ return : lista de objetos generados
 */
export const allSubThemes = (matterGen: string, themeGen: string) => {
  let generators = getSubThemeGenerators(matterGen, themeGen);
  const subthemes: SubTheme[] = [];
  generators.forEach((gen) => {
    try {
      const res = readFiles(matterGen, themeGen, `${gen}.mdx`);
      const parsed = matter(res);
      const data = parsed.data as SubThemeMD;

      const dataParse: SubTheme = {
        ...data,
        index: data.index != undefined ? data.index : 0,
        imgUrl: `/themes/${matterGen}/${themeGen}/${gen}/Icon.webp`,
        pageUrl: `/themes/${matterGen}/${themeGen}/${gen}`,
        gen: `${gen}`,
      };
      subthemes.push(dataParse);
    } catch (error) {
      console.log(
        "Hubo un error al generar los objetos en allSubThemes, verifique lo siguiente:\n-Existe el directirio de matterGen y themeGen.\n-Su directorio debe contener el archivo \"Gen\".mdx.\n-El archivo \"Gen\".mdx debe de tener en su encabezado un objeto del tipo SubThemeMD de TYpes.\nVerifique alguno de los anteriores se cumpla."
      );
    }
  });
  subthemes.sort((a, b) => a.index - b.index);
  return subthemes;
};

export const allThemes = (matterGen: string) => {
  let generators = getThemeGenerators(matterGen);
  const themes: generator[] = [];
  generators.forEach((gen) => {
    try {
      const res = readFiles(matterGen, gen, "index.json");
      let data = JSON.parse(res);
      data = {
        ...data,
        imgUrl: `/themes/${matterGen}/${gen}/Icon.webp`,
        pageUrl: `/themes/${matterGen}/${gen}`,
        gen: `${gen}`,
      };
      themes.push(data);
    } catch (error) {
      console.log(
        "Hubo un error al generar los objetos en allThemes, verifique lo siguiente:\n-Existe el directirio de matterGen.\n-Su directorio debe contener el archivo index.json.\n-El archivo index.json debe ser del tipo tener los atributos minimos para generar.\nVerifique alguno de los anteriores se cumpla."
      );
    }
  });
  return themes;
};

export const allMatters = () => {
  const generators = getMatterGenerators();
  //console.log(generators)
  const matters: generator[] = [];
  generators.forEach((gen) => {
    try {
      const res = readFiles(gen, "index.json");
      let data = JSON.parse(res);
      data = {
        ...data,
        imgUrl: `/themes/${gen}/Icon.webp`,
        pageUrl: `/themes/${gen}`,
        gen: `${gen}`,
      };
      matters.push(data);
    } catch (error) {
      console.log(
        "Hubo un error al generar los objetos en allMatters, verifique lo siguiente:\n-Existe el directirio contenido.\n-Su directorio debe contener el archivo index.json.\n-El archivo index.json debe ser del tipo tener los atributos minimos para generar.\nVerifique alguno de los anteriores se cumpla."
      );
    }
  });

  return matters;
};

/**
 * * Para obtener unicamente un solo Objeto según el tipo
 * ! PARA TODOS LOS GETTERS OBJTECT
 * 1.- Obtener todos los datos respecto al tipo (Matter, Theme, SubTheme)
 * 2.- Filtrar según el parámetro dado @generator -> obtener UN objeto
 * 3.- Si está en un nivel alto (Matter, Theme) -> Obtener su nivel inferior
 * 4.- Construir un nuevo objeto con los datos de 2) y / o 3)
 * @ return : Objeto con formato para el tipado (Matter, Theme, SubTheme)
 */
export const getSubTheme = (
  matterGen: string,
  themeGen: string,
  subThemeGen: string
) => {
  const subThemes = allSubThemes(matterGen, themeGen);
  const subThemeFind = subThemes.find((s) => s.gen == subThemeGen);
  return subThemeFind;
};
export const getTheme = (matterGen: string, themeGen: string) => {
  const themes = allThemes(matterGen);
  const themeFind = themes.find((theme) => theme.gen == themeGen);
  const subThemes = allSubThemes(matterGen, themeGen);
  return { ...themeFind, subThemes };
};
export const getMatter = (matterGen: string) => {
  const matters = allMatters();
  const matterFind = matters.find((matter) => matter.gen == matterGen);
  const themes: any[] = [];
  const themesGen = getThemeGenerators(matterGen);
  for (const gen of themesGen) {
    themes.push(getTheme(matterGen, gen));
  }
  return { ...matterFind, themes };
};
// ? Practicamente como allMatter pero formateado
export const allData = () => {
  const mattersGen = getMatterGenerators();
  const all: any[] = [];
  for (const gen of mattersGen) {
    all.push(getMatter(gen));
  }
  return all;
};

/**
 * * Para obtener los archivos .mdx de un theme
 * 1.- Obtener el archivo mdx en @matterGen -> @themeGen -> @subThemeGen
 * 2.- Obtener sus datos y contenido con 'matter'
 * 3.- Convertir el contenido para exportarlo
 * @ return : Objeto con formato para exportarlo y usarlo con MDXRemote
 */
export const getSource = async (
  matterGen: string,
  themeGen: string,
  subThemeGen: string
) => {
  const mdxSource = readFiles(`${matterGen}/${themeGen}/${subThemeGen}.mdx`);
  const { data, content } = matter(mdxSource);
  const source = await serialize(content, {});
  return {
    source,
    frontMatter: {
      ...data,
      subThemeGen,
    },
  };
};
