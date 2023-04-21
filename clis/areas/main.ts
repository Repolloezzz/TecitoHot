import { getAllBaseAreas } from "../../lib/content/getAreasObject";
import { createArea } from "./functions/CRUD";
import type { BaseArea, Area } from "../../data/types/Area";

const area: BaseArea = {
  name: "Area 1",
  description: "Area 1 description",
  character: "Area 1 character",
  index: 2,
  generator: "2_area",
  color: "red",
};

createArea(area);