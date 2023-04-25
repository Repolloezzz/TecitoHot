import axios from 'axios';
// Esta funcion recibe una busqueda (string) y una pagina (number) y devuelve una respuesta de la api de wikipedia
/**
 * Funcion que permite hacer una petición a la APi de wikipedia
 * para obtener el contenido de una pagina, dado un string de busqueda
 * y un numero de pagina
 * @param search : Palabra o frase a buscar
 * @param page : Numero de pagina o resultado a mostrar
 * @returns : Objeto con el contenido de la pagina
 */
export const search = async (
  search: string = 'hola mundo',
  page: number = 0
) => {
  // 1 Obtener los resultados de la busqueda
  const res = await axios.get(
    `https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=${search}&sroffset=${page}`
  );
  const resData = res.data;
  const pageTitle = resData.query.search[page].title;
  // 2 Obtener el contenido de la pagina
  const contentResponse = await axios.get(
    `https://es.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${pageTitle}&exintro=1&explaintext=1`
  );
  const pageId = Object.keys(contentResponse.data.query.pages)[0];
  const content = await contentResponse.data.query.pages[pageId];
  return content;
};
