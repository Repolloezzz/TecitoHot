import axios from "axios";
// Esta funcion recibe una busqueda (string) y una pagina (number) y devuelve una respuesta de la api de wikipedia
export const search = async (search: string = 'hola mundo', page: number = 0) => {
  const res = await axios.get(
    `https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=${search}&sroffset=${page}`
  );
  const resData = res.data
  const pageTitle = resData.query.search[0].title;
  const contentResponse = await axios.get(
    `https://es.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${pageTitle}&exintro=1&explaintext=1`
  );
  const pageId = Object.keys(contentResponse.data.query.pages)[0]
  const content = contentResponse.data.query.pages[pageId]
  return content;
};
