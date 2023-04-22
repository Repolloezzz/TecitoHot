import { getAllBaseAreas } from "../../../../lib/content/getAreasObject";
import type { BaseArea } from "../../../../data/types/Area";
const { AutoComplete } = require("enquirer");

export async function searchByAttr<K extends keyof BaseArea>(
  attr: K,
  message: string
) {
  const allAreas = getAllBaseAreas();
  const prompt = new AutoComplete({
    name: `area-${attr}`,
    message,
    limit: 4,
    choices: allAreas.map((area) => area[attr]),
  });
  const areaAttr = await prompt.run();
  return allAreas.find((area) => area[attr] === areaAttr);
}
