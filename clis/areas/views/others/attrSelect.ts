import { BaseArea } from "../../../../data/types/Area";
import { genArea } from "../../functions/validate";
const { Input } = require("enquirer");

/**
 * Funcion que recibe una instancia de un objeto BaseArea,
 * de la cual se extrae sus atributos y se presentan en un
 * menu de opciones para que el usuario seleccione el atributo
 */
export default async function editAttrArea<K extends keyof BaseArea>(
  attr: K,
  message: string,
  area: BaseArea
) {
  const props = new Input({
    name: "value",
    message: message,
    default: area[attr],
  });
  const value = await props.run();
  area[attr] = value;
}
