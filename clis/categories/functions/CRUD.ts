import { getDataJson, setDataJson } from "./GetSetBase";
import type Category from "../../../data/types/Category";

//! Para todos los parametros (name) que se pasan a las funciones
//! se los convierte a minuscula para que no haya problemas con
//! la busqueda de la categoria

// Para usarlo en otros modulos.
export function getAllCategories(): Category[] {
  const data = getDataJson();
  return data;
}

/**
 * * Exist
 * Verificar si existe una categoria en la lista
 * @param name : Nombre de la categoria
 * @returns boolean si existe o no la categoria
 */
export function existCategory(name: string): boolean {
  const data = getDataJson();
  const exist = data.find(
    (category) => category.name.toLowerCase === name.toLowerCase
  );
  return exist ? true : false;
}

/**
 * * C
 * Crear una nueva categoria, siempre y cuando no exista
 * @param category : Objeto de tipo Category
 * @returns boolean si se creo o no la categoria
 */
export function createCategory(category: Category): boolean {
  if (existCategory(category.name)) {
    return false;
  }
  const data = getDataJson();
  data.push(category);
  setDataJson(data);
  return true;
}

/**
 * * R
 * Leer una categoria, siempre y cuando exista
 * @param name : Nombre de la categoria
 * @returns Objeto de tipo Category, puede ser undefined si no existe
 */
export function readCategory(name: string): Category | undefined {
  const data = getDataJson();
  const category = data.find(
    (category) => category.name.toLowerCase === name.toLowerCase
  );
  return category;
}

/**
 * * U
 * Actualizar una categoria, siempre y cuando exista, pero
 * no se puede actualizar el nombre de la categoria si
 * ya existe una categoria con ese nombre
 * @param name : Nombre de la categoria
 * @param category : Objeto de tipo Category
 * @returns boolean si se actualizo o no la categoria
 */
export function updateCategory(name: string, category: Category): boolean {
  if (!existCategory(name)) return false;
  if (existCategory(category.name)) return false;
  const data = getDataJson();
  const index = data.findIndex(
    (category) => category.name.toLowerCase === name.toLowerCase
  );
  data[index] = category;
  setDataJson(data);
  return true;
}

/**
 * * D
 * Eliminar una categoria, siempre y cuando exista
 * @param name : Nombre de la categoria
 * @returns boolean si se elimino o no la categoria
 */
export function deleteCategory(name: string): boolean {
  if (!existCategory(name)) return false;
  const data = getDataJson();
  const newData = data.filter(
    (category) => category.name.toLowerCase !== name.toLowerCase
  );
  setDataJson(newData);
  return true;
}
