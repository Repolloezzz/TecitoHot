import type { BaseArea, Area } from "../../data/types/Area";
import { getDirsAreas } from "./getGenerators";
import fs from "fs";
import path from "path";

import { contentDir } from "../../data/routes";

// Para obtener un solo objeto base de area
export function getBaseArea(generatorName: string): BaseArea | undefined {
  const dirs = getDirsAreas();
  const exist = dirs.find((dir) => dir.generator === generatorName);
  if (exist) {
    const { index, generator } = exist;
    // Solo si existen
    if (index && generator) {
      const areaPath = path.join(contentDir, generator, "area.json");
      const area = fs.readFileSync(areaPath, "utf-8");
      const areaObject = JSON.parse(area) as BaseArea;
      return areaObject;
    }
  }
}

// Para obtener un todos los objetos base de areas
export function getAllBaseAreas(): BaseArea[] {
  const dirs = getDirsAreas();
  const baseAreas: BaseArea[] = [];
  for (const dir of dirs) {
    const { index, generator } = dir;
    if (index && generator) {
      const areaPath = path.join(contentDir, generator, "area.json");
      const area = fs.readFileSync(areaPath, "utf-8");
      const baseAreaObject = JSON.parse(area) as BaseArea;
      baseAreas.push({
        ...baseAreaObject,
        index,
        generator,
      });
    }
  }
  return baseAreas;
}

// TODO: Para obtener un objeto completo de tipo Area con {themes, url, image}