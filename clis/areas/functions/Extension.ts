import type { BaseArea } from "../../../data/types/Area";
import open from "open";
import { getDirsAreas } from "../../../lib/content/getGenerators";
import {
  contentDir,
  resourceDir,
  content,
  resource,
} from "../../../data/routes";
import { createArea, deleteArea } from "./CRUD";
import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

// Renombrar directorios manteniendo el historial de git
// ! Es necesario tener instalado git, esto se lo hace para mantener el historial de git
// ! y no tener cambios innecesarios en el repositorio respecto al cambio de nombre de los directorios
function renameArea(newDir: string, oldDir: string) {
  try {
    // Cambio para el historial de git
    spawnSync("git", ["mv", `${content}/${oldDir}`, `${content}/${newDir}`]);
    spawnSync("git", ["mv", `${resource}/${oldDir}`, `${resource}/${newDir}`]);
    // Cambio para los archivos locales
    const oldDirPath = path.join(contentDir, oldDir);
    const newDirPath = path.join(contentDir, newDir);
    if (fs.existsSync(oldDirPath)) {
      fs.renameSync(oldDirPath, newDirPath);
    }
    const oldDirSourcePath = path.join(resourceDir, oldDir);
    const newDirSourcePath = path.join(resourceDir, newDir);
    if (fs.existsSync(oldDirSourcePath)) {
      fs.renameSync(oldDirSourcePath, newDirSourcePath);
    }
  } catch (error) {
    console.log("Error al renombrar el area");
    console.log(error);
  }
}

// Inserta un area en el indice indicado, reordenando los indices de las areas que estan despues
export function insertArea(area: BaseArea) {
  const dirs = getDirsAreas();
  for (const dir of dirs) {
    const { index, generator, genName } = dir;
    if (index && generator && genName) {
      if (index >= area.index) {
        const newDir = `${index + 1}_${genName}`;
        const oldDir = generator;
        renameArea(newDir, oldDir);
      }
    }
  }
  createArea(area);
}

// Elimina un area del indice indicado, reacomodando los indices de las areas restantes
export function quitArea(area: BaseArea) {
  const dirs = getDirsAreas();
  for (const dir of dirs) {
    const { index, generator, genName } = dir;
    if (index && generator && genName) {
      if (index > area.index) {
        const newDir = `${index - 1}_${genName}`;
        const oldDir = generator;
        renameArea(newDir, oldDir);
      }
    }
  }
  deleteArea(area);
}

export function updateArea(area: BaseArea) {
  
}

// Funcion para abrir archivos del directorio de recursos
type Directory = "content" | "resource";
export async function openArea(type: Directory, ...args: string[]) {
  const dir = type === "content" ? contentDir : resourceDir;
  const filePath = path.join(dir, ...args);
  await open(filePath);
}
