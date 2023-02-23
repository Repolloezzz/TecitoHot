import type { generator, SubTheme } from "../Types";
import { routes } from "../routes";

// Para traer datos
// console.log(getAllFilesMetaData("markdown/Matematica/AlgebraLineal"))


const Patter = routes["matematica"];
const root = "AlgebraLineal";

const index: generator = {
  name: "Algebra Lineal",
  imgUrl: `${Patter}/${root}/Icon.webp`,
  pageUrl: `${Patter}/${root}`,
  description:
    "El álgebra lineal es fundamental en casi todas las áreas de las matemáticas. Por ejemplo, el álgebra lineal es fundamental en las presentaciones modernas de la geometría, incluso para definir objetos básicos como líneas, planos y rotaciones. Además, el análisis funcional, una rama del análisis matemático, puede considerarse básicamente como la aplicación del álgebra lineal al espacios de funciones.",
  gen: root,
};

// pageUrl: `${Patter}/${root}/SistemasDeEcuaciones`,

const subThemes: SubTheme[] = [
  {
    name: "Sistema de Ecuaciones",
    imgUrl: "",
    pageUrl: `${Patter}/${root}/SistemasDeEcuaciones`,
    description: "",
    gen: "SistemasDeEcuaciones",
    sections: [
      "ecuaciones lineales",
      "conjunto solución",
      "sistemas de ecuaciones",
      "operaciones elementales",
      "resolucion de un sistema",
      "metodos de reduccion",
    ],
  },
  {
    name: "Matrices y vectores",
    imgUrl: "",
    pageUrl: `${Patter}/${root}/Matrices`,
    description: "",
    gen: "Matrices",
    sections: [],
  },
  {
    name: "Determinantes",
    imgUrl: "",
    pageUrl: `${Patter}/${root}/Determinantes`,
    description: "",
    gen: "Determinantes",
    sections: [],
  },
  {
    name: "Operaciones vectoriales",
    imgUrl: "",
    pageUrl: `${Patter}/${root}/Vectores`,
    description: "",
    gen: "Vectores",
    sections: [],
  },
  {
    name: "Espacios vercoriales",
    imgUrl: "",
    pageUrl: `${Patter}/${root}/EspaciosVectoriales`,
    description: "",
    gen: "EspaciosVectoriales",
    sections: [],
  },
  {
    name: "Espacios con producto interno",
    imgUrl: "",
    pageUrl: `${Patter}/${root}/EspaciosProductoInterno`,
    description: "",
    gen: "EspaciosProductoInterno",
    sections: [],
  },
  {
    name: "Transformaciones Lineales",
    imgUrl: "",
    pageUrl: `${Patter}/${root}/TransformacionesLineales`,
    description: "",
    gen: "TransformacionesLineales",
    sections: [],
  },
  {
    name: "Valores característicos y canonicos",
    imgUrl: "",
    pageUrl: `${Patter}/${root}/ValoresCaracteristicos`,
    description: "",
    gen: "ValoresCaracteristicos",
    sections: [],
  },
];

const all = {
  ...index,
  subThemes,
};

export { index, subThemes, all };
