import type { BaseArea, Area } from "../../../data/types/Area";
import { contentDir } from "@/data/routes";
import fs from "fs";
import path from "path";

export function createArea( area: BaseArea ) {
    fs.mkdirSync(path.join(contentDir, area.generator), { recursive: true });
}
