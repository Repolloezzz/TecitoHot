import fs from 'fs';
import path from 'path';
import { rootMarkdown } from '../data/routes';

// Para filtrar carpetas con archivos index.json en un directorio dado
const filtrerGen = (route: string) => {
  const logs = fs.readdirSync(route, { withFileTypes: true });
  const gens = logs
    .filter((log) => log.isDirectory())
    .filter((carpet) => {
      const archJSON = path.join(route, carpet.name, 'index.json');
      return fs.existsSync(archJSON) && fs.statSync(archJSON).isFile();
    })
    .map((element) => element.name);
  return gens;
};

/**
 * * Obtener Todos las materias a generar.
 * Como tal recopila una lista de directorios y archivos de @rootMarkdown pero, se filtran
 * unicamente las carpetas que contengan un archivo index.json que es el requisito para
 * porder generarlos.
 * @returns : Lista de directorios que cumplen las condiciones para ser generados como MATTER
 */
const genAllMatters = () => {
  const route = rootMarkdown;
  return filtrerGen(route);
};

/**
 * * Obtener Todos los temas a generar.
 * Como tal recopila una lista de directorios y archivos de @rootMarkdown en un directorio dado
 * si es que existe claro, pero, se filtran unicamente las carpetas que contengan un archivo
 * index.json que es el requisito para porder generarlos.
 * @param matterGen : Nombre del directorio o generador donde se buscarán los temas
 * @returns : Lista de directorios que cumplen las condiciones para ser generados como THEME
 */
const genAllThemes = (matterGen: string) => {
  const route = path.join(rootMarkdown, matterGen);
  return filtrerGen(route);
};

/**
 * * Obtener todos los subtemas a generar.
 * Como tal recopila una lista de directorios y archivos de @rootMarkdown en un directorio dado
 * si es que existe claro, pero, se filtran unicamente las carpetas que contengan un archivo
 * index.json que es el requisito para porder generarlos.
 * @param matterGen : Nombre del directorio de Matter donde se buscará
 * @param themeGen : Nombre del directorio de Theme donde se buscará
 * @returns : Lista de directorios que cumplen las condiciones para ser generados como SUBTHEME
 */
const genAllSubThemes = (matterGen: string, themeGen: string) => {
  const route = path.join(rootMarkdown, matterGen, themeGen);
  return filtrerGen(route);
};

/**
 * * Obtener todos los contenidos a generar.
 * Como tal recopila una lista de directorios y archivos de @rootMarkdown en un directorio dado
 * si es que existe claro, pero, se filtran unicamente los archivos que terminen en .mdx
 * pues los mismo son las que se van a generar como contenido.
 * @param matterGen : Nombre del directorio de Matter donde se buscará
 * @param themeGen : Nombre del directorio de Theme donde se buscará
 * @param subThemeGen : Nombre del directorio de SubTheme donde se buscará
 * @returns : Lista de archivos que cumplen las condiciones para ser generados como CONTENT
 */
const genAllContents = (
  matterGen: string,
  themeGen: string,
  subThemeGen: string
) => {
  const route = path.join(rootMarkdown, matterGen, themeGen, subThemeGen);
  const files = fs.readdirSync(route);
  const gens = files.filter((file) => file.endsWith('.mdx'));
  return gens.map((gen) => gen.replace('.mdx', ''));
};

/**
 * * Buscar si existe un generador de Matter
 * @param matterGen : Nombre del generador de Matter que se busca
 * @returns : Si existe, entonces devuelve el nombre del generador, de lo contrario devuelve undefined
 */
const genMatter = (matterGen: string) => {
  const gens = genAllMatters();
  const data = gens.find((gen) => gen == matterGen);
  return data;
};
/**
 * * Buscar si existe un generador de Theme en un generador de Matter
 * @param matterGen : Nombre del generador de Matter en el que se busca
 * @param themeGen : Nombre del generador de Theme que se busca
 * @returns : Si existe, entonces devuelve el nombre del generador, de lo contrario devuelve undefined
 */
const genTheme = (matterGen: string, themeGen: string) => {
  const gens = genAllThemes(matterGen);
  const data = gens.find((gen) => gen == themeGen);
  return data;
};

/**
 * * Buscar si existe un generador de SubTheme en un generador de Theme y Matter
 * @param matterGen : Nombre del generador de Matter en el que se busca
 * @param themeGen : Nombre del generador de Theme en el que se busca
 * @param subThemeGen : Nombre del generador de SubTheme que se busca
 * @returns : Si existe, entonces devuelve el nombre del generador, de lo contrario devuelve undefined
 */
const genSubTheme = (
  matterGen: string,
  themeGen: string,
  subThemeGen: string
) => {
  const gens = genAllSubThemes(matterGen, themeGen);
  return gens.find((gen) => gen == subThemeGen);
};

const genContent = (
  matterGen: string,
  themeGen: string,
  subThemeGen: string,
  contentGen: string
) => {
  const gens = genAllContents(matterGen, themeGen, subThemeGen);
  return gens.find((gen) => gen == contentGen);
};

// Exportando todos las funciones
export {
  genAllMatters,
  genAllThemes,
  genAllSubThemes,
  genAllContents,
  genMatter,
  genTheme,
  genSubTheme,
  genContent,
};
