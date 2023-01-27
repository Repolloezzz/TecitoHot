import * as fis from "./Fisica/index";
import * as inf from "./Informatica/index";
import * as mat from "./Matematica/index";
import * as mus from "./Musica/index";

const allData: any = [mat.matter, fis.matter, inf.matter, mus.matter];
const MatterThemes: any = [mat.index, fis.index, inf.index, mus.index];

export { allData, MatterThemes };
