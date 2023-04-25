import { BaseArea } from "../../../data/types/Area";
import { getAllBaseAreas } from "../../../lib/content/getAreasObject";
import { getAreasCount } from "./CRUD";

function normalizeString(text: string) {
  const lowerText = text.toLowerCase();
  const normalizedText = lowerText
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return normalizedText;
}

export function existAreaByAttr<K extends keyof BaseArea>(
  attr: K,
  value: string | number
): boolean {
  const areas = getAllBaseAreas();
  const exist = areas.find(
    (area) =>
      normalizeString(area[attr].toString()) ==
      normalizeString(value.toString())
  );
  return !!exist;
}

/**
 * * Funcion que genera un objeto area con el generator
 * * si el generator esta vacio se genera con el index y el nombre
 * El generator es generador automaticamente
 * ? Usar unicamente en views del CLI
 */
export function genArea(area: BaseArea) {
  return {
    ...area,
    generator:
      area.generator == ""
        ? area.index + "_" + area.name.replace(" ", "")
        : area.index + "_" + area.generator,
  };
}

/**
 * Funcion que valida que los datos del objeto
 * - name
 * - character
 * - index
 * - generator
 * ? Utilizar unicamente en views del CLI para validar los datos
 */
export function validateData(area: BaseArea) {
  let res = { valid: true, msg: "Esto son los registros:\n" };
  const { name, character, index, generator } = area;
  if (existAreaByAttr("name", name)) {
    res.msg +=
      "-❌ El nombre ya existe, o es el mismo pero con caracteres especiales\n";
    res.valid = false;
  } else {
    if (name == "" || name.includes("  ")) {
      res.msg +=
        "-❌ El nombre no es valido, no puede estar vacio ni tener más de dos espacios\n";
      res.valid = false;
    } else {
      res.msg += "-✅ El nombre no existe\n";
    }
  }

  if (existAreaByAttr("character", character)) {
    res.msg +=
      "-❌ El personaje ya existe, o es el mismo pero con caracteres especiales\n";
    res.valid = false;
  } else {
    if (character == "" || character.includes("  ")) {
      res.msg +=
        "-❌ El personaje no es valido, no puede estar vacio ni tener más de dos espacios\n";
      res.valid = false;
    } else {
      res.msg += "-✅ El personaje no existe\n";
    }
  }

  if (existAreaByAttr("index", index)) {
    res.msg += "-💠 El indice ya existe, entonces se puede insertar\n";
  } else {
    if (index >= 1 && index <= getAreasCount() + 1) {
      res.msg += "-✅ El indice no existe\n";
    } else {
      res.msg +=
        "-❌ El indice no es valido, debe ser mayor igual a 1 y menor igual a " +
        (getAreasCount() + 1) +
        "\n";
      res.valid = false;
    }
  }

  if (existAreaByAttr("generator", generator)) {
    res.msg +=
      "-❌ El generator ya existe, o es el mismo pero con caracteres especiales\n";
    res.valid = false;
  } else {
    res.msg += "-✅ El generator no existe\n";
  }
  return res;
}
