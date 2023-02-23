import * as fis from "./Fisica/index";
import * as inf from "./Informatica/index";
import * as mat from "./Matematica/index";
import * as mus from "./Musica/index";
import * as est from './Estadistica/index'
////import * as tec from './Tecnologias/index'

const allData: any = [mat.matter, fis.matter, inf.matter, mus.matter, est.matter];
const MatterThemes: any = [mat.index, fis.index, inf.index, mus.index, est.index];

export { allData, MatterThemes };
