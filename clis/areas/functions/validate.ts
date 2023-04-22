import { getAllBaseAreas } from "../../../lib/content/getAreasObject";

export function existAreaByName(name: string): boolean {
  const areas = getAllBaseAreas();
  const exist = areas.find((area) => area.name === name);
  return !!exist;
}

export function existAreaByGenerator(generator: string): boolean {
  const areas = getAllBaseAreas();
  const exist = areas.find((area) => area.generator === generator);
  return !!exist;
}

export function existAreaByIndex(index: number): boolean {
  const areas = getAllBaseAreas();
  const exist = areas.find((area) => area.index === index);
  return !!exist;
}

export function existAreaByCharacter(character: string): boolean {
  const areas = getAllBaseAreas();
  const exist = areas.find((area) => area.character === character);
  return !!exist;
}
