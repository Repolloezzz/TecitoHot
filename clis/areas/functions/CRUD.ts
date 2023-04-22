import type { BaseArea, FileArea } from "../../../data/types/Area";
import { getDirsAreas } from "../../../lib/content/getGenerators";
import { contentDir, sourceDir } from "../../../data/routes";
import fs from "fs";
import path from "path";

// Retorna el numero de areas existentes
export function getAreasCount() {
  const areas = getDirsAreas();
  return areas.length;
}

// Crea un area
export function createArea(area: BaseArea) {
  try {
    const { index, generator, ...rest } = area;
    const areaPath = path.join(contentDir, generator);
    const areaSourcePath = path.join(sourceDir, generator);
    fs.mkdirSync(areaPath, { recursive: true });
    fs.mkdirSync(areaSourcePath, { recursive: true });
    const areaJsonPath = path.join(areaPath, "area.json");
    const dataForJson: FileArea = rest;
    fs.writeFileSync(areaJsonPath, JSON.stringify(dataForJson, null, 2));
  } catch (error) {
    console.log("Error al crear el area");
    console.log(error);
  }
}
