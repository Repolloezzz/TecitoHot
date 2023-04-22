import type { BaseArea, FileArea } from "../../../data/types/Area";
import { getDirsAreas } from "../../../lib/content/getGenerators";
import { contentDir, sourceDir } from "../../../data/routes";
import { createArea } from "./CRUD";
import fs from "fs";
import path from "path";
import { exec } from "child_process";

// Renombrar directorios manteniendo el historial de git
function renameArea(newDir: string, oldDir: string) {
  try {
    const areaFiles = {
      old: path.join(contentDir, oldDir),
      new: path.join(contentDir, newDir),
    };
    const areaSource = {
      old: path.join(sourceDir, oldDir),
      new: path.join(sourceDir, newDir),
    };
    // Cambio para los archivos
    fs.renameSync(areaFiles.old, areaFiles.new);
    exec(`git mv ${areaFiles.old} ${areaFiles.new}`);
    // Cambio para los archivos fuente (img,videos,etc)
    fs.renameSync(areaSource.old, areaSource.new);
    exec(`git mv ${areaSource.old} ${areaSource.new}`);
  } catch (error) {
    console.log("Error al renombrar el area");
    console.log(error);
  }
}

// Inserta un area en el indice indicado
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
