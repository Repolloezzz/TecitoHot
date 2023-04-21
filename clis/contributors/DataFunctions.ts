import fs from "fs";
import path from "path";
import root from "../../data/routes";
import type Contributor from "../../data/types/Contributor";

//! --------- PARA LA LECTURA Y ESCRITURA DE LA BASE DE DATOS
const contributorsFile = path.join(root, "data", "contributors.json");

// La funcion getDataJson() retorna un array de objetos de tipo Contributor
export function getDataJson(): Contributor[] {
  const file = fs.readFileSync(contributorsFile).toString();
  return JSON.parse(file);
}

// La funcion setDataJson() recibe un array de objetos de tipo Contributor
export function setDataJson(data: Contributor[]) {
  const parseData = JSON.stringify(data);
  fs.writeFileSync(path.join(contributorsFile), parseData);
}

//! --------- PARA LAS OPERACIONES CRUD
/**
 * Buscar si el nombre del contribuidor existe en el archivo json
 * comparando sin importar mayúsculas y minúsculas
 * @param {string} name - El nombre del contribuidor
 * @returns {boolean} - Si existe o no el contribuidor
 */
export function isContributor(name: string): boolean {
  const contributors = getDataJson();
  const exist = contributors.some(
    (contributor) => contributor.name.toLowerCase() === name.toLowerCase()
  );
  return exist;
}

/**
 * Obtener todos los contribuidores del archivo json
 * @returns {Contributor[]} - Un array de tipo Contributor
 */
export function getAllContributors(): Contributor[] {
  const contributors = getDataJson();
  return contributors;
}

/**
 * Obtener unicamente un contribuidor del archivo json
 * @param {string} name - El nombre del contribuidor
 * @returns {Contributor | undefined} - Un objecto de tipo Contributor o undefined
 */
export function getContributor(name: string): Contributor | undefined {
  const contributors = getAllContributors();
  const contributor = contributors.find(
    (contributor) => contributor.name.toLowerCase() === name.toLowerCase()
  );
  return contributor;
}

/**
 * Agregar un nuevo objecto de tipo Contributor al archivo json
 * @param {Contributor} newContributor - El nuevo contribuidor
 */
export function addContributor(newContributor: Contributor) {
  const contributors = getDataJson();
  contributors.push(newContributor);
  setDataJson(contributors);
}

/**
 * Borra un contribuidor del archivo json
 * si el nombre del contribuidor existe en el archivo json
 * @param {string} name - El nombre del contribuidor
 * @returns {boolean} - Si se pudo borrar o no el contribuidor
 */
export function deleteContributor(name: string): boolean {
  let res = false;
  if (isContributor(name)) {
    const contributors = getAllContributors();
    const newContributors = contributors.filter(
      (contributor) => contributor.name.toLowerCase() !== name.toLowerCase()
    );
    setDataJson(newContributors);
    res = true;
  }
  return res;
}

/**
 * Editar un contribuidor del archivo json
 * solo si el nombre del contribuidor existe en el archivo json,
 * entonces se borra el contribuidor y se agrega el nuevo contribuidor editado
 * @param {string} name - El nombre del contribuidor
 * @param {Contributor} edit - El nuevo contribuidor editado
 * @returns {boolean} - Si se pudo editar o no el contribuidor
 */
export function editContributor(name: string, edit: Contributor): boolean {
  let res = false;
  if (isContributor(name)) {
    deleteContributor(name);
    addContributor(edit);
    res = true;
  }
  return res;
}
