import axios from "axios";
/**
 * * 1️⃣  METODO GET ALL
 * @param API : STRING - url de la página de la API a la que se haran peticiones
 * 1.- mandar una pedicion a la API para obtener todos los datos
 * 2.- mostrar los datos obtenidos
 * @return  retorna datos de la peticion
 */
export async function getElements(API, head = {}) {
  const { data: res } = await axios.get(API, head);
  return res.res
}

/**
 * * 2️⃣  METODO ADD_ELEMENT
 * !  3 niveles de agregacion:  [3]subTema => [2]Tema => [1]Materia  [composicion de objetos]
 * ?    ADD - materia   : agrega materia  | a => agregarMateria
 * ?    ADD - tema      : agrega tema     | a => buscarMateria => agregarTema
 * ?    ADD - subtema   : agrega subtema  | a => buscarMateria => buscarTema => agregarSubtema
 * @param head          : OBJECT - propiedades de la agregacion
 * ?    level           : NUMBER - nivel de agregacion [1] [2] [3]
 * ?    classID         : STRING - si [ level = 2 | 3 ] => agregar id del objeto contenedor
 * @param element       : OBJECT - objeto de tipo [1] | [2] | [3] que se agregara
 *      Ej addElment( { level: 3, matterID: 'mate', themeID: 'calc1' } , element );
 */
export async function addElement(API, head, element) {
  const res = await axios.post(API, { head: head, element: element });
  console.log(res);
}

/**
 * * 3️⃣  METODO EDIT_ELEMENT
 * !  3 niveles de agregacion:  [3]subTema => [2]Tema => [1]Materia  [composicion de objetos]
 * ?    PUT - materia : edita materia   | a => buscarMateria => editarMateria
 * ?    PUT - tema    : edita tema      | a => buscarMateria => buscarTema => editarTema
 * ?    PUT - subtema : edita subtema   | a => buscarMateria => buscarTema => buscarSubtema => editarSubtema
 * @param type        : OBJECT - propiedades para la edicion
 * ?    level         : NUMBER - nivel de agregacion [1] [2] [3]
 * ?    id_1          : STRING - si [ level = 1 ] => requiere [ id_1 = MATERIA.ID ]
 * ?    id_2          : STRING - si [ level = 2 ] => requiere [ id_1 = MATERIA.ID ] && [ id_2 = THEME.ID ]
 * ?    id_3          : STRING - si [ level = 3 ] => requiere [ id_1 = MATERIA.ID ] && [ id_2 = THEME.ID ] && [ id_3 = SUBTHEME.ID ]
 * @param element     : OBJECT - objeto de tipo [1] | [2] | [3] que se editara segun @type
 */
export async function editElement(mattersURL,head, element) {
  const res = await axios.put(mattersURL, { head: head, element: element });
  console.log(res);
}

/**
 * * 4️⃣  METODO DEL_ELEMENT
 * !  3 niveles de agregacion:  [3]subTema => [2]Tema => [1]Materia  [composicion de objetos]
 * ?    DELETE - materia  : elimina materia   | a => buscarMateria => borrarMateria
 * ?    DELETE - tema     : elimina tema      | a => buscarMateria => buscarTema => borrarTema
 * ?    DELETE - subtema  : elimina subtema   | a => buscarMateria => buscarTema => buscarSubtema => borrarSubtema
 * @param type            : OBJECT - propiedades para eliminacion
 * ?    level             : NUMBER - nivel del elemento al cual borrar [1] [2] [3]
 * ?    id                : STRING - id del elemento al cual borrar
 */
export async function delElement(mattersURL, head) {
  const res = await axios.delete(mattersURL, { data: head });
  console.log(res);
}
