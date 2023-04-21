import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "markdown");

// ! Todos los métodos solo retornan los nombres de los directorios o archivos validos
// ! Todos los archivos contiene el nombre index_nombreArchivo

// Valida si el directorio existe un archivo segun su tipo en .json
function validateDir(
  dir: string[],
  type: "area" | "theme" | "module" | "post"
) {
  const typePath = path.join(contentDir, ...dir, `${type}.json`);
  const typeExists = fs.existsSync(typePath);
  return typeExists;
}

interface IndexGenerator {
  index: number | null;
  generator: string | null;
}

// Retorna un array de arrays con el index y el nombre del area [index, generator]
function getIndexGenerator(dir: string): IndexGenerator {
  const index_generator = dir.split("_");
  return {
    index: parseInt(index_generator[0]) ? parseInt(index_generator[0]) : null,
    generator: index_generator[1] ? dir : null,
  };
}

// Retorna los directorios Area que contienen un archivo .json
export function getDirsAreas() : IndexGenerator[] {
  const areasDir = fs.readdirSync(contentDir);
  const dirs = areasDir.filter((item) => {
    return fs.statSync(path.join(contentDir, item)).isDirectory();
  });
  const areas = dirs.filter((dir) => validateDir([dir], "area"));

  const areasOrder = areas.map((area) => {
    return getIndexGenerator(area);
  });
  return areasOrder.filter(
    (area) => area.index != null && area.generator != null
  );
}
