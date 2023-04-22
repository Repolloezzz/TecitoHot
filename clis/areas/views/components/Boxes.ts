import boxen from "boxen";
import { MyTheme } from "./Text";
import type { BaseArea } from "../../../../data/types/Area";

export const viewAreaBox = (area: BaseArea) => {
  const { character, color, description, generator, index, name } = area;
  const prefixColor = MyTheme.secondary;
  const message = `
    ${prefixColor("Nombre del area")}: ${name}\n
    ${prefixColor("Descripcion del area")}: ${description}\n
    ${prefixColor("Personaje del area")}: ${character}\n
    ${prefixColor("Color del area")}: ${color}\n
    ${prefixColor("Generador del area")}: ${generator}\n
    ${prefixColor("Indice del area")}: ${index}\n`;
  const view = boxen(message, {
    title: "🎴 Vista previa del area",
    titleAlignment: "center",
    borderStyle: "round",
    padding: 1,
    borderColor: "yellowBright",
  });
  return view;
};

export const viewBox = (title: string, message: string) => {
  const view = boxen(message, {
    title,
    titleAlignment: "center",
    borderStyle: "round",
    padding: 1,
    borderColor: "yellowBright",
  });
  return view;
};
