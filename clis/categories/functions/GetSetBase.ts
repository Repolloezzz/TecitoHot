import fs from "fs";
import path from "path";
import root from "../../../data/routes";
import Category from "../../../data/types/Category";

//! Getter and Setter for the JSON file
const contributorsFile = path.join(root, "data", "contributors.json");

// La funcion getDataJson() retorna un array de objetos de tipo Category
export function getDataJson(): Category[] {
  try {
    const file = fs.readFileSync(contributorsFile).toString();
    return JSON.parse(file);
  } catch (error) {
    return [];
  }
}

// La funcion setDataJson() recibe un array de objetos de tipo Category
export function setDataJson(data: Category[]): void {
  try {
    const parseData = JSON.stringify(data);
    fs.writeFileSync(path.join(contributorsFile), parseData);
  } catch (error) {
    console.log(error);
  }
}